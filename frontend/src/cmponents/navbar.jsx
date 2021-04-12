import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Homepage</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ordertable">Table</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/viewcakestable">View</Link>
        </li> 
        
        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/product">Product</Link>
        </li> */}

        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/payment">Payment</Link>
        </li> */}
    
   
    </ul></div>
  </div>
</nav>
            
        );
    }
}

export default Navbar    