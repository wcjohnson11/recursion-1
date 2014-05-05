// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
	var element = node || $('body');
	var collection = [], n;

	if(element.children.length === 0 && element.className === className){
			return element;
	}

	if(element.children.length > 0){
		for(var i = 0; i<element.children.length-1; i++){
			if (element.className === className) {
				collection.push(element);
			}else{
				n = getElementsByClassName(className, element[i]);
				collection.push(n);
			}
			collection.push($(n));
			console.log(collection);
		}		
	}
		return collection;
  // your code here
};

// var div = $("div");
// for (var i = 0; i < div.length; i++) {
//     if (div[i].className == 'container') {
//         div[i].style.backgroundColor = '#000';
//     }
// }