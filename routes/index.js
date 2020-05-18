const express = require('express');
const router = express.Router();
const path = require ('path')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/',ensureAuthenticated, (req, res) => res.render('users/login'));

// Dashboard
/*router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
*/
//about
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
  res.sendFile(path.join(__dirname+ '/about.html')),{
    user: req.user}
})
//contact
router.get('/contact', ensureAuthenticated, (req,res) =>{
  res.sendfile(path.join(__dirname + 'contact.html')), {
    user:req.user
  }
})

//domain
router.get('/domain', ensureAuthenticated, (req,res) => {
  res.sendFile(path.join(__dirname+ 'domain.html')), {
    user:req.user
  }
})
//features
router.get('/features', ensureAuthenticated, (req, res)=> {
  res.sendFile(path.join(__dirname+ 'features.html')), {
    user:req.user
  }
})

router.get('/hosting', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname+ 'hosting.html')),{
    user:req.user
  }
})
//index
router.get('/index', ensureAuthenticated, (req, res) =>{
  res.sendFile(path.join(__dirname+ 'index')), {
    user:req.user
  }
})

//pricing
router.get('/pricing', ensureAuthenticated, (req, res) =>{
  res.sendFile(path.join(__dirname+'pricing')), {
    user:req.user
  }
})

router.get('/logout', ensureAuthenticated, (req,res) =>{
  res.logout();
  res.redirect('/user/login')
})
module.exports = router;
