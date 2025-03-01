  
    
    const cardBtn = document.querySelectorAll('.card-btn');
    
for(const btn of cardBtn){
    // console.log(btn)
    
    btn.addEventListener('click', function(event){
        // console.log(btn)
        
         const btn = document.getElementsByClassName(alert('Board Updated Successfully'))

    let sum = 1;
    const taskNumber = parseInt(document.getElementById('task-number').innerText)
    task = taskNumber-sum;
    console.log(task);
    document.getElementById('task-number').innerText = task


    
    const checkout = parseInt(document.getElementById('checkout-number').innerText)
    sum = checkout + sum;
    console.log(sum);
    document.getElementById('checkout-number').innerText = sum
    })
      
}

