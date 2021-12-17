// i will call this file from the index.js file
// it will contain the template literals of HTML that will write to the dist folder

const generateHTML = function(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="../src/style.css" />
    </head>
    <body>
        <header>
            My Team
        </header>

        <section class="d-flex flex-row justify-content-center" id="employee-cards">

        </section>
        
        <footer>
            &copy Max Winter
        </footer>

    </body>
    </html>
`
};

module.exports = generateHTML;