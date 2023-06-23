document.forms["inscription"].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;
 
	// Traitement générique
	for (var i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
			break;
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
	
});
