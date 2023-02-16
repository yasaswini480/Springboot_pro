import React, { Component } from 'react'
import empservices from '../services/empservices'

class Viewemp extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            id: this.props.match.params.id,
            employee:{}
        }
    }
    componentDidMount()
    {
       empservices.getempid(this.state.id).then(res => 
        {
            this.setState({employee: res.data});
        })
    }
  render() {
    return (
      <div>
        <div className='view'>
        <h2>Employee Details</h2>
        <div className='row'>
            <label>Employee First Name: </label>
            <div>{this.state.employee.firstname}</div>
            <label>Employee Last Name: </label>
            <div>{this.state.employee.lastname}</div>
            <label>Employee Email id: </label>
            <div>{this.state.employee.emailid}</div>
        
        </div>

        </div>
      </div>
    )
  }
}

export default Viewemp