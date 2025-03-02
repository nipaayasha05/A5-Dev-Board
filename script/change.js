document.getElementById('change-btn').addEventListener('click', function(){
    

    const changeBtn = document.getElementById('change-btn')
    const bodyBg = document.getElementById('body-bg')
  
  
const color = ['#9999ff','#e6ccff','#99ddff','#e6b3cb','#ffdd99','#9fdfbf']
 
const b =  Math.floor(Math.random()*color.length);

const theme = color[b]
 
   bodyBg.style.backgroundColor = theme  ;
  
}); 