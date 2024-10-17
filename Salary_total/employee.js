var employees = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 70000 },
    { id: 2, name: 'Bob', department: 'Engineering', salary: 80000 },
    { id: 3, name: 'Charlie', department: 'HR', salary: 60000 },
    { id: 4, name: 'David', department: 'Marketing', salary: 50000 },
    { id: 5, name: 'Eve', department: 'HR', salary: 65000 },
];
function getEmployeesByDepartment(department) {
    //const filteredEmployees = employees.filter(emp => emp.department === department);
    var empl = [];
    for (var _i = 0, _a = Array.from(employees); _i < _a.length; _i++) {
        var emp = _a[_i];
        if (emp.department === department) {
            empl.push(emp);
        }
    }
    var totalSalary = empl.reduce(function (sum, emp) { return sum + emp.salary; }, 0);
    return { employees: empl, totalSalary: totalSalary };
}
var department = 'HR';
var result = getEmployeesByDepartment(department);
console.log("Employees in the ".concat(department, " department:"));
result.employees.forEach(function (emp) {
    console.log("- ".concat(emp.name, ", Salary: ").concat(emp.salary));
});
console.log("Total Salary: ".concat(result.totalSalary));
