import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address:'',
            city: '',
            state: '',
            zipcode:''


        }

    this.handleName=this.handleName.bind(this)
    this.handleAddress=this.handleAddress.bind(this)
    this.handleCity=this.handleCity.bind(this)
    this.handleState=this.handleState.bind(this)
    this.handleZipcode=this.handleZipcode.bind(this)

    }

    handleName(e) {
        this.setState({
            name: e.target.value
            
        })
    }
    
    handleAddress(e) {
        this.setState({
            address: e.target.value
            
        })
    }
    
    handleCity(e) {
        this.setState({
            city: e.target.value
            
        })
    }

    handleState(e) {
        this.setState({
            state: e.target.value
            
        })
    }

    handleZipcode(e) {
        this.setState({
            zipcode: e.target.value
            
        })
    }


    render (){
        console.log(this.state)
            return (
            <div>
              <div>Wizard</div>
              <Link to="/">
              <button>Cancel</button>
              </Link>
              <div>
                  <input placeholder="Name" type="text" onChange={this.handleName}/>
                  <input placeholder="Address" type="text" onChange={this.handleAddress}/>
                  <input placeholder="City" type="text" onChange={this.handleCity}/>
                  <input placeholder="State" type="text" onChange={this.handleState}/>
                  <input placeholder="Zipcode" type="text" onChange={this.handleZipcode}/>
              </div>
              
            </div>
            )
        }

}