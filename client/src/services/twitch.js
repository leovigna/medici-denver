

const redirectUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/redirect_twitch' : 'https://mycelium-ventures.github.io/medici-denver/redirect_twitch'

export function authTwitch() {

  // TODO: save the current page in localStorage for redirect later

  // JWT fetch - only embeds userId and username - can use https://id.twitch.tv/oauth2/keys to verify
  window.location.href = "https://id.twitch.tv/oauth2/authorize?"
    + "client_id=e2oo0q2wfiu9x3r0fzkh7cornp3652&"
    + `redirect_uri=${redirectUrl}&response_type=token+id_token&force_verify&`
    + "scope=user:edit+openid";

  // Unused OAuth Call - requests token with access to user's follow + subscription data
  /*
  window.location.href = "https://id.twitch.tv/oauth2/authorize?"
    + "client_id=e2oo0q2wfiu9x3r0fzkh7cornp3652&"
    + "redirect_uri=http://localhost:3000/redirect_twitch&response_type=token&"
    + "scope=user_follows_edit%20user_subscriptions+openid";
   */

  // the following location will redirect to "redirectUrl"
}
