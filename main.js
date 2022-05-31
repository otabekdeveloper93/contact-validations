const newArray = [];

const elModal = document.querySelector('.modal-box');
const elModalForm = document.querySelector('.formbox');
const elCloseModalBtn = document.querySelector('.close_button');
const elInputGroup = document.querySelectorAll('.input-grup');
const elUllist = document.querySelector('.create_list_table');
const elDeleteModal = document.querySelector('.delete_list_modal');
const elBtnYes = document.querySelector('.yes')


const newArrayInput = Array.from(elInputGroup);

function closeModal(){
    elModal.classList.remove('d-block');
    elModalForm.reset();
}

function addBtnFunc(){
    elModal.classList.add('d-block');
}
// department modal display
const elDeparmentModal = document.querySelector('.deparment_modal');
const elDep = document.querySelectorAll('.dep');
const elDepInput = document.querySelector('#deparment-input');

const depArray = Array.from(elDep);
depArray.forEach(item =>{
    item.addEventListener('click', (event)=>{
        elDepInput.value = event.target.textContent;
        elDepInput.classList.add('opacity')
    })
})
function departmentFunction(){
    elDeparmentModal.classList.toggle('d-block');
}
// label effect here
newArrayInput.forEach(item =>{
    item.addEventListener('click', ()=>{
        item.previousElementSibling.classList.add('label')
    })
    item.addEventListener('keyup', ()=>{
        item.previousElementSibling.classList.add('label')
    })
})

// create List, object and object unshift array;

elModalForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const elFullnameValue = elModalForm.querySelector('#fullname').value.trim();
    const elEmailValue = elModalForm.querySelector('#email').value.trim();
    const elPhoneValue = elModalForm.querySelector('#mobile').value.trim();
    const elCityValue = elModalForm.querySelector('#city').value.trim();
    const elDepValue = elModalForm.querySelector('#deparment-input').value.trim();
    const elDateValue = elModalForm.querySelector('#hire-date').value.trim();
    if(elFullnameValue && elEmailValue && elPhoneValue && elCityValue && elDepValue && elDateValue != false){
        const obj = {
            fullName: elFullnameValue,
            email: elEmailValue,
            phone: elPhoneValue,
            city: elCityValue,
            deparment: elDepValue,
            date: elDateValue,
            id: (Math.random().toFixed(4)*10000)
        }
        newArray.push(obj);
    }
    elUllist.innerHTML = "";
    addPersonList();
    closeModal();
    elModalForm.reset();
    editListFunc()
})

// create object function


// create List dom 
function addPersonList(){
    if(newArray != []){
        newArray.forEach(item => {
            const {fullName,email,phone,deparment,id} = item;
            const li = document.createElement('li');
            li.className = 'li'
            li.innerHTML = `
            <span>${fullName}</span>
            <span>${email}</span>
            <span>${phone}</span>
            <span>${deparment}</span>
            <span class="edit_box">
              <button class="edit_btn" data-set="${id}">
                <i class="bx bx-edit-alt"></i>
              </button>
              <button onclick="deleteListBtn(${id})" class="delete_list">
                <i class="bx bx-x"></i>
              </button>
            </span>
            `;
            elUllist.prepend(li);  
        })
    }
}

//  delete list start

function deleteListBtn(id){
    elDeleteModal.classList.remove('d-none');
    elBtnYes.dataset.set = id; 
}

function cancelFunc(){
    elDeleteModal.classList.add('d-none');
}

elBtnYes.addEventListener("click", () => {
    let btnData = +elBtnYes.dataset.set;
    const arrayIndex = newArray.findIndex(obj =>{
        return obj.id == btnData;
    });
    newArray.splice(arrayIndex,1);
    elUllist.innerHTML = "";
    addPersonList();
    cancelFunc()
})

// delete List End

function editListFunc(){
    const editList = Array.from(document.querySelectorAll(".edit_btn"));
    editList.forEach(editbtn => {
        editbtn.addEventListener('click', () =>{
            let editBtnDataId = +editbtn.dataset.set;
            addBtnFunc();
            const arrayItem = newArray.filter(obj =>{
                return obj.id === editBtnDataId;
            });
            let newArrayItem = arrayItem[0];
            const {fullName,email,phone,city,deparment,date} = newArrayItem;
            elModalForm.querySelector('#fullname').value = fullName;
            elModalForm.querySelector('#email').value = email;
            elModalForm.querySelector('#mobile').value = phone;
            elModalForm.querySelector('#city').value = city;
            elModalForm.querySelector('#deparment-input').value = deparment;
            elModalForm.querySelector('#hire-date').value = date;
            let arrayIndex = newArray.findIndex(element =>{
                return element.id == editBtnDataId;
            });
            newArray.splice(arrayIndex,1);
        });
    })
}
