import React, { Component } from "react";
// import {  } from "";

export default class Banner extends Component {
  render() {
    return (
      <div>
        {/* <figure className="position-relative">
                <img className="w-100" src="https://www.jssor.com/demos/list-slider.slider" alt="inovets" />
          <figcaption className="position-absolute font-weight-bolder">
            <h1>TALKSHOW INTERAKTIF</h1>
                </figcaption>
        </figure> */}
        <div class="card text-bg-dark">
          <img src="Assets/sur.jpg" class="gambar card-img" alt="..." />
          <div class="judul card-img-overlay text-white text-center">
            <h1 class="card-title font-weight-bold">TALKSHOW INTERAKTIF</h1>
            <p class="card-text ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary" type="button">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
