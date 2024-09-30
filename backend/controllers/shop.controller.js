const db = require("../models");
const Shop = db.shops;

exports.create = (req, res) => {
    const shop = {
        address: req.body.address,
        telephone: req.body.telephone
    }

    Shop.create(shop).then((data) => {
        res.send(data);
    })
}

exports.findAll = (req, res) => {
    Shop.findAll().then((data) => {
        res.send(data);
    })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {
    const id = req.params.id;

    Shop.destroy({ where: {id: id}}).then(() => {
        console.log("Se ha borrado");
        res.send({message: "Deleted."});
    })
}