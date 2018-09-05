let todos = ["Makan", "Pergi", "Mandi", "Tidur", "Hello", "Kikuk"]
const listDOM = document.getElementById('list')
const inputDOM = document.getElementById('input-todo')
const addDOM = document.getElementById('add-button')

//JSON parse mengubah data string ke JSON
const data = JSON.parse(localStorage.getItem('todos'))
    if (data == null){
        todos = [];
    }else{
        console.log("DATA : " + data);
        todos = data;
    }

function render(){
    let index = 0
    listDOM.innerHTML = ""
    while(index < todos.length){
        console.log(index)

        if (todos[index].status == true) {
            listDOM.innerHTML += '<li><input checked value="true" onchange="statusBerubah('+index+')" type="checkbox"><strike>' + todos[index].nama + '</strike><button onclick="hapus('+index+')">Delete</button>'
        } else {
            listDOM.innerHTML += '<li><input value="true" onchange="statusBerubah('+index+')" type="checkbox">' + todos[index].nama + '<button onclick="hapus('+index+')">Delete</button>'
        }
    
            index = index + 1
    }
}

render()

addDOM.addEventListener('click', function(){
    const todo = {
        nama : inputDOM.value,
        status : false
    }
    todos.push(todo)
    console.log(todos)
    render()
    localStorage.setItem('todos', JSON.stringify(todos))
})

function hapus(todo){
    todos.splice(todo, 1)
    render()
    localStorage.setItem('todos', JSON.stringify(todos))
}

function statusBerubah(index){
    console.log(index)
    if (todos[index].status == true) {
        todos[index].status = false
    }else{
        todos[index].status = true
    }
    render()
    localStorage.setItem('todos', JSON.stringify(todos))
}