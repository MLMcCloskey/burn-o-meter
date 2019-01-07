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
    },
    burn: (req, res) => {
        console.log(req.body.id);
        connection.query(`UPDATE players SET score = score +1 WHERE id = ${req.body.id}`, function(error, results){
            if (error) throw error;
            res.send(JSON.stringify(results));
        });
    }, 
    stank: (req, res) => {
        console.log(req.body.id);
        connection.query(`UPDATE players SET score = score -1 WHERE id = ${req.body.id}`, function(error, results){
            if (error) throw error;
            res.send(JSON.stringify(results));
        });
    }
}