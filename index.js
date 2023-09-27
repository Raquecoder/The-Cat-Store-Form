const closeBtn = document.getElementById('closeBtn')
//console.log(closeBtn);
const modal = document.getElementById('modal');

setTimeout(function(){
 modal.style.display='block';
},1500)

closeBtn.addEventListener('click',function(){
   modal.style.display ='none';
})