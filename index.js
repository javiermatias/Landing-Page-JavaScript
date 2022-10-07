

  // When the page content is ready...
document.addEventListener("DOMContentLoaded", async() => {
    document.getElementById("loading").style.display = "none"; 
    const initialLocale = supportedOrDefault(browserLocales(true));
    await setLocale(initialLocale,"index");
    bindLocaleSwitcher(initialLocale);
});

