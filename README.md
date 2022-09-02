# Where is my money going
​
## Table of Contents
​
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [Installation](#installation)
  - [Package Installation](#package-installation)
  - [Environmental Variables](#environmental-variables)
  - [Seed Test Data](#seed-test-data)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-I-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
​
## Overview
​
### The challenge

​The Challenge for this project was to create a command line application for a business owner to create and upkeep an internal employee database. The database had to contain departments, roles, and individual employees. I had to utilize MySQL2 for the database, Inquirer for the command line prompts, and console.table for displaying the results of the database queries.
​
### User Story
​
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
​
### Acceptance Criteria
​
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

### Links
​
- [Live Demo](https://drive.google.com/file/d/14oBZD6nXW4J3or1HNqLd2ZrV1_eitDnX/view)

## Installation

### Package Installation

```
npm i
```
​
### Environmental Variables

To set up your environmental variables please create a .env file in the root and paste the following code into it and fill in your DB username and password in the empty spots for each 

```
DB_NAME=employees_db
DB_USER=
DB_PASSWORD=
```

### Seed Test Data

To create the database and seed if please sign into MySQL using mysql -u (insert username for MySQL) -p and then input your password at the following prompt. Once logged into MySQL in your MySQL terminal please input the following commands or copy and paste the schema and then the seeds into MySQL workbench
```
source ./db/schema.sql
source ./db/seeds.sql
```

## My process
​
### Built with
​
-   [MySQL2](https://github.com/sidorares/node-mysql2/tree/master/documentation)
-   [Inquirer](https://www.npmjs.com/package/inquirer#documentation)
-   [console.table](https://github.com/bahmutov/console.table)

​
### What I learned

​This project helped me grow my understanding of Try Catch's, for of loops, and asynchronus funcitons. All of which I used heavily in this application.

​
### Continued development
​Some improvements I would like to implement are:
-   Deletion functionality for departments, roles, and employees
-   Expand update options to include increases for salaries to roles, 
-   Connect roles into a heirarchy that shows applicable managers based upon that roles level
-   Department Budget AKA sum of total employee salary that are in each department


​
### Useful resources
​
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) - In-depth documentation for elements or functions
- [stackoverflow](https://stackoverflow.com/) - Answered specific questions from various collaborators

## Author
​
- [James Montogmery](https://github.com/jmonty94)

## Acknowledgments
​As always huge shoutout to my TA Luigi Campbell who is always there for any question no matter how big or small.