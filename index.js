const inquirer = require("inquirer")
const fs = require("fs")


const generateProfile = ({name, id, email}) =>
`${name}
${id}
${email}`

const questions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name',
    },
    {
      type: 'input',
      message: 'What is their id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is their email?',
      name: 'email',
  },
]
inquirer.prompt(questions)
.then((answers) => { 
    const data = generateProfile(answers)
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Profiles Created!")
        }
    })
});

