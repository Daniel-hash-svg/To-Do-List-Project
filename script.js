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




