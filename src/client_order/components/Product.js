import React from 'react'
import PropTypes from 'prop-types'
import './../../styles/newarrivials.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Product = ({ price, quantity, title ,image, link }) => {
  const background = require("./../../images/"+image)
 
 return(
  <div className="product-item men">
  <div >
    <div className="product_image">
    <Link to={link}><img className="img-responsive" src={background} alt="" /></Link>
    </div>
    <div className="product_bubble product_bubble_right product_bubble_red align-items-center">
    <span>-$20</span>
    </div>
    <div className="product_info">
      <h6 className="product_name"><Link to={link}>{title}
      </Link></h6>
      <div className="product_price">{price} DH<span>{(price*1.1).toFixed(2)} DH</span></div>
  
    </div>
  </div>
</div>

)
 }

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}

export default Product
