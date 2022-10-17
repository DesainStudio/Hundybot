const economySchema = require('../schemas/economy');

exports.set = (userId, map) => {
    economySchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('money')) { data.money = map.get('money') }
            if (map.has('bank')) { data.bank = map.get('bank') }
            if (map.has('kredit')) { data.kredit = map.get('kredit') }
        } else {
            const money = map.get('money')
            const bank = map.get('bank')
            const kredit = map.get('kredit')

            data = new economySchema({
                userId,
                money,
                bank,
                kredit
            })
        }
    })
}

exports.add = (userId, map) => {
    economySchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('money')) { data.money += map.get('money') }
            if (map.has('bank')) { data.bank += map.get('bank') }
            if (map.has('kredit')) { data.kredit += map.get('kredit') }
        } else {
            const money = map.get('money')
            const bank = map.get('bank')
            const kredit = map.get('kredit')

            data = new economySchema({
                userId,
                money,
                bank,
                kredit
            })
        }
    })
}

exports.rem = (userId, map) => {
    economySchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('money')) { data.money -= map.get('money') }
            if (map.has('bank')) { data.bank -= map.get('bank') }
            if (map.has('kredit')) { data.kredit -= map.get('kredit') }
        } else {
            const money = map.get('money')
            const bank = map.get('bank')
            const kredit = map.get('kredit')

            data = new economySchema({
                userId,
                money,
                bank,
                kredit
            })
        }
    })
}