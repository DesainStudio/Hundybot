const economyModel = require('../models/economy');

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = async(userId) => {
    const data = await economyModel.findOne({ where: { userId } })
    if (!data?.userId) {
        return {
            "userName": "",
            "userTag": 0,
            "userAvatar": "",
            "dashboardToken": "",
            "accessToken": "",
            "refreshToken": ""
        }
    } else {
        return data
    }
}

exports.edt = async(userId, json) => {
    const data = await economyModel.findOne({ where: { userId } })
    if (!data?.userId) {
        return economyModel.create({
            userId,
            userName: ('userName' in json) ? json.userName.val : "",
            userTag: ('userTag' in json) ? json.userTag.val : 0,
            userAvatar: ('userAvatar' in json) ? json.userAvatar.val : "",
            dashboardToken: ('dashboardToken' in json) ? json.dashboardToken.val : "",
            accessToken: ('accessToken' in json) ? json.accessToken.val : "",
        })
    } else {
        let newData = {}
        if ('userName' in json) newData.userName = process(json.userName.opt, data.userName, json.userName.val)
        if ('userTag' in json) newData.userTag = process(json.userTag.opt, data.userTag, json.userTag.val)
        if ('userAvatar' in json) newData.userAvatar = process(json.userAvatar.opt, data.userAvatar, json.userAvatar.val)
        if ('dashboardToken' in json) newData.dashboardToken = process(json.dashboardToken.opt, data.dashboardToken, json.dashboardToken.val)
        if ('accessToken' in json) newData.accessToken = process(json.accessToken.opt, data.accessToken, json.accessToken.val)

        return economyModel.update(newData, {
            where: { userId }
        })
    }
}


exports.del = (userId) => {
    return economyModel.destroy({ where: { userId } })
}