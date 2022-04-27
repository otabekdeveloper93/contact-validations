const addButton = document.querySelector('#add-button');
const modal = document.querySelector('.modal-box');
const closeBtn = document.querySelector('.close_button');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('mobile');
const city = document.getElementById('city');
let inputGrup = document.querySelectorAll('.input-grup');
const inputbek = document.getElementById('inputbek');
let inputValue = document.getElementById('inputbek-value');
const deparmentModal = document.querySelector('.deparment_modal');
const dep = document.querySelectorAll('.dep');
const deleteYes = document.querySelector('.yes');
const deleteNo = document.querySelector('.no');
const alertSec = document.querySelector('.delete_list_modal');


addButton.addEventListener('click', ()=>{
    modal.classList.add('d-block')
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('d-block');
});

inputbek.addEventListener('click', ()=>{
    deparmentModal.classList.remove('d-none');
    deparmentModal.classList.toggle('d-block');
});

dep.forEach(item =>[
    item.addEventListener('click', (e)=>{
        inputValue.innerText = "";
        inputValue.innerText = e.target.innerText;
        inputValue.style.opacity = "1";
        deparmentModal.classList.add('d-none');
    })
])
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
        deparment: inputValue.innerText,

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
        li.id = item.id;
        li.innerHTML = `
            <span class="f_name">${item.fullName}</span>
            <span class="email_item">${item.email}</span>
            <span class="phone_number">${item.phoneNumber}</span>
            <span class="department_item">${item.deparment}</span>
            <div class="edit_box">
            <button class="edit_btn"><i class='bx bx-pencil'></i></button>
            <button class="delete_list"><i class='bx bx-x'></i></button>
            </div>
        `;
        ulList.appendChild(li);
    })
    sortFunction(array);
}

deleteNo.addEventListener('click', ()=>{
    alertSec.classList.remove('d-block');
})

function sortFunction(){
    let deleteList = document.querySelectorAll('.delete_list');
    deleteList.forEach(item =>{
        item.addEventListener('click', () =>{
            alertSec.classList.add('d-block');
            deleete(item.parentElement.parentElement)
        })
    })

}

function deleete(element){
    deleteYes.addEventListener('click', ()=>{
        element.classList.add('d-none');
        alertSec.classList.remove('d-block');
    })
}
