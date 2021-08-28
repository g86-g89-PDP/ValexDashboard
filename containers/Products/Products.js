import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import ProductsWrapper from "./ProductsWrapper";

const Products = () => {
  return (
    <ProductsWrapper>
      <div className="m-1">
        <div>
          <div>
            <p>Ecommerce</p>
            <p> / Products</p>
          </div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div>
              <FormControl className="formControl">
                <InputLabel htmlFor="grouped-native-select">
                  Grouping
                </InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                  <option aria-label="None" value="" />
                  <optgroup label="Category 1">
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                  </optgroup>
                  <optgroup label="Category 2">
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                  </optgroup>
                </Select>
              </FormControl>
              <FormControl className="formControl">
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Category 1</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Category 2</ListSubheader>
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
