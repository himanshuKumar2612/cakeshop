
// import React from 'react';

//  class Login extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//     this.state={
//       msg:""
//     }
//   }
//   checkLogin= ()=>{
//     let uid = this.refs.uid.value;
//     let pwd = this.refs.pwd.value;

//     const url = "http://localhost:8087/checkLogin?uid="+uid+"&pwd="+pwd;
//     fetch(url)
//     .then(Response => Response.text())
//     .then(data => {
//       if(data=="Admin")
//       this.props.history.push("/product/"+uid);

//     }
//     );
//   }   
  

//   render(){
//     return(
//       <div>
//         <h1 style={{textAlign:"center"}}>Login Datails</h1>
//         <form>
//         <table>
//         <tr>
//           <td>
//           Enter User Id  : </td>
//           <td>
//             <input type="text" ref="uid" /> <br/>
//           </td>
//           </tr>
//           <tr>
//           <td>
//           Enter Password : </td>
//           <td>
//           <input type="password" ref="pwd" /> <br/>
//           </td>
//           </tr>
//              <tr>
//                <td>
              
//                  <button type="submit" onClick={this.checkLogin}>Submit</button>
//                </td>
//                  <td>
//                  <form action="/register">
//                  <button type="submit">Register</button>
//                  </form>
//                 </td>
//                 </tr>
//                 </table>      
//         </form>
//         <br/>
//         <p>{this.state.msg}</p>
//       </div>
//     );
//   }
// }
// export default Login;





import React from 'react';

 class Login extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      msg:"",
      email:"",
      password:"",   
     }
  }
  checkLogin= (event)=>{
    console.log(event, "'hi");
    
         let email = this.refs.email.value;
     let password = this.refs.password.value;


     const url = `http://localhost:8087/check?email=${email}&password=${password}`;
     fetch(url)
     .then(Response => Response.text())
     .then(data => {
       const x = data.split(" ");
       localStorage.setItem("id", x[1] )
      if(x[0]=="admin")
      this.props.history.push(`/adminhome/${email}`);
      else if(x[0]=="customer")
      this.props.history.push(`/orders/${email}`);
  
    }
    );

    event.preventDefault();
}
  render(){
    return(
      <div>
        <div class="p-3 mb-2 bg-danger text-white">
          <h1 style={{textAlign:"center"}}>Login Details</h1>
        </div>
        <div className="container">

        
        <form onSubmit={this.checkLogin}>
        <table >
        <div class="p-3 mb-2 bg-secondary text-white">
        <tr>
          <td>
          Enter User Id  : </td>
          <td>
            <input type="text" ref="email" placeholder="" /> <br/>
          </td>
          </tr>
          <tr>
          <td>
          Enter Password : </td>
          <td>
          <input type="password" ref="password" placeholder="" /> <br/>
          </td>
          </tr>
             <tr>
               <td>
                 <button className="btn btn-primary" type="submit">Login</button>
               </td>
                 <td>
                 <form action="/register">
                 <button 
                 className="btn btn-success"
                 type="submit">Register</button>
                 </form>
                </td>
                </tr>
                </div>   
                </table>
                   
        </form>
        <br/>
        <p>{this.state.msg}</p>
        </div>
      </div>
      
    );
  }
}
export default Login;

