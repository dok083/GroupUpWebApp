var mydata = require('../data/myGroups.json');
var classes = require('../data/allClasses.json');
var check = require('../data/check.json');

/* WTF */
exports.signInAction = function(req, res){
   
  console.log("sign in Action");
  console.log(res.body);
  console.log(check);

  console.log("Log in view");
  var child = check.child;
  var id = req.body.id;
  var password = req.body.password;

  console.log("id and password");
  console.log(id);
  console.log(password);

  console.log("my id and password");
  for(var i=0; i < mydata.length; i++) {
    console.log(mydata[i].id);
    console.log(mydata[i].password);
  }

  console.log("Starting chekcing for loop");
  for(i=0; i < mydata.length; i++) {
    console.log(mydata[i].id);
    console.log(mydata[i].password);

    /* If the user is registered */
    if(mydata[i].id == id) {
      console.log("id check passed");
      if(mydata[i].password == password) {
        console.log("Check passed!");

        var url = req.body.id + "/main";
          res.redirect( url );
          return;
/*
        if(check.child == true) {
          var url = req.body.id + "/main/child";
          res.redirect( url );
          return;
        }
        else {
          var url = req.body.id + "/main";
          res.redirect( url );
          return;
        } */
      }
    }
  }

  if(id == undefined && password == undefined)
    return;

  /* If the user input is wrong */
  console.log("The user input is wrong!");
  console.log(child);

    //res.render('logInError',child);
    //res.render('/');
    //
    res.render('logInError', 
      {
         'child' : check.child
      });
    
  return;

  /*
    ID & Pass Check
  */

  // res.json( req.body )
};

/* No longer using this function */
exports.viewParent = function(req, res){

  var id = req.body.id;
  var password = req.body.password;

  check.child = false;
  console.log(check.child);

  if(id == undefined && password == undefined) {
    res.render('index');
  }
};

exports.viewChild = function(req, res){

  var id = req.body.id;
  var password = req.body.password;

  check.child = true;
  console.log(check.child);

  if(id == undefined && password == undefined) {
    res.render('index2');
  }
};