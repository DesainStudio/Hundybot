const userSchema = require('../schemas/user');

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = (userId) => new Promise(async(ful) => {
    userSchema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            return ful({
              "userId": '',
              "userName": '',
              "userTag": 0,
              "userAvatar": '',
              "dashboardToken": '',
              "accessToken": '',
              "refreshToken": ''
            })
        } else {
            return ful({
              "userId": data.userId,
              "userName": data.userName,
              "userTag": data.userTag,
              "userAvatar": data.userAvatar,
              "dashboardToken": data.dashboardToken,
              "accessToken": data.accessToken,
              "refreshToken": data.refreshToken
            })
        }
    })
})

exports.edt = async(userId, json) => {
    userSchema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            data = new userSchema({
                userId,
                userName: ('userName' in json) ? json.userName.val: '',
                userTag: ('userTag' in json) ? data.userTag.val: '',
                userAvatar: ('userAvatar' in json) ? data.userAvatar.val: '',
                dashboardToken: ('dashboardToken' in json) ? data.dashboardToken.val: '',
                accessToken: ('accessToken' in json) ? data.accessToken.val: '',
                refreshToken: ('refreshToken' in json) ? data.refreshToken.val: '',
            })
        } else {
            if ('userName' in json) data.userName = process(json.userName.opt, data.userName, json.userName.val)
            if ('userTag' in json) data.userTag = process(json.userTag.opt, data.userTag, json.userTag.val)
            if ('userAvatar' in json) data.userAvatar = process(json.userAvatar.opt, data.userAvatar, json.userAvatar.val)
            if ('dashboardToken' in json) data.dashboardToken = process(json.dashboardToken.opt, data.dashboardToken, json.dashboardToken.val)
            if ('accessToken' in json) data.accessToken = process(json.accessToken.opt, data.accessToken, json.accessToken.val)
            if ('refreshToken' in json) data.refreshToken = process(json.refreshToken.opt, data.refreshToken, json.refreshToken.val)
        }

        data.save()
    })
}

exports.del = (userId) => {
    userSchema.findOneAndDelete({ userId }, async (err, data) => {}) 
}