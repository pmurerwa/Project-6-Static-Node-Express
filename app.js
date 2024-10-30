const express = require("express");
const path = require("path"); //To work with file paths
const data = require("./data.json"); // Load project data
const app = express();

app.set("view engine", "pug"); //Tell Express to use Pug as the view engine:
app.use("/static", express.static(path.join(__dirname, "public"))); //Use express.static() to serve static files (CSS, images, JS files) from a folder named public

//create a routers with express
app.get("/", (req, res) => {
  res.render("index", { projects: data });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project/:id", (req, res, next) => {
  const projectId = parseInt(req.params.id, 10);
  const project = data.projects.find((p) => p.id === projectId);

  if (project) {
    res.render("project", { project });
  } else {
    const err = new Error("Project Not Found");
    err.status = 404;
    next(err);
  }
});

// 404 handler for undefined routes
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
  });
  
  // Global error handler
  app.use((err, req, res, next) => {
    if (err.status === 404) {
      res.status(404).render('page-not-found', { err });
    } else {
      err.status = err.status || 500;
      err.message = err.message || 'Server Error';
      res.status(err.status).render('error', { err });
    }
  });  

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
