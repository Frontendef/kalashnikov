

// Number
var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});












const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');



openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


// main
const openPopUpz = document.getElementById('open_pop_upz');
const closePopUpz = document.getElementById('pop_up_closez');
const popUpz = document.getElementById('pop_upz');



openPopUpz.addEventListener('click', function(e){
    e.preventDefault();
    popUpz.classList.add('active');
})

closePopUpz.addEventListener('click', () => {
    popUpz.classList.remove('active');
})


// X
const openPopUpx = document.getElementById('open_pop_upx');
const closePopUpx = document.getElementById('pop_up_closex');
const popUpx = document.getElementById('pop_upx');



openPopUpx.addEventListener('click', function(e){
    e.preventDefault();
    popUpx.classList.add('active');
})

closePopUpx.addEventListener('click', () => {
    popUpx.classList.remove('active');
})


// 1


const openPopUp1 = document.getElementById('open_pop_up1');
const closePopUp1 = document.getElementById('pop_up_close1');
const popUp1 = document.getElementById('pop_up1');



openPopUp1.addEventListener('click', function(e){
    e.preventDefault();
    popUp1.classList.add('active');
})

closePopUp1.addEventListener('click', () => {
    popUp1.classList.remove('active');
})


// 2

const openPopUp2 = document.getElementById('open_pop_up2');
const closePopUp2 = document.getElementById('pop_up_close2');
const popUp2 = document.getElementById('pop_up2');



openPopUp2.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');
})

closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active');
})


// 3

const openPopUp3 = document.getElementById('open_pop_up3');
const closePopUp3 = document.getElementById('pop_up_close3');
const popUp3 = document.getElementById('pop_up3');



openPopUp3.addEventListener('click', function(e){
    e.preventDefault();
    popUp3.classList.add('active');
})

closePopUp3.addEventListener('click', () => {
    popUp3.classList.remove('active');
})


// 4

const openPopUp4 = document.getElementById('open_pop_up4');
const closePopUp4 = document.getElementById('pop_up_close4');
const popUp4 = document.getElementById('pop_up4');



openPopUp4.addEventListener('click', function(e){
    e.preventDefault();
    popUp4.classList.add('active');
})

closePopUp4.addEventListener('click', () => {
    popUp4.classList.remove('active');
})


// 5

const openPopUp5 = document.getElementById('open_pop_up5');
const closePopUp5 = document.getElementById('pop_up_close5');
const popUp5 = document.getElementById('pop_up5');



openPopUp5.addEventListener('click', function(e){
    e.preventDefault();
    popUp5.classList.add('active');
})

closePopUp5.addEventListener('click', () => {
    popUp5.classList.remove('active');
})


// 6

const openPopUp6 = document.getElementById('open_pop_up6');
const closePopUp6 = document.getElementById('pop_up_close6');
const popUp6 = document.getElementById('pop_up6');



openPopUp6.addEventListener('click', function(e){
    e.preventDefault();
    popUp6.classList.add('active');
})

closePopUp6.addEventListener('click', () => {
    popUp6.classList.remove('active');
})

// 7

const openPopUp7 = document.getElementById('open_pop_up7');
const closePopUp7 = document.getElementById('pop_up_close7');
const popUp7 = document.getElementById('pop_up7');



openPopUp7.addEventListener('click', function(e){
    e.preventDefault();
    popUp7.classList.add('active');
})

closePopUp7.addEventListener('click', () => {
    popUp7.classList.remove('active');
})



// 8

const openPopUp8 = document.getElementById('open_pop_up8');
const closePopUp8 = document.getElementById('pop_up_close8');
const popUp8 = document.getElementById('pop_up8');



openPopUp8.addEventListener('click', function(e){
    e.preventDefault();
    popUp8.classList.add('active');
})

closePopUp8.addEventListener('click', () => {
    popUp8.classList.remove('active');
})


// 9

const openPopUp9 = document.getElementById('open_pop_up9');
const closePopUp9 = document.getElementById('pop_up_close9');
const popUp9 = document.getElementById('pop_up9');



openPopUp9.addEventListener('click', function(e){
    e.preventDefault();
    popUp9.classList.add('active');
})

closePopUp9.addEventListener('click', () => {
    popUp9.classList.remove('active');
})


// 
function checkParams() {
    var fio = $('#fio').val();
    // var email = $('#email').val();
    var phone = $('#phone').val();
    
    if(fio.length != 0 && phone.length != 0) {
        $('#submitt').removeAttr('disabled');
    } else {
        $('#submitt').attr('disabled', 'disabled');
    }
}

// 
    function checkParams2() {
    var fioo = $('#fioo').val();
    // var email = $('#email').val();
    var phonee = $('#phonee').val();
    
    if(fioo.length != 0 && phonee.length != 0) {
        $('#submittt').removeAttr('disabled');
    } else {
        $('#submittt').attr('disabled', 'disabled');
    }
}











