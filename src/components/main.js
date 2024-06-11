import { Fragment } from "react";

import machete from '../assets/machete_banner.jpg';
import macheteCan from '../assets/machete-can.png';
import macheteCanTop from '../assets/machete-can-top.jpg';
import { GoogleMap } from "./map";
import InstaSlider from "./insta";

export function Main() {
  return(
    <Fragment>
      <div className="image-container wow fadeIn">
        <img src={machete} alt="logo" />
      </div>

      <section className="first-section">
        <div className="container">
          <div className="row" id="row">
            <div className="machete-can-hidden wow fadeInRight">
              <img src={macheteCan} alt="logo" />
            </div>
            <div className="col-md-8 col-sm-8 wow fadeInLeft">
              <div className="description">
                <h1 id="product">CUT THROUGH THE GRIND</h1>
                <p>Machete energy is designed to give you the boost you need to get through the day</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 wow fadeInRight">
              <div className="machete-can">
                <img src={macheteCan} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="container">
          <div className="row" id="row">
            <div className="col-md-4 col-sm-4 wow fadeInLeft" data-wow-delay="0.5s">
              <div className="machete-can-top">
                <img src={macheteCanTop} alt="logo" />
              </div>
            </div>
            <div className="col-md-7 col-sm-7 wow fadeInRight" data-wow-delay="0.5s">
              <div className="description">
                <h1 id="ingredients">INGREDIENTS</h1>
                <p>Caffeine + Taurine + B Vitamins + Sugar + Lightly Carbonated Water</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third-section">
        <div className="container">
          <div className="wow fadeIn" id="map_wrapper" data-wow-delay="0.5s">
            <h1 id ="locations">LOCATIONS</h1>
            <p id="location-text">Now sold at the following locations!</p>
            <GoogleMap />
          </div>
        </div>
      </section>

      <div className="banner">
        <div className="container">
          <InstaSlider />
        </div>
      </div>
    </Fragment>
  )
}