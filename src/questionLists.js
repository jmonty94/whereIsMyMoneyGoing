import { db } from "./../config/connection.js";
import { Department } from "./../constructors/Department.js";
import { Employee } from "./../constructors/Employee.js";
import { Role } from "./../constructors/Role.js";
import { contUse } from "./helpers.js";
import cTable, { getTable } from "console.table";


const departmentArray = [];
const roleArray = [];
const filteredRoles = []
const employeeArray = [];

async function currentDepartments() {
    try {
        const res = await db.promise().query(`SELECT * FROM department;`)
        console.table(`\nCurrent Departments`, res[0])
    } catch (error) {
        console.error(error);
    };
    contUse();
};

async function currentRoles() {
    try {
        const res = await db.promise().query(`SELECT role.id, title, name AS department, salary
      FROM department, role
      WHERE department_id = department.id;`,);
        console.table(`\nCurrent Roles`, res[0]);
    } catch (error) {
        console.error(error);
    };
    contUse();
};

async function currentRoster() {
    try {
        const res = await db.promise().query(`SELECT  employee.id, first_name, last_name, title, name AS department, salary, (SELECT CONCAT(first_name, ' ', last_name) FROM employee AS managers WHERE employee.manager_id = managers.id) AS manager
        FROM    employee, department, role
        WHERE   employee.role_id = role.id AND role.department_id = department.id;`);
        console.table(`\nCurrent Roster`, res[0]);
    } catch (error) {
        console.error(error);
    };
    contUse();
};

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

async function rolesFiltered(params) {
    try {
        while (filteredRoles.length > 0) {
            filteredRoles.pop();
        }
        const dept = params
        const roleResults = await db.promise().query(`SELECT role.id, title, salary, department_id FROM role, department WHERE department.id = ${dept} AND department.id = role.department_id;`)
        for (const roleResult of roleResults[0]) {
            const role = new Role(roleResult.id, roleResult.title, roleResult.salary, roleResult.department_id);
            filteredRoles.push(role);
        }
        filteredRoleChoices();
    }
    catch (error) {
        console.error(error);
    };
};
function filteredRoleChoices() {
    const filteredRoleChoices = [];
    for (let i = 0; i < filteredRoles.length; i++) {
        const role = {
            name: filteredRoles[i].getRoleTitle(),
            value: filteredRoles[i].getRoleId()
        }
        filteredRoleChoices.push(role);
    };
    return filteredRoleChoices
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

async function employees() {
    const employeeArray = []
    const employeeResults = await db.promise().query(`SELECT * FROM employee;`);
    for (const employeeResult of employeeResults[0]) {
        const employee = new Employee(employeeResult.id, employeeResult.first_name, employeeResult.last_name, employeeResult.role_id, employeeResult.manager_id);
        employeeArray.push(employee);
    };
    const employees = [];
    for (let i = 0; i < employeeArray.length; i++) {
        const employee = {
            name: employeeArray[i].getFirstName() + ' ' + employeeArray[i].getLastName(),
            value: employeeArray[i].getId(),
        };
        employees.push(employee);
    };
    const goBack = 'Go Back';
    employees.push(goBack);
    return employees;
};

async function managerRoster(){
    const employeeArray = []
    const employeeResults = await db.promise().query(`SELECT * FROM employee;`);
    for (const employeeResult of employeeResults[0]) {
        const employee = new Employee(employeeResult.id, employeeResult.first_name, employeeResult.last_name, employeeResult.role_id, employeeResult.manager_id);
        employeeArray.push(employee);
    };
    const managers = [];
    for (let i = 0; i < employeeArray.length; i++) {
        const manager = {
            name: employeeArray[i].getFirstName() + ' ' + employeeArray[i].getLastName(),
            value: employeeArray[i].getId(),
        };
        managers.push(manager);
    };
    const noManager = {
        name: 'None',
        value: -1
    };
    managers.push(noManager);
    return managers;
};

async function initializer() {
    try {
        const departmentResults = await db.promise().query(`SELECT * FROM department;`);
        for (const departmentResult of departmentResults[0]) {
            const department = new Department(departmentResult.id, departmentResult.name);
            departmentArray.push(department);
        };
        const roleResults = await db.promise().query(`SELECT * FROM role;`);
        for (const roleResult of roleResults[0]) {
            const role = new Role(roleResult.id, roleResult.title, roleResult.salary, roleResult.department_id);
            roleArray.push(role);
        };
        const employeeResults = await db.promise().query(`SELECT * FROM employee;`);
        for (const employeeResult of employeeResults[0]) {
            const employee = new Employee(employeeResult.id, employeeResult.first_name, employeeResult.last_name, employeeResult.role_id, employeeResult.manager_id);
            employeeArray.push(employee);
        };
    } catch (error) {
        console.error(error);
    };
};

export { currentDepartments, currentRoles, currentRoster, roles, departments, employees, initializer, departmentArray, rolesFiltered, filteredRoleChoices, managerRoster }