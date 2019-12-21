var passwordLength;
var pwMinLength = 3;
var pwMaxLength = 6;
var pwSubNumbers = false;
var pwSentence = false;
var animals = ["ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "cow",
"deer", "dog","duck","eagle","fish","fly","fox","frog","giraffe","goat","hamster","hawk","hippo",
"horse","kitten","koala","lion","lobster","monkey","octopus","owl","panda","pig","puppy",
"rabbit","rat","seal","shark","sheep","snail","snake","spider","tiger","turtle","wolf","zebra",
"zo", "fo", "wo"];

var verbs = ["be", "have", "do", "say", "go", "can", "get", 
"would","make", "know", "will", "think", "take", "see",
"come", "could", "want", "look", "use", "find", "give",
"should", "become", "believe", "happens", "provide", "include",
"remember", "consider", "appear", "serve", "reach", "expect"];

var names = ["james", "john", "robert", "michael", "will","david",
"richard", "joe", "bob", "tim", "tom", "charles", "daniel",
"chris", "matt", "tony", "steve", "paul", "ed", "jo", "ron",
"al", "cy", "io", "guy", "ki", "mo", "nick", "rick", "sam"];

var conjucts = ["for", "the", "has", "with", "holds", "stops", "with",
"after", "before", "it", "so", "shows", "carries", "barters", "banters",
"canters", "saunter", "do", "under", "over", "doubles", "doubts"];

function updateSlider() {
	passwordLength = document.querySelector("#pwLength").value;
    document.querySelector("#pwLenVal").innerHTML = passwordLength;
    
	pwMinLength = document.querySelector("#pwMin").value;
    document.querySelector("#pwMinLenVal").innerHTML = pwMinLength;
	
	pwMaxLength = document.querySelector("#pwMax").value;
	
	if(pwMinLength > pwMaxLength) {
		pwMaxLength = pwMinLength;
	}
    document.querySelector("#pwMaxLenVal").innerHTML = pwMaxLength;
}

function checkNS() {
	var pwSNobj = document.querySelector("#numSub");
	if(pwSNobj.checked == true) {
		pwSubNumbers = true;
	} else {
		pwSubNumbers = false;
	}
}

function checkSent() {
	var pwSentobj = document.querySelector("#sentence");
	if(pwSentobj.checked == true) {
		pwSentence = true;
	} else {
		pwSentence = false;
	}
}

function getTenPws() {
	for (i = 0; i < 10; i++) {
	  generateAll();
	} 
}

//This function calls the generateWord function to get a set of
// words of the expected size to create the password
function generateAll() {
	//pwSubNumbers = document.querySelector("#numSub").value;
	//pwSentence = document.querySelector("#sentence").value;
	
	var pwtable = document.querySelector("#passwordTable");
	var tr = document.createElement("tr");
	pwtable.appendChild(tr);
	
	var tdn = document.createElement("td");
	//Use some kind of a for loop to generate enough words for the pw
	//td.innerHTML = generateWord(pwMinLength, pwMaxLength, pwSubNumbers);
	
	tr.appendChild(tdn);
	if(!pwSentence) {
		var td = document.createElement("td");
		var strTemp = generateWord();
		var strLength = strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);

		var td = document.createElement("td");
		strTemp = generateWord();
		strLength += strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);

		var td = document.createElement("td");
		strTemp = generateWord();
		strLength += strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);

		var td = document.createElement("td");
		strTemp = generateWord();
		strLength += strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);
		
		tdn.innerHTML = strLength;
	} else {
		var td = document.createElement("td");
		var strTemp = getName();
		var strLength = strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);

		var td = document.createElement("td");
		strTemp = getVerb();
		strLength += strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);

		var td = document.createElement("td");
		strTemp = getConjunt();
		strLength += strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);

		var td = document.createElement("td");
		strTemp = getAnimal();
		strLength += strTemp.length;
		if(pwSubNumbers) strTemp = subLetters(strTemp);
		td.innerHTML = strTemp;
		tr.appendChild(td);
		
		tdn.innerHTML = strLength;
	}

}
//test function to check text input and subLetters function
function generateAllTest() {
	var pwtable = document.querySelector("#passwordTable");
	var tr = document.createElement("tr");
	pwtable.appendChild(tr);
	
	var td = document.createElement("td");
	
	//td.innerHTML = generateWord(pwMinLength, pwMaxLength, pwSubNumbers);
	
	td.innerHTML = "16";
	tr.appendChild(td);
	var td = document.createElement("td");
	td.innerHTML = "word";
	tr.appendChild(td);
	var td = document.createElement("td");
	td.innerHTML = "test";
	tr.appendChild(td);
	var td = document.createElement("td");
	td.innerHTML = subLetters("lobstera");
	tr.appendChild(td);
}


//Pass in: #, #, boolean
//Should it pass sentence mode in? Probably would need to
// limit search somehow, maybe with different file types?
//pwSub on should parse the word and change letters to equiv numbers
function generateWord() {
	var num = Math.floor(Math.random() * 4);
	var count = 0;
	switch(num) {
		case 0: 
		//does not have animal names smaller than 3
		/*var temp = 0;
		if(pwMinLength == 2) temp = 1;
		var shrunk = animals.filter(function(len) {
			return len.length >= pwMinLength + temp;
		});
		if(pwMaxLength == 2) temp = 1;
		shrunk = animals.filter(function(len) {
			return len.length <= pwMaxLength + temp;
		});
		var string = shrunk[Math.floor(Math.random() * shrunk.length)];
		*/
		var string = getAnimal();
		break;
		
		case 1: 
		/*
		var shrunk = verbs.filter(function(len) {
			return len.length >= pwMinLength;
		});
		shrunk = verbs.filter(function(len) {
			return len.length <= pwMaxLength;
		});*/

		var string = getVerb();
		break;
		
		case 2: 
		/*
		var shrunk = names.filter(function(len) {
			return len.length >= pwMinLength;
		});
		shrunk = names.filter(function(len) {
			return len.length <= pwMaxLength;
		});*/

		var string = getName();
		break;
		
		case 3: 
		/*
		var shrunk = conjucts.filter(function(len) {
			return len.length >= pwMinLength;
		});
		shrunk = conjucts.filter(function(len) {
			return len.length <= pwMaxLength;
		});*/

		var string = getConjunt();
		break;

		default:
		var string = "what";
	}
	return string;
}

function getAnimal() {
	var shrunk = animals.filter(function(len) {
		return len.length >= pwMinLength;
	});
	
	shrunk = shrunk.filter(function(len) {
		return len.length <= pwMaxLength;
	});

	var string = shrunk[Math.floor(Math.random() * shrunk.length)];
	return string;
}

function getName() {
	var shrunk = names.filter(function(len) {
		return len.length >= pwMinLength;
	});
	shrunk = shrunk.filter(function(len) {
		return len.length <= pwMaxLength;
	});

	var string = shrunk[Math.floor(Math.random() * shrunk.length)];
	return string;
}

function getVerb() {
	var shrunk = verbs.filter(function(len) {
		return len.length >= pwMinLength;
	});
	shrunk = shrunk.filter(function(len) {
		return len.length <= pwMaxLength;
	});

	var string = shrunk[Math.floor(Math.random() * shrunk.length)];
	return string;
}

function getConjunt() {
	var shrunk = conjucts.filter(function(len) {
		return len.length >= pwMinLength;
	});
	shrunk = shrunk.filter(function(len) {
		return len.length <= pwMaxLength;
	});

	var string = shrunk[Math.floor(Math.random() * shrunk.length)];
	return string;
}

//This function takes a string and replaces the key
// letters with the similar numbers
function subLetters(str) {
	str = str.replace(/o/g, "0");
	str = str.replace(/l/g, "1");
	str = str.replace(/a/g, "4");
	str = str.replace(/e/g, "3");
	str = str.replace(/t/g, "7");
	str = str.replace(/b/g, "8");
	str = str.replace(/s/g, "5");
	return str;
}

function onStart() {
	updateSlider();
}

window.addEventListener("load", onStart);
