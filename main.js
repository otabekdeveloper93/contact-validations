const addButton = document.querySelector('#add-button');
const modal = document.querySelector('.modal-box');
const closeBtn = document.querySelector('.close_button');
addButton.addEventListener('click', ()=>{
    modal.classList.add('d-block')
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('d-block');
});
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('mobile');
const city = document.getElementById('city');
let inputGrup = document.querySelectorAll('.input-grup');


// submit btn
const submitBtn = document.querySelector('.submit_btn');

inputGrup.forEach(item =>{
    item.addEventListener('click', ()=> {
        item.parentElement.firstElementChild.classList.add('label');
        item.parentElement.classList.add('active');
    })
});

let count = 1;

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let newArray = [];
    let obj = {
        id: count,
        fullName: fullName.value,
        email: email.value,
        phoneNumber: phone.value,
        liveLocation: city.value,

    }
    count++;
    newArray.push(obj);
    addListFunc(newArray);
    modal.classList.remove('d-block');
})
let arr2 = [];
const ulList = document.querySelector('.create_list_table');

function addListFunc(array){
    array.forEach(item =>{
        let li = document.createElement('li');
        li.className = 'li';
        li.innerHTML = `
            <span class="f_name">${item.fullName}</span>
            <span class="email_item">${item.email}</span>
            <span class="phone_number">${item.phoneNumber}</span>
            <span class="department_item">${item.liveLocation}</span>
            <div class="edit_box">
            <button class="edit_btn"><i class='bx bx-pencil'></i></button>
            <button class="delete_list"><i class='bx bx-x'></i></button>
            </div>
        `;
        ulList.appendChild(li);
    })
    sortFunction(array);
}


function sortFunction(item){
    let bodyList = document.querySelectorAll('.li');
    let deleteList = document.querySelectorAll('.delete_list');
    deleteList.forEach(item =>{
        console.log(item);
        item.addEventListener('click', () =>{
            item.parentElement.parentElement.classList.add('d-none');
        })
    })
    console.log(bodyList);
    let newListItem = item.filter(element =>{
        bodyList.forEach(el =>{
            if(element.email !== el.email) {
                return item
            }
        })
    })
    console.log(newListItem);
}