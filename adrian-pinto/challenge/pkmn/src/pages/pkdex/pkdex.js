// eslint-disable-next-line import/extensions
import refreshPkData from '../../modules/pkdex-data.js';
import refreshPkInfo from '../../modules/pkdex-info.js';

document.querySelector('.back-btn').href = document.referrer;
const urlParams = new URL(location).searchParams;
const pkmnToCatch = urlParams.get('name');

refreshPkInfo(pkmnToCatch);
refreshPkData(pkmnToCatch);
