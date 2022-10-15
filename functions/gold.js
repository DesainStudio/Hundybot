const goldSchema = require('../schemas/gold');

exports.get = (userId) => new Promise(async ful => {
    const data = await goldSchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.gold);
})

exports.set = (userId, gold) => {
    goldSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.gold = gold;
        } else {
            data = new goldSchema({
                userId,
                gold
            })
        }
        data.save();
    })
}

exports.add = (userId, gold) => {
    goldSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.gold += gold;
        } else {
            data = new goldSchema({
                userId,
                gold
            })
        }
        data.save();
    })
}

exports.rem = (userId, gold) => {
    goldSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.gold -= gold;
        } else {
            data = new goldSchema({
                userId,
                gold: -gold
            })
        }
        data.save();
    })
}