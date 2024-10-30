const express = require('express');
const path = require('path'); //To work with file paths
const data = require('./data.json'); // Load project data
const app = express();

app.set('view engine', 'pug'); //Tell Express to use Pug as the view engine:
app.use('/static', express.static('public')); //Use express.static() to serve static files (CSS, images, JS files) from a folder named public

//Create a routes folder, and connect it.
const routes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

//Routes 
app.use('/', routes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

/* General Error Handling
1. 404
2. Global
*/


// 404 Handler for undefined routes
app.use((req, res, next) => {
    const err = new Error('The page does not exist.');
    err.status = 404;
    console.log(`Error ${err.status}: ${err.message}`);
    next(err);
  });
  

//  Global Error Handler
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'An unexpected error occurred on the server.';
  
    console.log(`Error ${err.status}: ${err.message}`); // Log the error details
    res.status(err.status).render('error', { err });   // Render the error page with status and message

});
  

// Start server on port 3000
app.listen(3000, () => {
    console.log(`App is listening on localhost:3000.`);
});