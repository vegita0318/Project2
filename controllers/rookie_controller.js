var express = require('express');
var router = express.Router();
var nfl_team = require('../models/rookie_picker.js');


//Setup Routes

// Index Redirect
router.get('/', function (req, res) 
{
  res.redirect('/index');
});

// Index Page 
router.get('/index', function (req, res) 
{
  nfl_team.selectAll(function(data) 
  {
    var hbsObject = { nfl_teams: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Create
router.post('/nfl_team/create', function (req, res) 
{
  nfl_team.insertOne(req.body.NFL_available_teams, function() 
  {
    res.redirect('/index');
  });
}); 

// Change
router.post('/nfl_team/selection/:id', function (req, res) 
{
  nfl_team.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

// Export routes
module.exports = router;