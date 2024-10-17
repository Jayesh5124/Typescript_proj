
interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}


const employees: Employee[] = [
    { id: 1, name: 'Alice', department: 'Engineering', salary: 70000 },
    { id: 2, name: 'Bob', department: 'Engineering', salary: 80000 },
    { id: 3, name: 'Charlie', department: 'HR', salary: 60000 },
    { id: 4, name: 'David', department: 'Marketing', salary: 50000 },
    { id: 5, name: 'Eve', department: 'HR', salary: 65000 },
];


function getEmployeesByDepartment(department: string): { employees: Employee[], totalSalary: number } {
    //const filteredEmployees = employees.filter(emp => emp.department === department);



    const empl: Employee[] = [];

    for(let emp of Array.from(employees))
    {
        if(emp.department === department)
        {
            empl.push(emp);
        }
    }


    const totalSalary = empl.reduce((sum, emp) => sum + emp.salary, 0);



    return { employees: empl, totalSalary };
}


const department = 'HR';
const result = getEmployeesByDepartment(department);

console.log(`Employees in the ${department} department:`);
result.employees.forEach(emp => {
    console.log(`- ${emp.name}, Salary: ${emp.salary}`);
});
console.log(`Total Salary: ${result.totalSalary}`);
