import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'



export default class Dashboard extends Component {
    constructor(){
        super()

        this.state={
            houses: []
        }
    }

    componentDidMount() {
       this.getAllHouses()
      }

    getAllHouses() {
      axios.get('/api/wizard').then(res => {
        console.log(res)
        this.setState({
          houses: res.data
        });
      });
    }

    deleteHouse= (id) => {
      axios.delete(`/api/wizard/${id}`).then(response => {
        console.log(response)      
        this.getAllHouses()
      }
      )
    }


      render (){
        console.log(this.state.houses)
        
        const mappedList = this.state.houses.map((house) => {
          return (
            <House 
            key={house.id}
            id={house.id}
            name={house.name}
            address={house.address}
            city={house.city}
            state={house.state}
            zip={house.zipcode}
            deleteHouse={this.deleteHouse}
            getAllHouses={this.getAllHouses}
            />
            )
          })
            
            return (
            <div>
             <div>Dashboard</div>
                <Link to="/wizard">
                  <button>Add New Property</button>
                </Link>
             {/* <House /> */}
             <div>{mappedList}</div>
            </div>
            )
        }

}