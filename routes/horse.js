var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
/* GET costumes */
router.get('/', horse_controlers.horse_view_all_Page );
/* GET detail horse page */
router.get('/detail',  horse_controlers.horse_view_one_Page);
/* GET create horse page */
router.get('/create',  horse_controlers.horse_create_Page);
/* GET create update page */
router.get('/update',  horse_controlers.horse_update_Page);
/* GET delete horse page */
router.get('/delete',  horse_controlers.horse_delete_Page);

module.exports = router;