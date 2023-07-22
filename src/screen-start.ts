import { renderCards } from './screen-card';

// ---------- Рендерим первую страницу ----------------------------------------
export let screenFirstElement: HTMLElement | null = document.querySelector('.front');

const screenStart = `<form class="form-block">
                            <p class="level-choice">Выбери сложность</p>
                                <div class="level" id="levels"></div>
                                <button type="submit" class="button-start">Старт</button>
                    </form>`;

if (screenFirstElement) {
  screenFirstElement.innerHTML = screenStart;
}

const levels = [{ level: 1 }, { level: 2 }, { level: 3 }];

export let currentSelectedLevel: number | null = null;
const listLevels = document.getElementById('levels');
const form = document.querySelector('.form-block');

export const getScreen = () => {
  
    screenFirstElement?.classList.add('front');
  
  // ---------- Рендерим уровни -------------------------------------------------
  const levelsHtml = levels
    .map((level) => {
      return `<label class="level">
              <input type="radio" name="level" value="${level.level}">${level.level}</label>`;
      })
      .join('');
    if (listLevels) {
      listLevels.innerHTML = levelsHtml;
    }


  // ---------- Выбираем уровень ------------------------------------------------
  const radioButtons = document.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
  
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
      radioButtons.forEach((btn) => {
        if (btn !== radioButton) {
            btn.parentElement?.classList.remove('chosen-level');
        }
      });
  
        radioButton.parentElement?.classList.add('chosen-level');
        currentSelectedLevel = parseInt(radioButton.value);
    });
  });

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      if (target) {
        if ('level' in target.elements) {
          const checkedLevel = (target.elements['level'] as HTMLInputElement).value;
          if (checkedLevel) {
            currentSelectedLevel = parseInt(checkedLevel);
            if (screenFirstElement) {
              screenFirstElement.style.display = 'none';
            }
            renderCards();
          } else {
            alert('Выберите уровень');
          }
        }
      }
    });
  }
};


