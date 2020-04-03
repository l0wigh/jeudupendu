var liste = [
	"PEUGEOT",
	"RENAULT",
	"CITROEN",
	"TOYOTA",
	"PORSCHE",
	"MERCEDES",
	"MITSUBISHI",
	"HONDA",
	"MAZDA",
	"NISSAN"
];

var marque;

function marquealea(){
	aleatoire = Math.floor((Math.random() * 9) + 1);
	marque = liste[aleatoire];
	marqueListe1 = Array.from(marque);
	marqueunder = "_".repeat(marque.length);
	marqueListe2 = Array.from(marqueunder);
	document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
}

function test(lettre){
	for(i = 0; i < marque.length; i++){
		index = marqueListe1.indexOf(lettre);
		marqueListe2[index] = lettre;
		marqueListe1[index] = "_";
	}
	document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
}
