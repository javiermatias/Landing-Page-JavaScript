const defaultLocale = "es";
// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};

let page="index";
const supportedLocales = ["en", "es"];


async function setLocale(newLocale,folder) {
    if (newLocale === locale) return;
    const newTranslations =
    await fetchTranslationsFor(newLocale,folder);
    page = folder;
    locale = newLocale;
    translations = newTranslations;
    translatePage();
  }

  // Retrieve translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale,folder) {
    const response = await fetch(`/lang/${folder}/${newLocale}.json`);
    return await response.json();
}

// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
    document
      .querySelectorAll("[data-i18n-key]")
      .forEach(translateElement);
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[key];
    element.innerText = translation;
  }


  function bindLocaleSwitcher(initialValue) {
    const switcher =
      document.querySelector("[data-i18n-switcher]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
      // Set the locale to the selected option[value]
      setLocale(e.target.value, page);
    };
  }

  function browserLocales(languageCodeOnly = false) {
    return navigator.languages.map((locale) =>
      languageCodeOnly ? locale.split("-")[0] : locale,
    );
  }



  function isSupported(locale) {
    return supportedLocales.indexOf(locale) > -1;
  }
  // Retrieve the first locale we support from the given
  // array, or return our default locale
  function supportedOrDefault(locales) {
    return locales.find(isSupported) || defaultLocale;
  }