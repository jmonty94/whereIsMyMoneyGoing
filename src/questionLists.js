import { db } from "./../db/connection.js";
import { Department } from "./../constructors/Department.js";
import { Employee } from "./../constructors/Employee.js";
import { Role } from "./../constructors/Role.js";

const departmentArray = [];
const roleArray = [];
const employeeArray = [];

function currentDepartments() {
    console.table(`Current Departments`, departmentArray)
};

async function currentRoles() {
    try {
        const res = await db.promise().query(`SELECT role.id, title, name AS department, salary
      FROM department, role
      WHERE department_id = department.id;`,);
        console.table(`\nCurrent Roles\n`, res[0]);
    } catch (error) {
        console.error(error);
    }
}

async function currentRoster() {
    try {
        const res = await db.promise().query(`SELECT  employee.id, first_name, last_name, title, name AS department, salary, (SELECT CONCAT(first_name, ' ', last_name) FROM employee AS managers WHERE employee.manager_id = managers.id) AS manager
        FROM    employee, department, role
        WHERE   employee.role_id = role.id AND role.department_id = department.id;`);
        console.table(`\nCurrent Roster\n`, res[0]);
    } catch (error) {
        console.error(error);
    }
}

function departments() {
    const departmentChoices = [];
    for (let i = 0; i < departmentArray.length; i++) {
        const department = {
            name: departmentArray[i].getDepartmentName(),
            value: departmentArray[i].getDepartmentId(),
        };
        departmentChoices.push(department);
    };
    return departmentChoices;
};

function roles() {
    const roleChoices = [];
    for (let i = 0; i < roleArray.length; i++) {
        const role = {
            name: roleArray[i].getRoleTitle(),
            value: roleArray[i].getRoleId(),
        };
        roleChoices.push(role);
    };
    return roleChoices;
};

function employees() {
    console.log(37, employeeArray);
    const employees = [];
    for (let i = 0; i < employeeArray.length; i++) {
        const employee = {
            name: employeeArray[i].getFirstName() + ' ' + employeeArray[i].getLastName(),
            value: employeeArray[i].getId(),
        };
        employees.push(employee);
    };
    return employees
}

async function initializer() {
    try {
        const departmentResults = await db.promise().query(`SELECT * FROM department;`);
        for (const departmentResult of departmentResults[0]) {
            const department = new Department(departmentResult.id, departmentResult.name);
            departmentArray.push(department)
        }
        const roleResults = await db.promise().query(`SELECT * FROM role;`);
        for (const roleResult of roleResults[0]) {
            const role = new Role(roleResult.id, roleResult.title, roleResult.salary, roleResult.department_id);
            roleArray.push(role);
        }
        const employeeResults = await db.promise().query(`SELECT * FROM employee;`);
        for (const employeeResult of employeeResults[0]) {
            const employee = new Employee(employeeResult.id, employeeResult.first_name, employeeResult.last_name, employeeResult.role_id, employeeResult.manager_id);
            employeeArray.push(employee);
        }
    } catch (error) {
        console.error(error);
    }

};

export { currentDepartments, currentRoles, currentRoster, roles, departments, employees, initializer, }