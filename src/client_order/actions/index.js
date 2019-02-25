import React from 'react'
import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import axios from 'axios';

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})
export const getAllProducts = () => dispatch => {
    dispatch({type: "GET_PRODUCTS"})
    axios.get("/api/get/products").then(response =>{
          console.log("My api response", response.data)
          dispatch({type: types.RECEIVE_PRODUCTS, payload: response.data})
        })
      .catch(err=> {
        dispatch({type: "FETCH_PRODUCTS_ERROR", payload: err})

      })
  }

// export const getAllProducts = () => dispatch => {
//   shop.getProducts(products => {
//     dispatch(receiveProducts(products))
//   })
// }

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {

  return (
    <h1>ya allah</h1>
  )
}
