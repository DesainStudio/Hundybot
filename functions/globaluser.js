const globalUserModel = require('../models/globaluser');

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = async(userId) => {
    const data = await globalUserModel.findOne({ where: { userId } })
    if (!data?.userId) {
        return {
          userId,
            "messages": 0,
            "level": 0,
            "xp": 2,
            "userxp": 0,
            "xpbooster": 0,
            "nextxp": 500,
            "banned": false
        }
    } else {
        return data
    }
}

exports.edt = async(userId, json) => {
    const data = await globalUserModel.findOne({ where: { userId } })
    if (!data?.userId) {
        return globalUserModel.create({
            userId,
            messages: ('messages' in json) ? json.messages.val : 0,
            level: ('level' in json) ? json.level.val : 0,
            xp: ('xp' in json) ? json.xp.val : 2,
            userxp: ('userxp' in json) ? json.userxp.val : 0,
            xpbooster: ('xpbooster' in json) ? json.xpbooster.val : 0,
            nextxp: ('nextxp' in json) ? json.nextxp.val : 500,
            banned: ('banned' in json) ? json.banned.val : false
        })
    } else {
        let newData = {}
        if ('messages' in json) newData.messages = process(json.messages.opt, data.messages, json.messages.val)
        if ('level' in json) newData.level = process(json.level.opt, data.level, json.level.val)
        if ('xp' in json) newData.xp = process(json.xp.opt, data.xp, json.xp.val)
        if ('userxp' in json) newData.userxp = process(json.userxp.opt, data.userxp, json.userxp.val)
        if ('xpbooster' in json) newData.xpbooster = process(json.xpbooster.opt, data.xpbooster, json.xpbooster.val)
        if ('nextxp' in json) newData.nextxp = process(json.nextxp.opt, data.nextxp, json.nextxp.val)
        if ('banned' in json) newData.banned = process(json.banned.opt, data.banned, json.banned.val)

        return globalUserModel.update(newData, {
            where: { userId }
        })
    }
}


exports.del = (userId) => {
    return globalUserModel.destroy({ where: { userId } })
}