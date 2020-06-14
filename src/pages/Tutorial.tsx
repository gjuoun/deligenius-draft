import React from "react";

import Header from '../layouts/Header'
import Body from '../layouts/Body/index'
import Footer from '../layouts/Footer'

interface State {
  age: number;
}


class Tutorial extends React.Component<{}, State> {
  // state: State
  // props: Props

  render() {
    return (
      <div>
        <Header/>
        <h2>Tutorial</h2>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default Tutorial;
