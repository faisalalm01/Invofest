import React, { Component } from "react";
import Navbars from "../../components/Navbars";
import Banner from "../../components/Banner";
import Destalk from "../../components/talkshow/Destalk";
import Footer from "../../components/Footer";

export default class Talkshow extends Component {
  render() {
    return (
      <div>
        <div>
        <Navbars />
        <Banner />
        </div>
        <Destalk/>
        <Footer/>
      </div>
    );
  }
}
