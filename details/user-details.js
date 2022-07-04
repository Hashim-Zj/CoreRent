var db = require('../config/connection');
var collection = require('..//config/collections');
var bcrypt = require('bcrypt');

module.exports = {
    doSignup: (userData) => {
        console.log('dosignup');
        return new Promise(async (resolve, reject) => {
            userData.registerPassword = await bcrypt.hash(userData.registerPassword, 10)
            db.get().collection('users').insertOne(userData).then((data) => {
                resolve(data)
            })
        })

    }

}