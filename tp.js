 const touches  =  [... document.querySelectorAll ('.white')];
 
const listeKeycode = touches.map(touches => touches.dataset.key);


document.addEventListener('keydown', (e)=> {
    const valeur = e.keycode.toString();
    console.log(valeur)
})

document.addEventListener('click', (e)=> {
    const valeur = e.target.dataset.key;
})
