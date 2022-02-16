module.exports = function check(str, bracketsConfig) {
	
	let i = 0;

	while(i < bracketsConfig.length) {
		 let pair = bracketsConfig[i].join('')

		 if(str.includes(pair)) {
			  str = str.replace(pair, '')
			  i = 0;
		 } else {
			  i++
		 }
	}

return (str.length !=0) ? false : true
}