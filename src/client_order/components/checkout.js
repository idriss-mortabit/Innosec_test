import React, { Component } from 'react';
import CartContainer from './../clientorder.1'
import { connect } from 'react-redux'
import { getTotal, getCartProducts } from './../reducers'
import PropTypes from 'prop-types'
import './../../styles/checkout.css'
import { Link } from "react-router-dom";
import jQuery from 'jquery';
import  $ from 'jquery';



class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = ({value1: ''}) 
    this.state = ({value2: ''})
    this.state = ({value3: ''}) 
    this.state = ({value4: ''}) 
    this.state = ({value5: ''})
    this.state = ({value6: ''}) 
    this.state = ({value7: ''}) 
    this.state = {button: 'disabled'};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange3(event){
    this.setState({value3: event.target.value},function () {
      if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined){
        this.setState({button: 'disabled'})
      }
      else{
        if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== ""){
          this.setState({button: ''})
        }
        else{
          this.setState({button: 'disabled'})
        }
      }
  })
  }
  handleChange2(event){
    this.setState({value2: event.target.value},function () {
      if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined){
        this.setState({button: 'disabled'})
      }
      else{
        if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== ""){
          this.setState({button: ''})
        }
        else{
          this.setState({button: 'disabled'})
        }
      }
  }) 
  }
  handleChange1(event){
    this.setState({value1: event.target.value},function () {
      if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined){
        this.setState({button: 'disabled'})
      }
      else{
        if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== ""){
          this.setState({button: ''})
        }
        else{
          this.setState({button: 'disabled'})
        }
      }
  })
  }
  handleChange4(event){
    this.setState({value4: event.target.value},function () {
      if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined){
        this.setState({button: 'disabled'})
      }
      else{
        if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== ""){
          this.setState({button: ''})
        }
        else{
          this.setState({button: 'disabled'})
        }
      }
  })
  }
  handleChange5(event){
    this.setState({value5: event.target.value},function () {
      if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined){
        this.setState({button: 'disabled'})
      }
      else{
        if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== ""){
          this.setState({button: ''})
        }
        else{
          this.setState({button: 'disabled'})
        }
      }
  }) 
  }
  handleChange6(event){
    this.setState({value6: event.target.value},function () {
      if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined){
        this.setState({button: 'disabled'})
      }
      else{
        if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== ""){
          this.setState({button: ''})
        }
        else{
          this.setState({button: 'disabled'})
        }
      }
  })
  }
  handleChange7(event){
    this.setState({value7: event.target.value},function () {
      if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined){
        this.setState({button: 'disabled'})
      }
      else{
        if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== ""){
          this.setState({button: ''})
        }
        else{
          this.setState({button: 'disabled'})
        }
      }
  })
      }

  handleSubmit(event) {
    var client = {
      first_name: this.state.value1.trim(),
      last_name: this.state.value2.trim(),
      email: this.state.value4,
      phone: this.state.value3.trim(),
      address: this.state.value5,
      city: this.state.value6,
      state: this.state.value7
    }
      var products = [] 
      for(var i=0; i<this.props.products.length ; i=i+1) {
        products.push({
          product_id: this.props.products[i].id,
          quantity : this.props.products[i].quantity
        })
      }
      var data =[{costumer:client, cart:products, total:this.props.total}]
      console.log(data)
      function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
      var request = new XMLHttpRequest();
      request.open('POST', '/api/get/orders', true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('X-CSRFToken', csrftoken);
      request.send(JSON.stringify(data));
      window.location.href="/shop/products/checkout/ordersuccess"
      event.preventDefault();
  } 
    render() {
      return (
<div className="checkout-panel">
  <div className="panel-body">
    <h2 className="title">Checkout</h2>
    <div className="progress-bar">
      <div className="step active"></div>
      <div className="step"></div>
      <div className="step"></div>
      <div className="step"></div>
    </div>
    <div class="input-fields">
        <form onSubmit={this.handleSubmit}>
      <div className="form-row">
      <div className="form-group col-md-6">
          <label for="inputCity">First Name</label>
          <input type="text" className="form-control" id="inputCity"  placeholder="First Name" value={this.state.value1} onChange={this.handleChange1} />
        </div>
        <div className="form-group col-md-6">
          <label for="inputCity">Last Name</label>
          <input type="text" className="form-control" id="inputCity" placeholder="Last Name" value={this.state.value2} onChange={this.handleChange2} />
        </div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" className="form-control form-control-lg" id="inputEmail4" placeholder="Email" value={this.state.value4} onChange={this.handleChange4}  />
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Phone</label>
          <input type="text" className="form-control" id="inputPassword4" placeholder="Phone"  value={this.state.value3} onChange={this.handleChange3} />
        </div>
      </div>
      <div className="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Address" value={this.state.value5} onChange={this.handleChange5} />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" placeholder="City" value={this.state.value6} onChange={this.handleChange6} />
        </div>
        <div className="form-group col-md-6">
          <label for="inputCity">State</label>
          <input type="text" className="form-control" id="inputCity" placeholder="State" value={this.state.value7} onChange={this.handleChange7} />
        </div>
      </div>
    </form>
    <div >
    <CartContainer />
    </div>
    </div>
    </div>
  <div className="panel-footer">
    <Link to='/shop'><button className="btn back-btn">Back To Store</button></Link>
    <button type="submit" disabled={this.state.button} className="btn next-btn" onClick ={this.handleSubmit}>Confirmation</button>
  </div>
</div>
      )}}

class Order extends Component {
  render() {
    return (
<div className="checkout-panel">
<div className="panel-body">
  <h2 className="title">Checkout</h2>
  <div className="progress-bar">
    <div className="step active"></div>
    <div className="step active"></div>
    <div className="step"></div>
    <div className="step"></div>
  </div>
  <div className="alert alert-success alert-dismissible">
  <h2><strong>Success!</strong></h2> 
  <h5>Your order is successfully registered, we will contact you as soon as possible.<br /> Thank you for shopping with us</h5>
</div>
 </div>
<div className="panel-footer">
<Link to='/shop'><button className="btn store-btn center-block" >Back To Store</button></Link>
</div>
</div>
    )}}

Checkout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})    
export default connect(mapStateToProps)(Checkout)
export { Order}

/*class Test extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters";
      }      	
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }



    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      alert("Form has errors.")
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render(){
    return (
      <div>        	
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <fieldset>
              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
              <span className="error">{this.state.errors["name"]}</span>
              <br/>
              <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span className="error">{this.state.errors["email"]}</span>
              <br/>
              <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
              <br/>
              <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
              <br/>
            </fieldset>
          </div>
          <div className="col-md-6">
            <fieldset>
              <textarea refs="message" cols="28" rows="10"
                className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
}*/