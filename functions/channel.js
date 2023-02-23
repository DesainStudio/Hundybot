const channelSchema = require('../schemas/channel');

const process = (option, total, value) => {
  if (option === 'add') total += value
  if (option === 'rem') total -= value
  if (option === 'set') total = value

  return total
}

exports.get = (serverId) => new Promise(async(ful) => {
  channelSchema.findOne({ serverId }, async(err, data) => {
    if (err) throw err;

    if (!data) {
      return ful({
        "channelId": 0,
        "banned": false,
        "update": false,
        "bugfix": false
      })
    } else {
      return ful({
        "channelId": data.channelId,
        "banned": data.banned,
        "update": data.update,
        "bugfix": data.bugfix
      })
    }
  })
})

exports.edt = async(serverId, json) => {
  channelSchema.findOne({ serverId }, async(err, data) => {
    if (err) throw err;

    if (!data) {
      data = new channelSchema({
        serverId,
        channelId: ('channelId' in json) ? json.channelId.val: 0,
        banned: ('banned' in json) ? json.banned.val: false,
        update: ('update' in json) ? json.update.val: false,
        bugfix: ('bugfix' in json) ? json.bugfix.val: false,
      })
    } else {
      if ('channelId' in json) data.channelId = process(json.channelId.opt, data.channelId, json.channelId.val)
      if ('banned' in json) data.banned = process(json.banned.opt, data.banned, json.banned.val)
      if ('update' in json) data.update = process(json.update.opt, data.update, json.update.val)
      if ('bugfix' in json) data.bugfix = process(json.bugfix.opt, data.bugfix, json.bugfix.val)
    }

    data.save()
  })
}

exports.del = async(serverId) => {
  channelSchema.findOneAndDelete({ serverId }, async (err, data) => {}) 
}