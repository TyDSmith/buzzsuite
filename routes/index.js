//const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth")

// API Routes
router.use("/api", apiRoutes);
// Auth Routes
router.use("/auth", authRoutes);

router.get("/logged-in", function (req, res) {
    res.json(req.body)
});

// const ReactDOMServer = require('react-dom/server');

// router.get('/*', (req, res) => {
//     const app = ReactDOMServer.renderToString(<App />);
  
//     const indexFile = path.resolve('./build/index.html');
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Something went wrong:', err);
//         return res.status(500).send('Oops, better luck next time!');
//       }
  
//       return res.send(
//         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//       );
//     });
// });


// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
