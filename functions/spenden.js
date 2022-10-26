const spendenSchema = require('../schemas/spenden');

exports.get = (userId) => new Promise(async ful => {
    spendenSchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (!data) {
            const output = new Map();
            output.set("userspenden", 0)
            output.set("serverspenden", 0)

            return ful(output)
        }
        const output = new Map();

        output.set("userspenden", data.userspenden)
        output.set("serverspenden", data.serverspenden)

        return ful(output)
    })
})

exports.set = (userId, map) => {
    spendenSchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('userspenden')) { data.userspenden = map.get('userspenden') }
            if (map.has('serverspenden')) { data.serverspenden = map.get('serverspenden') }
        } else {
            const userspenden = map.get('userspenden')
            const serverspenden = map.get('serverspenden')

            data = new spendenSchema({
                userId,
                userspenden,
                serverspenden
            })
        }
    })
}

exports.add = (userId, map) => {
    spendenSchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('userspenden')) { data.userspenden += map.get('userspenden') }
            if (map.has('serverspenden')) { data.serverspenden += map.get('serverspenden') }

        } else {
            const userspenden = map.get('userspenden')
            const serverspenden = map.get('serverspenden')

            data = new spendenSchema({
                userId,
                userspenden,
                serverspenden
            })
        }
    })
}

exports.rem = (userId, map) => {
    spendenSchema.findOne({ userId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('userId')) { data.userId = map.get('userId'); }
            if (map.has('userspenden')) { data.userspenden -= map.get('userspenden') }
            if (map.has('serverspenden')) { data.serverspenden -= map.get('serverspenden') }
        } else {
            const userspenden = map.get('userspenden')
            const serverspenden = map.get('serverspenden')

            data = new spendenSchema({
                userId,
                userspenden,
                serverspenden
            })
        }
    })
}