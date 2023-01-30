import React, { Component } from 'react'
import Home from '../components/home';
import { Link }from 'react-router-dom' 
import { isConstructorDeclaration } from 'typescript';
// import { withRouter } from 'react-router-dom';
   





export default class Login extends Component<tState> {
  Constructor()
  {
    // super();
    // this.State= {
                
    // }
  }
    state ={
            user:(""),
            password:(""),
            userErr:false,
            passErr:false,
           }


 loginHandle=(e:any) =>
    {
      // e.preventDefault();
      if(this.state.user.length<5 ||this.state.password.length<5)
        {
            alert("Enter Email and password")
        }
        else 
        {
            
        
           window.location.href ='/home'
          // this.props.history.push('/home');
          
        }
        e.preventDefault()
    };
// Validation Start
        userHandler=(e:any)=>{        
          let item=e.target.value;
          if(item.length<5 )
            {
              this.setState({userErr:true});
            }
          else
            {
              this.setState({userErr:false});
            }
            localStorage.setItem('user', item);
 
            this.setState({user:item});
            console.log(e.target.value); 
          }

          passwordHandler=(e:any)=>{
            let item=e.target.value;
            if(item.length<5 )
            {
                this.setState({passErr:true});
            }
            else
            {
                this.setState({passErr:false});
            }
            
            this.setState({password:item});
            console.log(e.target.value)
            
          }



   render() {


        return (
          <div className='Login'>
              <h1>Login Form</h1>
             
              <br/><br/>
            <form  onSubmit={this.loginHandle}>
            Username &nbsp;&nbsp;<input type="text" placeholder="Enter User Id" onChange={this.userHandler} />{this.state.userErr?<span>User Not Valid</span>:""}
              <br /> <br />
              Password&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" placeholder="Enter User Password" onChange={this.passwordHandler}/>{this.state.passErr?<span>Password Not Valid</span>:""}

              <br /> <br />
           <button id="button"  type="submit" >Login</button>
            </form>
          </div>
        )
        }


}
type tState = {

}
// import React from "react";
// import {Link} from "react-router-dom"

// import { render } from "react-dom";

// export default class Login extends React.Component{
//     state = {
//         email : "",
//         password : "" ,
//         emailError: "",
//         passwordError: "",
//     };

//     Login = () => {
//     }
//     formValidation = () =>{
//         const{email, password , } = this.state;
//           let isValid = true;

//           if (!email) {
//             this.setState({ emailError: 'Email is required' });
//             isValid = false;
//           } 

//             else if (!/^\S+@\S+\.\S+$/.test(email)) {
//                this.setState({ emailError: 'Invalid email address' });
//                isValid = false;
//               } 

//                else {
//                      this.setState({ emailError: '' });
//                     }
      
//         if (!password) {
//             this.setState({ passwordError: 'Password is required' });
//             isValid = false;
//            } 
//               else if (password.length < 6)
//               {
//                 this.setState({ passwordError: 'Password must be at least 6 characters' });
//                 isValid = false;
//               } 
              
//                else {
//                      this.setState({ passwordError: '' });
//                   }

//         return isValid;
        
//     }

//     submitForm = (e:any) =>{
//          e.preventDefault();
//          const isValid = this.formValidation();
//     }

//     render() {    
//     return(
//        <form onSubmit={this.submitForm}  id="loginform">
//             <label htmlFor = "email"> Email </label>
//             <input  type="text" name="email" id="email" autoComplete="off" 
//             value = {this.state.email}
//             onChange = {(e:any)=> this.setState({email : e.target.value})} />

//             <br/>
//             <br/>
             
//             <label htmlFor = "password"> Password </label>
//             <input  type="password" name="password" id="password" autoComplete="off" 
//             value = {this.state.password}
//             onChange = {(e:any)=> this.setState({password : e.target.value})} />

//             <br/>
//             <br/>

//             {/* <Link to= "/home"><button id="button" type="submit"> Login </button> </Link> */}
//             <button id="button" type="submit"> Login </button>
//        </form>
//     )
//  };
// }


