let nom = byId("nom");
let email = byId("email");
let niveau = byId("level");
let comment = byId("comment");
let sports;

let erreurs = document.querySelectorAll(".erreur"); 




document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // vider les messages d'erreurs
    erreurs.forEach((erreur) => erreur.innerHTML = '');

    sports = document.querySelectorAll("input[name='sports']:checked");

    let isValid = true;


    if( nom.value.trim() == "" ){
        byId("erreur-nom").innerHTML = "Le nom est obligatoire";
        isValid = false;
    }
   
    const validMail = /^\S+@\S+\.\S+$/;
    if( !validMail.test(email.value) ){
        byId("erreur-email").innerHTML = "L'adresse n'est pas correctement ...'";
        isValid = false;
    }

    if( sports.length < 2 ){
        byId("erreur-sport").innerHTML = "Veuillez choisir 2 sports";
        isValid = false;
    }


    if( !isValid ) return;

    byId("recap").innerHTML = `
    <div>Récapitilatif : </div>
    <p>Nom: ${nom.value}</p>
    <p>Email: ${email.value}</p>
    <p>Niveau: ${level.value}</p>
    `;

    byId('recap').classList.add("recap");
    

    
});





function byId(id){
    return document.getElementById(id);
}