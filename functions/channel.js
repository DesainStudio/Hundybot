const channelModel = require('../models/channel');

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = async(serverId) => {
    const data = await channelModel.findOne({ where: { serverId } })
    if (!data?.serverId) {
        return {
            "channelId": 0
        }
    } else {
        return data
    }
}

exports.edt = async(serverId, json) => {
    const data = await channelModel.findOne({ where: { serverId } })
    if (!data?.serverId) {
        return channelModel.create({
            serverId,
            channelId: ('channelId' in json) ? json.channelId.val : 0
        })
    } else {
        let newData = {}
        if ('channelId' in json) newData.channelId = process(json.channelId.opt, data.channelId, json.channelId.val)

        return channelModel.update(newData, {
            where: { serverId }
        })
    }
}


exports.del = (serverId) => {
    return channelModel.destroy({ where: { serverId } })
}