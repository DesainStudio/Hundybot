const economySchema = require('../schemas/items');

exports.set = (userId, map) => {
    economySchema.findOne({ userId }, async (err, data) => {
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

            data = new economySchema({
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
    economySchema.findOne({ userId }, async (err, data) => {
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

            data = new economySchema({
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
    economySchema.findOne({ userId }, async (err, data) => {
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

            data = new economySchema({
                userId,
                kupfer,
                diamant,
                gold,
                emerald
            })
        }
    })
}