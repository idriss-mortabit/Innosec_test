import React,  { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './styles/bootstrap4/bootstrap.min.css';
import './index.css';
import  { Redirect } from 'react-router-dom'
//import Terms from './term_of_use/terms';

class Home extends Component {
    render(){
        return(
            <div >
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>

                   
            </div>
        );
    }
}
class AddBill extends Component {
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
    render(){
        return(
            <div class="container">
            <form className='form'>
            <h2>Add Bill</h2>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

const Redirectionhome = () => {
       return <Redirect to='/home'  />
   }
class App extends Component {
    render(){
        return (
            <Router>
                <div>
                <Route exact path={"/"} component={Redirectionhome} />
                <Route path={"/home"} component={Home} />
                <Route path={"/add_bill"} component={AddBill} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, 
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
