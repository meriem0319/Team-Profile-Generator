//we need to have an empty array to push the HTML elements to and loop through the team inputs
//we need to have functions for each type of employee to return HTML data
const renderSite = (team) => {
    console.log(team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">ID: ${manager.id}</p>
                <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
                <p class="card-text">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
        html.push(managerHTML);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">ID: ${engineer.id}</p>
                <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
                <p class="card-text">Github Username: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
        </div>
        `;
        html.push(engineerHTML);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <p class="card-text">ID: ${intern.id}</p>
                <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
                <p class="card-text">School: ${intern.school}</p>
            </div>
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
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