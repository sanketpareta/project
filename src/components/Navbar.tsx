
import React from 'react';
import { Link }from 'react-router-dom' 
export default class Navbar extends React.Component{
  render()
 {
    return (
    <>
        <div>
   <nav className="navbar  fixed-top navbar-expand-lg  bg-body-tertiary"  id = "nav">
    <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Aboutme">About me</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to="/Contact">Contact </Link>
        </li> 

        <li className="nav-item">
          <Link className="nav-link " to="/Menu">Menu </Link>
        </li> 
      </ul>
       
        {/* <div id='div' >sanket</div> */}

      <form className="d-flex" role="search">
        <strong id ='u1'>{localStorage.getItem("user")}</strong>
      
      <Link to="/" > <button className="btn btn-outline-success" type="submit">Log-out</button>  </Link>
      </form>
    </div>
  </div>
</nav>
        </div>
    </>
  );
 }
}