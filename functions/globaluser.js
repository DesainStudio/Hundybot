const globaluserSchema = require('../schemas/globaluser');

const process = (option, total, value) => {
  if (option === 'add') total += value
  if (option === 'rem') total -= value
  if (option === 'set') total = value

  return total
}

exports.get = (userId) => new Promise(async(ful) => {
  globaluserSchema.findOne({ userId }, async(err, data) => {
    if (err) throw err;

    if (!data) {
      return ful({
        "messages": 0,
        "level": 0,
        "xp": 2,
        "userxp": 0,
        "xpbooster": 1,
        "nextxp": 500,
        "banned": false
      })
    } else {
      return ful({
        "messages": data.messages,
        "level": data.level,
        "xp": data.xp,
        "userxp": data.userxp,
        "xpbooster": data.xpbooster,
        "nextxp": data.nextxp,
        "banned": data.banned
      })
    }
  })
})

exports.edt = async(userId, json) => {
  globaluserSchema.findOne({ userId }, async(err, data) => {
    if (err) throw err;

    if (!data) {
      data = new globaluserSchema({
        userId,
        messages: ('messages' in json) ? json.messages.val: 0,
        level: ('level' in json) ? json.level.val: 0,
        xp: ('xp' in json) ? json.xp.val: 2,
        userxp: ('userxp' in json) ? json.userxp.val: 0,
        xpbooster: ('xpbooster' in json) ? json.xpbooster.val: 1,
        nextxp: ('nextxp' in json) ? json.nextxp.val: 500,
        banned: ('banned' in json) ? json.banned.val: false,
      })
    } else {
      if ('messages' in json) data.messages = process(json.messages.opt, data.messages, json.messages.val)
      if ('level' in json) data.level = process(json.level.opt, data.level, json.level.val)
      if ('xp' in json) data.xp = process(json.xp.opt, data.xp, json.xp.val)
      if ('userxp' in json) data.userxp = process(json.userxp.opt, data.userxp, json.userxp.val)
      if ('xpbooster' in json) data.xpbooster = process(json.xpbooster.opt, data.xpbooster, json.xpbooster.val)
      if ('nextxp' in json) data.nextxp = process(json.nextxp.opt, data.nextxp, json.nextxp.val)
      if ('banned' in json) data.banned = process(json.banned.opt, data.banned, json.banned.val)
    }

    data.save()
  })
}

exports.del = (userId) => {
  globaluserSchema.findOneAndDelete({ userId }, async(err, data) => {})
}