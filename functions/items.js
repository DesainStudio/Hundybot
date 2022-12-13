const economy2Schema = require('../schemas/items');

exports.get = (userId) => new Promise(async ful => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (!data) {
            const output = new Map();
            output.set("kupfer", 0)
            output.set("gold", 0)
            output.set("diamant", 0)
            output.set("emerald", 0)

            return ful(output)
        }
        const output = new Map();

        output.set("kupfer", data.kupfer)
        output.set("gold", data.gold)
        output.set("diamant", data.diamant)
        output.set("emerald", data.emerald)

        return ful(output)
    })
})

exports.set = (userId, map) => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('kupfer')) { data.kupfer = map.get('kupfer') }
            if (map.has('diamant')) { data.diamant = map.get('diamant') }
            if (map.has('gold')) { data.gold = map.get('gold') }
            if (map.has('emerald')) { data.emerald = map.get('emerald') }
        } else {
            const kupfer = map.get('kupfer')
            const diamant = map.get('diamant')
            const gold = map.get('gold')
            const emerald = map.get('emerald')

            data = new economy2Schema({
                userId,
                kupfer,
                diamant,
                gold,
                emerald
            })
        }
    })
}

exports.add = (userId, map) => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('kupfer')) { data.kupfer += map.get('kupfer') }
            if (map.has('diamant')) { data.diamant += map.get('diamant') }
            if (map.has('gold')) { data.gold += map.get('gold') }
            if (map.has('emerald')) { data.emerald += map.get('emerald') }
        } else {
            const kupfer = map.get('kupfer')
            const diamant = map.get('diamant')
            const gold = map.get('gold')
            const emerald = map.get('emerald')

            data = new economy2Schema({
                userId,
                kupfer,
                diamant,
                gold,
                emerald
            })
        }
    })
}

exports.rem = (userId, map) => {
    economy2Schema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('kupfer')) { data.kupfer -= map.get('kupfer') }
            if (map.has('diamant')) { data.diamant -= map.get('diamant') }
            if (map.has('gold')) { data.gold -= map.get('gold') }
            if (map.has('emerald')) { data.emerald -= map.get('emerald') }
        } else {
            const kupfer = map.get('kupfer')
            const diamant = map.get('diamant')
            const gold = map.get('gold')
            const emerald = map.get('emerald')

            data = new economy2Schema({
                userId,
                kupfer,
                diamant,
                gold,
                emerald
            })
        }
    })
}