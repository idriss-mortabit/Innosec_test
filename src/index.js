import React,  { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './styles/bootstrap4/bootstrap.min.css';
import './index.css';
import  { Redirect } from 'react-router-dom'
import jQuery from 'jquery';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = ({mydata: '',myCU: '', id:''}) 
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleit = this.handleit.bind(this);
  }
  handleit(event){
    this.setState({
      id: event.target.dataset.value
    })
  }
  handleEdit(event) {
    this.setState({
      id: event.target.id
    }, function (){
    axios.get("api/get/postdatabills").then(response =>{
      console.log("My api response", response.data)
      this.setState({
        myCU : response.data.map((line) => {
        console.log("My api response", line.company)
        console.log("My id " + this.state.id + " line ", line.id)
        if (line.id == this.state.id){
          return (
              <Bill action='edit' name='Edit Bill' billtext={line.billtext}  csvfilename={line.csvfilename}  payday={line.payday} Unsicher={line.Unsicher}  ignored={line.ignored}  aktenziech={line.aktenziech} id={line.id}  company={line.company}  signeddate={line.signeddate}  amount={line.amount} purpose={line.purpose}  reminder={line.reminder}  billNumber={line.billNumber}  fraction={line.fraction} done={line.done}  status={line.status}  billHtml={line.billHtml}  dueDate={line.dueDate} Komment={line.Komment}  halfbills={line.halfbills}  date={line.date}  printeddate={line.printeddate}/>
            );
        }
           })
          })
        })
         .catch(err=> {
           console.log("FETCH_DATA_ERROR", err)

           })
          })
          }
  handleAdd(event) {
    this.setState({
      myCU : <Bill action='add' name='Add Bill' billtext=''  csvfilename='' payday=''Unsicher='' ignored='' aktenziech=''id='' company='' signeddate='' amount=''purpose='' reminder='' billNumber='' fraction=''done='' status='' billHtml='' dueDate=''Komment=''halfbills='' date='' printeddate=''/>
    })
  }
  componentDidMount() {
    this.renderPosts();
  }
  renderPosts = async() => {axios.get("api/get/postdatabills").then(response =>{
                        console.log("My api response", response.data)
                        this.setState({
                          mydata : response.data.map((line) => {
                          console.log("My api response", line.company)
                          return (
                            <tr>
                                <th scope="row" >{line.id}</th>
                                <th>{line.date}</th>
                                <th>{line.company}</th>
                                <th>{line.amount}</th>
                                <th><button className="btn next-btn" id={line.id} onClick={this.handleEdit}>Edit</button></th>
                            </tr>
                               );
                             })
                            })
                          })
                           .catch(err=> {
                             console.log("FETCH_DATA_ERROR", err)
                             })}
    render(){
        return(
            <div >
              <button className="btn next-btn" onClick ={this.handleAdd}>Add Bill</button>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">date</th>
                          <th scope="col">company</th>
                          <th scope="col">amount</th>
                          <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.mydata}
                    </tbody>
                </table>  
                    {this.state.myCU}        
            </div>
        );
  }
}
class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = ({value1: this.props.id}) 
        this.state = ({value2: this.props.company})
        this.state = ({value3: this.props.date}) 
        this.state = ({value4: this.props.purpose}) 
        this.state = ({value5: this.props.reminder})
        this.state = ({value6: this.props.amount}) 
        this.state = ({value7: this.props.billNumber})
        this.state = ({value8: this.props.fraction}) 
        this.state = ({value9: this.props.done})
        this.state = ({value10: this.props.status}) 
        this.state = ({value11: this.props.billHtml}) 
        this.state = ({value12: this.props.dueDate})
        this.state = ({value13: this.props.Komment}) 
        this.state = ({value14: this.props.halfbills})
        this.state = ({value15: this.props.printeddate}) 
        this.state = ({value16: this.props.signeddate})
        this.state = ({value17: this.props.Unsicher}) 
        this.state = ({value18: this.props.ignored}) 
        this.state = ({value19: this.props.aktenziech})
        this.state = ({value20: this.props.billtext}) 
        this.state = ({value21: this.props.payday})
        this.state = ({value22: this.props.csvfilename}) 
        this.state = ({action: this.props.action})     
        this.state = ({mydata: ''})  
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
        this.backHome = this.backHome.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      backHome(event){
        return(
          <Home cliked='false' />
        )
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
          lid : this.props.id,
          action : this.state.action,
          id : this.state.value1,
          company : this.state.value2,
          date : this.state.value3,
          purpose : this.state.value4.trim(),
          reminder : this.state.value5,
          amount : this.state.value6,
          billNumber : this.state.value7,
          fraction : this.state.value8, 
          done : this.state.value9,
          status : this.state.value10,
          billHtml : this.state.value11.trim(),
          dueDate : this.state.value12.trim(),
          Komment : this.state.value13.trim(),
          halfbills : this.state.value14,
          printeddate : this.state.value15.trim(),
          signeddate : this.state.value16.trim(),
          Unsicher : this.state.value17,
          ignored : this.state.value18,
          aktenziech : this.state.value19.trim(),
          billtext : this.state.value20.trim(),
          payday : this.state.value21.trim(),
          csvfilename : this.state.value22.trim()
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
          console.log(data)
          window.location.href="/bill_added"
          console.log(data)
          event.preventDefault();
      } 

componentDidMount() {
  this.renderPosts();
  this.setState({
    action: this.props.action
  })
  this.setState({
    value1: this.props.id
  })
  this.setState({
    value2: this.props.company
  })
  this.setState({
    value20: this.props.billtext
  })
  this.setState({
    value18: this.props.ignored
  })
  this.setState({
    value17: this.props.Unsicher
  })
  this.setState({
    value21: this.props.payday
  })
  this.setState({
    value22: this.props.csvfilename
  })
  this.setState({
    value6: this.props.amount
  })
  this.setState({
    value16: this.props.signeddate
  })
  this.setState({
    value15: this.props.printeddate
  })
  this.setState({
    value3: this.props.date
  })
  this.setState({
    value14: this.props.halfbills
  })
  this.setState({
    value13: this.props.Komment
  })
  this.setState({
    value12: this.props.dueDate
  })
  this.setState({
    value11: this.props.billHtml
  })
  this.setState({
    value10: this.props.status
  })
  this.setState({
    value9: this.props.done
  })
  this.setState({
    value8: this.props.fraction
  })
  this.setState({
    value7: this.props.billNumber
  })
  this.setState({
    value5: this.props.reminder
  })
  this.setState({
    value19: this.props.aktenziech
  })
  this.setState({
    value4: this.props.purpose
  })
}
renderPosts = async() => {axios.get("api/get/postdatacompanies").then(response =>{
                      console.log("My api response", response.data)
                      this.setState({
                        mydata : response.data.map((line) => {
                        console.log("My api response", line.company)
                        return (
                            <option value={line.company}>{line.company}</option>
                            );
                        }
                      )})
                          })
                         .catch(err=> {
                           console.log("FETCH_DATA_ERROR", err)
   
                           })}
    render(){
        return(
            <div className="container">
            <form className='form' onSubmit={this.handleSubmit}>
            <h2>{this.props.name}</h2>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Id</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.id} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value1} onChange={this.handleChange1}/>
                    </div>
                </div>
                <div className="form-group row">
                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Company</label>
                <select class="form-control" defaultValue={this.props.company} id="sel1" value={this.state.value2} onChange={this.handleChange2}>
                  <option value="">-- Please select --</option>
                  {this.state.mydata}  
                </select>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Date</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.date} type="date" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value3} onChange={this.handleChange3} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Purpose</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.purpose} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value4} onChange={this.handleChange4} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Reminder</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.reminder} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value5} onChange={this.handleChange5} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">amount</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.amount} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value6} onChange={this.handleChange6} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">billNumber</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.billNumber} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value7} onChange={this.handleChange7} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">fraction</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.fraction} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value8} onChange={this.handleChange8} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">done</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.done} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value9} onChange={this.handleChange9} />
                    </div>
                </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">status</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.status} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value10} onChange={this.handleChange10} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">billHtml</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.billHtml} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value11} onChange={this.handleChange11} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">dueDate</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.dueDate} type="date" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value12} onChange={this.handleChange12} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Komment</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.Komment} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value13} onChange={this.handleChange13} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">halfbills</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.halfbills} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value14} onChange={this.handleChange14} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">printeddate</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.printeddate} type="date" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value15} onChange={this.handleChange15} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">signeddate</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.signeddate} type="date" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value16} onChange={this.handleChange16} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Unsicher</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.Unsicher} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value17} onChange={this.handleChange17} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">ignored</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.ignored} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value18} onChange={this.handleChange18} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">aktenziech</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.aktenziech} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value19} onChange={this.handleChange19} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">billtext</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.billtext} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value20} onChange={this.handleChange20} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">payday</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.payday} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value21} onChange={this.handleChange21} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">csvfilename</label>
                    <div className="col-sm-10">
                    <input  defaultValue={this.props.csvfilename} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" value={this.state.value22} onChange={this.handleChange22} />
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
