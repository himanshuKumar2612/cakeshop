import React from "react";

import { Link,Route,Switch } from "react-router-dom";
import Home from "./cmponents/Home";
import Login from "./cmponents/Login";
import Navbar from "./cmponents/navbar";
import Register from "./cmponents/Register";
import Product from "./cmponents/product";
import Payment from "./cmponents/payment";
import AdminHome from "./cmponents/AdminHome";
import Orders from "./cmponents/Orders";
import OrderTable from "./cmponents/OrderTable";
import ViewCakesTable from "./cmponents/ViewCakesTable";
import confirmation from "./cmponents/confirmation";
import { ToastContainer } from 'react-toastify';
export default function App() {
  return (

<React.Fragment>
  <ToastContainer/>
  <Navbar/>
    <div>
      <div>
      <Switch>
  
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/product" component={Product} />
        <Route path="/payment" component={Payment} />
        <Route path="/adminhome" component={AdminHome} />
        <Route path="/orders" component={ViewCakesTable} />
        <Route path="/ordertable" component={OrderTable} />
        <Route path="/viewcakestable" component={ViewCakesTable} />
        <Route path="/confirmation" component={confirmation}  /> 
        </Switch>

      </div>
    </div>
    </React.Fragment>
  );
}

