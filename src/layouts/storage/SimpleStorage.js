import React, { Component } from 'react'
import W3 from 'web3';

class SimpleStorage extends Component {
  componentDidMount() {
    const RINKEBY_WSS = "wss://rinkeby.infura.io/ws";
    const provider = new W3.providers.WebsocketProvider(RINKEBY_WSS);
    const web3 = new W3(provider);
    const contractInterface = require('../../contracts/SimpleStorage.json');
    const deployedAddress = contractInterface.networks[4].address;

    const storage = new web3.eth.Contract(contractInterface.abi, deployedAddress);

    storage.set(25);

  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <p>Simple Storage Contract</p>
            <p>Current value stored: {this.props.storage}</p>
          </div>
        </div>
      </main>
    )
  }
}

export default SimpleStorage
