
let inputElement = document.querySelector('.form__input');
let btnElement = document.querySelector('.form__btn');
let lists = document.querySelector('.lists');

let notes = [
    // {
    //     title:'eocknekcnekce ksxmkmxke kdokcwe',
    //     action: false
    // },
    // {
    //     title:'1398178923 2373485v34857349857 895794',
    //     action: true
    // },
] ;
function arrayNote(){
    lists.innerHTML='';
    for(let i = 0; i<notes.length; i++){
        lists.insertAdjacentHTML('beforeend', getNote(notes[i], i));
    }
    if(notes.length === 0){
        lists.innerHTML = '<p class="message"> Нет заметок</p>'
    }
}
arrayNote();
function getNote(note, index){
    return`
    <li class="list ${note.action ? 'active' : ''}">
        <p>${note.title}</p>
        <div class="actions">
            <button class="done ${note.action?'doneActive':''}" data-index="${index}" data-type="done">Выполнить</button>
            <button class="remove"  data-index="${index}" data-type="remove">Удалить</button>
        </div>
    </li>
    `;
}
btnElement.onclick = function(event){
    if(inputElement.value.length === 0){event.preventDefault(); return;}
    let inputNote = {title: inputElement.value,
    action: false}
    event.preventDefault();
    // lists.insertAdjacentHTML('beforeend',getNote(inputNote));
    notes.push(inputNote);
    arrayNote();
    inputElement.value = '';
}

lists.onclick = function(event){
    if(event.target.dataset.index){
        let index = Number(event.target.dataset.index);
        let type = event.target.dataset.type;
        if(type==='done'){
            notes[index].action = !notes[index].action;
        }else if(type = 'remove'){
            notes.splice(index, 1);
        }
        arrayNote();
    }
}
