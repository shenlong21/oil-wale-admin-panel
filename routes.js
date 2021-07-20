const express = require('express')
const router = express.Router()
// const app = express()


router.get('/', function (req, res) {

    var user = {
        name: 'User 1',
        mobile: '+917457459684',
        profile_img: '/img/user.png'
    }

    res.render('dashboard', {user, page_dashboard: true});
});

router.get('/garages', function (req, res) {

    var user = {
        name: 'User 1',
        mobile: '+917457459684',
        profile_img: '/img/user.png'
    }

    res.render('garages', {user, page_garage: true});
});

router.get('/accounts', function (req, res) {

    var user = {
        name: 'User 1',
        mobile: '+917457459684',
        profile_img: '/img/user.png'
    }

    res.render('accounts', {user, page_accounts: true});
});

router.get('/customers', function (req, res) {

    var user = {
        name: 'User 1',
        mobile: '+917457459684',
        profile_img: '/img/user.png'
    }

    res.render('customers', {user, page_customers: true});
});

router.get('/products', function (req, res) {

    var user = {
        name: 'User 1',
        mobile: '+917457459684',
        profile_img: '/img/user.png'
    }

    res.render('products', {user, page_products: true});
});

router.get('/vehicles', function (req, res) {

    var user = {
        name: 'User 1',
        mobile: '+917457459684',
        profile_img: '/img/user.png'
    }

    res.render('vehicles', {user, page_vehicles: true});
});

router.get('/schemes', function (req, res) {

    var user = {
        name: 'User 1',
        mobile: '+917457459684',
        profile_img: '/img/user.png'
    }

    res.render('schemes', {user, page_schemes: true});
});

module.exports = router