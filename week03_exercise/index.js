var http = require("http");
const { resolve } = require("path");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
const employee = require('./Employee')
//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081
console.log(http);

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.method !== 'GET') {
        res.write(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write('<h1>Welcome to Lab Exercise 03</h1>')
            console.log("here")
            
            
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            let employeeDetails = employee.employee();
            res.write(JSON.stringify(employeeDetails));
            console.log("here")
            
        }
        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let employeeNames = employee.employeeNames();
            res.write(JSON.stringify(employeeNames));
            console.log("here")
            
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            let totalsalary = employee.employeeTotalSalary();
            res.write(JSON.stringify(totalsalary));
            console.log("here")
            
    } else {
        res.write(`{"error": "${http.STATUS_CODES[404]}"}`);
    }
    res.end();
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});