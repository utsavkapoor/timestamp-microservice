'use strict';
var moment = require('moment');

module.exports = function(app) {
  app.route('/:timestamp').get(function(req,res){
    var string = req.params.timestamp;
    var obj = {"unix":null,"natural":null};
    // We check if this is a unix string
    if(+string > 0){
      var dt = new Date();
      var formatted = moment.unix(string).format("MMMM D, YYYY");
      obj["unix"] = string;
      obj["natural"] = formatted;
       res.send(obj);
    } else if(isNaN(+string) && moment(string, ["MMMM D, YYYY","D MMMM, YYYY"],true).isValid()){
    obj["natural"] = string;
      obj["unix"] = moment(string, ["MMMM D, YYYY","D MMMM, YYYY"]).format("X");
    res.send(obj);
    } else if (isNaN(+string) && moment(string, ["MM-DD-YYYY","DD-MM-YYYY"],true).isValid()){
      obj["natural"] = moment(string, ["MM-DD-YYYY","DD-MM-YYYY"]).format("MMMM D, YYYY");
      obj["unix"] = moment(string,["MM-DD-YYYY","DD-MM-YYYY"]).format("X");
      res.send(obj);
      res.end();
    }else {
      res.send(obj);
    }
  });
  
};

