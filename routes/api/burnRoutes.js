const router = require("express").Router();
const connection = require("../../src/connection.js");
const burnController = require("../../controllers/burnController");

// module.exports= function(router){
// router.get("/api/burnRoutes", function (req, res) {
    // router.get("/", function(req, res){
    // console.log("connecting...");
//     connection.connect(function (err) {
//         if (err) {
//             console.error("Error connecting: " + err.stack);
//             return;
//         } else {
//             connection.query('SELECT * from players', function (error, results, fields) {
//                 if (error) throw error;
//                 res.send(JSON.stringify(results));
//             });
//         }
//     });
// });
    // router.put("/burn"), function(req, res, cb){
    //     connection.query('UPDATE players SET ? WHERE ?',
    //     [
    //         {
    //             score: req.body.score++
    //         },
    //         {
    //             id: req.body.id
    //         }
    //     ], function(err, result){
    //         if(err) throw err;
    //         cb(result);
    //     })
    // };
    // router.put("/stank"), function(req, res, cb){
    //     connection.query('UPDATE players SET ? WHERE ?',
    //     [
    //         {
    //             score: req.body.score -1
    //         },
    //         {
    //             player: req.body.player
    //         }
    //     ], function(err, result){
    //         if(err) throw err;
    //         cb(result);
    //     })
    // };
    // }

    router.route("/")
        .get(burnController.loadBurners)
        .post(burnController.loadBurners);

    // router.route("/burn")
    //     .put(burnController.burn);

    // router.route("/stank")
    //     .put(burnController.stank);


    module.exports = router;