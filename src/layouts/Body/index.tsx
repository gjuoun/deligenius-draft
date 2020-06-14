import React from "react";
import Menu from "./SideMenu";
import Content from "./Content";

class Body extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-fifth mr-6">
              <Menu />
            </div>
            <div className="column">
              <Content/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Body;
