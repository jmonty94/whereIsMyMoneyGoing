import { db } from "./../db/connection.js";
import { Department } from "./../constructors/Department.js";
import { Employee } from "./../constructors/Employee.js";
import { Role } from "./../constructors/Role.js";

const currentDepartments = [];
const currentRoles = [];
const currentEmployees = [];

function departmentList() {
    const departmentChoices = [];
    for (let i = 0; i < currentDepartments.length; i++) {
        const department = {
            name: currentDepartments[i].getDepartmentName(),
            value: currentDepartments[i].getDepartmentId(),
        };
        departmentChoices.push(department);
    };
    return departmentChoices;
};
function allRoles() {
    console.log(22, currentRoles);
    const roleChoices = [];
    for (let i = 0; i < currentRoles.length; i++) {
        const role = {
        name: currentRoles[i].getRoleTitle(),
        value: currentRoles[i].getRoleId(),
        // salary: currentRoles[i].getRoleSalary(),
        // department_id: currentRoles[i].getRoleDepartmentId(),
        };
        roleChoices.push(role);
    };
    return roleChoices;
};

async function initializer() {
    try {
        const departmentResults = await db.promise().query(`SELECT * FROM department;`);
        for (const departmentResult of departmentResults[0]) {
            const department = new Department(departmentResult.id, departmentResult.name);
            currentDepartments.push(department)
        }
        const roleResults = await db.promise().query(`SELECT * FROM role;`);
        for (const roleResult of roleResults[0]) {
            const role = new Role(roleResult.id, roleResult.title, roleResult.salary, roleResult.department_id);
            currentRoles.push(role);
        }
        const employeeResults = await db.promise().query(`SELECT * FROM employee;`);
        for (const employeeResult of employeeResults[0]){
            const employee = new Employee(employeeResult.id, employeeResult.first_name, employeeResult.last_name, employeeResult.role_id, employeeResult.manager_id);
            currentEmployees.push(employee);
        }
        
    } catch (error) {
        console.error(error);
    }
};

export { initializer, departmentList, allRoles }