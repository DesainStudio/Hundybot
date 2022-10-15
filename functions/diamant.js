const diamantSchema = require('../schemas/diamant');

exports.get = (userId) => new Promise(async ful => {
    const data = await diamantSchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.diamant);
})

exports.set = (userId, diamant) => {
    diamantSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.diamant = diamant;
        } else {
            data = new diamantSchema({
                userId,
                diamant
            })
        }
        data.save();
    })
}

exports.add = (userId, diamant) => {
    diamantSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.diamant += diamant;
        } else {
            data = new diamantSchema({
                userId,
                diamant
            })
        }
        data.save();
    })
}

exports.rem = (userId, diamant) => {
    diamantSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.diamant -= diamant;
        } else {
            data = new diamantSchema({
                userId,
                diamant: -diamant
            })
        }
        data.save();
    })
}