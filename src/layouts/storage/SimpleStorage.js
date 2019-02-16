import React, { Component } from 'react'
import SimpleStorageContract from '../../../src/contracts/SimpleStorage';
import W3 from 'web3';

class SimpleStorage extends Component {
  async componentDidMount() {
    const abi = SimpleStorageContract.abi;
    const address = SimpleStorageContract.networks['4'].address;
    const web3 = new W3(new W3.providers.HttpProvider("https://rinkeby.infura.io/24366b6fe8fa46f0aa374e68ea38adee"));

    const storageContract = web3.eth.Contract(abi, address);
    const storageUPort = window.uport.contract(abi).at(address);

    storageUPort.set(Math.random() * 10);

    const response = await storageContract.methods.get().call();

    console.log(response);
    // window.uport.onResponse('set').then(tx => console.log(tx));
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
