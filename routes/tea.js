const express = require('express');
const router = express.Router();
const teaController = require('../controllers/tea');
const multer = require('multer');
const upload = multer();

router.get('/', teaController.getAllTea);
router.post('/tea', teaController.newTea);
router.delete('/tea', teaController.deleteAllTea);

router.get('/tea/:name', teaController.getOneTea);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);

router.post('/tea', upload.none(), teaController.newTea);

module.exports = router;
