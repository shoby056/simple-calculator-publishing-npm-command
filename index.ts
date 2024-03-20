#!/usr/bin/env node

import inquirer from "inquirer";
const userInput=await inquirer.prompt([{
    name:"num1",
    type:"number",
    message:"Enter first number"
},
{
        name:"num2",
        type:"number",
        message:"Enter second number"
      },
     {
      name:"operators",
     type:"list",
     message:"Enter the operator",
     choices:["Addition","Subtraction", "Multiplication", "Division"],
     }
    ]);
    
        if(userInput.operators ==="Addition"){
        console.log(userInput.num1 + userInput.num2);
        }

        else if(userInput.operators ==="Subtraction"){
            console.log(userInput.num1 - userInput.num2);
            }
       
            else if(userInput.operators ==="Multiplication"){
                console.log( userInput.num1 * userInput.num2);
                }

                else if(userInput.operators ==="Division"){
                    console.log(userInput.num1 - userInput.num2);
                    }
                    else{
                        console.log("Enter a valid operator")

                    }
                 
                
                    