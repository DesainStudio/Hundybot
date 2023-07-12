const economyModel = require('../models/economy');

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = async(userId) => {
    const data = await economyModel.findOne({ where: { userId } })
    if (!data?.userId) {
        return {
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
        }
    } else {
        return data
    }
}

exports.edt = async(userId, json) => {
    const data = await economyModel.findOne({ where: { userId } })
    if (!data?.userId) {
        return economyModel.create({
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
        let newData = {}
        if ('money' in json) newData.money = process(json.money.opt, data.money, json.money.val)
        if ('bank' in json) newData.bank = process(json.bank.opt, data.bank, json.bank.val)
        if ('sparbuch' in json) newData.sparbuch = process(json.sparbuch.opt, data.sparbuch, json.sparbuch.val)
        if ('bitcoin' in json) newData.bitcoin = process(json.bitcoin.opt, data.bitcoin, json.bitcoin.val)
        if ('abitcoin' in json) newData.abitcoin = process(json.abitcoin.opt, data.abitcoin, json.abitcoin.val)
        if ('bitcoinprice' in json) newData.bitcoinprice = process(json.bitcoinprice.opt, data.bitcoinprice, json.bitcoinprice.val)
        if ('mine' in json) newData.mine = process(json.mine.opt, data.mine, json.mine.val)
        if ('unternehmen' in json) newData.unternehmen = process(json.unternehmen.opt, data.unternehmen, json.unternehmen.val)
        if ('unternehmensname' in json) newData.unternehmensname = process(json.unternehmensname.opt, data.unternehmensname, json.unternehmensname.val)
        if ('unternehmenskonto' in json) newData.unternehmenskonto = process(json.unternehmenskonto.opt, data.unternehmenskonto, json.unternehmenskonto.val)
        if ('lageropt' in json) newData.lageropt = process(json.lageropt.opt, data.lageropt, json.lageropt.val)
        if ('lager' in json) newData.lager = process(json.lager.opt, data.lager, json.lager.val)
        if ('lagerplatz' in json) newData.lagerplatz = process(json.lagerplatz.opt, data.lagerplatz, data.lagerplatz.val)
        if ('unternehmenid' in json) newData.unternehmenid = process(json.unternehmenid.opt, data.unternehmenid, json.unternehmenid.val)
        if ('banned' in json) newData.banned = process(json.banned.opt, data.banned, json.banned.val)
        if ('update' in json) newData.update = process(json.update.opt, data.update, json.update.val)
        if ('bugfix' in json) newData.bugfix = process(json.bugfix.opt, data.bugfix, json.bugfix.val)

        return economyModel.update(newData, {
            where: { userId }
        })
    }
}


exports.del = (userId) => {
    return economyModel.destroy({ where: { userId } })
}