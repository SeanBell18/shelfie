import React, { Component } from 'react'
import axios from 'axios'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleDeleteProduct (index) {
        axios.delete(`/api/delete/:${index}`).then(res => {
            console.log(res.data)
        })
    }
    get () {
        this.props.getRequest()
    }
    render() {
        const { inventory } = this.props
        return (
            <div>
                Dashboard
                {this.props.productPage}
                {this.props.inventory.map((product) => {
                    return (
                        <div>
                            <img href={`${product.image_url}`} />
                            Name: {product.name}
                            Price: {product.price}
                            <button onClick={this.handleDeleteProduct(product.product_id)}>Delete</button>
                        </div>
                    )
                })}
            </div >
        )
    }
} 