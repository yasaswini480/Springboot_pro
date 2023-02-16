import React, { Component } from 'react'
import empservices from '../services/empservices';
// import axios from 'axios';

export default class CreateEmp extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            id: this.props.match.params.id,   
            firstname:'',
            lastname:'',
            emailid:''
        }
        this.changefirstname= this.changefirstname.bind(this);
        this.changelastname= this.changelastname.bind(this);
        this.changeemail= this.changeemail.bind(this);
        this.save = this.save.bind(this);
        this.cancel= this.cancel.bind(this);
    }

    componentDidMount()
    {
      if(this.state.id === 'addemp')
      {
        return 
      }
      else
      {
        empservices.getempid(this.state.id).then((res)=> {
            let employee = res.data;
            this.setState({firstname: employee.firstname,
                lastname: employee.lastname,
                emailid: employee.emailid
            });
        });
      }
    }

    save = (e)=>
    {
      e.preventDefault();
      let empl = {firstname : this.state.firstname, lastname : this.state.lastname, emailid : this.state.emailid};
      console.log(empl);
        if(this.state.id === 'addemp')
        {
          empservices.createEmployee(empl).then(res =>
            {
              this.props.history.push('/employees');
            });
        }
        else
        {
          empservices.updateemp(empl, this.state.id).then(res => 
            {
            this.props.history.push('/employees');
            });
        }
      }
    cancel()
    {
      this.props.history.push('/employees');
    }
    changefirstname = (event) => 
    {
      this.setState({firstname: event.target.value});
    }
    changelastname = (event)=>
    {
      this.setState({lastname: event.target.value});
    }
    changeemail= (event) =>
    {
      this.setState({emailid: event.target.value});
    }
  gettitle()
  {
    if(this.state.id === 'addemp')
    {
      return <h1>Add Employee</h1>            
    }
    else
    {
      return <h1>Update Employee</h1>
    }
  }  
  render() 
  {
    return (
      <div className='container'>
        <div className='row'>
          <div className='form'>
            {
              this.gettitle()
            }
            <div>
              <form>
                <div>
                  <label>First Name</label>
                  <input placeholder='Enter name' value={this.state.firstname} onChange={this.changefirstname} />
                </div>
                <div>
                  <label>Last Name</label>
                  <input placeholder='Enter name' value={this.state.lastname} onChange={this.changelastname} />
                </div>
                <div>
                  <label>Email id</label>
                  <input placeholder='Enter email' value={this.state.emailid} onChange={this.changeemail} />
                </div>  
                <button onClick={this.save} >Save</button>
                <button onClick={this.cancel}>Cancel</button>              
              </form>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
}

