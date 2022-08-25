import mysql from "mysql2";
import inquirer from "inquirer";
import {db} from "./db/connection.js";
import cTable from "console.table";
import { questionObject } from "./src/questions.js";
import {initializer} from "./src/questionLists.js"


async function init(){
    await initializer();
    inquirer.prompt(questionObject.newEmployeeName).then((answers) => {
        
    })
}
init();