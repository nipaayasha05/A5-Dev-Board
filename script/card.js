  
    
    const cardBtn = document.querySelectorAll('.card-btn');
    let count=0;
    
for(const btn of cardBtn){
    // console.log(btn)
    
 
    
    btn.addEventListener('click', function(event){
        // console.log(btn)
       
        document.getElementsByClassName(alert('Board Updated Successfully'))
         
        btn.disabled=true;
        btn.classList.add('opacity-30')
         
          count++
          if(cardBtn.length ===count){
            alert('congrates!!!You have completed all the current task')
          }
       

    let sum = 1;
    const taskNumber = parseInt(document.getElementById('task-number').innerText)
    task = taskNumber-sum;
    console.log(task);
    document.getElementById('task-number').innerText = task;


    
    const checkout = parseInt(document.getElementById('checkout-number').innerText)
    sum = checkout + sum;
    console.log(sum);
    document.getElementById('checkout-number').innerText = sum;

      
 
   
 
    const titleBox = document.getElementById('title-box');
         
        const div = document.createElement('div')
        div.classList.add( )
        div.innerHTML = `
        <p class="bg-blue-50 p-2 m-4 rounded-md">You have Complete The Task <span class="t font-bold">${event.target.parentNode.parentNode.parentNode.children[1].innerText}</span>  issue at <span class="time">${currentTime} </span>  </p>
        `
        
       titleBox.appendChild(div)

 

    })
      
}

