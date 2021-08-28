import "bootstrap/dist/css/bootstrap.min.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa500px } from "@fortawesome/free-brands-svg-icons";
import ProductDetailsWrapper from "./ProductDetailsWrapper";
import ProductCards from "./ProductCards";

const ProductDetailes = () => {
  return (
    <ProductDetailsWrapper>
      <div className="container">
        <div className="row">
          <div className=" col-md-12  col-lg-6 ">
            <img
              src="/img/shirt-1.png"
              className="width w-100 container  mt-3"
              alt="rasm11"
            />
          </div>
          <div className="col col-md-12  col-lg-6 card2">
            <h3>RED TSHIRT</h3>
            <div className="text-secondary">
              <p>Men red & Grey Checked Casual Shirt </p>
            </div>
            <div>
              <FontAwesomeIcon icon={fa500px} />
              <FontAwesomeIcon icon={fa500px} />
              <FontAwesomeIcon icon={fa500px} />
              <FontAwesomeIcon icon={fa500px} />
              <FontAwesomeIcon icon={fa500px} />
              <p>41 reviews</p>
              <h3>CURRENT PRICE: $180</h3>
            </div>

            <div>
              <p>
                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                cubilia sem sem! Repudiandae et! Massa senectus enim minim
                sociosqu delectus posuere.
              </p>
            </div>
            <div>
              <p>91% of buyers enjoyed this product! (87 votes)</p>
            </div>

            <div className="d-flex flex-wrap radioCheck mb-3">
              <h6 className="w-100">SIZES:</h6>

              <div class="form-check form-check-inline fieldset">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                ></input>
                <label class="form-check-label" for="inlineRadio1">
                  S
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                ></input>
                <label class="form-check-label" for="inlineRadio2">
                  M
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                ></input>
                <label class="form-check-label" for="inlineRadio2">
                  X
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                ></input>
                <label class="form-check-label" for="inlineRadio2">
                  XL
                </label>
              </div>
            </div>
            <div className="d-flex flex-wrap  mb-3">
              <h6>COLORS:</h6>
              <div class="form-check fieldset">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                ></input>
              </div>
              <div class="form-check fieldset">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                ></input>
              </div>
              <div class="form-check fieldset">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                ></input>
              </div>
              <div class="form-check fieldset">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                ></input>
              </div>
            </div>
            <div className="d-flex flex-wrap">
              <h6 className="w-100">QUANTITY:</h6>
              <FormControl className="pt-0 mb-3 fieldset">
                <InputLabel id="demo-customized-select-label"></InputLabel>
                <Select>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={30}>4</MenuItem>
                  <MenuItem value={30}>5</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* BUTON GROUP */}

            <div className="">
              <Button className="button1" variant="contained" color="secondary">
                ADD TO WISHLIST
              </Button>

              <Button variant="contained" className="bg-success text-light">
                ADD TO CARD
              </Button>
            </div>
          </div>
        </div>
        <ProductCards></ProductCards>
      </div>
    </ProductDetailsWrapper>
  );
};

export default ProductDetailes;
