import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import PropTypes from 'prop-types'
import Product from './Product'
import './../../styles/product.css';
import { Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory} 
      image={product.image}
      link={product.link}/>
    <div 
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      <Fragment>
      <MDBBtn color="primary">
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </MDBBtn>
      </Fragment></div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
