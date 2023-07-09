import { renderCards } from './screen-card.js';

// ---------- Рендерим первую страницу ----------------------------------------
export const screenFirstElement = document.querySelector('.front');

const screenStart = `<form class="form-block">
                            <p class="level-choice">Выбери сложность</p>
                                <div class="level" id="levels"></div>
                                <button type="submit" class="button-start">Старт</button>
                    </form>`;

screenFirstElement.innerHTML = screenStart;

const levels = [{ level: 1 }, { level: 2 }, { level: 3 }];

export let currentSelectedLevel = null;
const listLevels = document.getElementById('levels');
const form = document.querySelector('.form-block');

export const getScreen = () => {
    screenFirstElement.classList.add('front');
    // ---------- Рендерим уровни -------------------------------------------------
    const renderLevels = () => {
        const levelsHtml = levels
            .map((level) => {
                return `<label class="level">
        <input type="radio" name="level" value="${level.level}">${level.level}</label>`;
            })
            .join('');
        listLevels.innerHTML = levelsHtml;
    };
    renderLevels();

    // ---------- Выбираем уровень ------------------------------------------------
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('change', () => {
            radioButtons.forEach((btn) => {
                if (btn !== radioButton) {
                    btn.parentElement.classList.remove('chosen-level');
                }
            });
            radioButton.parentElement.classList.add('chosen-level');
            currentSelectedLevel = radioButton;
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const checkedLevel = event.target.elements.level.value;
        if (checkedLevel) {
            currentSelectedLevel = parseInt(checkedLevel);
            screenFirstElement.style.display = 'none';
            renderCards();
        } else {
            alert('Выберите уровень');
        }
    });
};
