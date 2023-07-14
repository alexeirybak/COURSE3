import { renderCards } from './screen-card';

export let screenFirstElement: HTMLElement | null = document.querySelector('.front');

export const screenStart: string = `<form class="form-block">
                                      <p class="level-choice">Выбери сложность</p>
                                      <div class="level" id="levels"></div>
                                      <button type="submit" class="button-start">Старт</button>
                                    </form>`;

if (screenFirstElement) {
  screenFirstElement.innerHTML = screenStart;
}

const levels: { level: number }[] = [{ level: 1 }, { level: 2 }, { level: 3 }];

export let currentSelectedLevel: number | null = null;
const listLevels: HTMLElement | null = document.getElementById('levels');
const form: HTMLFormElement | null = document.querySelector('.form-block');

export const getScreen = (): void => {
  if (screenFirstElement) {
    screenFirstElement.classList.add('front');
  }

  if (form) {
    const radioButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('change', () => {
        radioButtons.forEach((btn) => {
          if (btn !== radioButton) {
            btn.parentElement?.classList.remove('chosen-level');
          }
        });

        radioButton.parentElement?.classList.add('chosen-level');
        currentSelectedLevel = radioButton.value ? parseInt(radioButton.value) : null;
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const checkedLevel: string | null = (form.elements.namedItem('level') as HTMLInputElement)?.value;

      if (checkedLevel) {
        currentSelectedLevel = parseInt(checkedLevel);

        if (screenFirstElement) {
          screenFirstElement.style.display = 'none';
        }

        renderCards();
      } else {
        alert('Выберите уровень');
      }
    });
  }
};
