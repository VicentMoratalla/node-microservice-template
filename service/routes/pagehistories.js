const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const pageHistorySchema = mongoose.Schema({
  checkpoint: {
    type: String,
    required: true
  },
  details: {
    identifier: String,
    pageName: String,
    quoteNumber: String,
    serviceCalled: String,
    product: String,
    flowName: String
  },
  sessionId: String,
  date: Date
});

const PageHistory = mongoose.model('PageHistory', pageHistorySchema);

router.get('/', auth, async (req, res) => {
  const result = await PageHistory.find();
  res.send(result);
});

router.post('/', auth, (req, res) => {
  createPageHistory(req, res);
});

async function createPageHistory(req, res) {

  const pageHistory = new PageHistory(req.body);

  try {
    const result = await pageHistory.save();
    console.log(result);
    res.send(result);
  }
  catch (ex) {
    console.log(ex.message);
  }

}

module.exports = router;