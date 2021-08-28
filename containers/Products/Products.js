import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiAlignJustify } from "react-icons/bi";
import { RiRestartLine } from "react-icons/ri";
import ProductsWrapper from "./ProductsWrapper";

const Products = () => {
  return (
    <ProductsWrapper>
      <div className="productmains">
        <div>
          <div className="d-flex texts">
            <p className="text">Ecommerce</p>
            <p className="smiletext"> / Products</p>
          </div>
          <div>
            <div>
              <button className="btn humburger">
                <BiAlignJustify />
              </button>
              <button className="btn star">
                <AiFillStar />
              </button>
              <button className="btn restart">
                <RiRestartLine />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div>
              <FormControl className="formControl">
                <InputLabel
                  className="text-white"
                  htmlFor="grouped-native-select"
                >
                  Grouping
                </InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                  <option aria-label="None" value="" />
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                  <option value={4}>Option 4</option>
                </Select>
              </FormControl>
              <FormControl className="formControl">
                <InputLabel className="text-white" htmlFor="grouped-select">
                  Grouping
                </InputLabel>
                <Select defaultValue="" id="grouped-select">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </ProductsWrapper>
  );
};

export default Products;
