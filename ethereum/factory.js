import web3 from './web3';
import CampaignFactory from '../build/CampaignFactory.json';
if(!web3){
    throw new Error("Web3 not installed")
}
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x64439F19DA90096E68F8fFDF52A6c7705eDDa02f'
)
export default instance;