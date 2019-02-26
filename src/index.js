import React,  { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './styles/bootstrap4/bootstrap.min.css';
import './index.css';
import  { Redirect } from 'react-router-dom'
//import Terms from './term_of_use/terms';

class Home extends Component {
  constructor(props) {
    super(props);
    this.Getdata = this.Getdata.bind(this);
  Getdata(){
    console.log("onload...")
    var file
        request
            .get('/api/get/postdata')
            .query({ query: 'Manny' })
            .query({ range: '1..5' })
            .query({ order: 'desc' })
            .set('API-Key', 'foobar')
            .set('Accept', 'application/json')
            .end((err, resp) => {
            if (!err) {
                console.log("success")
                file =  JSON.parse(resp.text)
                console.log(file)
                return file
            } 
            else {
                console.log("failed")
                console.log(err)
                console.log("end")
                return []
            }
            })
}
    render(){
        return(
            <div >
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.Getdata.map(line =>{
                      return(
                            <tr>
                                <td scope="row">{line.id}</td>
                                <td>{line.date}</td>
                                <td>{line.company}</td>
                                <td>{line.amount}</td>
                            </tr>
                    )})}
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
        this.state = ({value8: ''}) 
        this.state = ({value9: ''})
        this.state = ({value10: ''}) 
        this.state = ({value11: ''}) 
        this.state = ({value12: ''})
        this.state = ({value13: ''}) 
        this.state = ({value14: ''})
        this.state = ({value15: ''}) 
        this.state = ({value16: ''})
        this.state = ({value17: ''}) 
        this.state = ({value18: ''}) 
        this.state = ({value19: ''})
        this.state = ({value20: ''}) 
        this.state = ({value21: ''})
        this.state = ({value22: ''})     
        this.state = {button: 'disabled'};
    
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);
        this.handleChange8 = this.handleChange8.bind(this);
        this.handleChange9 = this.handleChange9.bind(this);
        this.handleChange10 = this.handleChange10.bind(this);
        this.handleChange11 = this.handleChange11.bind(this);
        this.handleChange12 = this.handleChange12.bind(this);
        this.handleChange13 = this.handleChange13.bind(this);
        this.handleChange14 = this.handleChange14.bind(this);
        this.handleChange15 = this.handleChange15.bind(this);
        this.handleChange16 = this.handleChange16.bind(this);
        this.handleChange17 = this.handleChange17.bind(this);
        this.handleChange18 = this.handleChange18.bind(this);
        this.handleChange19 = this.handleChange19.bind(this);
        this.handleChange20 = this.handleChange20.bind(this);
        this.handleChange21 = this.handleChange21.bind(this);
        this.handleChange22 = this.handleChange22.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange1(event){
        this.setState({value1: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
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
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange3(event){
        this.setState({value3: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
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
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
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
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
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
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
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
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange8(event){
        this.setState({value8: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange9(event){
        this.setState({value9: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange10(event){
        this.setState({value10: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange11(event){
        this.setState({value11: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange12(event){
        this.setState({value12: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange13(event){
        this.setState({value13: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange14(event){
        this.setState({value14: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange15(event){
        this.setState({value15: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange16(event){
        this.setState({value16: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange17(event){
        this.setState({value17: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange18(event){
        this.setState({value18: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange19(event){
        this.setState({value19: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange20(event){
        this.setState({value20: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange21(event){
        this.setState({value21: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
      handleChange22(event){
        this.setState({value22: event.target.value},function () {
          if (this.state.value1 === undefined || this.state.value2 === undefined || this.state.value3 === undefined || this.state.value4 === undefined || this.state.value5 === undefined || this.state.value6 === undefined || this.state.value7 === undefined || this.state.value8 === undefined || this.state.value9 === undefined || this.state.value10 === undefined || this.state.value11 === undefined || this.state.value12 === undefined || this.state.value13 === undefined || this.state.value14 === undefined || this.state.value15 === undefined || this.state.value16 === undefined || this.state.value17 === undefined || this.state.value18 === undefined || this.state.value19 === undefined || this.state.value20 === undefined || this.state.value21 === undefined || this.state.value22 === undefined){
            this.setState({button: 'disabled'})
          }
          else{
            if (this.state.value1 !== "" && this.state.value2 !== "" && this.state.value3 !== "" && this.state.value4 !== "" && this.state.value5 !== "" && this.state.value6 !== "" && this.state.value7 !== "" && this.state.value8 !== "" && this.state.value9 !== "" && this.state.value10 !== "" && this.state.value11 !== "" && this.state.value12 !== "" && this.state.value13 !== "" && this.state.value14 !== "" && this.state.value15 !== "" && this.state.value16 !== "" && this.state.value17 !== "" && this.state.value18 !== "" && this.state.value19 !== "" && this.state.value20 !== "" && this.state.value21 !== "" && this.state.value22 !== ""){
              this.setState({button: ''})
            }
            else{
              this.setState({button: 'disabled'})
            }
          }
      })
      }
    
      handleSubmit(event) {
        var data = {
          id = this.state.value1.trim(),
          company = this.state.value2,
          date = this.state.value3,
          purpose = this.state.value4.trim(),
          reminder = this.state.value5.trim(),
          amount = this.state.value6.trim(),
          billNumber = this.state.value7.trim(),
          fraction = this.state.value8.trim(), 
          done = this.state.value9.trim(),
          status = this.state.value10.trim(),
          billHtml = this.state.value11.trim(),
          dueDate = this.state.value12.trim(),
          Komment = this.state.value13.trim(),
          halfbills = this.state.value14.trim(),
          printeddate = this.state.value15.trim(),
          signeddate = this.state.value16.trim(),
          Unsicher = this.state.value17.trim(),
          ignored = this.state.value18.trim(),
          aktenziech = this.state.value19.trim(),
          billtext = this.state.value20.trim(),
          payday = this.state.value21.trim(),
          csvfilename = this.state.value22.trim(),
        }
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
          request.open('POST', '/api/get/getbill', true);
          request.setRequestHeader('Content-Type', 'application/json');
          request.setRequestHeader('X-CSRFToken', csrftoken);
          request.send(JSON.stringify(data));
          window.location.href="/bill_added"
          event.preventDefault();
      } 
    render(){
        return(
            <div className="container">
            <form className='form' onSubmit={this.handleSubmit}>
            <h2>Add Bill</h2>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Id</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value1} onChange={this.handleChange1}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Company</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value2} onChange={this.handleChange2}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Date</label>
                    <div className="col-sm-10">
                    <input type="date" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value3} onChange={this.handleChange3} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Purpose</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value4} onChange={this.handleChange4} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Reminder</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value5} onChange={this.handleChange5} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">amount</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value16} onChange={this.handleChange6} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">billNumber</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value7} onChange={this.handleChange7} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">fraction</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value8} onChange={this.handleChange8} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">done</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value9} onChange={this.handleChange9} />
                    </div>
                </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">status</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value10} onChange={this.handleChange10} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">billHtml</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value11} onChange={this.handleChange11} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">dueDate</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value12} onChange={this.handleChange12} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Komment</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value13} onChange={this.handleChange13} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">halfbills</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value14} onChange={this.handleChange14} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">printeddate</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value15} onChange={this.handleChange15} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">signeddate</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value16} onChange={this.handleChange16} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Unsicher</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value17} onChange={this.handleChange17} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">ignored</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value18} onChange={this.handleChange18} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">aktenziech</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value19} onChange={this.handleChange19} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">billtext</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value20} onChange={this.handleChange20} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">payday</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value21} onChange={this.handleChange21} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">csvfilename</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value22} onChange={this.handleChange22} />
                    </div>
                    </div>
            </form>
            <div className="panel-footer">
    <button type="submit" disabled={this.state.button} className="btn next-btn" onClick ={this.handleSubmit}>Submit</button>
  </div>
            </div>
        );
    }
}

const Redirectionhome = () => {
       return <Redirect to='/home'  />
   }
class BillAdded extends Component {
  render(){
    return(
        <h1>Bill Added Successfully</h1>
    );
  }
  }
class App extends Component {
    render(){
        return (
            <Router>
                <div>
                <Route exact path={"/"} component={Redirectionhome} />
                <Route path={"/home"} component={Home} />
                <Route path={"/add_bill"} component={AddBill} />
                <Route path={"/bill_added"} component={BillAdded} />
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
