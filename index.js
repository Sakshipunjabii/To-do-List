const container=document.querySelector('.container');
container.addEventListener('click',function(event){
event.preventDefault();
})

const add=document.querySelector('#add_task');
add.addEventListener('click',function(){

const task=document.querySelector('#task').value;
document.querySelector('#new_task').innerHTML='<label class="content" for="task4"><input type="checkbox" name="task" id="task4">{task}<input class="icon" id="d_task4" type="image" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="Delete"></label><br>'

})
