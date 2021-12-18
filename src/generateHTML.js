// loop through the array of objects and create HTML cards for each one
// these HTML cards are added back into an array then returned together using join
const addCards = function(cardInfo) {

    const employeeHTML = cardInfo.map(({ name, id, email, ...other}) => {
        return `
            <div class="card col-12 col-md-4 col-lg-3 shadow m-2">
            <div class="card-body bg-light">
            <h3 class="card-title text-center">${name}</h3>
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
            ${checkEmployee(other)}
            </div>
            </div>
    `
    });

    return employeeHTML.join('');
};

// checks if employee is a Manager, Intern, or Engineer and adds specific HTML data to the cards
const checkEmployee = function(empData) {
    if (empData.officeNumber) {
        return `<p class="card-text">Office Number: ${empData.officeNumber}</p>
            <div class="card-footer bg-info text-white text-uppercase font-weight-bold text-center"><i class="bi bi-star"></i> Manager</div>`;
    }
    else if (empData.github) {
        return `<p class="card-text">GitHub: <a href="https://github.com/${empData.github}" target="_blank">${empData.github}</a></p>
            <div class="card-footer bg-info text-white text-uppercase font-weight-bold text-center"><i class="bi bi-code-slash"></i> Engineer</div>`;
    }
    else {
        return `<p class="card-text">School: ${empData.school}</p>
            <div class="card-footer bg-info text-white text-uppercase font-weight-bold text-center"><i class="bi bi-mortarboard"></i> Intern</div>`;
    }
};

// the core HTML document that retrieves the employee card information from the functions above
const generateHTML = function(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    </head>
    <body>
        <header class="bg-success text-white text-uppercase font-weight-bold text-center p-3">
            <h1>My Team</h1>
        </header>

        <div class="container">
            <div class="row d-flex justify-content-center">
                ${addCards(data)}
            </div>
        </div>
        
        <footer class="bg-dark text-white text-uppercase font-weight-bold p-1">
            &copy Max Winter
        </footer>

    </body>
    </html>
`
};

module.exports = generateHTML;