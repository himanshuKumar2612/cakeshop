
import React from 'react';
import ViewCakesTable from './ViewCakesTable';
import { toast } from 'react-toastify';


class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      weight: "",
      price: "",
    }
    this.cakeId = this.cakeId.bind(this);
    this.name = this.name.bind(this);
    this.category = this.category.bind(this);
    this.weight = this.weight.bind(this);
    this.price = this.price.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  cakeId = (event) => {
    this.setState({ cakeId: event.target.value })
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
  price = (event) => {
    this.setState({ price: event.target.value })
  }

  handleSuccess = () => {
    toast("Added cake successfully")
  }

  handleFailure = () => {
    toast("Failed")
  }

  submitInfo = (e) => {

    const x = {
      // cakeId: e.target[0].value,
      name: e.target[0].value,
      category: e.target[1].value,
      weight: e.target[2].value,
      price: e.target[3].value,
    }

    fetch('http://localhost:8087/addcakes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target[0].value,
        category: e.target[1].value,
        weight: e.target[2].value,
        price: e.target[3].value,
      }),
    })
      .then(response => response.json())

      .then(data => {
        console.log('Success:', data);
        this.handleSuccess();
      })
      .catch((error) => {
        console.error('Error:', error);
        this.handleFailure();
      });  
    e.preventDefault();
  }
  render() {
    return (

      <div>

        <div class="p-3 mb-2 bg-danger text-white">

          <h1 style={{ textAlign: "center" }}>Products</h1>
        </div>
        <div class="p-3 mb-2 bg-secondary text-white">
          <form style={{ textAlign: "center" }} onSubmit={this.submitInfo}>

            <table >
              <div class="p-3 mb-2 bg-secondary text-white">
                <tr>
                  <td>
                    Enter Cake Name  : </td>
                  <td>
                    <input type="text" ref="" placeholder="name" /> <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td>
                    Enter Category : </td>
                  <select class="Category" aria-label="Default select example">
                    <option selected>select menu</option>
                    <option value="Egg">Egg</option>
                    <option value="Eggless">Eggless</option>
                  </select>
                  <br />
                  <br />
                </tr>

                <tr>
                  <td>
                    Enter Weight : </td>
                  <select class="Weight" aria-label="Default select example">
                    <option selected>select menu</option>
                    <option value="1Kg">1Kg</option>
                    <option value="2Kg">2Kg</option>
                  </select>
                  <br />
                  <br />
                </tr>
                <tr>
                  <td>

                    Enter Price : </td>
                  <td>
                    <input type="number" ref="" placeholder="price" /> <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </div>
            </table>

            <button type="submit" className="btn btn-success">Add Cake To Available</button></form>


            <form>
            <br />
            <button className="btn btn-warning"><a href="/AdminHome">Back To Home</a></button>
            <br />
            <br />
            <button className="btn btn-danger"><a href="/Login">LogOut</a></button>
          </form>
        </div>
      </div>
    )
  }





}
export default Product;





