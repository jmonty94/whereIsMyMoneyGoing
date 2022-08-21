const { listenerCount } = require("./db/connection");

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
        ],
    },
];

const createNewDepartmentQuestion = [
    {
        message: `Please enter name of new department.`,
        name: `name`,
        type: `input`,
    },
];

const createNewRoleQuestions = [
    {
        message: `Enter title of new role.`,
        name: `name`,
        type: `input`,
    },
    {
        message: `Please enter the salary for this new role.`,
        name: `salary`,
        type: `input`,
    },
    {
        message: `Please select the department this role will fall under.`,
        name: `department`,
        type: `list`,
        choices: departmentList,
    },
];
const employeeQuestions = [
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
    {
        message: `What is this employee's role?`,
        name: `employeeRole`,
        type: `list`,
        choices: allRoles,
    },
    {
        message: `Who is this employee's manager?`,
        name: `employeeManager`,
        type: `list`,
        choices: employeeRoster,
    },
];
const updateEmployeeInfoQuestions = [
    {
        message: `Please select employee whose info you would like to update.`,
        name: `employee`,
        type: list,
        choices: employeeRoster,
    },
    {
        message: `Enter updated first name for employee or press enter to skip.`,
        name: `firstName`,
        type: input,
    },
    {
        message: `Enter updated last name for employee or press enter to skip`,
        name: `lastName`,
        type: input,
    },
    {
        message: `Select role for employee`,
        name: `role`,
        type: `list`,
        choices: allRoles,
    },
    {
        message: `Please select this employee's current manager.`,
        name: `employeeManager`,
        type: `list`,
        choices: employeeRoster,
    },
];