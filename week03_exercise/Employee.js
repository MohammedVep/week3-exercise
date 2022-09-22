//TODO - Create Employee Module here and export to use in index.js
let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

module.exports.employee = () => {
    try {
        let employeeJSON = JSON.stringify(employees);
        return employeeJSON;
    } catch (error){
        return error;
    }
}

exports.employeeTotalSalary = () => {
    try {
        let totalSalary = 0;
        for (let i = 0; i < employees.length; i++) {
            totalSalary += employees[i].Salary;
        }
        return JSON.stringify({"totalSalary": totalSalary});
    } catch (error){
        return error;
    }
}

exports.employeeNames = () => {
    try {
        let employeeNamesArr = [];
        for (let i = 0; i < employees.length; i++){
            employeeNamesArr.push(employees[i].firstName + " " + employees[i].lastName);;
        }
        employeeNamesArr.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
        return JSON.stringify(employeeNamesArr);
    } catch (error) {
        return error;
    }
}