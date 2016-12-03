var express = require('express');

var routes = function (Area) {
  var areaRouter = express.Router();

  areaRouter.route('/areas')
  .post(function (req, res) {
    var area = new Area(req.body);

    area.save();
    res.status(201).send(area);
  })
  .get(function (req, res) {

    var query = req.query;

    Area.find(query, function (err, areas) {
      if (err) {
        res.status(500).send(err);
      } else {
        //res.json(areas);
        var results = areas;

        res.render('index', {
          results: results,
        });
      }
    });
  });
  areaRouter.route('/areas/:areaId')
  .get(function (req, res) {

    Area.findById(req.params.areaId, function (err, area) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(area);
      }
    });
  });

  return areaRouter;
};

module.exports = routes;
