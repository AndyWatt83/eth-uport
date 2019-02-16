import React, { Component } from 'react'
import SimpleStorageContract from '../../../src/contracts/SimpleStorage';
import { web3 } from '../../util/connectors';

class SimpleStorage extends Component {
  componentDidMount() {
    const abi = SimpleStorageContract.abi;
    const address = SimpleStorageContract.networks['4'].address;
    const contract = web3.eth.Contract(abi, address);

    contract.methods.get().call().then(console.log);
    
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
