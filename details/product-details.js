var db = require('../config/connection')
var collection = require('..//config/collections');
const { PRODUCT_COLLECTION } = require('..//config/collections');
module.exports = {

    addProduct: (product, callback) => {
        console.log(product);
        db.get().collection('products').insertOne(product).then((data) => {
            //console.log(data);
            callback(data.insertedId)
        })
    },
    /*addProductImage: (image, callback) => {
        console.log(image);
        db.get().collection('products-images').insertOne(image).then((data) => {
            console.log(data);
            callback(data.insertedId)
        })
    },*/
    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}


