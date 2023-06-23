var login = document.getElementById('login')
var mdp = document.getElementById('mdp')



login.addEventListener('input', (event) => {
  var loginValue = event.target.value
  if (loginValue.lenght = 0 ){
    alert("Veuillez renseigner le login") ;
    console.log('Veuillez renseigner le login');
  } 
  else {
    var veriflogin =  loginValue.indexof("@");
    if (veriflogin == -1){
        console.log('Le format de login nest pas conforme.');
    }
  }
})
