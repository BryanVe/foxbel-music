import { DEEZER_APP_ID, DEEZER_REDIRECT_URI } from './keys'

export const DEEZER_AUTH_URI = `https://connect.deezer.com/oauth/auth.php?app_id=${DEEZER_APP_ID}&redirect_uri=${DEEZER_REDIRECT_URI}&perms=email,offline_access,listening_history&response_type=token`
