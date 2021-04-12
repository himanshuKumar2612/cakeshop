import React from 'react';

class Orders extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      category:"",
      weight:"",
      quantity:"",
      price:"",
    }
    this.name = this.name.bind(this);
    this.category = this.category.bind(this);
    this.weight = this.weight.bind(this);
    this.quantity = this.quantity.bind(this);
    this.price = this.price.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }
  name = (event) => {
    this.setState({ name: event.target.value })
  }

  category = (event) => {
    this.setState({ category: event.target.value })
  }

  weight = (event) => {
    this.setState({ weight: event.target.value })
  }
  quantity = (event) => {
    this.setState({ quantity: event.target.value })
  }
  price = (event) => {
    this.setState({ price: event.target.value })
  }

  submitInfo = (e) => {

    const x = {
      name: e.target[0].value,
      category: e.target[1].value,
      weight: e.target[2].value,
      quantity: e.target[3].value,
      price: e.target[4].value,
    }
    e.preventDefault();
    
    console.log(e, x);
    fetch('http://localhost:8087/placeorders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target[0].value,
        category: e.target[1].value,
        weight: e.target[2].value,
        quantity: e.target[3].value,
        price: e.target[4].value,
      }),
    })
      .then(response => response.json())

      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });  
  }
  render() {
    return (
     
      <div><div class="p-3 mb-2 bg-dark text-white">
        
       <h1 style={{textAlign: "center"}}> Place Orders</h1>
       </div>
       <div class="p-3 mb-2 bg-secondary text-white">
        <form onSubmit={this.submitInfo}>
 
        <button className="btn btn-warning"><a href="/viewcakestable">View cakes</a></button> 
        <br/>

        <table >
        <div class="p-3 mb-2 bg-secondary text-white">
        <tr>
          <td>
          Enter Cake Name  : </td>
          <td>
            <input type="text" ref="" placeholder="name" /> <br/>
          </td>
          </tr>
          <tr>
          <td>
          Enter Category : </td>
          <td>
          <select class="Category" aria-label="Default select example">
          <option selected>select menu</option>
          <option value="1">Egg</option>
          <option value="2">Eggless</option>
          </select>
          </td>
          </tr>
          <tr>
          <td>
          Enter Weight : </td>
          <td>
          <select class="Weight" aria-label="Default select example">
          <option selected>select menu</option>
          <option value="1">1Kg</option>
          <option value="2">2Kg</option>
        </select>
          </td>
          </tr>
          <tr>
          <td>
          Enter Price : </td>
          <td>
          <select class="Price" aria-label="Default select example">
          <option selected>select menu</option>
          <option value="1">1000</option>
          <option value="2">2000</option>
          </select>
          </td>
          </tr>
            
                </div>   
                </table>


        <button className="btn btn-warning"><a href="">Confirm Order</a></button>
        <br/>
        <br/>
        <button className="btn btn-warning"><a href="/payment">Proceed To Pay</a></button>


       </form>
      </div>
      </div>
    )
  }

}
export default Orders;