import React from "react";
import styled from "styled-components";
import Header from './layouts/Header'
import Body from './layouts/Body/index'
import Footer from './layouts/Footer'

interface State {
  age: number;
}


class App extends React.Component<{}, State> {
  // state: State
  // props: Props

  render() {
    return (
      <div>
        <Header/>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
