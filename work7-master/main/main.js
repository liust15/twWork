module.exports = function main(email, suffixes) {
  // Write your code here
   	var arr = email.split(`@`);
		var str = arr[1];
		for(var i = 0; i < suffixes.length; i++) {
		if(str == suffixes[i]) {
		return true;
		break;
		} else {
		return false;
		}
		}
};
