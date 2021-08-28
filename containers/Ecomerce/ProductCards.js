import React from "react";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAccessibleIcon, faSafari } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faPills } from "@fortawesome/free-solid-svg-icons";

const ProductCards = () => {
  return (
    <div className="container mt-4 ">
      <div class="row  bgg text-dark row-cols-1 row-cols-md-3 g-4">
        <div class="col ">
          <div class="card p-4 h-100">
            <img src="/img/01.jpg" alt="loading..." />
            <div class="d-flex">
              <div class="card-body">
                <p class="card-text">Items </p>
                <p class="card-text">Flower Pot </p>
              </div>
              <div className="">
                <p>$999</p>
                <p>$799</p>
              </div>
            </div>
            <hr />

            {/* BUTON GROUP */}

            <div className="text-center">
              <Button
                className="button1 mb-2"
                variant="contained"
                color="primary"
              >
                Viev more
              </Button>

              <Button
                variant="contained"
                className="bg-success text-light mb-2"
              >
                ADD TO CARD
              </Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 h-100">
            <img src="/img/04.jpg" class="card-img-top" alt="..."></img>
            <div class="d-flex">
              <div class="card-body">
                <p class="card-text">Items </p>
                <p class="card-text">Flower Pot </p>
              </div>
              <div class=" ">
                <p>$999</p>
                <p>$799</p>
              </div>
            </div>
            <hr />
            {/* BUTON GROUP */}

            <div className="text-center">
              <Button
                className="button1 mb-2"
                variant="contained"
                color="primary"
              >
                Viev more
              </Button>

              <Button
                variant="contained"
                className="bg-success text-light mb-2"
              >
                ADD TO CARD
              </Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card p-4 pb-4 h-100">
            <img src="/img/07.jpg" class="card-img-top " alt="..."></img>
            <div class="d-flex">
              <div class="card-body">
                <p class="card-text">Items </p>
                <p class="card-text">Flower Pot </p>
              </div>
              <div class=" ">
                <p>$999</p>
                <p>$799</p>
              </div>
            </div>
            <hr />

            {/* BUTON GROUP */}

            <div className="text-center">
              <Button
                className="button1 mb-2"
                variant="contained"
                color="primary"
              >
                Viev more
              </Button>

              <Button
                variant="contained"
                className="bg-success text-light mb-2"
              >
                ADD TO CARD
              </Button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <FontAwesomeIcon icon={faCalendar} className="mb-2" />
              <h5 class="card-title">Free Shipping</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                domenus orioneu.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <FontAwesomeIcon icon={faCalendar} className="mb-2" />
              <h5 class="card-title">Customer Support</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                domenus orioneu.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <FontAwesomeIcon icon={faCalendar} className="mb-2" />
              <h5 class="card-title">30 days money back</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                domenus orioneu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
