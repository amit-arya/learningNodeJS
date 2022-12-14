const express = require('express');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>Hello from Express</h1>"); // default header is text/html
    // either write next or send a response
});

module.exports = router;