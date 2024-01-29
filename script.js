document.addEventListener("DOMContentLoaded", function () {
    // ... ton code existant ...

    for (var i = 0; i < donnees.length; i++) {
        var item = donnees[i];
        var contenu = document.querySelector("#div-contenu");
        contenu.innerHTML += "<section class='" + item.section + "' id='" + item.idsection + "'>" +
            "<h1>Si j'étais " + item.analogie + " je serais... </h1>" +
            "<h2>" + item.valeurAnalogie + "</h2>" +
            "<img src='" + item.image + "' alt='" + item.valeurAnalogie + "'></img>" +
            "<p class='justification'>" + item.explication + "</p>" +
            "<a href='#" + item.idsectionsuivante + "'>" +
            "<img src='./images/flechebas.png' alt='bas'>" +
            "</a>" +
            "</section>";
    }

    // fenetre
    var fenetre = document.querySelector('.contenuML');
    var btnMentions = document.querySelector('h6');

    btnMentions.addEventListener('click', function () {
        fenetre.style.display = 'block';
    });

    var fermer = document.querySelector('.fermer');
    fermer.addEventListener('click', function () {
        fenetre.style.display = 'none';
    });
    

    var clavierAnalogie = document.querySelector('#analogie');
    var clavierValeurAnalogie = document.querySelector('#valeurAnalogie');
    var clavierImage = document.querySelector('#image');
    var clavierExplication = document.querySelector('#explication');
    var clavierCourriel = document.querySelector('#courriel');

    document.querySelector('#envoyer').addEventListener('click', function (event) {
        event.preventDefault();
        var nouvelElement = document.createElement('section');
        nouvelElement.innerHTML = "<h1>Si j'étais " + clavierAnalogie.value + " je serais... </h1>" +
            "<h2>" + clavierValeurAnalogie.value + "</h2>" +
            "<img src='" + clavierImage.value + "'></img>" +
            "<p class='justification'>" + clavierExplication.value + "</p>";
            document.querySelector('.ajouter').appendChild(nouvelElement);


            // message de succès avec délai avant qu'il ne s'éfface
        if (nouvelElement){
            var formulaire = document.querySelector('.fonctionné');
            formulaire.innerHTML +=  " <br> <p> Votre analogie à bien été envoyé ! <br> Pour la consulter merci de vous rendre en haut de votre page. </p>";
            setTimeout(function() {
                formulaire.innerHTML = "";
            }, 4000); // en millisecondes
        }


        document.querySelector('#envoyer').addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Button clicked');
            // Your form submission logic here
        });
        

       
        


    });
})

document.querySelector('.form-btn').addEventListener('click', function(){
    let url = 'http://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=dar-alia&courriel=syrine.dar-alia@edu.univ-eiffel.fr&message=Si j\'étais ' + analogieNom.value + ' je serais ' + analogieValeur.value + ' car ' + analogieExplication.value + ' UrlImage:' + imageInput.value
    console.log(url)

    fetch(url).then(function(response) {
    response.json().then(function(data){
        console.log("Réponse reçue : ")
        console.log(data);


        
    })
  })
  })