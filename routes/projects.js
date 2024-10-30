// const express = require('express');
// const router = express.Router();
// const { projects } = require('../data.json');


// // Dynamic Project route
// router.get('/project/:id', (req, res, next) => {
//     const projectId = req.params.id;
//     const project = data.projects.find(p => p.id === parseInt(projectId));
  
//     if (project) {
//       res.render('project', { project });
//     } else {
//       const err = new Error('Project not found');
//       err.status = 404;
//       next(err);
//     }
// });

// module.exports = router;