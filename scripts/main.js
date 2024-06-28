const $ = window.jQuery;
const gsap = window.gsap;

const currentPageUrl = window.location.pathname.replace(/^\/([^/]+)(?:\.html)?$/, '$1');

const mainUrl = [
  '/', 
  '/onity/',
  '/en/main.html',
  '/en/main',
  '/onity/en/main.html',
  '/onity/en/main',
];
const processUrl = [
  'prozess.html',
  'prozess',
  '/onity/prozess.html',
  '/onity/prozess',
  '/en/process.html',
  '/en/process',
  '/onity/en/process.html',
  '/onity/en/process'
];
const teamUrl = [
  'team.html',
  'team',
  '/onity/team.html',
  '/onity/team',
  '/en/team.html',
  '/en/team',
  '/onity/en/team.html',
  '/onity/en/team'
];
const imprintUrl = [
  'impressum.html',
  'impressum',
  '/onity/impressum.html',
  '/onity/impressum',
  '/en/imprint.html',
  '/en/imprint',
  '/onity/en/imprint.html',
  '/onity/en/imprint'
]
const policyUrl = [
  'datenschutzerklarung.html',
  'datenschutzerklarung',
  '/onity/datenschutzerklarung.html',
  '/onity/datenschutzerklarung',
  '/en/policy.html',
  '/en/policy',
  '/onity/en/policy.html',
  '/onity/en/policy'
]
const recruitingUrl = [
  'recruiting.html',
  'recruiting',
  '/onity/recruiting.html',
  '/onity/recruiting',
  '/en/recruiting.html',
  '/en/recruiting',
  '/onity/en/recruiting.html',
  '/onity/en/recruiting'
]
const cvUrl = [
  'cv.html',
  'cv',
  '/onity/cv.html',
  '/onity/cv'
];


//Owl-carousel
const carouselReviewsOptions = {
  loop: false,
  margin: 30,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    1440: {
      items: 2,
    },
    1880: {
      items: 3,
    },
  },
  dotsEach: true,
  slideBy: 3,
};

const carouselPriceOptions = {
  loop: false,
  margin: 15,
  dots: true,
  autoWidth: true,
  responsive: false,
  item: 1,
  nav: false,
  dotsEach: true,
  center: true,
  dotsContainer: ".price__carousel-dots"
}

const addClassOnResizeReview = () => {
  const mainElement = $(".review__block");

  mainElement.addClass("owl-carousel owl-theme");
  mainElement.owlCarousel(carouselReviewsOptions);
};

if (mainUrl.includes(currentPageUrl)) {
  addClassOnResizeReview();
}

const addClassOnResizePrice = () => {
  const mainElement = $(".price__block-price-list");

  mainElement.addClass("owl-carousel owl-theme");
  mainElement.owlCarousel(carouselPriceOptions);
};

if (recruitingUrl.includes(currentPageUrl) && window.innerWidth < 1440) {
  addClassOnResizePrice();
}
// Функция для открытия бургер-меню
const openBurgerMenu = () => {
  $(".menu").addClass("active");
  $(".menu__overlay").addClass("active");
  $(".root").css("overflow", "hidden");
};

// Функция для закрытия бургер-меню
const closeBurgerMenu = () => {
  $(".menu").removeClass("active");
  $(".menu__overlay").removeClass("active");
  $(".root").css("overflow", "");
};

// Обработчик клика по бургеру для открытия меню
$("#burger-menu").on("click", () => {
  openBurgerMenu();
});

// Обработчик клика по кнопке закрытия для закрытия меню
$(".menu__close-btn").on("click", () => {
  closeBurgerMenu();
});

// Обработчик клика по затемненной области для закрытия меню
$(".menu__overlay").on("click", () => {
  closeBurgerMenu();
});

const callElement = $("[id='contact']");
const rootElement = $(".root");
const messageElement = $(".message");
const closeElement = $(".message-header__btn-close");
const returnElement = $(".message__btn-return");
const mainHeaderElement = $(".header");
const checkboxElement = $(".checkbox-by-main");

// Функция вызова формы
const callMessage = () => {
  messageElement.addClass("active");
  rootElement.css("overflow", "hidden");
  mainHeaderElement.css("display", "none");
};

// Функция закрытия формы
const closeMessage = () => {
  messageElement.removeClass("active");
  rootElement.css("overflow", "");
  mainHeaderElement.css("display", "flex");
};

checkboxElement.on("click", function () {
  this.classList.toggle("checked");
});

// Обработчик клика open
callElement.each(function () {
  $(this).on("click", () => callMessage());
});

// Обработчик клика close
closeElement.on("click", () => closeMessage());
returnElement.on("click", () => closeMessage());

const elementPostPriceBtn = $(".price__btn");
const elementPostPrice = $(".price__table");

if(elementPostPriceBtn) {
  elementPostPriceBtn.on("click", () => {
    elementPostPrice.toggleClass("active");
  })
  if(window.innerWidth < 1440) {
    if (!currentPageUrl.includes('/en/')
      ) {
        elementPostPriceBtn.text("rate Vergleichen_")
    }
  }
}

// Animation
const Animation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  let isAnimationStarted = false;
  let stacksToUse;

  const animationTitleArray = [
    ".team__title-second",
    ".about__title",
    ".process__title-second",
    ".candidate__title",
    ".assessment__title-second",
    ".form__title",
    ".trumpet__title",
    ".offer__title",
    ".process__title"
  ];

  const animationMainTitleArray = [
    ".meet__title", 
    ".banner__title"
  ];

  const parallaxImageArray = [
    {
      ".team__img": ".team__parallax-container",
    },
    {
      ".assessment__img": ".assessment__parallax-container",
    },
    {
      ".steps__img": ".steps__parallax-container",
    },
    {
      ".offer__img": ".offer__parallax-container"
    },
    {
      ".about__img": ".about__parallax-container"
    }
  ];

  const stacksMinWidth1440 = [
    {
      elements: [".vue", ".pm", ".logo-3", ".dev", ".angular"],
      positionYStart: [17.3, 18.1, 16.8, 23.3, 19.6],
      positionYFinish: [93.6, 94.5, 94.5, 91.5, 94.5],
      positionXStart: [2.8, 17, 65.2, 79, 87.1],
      positionXFinish: [0.7, 17.75, 65.2, 80, 88.1],
      rotationsStart: [-12.06, -7.67, -0.59, -15.88, 10.97],
      rotationsFinish: [16.62, -2, -0.59, -26.1, -8.24],
      duration: 3,
    },
    {
      elements: [
        ".java",
        ".react",
        ".android",
        ".php",
        ".designer",
        ".ml",
        ".flutter",
      ],
      positionYStart: [8.5, 10.6, 8.9, 12.6, 9.2, 11.3, 10.9],
      positionYFinish: [89, 94.5, 88.3, 93.7, 94.1, 92.8, 86.9],
      positionXStart: [5.8, 13.7, 28.4, 39.4, 49, 77.5, 82.9],
      positionXFinish: [6.4, 8.8, 28.3, 35.7, 51.1, 75.7, 77.1],
      rotationsStart: [-13.84, 15.88, -9.05, 20.9, -12.06, -16.68, -7.67],
      rotationsFinish: [-13.84, 4.6, -9.05, 20.9, -3, -16.68, -7.67],
      duration: 3,
    },
    {
      elements: [".logo-1", ".python", ".logo-2", ".logo-4"],
      positionYStart: [3.3, 7, 4.5, 3.8],
      positionYFinish: [89.5, 87, 93, 84.5],
      positionXStart: [10.8, 20, 39.7, 85],
      positionXFinish: [11.9, 18.6, 39.7, 85.2],
      rotationsStart: [-12.37, -22.97, 0.71, 4.81],
      rotationsFinish: [-2.37, 22.97, 13.8, 24.81],
      duration: 3,
    },
  ];

  const stacksMinWidth768 = [
    {
      elements: [".ml", ".pm", ".php", ".flutter"],
      positionYStart: [20.1, 17, 16, 17],
      positionYFinish: [94, 94, 94, 94],
      positionXStart: [4.3, 14, 58.2, 76.1],
      positionXFinish: [2.3, 14, 58.2, 76.1],
      rotationsStart: [-6.48, -7.67, 20.9, -7.67],
      rotationsFinish: [8, 2, 4, -6.1],
      duration: 3,
    },
    {
      elements: [".react", ".android", ".angular", ".vue"],
      positionYStart: [9.6, 8.5, 8.9, 12.2],
      positionYFinish: [88, 88.3, 87.3, 88.1],
      positionXStart: [20.7, 46.4, 77.4, 4],
      positionXFinish: [20.7, 46.4, 77.4, 4],
      rotationsStart: [15.88, -8, -18, -12.06],
      rotationsFinish: [4.6, -2, -15, -3],
      duration: 3,
    },
    {
      elements: [".java", ".logo-1", ".python", ".logo-2"],
      positionYStart: [3.5, 1.3, 4, 2.6],
      positionYFinish: [82, 81.9, 82, 83],
      positionXStart: [5.8, 16.8, 38, 57.7],
      positionXFinish: [5.8, 16.8, 37, 57.7],
      rotationsStart: [-13.84, -12.37, -22.97, 11.71],
      rotationsFinish: [-6, 16.37, 11, 1.8],
      duration: 3,
    },
  ];

  const stacksMinWidth360 = [
    {
      elements: [".php", ".flutter", ".android"],
      positionYStart: [19.2, 17, 18.7],
      positionYFinish: [95, 95, 95],
      positionXStart: [4.3, 63, 30],
      positionXFinish: [4.3, 63, 30],
      rotationsStart: [-3.99, -7.67, 6],
      rotationsFinish: [-3.99, -7.67, 4],
      duration: 3,
    },
    {
      elements: [".ml", ".pm"],
      positionYStart: [14, 12.5],
      positionYFinish: [90, 89.3],
      positionXStart: [5.7, 25.4],
      positionXFinish: [5.7, 25.4],
      rotationsStart: [-8, -3],
      rotationsFinish: [-8, -3],
      duration: 3,
    },
    {
      elements: [".vue", ".react", ".angular"],
      positionYStart: [7.6, 6, 5.4],
      positionYFinish: [85, 83.3, 83.3],
      positionXStart: [5.7, 34.4, 64.4],
      positionXFinish: [5.7, 34.4, 64.4],
      rotationsStart: [-11.1, 19, -18],
      rotationsFinish: [-11.1, 19, -18],
      duration: 3,
    },
    {
      elements: [".java", ".logo-1", ".python"],
      positionYStart: [1.5, 1.3, 1],
      positionYFinish: [80, 77.9, 79.1],
      positionXStart: [5.8, 23.8, 55],
      positionXFinish: [5.8, 23.8, 55],
      rotationsStart: [-13.84, 16.6, -9],
      rotationsFinish: [-6, 1.6, -9],
      duration: 3,
    },
  ];


  const updateStacksToUse = () => {
    const frame = window.innerWidth;
    if (frame >= 1440) {
      stacksToUse = stacksMinWidth1440;
    } else if (frame >= 768) {
      stacksToUse = stacksMinWidth768;
    } else {
      stacksToUse = stacksMinWidth360;
    }
  };

// Обновляем массив stacksToUse при изменении размера окна
  window.addEventListener("resize", updateStacksToUse);

// Вызываем функцию один раз при инициализации
  updateStacksToUse();

  const animateStacks = (stacks, index = 0) => {
    animate(stacks[index]);

// Проверяем, есть ли еще стеки для анимации
    if (index < stacks.length - 1) {
      setTimeout(() => {
        animateStacks(stacks, index + 1);
      }, stacks[index].duration * 1000);
    }
  }

  const animate = (stacks) => {
    const duration = 3;

    stacks.elements.forEach((el, index) => {
      const element = document.querySelector(el);
      const startX = stacks.positionXStart[index];
      const endX = stacks.positionXFinish[index];
      const startY = stacks.positionYStart[index];
      const endY = stacks.positionYFinish[index];
      const startRotation = stacks.rotationsStart[index];
      const endRotation = stacks.rotationsFinish[index];

      // Получаем размеры контейнера
      const containerWidth = document.querySelector(
        ".candidate__block-w-stickers"
      ).offsetWidth;
      const containerHeight = document.querySelector(
        ".candidate__block-w-stickers"
      ).offsetHeight;

      const animateElement = () => {
        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress;
        const currentRotation =
          startRotation + (endRotation - startRotation) * progress;

        element.style.left = `${(currentX / 100) * containerWidth}px`; // Преобразуем проценты в пиксели относительно ширины контейнера
        element.style.top = `${(currentY / 100) * containerHeight}px`; // Преобразуем проценты в пиксели относительно высоты контейнера
        element.style.transform = `rotate(${currentRotation}deg)`;
      }

      let progress = 0;
      const animationInterval = setInterval(() => {
        animateElement();
        progress += 1 / (duration * 60);
        if (progress >= 1) {
          clearInterval(animationInterval);
        }
      }, 1000 / 60);
    });
  }

  const assignPositions = (stacks) => {
    stacks.forEach((stack) => {
      stack.elements.forEach((element, index) => {
        const el = document.querySelector(element);
        if (el) {
          el.style.position = "absolute";
          el.style.top = `${stack.positionYStart[index]}%`;
          el.style.left = `${stack.positionXStart[index]}%`;
          el.style.transform = `rotate(${stack.rotationsStart[index]}deg)`;
        } else {
          console.error(`Element "${element}" not found`);
        }
      });
    });
  }
  
  
  if (mainUrl.includes(currentPageUrl)) {
    assignPositions(stacksToUse);
  }

  animationTitleArray.forEach((el, index) => {
    const element = document.querySelector(el);
    if (element) {
      gsap.fromTo(
        el,
        {
          y: 60,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: el,
            toggleActions: "restart none none none",
            start: "top bottom+=100px",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          onComplete: () => {
            if (mainUrl.includes(currentPageUrl)) {
              if (el === ".candidate__title" && !isAnimationStarted) {
                animateStacks(stacksToUse);
                isAnimationStarted = true;
              }
            }
          },
        }
      );
    }
  });

  parallaxImageArray.forEach((item) =>
    Object.entries(item).forEach(([key, value]) => {
      const element = document.querySelector(key);
      if (element) {
        gsap.to(key, {
          yPercent: 90,
          ease: "none",
          scrollTrigger: {
            trigger: value,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    })
  );

  animationMainTitleArray.forEach((el) => {
    const element = document.querySelector(el);
    if (element) {
      tl.fromTo(
        el,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        0.6
      );
    }
  });
};

document.addEventListener("DOMContentLoaded", function() {
  if (
    !policyUrl.includes(currentPageUrl) 
    && !imprintUrl.includes(currentPageUrl)
    ) {
      Animation();
    }
  });

const getStepsProcess = () => {
  const stepsList = {
    "kick-off": "KO",
    "job-briefing": "JB",
    "candidate-search": "CSE",
    qualification: "Q",
    presentation: "P",
    "selection-process": "SP",
    "contract-signing": "CSI",
  };
  
  // Активация первого элемента при загрузке страницы
  const firstItemId = Object.keys(stepsList)[0];
  $(`#${firstItemId}`).addClass("active");
  $(`.${stepsList[firstItemId]}`).addClass("active");
  
  // Обработчик клика для всех элементов списка
  Object.keys(stepsList).forEach((id) => {
    $(`#${id}`).on("click", () => {
      Object.values(stepsList).forEach((cls) =>
        $(`.${cls}`).removeClass("active")
      );
  
      $(`#${id}`).addClass("active");
  
      Object.keys(stepsList).forEach((el) => $(`#${el}`).removeClass("active"));
      $(`.${stepsList[id]}`).addClass("active");
  
      // Получаем целевой блок
      const targetBlock = document.querySelector(".steps__block");
      // Прокручиваем экран к центру блока
      targetBlock.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

if (processUrl.includes(currentPageUrl)) {
  getStepsProcess();
} else if (teamUrl.includes(currentPageUrl)) {
  const element = document.querySelectorAll("#team");
  element.forEach((el) => (el.style.color = "#E5730A"));
}

const getPositionElements = () => {
  const elementP = document.querySelectorAll(
    `.banner__block .banner__block-info p`
  );
  const elementPOffer = document.querySelector(".offer__block-info p");
  const elementBtnContact = document.querySelector(".block-info-btn");
  const elementBtnForm = document.querySelector(".form__btn");
  const elementBtn = document.querySelector(".banner__block-btn");
  const widthElementP = elementP[0].offsetWidth;

  const result_1 = widthElementP + 66;
  const result_2 = elementPOffer.offsetWidth + 66;
  elementBtn.style.left = result_1+'px';
  elementBtnContact.style.left = result_2+'px';

  if (window.innerWidth < 768) {
    if (!currentPageUrl.includes('/en/')) {
        elementBtn.textContent = "DEMO buchen_";
        elementBtnContact.textContent = "Kontakt_";
        elementBtnForm.textContent = "Uns Schreiben_";
    }
  }
}

if(recruitingUrl.includes(currentPageUrl)) {
  getPositionElements();
}

// Функция для создания уникальных идентификаторов
const generateUniqueID = () => '_' + Math.random().toString(36).substr(2, 9);
// Создает кастомный элемент input
const createCustomElementInput = (
  classNameBox = null,
  textLabel = null,
  inputName,
  inputID,
  typeInput,
  placeholderInput,
  insertElement,
  previousBoxID = null,
  disabled = false
) => {
  try {
    const insert = insertElement && (document.querySelector(insertElement.startsWith('#') || insertElement.startsWith('.') ? insertElement : `#${insertElement}`) || document.querySelector(`${insertElement}`));
    if (!insert) throw new Error(`Element with selector "${insertElement}" not found`);

    const div = document.createElement('div');
    if (classNameBox) {
      div.className = classNameBox;
    }

    if (textLabel) {
      const label = document.createElement('label');
      label.setAttribute('for', inputID);
      label.textContent = textLabel;
      div.appendChild(label);
    }

    const input = document.createElement('input');
    input.type = typeInput;
    input.placeholder = placeholderInput;
    input.name = inputName;
    input.id = inputID;
    if (disabled) {
      input.disabled = true;
      input.classList.add('disabled');
    }
    div.appendChild(input);

    if (!previousBoxID) {
      insert.appendChild(div);
    } else {
      const previousBox = document.querySelector(`#${previousBoxID}`);
      if (previousBox) {
        previousBox.before(div);
      } else {
        console.error(`Previous box with ID "${previousBoxID}" not found`);
      }
    }

    return {
      name: inputName,
      getValue: () => input.value,
      getId: () => inputID,
      getClassName: () => classNameBox
    };
  } catch (error) {
    console.error(error.message);
  }
};
const setupDelayedInputTracking = (inputIDs, delay = 500) => {
  // Ensure inputIDs is an array
  if (!Array.isArray(inputIDs)) {
    inputIDs = [inputIDs];
  }
  console.log(inputIDs)
  inputIDs.forEach(id => {
    const inputElement = document.getElementById(id);
    console.log(inputElement)
    if (inputElement) {
      let timeout = null;

      inputElement.addEventListener('input', (event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const inputValue = event.target.value;
          console.log(inputValue)
        }, delay);
      });
    } else {
      console.warn(`Element with ID ${id} not found.`);
    }
  });
};
// Создает кастомный элемент select
const createCustomSelect = (
  classNameBox = null,
  textLabel = null,
  inputID,
  itemsData,
  insertElement,
  onChangeCallback,
  previousBoxID,
  textBtnLanguageForm,
  disabled = false
) => {
  const insert = document.querySelector(insertElement.startsWith('#') || insertElement.startsWith('.') ? insertElement : `#${insertElement}`) || document.querySelector(`${insertElement}`);
  
  if (!insert) {
    console.error(`Element with selector "${insertElement}" not found`);
    return;
  }
  
  let div = null;
  let labelElement = null;

  if (classNameBox !== null) {
    div = document.createElement('div');
    div.className = classNameBox;
  }
  
  if (textLabel !== null) {
    labelElement = document.createElement('label');
    labelElement.setAttribute('for', inputID);
    labelElement.textContent = textLabel;
  }

  const divCustomSelect = document.createElement('div');
  divCustomSelect.className = 'custom-select b-f';
  if (disabled) {
    divCustomSelect.classList.add('disabled');
  }

  const button = document.createElement('button');
  button.className = 'select-button b-f';
  button.setAttribute('role', 'combobox');
  button.setAttribute('aria-labelledby', 'select button');
  button.setAttribute('aria-haspopup', 'listbox');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', `select-dropdown-${inputID}`);
  if (disabled) {
    button.disabled = true;
  }

  const spanSelectedValue = document.createElement('span');
  spanSelectedValue.className = 'selected-value';
  spanSelectedValue.id = inputID;
  spanSelectedValue.textContent = textBtnLanguageForm === 'EN' ? 'Bitte wählen' : 'Please choose';

  const spanArrow = document.createElement('span');
  spanArrow.className = 'arrow';

  button.appendChild(spanSelectedValue);
  button.appendChild(spanArrow);

  const ulSelectDropdown = document.createElement('ul');
  ulSelectDropdown.className = 'select-dropdown';
  ulSelectDropdown.setAttribute('role', 'listbox');
  ulSelectDropdown.id = `select-dropdown-${inputID}`;

  itemsData.forEach(item => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');

    const input = document.createElement('input');
    input.type = 'radio';
    input.id = item.id;
    input.name = inputID;
    input.value = item.label;

    const label = document.createElement('label');
    label.htmlFor = item.id;

    const icon = document.createElement('i');
    icon.className = item.iconClass;
    label.appendChild(icon);
    label.appendChild(document.createTextNode(item.label));

    li.appendChild(input);
    li.appendChild(label);
    ulSelectDropdown.appendChild(li);
  });

  divCustomSelect.appendChild(button);
  divCustomSelect.appendChild(ulSelectDropdown);
  if (div) {
    if (labelElement) div.appendChild(labelElement);
    div.appendChild(divCustomSelect);
  } else {
    if (labelElement) insert.appendChild(labelElement);
    insert.appendChild(divCustomSelect);
  }

  // Добавляет обработчики для кастомного селекта
  const addCustomSelectHandlers = (customSelect) => {
    const selectBtn = customSelect.querySelector(".select-button");
    const selectedValue = customSelect.querySelector(".selected-value");
    const optionsList = customSelect.querySelectorAll(".select-dropdown li");

    const closeAllSelects = (currentSelect) => {
      document.querySelectorAll('.custom-select.active').forEach(select => {
        if (select !== currentSelect) {
          select.classList.remove("active");
          select.querySelector(".select-button").setAttribute("aria-expanded", "false");
        }
      });
    };

    document.addEventListener("click", (event) => {
      if (!customSelect.contains(event.target)) {
        closeAllSelects(null);
      }
    });

    if (!disabled) {
      selectBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        closeAllSelects(customSelect);
        customSelect.classList.toggle("active");
        const isExpanded = selectBtn.getAttribute("aria-expanded") === "true";
        selectBtn.setAttribute("aria-expanded", String(!isExpanded));
      });

      optionsList.forEach(option => {
        option.addEventListener("click", (event) => {
          event.stopPropagation();
          selectedValue.textContent = option.querySelector('label').textContent;
          customSelect.classList.remove("active");
          selectBtn.setAttribute("aria-expanded", "false");
          if (onChangeCallback) onChangeCallback(option.querySelector('input').value);
        });

        option.addEventListener("keyup", (e) => {
          if (e.key === "Enter") {
            selectedValue.textContent = option.querySelector('label').textContent;
            customSelect.classList.remove("active");
            selectBtn.setAttribute("aria-expanded", "false");
            if (onChangeCallback) onChangeCallback(option.querySelector('input').value);
          }
        });
      });
    }
  };

  addCustomSelectHandlers(divCustomSelect);
  if (!previousBoxID || previousBoxID !== null) {
    insert.appendChild(div || divCustomSelect);
  } else {
    document.getElementById(previousBoxID).before(div || divCustomSelect);
  }

  return {
    inputID,
    getSelectedValue: () => document.querySelector(`#${inputID}`).textContent
  };
};
// Функция для создания SVG элемента
const createTrashSVG = () => {
  // Создать элемент SVG
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", "trash b-f");
  svg.setAttribute("width", "20");
  svg.setAttribute("height", "20");
  svg.setAttribute("viewBox", "0 0 20 20");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", svgNS);

  // Создать первый path элемент
  const path1 = document.createElementNS(svgNS, "path");
  path1.setAttribute("d", "M2.5 5H4.16667H17.5");
  path1.setAttribute("stroke", "#E6730A");
  path1.setAttribute("stroke-width", "2");
  path1.setAttribute("stroke-linecap", "round");
  path1.setAttribute("stroke-linejoin", "round");

  // Создать второй path элемент
  const path2 = document.createElementNS(svgNS, "path");
  path2.setAttribute("d", "M15.8337 5.0013V16.668C15.8337 17.11 15.6581 17.5339 15.3455 17.8465C15.0329 18.159 14.609 18.3346 14.167 18.3346H5.83366C5.39163 18.3346 4.96771 18.159 4.65515 17.8465C4.34259 17.5339 4.16699 17.11 4.16699 16.668V5.0013M6.66699 5.0013V3.33464C6.66699 2.89261 6.84259 2.46868 7.15515 2.15612C7.46771 1.84356 7.89163 1.66797 8.33366 1.66797H11.667C12.109 1.66797 12.5329 1.84356 12.8455 2.15612C13.1581 2.46868 13.3337 2.89261 13.3337 3.33464V5.0013");
  path2.setAttribute("stroke", "#E6730A");
  path2.setAttribute("stroke-width", "2");
  path2.setAttribute("stroke-linecap", "round");
  path2.setAttribute("stroke-linejoin", "round");

  // Создать третий path элемент
  const path3 = document.createElementNS(svgNS, "path");
  path3.setAttribute("d", "M8.33301 9.16797V14.168");
  path3.setAttribute("stroke", "#E6730A");
  path3.setAttribute("stroke-width", "2");
  path3.setAttribute("stroke-linecap", "round");
  path3.setAttribute("stroke-linejoin", "round");

  // Создать четвертый path элемент
  const path4 = document.createElementNS(svgNS, "path");
  path4.setAttribute("d", "M11.667 9.16797V14.168");
  path4.setAttribute("stroke", "#E6730A");
  path4.setAttribute("stroke-width", "2");
  path4.setAttribute("stroke-linecap", "round");
  path4.setAttribute("stroke-linejoin", "round");

  // Добавить path элементы в SVG
  svg.appendChild(path1);
  svg.appendChild(path2);
  svg.appendChild(path3);
  svg.appendChild(path4);

  return svg
};
const createCalendarSVG = (counter) => {
  // Создать элемент SVG
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("class", `calendar b-f`);
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", svgNS);
  

  // Создать первый path элемент
  const path1 = document.createElementNS(svgNS, "path");
  path1.setAttribute("d", "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z");
  path1.setAttribute("stroke", "#8E8E8E");
  path1.setAttribute("stroke-width", "2");
  path1.setAttribute("stroke-linecap", "round");
  path1.setAttribute("stroke-linejoin", "round");

  // Создать второй path элемент
  const path2 = document.createElementNS(svgNS, "path");
  path2.setAttribute("d", "M16 2V6");
  path2.setAttribute("stroke", "#8E8E8E");
  path2.setAttribute("stroke-width", "2");
  path2.setAttribute("stroke-linecap", "round");
  path2.setAttribute("stroke-linejoin", "round");

  // Создать третий path элемент
  const path3 = document.createElementNS(svgNS, "path");
  path3.setAttribute("d", "M8 2V6");
  path3.setAttribute("stroke", "#8E8E8E");
  path3.setAttribute("stroke-width", "2");
  path3.setAttribute("stroke-linecap", "round");
  path3.setAttribute("stroke-linejoin", "round");

  // Создать четвертый path элемент
  const path4 = document.createElementNS(svgNS, "path");
  path4.setAttribute("d", "M3 10H21");
  path4.setAttribute("stroke", "#8E8E8E");
  path4.setAttribute("stroke-width", "2");
  path4.setAttribute("stroke-linecap", "round");
  path4.setAttribute("stroke-linejoin", "round");

  // Добавить path элементы в SVG
  svg.appendChild(path1);
  svg.appendChild(path2);
  svg.appendChild(path3);
  svg.appendChild(path4);

  return svg
}
// Создает кастомный элемент textarea
const createCustomTextArea = (
  classNameBox,
  characterCount,
  textLabel,
  typeTextArea,
  placeholderTextArea,
  ID,
  insertElement
) => {
  const insert = document.querySelector(insertElement.startsWith('#') || insertElement.startsWith('.') ? insertElement : `#${insertElement}`) || document.querySelector(`.${insertElement}`);
  const maxLength = "1000";
  const div = document.createElement('div');
  div.className = classNameBox;

  const divBorder = document.createElement('div');
  divBorder.className = "block__box b-f";

  const counter = document.createElement('div');
  counter.id = characterCount;
  counter.innerText = "1000/1000";

  const label = document.createElement('label');
  label.setAttribute('for', ID);
  label.textContent = textLabel;

  const getTextArea = (type, placeholder, id) => {
    const textArea = document.createElement('textarea');
    textArea.placeholder = placeholder;
    textArea.id = id;
    textArea.setAttribute("maxlength", maxLength);
    return textArea;
  };

  const updateCharacterCount = () => {
    let text = textArea.value;
    let remaining = 1000 - text.length;
    counter.innerText = remaining + '/1000';
  };

  const textArea = getTextArea(typeTextArea, placeholderTextArea, ID);
  textArea.addEventListener("input", updateCharacterCount);

  div.appendChild(label);
  div.appendChild(divBorder);
  divBorder.appendChild(counter);
  divBorder.prepend(textArea);
  insert.appendChild(div);

  return {
    id: ID,
    getBox: () => div.className
  };
};

let divPersonalInfo,
  divExpertiseInfo,
  divExperienceInfo,
  divQualificationsInfo,
  divEducationInfo,
  divRecruiterInfo,
  expertiseTextArea, 
  highlightsTextArea,
  counterForms,
  dateQualification,
  startDateEducation,
  endDateEducation,
  languageSwitcher = 'EN',
  textBtnLanguageForm = languageSwitcher,
  textareaDisclaimerID,
  textDisclaimerDE,
  textDisclaimerEN,
  submitButton,
  isChecked;

// Создание основной формы
const createForm = () => {
  
  const itemsLanguageDataDE = [
    { id: 'native', label: 'Muttersprache', iconClass: 'bx bxl-native' },
    { id: 'advanced', label: 'Vollständige berufliche Kenntnisse', iconClass: 'bx bxl-advanced' },
    { id: 'intermediate', label:'Berufliche Kenntnisse', iconClass: 'bx bxl-intermediate' },
    { id: 'beginner', label: 'Eingeschränkte berufliche Kenntnisse', iconClass: 'bx bxl-beginner' },
    { id: 'basic', label: 'Grundkenntnisse', iconClass: 'bx bxl-basic' }
  ];

  const itemsLanguageDataEN = [
    { id: 'native', label: 'Native or Bilingual Proficiency', iconClass: 'bx bxl-native' },
    { id: 'advanced', label: 'Full Professional Proficiency', iconClass: 'bx bxl-advanced' },
    { id: 'intermediate', label: 'Professional Working Proficiency', iconClass: 'bx bxl-intermediate' },
    { id: 'beginner', label: 'Limited Working Proficiency', iconClass: 'bx bxl-beginner' },
    { id: 'basic', label: 'Elementary Proficiency', iconClass: 'bx bxl-basic' }
  ];
  
  const itemsAvailabilityDataDE = [
    { id: 'request', label: 'Auf Anfrage', iconClass: 'bx bxl-request' },
    { id: '1', label: 'Nach 1 Monat', iconClass: 'bx bxl-1' },
    { id: '2', label: 'Nach 2 Monaten', iconClass: 'bx bxl-2' },
    { id: '3', label: 'Nach 3 Monaten', iconClass: 'bx bxl-3' },
    { id: '4', label: 'Nach 4 Monaten', iconClass: 'bx bxl-4' },
    { id: '5', label: 'Nach 5 Monaten', iconClass: 'bx bxl-5' },
    { id: '6', label: 'Nach 6 Monaten', iconClass: 'bx bxl-6' },
    { id: 'available', label: 'Jetzt verfügbar', iconClass: 'bx bxl-available' }
  ];

  const itemsAvailabilityDataEN = [
    { id: 'request', label: 'Upon request', iconClass: 'bx bxl-request' },
    { id: '1', label: 'After 1 month', iconClass: 'bx bxl-1' },
    { id: '2', label: 'After 2 months', iconClass: 'bx bxl-2' },
    { id: '3', label: 'After 3 months', iconClass: 'bx bxl-3' },
    { id: '4', label: 'After 4 months', iconClass: 'bx bxl-4' },
    { id: '5', label: 'After 5 months', iconClass: 'bx bxl-5' },
    { id: '6', label: 'After 6 months', iconClass: 'bx bxl-6' },
    { id: 'available', label: 'Now available', iconClass: 'bx bxl-available' }
  ];
  
  const itemsEmploymentDataDE = [
    { id: 'permanent', label: 'Festanstellung', iconClass: 'bx bxl-permanent' },
    { id: 'freelance', label: 'Freiberufliche Tätigkeit', iconClass: 'bx bxl-freelance' }
  ];

  const itemsEmploymentDataEN = [
    { id: 'permanent', label: 'Permanent position', iconClass: 'bx bxl-permanent' },
    { id: 'freelance', label: 'Freelance work', iconClass: 'bx bxl-freelance' }
  ];
  
  const itemsContractData = [
    { id: 'yes', label: textBtnLanguageForm === 'EN' ? 'Doch' : 'Yes', iconClass: 'bx bxl-yes' },
    { id: 'no', label: textBtnLanguageForm === 'EN' ? 'Nein' : 'No', iconClass: 'bx bxl-no' },
    { id: 'pending', label: textBtnLanguageForm === 'EN' ? 'Ausstehend' : 'Pending', iconClass: 'bx bxl-pending' },
    { id: 'expired', label: textBtnLanguageForm === 'EN' ? 'Abgelaufen' : 'Expired', iconClass: 'bx bxl-expired' }
  ]
  
  const itemsConuntryData = [
    { id: 'usa', label: 'USA', iconClass: 'bx bxl-usa' },
    { id: 'poland', label: 'Poland', iconClass: 'bx bxl-poland' },
    { id: 'russia', label: 'Russia', iconClass: 'bx bxl-russia' },
    { id: 'germany', label: 'Germany', iconClass: 'bx bxl-germany' },
    { id: 'france', label: 'France', iconClass: 'bx bxl-france' },
    { id: 'japan', label: 'Japan', iconClass: 'bx bxl-japan' },
    { id: 'canada', label: 'Canada', iconClass: 'bx bxl-canada' },
    { id: 'australia', label: 'Australia', iconClass: 'bx bxl-australia' },
    { id: 'china', label: 'China', iconClass: 'bx bxl-china' },
    { id: 'brazil', label: 'Brazil', iconClass: 'bx bxl-brazil' },
    { id: 'india', label: 'India', iconClass: 'bx bxl-india' },
    { id: 'mexico', label: 'Mexico', iconClass: 'bx bxl-mexico' },
    { id: 'spain', label: 'Spain', iconClass: 'bx bxl-spain' },
    { id: 'italy', label: 'Italy', iconClass: 'bx bxl-italy' },
    { id: 'netherlands', label: 'Netherlands', iconClass: 'bx bxl-netherlands' },
    { id: 'south_korea', label: 'South Korea', iconClass: 'bx bxl-south-korea' },
    { id: 'sweden', label: 'Sweden', iconClass: 'bx bxl-sweden' },
    { id: 'switzerland', label: 'Switzerland', iconClass: 'bx bxl-switzerland' },
    { id: 'united_kingdom', label: 'United Kingdom', iconClass: 'bx bxl-united-kingdom' }
  ];
  
  const itemsRecruitersData = [
    { id: '1', label: 'Felix Bauer', iconClass: 'bx bxl-felix' },
    { id: '2', label: 'Georgi Youdanov', iconClass: 'bx bxl-georgi' },
    { id: '3', label: 'Ekaterina Olkhovaia', iconClass: 'bx bxl-ekaterina' },
    { id: '4', label: 'Tania Kulkova', iconClass: 'bx bxl-tania' }
  ];
  
  textDisclaimerDE = `Im Fall der Einstellung eines von Onity_ ein Geschäftszweig der GoTayga Texx GmbH vorgestellten Kandidaten (Unterzeichnung des Arbeitsvertrages durch Kandidat und Auftraggeber) wird ein Vermittlungshonorar fällig. Das Honorar beträgt 25% vom Brutto-Jahreszielgehalt und gilt zzgl. der gesetzlichen Mehrwertsteuer. Das Brutto-Jahreszielgehalt berechnet sich aus dem Brutto-Jahresgrundgehalt sowie aller Zuschläge und zusätzlicher Leistungen wie Jahres-Sonderzahlungen, Weihnachts- und Urlaubsgeld, Tantiemen, Firmenwagen etc. Das Honorar wird auch dann fällig, wenn zwischen dem Auftraggeber und dem Kandidaten innerhalb von 12 Monaten direkt oder in sonstiger Weise (z.B. Contracting oder sonstige Formen der Beschäftigung, verbundenes Unternehmen des Auftraggebers) nach Unterbreitung des Personalvorschlags durch Onity_ ein Vertrag zustande kommt. Gleiches gilt im Falle einer direkten oder indirekten Vermittlung (z.B. durch Weitergabe von Kontaktdaten) an einen Dritten. In diesen Fällen wird die Urheberschäfteit der Tätigkeit von Onity_ für das Zustandekommen des Beschäftigungsverhältnisses vermutet. Die Weitergabe an Dritte bedarf der vorherigen ausdrücklichen Zustimmung durch Onity_. Dieser Kandidatenvorschlag enthält vertrauliche, personenbezogene Daten, die wir mit Einverständnis unserer Kandidaten erstellt haben. Eine Weitergabe an Dritte ist nicht gestattet.`;

  textDisclaimerEN = `In the event of the hiring of one of Onity_ a branch of theGoTayga Texx GmbH presented candidates (signing of the Employment contract between candidate and client). Mediation fee due. The fee is 25% of Gross annual target salary and applies plus the statutory salary VAT. The gross annual target salary is calculated from the gross annual basic salary as well as all supplements and additional ones Benefits such as annual special payments, Christmas and holiday bonuses, Royalties, company cars, etc. The fee is also due if between the client and the candidate within 12 months directly or in another way (e.g. contracting or other forms employment, affiliated company of the client). A contract is concluded when Onity_ submits the personnel proposal comes. The same applies in the case of direct or indirect mediation (e.g. by passing on contact details) to a third party. In these In cases, the authorship of Onity_'s activity is assumed for this The employment relationship is assumed to have come into being. The sharing to third parties requires the prior express consent of Onity_. This candidate proposal contains confidential, personal data, which we have created with the consent of our candidates. One Passing on to third parties is not permitted.`;

  const dynamicForm = document.querySelector('#dynamicForm');
  
  const blockOptions = document.createElement('div');
  blockOptions.className = 'options';
  
  const btnChangeLanguageForm = document.createElement('button');
  btnChangeLanguageForm.className = 'options-btn-change-lang';
  btnChangeLanguageForm.innerText = textBtnLanguageForm;

  const checkboxAnonymousForm = document.createElement('div');
  checkboxAnonymousForm.className = 'anonymous';

  const checkboxDisclamerForm = document.createElement('div');
  checkboxDisclamerForm.className = 'disclaimer';

  const checkboxAnonymous = document.createElement('div');
  checkboxAnonymous.className = 'checkbox-by-form-anonymous';

  const checkboxDisclamer = document.createElement('div');
  checkboxDisclamer.className = 'checkbox-by-form-disclaimer';

  const messageByAnon = document.createElement('div');
  messageByAnon.className = 'message__box';
  messageByAnon.innerText = textBtnLanguageForm === 'EN' ? 'Auch anonym machen' : 'Also make anonymous';

  const messageByDisclaimer = document.createElement('div');
  messageByDisclaimer.className = 'message__box';
  messageByDisclaimer.innerText = textBtnLanguageForm === 'EN' ? 'Disclaimer hinzufügen' : 'Add disclaimer';

  checkboxDisclamerForm.appendChild(checkboxDisclamer);
  checkboxDisclamerForm.appendChild(messageByDisclaimer);
  checkboxAnonymousForm.appendChild(checkboxAnonymous);
  checkboxAnonymousForm.appendChild(messageByAnon);

  blockOptions.appendChild(btnChangeLanguageForm);
  dynamicForm.before(blockOptions);

  checkboxAnonymousForm.addEventListener('click', () => {
    checkboxAnonymous.classList.toggle('checked');
    
    isChecked = checkboxAnonymous.classList.contains('checked');
    divPersonalInfo.remove();
    divExpertiseInfo.remove();
    divExperienceInfo.remove();
    divEducationInfo.remove();
    divQualificationsInfo.remove();
    divRecruiterInfo.remove();
    
    createForm(isChecked);
    divRecruiterInfo.appendChild(checkboxDisclamerForm);
    divRecruiterInfo.appendChild(checkboxAnonymousForm);
  });

  checkboxDisclamerForm.addEventListener('click', () => {
    checkboxDisclamer.classList.toggle('checked');

    const isChecked = checkboxDisclamer.classList.contains('checked');
    if (isChecked) {
      createCustomTextArea(
        "block-disclaimer b-f", 
        "character-count", 
        null, 
        "text", 
        null,
        generateUniqueID(),
        '.recruiter-information'
      );
      document.querySelector('.block-disclaimer .block__box textarea').value =  textBtnLanguageForm === 'EN' ? textDisclaimerDE : textDisclaimerEN;
    } else {
      document.querySelector('.block-disclaimer').remove()
    }
  })

  // Создание раздела с персональной информацией
  const createSectionPersonalInformation = (isChecked) => {
    divPersonalInfo = document.createElement('div');
    divPersonalInfo.className = 'personal-information b-f';

    const divPersonalInfoForm = document.createElement('div');
    divPersonalInfoForm.className = 'personal-information__form b-f';

    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = textBtnLanguageForm === 'EN' ? 'Personal Information' : 'Personal Information';
    console.log(textBtnLanguageForm)
    divPersonalInfo.appendChild(title);
    divPersonalInfo.appendChild(divPersonalInfoForm);
    dynamicForm.appendChild(divPersonalInfo);
    
    // Создаем поля для ввода данных персональной информации
    createCustomElementInput(
      'name-b b-f',
      'Name',
      'Name',
      generateUniqueID(),
      'text',
      'Name',
      '.personal-information__form',
      null,
      isChecked
    );
    createCustomElementInput(
      "location-b b-f", 
      textBtnLanguageForm === 'EN' ? 'Ort' : "Location",
      "Location",
      generateUniqueID(),
      "text", 
      textBtnLanguageForm === 'EN' ? 'Ort' : "Location",
      ".personal-information__form"
    );
    createCustomElementInput(
      "id-b b-f", 
      "ID",
      "ID",
      generateUniqueID(),
      "text", 
      "ID",
      ".personal-information__form"
    );
    createCustomElementInput(
      "position-b b-f", 
      "Position",
      "Position",
      generateUniqueID(),
      "text", 
      "Position",
      ".personal-information__form"
    );
    createCustomElementInput(
      "salary-b b-f", 
      textBtnLanguageForm === 'EN' ? 'Gehaltsvorstellungen' : "Salary expectation",
      "Salary",
      generateUniqueID(),
      "number", 
      textBtnLanguageForm === 'EN' ? 'Gehaltsvorstellungen' : "Salary expectation",
      ".personal-information__form"
    );

    // Создаем поле для ввода языка
    const langInput = createCustomElementInput(
      'language-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Sprachkenntnisse' : "Language", 
      "Language",
      generateUniqueID(),
      "text",
      textBtnLanguageForm === 'EN' ? 'Sprache' : "Language",
      ".personal-information__form"
    );

    // Создаем блок для выбора уровня владения языком
    const languageblockbox = document.createElement('div');
    languageblockbox.className = 'box';
    document.querySelector('.language-b').appendChild(languageblockbox);
    const languageInput = document.querySelector('#' + langInput.getId());

    createCustomSelect(
      null,
      null,
      generateUniqueID(), 
      textBtnLanguageForm === 'EN' ? itemsLanguageDataDE : itemsLanguageDataEN,
      ".language-b .box",
      null,
      generateUniqueID(),
      textBtnLanguageForm
    );
    document.querySelector(".language-b .box").appendChild(languageInput);
    const box = document.querySelector('.language-b .box');
    const boxtrash = document.createElement('div');
    boxtrash.className = "image-container";
    boxtrash.id = generateUniqueID();
    box.prepend(boxtrash);

    // Кнопка для добавления нового языка
    const btnAddLang = document.createElement('button');
    btnAddLang.className = "language-b__btn-add-lang";
    btnAddLang.innerText = textBtnLanguageForm === 'EN' ? 'Neue Sprache hinzufügen' : "Add new language";
    document.querySelector('.language-b').prepend(btnAddLang);

    // Создаем поле для выбора доступности  
    createCustomSelect(
      "availability-b",
      textBtnLanguageForm === 'EN' ? 'Verfuegbarkeit' : "Availability",
      generateUniqueID(),
      textBtnLanguageForm === 'EN' ? itemsAvailabilityDataDE : itemsAvailabilityDataEN, 
      ".personal-information__form",
      null,
      null,
      textBtnLanguageForm
    );
    
    let previousInput = document.querySelector(".salary-b");

    // Функция для обработки изменения в селекте
    const handleSelectChange = (selectedValue) => {
      const container = document.querySelector(".personal-information__form");

      // Удаление предыдущего элемента, если он существует
      if (previousInput) {
        container.removeChild(previousInput);
      }

      // Создание нового элемента в зависимости от выбранного значения
      if (selectedValue === 'Permanent position' || selectedValue === 'Festanstellung') {
        createCustomElementInput(
          "permanent-position-b b-f", 
          textBtnLanguageForm === 'EN' ? 'Gehaltsvorstellungen' : "Salary expectation", 
          "Salary", 
          generateUniqueID(), 
          "number",
          textBtnLanguageForm === 'EN' ? '€ Jährlich Brutto' : "€ Annual gross",
          ".personal-information__form"
        );
        previousInput = document.querySelector(".permanent-position-b");
      } else if (selectedValue === 'Freelance work' || selectedValue === 'Freiberufliche Tätigkeit') {
        createCustomElementInput(
          "freelance-work-b b-f", 
          textBtnLanguageForm === 'EN' ? 'Gehaltsvorstellungen' : "Salary expectation", 
          "Salary",
          generateUniqueID(), 
          "number", 
          textBtnLanguageForm === 'EN' ? '€ Stündlich Brutto' : "€ Hourly gross",
          ".personal-information__form"
        );
        previousInput = document.querySelector(".freelance-work-b");
      }
    };
  
    // Создаем поле для выбора типа занятости
    createCustomSelect(
      "employment-b", 
      textBtnLanguageForm === 'EN' ? 'Anstellungsart' : "Employment",
      generateUniqueID(),
      textBtnLanguageForm === 'EN' ? itemsEmploymentDataDE : itemsEmploymentDataEN,
      ".personal-information__form",
      handleSelectChange,
      null,
      textBtnLanguageForm
    );

    // Обработчик события для кнопки добавления нового языка
    btnAddLang.addEventListener("click", () => {
      const newInputID = generateUniqueID();
      const newBoxID = generateUniqueID();
      const newSelectID = generateUniqueID();
    
      // Создание нового блока для языка
      const newLanguageBlock = document.createElement('div');
      newLanguageBlock.className = 'box';
      newLanguageBlock.id = newBoxID;
    
      // Добавление нового блока в родительский контейнер
      document.querySelector('.language-b').appendChild(newLanguageBlock);
      
      // Инициализация нового селекта
      createCustomSelect(
        null,
        null,
        newSelectID,
        itemsLanguageData,
        "#" + newBoxID,
        null,
        null,
        textBtnLanguageForm
      );
    
      // Создание и добавление нового input
      const newInput = document.createElement('input');
      newInput.id = newInputID;
      newInput.type = 'text';
      newInput.placeholder = textBtnLanguageForm === 'EN' ? 'Sprache' : "Language";
      newLanguageBlock.appendChild(newInput);

      // Создание кнопки удаления
      const newBoxTrash = document.createElement('div');
      newBoxTrash.className = "image-container";
      newBoxTrash.id = generateUniqueID();
      newLanguageBlock.prepend(newBoxTrash);
    
      // Добавление иконки в кнопку удаления
      newBoxTrash.appendChild(createTrashSVG());
    
      // Обработчик события для удаления блока
      newBoxTrash.addEventListener("click", () => {
        newLanguageBlock.remove();
      });
    });
  };

  // Создание раздела компетентность
  const createSectionExpertise = () => {
    divExpertiseInfo = document.createElement('div');
    divExpertiseInfo.className = 'expertise-information b-f';

    const divExpertiseInfoForm = document.createElement('div');
    divExpertiseInfoForm.className = 'expertise-information__form b-f';

    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = textBtnLanguageForm === 'EN' ? 'Kenntnisse' : 'expertise';
    
    divExpertiseInfo.appendChild(title);
    divExpertiseInfo.appendChild(divExpertiseInfoForm);
    dynamicForm.appendChild(divExpertiseInfo);
    
    // Создаем поля для ввода данных персональной информации
    highlightsTextArea = createCustomTextArea(
      "block-highlights b-f", 
      "character-count", 
      textBtnLanguageForm === 'EN' ? 'Highlights' : "Highlights", 
      "text", 
      textBtnLanguageForm === 'EN' ? "Schreiben Sie die wichtigsten Informationen über Ihre Erfahrungen und Fähigkeiten auf" : "Write down the most important information about your experience and skills",
      generateUniqueID(),
      ".expertise-information__form"
    );
    expertiseTextArea = createCustomTextArea(
      "block-expertise b-f", 
      "character-count", 
      textBtnLanguageForm === 'EN' ? 'Kentnisse' : "Expertise", 
      "text", 
      textBtnLanguageForm === 'EN' ? "Deschreiben Sie Ihre Kenntnisse im Detail" : "Describe your knowledge in detail",
      generateUniqueID(),
      ".expertise-information__form"
    );
  }

  // Создание раздела опыт 
  const createSectionExperience = (isChecked, counterForms = 0) => {
    let divExperienceInfoForm,
      btnAddSectionExperience;

    let startDateId,
      endDateId;
    
    if (counterForms === 0) {
      divExperienceInfo = document.createElement('div');
      divExperienceInfo.className = 'experience-information b-f';
  
      divExperienceInfoForm = document.createElement('div');
      divExperienceInfoForm.className = 'experience-information__form b-f';
  
      const title = document.createElement('h3');
      title.className = 'title';
      title.innerText = textBtnLanguageForm === 'EN' ? 'Berufserfahrung' : 'experience';
      
      divExperienceInfo.appendChild(title);
      divExperienceInfo.appendChild(divExperienceInfoForm);
      dynamicForm.appendChild(divExperienceInfo);
  
      startDateId = `start-date-${counterForms}`;
      endDateId = `end-date-${counterForms}`;

      createCustomElementInput(
        'position-b b-f', 
        textBtnLanguageForm === 'EN' ? 'Position*' : 'Position*', 
        'Position',
        generateUniqueID(), 
        'text',  
        textBtnLanguageForm === 'EN' ? 'Position' : 'Position',
        '.experience-information__form'
      );
      createCustomElementInput(
        'company-b b-f', 
        textBtnLanguageForm === 'EN' ? 'Firma' : 'Company', 
        'Company',
        generateUniqueID(), 
        'text',  
        textBtnLanguageForm === 'EN' ? 'Firma' : 'Company',
        '.experience-information__form',
        null,
        isChecked
      );
      createCustomSelect(
        'contract-b',
        textBtnLanguageForm === 'EN' ? 'Unter Vertrag' : 'Under contract',
        generateUniqueID(),
        itemsContractData,
        '.experience-information__form',
        null,
        null,
        textBtnLanguageForm,
        isChecked
      );
      createCustomSelect(
        'country-b',
        textBtnLanguageForm === 'EN' ? 'Land' : 'Country',
        generateUniqueID(),
        itemsConuntryData,
        '.experience-information__form',
        null,
        null,
        textBtnLanguageForm,
        isChecked
      );
      createCustomElementInput(
        "location-b b-f", 
        textBtnLanguageForm === 'EN' ? 'Ort' : "Location", 
        "Location", 
        generateUniqueID(), 
        "text", 
        textBtnLanguageForm === 'EN' ? 'Ort' : "Location", 
        ".experience-information__form",
        null,
        isChecked
      );
      createCustomElementInput(
        "date-box", 
        textBtnLanguageForm === 'EN' ? 'Daten' : "Date",
        "Start date",
        startDateId, 
        "text",
        textBtnLanguageForm === 'EN' ? 'Start' : "Start",
        ".experience-information__form" 
      );
      createCustomElementInput(
        "block-box", 
        null,
        "End date",
        endDateId, 
        "text",
        textBtnLanguageForm === 'EN' ? 'Ende' : "End",
        ".date-box" 
      );

      document
        .querySelector('.experience-information__form .date-box .block-box')
        .appendChild(createCalendarSVG(counterForms));
      document
        .querySelector('.experience-information__form .date-box .block-box')
        .appendChild(createCalendarSVG(counterForms));
      document
        .querySelector('.block-box')
        .prepend(document.querySelector(`#${startDateId}`))

      createCustomTextArea(
        "block-task b-f", 
        "character-count", 
        textBtnLanguageForm === 'EN' ? 'Ihre Aufgabe im Projekt' : "Your task in the project", 
        "text", 
        textBtnLanguageForm === 'EN' ? 'Beschreiben Sie Ihre Aufgaben und Leistungen' : "Describe your tasks and achievements",
        generateUniqueID(),
        ".experience-information__form"
      );

      const divBlockBtnAdd = document.createElement('div');
      divBlockBtnAdd.className = 'block-btn b-f'
      btnAddSectionExperience = document.createElement('button');
      btnAddSectionExperience.className = 'btn-add-section-experience';
      btnAddSectionExperience.innerText = textBtnLanguageForm === 'EN' ? 'Neue Erfahrung hinzufügen' : 'Add new experience';

      divBlockBtnAdd.appendChild(btnAddSectionExperience);
      divExperienceInfo.appendChild(divBlockBtnAdd);

      btnAddSectionExperience.addEventListener('click', () => {
        counterForms++;
        console.log(isChecked)
        createSectionExperience(isChecked, counterForms);
      });

      $(document).ready(function() {
        $(`#${startDateId}`).daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        }, function(start) {
          $(`#${startDateId}`).val(start.format('MM/YYYY'));
        });
    
        $(`#${endDateId}`).daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        }, function(end) {
          $(`#${endDateId}`).val(end.format('MM/YYYY'));
        });
    
        //Синхронизания дат
        $(`#${startDateId}`).on('apply.daterangepicker', function(ev, picker) {
          $(`#${endDateId}`).data('daterangepicker').minDate = picker.startDate;
        });
    
        $(`#${endDateId}`).on('apply.daterangepicker', function(ev, picker) {
          $(`#${startDateId}`).data('daterangepicker').maxDate = picker.endDate;
        });
      });
      
      const btnRemove = document.createElement('button');
      btnRemove.className = 'btn-remove-section b-f';
      btnRemove.innerText = textBtnLanguageForm === 'EN' ? 'Position löschen' : 'Delete position';

      btnRemove.appendChild(createTrashSVG())
      divExperienceInfoForm.prepend(btnRemove)

      // Обработчик события для удаления блока
      btnRemove.addEventListener("click", () => {
        divExperienceInfoForm.remove();
      });
    } else {
      divExperienceInfo = document.querySelector('.experience-information');
      divExperienceInfoForm = document.createElement('div');
      divExperienceInfoForm.className = `experience-information__form form-${counterForms} b-f`;

      divExperienceInfo.appendChild(divExperienceInfoForm);

      startDateId = `start-date-${counterForms}`;
      endDateId = `end-date-${counterForms}`;
      createCustomElementInput(
        'position-b b-f', 
        textBtnLanguageForm === 'EN' ? 'Position*' : 'Position*', 
        'Position',
        generateUniqueID(), 
        'text',  
        textBtnLanguageForm === 'EN' ? 'Position' : 'Position',
        `.experience-information__form.form-${counterForms}`
      );
      createCustomElementInput(
        'company-b b-f', 
        textBtnLanguageForm === 'EN' ? 'Firma' : 'Company', 
        'Company',
        generateUniqueID(), 
        'text',  
        textBtnLanguageForm === 'EN' ? 'Firma' : 'Company',
        `.experience-information__form.form-${counterForms}`,
        null,
        isChecked
      );
      createCustomSelect(
        'contract-b',
        textBtnLanguageForm === 'EN' ? 'Unter Vertrag' : 'Under contract',
        generateUniqueID(),
        itemsContractData,
        `.experience-information__form.form-${counterForms}`,
        null,
        null,
        textBtnLanguageForm,
        isChecked
      );
      createCustomSelect(
        'country-b',
        textBtnLanguageForm === 'EN' ? 'Land' : 'Country',
        generateUniqueID(),
        itemsConuntryData,
        `.experience-information__form.form-${counterForms}`,
        null,
        null,
        textBtnLanguageForm,
        isChecked
      );
      createCustomElementInput(
        "location-b b-f", 
        textBtnLanguageForm === 'EN' ? 'Ort' : "Location", 
        "Location", 
        generateUniqueID(), 
        "text", 
        textBtnLanguageForm === 'EN' ? 'Ort' : "Location", 
        `.experience-information__form.form-${counterForms}`,
        null,
        isChecked
      );
      createCustomElementInput(
        "date-box", 
        textBtnLanguageForm === 'EN' ? 'Daten' : "Date",
        "Start date",
        startDateId, 
        "text",
        textBtnLanguageForm === 'EN' ? 'Start' : "Start",
        `.experience-information__form.form-${counterForms}`
      );
      createCustomElementInput(
        "block-box", 
        null,
        "End date",
        endDateId, 
        "text",
        textBtnLanguageForm === 'EN' ? 'Ende' : "End",
        `.experience-information__form.form-${counterForms} .date-box`
      );
      document
        .querySelector(`.experience-information__form.form-${counterForms} .date-box .block-box`)
        .appendChild(createCalendarSVG(counterForms));
      document
        .querySelector(`.experience-information__form.form-${counterForms} .date-box .block-box`)
        .appendChild(createCalendarSVG(counterForms));
      document
        .querySelector(`.experience-information__form.form-${counterForms} .date-box .block-box`)
        .prepend(
          document.querySelector(`#${startDateId}`)
        );
      createCustomTextArea(
        "block-task b-f", 
        "character-count", 
        textBtnLanguageForm === 'EN' ? 'Ihre Aufgabe im Projekt' : "Your task in the project", 
        "text", 
        textBtnLanguageForm === 'EN' ? 'Beschreiben Sie Ihre Aufgaben und Leistungen' : "Describe your tasks and achievements",
        generateUniqueID(),
        `.experience-information__form.form-${counterForms}`
      );

      //Create date to work
      $(document).ready(function() {
        $(`#${startDateId}`).daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        }, function(start) {
          $(`#${startDateId}`).val(start.format('MM/YYYY'));
        });
    
        $(`#${endDateId}`).daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        }, function(end) {
          $(`#${endDateId}`).val(end.format('MM/YYYY'));
        });
    
        //Синхронизания дат
        $(`#${startDateId}`).on('apply.daterangepicker', function(ev, picker) {
          $(`#${endDateId}`).data('daterangepicker').minDate = picker.startDate;
        });
    
        $(`#${endDateId}`).on('apply.daterangepicker', function(ev, picker) {
          $(`#${startDateId}`).data('daterangepicker').maxDate = picker.endDate;
        });
      });

      const btnRemove = document.createElement('button');
      btnRemove.className = 'btn-remove-section b-f';
      btnRemove.innerText = textBtnLanguageForm === 'EN' ? 'Position löschen' : 'Delete position';

      btnRemove.appendChild(createTrashSVG())
      divExperienceInfoForm.prepend(btnRemove)
      
      // Обработчик события для удаления блока
      btnRemove.addEventListener("click", () => {
        divExperienceInfoForm.remove();
      });
    }
  }

  // Создание раздел образование
  const createSectionEducation = () => {
    divEducationInfo = document.createElement('div');
    divEducationInfo.className = 'education-information b-f';

    const divEducationInfoForm = document.createElement('div');
    divEducationInfoForm.className = 'education-information__form b-f';

    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = textBtnLanguageForm === 'EN' ? 'Ausbildung' : 'education';
    
    divEducationInfo.appendChild(title);
    divEducationInfo.appendChild(divEducationInfoForm);
    dynamicForm.appendChild(divEducationInfo);

    createCustomElementInput(
      'grade-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Grade' : 'Grade', 
      'Grade',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Grade' : 'Grade',
      '.education-information__form'
    );
    createCustomElementInput(
      'university-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Hochschule' : 'University', 
      'University',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Hochschule' : 'University',
      '.education-information__form'
    );
    startDateEducation = createCustomElementInput(
      "date-box", 
      textBtnLanguageForm === 'EN' ? 'Zeitraum' : "Period",
      "Start date",
      generateUniqueID(), 
      "text",
      textBtnLanguageForm === 'EN' ? 'Start' : "Start",
      ".education-information__form" 
    );
    endDateEducation = createCustomElementInput(
      "block-box", 
      null,
      "End date",
      generateUniqueID(), 
      "text",
      textBtnLanguageForm === 'EN' ? 'Ende' : "End",
      ".education-information__form .date-box"
    );
  
    document
      .querySelector('.education-information__form .date-box .block-box')
      .appendChild(createCalendarSVG(counterForms));
    document
      .querySelector('.education-information__form .date-box .block-box')
      .appendChild(createCalendarSVG(counterForms));
    document
      .querySelector('.education-information__form .block-box')
      .prepend(document.querySelector(`#${startDateEducation.getId()}`))

    createCustomElementInput(
      'center-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Schwerpunkte' : 'Center', 
      'Center',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Schwerpunkte' : 'Center',
      '.education-information__form'
    );
    createCustomElementInput(
      'position-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Abschlussarbeit' : 'Position', 
      'Position',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Abschlussarbeit' : 'Position',
      '.education-information__form'
    );
    
    $(document).ready(function() {
      $(`#${startDateEducation.getId()}`).daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        locale: {
          cancelLabel: 'Clear'
        }
      }, function(start) {
        $(`#${startDateEducation.getId()}`).val(start.format('MM/YYYY'));
      });
  
      $(`#${endDateEducation.getId()}`).daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        locale: {
          cancelLabel: 'Clear'
        }
      }, function(end) {
        $(`#${endDateEducation.getId()}`).val(end.format('MM/YYYY'));
      });
  
      //Синхронизания дат
      $(`#${startDateEducation.getId()}`).on('apply.daterangepicker', function(ev, picker) {
        $(`#${endDateEducation.getId()}`).data('daterangepicker').minDate = picker.startDate;
      });
  
      $(`#${endDateEducation.getId()}`).on('apply.daterangepicker', function(ev, picker) {
        $(`#${startDateEducation.getId()}`).data('daterangepicker').maxDate = picker.endDate;
      });
    });
  }

  // Создание раздела квалификация
  const createSectionQualifications = () => {
    divQualificationsInfo = document.createElement('div');
    divQualificationsInfo.className = 'qualification-information b-f';

    const divQualificationsInfoForm = document.createElement('div');
    divQualificationsInfoForm.className = 'qualification-information__form b-f';

    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = textBtnLanguageForm === 'EN' ? 'Qualifikationen' : 'Qualifications';
    
    divQualificationsInfo.appendChild(title);
    divQualificationsInfo.appendChild(divQualificationsInfoForm);
    dynamicForm.appendChild(divQualificationsInfo);

    createCustomElementInput(
      'name-school-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Name' : 'Name', 
      'Name',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Name' : 'Name',
      '.qualification-information__form'
    );
    createCustomElementInput(
      'school-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Schule' : 'School', 
      'School',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Schule' : 'School',
      '.qualification-information__form'
    );
    createCustomElementInput(
      'certificate-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Zertifikat' : 'Certificate', 
      'Certificate',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Zertifikat' : 'Certificate',
      '.qualification-information__form'
    );
    dateQualification = createCustomElementInput(
      'qualification-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Ausgestellt' : 'Date', 
      'Date',
      generateUniqueID(), 
      'text',  
      textBtnLanguageForm === 'EN' ? 'Ausgestellt' : 'Date',
      '.qualification-information__form'
    );

    document
      .querySelector('.qualification-b')
      .appendChild(createCalendarSVG(counterForms));

    $(document).ready(function() {
      const inputId = `#${dateQualification.getId()}`;
      $(inputId).daterangepicker({
        autoUpdateInput: false
      });
    
      $(inputId).on('apply.daterangepicker', function(ev, picker) {
        const startDate = picker.startDate.format('MM/YYYY');
        const endDate = picker.endDate.format('MM/YYYY');
        $(this).val(startDate + ' - ' + endDate);
      });
    });
  }

  // Создание раздела рекрутер
  const createSectionRecruiter = () => {
    divRecruiterInfo = document.createElement('div');
    divRecruiterInfo.className = 'recruiter-information b-f';

    const divRecruiterInfoForm = document.createElement('div');
    divRecruiterInfoForm.className = 'recruiter-information__form b-f';

    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = textBtnLanguageForm === 'EN' ? 'Personalvermittlerinfo' : 'recruiter information';
    
    divRecruiterInfo.appendChild(title);
    divRecruiterInfo.appendChild(divRecruiterInfoForm);
    dynamicForm.appendChild(divRecruiterInfo);

    createCustomElementInput(
      'candidate-name-b b-f', 
      textBtnLanguageForm === 'EN' ? 'Personalvermittler' : 'Recruiter', 
      'Name',
      generateUniqueID(), 
      'text',  
      'Name',
      '.recruiter-information__form'
    );
  }
  document.addEventListener('DOMContentLoaded', function() {
    divRecruiterInfo.appendChild(checkboxDisclamerForm);
    divRecruiterInfo.appendChild(checkboxAnonymousForm);
  })
  const createForm = (isChecked = false) => {
    createSectionPersonalInformation(isChecked);
    createSectionExpertise(isChecked);
    createSectionExperience(isChecked);
    createSectionEducation(isChecked);
    createSectionQualifications(isChecked);
    createSectionRecruiter(isChecked);
  }
  createForm();
  // Создание кнопки для отправки формы
  submitButton = document.createElement('button');
  submitButton.innerText = textBtnLanguageForm === 'EN' ? 'als PDF speichern' : 'save as PDF';
  submitButton.className = 'submit-button';

  dynamicForm.appendChild(submitButton);
  
  btnChangeLanguageForm.addEventListener("click", () => {
    textBtnLanguageForm = textBtnLanguageForm === 'EN' ? 'DE' : 'EN';
    btnChangeLanguageForm.innerText = textBtnLanguageForm;
    const isCheckedDisclaimer = checkboxDisclamer.classList.contains('checked');
    if (textBtnLanguageForm === 'DE') {
      messageByDisclaimer.innerText = textBtnLanguageForm === 'EN' ? 'Disclaimer hinzufügen' : 'Add disclaimer';
      messageByAnon.innerText = textBtnLanguageForm === 'EN' ? 'Erstellen Sie auch ein anonymes Profil' : 'Make also an anonymous profile';
      divPersonalInfo.remove();
      divExpertiseInfo.remove();
      divExperienceInfo.remove();
      divQualificationsInfo.remove();
      divEducationInfo.remove();
      divRecruiterInfo.remove();
      createForm(isChecked);
      submitButton.innerText = 'save as PDF';
      divRecruiterInfo.appendChild(checkboxDisclamerForm);
      divRecruiterInfo.appendChild(checkboxAnonymousForm);
      if (isCheckedDisclaimer) {
        createCustomTextArea(
          "block-disclaimer b-f", 
          "character-count", 
          null, 
          "text", 
          null,
          generateUniqueID(),
          '.recruiter-information'
        );
      }
      if (document.querySelector('.block-disclaimer .block__box textarea')) {
        document.querySelector('.block-disclaimer .block__box textarea').value = textBtnLanguageForm === 'EN' ? textDisclaimerDE : textDisclaimerEN;
      }
    } else {
      messageByDisclaimer.innerText = textBtnLanguageForm === 'EN' ? 'Disclaimer hinzufügen' : 'Add disclaimer';
      messageByAnon.innerText = textBtnLanguageForm === 'EN' ? 'Erstellen Sie auch ein anonymes Profil' : 'Make also an anonymous profile';
      divPersonalInfo.remove();
      divExpertiseInfo.remove();
      divExperienceInfo.remove();
      divQualificationsInfo.remove();
      divEducationInfo.remove();
      divRecruiterInfo.remove();
      createForm(isChecked);
      submitButton.innerText = 'als PDF speichern';
      divRecruiterInfo.appendChild(checkboxDisclamerForm);
      divRecruiterInfo.appendChild(checkboxAnonymousForm);
      if (isCheckedDisclaimer) {
        createCustomTextArea(
          "block-disclaimer b-f", 
          "character-count", 
          null, 
          "text", 
          null,
          generateUniqueID(),
          '.recruiter-information'
        );
      }
      if (document.querySelector('.block-disclaimer .block__box textarea')) {
        document.querySelector('.block-disclaimer .block__box textarea').value = textBtnLanguageForm === 'EN' ? textDisclaimerDE : textDisclaimerEN;
      }
    }
  })

  // Обработчик события для отправки формы
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Создание объекта с данными из формы
    const formData = {
      personalInformation: {
        name: document.querySelector('.name-b input').value,
        location: document.querySelector('.location-b input').value,
        id: document.querySelector('.id-b input').value,
        position: document.querySelector('.position-b input').value,
        availability: document.querySelector('.availability-b .selected-value').textContent,
        salary: document.querySelector('.permanent-position-b') 
          ? {
            "€ Annual gross": document.querySelector('.permanent-position-b input').value
          } : { 
            "€ Hourly gross": document.querySelector('.freelance-work-b input').value
          },
        languages: [],
      },
      
      expertise: {
        highlight: document.querySelector(`#${highlightsTextArea.id}`).value,
        expertise: document.querySelector(`#${expertiseTextArea.id}`).value,
      },

      experience: [],

      education: {
        grade: document.querySelector('.grade-b input').value,
        university: document.querySelector('.university-b input').value,
        startDate: document.querySelector(`#${startDateEducation.getId()}`).value,
        endDate: document.querySelector(`#${endDateEducation.getId()}`).value,
        center: document.querySelector('.center-b input').value,
        position: document.querySelector('.education-information__form .position-b input').value,
      },

      qualifications: {
        name: document.querySelector('.qualification-information__form .name-school-b input').value,
        school: document.querySelector('.school-b input').value,
        certificate: document.querySelector('.certificate-b input').value,
        date: document.querySelector(`#${dateQualification.getId()}`).value,
      },
      
      recruiter: {
        recruitersName: document.querySelector('.candidate-name-b input').value,
        // candidatesId: document.querySelector('.candidate-id-b input').value,
      },

      disclaimer: document.querySelector('.block-disclaimer .block__box textarea') ? document.querySelector('.block-disclaimer .block__box textarea').value : ''
    };

    // Добавление языков в объект
    const languageBlocks = document.querySelectorAll('.language-b .box');
    languageBlocks.forEach(block => {
      const language = block.querySelector('input[type="text"]').value;
      const proficiency = block.querySelector('.selected-value').textContent;
      formData.personalInformation.languages.push({ language, proficiency });
    });

    // Добавление опыта работы в объект
    document.querySelectorAll('.experience-information__form').forEach((form, index) => {
      const experienceData = {
        formNumber: ++index,
        position: form.querySelector('.position-b input') ? form.querySelector('.position-b input').value : '',
        company: form.querySelector('.company-b input') && !isChecked ? form.querySelector('.company-b input').value : '',
        underContract: form.querySelector('.contract-b .selected-value') && !isChecked ? form.querySelector('.contract-b .selected-value').textContent : '',
        country: form.querySelector('.country-b .selected-value') && !isChecked ? form.querySelector('.country-b .selected-value').textContent : '',
        location: form.querySelector('.location-b input') && !isChecked ? form.querySelector('.location-b input').value : '',
        startDate: form.querySelector(`#start-date-${index - 1}`) ? form.querySelector(`#start-date-${index - 1}`).value : '',
        endDate: form.querySelector(`#end-date-${index - 1}`) ? form.querySelector(`#end-date-${index - 1}`).value : '',
        taskDescription: form.querySelector('.block-task textarea') ? form.querySelector('.block-task textarea').value : ''
      };
      formData.experience.push(experienceData);
    });

    console.log(formData);
    // Отправка данных на сервер
    fetch('generate_pdf.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        window.location.href = 'generated_pdf/document.pdf';
      }
    })
    .catch(error => console.error('Error:', error));
    })
}

if (cvUrl.includes(currentPageUrl)) {
  createForm()
}