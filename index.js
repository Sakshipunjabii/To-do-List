

const add=document.querySelector('#add_task');


add.addEventListener('click',function(event){
    event.preventDefault();
    
const task =document.querySelector('#task').value;
const newtask= '<input type="checkbox" name="task" id="task${task}"><label class="content" for="task${task} d_task${task}">' +task+ '</label><input class="icon" id="d_task${task}" type="image" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="Delete"><br>';
document.querySelector('#new_task').innerHTML += newtask;

document.querySelector('#task').value='';

const d=document.querySelector('#d_task${task}');

d.addEventListener('click',function(event){
    event.preventDefault();
    
document.querySelector('#task${task}').parentElement.remove();

});
});


