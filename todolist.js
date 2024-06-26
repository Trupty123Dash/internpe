const inputs = document.getElementById('input-box');
const text = document.querySelector('.text')
function Add(){
    if(inputs.value === ''){
        alert('Add Your Task');
    }
    else{
        let task= document.createElement('li');
        task.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>` ;       
        text.appendChild(task);
        inputs.value='';
        task.querySelector('i').addEventListener("click" , remove);
        function remove(){
            task.remove()
        }
    }
}