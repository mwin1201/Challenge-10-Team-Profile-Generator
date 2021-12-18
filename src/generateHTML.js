// i will call this file from the index.js file
// it will contain the template literals of HTML that will write to the dist folder

const addCards = function(cardInfo) {

    const employeeHTML = cardInfo.map(({ name, id, email, ...other}) => {
        return `
            <div class=card>
            <div class=card-body>
            <h4 class=card-title>${name}</h4>
            <p class=card-text>ID: ${id}</p>
            <p class=card-text>Email: <a href="mailto:${email}">${email}</a></p>
            ${checkEmployee(other)}
            </div>
            </div>
    `
    });

    return employeeHTML.join('');
};

const checkEmployee = function(empData) {
    if (empData.officeNumber) {
        return `
        <p class=card-text>Office Number: ${empData.officeNumber}</p>
        `;
    }
    else if (empData.github) {
        return `
        <p class=card-text>GitHub: <a href="https://github.com/${empData.github}" target="_blank">${empData.github}</a></p>
        `;
    }
    else {
        return `
        <p class=card-text>School: ${empData.school}</p>
        `;
    }
};

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
        <link rel="stylesheet" href="../src/style.css" />
    </head>
    <body>
        <header>
            My Team
        </header>

        <section class="d-flex flex-row justify-content-center" id="employee-cards">
            ${addCards(data)}
        </section>
        
        <footer>
            &copy Max Winter
        </footer>

    </body>
    </html>
`
};

module.exports = generateHTML;