const { student } = require('../models');
const status = require('../config/constants');

const create = async (req, res) => {
  try {
    const attributes = {
      name: req.body.name,
      class: req.body.class,
      gender: req.body.gender,
    }

    const result = await student.create(attributes);
    res.status(status.HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    res.status(status.HTTP_STATUS.ERROR).json({messsage: 'malformed request', error: `${error}`});
  }
};

const findAll = async (req, res) => {
  try {
    const result = await student.findAll();
    res.status(status.HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    res.status(status.HTTP_STATUS.ERROR).json({messsage: 'malformed request', error: `${error}`});
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await student.findById(id);
    res.status(status.HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    res.status(status.HTTP_STATUS.ERROR).json({messsage: 'malformed request', error: `${error}`});
  }
};

const update = async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const attributes = {
      name: req.body.name,
      class: req.body.class,
      gender: req.body.gender,
    }

    const result = await student.findById(id);
    if (!result) {
      res.status(status.HTTP_STATUS.NOT_FOUND).json({ message: 'Not found !'});
    }

    const updated = await result.update(attributes);
    res.status(status.HTTP_STATUS.SUCCESS).json(updated);
  } catch (error) {
    res.status(status.HTTP_STATUS.ERROR).json({messsage: 'malformed request', error: `${error}`});
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await student.findById(id);
    if (!result) {
      res.status(status.HTTP_STATUS.NOT_FOUND).json({ message: 'Not found !'});
    }

    const deleted = await result.destroy();
    res.status(status.HTTP_STATUS.SUCCESS).json(result);
  } catch (error) {
    res.status(status.HTTP_STATUS.ERROR).json({messsage: 'malformed request', error: `${error}`});
  }
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
};
