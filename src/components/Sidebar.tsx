import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import items from './data.json';
import './sidebar.css';
import LoginForm from './form';

interface Props {}

 interface State {
                 inputValue: string;
                 formName:string;
                 }


class Sidebar extends Component<Props, State> {
    constructor(props: Props) {
    super(props);
         this.state = {
                      inputValue: '',
                      formName: '',
                      };
    }

  onSelectForm =  (name:any) => {
    this.setState({formName: name});
  };
 
  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => 
  {
    if (event.key === 'Enter')
    {
     this.setState({ inputValue: event.currentTarget.value });
    }   
 };


 render() {
    // const filtereditems = items.filter(item => item.id.includes(this.state.inputValue));
    return (
        
        <>
    <div className='row'>

     <div className='col-lg-5 sanket'>
        <div className="sidebar">
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}  id ="search"/>
            </div>

           <div>
             {items.map((item, index) => (
                <SidebarItem key={index} item={item} inputValue={this.state.inputValue}  name= {this.onSelectForm}/>
              ))} 
            </div> 
             
        </div>
     </div>
    
        <div className='col-lg-7'>
            <LoginForm formName ={this.state.formName}/>

        </div>

    </div>


        </>

        );
    }
}

    export default Sidebar;






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