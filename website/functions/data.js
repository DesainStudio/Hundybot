const economySchema = require('../schemas/economy');

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = (userId) => new Promise(async(ful) => {
    economySchema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            return ful({
                "money": 0,
            })
        } else {
            return ful({
                "money": data.money,
            })
        }
    })
})

exports.edt = async(userId, json) => {
    economySchema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            data = new economySchema({
                userId,
                money: ('money' in json) ? json.money.val : 0,
            })
        } else {
            if ('money' in json) data.money = process(json.money.opt, data.money, json.money.val)
        }

        data.save()
    })
}

exports.del = (userId) => {
    economySchema.findOneAndDelete({ userId }, async (err, data) => {}) 
}