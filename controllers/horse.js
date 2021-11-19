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

// VIEWS
// Handle a show all view
exports.horse_view_all_Page = async function (req, res) {
  try {
      theHorses = await horse.find();
      res.render('horse', { title: 'Horse Search Results', results: theHorses });
  } catch (err) {
      res.send(`{"error": ${err}}`)
      res.status(500);
  }
};
// Handle Elephant delete on DELETE.
exports.horse_delete = async function (req, res) {
  console.log("delete " + req.params.id)
  try {
      result = await Horse.findByIdAndDelete(req.params.id)
      console.log("Removed " + result)
      res.send(result)
  } catch (err) {
      res.status(500)
      res.send(`{"error": Error deleting ${err}}`);
  }
};
// Handle Elephant update form on PUT.
exports.horse_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
  try {
      let toUpdate = await Horse.findById(req.params.id)
      // Do updates of properties
      if (req.body.Name)
          toUpdate.Name = req.body.Name;
      if (req.body.Cost) toUpdate.Cost = req.body.Cost;
      if (req.body.Weight) toUpdate.Weight = req.body.Weight;
      let result = await toUpdate.save();
      console.log("Sucess " + result)
      res.send(result)
  } catch (err) {
      res.status(500)
      res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
  }
};

// Handle a show one view with id specified by query
exports.horse_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id)
  try {
      result = await Horse.findById(req.query.id)
      res.render('horsedetail',
          { title: 'Horse Detail', toShow: result });
  }
  catch (err) {
      res.status(500)
  }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.horse_create_Page = function (req, res) {
  console.log("create view")
  try {
      res.render('horsecreate', { title: 'Horse Create' });
  }
  catch (err) {
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for updating a costume.
// query provides the id
exports.horse_update_Page = async function (req, res) {
  console.log("update view for item " + req.query.id)
  try {
      let result = await Horse.findById(req.query.id)
      res.render('horseupdate', { title: 'Horse Update', toShow: result });
  }
  catch (err) {
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};

// Handle a delete one view with id from query
exports.horse_delete_Page = async function (req, res) {
  console.log("Delete view for id " + req.query.id)
  try {
      result = await Horse.findById(req.query.id)
      res.render('horsedelete', {
          title: 'Horse Delete', toShow:
              result
      });
  }
  catch (err) {
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};