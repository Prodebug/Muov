/**
 * Muov — i18n + форма заказа (Web3Forms)
 * Языки: RU / EN / FR / HY
 */

const I18N = {
  ru: {
    meta: {
      title: "Muov — сайты под ключ во Франции",
      description:
        "Muov — разработка современных сайтов под ключ во Франции. Чистый код HTML, CSS, JS, PHP, SQL. Без конструкторов.",
    },
    nav: { contact: "Связаться" },
    hero: {
      eyebrow: "Студия · France · Remote",
      title: "Разработка современных сайтов под ключ во Франции",
      lead: "Проектирую и собираю быстрые сайты на чистом коде. Работаю удалённо по всей стране — от брифа до готового архива для вашего хостинга.",
      cta: "Оставить заявку",
      hint: "Ответ в течение рабочего дня",
    },
    about: {
      kicker: "01 — О бренде",
      title: "Чистый код вместо конструкторов",
      p1: "Бренд Muov создаёт быстрые и качественные сайты на чистом коде — HTML, CSS, JavaScript, PHP и SQL. Без медленных конструкторов, которые раздувают страницу, ограничивают вёрстку и ломаются при обновлении.",
      p2: "Каждый проект собирается вручную: вы получаете прозрачный код, контроль над файлами и сайт, который не зависит от чужих шаблонов.",
      deliveryTitle: "Формат сдачи",
      delivery:
        "Клиент получает полностью готовый к работе .zip-архив со всеми файлами сайта и базой данных — остаётся загрузить его на свой хостинг.",
      remoteTitle: "Удалённо по Франции",
      remote:
        "Работаю с клиентами по всей стране. Созвоны, бриф и сдача — онлайн, без привязки к городу.",
    },
    services: {
      kicker: "02 — Услуги и цены",
      title: "Два понятных тарифа",
      from: "от",
      order: "Заказать",
    },
    plans: {
      0: {
        name: "Сайт-визитка / Лендинг",
        items: {
          0: "1 страница",
          1: "Форма связи",
          2: "Адаптация под телефоны и планшеты",
          3: "Срок 2–4 дня",
        },
      },
      1: {
        name: "Многостраничный сайт",
        items: {
          0: "Главная + дополнительные страницы услуг",
          1: "Галерея",
          2: "Адаптация под все устройства",
          3: "Срок 1–2 недели",
        },
      },
    },
    order: {
      kicker: "03 — Заявка",
      title: "Оставьте задачу — соберу смету и сроки",
      lead: "Коротко опишите проект: тип сайта, пожелания по страницам и удобный способ связи. Отвечаю лично, без менеджеров и чат-ботов.",
    },
    form: {
      name: "Имя",
      namePh: "Как к вам обращаться",
      email: "Email",
      phone: "Телефон / мессенджер",
      phonePh: "Telegram, WhatsApp или номер",
      message: "Описание проекта",
      messagePh: "Тип сайта, сроки, пожелания",
      submit: "Отправить заявку",
      sending: "Отправка заказа...",
      success: "Успешно! Muov принял ваш заказ",
      errorKey:
        "Не удалось отправить заявку. Вставьте ваш ключ Web3Forms в код сайта.",
      error: "Не удалось отправить заявку. Попробуйте ещё раз.",
      errorNetwork: "Ошибка сети. Проверьте соединение и попробуйте снова.",
      subject: "Новая заявка с сайта Muov",
    },
    footer: "© 2026 · Веб-разработка во Франции · Remote",
  },
  en: {
    meta: {
      title: "Muov — turnkey websites in France",
      description:
        "Muov builds modern turnkey websites in France. Clean HTML, CSS, JS, PHP and SQL — no page builders.",
    },
    nav: { contact: "Contact" },
    hero: {
      eyebrow: "Studio · France · Remote",
      title: "Turnkey modern website development in France",
      lead: "I design and ship fast sites in clean code. Remote across the country — from brief to a ready archive for your hosting.",
      cta: "Request a quote",
      hint: "Reply within one business day",
    },
    about: {
      kicker: "01 — The brand",
      title: "Clean code, not page builders",
      p1: "Muov builds fast, solid websites in pure HTML, CSS, JavaScript, PHP and SQL. No sluggish constructors that bloat the page, lock the layout, and break on updates.",
      p2: "Every project is assembled by hand: you get readable code, control of the files, and a site that does not depend on someone else's templates.",
      deliveryTitle: "Delivery format",
      delivery:
        "You receive a production-ready .zip with every site file and the database — upload it to your own hosting and go live.",
      remoteTitle: "Remote across France",
      remote:
        "I work with clients nationwide. Calls, brief and handover are online, with no city lock-in.",
    },
    services: {
      kicker: "02 — Services & pricing",
      title: "Two clear plans",
      from: "from",
      order: "Order",
    },
    plans: {
      0: {
        name: "Business card / Landing",
        items: {
          0: "1 page",
          1: "Contact form",
          2: "Mobile and tablet layout",
          3: "Timeline 2–4 days",
        },
      },
      1: {
        name: "Multi-page website",
        items: {
          0: "Home + extra service pages",
          1: "Gallery",
          2: "Layout for every device",
          3: "Timeline 1–2 weeks",
        },
      },
    },
    order: {
      kicker: "03 — Brief",
      title: "Tell me the brief — I'll send a quote and timeline",
      lead: "A few lines on the site type, pages you need, and the best way to reach you. I reply in person — no managers, no chatbots.",
    },
    form: {
      name: "Name",
      namePh: "How should I address you",
      email: "Email",
      phone: "Phone / messenger",
      phonePh: "Telegram, WhatsApp or number",
      message: "Project description",
      messagePh: "Site type, timeline, notes",
      submit: "Send request",
      sending: "Sending order...",
      success: "Done! Muov received your order",
      errorKey: "Could not send. Add your Web3Forms key to the site code.",
      error: "Could not send the request. Please try again.",
      errorNetwork: "Network error. Check the connection and try again.",
      subject: "New request from the Muov website",
    },
    footer: "© 2026 · Web development in France · Remote",
  },
  fr: {
    meta: {
      title: "Muov — sites clés en main en France",
      description:
        "Muov conçoit des sites modernes clés en main en France. Code HTML, CSS, JS, PHP et SQL — sans constructeurs.",
    },
    nav: { contact: "Contacter" },
    hero: {
      eyebrow: "Studio · France · Remote",
      title: "Création de sites modernes clés en main en France",
      lead: "Je conçois et assemble des sites rapides en code pur. Travail à distance partout en France — du brief à l'archive prête pour votre hébergement.",
      cta: "Demander un devis",
      hint: "Réponse sous un jour ouvré",
    },
    about: {
      kicker: "01 — La marque",
      title: "Du code pur, pas de constructeurs",
      p1: "Muov crée des sites rapides et soignés en HTML, CSS, JavaScript, PHP et SQL. Sans constructeurs lents qui alourdissent la page, figent la mise en page et cassent aux mises à jour.",
      p2: "Chaque projet est assemblé à la main : vous obtenez un code lisible, le contrôle des fichiers et un site indépendant des templates d'autrui.",
      deliveryTitle: "Format de livraison",
      delivery:
        "Le client reçoit une archive .zip prête à l'emploi : tous les fichiers du site et la base de données, à téléverser sur son hébergement.",
      remoteTitle: "À distance en France",
      remote:
        "J'accompagne des clients dans tout le pays. Appels, brief et livraison en ligne, sans contrainte de ville.",
    },
    services: {
      kicker: "02 — Prestations et tarifs",
      title: "Deux offres claires",
      from: "à partir de",
      order: "Commander",
    },
    plans: {
      0: {
        name: "Site vitrine / Landing",
        items: {
          0: "1 page",
          1: "Formulaire de contact",
          2: "Adaptation mobile et tablette",
          3: "Délai 2–4 jours",
        },
      },
      1: {
        name: "Site multipage",
        items: {
          0: "Accueil + pages de services",
          1: "Galerie",
          2: "Adaptation tous appareils",
          3: "Délai 1–2 semaines",
        },
      },
    },
    order: {
      kicker: "03 — Demande",
      title: "Décrivez le projet — je prépare devis et délais",
      lead: "En quelques mots : type de site, pages souhaitées et moyen de contact. Je réponds en personne, sans managers ni chatbots.",
    },
    form: {
      name: "Nom",
      namePh: "Comment vous appeler",
      email: "Email",
      phone: "Téléphone / messagerie",
      phonePh: "Telegram, WhatsApp ou numéro",
      message: "Description du projet",
      messagePh: "Type de site, délais, souhaits",
      submit: "Envoyer la demande",
      sending: "Envoi de la commande...",
      success: "C'est envoyé ! Muov a bien reçu votre demande",
      errorKey:
        "Envoi impossible. Insérez votre clé Web3Forms dans le code du site.",
      error: "Envoi impossible. Réessayez.",
      errorNetwork: "Erreur réseau. Vérifiez la connexion et réessayez.",
      subject: "Nouvelle demande depuis le site Muov",
    },
    footer: "© 2026 · Développement web en France · Remote",
  },
  hy: {
    meta: {
      title: "Muov — պատրաստի կայքեր Ֆրանսիայում",
      description:
        "Muov-ը Ֆրանսիայում ստեղծում է ժամանակակից կայքեր մաքուր կոդով՝ HTML, CSS, JS, PHP, SQL։ Առանց կոնստրուկտորների։",
    },
    nav: { contact: "Կապ" },
    hero: {
      eyebrow: "Ստուդիա · France · Remote",
      title: "Ժամանակակից կայքերի մշակում Ֆրանսիայում՝ պատրաստի լուծում",
      lead: "Մշակում և հավաքում եմ արագ կայքեր մաքուր կոդով։ Աշխատում եմ հեռավար ամբողջ երկրում՝ բրիֆից մինչև պատրաստի արխիվ ձեր հոսթինգի համար։",
      cta: "Թողնել հայտ",
      hint: "Պատասխան՝ աշխատանքային օրվա ընթացքում",
    },
    about: {
      kicker: "01 — Բրենդի մասին",
      title: "Մաքուր կոդ, ոչ կոնստրուկտորներ",
      p1: "Muov բրենդը ստեղծում է արագ և որակյալ կայքեր մաքուր կոդով՝ HTML, CSS, JavaScript, PHP և SQL։ Առանց դանդաղ կոնստրուկտորների, որոնք ուռճացնում են էջը, սահմանափակում դիզայնը և կոտրվում թարմացումներից։",
      p2: "Յուրաքանչյուր նախագիծ հավաքվում է ձեռքով. դուք ստանում եք թափանցիկ կոդ, վերահսկում ֆայլերի վրա և կայք, որը կախված չէ ուրիշի շաբլոններից։",
      deliveryTitle: "Հանձնման ձևաչափ",
      delivery:
        "Հաճախորդը ստանում է ամբողջությամբ պատրաստի .zip արխիվ՝ կայքի բոլոր ֆայլերով և տվյալների բազայով։ Մնում է բեռնել սեփական հոսթինգ։",
      remoteTitle: "Հեռավար Ֆրանսիայում",
      remote:
        "Աշխատում եմ հաճախորդների հետ ամբողջ երկրում։ Զանգեր, բրիֆ և հանձնում՝ առցանց, առանց քաղաքին կապված լինելու։",
    },
    services: {
      kicker: "02 — Ծառայություններ և գներ",
      title: "Երկու հասկանալի սակագին",
      from: "սկսած",
      order: "Պատվիրել",
    },
    plans: {
      0: {
        name: "Այցեքարտ / լենդինգ",
        items: {
          0: "1 էջ",
          1: "Կապի ձև",
          2: "Հարմարեցում հեռախոսներին և պլանշետներին",
          3: "Ժամկետ 2–4 օր",
        },
      },
      1: {
        name: "Բազմաէջանի կայք",
        items: {
          0: "Գլխավոր + ծառայությունների էջեր",
          1: "Պատկերասրահ",
          2: "Հարմարեցում բոլոր սարքերին",
          3: "Ժամկետ 1–2 շաբաթ",
        },
      },
    },
    order: {
      kicker: "03 — Հայտ",
      title: "Նկարագրեք խնդիրը — կկազմեմ գնահատական և ժամկետներ",
      lead: "Հակիրճ նկարագրեք նախագիծը՝ կայքի տեսակը, էջերը և հարմար կապի եղանակը։ Պատասխանում եմ անձամբ, առանց մենեջերների և չատ-բոտերի։",
    },
    form: {
      name: "Անուն",
      namePh: "Ինչպես դիմել ձեզ",
      email: "Email",
      phone: "Հեռախոս / մեսենջեր",
      phonePh: "Telegram, WhatsApp կամ համար",
      message: "Նախագծի նկարագրություն",
      messagePh: "Կայքի տեսակը, ժամկետները, ցանկությունները",
      submit: "Ուղարկել հայտ",
      sending: "Պատվերը ուղարկվում է...",
      success: "Հաջող է։ Muov-ը ընդունեց ձեր պատվերը",
      errorKey:
        "Չհաջողվեց ուղարկել։ Տեղադրեք Web3Forms բանալին կայքի կոդում։",
      error: "Չհաջողվեց ուղարկել հայտը։ Փորձեք կրկին։",
      errorNetwork: "Ցանցի սխալ։ Ստուգեք միացումը և փորձեք կրկին։",
      subject: "Նոր հայտ Muov կայքից",
    },
    footer: "© 2026 · Վեբ մշակում Ֆրանսիայում · Remote",
  },
};

const LANGS = ["ru", "en", "fr", "hy"];

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function detectLang() {
  const stored = localStorage.getItem("muov-lang");
  if (LANGS.includes(stored)) return stored;
  const nav = (navigator.language || "ru").slice(0, 2).toLowerCase();
  if (LANGS.includes(nav)) return nav;
  return "ru";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.ru;
  document.documentElement.lang = lang;
  localStorage.setItem("muov-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getByPath(dict, key);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getByPath(dict, key);
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  const titleEl = document.getElementById("page-title");
  if (titleEl) titleEl.textContent = dict.meta.title;
  document.title = dict.meta.title;

  const meta = document.getElementById("meta-description");
  if (meta) meta.setAttribute("content", dict.meta.description);

  const subject = document.getElementById("form-subject");
  if (subject) subject.value = dict.form.subject;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  window.__muovLang = lang;
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

applyLang(detectLang());

/* —— Form —— */
const form = document.getElementById("order-form");
const statusEl = document.getElementById("form-status");
const submitBtn = form?.querySelector('button[type="submit"]');

function tForm(key) {
  const lang = window.__muovLang || "ru";
  return getByPath(I18N[lang] || I18N.ru, "form." + key) || "";
}

function setStatus(text, state) {
  if (!statusEl) return;
  statusEl.textContent = text;
  statusEl.classList.remove("is-pending", "is-success", "is-error");
  if (state) statusEl.classList.add(state);
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  setStatus(tForm("sending"), "is-pending");
  if (submitBtn) submitBtn.disabled = true;

  const data = new FormData(form);
  const payload = JSON.stringify(Object.fromEntries(data.entries()));

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: payload,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setStatus(tForm("success"), "is-success");
      form.reset();
    } else {
      const apiMessage = String(result.message || "").toLowerCase();
      setStatus(
        apiMessage.includes("api key") ? tForm("errorKey") : tForm("error"),
        "is-error"
      );
    }
  } catch (error) {
    setStatus(tForm("errorNetwork"), "is-error");
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
});
