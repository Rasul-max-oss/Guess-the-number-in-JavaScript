// Генерируем случайное число
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)  
// Находим элемент с id "randomNumber" и выводим туда случайное число
//document.getElementById("randomNumber").innerHTML = randomNumber
 

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'sound3.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем`1
  }


  //Анимированный текст
 function animateText(str) {
  let output = document.getElementById('output');
  let to = str.length,
      from = 0;
  
  animate({
    duration: 5000,
    timing: bounce,
    draw: function(progress) {
      let result = (to - from) * progress + from;
      output.innerHTML = str.slice(0, Math.ceil(result));
    }
  });
}
  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

//
  function playGame() {
    document.getElementById('button').style.display = 'none';
    document.getElementById('start_over_button').style.display='none';
    let editText = document.getElementById('editText');
    editText.style.display = 'block';
    editText.classList.add('show'); // Добавляем класс для плавного появления input поля
    
    let btnCheck = document.getElementById('btnCheck');
    btnCheck.style.display = 'block';
    btnCheck.classList.add('show'); // Добавляем класс для плавного появления кнопки
    animateText("Добро пожаловать в игру 'Угадай число'!\n Я загадал число от 1 до 100. Попробуйте угадать!"); 
    soundClick();
}

// Функция появление кнопки "Начать сначала"
function StartOver(){
  let startOvGame=document.getElementById('start_over_button');
  editText.style.display="none";
  btnCheck.style.display="none";
  startOvGame.style.display="block";
  startOvGame.classList.add('show'); // Добавляем класс для плавного появления input поля
}




//Функция проверки числа
function isCheckedNumber() {
    let input = parseInt(document.getElementById('editText').value);

    if (isNaN(input) || input === 0) {
      window.alert('Поле пустое. Введите число');
    }
    else{
      document.getElementById('editText').value = '';

      let message;
      if (input === randomNumber) {
          message = 'Поздравляем! Вы угадали число!!';
          StartOver();

      } else if (input < randomNumber) {
          message = 'Загаданное число больше.';
      } else {
          message = 'Загаданное число меньше.';
      }

      animateText(message);
      soundClick();
      console.log(message);
    }
}