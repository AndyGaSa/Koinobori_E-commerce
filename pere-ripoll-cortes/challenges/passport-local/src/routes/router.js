const { Router } = require('express');

const router = Router();

router.post('/register', (req, res) => { res.send('register work'); });
router.post('/login', (req, res) => { res.send('login work'); });
router.get('/protected', (req, res) => { res.send('protected work'); });
router.get('/unprotected', (req, res) => { res.send('unprotected work'); });

module.exports = router;
