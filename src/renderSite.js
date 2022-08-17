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
    
}