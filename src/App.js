import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import Product from './component/Product/Product'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      product: {},
      inventory: [],
      imageURL: "",
      name: '',
      price: 0
    }
    this.handleInputURL = this.handleInputURL.bind(this)
    this.handleInputName = this.handleInputName.bind(this)
    this.handleInputPrice = this.handleInputPrice.bind(this)
    this.handleClickCancel = this.handleClickCancel.bind(this)
    this.handleGetRequest = this.handleGetRequest.bind(this)
  }
  handleInputURL (e) { this.setState({imageURL: e.target.value}) }
  handleInputName (e) { this.setState({name: e.target.value}) }
  handleInputPrice (e) { this.setState({price: Number(e.target.value)}) }
  handleClickCancel () { this.setState({imageURL: "", name: '', price: 0}) }
  handleAddProduct (name, price, image) {
    let newProduct = {name, price, image}
    axios.post(`/api/product`, newProduct).then((res) => {
      console.log(res.data)
    })
  }
  handleGetRequest () {
    axios.get(`/api/get_inventory`).then((res) => {
      this.setState({inventory: res.data})
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidMount() {
    axios.get(`/api/get_inventory`).then((res) => {
      this.setState({inventory: res.data})
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidUpdate () {
    console.log("there has been a change of plans...")

  }
  render() {
    return (
      <div className="App">
        <Dashboard getRequest={this.handleGetRequest} productPage={<Product />} inventory={this.state.inventory}/>
        <Header />
        <Form />
        Image address:<input type= 'text' onChange ={this.handleInputURL}/>
        Product Name:<input type= 'text' onChange ={this.handleInputName}/> 
        Price:<input type= 'text' onChange ={this.handleInputPrice}/> 
        <button onCLick = {this.handleClickCancel}>Cancel</button>
        <button onClick = {this.handleAddProduct(this.state.name, this.state.price, this.state.imageURL)}>Add</button>
      </div>
    );
  }
}

export default App;
