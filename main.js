import inquirer from "inquirer";
let Todos = [];
let condition = true;
while (condition)
    ;
{
    let addTask = await inquirer.prompt([
        {
            name: 'Todos',
            type: 'input',
            message: "what you want to add in your Todos?"
        },
        {
            name: 'AddMore',
            type: 'confirm',
            message: "Do you want add more?",
            default: "false",
        },
    ]);
    Todos.push(addTask.Todos);
    condition = addTask.AddMore;
    console.log(Todos);
}
;
