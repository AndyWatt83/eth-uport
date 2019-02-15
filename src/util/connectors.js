import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

export const uport = new Connect('AKW React Uport box', {
    clientId: '2oeNXcXuNmV3oURLpkHkiGYggZRwpaSJxXn',
    network: 'rinkeby',
    signer: SimpleSigner('fdc0b97e3536c9a4f3320e4b4429989ba7e9fa5dccb0d22b365b76eb9245f5d0')
    })

    window.web3 = uport.getWeb3();

export const web3 = uport.getWeb3()

