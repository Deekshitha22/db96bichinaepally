var Horse = require('../models/horse');
// List of all Costumes
exports.horse_list = async function (req, res) {
  try {
    theHorse = await Horse.find();
    res.send(theHorse);
  }
  catch (err) {
      res.status(500);
      res.send(`{"error12": ${err}}`);
  }
};
// for a specific Costume.
exports.horse_detail = function(req, res) {
res.send('NOT IMPLEMENTED: horse detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.horse_create_post = async function (req, res) {
  console.log(req.body)
  let document = new Horse();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.Name = req.body.Name;
  document.Cost = req.body.Cost;
  document.Weight = req.body.Weight;
  try {
      let result = await document.save();
      res.send(result);
  }
  catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
  }
};
exports.horse_view_all_Page = async function(req, res) {
  try {
      theHorses = await Horse.find();
      res.render('horse', { title: 'Horse Search Results', results: theHorses });
  } catch (err) {
      res.send(`{"error": ${err}}`)
      res.status(500);
  }
};
// Handle Costume delete form on DELETE.
exports.horse_delete = function(req, res) {
res.send('NOT IMPLEMENTED: horse delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.horse_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: horse update PUT' + req.params.id);
};