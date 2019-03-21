var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name : String,
	age: Number,
	temperament: String
})


var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
var george = new Cat({
	name : "George",
	age: 11,
	temperament:"Grouchy"
});

george.save(function(err, good){
	if(err){
		console.log("something went wrong !!");
	}else{
		console.log("we just saved a cat to the D");
		console.log(good);
	}
});

