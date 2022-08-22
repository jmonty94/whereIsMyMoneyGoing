import mysql from "mysql2";
import inquirer from "inquirer";
import {connection} from "./db/connection.js";
import cTable from "console.table";
// import {
// questionObject
// } from "./src/questions.js";

function getAllDepartments(){
    connection.query(`SELECT id, name FROM department`, (err, res) => {
        if(err) {
            console.log(err);
        } else {
            console.table('Current Departments', res);
        }
    })
}
getAllDepartments()