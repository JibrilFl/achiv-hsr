const {Achivment} = require('../models/models');
const uuid = require('uuid');
const path = require('path')
const ApiError = require('../error/ApiError');

class AchivmentController {
    async create(req, res, next) {
        try {
            const {name, description, category, reward} = req.body
            const {img} = req.file
            let fileName = uuid.v4() + '.img'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const achiv = await Achivment.create({name, img, description, category, reward})

            return res.json(achiv)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }

    async deleteOne(req, res) {

    }
}

module.exports = new AchivmentController();