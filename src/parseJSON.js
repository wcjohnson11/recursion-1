// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var parsedJason;
  function propertyParser(property){
  	
  }

	  if(json.charAt(0) === "{"){
	  	parsedJason = new Object();
	  }else if(json.charAt(0) === "["){
	  	parsedJason = [];
	  }
  return parsedJason;
};

