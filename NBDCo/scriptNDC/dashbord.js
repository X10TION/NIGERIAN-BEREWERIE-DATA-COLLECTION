const firebaseConfig = {
    apiKey: "AIzaSyAoIKvHQvBf6OZttf208KfPPijCA0_a2kQ",
    authDomain: "nbdco-3ebcf.firebaseapp.com",
    projectId: "nbdco-3ebcf",
    storageBucket: "nbdco-3ebcf.appspot.com",
    messagingSenderId: "928018131968",
    appId: "1:928018131968:web:8ff8cad892332312c03ce5"
  }
const openModel = document.getElementById('openRegisterModel');
const model = document.getElementById('model');
const closeModel = document.getElementById('closeRegistermodel');
const registerForm = document.getElementById('registration-form');


firebase.initializeApp(firebaseConfig)
const addRecord = firebase.database().ref('OutletInfo');

const showRegistrationModel = () => {
    model.classList.toggle('is-active')
}


openModel.addEventListener('click', showRegistrationModel)
closeModel.addEventListener('click', showRegistrationModel)
registerForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  
  const firstName = registerForm['firstName'].value
  const middleName = registerForm['middleName'].value
  const lastName = registerForm['lastName'].value
  const phone = registerForm['phone'].value


  const outletInformation = addRecord.push()
   // console.log(outletInformation)
    //console.log(outletInformation.path.pieces_[1])
    outletInformation.set({
    uid : outletInformation.path.pieces_[1],
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    phone:phone
  })
  showRegistrationModel()
  
});

// const updateButton = document.querySelectorAll('.is_warning')
// updateButton.forEach(button => {
//   button.addEventListener('click', (e) =>)
// })

// window.addEventListener('DOMContentLoaded', async (e) => {
//   await addRecord.on('value', (OutletInfo) =>{
//     studentTable.innerHTML = ''
//     OutletInfo.forEach((OutletInfo)) => {
//       studentTable.innerHTML += `
//             <tr>
//             <th>1</th>
//             <td>jame</td>
//             <td>christopher"gmail.com</td>
//             <td>09022381772</td>
//             <td>hospital lane</td>
//             <td><button class="button is-info"><i class="fas fa-pencil-alt"></i></i></button></td>
//             <td><button class="button is-danger"><i class="fas fa-trash"></i></i></button></td>

//         </tr>                      
//       `
      
//     });

//   })
// })
  // function Ready(){
  //   const firstName = registerForm['firstName'].value
  //   const middleName = registerForm['middleName'].value
  //   const lastName = registerForm['lastName'].value
  //   const phone = registerForm['phone'].value

  // }
  // //////////////////////////////selection/////
  // document.getElementById('update').onclick = function(){
  //   Ready();
  //   firebase.database().ref('OutletInfo/').on('value',function(snapshot){
  //     document.getElementById('firstName').value = snapshot.val().firstName;
  //     document.getElementById('middleName').value = snapshot.val().middleName;
  //     document.getElementById('lastName').value = snapshot.val().lastName;
  //     document.getElementById('phone').value = snapshot.val().phone;
  //   })
  // }

  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
      console.log($target);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });