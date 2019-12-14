var apiRoutes = require("../routes/api-routes");
var htmlRoutes = require("../routes/html-routes");
var router = require("express").Router() 

router.use("/results", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router; 


// var router = require("express").Router(); 

// router.use(""); 

// module.exports = router; 


// let Result = require("./Result"),
// let routerExp = require("express").Router(); 
// let apiRoutes = require("../routes/api-routes");
// let htmlRoutes = require("../routes/html-routes");

// module.exports = routerExp; 
// module.exports = Result; 
// module.exports = apiRoutes; 
// module.exports = htmlRoutes; 