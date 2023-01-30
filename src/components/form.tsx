import React, { Component } from 'react';

interface State {
  email: string;
  password: string;
}

interface Props {
       formName:any;
 }
//  export default class SidebarItem extends Component<Props> {
class LoginForm extends Component<Props> {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', this.state.email);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <form  id = "menuform" onSubmit={this.handleSubmit}>
        <h1>{this.props.formName}</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br/>
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br/>
        
        <input
          type="Number"
          name="Number"
          placeholder="Number"
        />

        <br/>
        <input
          type="Address"
          name="Address"
          placeholder="Address"
        />

        <br/>
       
        <input
          type="city"
          name="city"
          placeholder="city"
        />

        <br/>

       <input type="text" placeholder="School" name="school" /><br/>

       
        {/* <input type="radio" id="class10" name="class" value="10"   placeholder="10th Class"/>
        
        <input type="radio" id="class12" name="class" value="12"  placeholder="12th  Class" /> */}
        
      
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;

// import SidebarItem from './SidebarItem'
// import items from "./data.json"
// import { useState } from "react"
// import './sidebar.css'


// export default function Sidebar(){
//   const [inputValue, setinputValue] = useState("")

//     return (
         
//         <div className="sidebar">
//           <div>
//             <input type="text" onKeyDown = {e => {
//               if(e.key === "Enter") {
//                 setinputValue(e.target.value);
//               }
//             }}/>

//           </div>
//           <div>
//           { items.map((item, index) => <SidebarItem key={index} item={item} inputValue={inputValue} />) }
//           </div>
//         </div>
//     )
// }