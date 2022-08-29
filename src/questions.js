import { roles, employees, departments, rolesFiltered, filteredRoleChoices, managerRoster,  } from "./questionLists.js";


const options = [
    {
        message: `How would you like to proceed?`,
        name: `options`,
        type: `list`,
        choices: [
            `View all departments`,
            `Create a new department`,
            `View all roles`,
            `Create a new role`,
            `View all employees`,
            `Add new employee`,
            `Update an employee`,
            `Exit`
        ],
    },
];

const res = [
    {
        message: `Would you like to continue`,
        name: 'res',
        type:  `confirm`
    }
]

const createNewDepartmentQuestion = [
    {
        message: `Please enter name of new department.`,
        name: `name`,
        type: `input`,
    },
];

const createNewRoleQuestions = [
    {
        message: `Please select the department this role will fall under.`,
        name: `department`,
        type: `list`,
        choices: departments,
    },
    {
        message: `Enter title of new role.`,
        name: `title`,
        type: `input`,
    },
    {
        message: `Please enter the salary for this new role.`,
        name: `salary`,
        type: `number`,
    },
];
const newEmployeeName = [
    {
        message: `What is this employee's first name?`,
        name: `employeeFirstName`,
        type: `input`,
    },
    {
        message: `What is this employee's last name?`,
        name: `employeeLastName`,
        type: `input`,
    },
];
const newEmployeeDepartment = [
    {
        message: `Please select the department this employee is apart of`,
        name: `department`,
        type: `list`,
        choices: departments,
    },
];

const newEmployeeRole = [
    {
        message: `What is this employee's role?`,
        name: `employeeRole`,
        type: `list`,
        choices: filteredRoleChoices,
    },
];
const newEmployeeManager = [
    {
        message: `Who is this employee's manager?`,
        name: `employeeManager`,
        type: `list`,
        choices: employees,
    },
];
const updateEmployeeName = [
    {
        message: `Please select employee whose info you would like to update.`,
        name: `id`,
        type: `list`,
        choices: employees,
    },
    {
        message: `Enter current first name for employee.`,
        name: `firstName`,
        type: `input`,
    },
    {
        message: `Enter current last name for employee`,
        name: `lastName`,
        type: `input`,
    },
    {
        message: `Select the current department for this employee`,
        name: `department`,
        type: `list`,
        choices: departments,
    },
];
const updateEmployeeRole =[
    {
        message: `Select role for employee`,
        name: `role`,
        type: `list`,
        choices: filteredRoleChoices,
    },
];
const updateEmployeeManager = [
    {
        message: `Please select this employee's current manager.`,
        name: `manager`,
        type: `list`,
        choices: managerRoster,
    },
];

const questionObject = {
    options,
    res,
    createNewDepartmentQuestion,
    createNewRoleQuestions,
    newEmployeeName,
    newEmployeeDepartment,
    newEmployeeRole,
    newEmployeeManager,
    updateEmployeeName,
    updateEmployeeRole,
    updateEmployeeManager
}
export {
    questionObject
}