const express = require('express');
const router = express.Router();
const { fetchAll, submitPost, loadApp } = require('../controller');

router.route('/fetchAll').get(fetchAll);
router.route('/submitPost').post(submitPost);
router.route('*', loadApp);

module.exports = { router };
