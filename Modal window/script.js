'use strict';

// we select the elements we need and store the selections into the variables 
// and use them over and over again
// better then  selecting elements over and over .

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// querySelector selects onlyu first element
// console.log(btnOpenModal);


const openModal = function(){
  console.log('Button clicked ');
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}


for(let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);


    // function(){

// console.log('Button clicked');
// modal.classList.remove('hidden');
 // while selecting classes only we use " . " otherwise 
 // we dont use for adding or removing the classes
// overlay.classList.remove('hidden');
//   }




  const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  // btnCloseModal.addEventListener('click', function(){
  //   modal.classList.add('hidden');
  //   overlay.classList.add("hidden");
  // });

  // overlay.addEventListener("click", function () {
  //   modal.classList.add("hidden");
  //   overlay.classList.add("hidden");
  // });

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click',closeModal);

  document.addEventListener('keydown', function(event){
    console.log(event.key );

    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
    }
  })




