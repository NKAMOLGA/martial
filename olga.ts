const touches: any = document.querySelectorAll('button');
let afficher = document.querySelector('.message')as HTMLElement
let suppression = document.querySelector('.supprimer');
let egals = document.querySelector('.egals');
function affichage(value: string):string{
    let message: string = afficher.innerText
    afficher.innerText = message+value;
    return afficher.innerText


}
function delSaisie(){
    afficher.innerText = "";
    
}
function delResultat(){
    afficher.innerText = "";
    
}

egals.addEventListener('click', () => {
    const cste = eval(afficher.innerText);
   afficher.innerText = cste ;
 });





for(let i = 0; i <touches.length;i++){
    touches[i].addEventListener('click',() => {
        affichage(touches[i].innerText)
        
    });
}