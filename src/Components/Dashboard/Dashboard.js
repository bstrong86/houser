import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'



export default class Dashboard extends Component {
    constructor(){
        super()

        this.state({
            houses: {}
        })
    }
        render (){
            const houseList = this.state.houses.map(house => {
                return (
                <House />)})
            
            return (
            <div>
             <div>Dashboard</div>
                <Link to="/wizard">
                  <button>Add New Property</button>
                </Link>
             <House />
            </div>
            )
        }

}