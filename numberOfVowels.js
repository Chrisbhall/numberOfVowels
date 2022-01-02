const numberOfVowels = function(data){
	// Put your solution here
	const array = data.split("");
	let count = 0;
	for (let i = 0; i < array.length; i++){
		if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u"){
			count++;
		}
	}
	return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
