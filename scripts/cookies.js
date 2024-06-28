const $ = window.jQuery;

const bntConfirm = $(".cookies__btn-confirm");
const btnSettings = $(".cookies__btn-settings");
const btnAccept = $(".cookies__btn-accept");
const cookieElement = $(".cookies");
const cookiesApprove = Cookies.get("value");
const COOKIE_NAME = "cookieBlockShown";
const titleMain = $(".cookies__title-main");
const titleSecond = $(".cookies__title-second");
const textMain = $(".cookies__text-main");
const textSecond = $(".cookies__text-second");
const settingsElement = $(".cookies__settings");
const necessaryElement = $("#necessary");
const analyzedElement = $("#analyzed");
const switcher = $("#switcher");
const enabledText = $(".block-right__enabled");
const disabledText = $(".block-right__disabled");
const switcherO = $(".switcher-o");

if (!cookiesApprove) {
  cookieElement.css("display", "flex");
}

const showCookieBlock = () => {
  cookieElement.css("display", "flex");
};

const hideCookieBlock = () => {
  cookieElement.css("display", "none");
};

// Проверяем Cookies при загрузке страницы
$(document).ready(() => {
  const isCookieBlockShown = Cookies.get(COOKIE_NAME);
  if (!isCookieBlockShown) {
    showCookieBlock();
  } else {
    hideCookieBlock();
  }
});

// Функция для сохранения состояния блока cookie в Cookies
const saveCookieBlockState = (isShown) => {
  Cookies.set(COOKIE_NAME, isShown);
};

const acceptCookie = () => {
  Cookies.set("value", true);
  saveCookieBlockState(false); // Блок cookie не будет отображаться после подтверждения
  hideCookieBlock();
};

const settingsCookie = () => {
  titleMain.css("display", "none");
  titleSecond.css("display", "flex");
  textMain.css("display", "none");
  textSecond.css("display", "block");
  settingsElement.css("display", "flex");
  btnSettings.css("display", "none");
  bntConfirm.css("display", "none");
  btnAccept.css("display", "flex");
}

necessaryElement.on("click", () => {
  if (necessaryElement.next().hasClass("active")) {
    necessaryElement.next().removeClass("active");
    settingsElement.css("gap", "16px");
  } else {
    necessaryElement.next().addClass("active");
    settingsElement.css("gap", "0");
  }
});

analyzedElement.on("click", (event) => {
  event.stopPropagation();
  analyzedElement.next().toggleClass("active");
});

bntConfirm.on("click", () => acceptCookie());
btnAccept.on("click", () => acceptCookie());
btnSettings.on("click", () => settingsCookie());

switcher.on("click", (event) => {
  event.stopPropagation();

  const styleDisabledSwitcher = {
    "background": "white",
    "border": "1px solid grey",
  }

  const styleDisabledSwitcherO = {
    "border": "1px solid grey",
    "margin-left": "0px"
  }

  const styleEnabledSwitcher = {
    "background": "#32E77A",
    "border": "none",
  }

  const styleEnabledSwitcherO = {
    "margin-left": "24px",
    "border": "none",
  }

  switcher.toggleClass("disabled");
  if (!switcher.hasClass("disabled")) {
    switcherO.css(styleEnabledSwitcherO);
    switcher.css(styleEnabledSwitcher)
  } else {
    switcherO.css(styleDisabledSwitcherO);
    switcher.css(styleDisabledSwitcher);
  }

  if (!switcher.hasClass("disabled")) {
    enabledText.css("display", "inline");
    disabledText.css("display", "none");
  } else {
    enabledText.css("display", "none");
    disabledText.css("display", "inline");
  }
});