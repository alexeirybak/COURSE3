"use strict";

const levels = [ { level: 1, }, { level: 2, }, { level: 3, }, ];

  let currentSelectedLevel = null;
  const listLevels = document.getElementById('levels');
  const buttonStart = document.querySelector('.button-start')
  const form = document.querySelector('.form-block');

// ---------- Рендерим уровни -------------------------------------------------
  const renderLevels = () => {
    const levelsHtml = levels.map((level) => {
        return `<label class="level">
        <input type="radio" name="level" value="${level.level}">${level.level}</label>`;
  }).join('');
      listLevels.innerHTML = levelsHtml;
    }

  renderLevels()

// ---------- Выбираем уровень ------------------------------------------------
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    radioButtons.forEach((btn) => {
      if (btn !== radioButton) {
        btn.parentElement.classList.remove('chosen-level');
      }
    });
    radioButton.parentElement.classList.add('chosen-level');
    currentSelectedLevel = radioButton;
  });
});

// ---------- Проверяем, выбран ли уровень ------------------------------------
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const checkedLevel = document.querySelector('input[type="radio"]:checked');
  if (checkedLevel) {
    currentSelectedLevel = checkedLevel.value;
    startGame();
  } else {
    alert("Выберите уровень");
  }
});

// ---------- Запускаем новую страницу ----------------------------------------
function startGame() { 
  const newPage = document.createElement('div');
  newPage.classList.add('yourLevel');
  newPage.textContent = `Вы выбрали уровень ${currentSelectedLevel}`;
  document.body.innerHTML = '';
  document.body.appendChild(newPage);
}