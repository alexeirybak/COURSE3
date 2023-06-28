"use strict";

  const levels = [
    {
      level: 1,
    },

    {
      level: 2,
    },

    {
      level: 3,
    },
  ];

  let currentSelectedLevel = null;
  const listLevels = document.getElementById("levels");
  const buttonStart = document.querySelector(".button-start")

// ---------- Рендерим уровни -------------------------------------------------
  const renderLevels = () => {
    const levelsHtml = levels.map((level) => {
        return `<div class="level-item">${level.level}</div>`;
      }).join('');
      listLevels.innerHTML = levelsHtml;
    }

  renderLevels()

// ---------- Выбираем уровень ------------------------------------------------


function choseLevel() { 
    const offerLevels = document.querySelectorAll(".level-item"); 
        offerLevels.forEach((offerLevel) => { 
        offerLevel.addEventListener('click', (event) => { 
            event.stopPropagation(); 

            if (currentSelectedLevel !== null) { 
                currentSelectedLevel.classList.remove("chosen-level"); 
            } 

        offerLevel.classList.add("chosen-level"); 
        currentSelectedLevel = offerLevel; 
        }) 
    }) 
}

choseLevel()

function startGame() { 
    buttonStart.addEventListener('click', (event) => { 
        event.stopPropagation(); 

        if (currentSelectedLevel === null) {
            alert("Выберите уровень");
            return;
        }

        const newPage = document.createElement('div');
        newPage.classList.add('yourLevel');
        const selectedLevelNumber = currentSelectedLevel.textContent;
        newPage.textContent = `Вы выбрали уровень ${selectedLevelNumber}`;
        document.body.innerHTML = '';
        document.body.appendChild(newPage);
    }) 
}
startGame();