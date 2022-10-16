const warnSchema = require('../schemas/warn');

exports.get = (userId) => new Promise(async ful => {
    const data = await warnSchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.warn);
})

exports.set = (userId, warn) => {
    warnSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.warn = warn;
        } else {
            data = new warnSchema({
                userId,
                warn
            })
        }
        data.save();
    })
}

exports.add = (userId, warn) => {
    warnSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.warn += warn;
        } else {
            data = new warnSchema({
                userId,
                warn
            })
        }
        data.save();
    })
}

exports.rem = (userId, warn) => {
    warnSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.warn -= warn;
        } else {
            data = new warnSchema({
                userId,
                warn: -warn
            })
        }
        data.save();
    })
}