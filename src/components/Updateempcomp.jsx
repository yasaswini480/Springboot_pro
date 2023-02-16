// import React, { Component } from 'react';
// import empservices from '../services/empservices';

// export default class Updateempcomp extends Component 
// {
//     constructor(props)
//     {
//         super(props)
//         this.state = 
//         {    
//             id: this.props.match.params.id,   
//             firstname:'',
//             lastname:'',
//             emailid:''
//         }
        // this.changefirstname= this.changefirstname.bind(this);
        // this.changelastname= this.changelastname.bind(this);
        // this.changeemail= this.changeemail.bind(this);
        // this.update = this.update.bind(this);
        // this.cancel= this.cancel.bind(this);
    // }
    // componentDidMount()
    // {
    //     empservices.getempid(this.state.id).then((res)=> {
    //         let employee = res.data;
    //         this.setState({firstname: employee.firstname,
    //             lastname: employee.lastname,
    //             emailid: employee.emailid
    //         });
    //     });
    // }

    // update = (e)=>
    // {
    //   e.preventDefault();
    //   let empl = {firstname : this.state.firstname, lastname : this.state.lastname, emailid : this.state.emailid};
    //   console.log(empl);
    //   empservices.updateemp(empl, this.state.id).then(res => {
    //     this.props.history.push('/employees');
    //   });
    // }
    // cancel()
    // {
    //   this.props.history.push('/employees');
    // }
    // changefirstname = (event) => 
    // {
    //   this.setState({firstname: event.target.value});
    // }
    // changelastname = (event)=>
    // {
    //   this.setState({lastname: event.target.value});
    // }
    // changeemail= (event) =>
    // {
    //   this.setState({emailid: event.target.value});
    // }
    
  // render() 
  // {
  //   return (
  //     <div className='container'>
  //       <div className='row'>
  //         <div className='form'>
  //           <h1>Update Employee</h1>
  //           <div>
  //             <form>
  //               <div>
  //                 <label>First Name</label>
  //                 <input placeholder='Enter name' value={this.state.firstname} onChange={this.changefirstname} />
  //               </div>
  //               <div>
  //                 <label>Last Name</label>
  //                 <input placeholder='Enter name' value={this.state.lastname} onChange={this.changelastname} />
  //               </div>
  //               <div>
  //                 <label>Email id</label>
  //                 <input placeholder='Enter email' value={this.state.emailid} onChange={this.changeemail} />
  //               </div>  
  //               <button onClick={this.update} >Save</button>
  //               <button onClick={this.cancel}>Cancel</button>              
  //             </form>
  //           </div>

  //         </div>
  //       </div>
        
  //     </div>
  //   )
  // }
// }
