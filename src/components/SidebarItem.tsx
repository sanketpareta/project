import React, { Component } from 'react';
import './sidebar.css';

interface Props {
                 item: any;
                 inputValue: any;
                 name:((formName:any)=> any);
                
                }

export default class SidebarItem extends Component<Props> {
       state = {
                 open: false,       
               };


componentDidUpdate(prevProps: Props) {
    if (prevProps.inputValue !== this.props.inputValue) {
        this.setState({
        open: this.props.inputValue
        ? this.checkTitleExistsRecursive([this.props.item], this.props.inputValue)
        : false,
        });
      }
    }

checkTitleExistsRecursive = (arr: string | any[], name: string) => {
   for (let i = 0; i < arr.length; i++) {
       if (arr[i].name.toLowerCase().startsWith(name.toLowerCase())) {
       return true;
   }


    if (arr[i].children) {
         if (this.checkTitleExistsRecursive(arr[i].children, name)) {
         return true;
        }
       }
      }
     return false;
    };


      toggleOpen = () => {
       this.setState({ open: !this.state.open });
       };

    render() {
         const { item } = this.props;
         const { open } = this.state;

     if (item.children) {
        return (
        <div className={open ? 'sidebar-item open' : 'sidebar-item'}>

            <div className="sidebar-title">
                <span>{item.name}</span>
                     <i className="bi-chevron-down toggle-btn" onClick={this.toggleOpen}></i>
            </div>

            <div className="sidebar-content">
                {item.children.map((child: any, index: React.Key | null | undefined) => (
                <SidebarItem key={index} item={child} inputValue={this.props.inputValue} name={item.name} />
               ))}
            </div>
        </div>
    );
  } 
  
        else {
            return (
            <a href={item.path || '#'} className="sidebar-item plain" onClick={this.props.name({formName: item.name })}>
                {item.name}
            </a>
           
            );
        }
        }
        }