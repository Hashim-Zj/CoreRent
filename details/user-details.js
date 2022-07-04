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
    },
    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginstatus = false
            let response = {}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ registerEmail: userData.EmailorPhone })
            if (user) {
                bcrypt.compare(userData.Password, user.registerPassword).then((status) => {
                    if (status) {
                        console.log("Login Success");
                        response.user = user
                        response.status = true
                        resolve(response)
                    } else {
                        console.log("Login Failed");
                        resolve({ status: false })
                    }
                })
            } else {
                console.log("Login Failed");
                resolve({ status: false })
            }
        })
    }

}