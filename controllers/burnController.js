// const db = require("../models");
const connection = require("../src/connection");

module.exports = {
    loadBurners: function (req, res) {
        console.log("Loading...")
        // console.log(req);
        // db.Burn
        connection.query('SELECT * from players', function(error, results) {
                        if (error) throw error;
                        return res.json(results);
                    });
        // connection.connect(function (err) {
        //     if (err) {
        //         console.error("Error connecting: " + err.stack);
        //         return;
        //     } else {
        //         connection.query('SELECT * from players', function (error, results) {
        //             if (error) throw error;
        //             res.send(JSON.stringify(results));
        //         });
        //     }
        // });
    },
    // burn: (req, res) => {
    //     console.log(req);
    //     connection.query()
    // }
}