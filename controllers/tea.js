const Tea = require('../models/tea');

const getAllTea = (req, res, next) => {
  res.json({message: "GET all tea"});
};
const newTea = (req, res, next) => {
  res.json({message: "POST new tea TEST"});
};

// const newTea = (req, res, next) => {
//   Tea.findOne({ name: req.body.name }, (err, data) => {

//     if (!data) {

//       const newTea = new Tea({
//         name: req.body.name,
//         image: req.body.image,
//         description: req.body.description,
//         keywords: req.body.keywords,
//         origin: req.body.origin,
//         brew_time: req.body.brew_time,
//         temperature: req.body.temperature,
//       })

//       newTea.save((err, data) => {
//         if(err) return res.json({Error: err});
//         return res.json(data)
//       })
    
//     } else {
//       if(err) return res.json(`Something went wrong, please try again. ${err}`);
//       return res.json({message: "Tea already exists."});
//     }
//   })
// };

const deleteAllTea = (req, res, next) => {
  res.json({message: "DELETE all tea"});
};

const getOneTea = (req, res, next) => {
  res.json({message: "GET one tea"});
};

const newComment = (req, res, next) => {
  res.json({message: "POST 1 tea comment"});
};

const deleteOneTea = (req, res, next) => {
  res.json({message: "DELETE one tea"});
};




module.exports = {
  getAllTea,
  newTea,
  deleteAllTea,
  getOneTea,
  newComment,
  deleteOneTea
};
