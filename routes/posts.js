const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lists of Posts');
});
    

router.get('/new', (req, res) => {
    res.send('New posts');
});




module.exports = router;