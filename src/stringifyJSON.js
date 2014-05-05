// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var objType = typeof obj;
	if(objType !== "object" || obj === null){
		if(objType === "string"){
			obj = '"'+obj+'"';
		}
		return String(obj);
	}else{
		var key, value, storage = [], arrTest = (obj && obj.constructor === Array);

		for(key in obj){
			value = obj[key];
			objType = typeof value;
			if(obj.hasOwnProperty(key)){
				if(objType === "function" || objType === undefined){
					return "{}";
				}else if(objType === "string"){
					value = '"' + value + '"';
				}else if(objType === "object" && value !== null){
				value = stringifyJSON(value);
				}
				storage.push((arrTest ? "" : '"' + key + '":') + String(value));
			}
		}
		return (arrTest ? "[" : "{") + String(storage) + (arrTest ? "]" : "}");
	}
};
