const economySchema = require('../schemas/economy');

exports.get = (userId) => new Promise(async ful => {
    economySchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (!data) {
            const output = new Map();
            output.set("money", 0)
            output.set("bank", 0)
            output.set("kredit", 0)

            return ful(output)
        }
        const output = new Map();

        output.set("money", data.money)
        output.set("bank", data.money)
        output.set("kredit", data.money)

        return ful(output)
    })
})

exports.set = (userId, map) => {
    economySchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('money')) { data.money = map.get('money') }
            if (map.has('bank')) { data.bank = map.get('bank') }
            if (map.has('kredit')) { data.kredit = map.get('kredit') }
        } else {
            let money; if (map.has('money')) { money = map.get('money') } else { money = 0 }
            let bank; if (map.has('bank')) { bank = map.get('bank') } else { bank = 0 }
            let kredit; if (map.has('kredit')) { kredit = map.get('kredit') } else { kredit = 0 }

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