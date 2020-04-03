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
var lettreUtilisateur;
var lettreUser = "8";

function marquealea(){
	aleatoire = Math.floor((Math.random() * 9) + 1);
	marque = liste[aleatoire];
	marqueListe1 = Array.from(marque);
	marqueunder = "_".repeat(marque.length);
	marqueListe2 = Array.from(marqueunder);
	document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
}


//function test(lettreUtilisateur){
//	var i = 0;
//	marqueListe1.forEach((lettre) => {
//		console.log("tableau : " + lettre);
//		console.log(i)
//		if(String(marqueListe1[i]) == String(lettreUtilisateur)){
//			marqueListe2[i].replace("_", lettreUtilisateur);
//		}
//	i++;
//	});
//	console.log("lettre : " + lettreUtilisateur);
//	document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
//}


function test(lettre){
	for(i = 0; i < marque.length; i++){
		index = marqueListe1.indexOf(lettre);
		marqueListe2[index] = lettre;
		marqueListe1[index] = "_";
	}
	document.getElementById("lemot").innerHTML = marqueListe2.join('  ');
}




