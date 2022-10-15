const kreditSchema = require('../schemas/kredit');

exports.get = (userId) => new Promise(async ful => {
    const data = await kreditSchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.kredit);
})

exports.set = (userId, kredit) => {
    kreditSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.kredit = kredit;
        } else {
            data = new kreditSchema({
                userId,
                kredit
            })
        }
        data.save();
    })
}

exports.add = (userId, kredit) => {
    kreditSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.kredit += kredit;
        } else {
            data = new kreditSchema({
                userId,
                kredit
            })
        }
        data.save();
    })
}

exports.rem = (userId, kredit) => {
    kreditSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.kredit -= kredit;
        } else {
            data = new kreditSchema({
                userId,
                kredit: -kredit
            })
        }
        data.save();
    })
}