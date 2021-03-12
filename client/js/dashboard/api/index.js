// productionUrl = 'https://employee-manager-dashboard1.herokuapp.com/'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'https://employee-manager-dashboard1.herokuapp.com/api/departments/',
    // Snippet #5
    updateEmployee: `https://employee-manager-dashboard1.herokuapp.com/api/departments/employee/update`,
    getDepartment: (name)=>{
        return `https://employee-manager-dashboard1.herokuapp.com/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        return `https://employee-manager-dashboard1.herokuapp.com/api/departments/employee/id/${id}` 
    }
}

export default api