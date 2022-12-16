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
                "bank": 0,
                "kredit": 0,
                "sparbuch": 0,
                "bitcoin": 0,
                "abitcoin": false,
                "mine": 1,
                "banned": false,
                "update": false,
                "bugfix": false
            })
        } else {
            return ful({
                "money": data.money,
                "bank": data.bank,
                "kredit": data.kredit,
                "sparbuch": data.sparbuch,
                "bitcoin": data.bitcoin,
                "abitcoin": data.abitcoin,
                "mine": data.mine,
                "banned": data.banned,
                "update": data.update,
                "bugfix": data.bugfix
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
                bank: ('bank' in json) ? json.bank.val : 0,
                kredit: ('kredit' in json) ? json.kredit.val : 0,
                sparbuch: ('sparbuch' in json) ? json.sparbuch.val : 0,
                bitcoin: ('bitcoin' in json) ? json.bitcoin.val : 0,
                abitcoin: ('abitcoin' in json) ? json.abitcoin.val : false,
                mine: ('mine' in json) ? json.mine.val : 1,
                banned: ('banned' in json) ? json.banned.val : false,
                update: ('update' in json) ? json.update.val : false,
                bugfix: ('bugfix' in json) ? json.bugfix.val : false,
            })
        } else {
            if ('money' in json) data.money = process(json.money.opt, data.money, json.money.val)
            if ('bank' in json) data.bank = process(json.bank.opt, data.bank, json.bank.val)
            if ('kredit' in json) data.kredit = process(json.kredit.opt, data.kredit, json.kredit.val)
            if ('sparbuch' in json) data.sparbuch = process(json.sparbuch.opt, data.sparbuch, json.sparbuch.val)
            if ('bitcoin' in json) data.bitcoin = process(json.bitcoin.opt, data.bitcoin, json.bitcoin.val)
            if ('abitcoin' in json) data.abitcoin = process(json.abitcoin.opt, data.abitcoin, json.abitcoin.val)
            if ('mine' in json) data.mine = process(json.mine.opt, data.mine, json.money.val)
            if ('banned' in json) data.banned = process(json.banned.opt, data.banned, json.banned.val)
            if ('update' in json) data.update = process(json.update.opt, data.update, json.update.val)
            if ('bugfix' in json) data.bugfix = process(json.bugfix.opt, data.bugfix, json.bugfix.val)
        }

        data.save()
    })
}

exports.del = (userId) => {
    economySchema.findOneAndDelete({ userId }, async (err, data) => {}) 
}