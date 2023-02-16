import React, { Component } from 'react'
import empservices from '../services/empservices'

export default class EmployeesList extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            employees:[]
        }
        this.addemp = this.addemp.bind(this);
        this.editemp = this.editemp.bind(this);
        this.deleteemp = this.deleteemp.bind(this);    
    }

    viewemp(id)
    {
        this.props.history.push(`/view-emp/${id}`);
    }
    deleteemp(id)
    {
        empservices.deleteemployee(id).then(res => 
        {
            this.setState({employees:this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    editemp(id)
    {
        this.props.history.push(`/add-emp/${id}`);
    }
    componentDidMount()
    {
        empservices.getemployees().then((res)=>
        {
            this.setState({employees:res.data});
        });
    }
    addemp()
    {
        this.props.history.push('/add-emp/addemp');
    }


  render() {
    return (
        <div >
            <h1  className='emp'>Employees List</h1>
            <div className='button'>
                <button className='but' onClick={this.addemp} >Add employee</button>
            </div>
            <div className='row'>
                <table>
                    <thead>
                    <tr className='list'>
                        <th> First name</th>
                        <th> Last name</th>
                        <th> Email id</th>
                        <th> Actions</th>                         
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.emailid}</td>
                                    <td>
                                        <button style={{marginLeft:"10px"}} onClick={()=> this.editemp(employee.id)}>Update</button>
                                        <button style={{marginLeft:"10px"}} onClick={()=> this.deleteemp(employee.id)}>Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick={()=> this.viewemp(employee.id)}>View</button>
                                    
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}
