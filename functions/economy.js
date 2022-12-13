const economy2Schema = require('../schemas/economy');

exports.get = (userId) => new Promise(async ful => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (!data) {
            const output = new Map();
            output.set("money", 0)
            output.set("bank", 0)
            output.set("kredit", 0)
            output.set("sparbuch", 0)

            return ful(output)
        }
        const output = new Map();

        output.set("money", data.money)
        output.set("bank", data.bank)
        output.set("kredit", data.kredit)
        output.set("sparbuch", data.sparbuch)

        return ful(output)
    })
})

exports.set = (userId, map) => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('money')) { data.money = map.get('money') }
            if (map.has('bank')) { data.bank = map.get('bank') }
            if (map.has('kredit')) { data.kredit = map.get('kredit') }
            if (map.has('sparbuch')) { data.sparbuch = map.get('sparbuch')}
        } else {
            let money; if (map.has('money')) { money = map.get('money') } else { money = 0 }
            let bank; if (map.has('bank')) { bank = map.get('bank') } else { bank = 0 }
            let kredit; if (map.has('kredit')) { kredit = map.get('kredit') } else { kredit = 0 }
            let sparbuch; if (map.has('sparbuch')) { sparbuch = map.get('sparbuch') } else { sparbuch = 0 }

            data = new economy2Schema({
                userId,
                money,
                bank,
                kredit,
                sparbuch
            })
        }
        data.save()
    })
}

exports.add = (userId, map) => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('money')) { data.money += map.get('money') }
            if (map.has('bank')) { data.bank += map.get('bank') }
            if (map.has('kredit')) { data.kredit += map.get('kredit') }
            if (map.has('sparbuch')) { data.sparbuch += map.get('sparbuch') }
        } else {
            let money; if (map.has('money')) { money = map.get('money') } else { money = 0 }
            let bank; if (map.has('bank')) { bank = map.get('bank') } else { bank = 0 }
            let kredit; if (map.has('kredit')) { kredit = map.get('kredit') } else { kredit = 0 }
            let ksparbuch; if (map.has('ksparbuch')) { ksparbuch = map.get('ksparbuch') } else { ksparbuch = 0 }

            data = new economy2Schema({
                userId,
                money,
                bank,
                kredit,
                sparbuch
            })
        }
        data.save()
    })
}

exports.rem = (userId, map) => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('money')) { data.money -= map.get('money') }
            if (map.has('bank')) { data.bank -= map.get('bank') }
            if (map.has('kredit')) { data.kredit -= map.get('kredit') }
            if (map.has('sparbuch')) { data.sparbuch -= map.get('sparbuch') }
        } else {
            let money; if (map.has('money')) { money = map.get('money') } else { money = 0 }
            let bank; if (map.has('bank')) { bank = map.get('bank') } else { bank = 0 }
            let kredit; if (map.has('kredit')) { kredit = map.get('kredit') } else { kredit = 0 }
            let sparbuch; if (map.has('sparbuch')) { sparbuch = map.get('sparbuch') } else { sparbuch = 0 }

            data = new economy2Schema({
                userId,
                money,
                bank,
                kredit,
                sparbuch
            })
        }
        data.save()
    })
}