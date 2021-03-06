var express = require('express');
var router = express.Router();
var passport = require('passport');

// Require controller modules
var api_controller = require('../controllers/api');
var horse_controller = require('../controllers/horse');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// elephant ROUTES ///
// POST request for creating a horse.
router.post('/horse', horse_controller.horse_create_post);
// DELETE request to delete horse.
router.delete('/horses/:id', horse_controller.horse_delete);
// PUT request to update horse.
router.put('/horse/:id', horse_controller.horse_update_put);
// GET request for one horse.
router.get('/horse/:id', horse_controller.horse_detail);
// GET request for list of all horse items.
router.get('/horse', horse_controller.horse_list);

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
module.exports = router;