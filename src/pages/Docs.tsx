import React from "react";

import Header from '../layouts/Header'
import Body from '../layouts/Body/index'
import Footer from '../layouts/Footer'


interface State {
  age: number;
}


class Docs extends React.Component<{}, State> {
  

  render() {
    
    return (
      <div>
        <Header/>
        <h2>Docs</h2>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default Docs;
