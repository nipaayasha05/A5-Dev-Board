const date = new Date();
const currentDate = date.toDateString();
const currentTime = date.toLocaleTimeString();
//  console.log(currentDate);
//  console.log(currentTime);
  

 const calender =document.getElementById('calender');
 
 const p = document.createElement('p');
 p.innerHTML = `
 <h1 class="text-2xl text-black">${currentDate}</h1>
 `
calender.appendChild(p)


 


 