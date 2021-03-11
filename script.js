let input=document.getElementById('texto-tarefa');
let textInsideInput=input.value;
let button=document.getElementById('criar-tarefa')
let ol=document.getElementById('lista-tarefas')


button.addEventListener('click',add)


function add(){
    
    let list=document.createElement('li')//aqui precisa estar dentro dessa função. Senão aparece apenas uma li sempre.
    list.innerHTML=input.value// aqui não dava certo se colocasse textInsideInput. Só deu certo com input.value
    
    ol.appendChild(list)
    input.value='';
}
//requisito 7 e 8
ol.addEventListener('click',grayColor)


function grayColor(event){
    let array=document.querySelectorAll('li')
    for(let index=0;index<array.length;index+=1){
        array[index].style.backgroundColor='white'
    } 
    event.target.style.backgroundColor='rgb(128, 128, 128)'   
   
}





