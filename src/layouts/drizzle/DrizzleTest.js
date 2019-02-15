import React, { Component } from 'react'

import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";
import drizzleOptions from "./drizzleOptions";
import MyContainer from "./MyContainer";

class DrizzleTest extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Add Drizzle stuff in here....</h1>
            <DrizzleProvider options={drizzleOptions}>
                <LoadingContainer>
                    <MyContainer />
                </LoadingContainer>
            </DrizzleProvider>
        </div>
        </div>
      </main>
    )
  }
}

export default DrizzleTest
