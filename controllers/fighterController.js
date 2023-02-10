const Fighter = require("../models/fighterModel");

exports.getAllFighters = async (req, res) => {
  try {
    const fighters = await Fighter.find();
    res.status(200).json({
      status: "success",
      results: fighters.length,
      fighters,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.addFighter = async (req, res) => {
  try {
    const fighter = await Fighter.create(req.body);
    res.status(200).json({
      status: "success",
      fighter,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getFighter = async (req, res) => {
  try {
    const fighter = await Fighter.findById(req.params.id);
    res.status(200).json({
      status: "success",
      fighter,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateFighter = async (req, res) => {
  try {
    const fighter = await Fighter.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      fighter,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteFighter = async (req, res) => {
  try {
    await Fighter.findByIdAndDelete(req.params.id);
    res.status(204).json({});
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
