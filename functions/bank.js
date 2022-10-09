const bankSchema = require('../schemas/UserSchema2');

exports.get = (userId) => new Promise(async ful => {
    const data = await bankSchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.bank);
})

exports.set = (userId, bank) => {
    bankSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.bank = bank;
        } else {
            data = new bankSchema({
                userId,
                bank
            })
        }
        data.save();
    })
}

exports.add = (userId, bank) => {
    bankSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.bank += bank;
        } else {
            data = new bankSchema({
                userId,
                bank
            })
        }
        data.save();
    })
}

exports.rem = (userId, bank) => {
    bankSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.bank -= bank;
        } else {
            data = new bankSchema({
                userId,
                bank: -bank
            })
        }
        data.save();
    })
}