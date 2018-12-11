//Import (require) connection.js into orm.js
var connection = require('../config/connection.js')




//Create the methods that will execute the necessary MySQL commands in the controllers.
//These are the methods you will need to use in order to retrieve and store data in your database.

var orm =
{

    //selectAll()

    selectAll: function(callback)
    {
        //mySQL Query
        connection.query('SELECT * FROM nfl_teams', function(err, result)
        {
            if (err) throw err;
            callback(result);
        });
    },

    //insertOne()
    insertOne: function(NFL_available_teams, callback)
    {
        connection.query('INSERT INTO nfl_teams SET ?',
            {    NFL_available_teams: NFL_available_teams,
                user_selected_team: false,
            }, function(err, result)
            {
                if (err) throw err;
                callback(result);
            });
                
    },

    //updateOne()
    updateOne: function(nfl_teamID, callback)
    {
        connection.query('UPDATE nfl_teams SET ? WHERE ?', [{user_selected_team: true}, {id: nfl_teamID}],
            function(err, result)
            {
                if (err) throw err;
                callback(result);
            });
    }
};


// Export the ORM object in module.exports.
module.exports = orm;