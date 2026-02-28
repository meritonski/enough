const STORAGE_LANG = "enough_site_lang";
const STORAGE_THEME = "enough_site_theme";

const i18n = {
  sv: {
    nav_support: "Support",
    nav_privacy: "Integritet",
    nav_terms: "Villkor",
    lang_label: "SV",
    theme_label: "Mörkt",

    footer_note: "© Enough. Alla rättigheter förbehållna.",

    home_kicker: "Officiell sida för",
    home_title: "Support, integritet & villkor",
    home_lead: "Här hittar du hjälp, kontakt och policys som Apple kräver för appen Enough.",
    home_cta_primary: "Få support",
    home_cta_secondary: "Läs integritet",
    home_card_support_title: "Support",
    home_card_support_desc: "Vanliga frågor, kontakt, återställning.",
    home_card_privacy_title: "Integritet",
    home_card_privacy_desc: "Hur data hanteras, spårning, lagring.",
    home_card_terms_title: "Villkor",
    home_card_terms_desc: "Användarvillkor + Apple Standard EULA.",
    home_aside_title: "Snabb info",
    home_aside_point1: "Supportmail & svarstid",
    home_aside_point2: "Integritetspolicy enligt App Store-krav",
    home_aside_point3: "Villkor inklusive Apple Standard EULA",
    home_aside_version_label: "Dokument uppdaterade",
    home_aside_note: "Tips: Lägg dessa länkar i App Store Connect under “App Privacy” och “Support URL”.",
    home_section_title: "Det du behöver (Apple-klart)",
    home_section_lead: "Tre sidor, tydliga länkar, enkel att hålla uppdaterad.",
    home_tile1_title: "Support",
    home_tile1_body: "Kontakt, FAQ, återställning av köp, widgets, notiser.",
    home_tile2_title: "Integritet",
    home_tile2_body: "Vad som samlas in, vad som inte samlas in, lagring.",
    home_tile3_title: "Villkor",
    home_tile3_body: "Användning, ansvar, abonnemang, Apple EULA-länk.",
    home_tile_link: "Öppna →",

    support_title: "Support",
    support_lead: "Vi hjälper dig snabbt. Här finns FAQ + kontakt.",
    support_cta_email: "Mejla support",
    support_cta_refund: "Fråga om återbetalning",
    support_email_note: "Byt e-postadressen i filen support.html innan du publicerar.",
    support_faq_title: "Vanliga frågor",
    support_faq_lead: "Snabba svar på det vanligaste.",
    support_q1: "Notiser kommer inte",
    support_a1: "Kontrollera i iOS-inställningar att notiser är aktiverade för Enough. Öppna appen och välj tider i Påminnelser.",
    support_q2: "Hur återställer jag köp?",
    support_a2: "På paywall-sidan: tryck “Återställ”. Du måste vara inloggad med samma Apple-ID som köpet gjordes med.",
    support_q3: "Widgets uppdateras inte",
    support_a3: "Prova att öppna appen en gång, byt affirmation och vänta någon minut. Du kan även ta bort och lägga till widgeten igen.",
    support_q4: "Hur säger jag upp abonnemang?",
    support_a4: "Abonnemang hanteras via Apple. Gå till Inställningar → Apple-ID → Abonnemang och välj Enough.",
    support_contact_title: "Kontakt",
    support_contact_body: "Skicka gärna med: iOS-version, modell, appversion och en skärmbild om det går.",
    support_contact_sla: "Svarstid:",
    support_contact_sla_value: "inom 1–3 arbetsdagar",

    privacy_title: "Integritetspolicy",
    privacy_lead: "Enough är byggd för att vara enkel och integritetsvänlig. Här förklarar vi hur data hanteras.",
    doc_updated: "Uppdaterad",
    doc_contact: "Kontakt",
    privacy_collect_title: "Vad vi samlar in",
    privacy_collect_1: "App-inställningar (t.ex. valda teman/påminnelser) lagras lokalt på enheten.",
    privacy_collect_2: "Om du aktiverar plats för “Auto-väder”, används plats endast för att hämta väder (ingen profilering).",
    privacy_collect_3: "Köp/abonnemang hanteras av Apple (StoreKit). Vi ser inte dina betalningsuppgifter.",
    privacy_not_collect_title: "Vad vi INTE samlar in",
    privacy_not_collect_1: "Vi säljer inte data.",
    privacy_not_collect_2: "Vi spårar inte dig över appar/webbplatser för annonsering.",
    privacy_not_collect_3: "Vi samlar inte in känsliga personuppgifter för funktionalitet som inte kräver det.",
    privacy_location_title: "Plats (valfritt)",
    privacy_location_body: "Om du väljer “Auto” för väder/mood kan appen begära platsåtkomst. Platsen används endast för att hämta aktuell väderkod via en vädertjänst. Du kan när som helst stänga av plats i iOS-inställningar och välja en stad manuellt.",
    privacy_notifications_title: "Notiser",
    privacy_notifications_body: "Notiser schemaläggs lokalt på din enhet. Vi skickar inte push-notiser från server om du inte uttryckligen bygger in det senare.",
    privacy_third_party_title: "Tredje parter",
    privacy_third_party_body: "För abonnemang används Apples StoreKit. För väder kan en extern väder-API användas. Dessa tjänster kan behandla tekniska data som krävs för att leverera svaret (t.ex. IP-adress enligt deras drift). Vi använder inte detta för profilering.",
    privacy_rights_title: "Dina val",
    privacy_rights_1: "Du kan stänga av plats och notiser när som helst i iOS-inställningar.",
    privacy_rights_2: "Du kan ta bort appen för att radera lokala inställningar på enheten.",

    terms_title: "Villkor",
    terms_lead: "Dessa villkor reglerar användningen av appen Enough.",
    terms_eula_title: "Apple Standard EULA",
    terms_eula_body: "Om du inte tillhandahåller egna, anpassade villkor gäller Apples Standard EULA.",
    terms_eula_link: "Öppna Apple Standard EULA",
    terms_use_title: "Användning",
    terms_use_1: "Du får använda appen för personligt bruk enligt tillämpliga lagar.",
    terms_use_2: "Du får inte missbruka appen, försöka kringgå begränsningar eller störa tjänsten.",
    terms_sub_title: "Abonnemang",
    terms_sub_body: "Abonnemang hanteras av Apple. Priser, provperioder och förnyelsevillkor visas i App Store innan köp.",
    terms_liability_title: "Ansvarsbegränsning",
    terms_liability_body: "Appen tillhandahålls i befintligt skick. Vi ansvarar inte för indirekta skador eller förlust av data.",
    terms_changes_title: "Ändringar",
    terms_changes_body: "Vi kan uppdatera dessa villkor. Datum för senaste uppdatering visas högst upp på sidan."
  },

  en: {
    nav_support: "Support",
    nav_privacy: "Privacy",
    nav_terms: "Terms",
    lang_label: "EN",
    theme_label: "Dark",

    footer_note: "© Enough. All rights reserved.",

    home_kicker: "Official pages for",
    home_title: "Support, privacy & terms",
    home_lead: "Get help, contact info, and the policies Apple requires for Enough.",
    home_cta_primary: "Get support",
    home_cta_secondary: "Read privacy",
    home_card_support_title: "Support",
    home_card_support_desc: "FAQ, contact, purchases, troubleshooting.",
    home_card_privacy_title: "Privacy",
    home_card_privacy_desc: "How data is handled, tracking, storage.",
    home_card_terms_title: "Terms",
    home_card_terms_desc: "Terms + Apple Standard EULA.",
    home_aside_title: "Quick info",
    home_aside_point1: "Support email & response time",
    home_aside_point2: "App Store compliant privacy policy",
    home_aside_point3: "Terms including Apple Standard EULA",
    home_aside_version_label: "Documents updated",
    home_aside_note: "Tip: Add these links in App Store Connect under “App Privacy” and “Support URL”.",
    home_section_title: "What you need (Apple-ready)",
    home_section_lead: "Three pages, clear links, easy to maintain.",
    home_tile1_title: "Support",
    home_tile1_body: "Contact, FAQ, restore purchases, widgets, notifications.",
    home_tile2_title: "Privacy",
    home_tile2_body: "What we collect, what we don't, storage.",
    home_tile3_title: "Terms",
    home_tile3_body: "Use, liability, subscriptions, Apple EULA link.",
    home_tile_link: "Open →",

    support_title: "Support",
    support_lead: "We’ll help you fast. FAQ + contact below.",
    support_cta_email: "Email support",
    support_cta_refund: "Ask about refunds",
    support_email_note: "Replace the email address in support.html before publishing.",
    support_faq_title: "FAQ",
    support_faq_lead: "Quick answers to common issues.",
    support_q1: "Notifications are not arriving",
    support_a1: "Check iOS settings to ensure notifications are enabled for Enough. Open the app and set your schedule in Reminders.",
    support_q2: "How do I restore purchases?",
    support_a2: "On the paywall: tap “Restore”. You must use the same Apple ID that purchased the subscription.",
    support_q3: "Widgets do not update",
    support_a3: "Open the app once, change the affirmation and wait a minute. You can also remove and re-add the widget.",
    support_q4: "How do I cancel subscription?",
    support_a4: "Subscriptions are managed by Apple. Go to Settings → Apple ID → Subscriptions and select Enough.",
    support_contact_title: "Contact",
    support_contact_body: "Please include: iOS version, device model, app version, and screenshots if possible.",
    support_contact_sla: "Response time:",
    support_contact_sla_value: "within 1–3 business days",

    privacy_title: "Privacy Policy",
    privacy_lead: "Enough is designed to be simple and privacy-friendly. Here’s how data is handled.",
    doc_updated: "Updated",
    doc_contact: "Contact",
    privacy_collect_title: "What we collect",
    privacy_collect_1: "App settings (themes/reminders) are stored locally on your device.",
    privacy_collect_2: "If you enable location for “Auto weather”, it’s used only to fetch weather (no profiling).",
    privacy_collect_3: "Purchases/subscriptions are handled by Apple (StoreKit). We do not see payment details.",
    privacy_not_collect_title: "What we do NOT collect",
    privacy_not_collect_1: "We do not sell data.",
    privacy_not_collect_2: "We do not track you across apps/sites for advertising.",
    privacy_not_collect_3: "We do not collect sensitive personal data unless required for a feature you use.",
    privacy_location_title: "Location (optional)",
    privacy_location_body: "If you choose “Auto” for weather/mood, the app may request location permission. Location is used only to fetch a weather code via a weather service. You can disable location anytime and choose a city manually.",
    privacy_notifications_title: "Notifications",
    privacy_notifications_body: "Notifications are scheduled locally on your device. We do not send server push notifications unless you explicitly add that later.",
    privacy_third_party_title: "Third parties",
    privacy_third_party_body: "Subscriptions use Apple’s StoreKit. Weather may use a third-party API. Those services may process technical data necessary to deliver responses (e.g., IP for operations). We do not use this for profiling.",
    privacy_rights_title: "Your choices",
    privacy_rights_1: "You can disable location and notifications anytime in iOS settings.",
    privacy_rights_2: "You can delete the app to remove local settings on your device.",

    terms_title: "Terms",
    terms_lead: "These terms govern the use of the Enough app.",
    terms_eula_title: "Apple Standard EULA",
    terms_eula_body: "If you do not provide custom terms, Apple’s Standard EULA applies.",
    terms_eula_link: "Open Apple Standard EULA",
    terms_use_title: "Use",
    terms_use_1: "You may use the app for personal use in compliance with applicable laws.",
    terms_use_2: "You may not abuse the app, circumvent restrictions, or interfere with the service.",
    terms_sub_title: "Subscriptions",
    terms_sub_body: "Subscriptions are managed by Apple. Pricing, trial periods, and renewal terms are shown in the App Store before purchase.",
    terms_liability_title: "Limitation of liability",
    terms_liability_body: "The app is provided as-is. We are not liable for indirect damages or data loss.",
    terms_changes_title: "Changes",
    terms_changes_body: "We may update these terms. The latest update date is shown at the top of the page."
  }
};

function preferredLang(){
  const saved = localStorage.getItem(STORAGE_LANG);
  if(saved === "sv" || saved === "en") return saved;
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("sv") ? "sv" : "en";
}

function preferredTheme(){
  const saved = localStorage.getItem(STORAGE_THEME);
  if(saved === "light" || saved === "dark") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang]?.[key];
    if(typeof value === "string") el.textContent = value;
  });

  // Update button label
  const langLabel = document.querySelector('[data-action="toggle-lang"] [data-i18n="lang_label"]');
  if(langLabel) langLabel.textContent = (lang === "sv") ? "SV" : "EN";

  // Update theme label based on current theme + language
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  const themeLabel = document.querySelector('[data-action="toggle-theme"] [data-i18n="theme_label"]');
  if(themeLabel){
    themeLabel.textContent = (lang === "sv")
      ? (theme === "light" ? "Ljust" : "Mörkt")
      : (theme === "light" ? "Light" : "Dark");
  }
}

function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  const lang = document.documentElement.lang || "en";
  const themeLabel = document.querySelector('[data-action="toggle-theme"] [data-i18n="theme_label"]');
  if(themeLabel){
    themeLabel.textContent = (lang === "sv")
      ? (theme === "light" ? "Ljust" : "Mörkt")
      : (theme === "light" ? "Light" : "Dark");
  }
}

function init(){
  const lang = preferredLang();
  const theme = preferredTheme();
  applyTheme(theme);
  applyLang(lang);

  document.querySelectorAll("[data-action]").forEach(btn=>{
    const action = btn.getAttribute("data-action");
    btn.addEventListener("click", ()=>{
      if(action === "toggle-lang"){
        const current = document.documentElement.lang || "en";
        const next = current === "sv" ? "en" : "sv";
        localStorage.setItem(STORAGE_LANG, next);
        applyLang(next);
      }
      if(action === "toggle-theme"){
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_THEME, next);
        applyTheme(next);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
