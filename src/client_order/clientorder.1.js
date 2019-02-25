import React, { Component } from 'react';
//import { Grid } from 'react-bootstrap';
//import SubTotal from './components/Subtotal/Subtotal';
//import PickupSavings from './components/PickupSavings/PickupSavings';
//import TaxesFees from './components/TaxesFees/TaxesFees';
//import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
//import ItemDetails from './components/ItemDetails/ItemDetails';
//import PromoCodeDiscount from './components/PromoCode/PromoCode';
import './../styles/clientorder.css';

// Import redux provider
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from './actions'
import { getTotal, getCartProducts } from './reducers'
import Cart from './components/Cart.1'
//import { handleChange } from './actions/promoCodeActions';

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)

