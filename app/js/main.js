$(function () {
  $('input, select').styler();
  $('#brif__addfile').styler('destroy');

  $('.header__burger-menu').click(()=>{
    console.log('ha');
    $('.heaader__nav-wrapper').toggle('slow');
  });
 
let textareas=document.querySelectorAll('textarea');
for (var i = 0; i < textareas.length; i++) {
textareas[i].setAttribute('style', 'height:' + (textareas[i].scrollHeight)+'px;overflow-y:hidden;');
textareas[i].addEventListener("input", OnInput, false);
 }
  
  function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
  }


document.querySelectorAll('textarea').forEach((elem) => {
  // console.dir(elem);
  elem.style.height = elem.scrollHeight + 10 + "px";
    elem.addEventListener('input', (e) => {
     e.target.style.height = e.target.scrollHeight + 10 + "px";
     console.log(e.target);
    e.target.style.height = 'auto';
    e.target.style.color = 'red';
  })
})

let files=document.querySelector('#brif__addfile');
let field = document.querySelector('#field');
let addBtn = document.getElementById('brif__addfile-btn');


addBtn.addEventListener('click',()=>files.click());
files.addEventListener('change',function(){
  field.textContent += this.value;
});

// TABS
let prevBtn= document.getElementById("prevBtn"),
    nextBtn = document.getElementById("nextBtn"),
    tabs=document.getElementsByClassName("tab");

var currentTab = 0; // Текущая вкладка будет первой вкладкой (0)
showTab(currentTab); // Отображение текущей вкладки


function showTab(n) {
  // Эта функция отобразит указанную вкладку формы ...
  // var x = document.getElementsByClassName("tab");
  // console.log(x);
  tabs[n].style.display = "block";
  console.log(tabs[n]);
  console.log(prevBtn);
  // ... и зафиксируйте кнопки Назад/Вперед:
  if (n == 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline";
  }
  if (n == (tabs.length - 1)) {
    nextBtn.innerHTML = "Отправить";
  } else {
    nextBtn.innerHTML = "Вперед";
  }
}

function nextPrev(n) {
  // Эта функция определит, какую вкладку отображать
  // var x = document.getElementsByClassName("tab");
  // console.log(x);
  // Выйдите из функции, если какое-либо поле на вкладке текущий является недопустимым:
  // if (n == 1 && !validateForm()) return false;
  // if (n == 1) return false;
  // Скрыть текущую вкладку:
  tabs[currentTab].style.display = "none";
  // Увеличение или уменьшение текущей вкладки на 1:
  currentTab = currentTab + n;
  // если вы дошли до конца формы... :
  if (currentTab >= tabs.length) {
    //...форма будет отправлена:
    document.getElementById("brif-form").submit();
    return false;
  }
  // В противном случае отобразите правильную вкладку:
  showTab(currentTab);
}

// function validateForm() {
//   // Эта функция занимается проверкой полей формы
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // Цикл, который проверяет каждое поле ввода на текущей вкладке:
//   for (i = 0; i < y.length; i++) {
//     // Если поле пустое...
//     if (y[i].value == "") {
//       // добавьте в поле "invalid" класс:
//       y[i].className += " invalid";
//       // и установите текущий допустимый статус в false:
//       valid = false;
//     }
//   }
//   // Если действительный статус равен true, отметьте шаг как завершенный и действительный:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // верните действительный статус
// }


});





