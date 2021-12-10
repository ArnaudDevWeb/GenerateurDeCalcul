// TODO Variables necessaire pour le calcul
// * Variables qui donnent un nombre aléatoire entre 0 et 100
let nb1 = Math.floor(Math.random()*100) + 1;
let nb2 = Math.floor(Math.random()*100) + 1;
// TODO Tableau qui stock les 4 signes opératoires 
const TAB : string [] = ["+", "-", "*","/"];
// TODO Recuperer aléatoirement un seul symbole du tableau
let symbole = TAB[Math.floor(Math.random()*TAB.length)];
console.log(nb1 + " " + symbole + " " + nb2 + " = ");
// TODO Recuperer des éléments du DOM
let formule:any = document.getElementById('formule');
// TODO Affiher sur la page le calcul
formule.innerHTML = nb1 + " " + symbole + " " + nb2 + " = ";
// TODO Faire le calcul et le stocker dans une var
let resultat : number ;
if(symbole === '+'){
    resultat = nb1 + nb2;
}else if(symbole === '-'){
    resultat = nb1 - nb2;
}else if(symbole === '*'){
    resultat = nb1 * nb2;
}else if (symbole ==='/'){
    resultat = nb1 / nb2;
}else{
    resultat = -999999999999999999;
}
console.log(resultat.toFixed(1));

// TODO Les fonctions

function recommencer () : void{
    location.reload();
}


function tentative(){
    // * Recuperer la saisie de l'utilisateur
    let reponseUtilisateur = (<HTMLInputElement>document.getElementById('reponseUtilisateur')).value;
    let textIndic = "";
if(resultat.toFixed(1) == reponseUtilisateur){
    textIndic = " Bonne réponse !";
    window.setTimeout("recommencer()", 3000);
}else if (resultat.toFixed(1) < reponseUtilisateur){
    textIndic = "Resultat attendu plus petit que la saisie";
}else if (resultat.toFixed(1) > reponseUtilisateur){
    textIndic =" Resultat attendu plus grand que la saisie";
}else{
    textIndic ="Mauvaise saisie";
}
let phraseFinal : any = document.getElementById('phraseFinal');
phraseFinal.innerHTML = textIndic;


}
