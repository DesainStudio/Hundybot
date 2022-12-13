const economy2Schema = require('../schemas/economy');

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = (userId) => new Promise(async(ful) => {
    economy2Schema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            return ful({
                "money": 0,
                "bank": 0,
                "kredit": 0,
                "sparbuch": 0
            })
        } else {
            return ful({
                "money": data.money,
                "bank": data.bank,
                "kredit": data.kredit,
                "sparbuch": data.sparbuch
            })
        }
    })
})

exports.edt = async(userId, json) => {
    economy2Schema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            data = new economy2Schema({
                userId,
                money: ('money' in json) ? json.money.val : 0,
                bank: ('bank' in json) ? json.bank.val : 0,
                kredit: ('kredit' in json) ? json.kredit.val : 0,
                sparbuch: ('sparbuch' in json) ? json.sparbuch.val : 0
            })
        } else {
            if ('money' in json) data.money = process(json.money.opt, data.money, json.money.val)
            if ('bank' in json) data.bank = process(json.bank.opt, data.bank, json.bank.val)
            if ('kredit' in json) data.kredit = process(json.kredit.opt, data.kredit, json.kredit.val)
            if ('sparbuch' in json) data.sparbuch = process(json.sparbuch.opt, data.sparbuch, json.sparbuch.val)
        }

        data.save()
    })
}

exports.del = (userId) => {
    economy2Schema.findOneAndDelete({ userId }, async (err, data) => {}) 
}