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
	"NISSAN",
	"SUBARU",
	"FERRARI",
	"LAMBORGHINI",
	"LANCIA",
	"AUDI",
	"BMW",
	"CHRYSLER",
	"VOLKSWAGEN",
	"BUGATTI",
	"TALBOT",
	"JEEP",
	"ALFAROMEO",
	"OPEL",
	"VOLVO",
	"CHEVROLET",
	"SKODA"
];

var marque;
var erreurs = 0;

function marquealea(){
	erreurs = 0;
	aleatoire = Math.floor((Math.random() * 9) + 1);
	marque = liste[aleatoire];
	marqueListe1 = Array.from(marque);
	marqueunder = "_".repeat(marque.length);
	marqueListe2 = Array.from(marqueunder);
	marqueListe4 = marqueListe1.slice();
	document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
	document.getElementById("erreur").innerHTML = "Nombre d'erreurs: " + erreurs;
}

function test(lettre){
	marqueListe3 = marqueListe1.slice();
	for(i = 0; i < marque.length; i++){
		index = marqueListe1.indexOf(lettre);
		marqueListe2[index] = lettre;
		marqueListe1[index] = "_";
	}
	if(marqueListe3.join('') == marqueListe1.join('')){
		erreur();
	}
	else{
		if(marqueListe2.join('') == marqueListe4.join('')){
			document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
			window.alert("Bravo !");
			marquealea();
		}
		else{
			document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
		}
	}
}


function trouve(){
	motUser = window.prompt("Mot : ");
	if(marque === motUser.toUpperCase()){
		window.alert("Bravo !");
		document.getElementById("lemot").innerHTML = marque
		marquealea();
	}
	else{
		window.alert("Non !")
		erreur();
	}
}

function erreur(){
	erreurs++;
	document.getElementById("erreur").innerHTML = "Nombre d'erreurs: " + erreurs;
	if(erreurs > 8){
		window.alert("Perdu, la réponse était : " + marque);
		marquealea();
	}
}
