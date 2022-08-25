import React, { Component } from "react";
// import {  } from "";

export default class Banner extends Component {
  render() {
    return (
      <div>
        {/* <figure classNameName="position-relative">
                <img classNameName="w-100" src="https://www.jssor.com/demos/list-slider.slider" alt="inovets" />
          <figcaption classNameName="position-absolute font-weight-bolder">
            <h1>TALKSHOW INTERAKTIF</h1>
                </figcaption>
        </figure> */}
        <div className="card text-bg-dark">
          <img src="Assets/sur.jpg" className="gambar card-img" alt="..." />
          <div className="judul card-img-overlay text-white text-center">
            <h1 className="card-title font-weight-bold">TALKSHOW INTERAKTIF</h1>
            <p className="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
