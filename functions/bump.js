const bumpSchema = require('../schemas/bump');

exports.get = (serverId) => new Promise(async ful => {
    bumpSchema.findOne({ serverId }, async (err, data) => {
        if (err) throw err;
        if (!data) {
            const output = new Map();
            output.set("channelId", '')
            output.set("title", '')
            output.set("sdescription", '')
            output.set('ldescription', '')
            output.set('invite', '')
            output.set('binvite', '')
            output.set('website', '')
            output.set('banned', false)
            output.set('update', false)
            output.set('bugfix', false)

            return ful(output)
        }
        const output = new Map();

        output.set("channelId", data.channelId)
        output.set("title", data.title)
        output.set("sdescription", data.sdescription)
        output.set("ldescription", data.ldescription)
        output.set('invite', data.invite)
        output.set('binvite', data.binvite)
        output.set('website', data.website)
        output.set('banned', data.banned)
        output.set('update', data.update)
        output.set('bugfix', data.bugfix)

        return ful(output)
    })
})

exports.set = (serverId, map) => {
    bumpSchema.findOne({ serverId }, async (err, data) => {
        if (err) throw err;
        if (data) {
            if (map.has('channelId')) data.channelId = map.get('channelId')
            if (map.has('title')) data.title = map.get('title')
            if (map.has('sdescription')) data.sdescription = map.get('sdescription')
            if (map.has('ldescription')) data.ldescription = map.get('ldescription')
            if (map.has('invite')) data.invite = map.get('invite')
            if (map.has('binvite')) data.binvite = map.get('binvite')
            if (map.has('website')) data.website = map.get('website')
            if (map.has('banned')) data.banned = map.get('banned')
            if (map.has('update')) data.update = map.get('update')
            if (map.has('bugfix')) data.bugfix = map.get('bugfix')
        } else {
            let channelId = ''; if (map.has('channelId')) channelId = map.get('channelId') 
            else channelId = ''
            let title = ''; if (map.has('title')) title = map.get('title') 
            else title = ''
            let sdescription = ''; if (map.has('sdescription')) sdescription = map.get('sdescription') 
            else sdescription = ''
            let ldescription = ''; if (map.has('ldescription')) ldescription = map.get('ldescription') 
            else ldescription = ''
            let invite = ''; if (map.has('invite')) invite = map.get('invite') 
            else invite = ''
            let binvite = ''; if (map.has('binvite')) binvite = map.get('binvite') 
            else binvite = ''
            let website = ''; if (map.has('website')) website = map.get('website') 
            else website = ''
            let banned; if (map.has('banned')) banned = map.get('banned')
            else banned = false
            let update; if (map.has('update')) update = map.get('update')
            else update = false
            let bugfix; if (map.has('bugfix')) bugfix = map.get('bugfix')
            else bugfix = false

            data = new bumpSchema({
                serverId,
                channelId,
                title,
                sdescription,
                ldescription,
                invite,
                binvite,
                website,
                banned,
                update,
                bugfix
            })
        }
        data.save()
    })
}

exports.del = (serverId) => {
    bumpSchema.findOneAndDelete({ serverId }, async (err, data) => {})
}