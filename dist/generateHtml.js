function generateHtml ( team ) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
    </head>
    <body>
        <h1>Hello</h1>
       ${team.map(employee =>{
           //return "new"
           if ( employee.getRole() === "Manager"){
               return `<h1>manager</h1>`
           }
       }).join("")}
    </body>
    <script src="index.js"></script>
    </html>`
}




module.exports = generateHtml
