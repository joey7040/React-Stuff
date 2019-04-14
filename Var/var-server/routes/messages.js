const express = require('express');
const router = express.router({ mergeParams: true});

const { createMessage } = require('../handlers/messages');

router.route('/').post(createMessage);

module.export = router
