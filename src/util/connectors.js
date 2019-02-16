import { Connect } from 'uport-connect';
import W3 from 'web3';

export const uport = new Connect('AKW React Uport box', {
    clientId: '2oeNXcXuNmV3oURLpkHkiGYggZRwpaSJxXn',
    network: 'rinkeby'
});

const provider = uport.getProvider();
const web3 = new W3(provider);

export { web3 }
