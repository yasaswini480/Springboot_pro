import axios from "axios";

const emp_URL = "http://localhost:56238/api/v1/employees";
class empservices
{
    getemployees()
    {
        return axios.get(emp_URL);
    }
    createEmployee(employee)
    {
        return axios.post(emp_URL, employee);        
    }
    getempid(employeeid)
    {
        return axios.get(emp_URL + "/" + employeeid);
    }
    updateemp(employee, employeeid)
    {
        return axios.put(emp_URL + "/" + employeeid, employee);
    }
    deleteemployee(employeeid)
    {
        return axios.delete(emp_URL + "/"+ employeeid);
    }
}
export default new empservices()