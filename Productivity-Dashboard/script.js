function openCards(){
    let allElem = document.querySelectorAll('.elem');
let full = document.querySelectorAll('.full')
let fullBack = document.querySelectorAll('.full .goBack')

allElem.forEach((elem)=>{
   elem.addEventListener('click',()=>{
      
       full[elem.id].style.display = 'flex';
    
    
   })
   
})
fullBack.forEach((back)=>{
    back.addEventListener('click',(e)=>{
       
       
       full[back.id].style.display = 'none';
    })
    
})
}

openCards();