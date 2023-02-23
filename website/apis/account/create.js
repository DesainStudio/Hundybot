const webserver = require('rjweb-server');
const OAuth = require('discord-oauth2');
const oAuth = new OAuth();
const utils = require('rjutils-collection');
const user = require('../../../functions/user')

/** @type {import('rjweb-server/interfaces').CtrFile} */
module.exports = {
  method: webserver.types.get,
  path: '/api/account/create',

  async code(ctr) {
    if (!ctr.queries.has('token')) return ctr.print('Kein Token')

    const token = await oAuth.tokenRequest({
			clientId: ctr['@'].config.id,
			clientSecret: ctr['@'].config.secret,
			grantType: 'authorization_code',
			scope: ['identify', 'guilds', 'email'],
			redirectUri: 'http://localhost/auth',
			code: ctr.queries.get('token')
		}).catch((e) => { })
    if (!token) return ctr.print({ "success": false, "message": 'INVALID TOKEN' })

    const userInfos = await oAuth.getUser(token.access_token)

		// Generate Auth Token
		const base = `${userInfos.id} ${token.access_token}`
		const authToken = utils.hashStr({ text: base, algorithm: 'sha256', output: 'hex' })
    
		user.edt(userInfos.id, {
			userName: userInfos.username,
			userTag: Number(userInfos.discriminator),
			userAvatar: userInfos.avatar,
			dashboardToken: authToken,
			accessToken: token.access_token,
			refreshToken: token.refresh_token
		})

		return ctr.print({
			success: true,
			token: authToken
		})

  }
}