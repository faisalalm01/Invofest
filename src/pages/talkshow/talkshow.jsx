import React, { Component } from 'react'
import Navbars from '../../components/Navbars'
import Cards from "../../components/Cards"
// import Particles from 'react-particles-js';
// import particles from '../../components/Particles';

export default class talkshow extends Component {
    render() {
        return (
            <div>
                <Navbars/>
                <Cards/>
            </div>
        )
    }
}
