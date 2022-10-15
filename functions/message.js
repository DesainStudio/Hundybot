const messageSchema = require('../schemas/message');

exports.get = (userId) => new Promise(async ful => {
    const data = await messageSchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.message);
})

exports.set = (userId, message) => {
    messageSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.message = message;
        } else {
            data = new messageSchema({
                userId,
                message
            })
        }
        data.save();
    })
}

exports.add = (userId, message) => {
    messageSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.message += message;
        } else {
            data = new messageSchema({
                userId,
                message
            })
        }
        data.save();
    })
}

exports.rem = (userId, message) => {
    messageSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.message -= message;
        } else {
            data = new messageSchema({
                userId,
                message: -message
            })
        }
        data.save();
    })
}