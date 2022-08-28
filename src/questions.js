import { roles, employees, departments, rolesFiltered } from "./questionLists.js";


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
        choices: rolesFiltered,
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
const updateEmployeeInfoQuestions = [
    {
        message: `Please select employee whose info you would like to update.`,
        name: `employee`,
        type: `list`,
        choices: employees,
    },
    {
        message: `Enter updated first name for employee or press enter to skip.`,
        name: `firstName`,
        type: `input`,
    },
    {
        message: `Enter updated last name for employee or press enter to skip`,
        name: `lastName`,
        type: `input`,
    },
    {
        message: `Select the current department for this employee`,
        name: `department`,
        type: `list`,
        choices: departments,
    },
    {
        message: `Select role for employee`,
        name: `role`,
        type: `list`,
        choices: roles,
    },
    {
        message: `Please select this employee's current manager.`,
        name: `employeeManager`,
        type: `list`,
        choices: employees,
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
    updateEmployeeInfoQuestions
}
export {
    questionObject
}