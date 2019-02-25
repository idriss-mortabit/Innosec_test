import React from 'react'
import PropTypes from 'prop-types'

import './../../styles/clientorder.css';
import { Button, Grid} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Cart  = ({ products, total, onCheckoutClicked }) => {
  function removeProduct(product){
    const { products } = this.props;

    const index = products.findIndex(p => p.id === product.id);
    if (index >= 0) {
      products.splice(index, 1);
      
    }
  };
  const hasProducts = products.length > 0
  
  const nodes = hasProducts ? (
    products.map(product =>
{ const background = require("./../../images/"+product.image)
  return ( 
	<table id="cart" className="table table-hover table-condensed">
      		<thead>
						<tr>
							<th style={{width: 50}}>Product</th>
							<th style={{width: 10}}>Quantity</th>
							<th sstyle={{width: 8}}>Price</th>
							<th sstyle={{width: 10}}></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td data-th="Product">
								<div className="row">
                  <div className="col-sm-2 hidden-xs"><img src={background} style={{width:130,height:150}} alt="..." className="img-responsive"/></div>
									<div className="col-sm-10">
										<h5 className="nomargin">{product.title}</h5>
									</div>
								</div>
							</td>
              <td data-th="Price">{product.quantity}</td>
							<td data-th="Price">{product.price}</td>
						</tr>
					</tbody>
				</table>)}
    )
  ) : (
    <em>Please add some products to cart.</em>
  )
  
  return (
    <div className="container" >
    <Grid className="purchase-card" style={{overflowY: 'scroll',overflowX: 'hidden', maxHeight:400}}>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <center><Link to='/shop/products/checkout'><Button block bsStyle="success" className="btn-round" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </Button>
      </Link>
      </center>
      </Grid>
    </div>
  )
}
Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
