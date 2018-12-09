// import orm.js into rookie_picker.js
var orm = require('../config/orm.js');

// create the code that will call the ORM functions using specific input for the ORM.
var nfl_team = 
{

  selectAll: function(callback)
  {
    orm.selectAll(function(res)
    {
      callback(res);
    });
  },

  insertOne: function(NFL_available_teams, callback)
  {
    orm.insertOne(NFL_available_teams, function(res)
    {
      callback(res);
    });
  },

  updateOne: function(nfl_team_id, callback)
  {
    orm.updateOne(nfl_team_id, function(res)
    {
      callback(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = nfl_team;