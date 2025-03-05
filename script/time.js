const date = new Date();
const currentDate = date.toDateString();
const currentTime = date.toLocaleTimeString();
 
 const time =  currentDate.split(' ');
 const day = time[0];
 const time2 = `${time[1]} ${time[2]} ${time[3]}`
//  console.log(time2)
//  console.log(currentTime);
  

 const calender =document.getElementById('calender');
 
 const p = document.createElement('p');
 p.innerHTML = `
 <h1 class="text-2xl text-black">${day} , <br>  <span class = "font-bold">${time2}</span>
 </h1>
 `
calender.appendChild(p)


 


 