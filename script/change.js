document.getElementById('change-btn').addEventListener('click', function(){
    

    const changeBtn = document.getElementById('change-btn')
    const bodyBg = document.getElementById('body-bg')
  //  bodyBg.style.backgroundColor =
  bodyBg.style.backgroundColor = Math.floor(Math.random() * 256);;
     console.log( changeBtn )
    //  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  //  console.log(Math.random('rgb(r(204, 204, 255)+r(153, 153, 255))'));
   bodyBg.style.backgroundColor = (Math.random()*255)
    console.log( changeBtn )
});
console.log( changeBtn )
 