var puissance4 = [];
var nbColonne = 7;
var nbLigne = 6;
puissance4 = initTabVite(nbLigne,nbColonne,0);
console.log(puissance4)
/**
 * permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en paramètre
 * @param {number} nbColonne 
 * @param {number} nbLigne 
 * @param {*} car 
 * @returns 
 */
function initTabVite(nbColonne,nbLigne,car = ''){
    var tab = [];
    for(var i=0;i < nbLigne;i++){
        var ligne = [];
        for(var j=0;j < nbColonne; j++){
            ligne.push(car);
        }
        tab.push(ligne);
    }
    return tab;
}