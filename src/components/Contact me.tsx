
import React from 'react';
import Navbar from '../components/Navbar';
import { render } from "react-dom";

export default class Contact extends React.Component{
  state = {
    FirstName : "",
    LastName: "" ,
    number: "",
    city: "",
};

submitForm = (e:any) =>{
  e.preventDefault();
  // alert("form Submitted")
  // const isValid = this.formValidation( );
  console.log(this.state.FirstName);
  console.log(this.state.LastName);
  console.log(this.state.city);
  console.log(this.state.number);

const objectdata ={
  FirstName:this.state.FirstName,
  LastName: this.state.LastName,
  number:this.state.number,
  city: this.state.city,
  }


//POST API CODE
fetch("testurl.com/contactme", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify( objectdata)
})
.then((resp)=>{
  // console.warn("resp",resp);;
  resp.json().then((result)=>{
    console.warn("result",result)
  })
})


}

  render()
 {
  return (
    <>
     <Navbar/>
       <form   onSubmit={this.submitForm}  id="loginform">
            <label htmlFor = "email"> FirstName </label>  &nbsp; &nbsp;
            <input  type="text" name="email" id="email" autoComplete="off" 
            value = {this.state.FirstName}
            onChange = {(e:any)=> this.setState({FirstName : e.target.value})} />
          
            <br/>
            <br/>
            
            <label htmlFor = "passward"> LastName </label> &nbsp;&nbsp; &nbsp;
            <input  type="password" name="password" id="password" autoComplete="off" 
            value = {this.state.LastName}
            onChange = {(e:any)=> this.setState({LastName : e.target.value})} />
          
            <br/>
            <br/>
          


            <label htmlFor = "number">  Number  </label> &nbsp; &nbsp;&nbsp; &nbsp;
            <input  type="number" name="number" id="number" autoComplete="off" 
            value = {this.state.number}
            onChange = {(e:any)=> this.setState({number : e.target.value})} />
            
            <br/>
            <br/>

            <label htmlFor = "city"> city </label>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <input  type="text" name="city" id="city" autoComplete="off" 
            value = {this.state.city}
            onChange = {(e:any)=> this.setState({city : e.target.value})} />

            <br/>
            <br/>
            <button id="button" type="submit"> Contact me </button>

       </form>
       
    </>
  );
 }
}



