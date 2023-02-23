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
                "sparbuch": 0,
                "bitcoin": 0,
                "abitcoin": false,
                "bitcoinprice": 1,
                "mine": 1,
                "unternehmen": false,
                "unternehmensname": "None",
                "unternehmenskonto": 250000,
                "lageropt": true,
                "lager": 100,
                "lagerplatz": 100,
                "unternehmenid": 0,
                "banned": false,
                "update": false,
                "bugfix": false
            })
        } else {
            return ful({
                "money": data.money,
                "bank": data.bank,
                "sparbuch": data.sparbuch,
                "bitcoin": data.bitcoin,
                "abitcoin": data.abitcoin,
                "bitcoinprice": data.bitcoinprice,
                "mine": data.mine,
                "unternehmen": data.unternehmen,
                "unternehmensname": data.unternehmensname,
                "unternehmenskonto": data.unternehmenskonto,
                "lageropt": data.lageropt,
                "lager": data.lager,
                "lagerplatz": data.lagerplatz,
                "unternehmenid": data.unternehmenid,
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
                sparbuch: ('sparbuch' in json) ? json.sparbuch.val : 0,
                bitcoin: ('bitcoin' in json) ? json.bitcoin.val : 0,
                abitcoin: ('abitcoin' in json) ? json.abitcoin.val : false,
                bitcoinprice: ('bitcoinprice' in json) ? json.bitcoinprice : 1,
                mine: ('mine' in json) ? json.mine.val : 1,
                unternehmen: ('unternehmen' in json) ? json.unternehmen.val: false,
                unternehmensname: ('unternehmensname' in json) ? json.unternehmensname.val: "None",
                unternehmenskonto: ('unternehmenskonto' in json) ? json.unternehmenid.val: 250000,
                lageropt: ('lageropt' in json) ? json.lageropt.val: true,
                lager: ('lager' in json) ? json.lager.val: 100,
                lagerplatz: ('lagerplatz' in json) ? json.lagerplatz.val: 100,
                unternehmenid: ('unternehmenid' in json) ? json.unternehmenid.val: 0,
                banned: ('banned' in json) ? json.banned.val : false,
                update: ('update' in json) ? json.update.val : false,
                bugfix: ('bugfix' in json) ? json.bugfix.val : false,
            })
        } else {
            if ('money' in json) data.money = process(json.money.opt, data.money, json.money.val)
            if ('bank' in json) data.bank = process(json.bank.opt, data.bank, json.bank.val)
            if ('sparbuch' in json) data.sparbuch = process(json.sparbuch.opt, data.sparbuch, json.sparbuch.val)
            if ('bitcoin' in json) data.bitcoin = process(json.bitcoin.opt, data.bitcoin, json.bitcoin.val)
            if ('abitcoin' in json) data.abitcoin = process(json.abitcoin.opt, data.abitcoin, json.abitcoin.val)
            if ('bitcoinprice' in json) data.bitcoinprice = process(json.bitcoinprice.opt, data.bitcoinprice, json.bitcoinprice.val)
            if ('mine' in json) data.mine = process(json.mine.opt, data.mine, json.mine.val)
            if ('unternehmen' in json) data.unternehmen = process(json.unternehmen.opt, data.unternehmen, json.unternehmen.val)
            if ('unternehmensname' in json) data.unternehmensname = process(json.unternehmensname.opt, data.unternehmensname, json.unternehmensname.val)
            if ('unternehmenskonto' in json) data.unternehmenskonto = process(json.unternehmenskonto.opt, data.unternehmenskonto, json.unternehmenskonto.val)
            if ('lageropt' in json) data.lageropt = process(json.lageropt.opt, data.lageropt, json.lageropt.val)
            if ('lager' in json) data.lager = process(json.lager.opt, data.lager, json.lager.val)
            if ('lagerplatz' in json) data.lagerplatz = process(json.lagerplatz.opt, data.lagerplatz, data.lagerplatz.val)
            if ('unternehmenid' in json) data.unternehmenid = process(json.unternehmenid.opt, data.unternehmenid, json.unternehmenid.val)
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