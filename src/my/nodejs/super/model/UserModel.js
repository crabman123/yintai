var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    username    		: String,
    psw     			: String,
    create_date     	: {type:Date,default:Date.now}
});

var UserModel = mongoose.model('yintai', User);

module.exports=UserModel;