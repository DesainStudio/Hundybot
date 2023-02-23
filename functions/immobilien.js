const immobilienSchema = require('../schemas/immobilien')

const process = (option, total, value) => {
    if (option === 'add') total += value
    if (option === 'rem') total -= value
    if (option === 'set') total = value

    return total
}

exports.get = (userId) => new Promise(async(ful) => {
    immobilienSchema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            return ful({
                "haus1": false,
                "haus2": false,
                "haus3": false,
                "haus4": false,
                "haus5": false,
                "haus6": false,
                "haus7": false,
                "haus8": false,
                "haus9": false,
                "haus10": false,
                "resturant1": false,
                "resturant2": false,
                "resturant3": false,
                "resturant4": false,
                "resturant5": false,
                "resturant6": false,
                "resturant7": false,
                "resturant8": false,
                "resturant9": false,
                "resturant10": false,
                "hotel1": false,
                "hotel2": false,
                "hotel3": false,
                "hotel4": false,
                "hotel5": false,
                "hotel6": false,
                "hotel7": false,
                "hotel8": false,
                "hotel9": false,
                "hotel10": false,
            })
        } else {
            return ful({
                "haus1": data.haus1,
                "haus2": data.haus2,
                "haus3": data.haus3,
                "haus4": data.haus4,
                "haus5": data.haus5,
                "haus6": data.haus6,
                "haus7": data.haus7,
                "haus8": data.haus8,
                "haus9": data.haus9,
                "haus10": data.haus10,
                "resturant1": data.resturant1,
                "resturant2": data.resturant2,
                "resturant3": data.resturant3,
                "resturant4": data.resturant4,
                "resturant5": data.resturant5,
                "resturant6": data.resturant6,
                "resturant7": data.resturant7,
                "resturant8": data.resturant8,
                "resturant9": data.resturant9,
                "resturant10": data.resturant10,
                "hotel1": data.hotel1,
                "hotel2": data.hotel2,
                "hotel3": data.hotel3,
                "hotel4": data.hotel4,
                "hotel5": data.hotel5,
                "hotel6": data.hotel6,
                "hotel7": data.hotel7,
                "hotel8": data.hotel8,
                "hotel9": data.hotel9,
                "hotel10": data.hotel10,
            })
        }
    })
})

exports.edt = async(userId, json) => {
    immobilienSchema.findOne({ userId }, async(err, data) => {
        if (err) throw err;

        if (!data) {
            data = new immobilienSchema({
                userId,
                haus1: ('haus1' in json) ? json.haus1.val : false,
                haus2: ('haus2' in json) ? json.haus2.val : false,
                haus3: ('haus3' in json) ? json.haus3.val : false,
                haus4: ('haus4' in json) ? json.haus4.val : false,
                haus5: ('haus5' in json) ? json.haus5.val : false,
                haus6: ('haus6' in json) ? json.haus6.val : false,
                haus7: ('haus7' in json) ? json.haus7.val : false,
                haus8: ('haus8' in json) ? json.haus8.val : false,
                haus9: ('haus9' in json) ? json.haus9.val : false,
                haus10: ('haus10' in json) ? json.haus10.val : false,
                resturant1: ('resturant1' in json) ? json.resturant1.val : false, 
                resturant2: ('resturant2' in json) ? json.resturant2.val : false, 
                resturant3: ('resturant3' in json) ? json.resturant3.val : false, 
                resturant4: ('resturant4' in json) ? json.resturant4.val : false, 
                resturant5: ('resturant5' in json) ? json.resturant5.val : false, 
                resturant6: ('resturant6' in json) ? json.resturant6.val : false, 
                resturant7: ('resturant7' in json) ? json.resturant7.val : false, 
                resturant8: ('resturant8' in json) ? json.resturant8.val : false, 
                resturant9: ('resturant9' in json) ? json.resturant9.val : false, 
                resturant10: ('resturant10' in json) ? json.resturant10.val : false, 
                hotel1: ('hotel1' in json) ? json.hotel1.val : false,
                hotel2: ('hotel2' in json) ? json.hotel2.val : false,
                hotel3: ('hotel3' in json) ? json.hotel3.val : false,
                hotel4: ('hotel4' in json) ? json.hotel4.val : false,
                hotel5: ('hotel5' in json) ? json.hotel5.val : false,
                hotel6: ('hotel6' in json) ? json.hotel6.val : false,
                hotel7: ('hotel7' in json) ? json.hotel7.val : false,
                hotel8: ('hotel8' in json) ? json.hotel8.val : false,
                hotel9: ('hotel9' in json) ? json.hotel9.val : false,
                hotel10: ('hotel10' in json) ? json.hotel10.val : false,
            })
        } else {
            if ('haus1' in json) data.haus1 = process(json.haus1.opt, data.haus1, json.haus1.val)
            if ('haus2' in json) data.haus2 = process(json.haus2.opt, data.haus2, json.haus2.val)
            if ('haus3' in json) data.haus3 = process(json.haus3.opt, data.haus3, json.haus3.val)
            if ('haus4' in json) data.haus4 = process(json.haus4.opt, data.haus4, json.haus4.val)
            if ('haus5' in json) data.haus5 = process(json.haus5.opt, data.haus5, json.haus5.val)
            if ('haus6' in json) data.haus6 = process(json.haus6.opt, data.haus6, json.haus6.val)
            if ('haus7' in json) data.haus7 = process(json.haus7.opt, data.haus7, json.haus7.val)
            if ('haus8' in json) data.haus8 = process(json.haus8.opt, data.haus8, json.haus8.val)
            if ('haus9' in json) data.haus9 = process(json.haus9.opt, data.haus9, json.haus9.val)
            if ('haus10' in json) data.haus10 = process(json.haus10.opt, data.haus10, json.haus10.val)
            if ('resturant1' in json) data.resturant1 = preocess(json.resturant1.opt, data.resturant1, json.resturant1.val)
            if ('resturant2' in json) data.resturant2 = preocess(json.resturant2.opt, data.resturant2, json.resturant2.val)
            if ('resturant3' in json) data.resturant3 = preocess(json.resturant3.opt, data.resturant3, json.resturant3.val)
            if ('resturant4' in json) data.resturant4 = preocess(json.resturant4.opt, data.resturant4, json.resturant4.val)
            if ('resturant5' in json) data.resturant5 = preocess(json.resturant5.opt, data.resturant5, json.resturant5.val)
            if ('resturant6' in json) data.resturant6 = preocess(json.resturant6.opt, data.resturant6, json.resturant6.val)
            if ('resturant7' in json) data.resturant7 = preocess(json.resturant7.opt, data.resturant7, json.resturant7.val)
            if ('resturant8' in json) data.resturant8 = preocess(json.resturant8.opt, data.resturant8, json.resturant8.val)
            if ('resturant9' in json) data.resturant9 = preocess(json.resturant9.opt, data.resturant9, json.resturant9.val)
            if ('resturant10' in json) data.resturant10 = preocess(json.resturant10.opt, data.resturant10, json.resturant10.val)
            if ('hotel1' in json) data.hotel1 = process(json.hotel1.opt, data.hotel1, json.hotell.val)
            if ('hotel2' in json) data.hotel2 = process(json.hotel2.opt, data.hotel2, json.hotel2.val)
            if ('hotel3' in json) data.hotel3 = process(json.hotel3.opt, data.hotel3, json.hotel3.val)
            if ('hotel4' in json) data.hotel4 = process(json.hotel4.opt, data.hotel4, json.hotel4.val)
            if ('hotel5' in json) data.hotel5 = process(json.hotel5.opt, data.hotel5, json.hotel5.val)
            if ('hotel6' in json) data.hotel6 = process(json.hotel6.opt, data.hotel6, json.hotel6.val)
            if ('hotel7' in json) data.hotel7 = process(json.hotel7.opt, data.hotel7, json.hotel7.val)
            if ('hotel8' in json) data.hotel8 = process(json.hotel8.opt, data.hotel8, json.hotel8.val)
            if ('hotel9' in json) data.hotel9 = process(json.hotel9.opt, data.hotel9, json.hotel9.val)
            if ('hotel10' in json) data.hotel10 = process(json.hotel10.opt, data.hotel10, json.hotel10.val)
        }

        data.save()
    })
}

exports.del = (userId) => {
    immobilienSchema.findOneAndDelete({ userId }, async (err, data) => {})
}