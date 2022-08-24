//we need to have an empty array to push the HTML elements to and loop through the team inputs
//we need to have functions for each type of employee to return HTML data
const renderSite = (team) => {
    console.log(team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHTML = `
        <div class"card" style"width: 300px;">
            <div class="card-header">
            ${manager.name} <br/>
            Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-grou-item>Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHTML);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <div class"card" style"width: 300px;">
            <div class="card-header">
            ${engineer.name} <br/>
            Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-grou-item>GitHub Username: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHTML);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHTML = `
        <div class"card" style"width: 300px;">
            <div class="card-header">
            ${intern.name} <br/>
            Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-grou-item>School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHTML);
    }

    //we need a for loop to run thru the employees to generate the right HTML for selected employee
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    //we need to join all the Htmls together
    return html.join('');
}

//we need to export team to generate the whole html page
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href=href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
        <link rel="stylesheet" href="/dist/style.css"/>
        <title>Team Profile Generator</title>
    </head>
    <body>

        <header>
            <h1> The Software Engineering Team </h1>
        </header>
        
        <main>
        ${renderSite(team)}
        </main>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}