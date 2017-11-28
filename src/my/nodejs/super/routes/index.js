var express = require('express');
var router = express.Router();
var UserModel = require('../model/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/regist', function(req, res, next) {
  	UserModel.find({username:req.body.username},(err,docs)=>{
  		var result={
  			code:1
  		}
  		if(err || docs !=0){
  			result.code=-99;
  			result.msg="用户名已经存在";
  			res.send(JSON.stringify(result));
  			return;
  		}
  		var um = new UserModel();
  		um.username=req.body.username;
  		um.psw=req.body.psw;
  		um.save((err)=>{
  			if(err){
  				result.code=-97;
  				result.msg="出错了";
  			}
  			res.send(JSON.stringify(result));
  		})
  		
  	})
});

router.post('/api/login', function(req, res, next) {
  	UserModel.find({username:req.body.username,psw:req.body.psw},(err,docs)=>{
  		var result={
  			code:1
  		}
  		if(err || docs ==0){
  			result.code=-91;
  			result.msg="账号或密码错误";
  		}else{
  			req.session.username=req.body.username;
//			console.log(req.session);
  		}
  		
			res.send(JSON.stringify(result));
  		
  	})
});

module.exports = router;
