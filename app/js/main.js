$(function () {
  $('input, select').styler();
  $('#brif__addfile').styler('destroy');

  $('.header__burger-menu').click(() => {
    $('.header__nav-wrapper').toggleClass('active').toggle('slow');
    $('.header__burger-menu').toggleClass('active-btn');
    $('.header__phone').eq(1).toggle('slow');
    blockBody($('.header__nav-wrapper'), 'active');
    checkStatus();
  });

  $('#header-bref-link').click((event) => {
    $(event.target).siblings().toggle('slow', function () {});
  });

  function checkStatus() {
    if ($('.header__nav-wrapper').not('active')) {
     $('#header-bref-link').siblings().css('display', 'none');
    }

  };

  function blockBody(someElement, someClass) {
    if (someElement.hasClass(someClass)) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'auto');
    }
  }

  $('#banner-btn').click(() => {
    $('#modal__request').addClass('active').toggle('slow');
    blockBody($('.modal__request'), 'active');
  });
  $('.request__close').click(() => {
    $('#modal__request').removeClass('active').toggle('slow');
    blockBody($('.modal__request'), 'active');
  });

  
  // DELETE VERTICAL SCROLL FOR TEXTAREAS
  document.querySelectorAll('textarea').forEach((elem) => {
    elem.style.height = elem.scrollHeight + 10 + "px";
    elem.addEventListener('input', (e) => {
      e.target.style.height = e.target.scrollHeight + 10 + "px";
      console.log(e.target);
      e.target.style.height = 'auto';
      e.target.style.color = 'red';
    })
  })

  // let textareas = document.querySelectorAll('textarea');
  // for (var i = 0; i < textareas.length; i++) {
  //   textareas[i].setAttribute('style', 'height:' + (textareas[i].scrollHeight) + 'px;overflow-y:hidden;');
  //   textareas[i].addEventListener("input", OnInput, false);
  // };

  // function OnInput() {
  //   this.style.height = 'auto';
  //   this.style.height = (this.scrollHeight) + 'px';
  // };
  // 

  // for  working time indicator
  console.log(Date());
  let x = new Date();
  let weekDay =x.getDay();
  let time=x.getHours();
  let indicator = document.querySelector('.footer__online-indicator');
  let indicatorText = document.querySelector('.footer__working-text');
  function getIndicator(){
  if((weekDay==0 || weekDay==6)&& time<9 || time>17){
    indicator.style.backgroundColor='red';
    indicatorText.textContent='сейчас отдыхаем';
  }else{
    indicator.style.backgroundColor='green';
    indicatorText.textContent='сейчас работаем';
  }};
  getIndicator();
  // LIMIT TO DOWNLOAD
  let files = document.querySelector('#brif__addfile');
  let field = document.querySelector('#field');
  let addBtn = document.getElementById('brif__addfile-btn');
    
  addBtn.addEventListener('click', () => files.click());
  files.addEventListener('change', function () {
    field.textContent += this.value;
  });
  
  $("#brif__addfile").on("change", function() {
    if ($("#brif__addfile")[0].files.length > 10) {
        alert("Вы можете добавить не более 10 файлов");
        return false;
    } else {
      return true;
        // $("#brif__addfile-btn").submit();
    }
  });
});

// MIXITUP CATEGORY LOAD
let currentlyWidth = document.body.clientWidth;
let container2 = document.querySelector('.galery__home');

  function getCategory(x1, x2) {
    return (currentlyWidth < 701) ? `.category-${x2}` : `.category-${x1}`;
  };

// TABS
let prevBtn = document.getElementById("prevBtn"),
  nextBtn = document.getElementById("nextBtn"),
  tabs = document.getElementsByClassName("tab");

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
};

function validateForm() {
  // Эта функция занимается проверкой полей формы
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Цикл, который проверяет каждое поле ввода на текущей вкладке:
  for (i = 0; i < y.length; i++) {
    // Если поле пустое...
    if (y[i].value == "") {
      // добавьте в поле "invalid" класс:
      y[i].className += " invalid";
      // и установите текущий допустимый статус в false:
      valid = false;
    }
  }
  // Если действительный статус равен true, отметьте шаг как завершенный и действительный:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // верните действительный статус
}