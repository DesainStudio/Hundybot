const channelSchema = require('../schemas/channel');

exports.get = (serverId) => new Promise(async ful => {
    const data = await channelSchema.findOne({ serverId });
    if(!data) return ful(0);
    ful(data.channelId);
})

exports.set = (serverId, channelId) => {
    channelSchema.findOne({ serverId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.channelId = channelId;
        } else {
            data = new channelSchema({
                serverId,
                channelId
            })
        }
        data.save();
    })
}

exports.add = (serverId, channelId) => {
    channelSchema.findOne({ serverId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.channelId += channelId;
        } else {
            data = new channelSchema({
                serverId,
                channelId
            })
        }
        data.save();
    })
}

exports.rem = (serverId, channelId) => {
    channelSchema.findOne({ serverId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.channelId -= channelId;
        } else {
            data = new channelSchema({
                serverId,
                channelId: -channelId
            })
        }
        data.save();
    })
}