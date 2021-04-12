import React from "react";
import { toast } from 'react-toastify';


class Payment extends React.Component {

  handleSuccess = () => {
    toast("Ordered Placed successfully")
  }

  handleFailure = () => {
    toast("Failed")
  }


  handlePayment=(e)=>{
    console.log(this.props.location.state.cake)
    const cake = this.props.location.state.cake
    console.log(cake)
    const id = localStorage.getItem("id")
    fetch(`http://localhost:8087/placeorders/${id}/${cake.cakeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
       
      ),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.props.history.push("/confirmation")
        this.handleSuccess();
      })
      .catch((error) => {
        console.error('Error:', error);
        this.handleFailure();

      });

      e.preventDefault();
  }
  render() {
    console.log(this.props.location.state.cake)
    return (
      <div className="container" class="p-3 mb-2 bg-secondary text-white">
<form onSubmit={this.handlePayment}>
<h1 style={{textAlign:"center"}}>Payment Details</h1>
  <div className="mb-3">
    <label for="exampleInputBankName" className="form-label">Bank Name</label>
    <input type="text" className="form-control" id="exampleInputBankName" required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputCardNumber" className="form-label">Card Number</label>
    <input type="number" className="form-control" id="exampleInputCardNumber"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputCvv" className="form-label">Cvv</label>
    <input type="number" className="form-control" id="exampleInputCvv"/>
  </div>
        <button type="submit" className="btn btn-primary">Pay</button>
</form>

        </div>
     
    );
  }
}
export default Payment;