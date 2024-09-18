/* const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
); */

const Tour = require('../models/tourModel');

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'name and price are required',
//     });
//   }
//   next();
// };

// exports.checkID = (req, res, next, val) => {
//   console.log(`id = ${val}`);
//   // if (req.params.id * 1 > tours.length) {
//   //   return res.status(400).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID',
//   //   });
//   // }
//   next();
// };

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: { tours },
  });
};

exports.getOneTour = (req, res) => {
  //console.log(req.params)

  // const id = req.params.id * 1; //change into a number

  // const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    // data: { tour },
  });
};

exports.createTour = async (req, res) => {
  try {
    // const newTour = new Tour({})
    // newTour.save().then()

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { tour: newTour },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: '< update Tour Here...>',
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
