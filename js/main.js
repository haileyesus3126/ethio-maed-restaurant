
"use strict";

/* =====================================================
   ETHIO MA'ED — ኢትዮ ማዕድ
   Ethiopian Traditional Restaurant Website
   Vanilla JavaScript

   Features:
   - Ethiopian food menu
   - Menu category filtering
   - Prices in Ethiopian Birr
   - Responsive mobile navigation
   - Gallery lightbox
   - Reservation form validation
   - Browser localStorage
   - Dynamic copyright year

   NOTE:
   This is a portfolio demonstration.
   Food prices are fictional examples.
   Reservations are NOT sent to a restaurant.
===================================================== */


/* =====================================================
   1. ETHIOPIAN FOOD DATA
===================================================== */


/* =====================================================
   ETHIO MA'ED — ETHIOPIAN FOOD MENU
   Images from your assets folder
===================================================== */

const dishes = [
  {
    id: 1,
    name: "ሳምቡሳ",
    category: "starters",
    price: 120,
    description: "በምስርና በቅመማ ቅመም የተዘጋጀ ጣፋጭ ሳምቡሳ።",
    image: "assets/images.jpg",
    tag: "ተወዳጅ መክሰስ"
  },
 {
    id: 9,
    name: "ፍርፍር",
    category: "mains",
    price: 300,
    description: "በበርበሬና በቅመሞች የተዘጋጀ የእንጀራ ፍርፍር።",
    image: "assets/ፍርፍር.jpg",
    tag: "ባህላዊ ምርጫ"
  },
  {
    id: 3,
    name: "ዶሮ ወጥ",
    category: "mains",
    price: 650,
    description: "በበርበሬና በባህላዊ ቅመሞች የተዘጋጀ ዶሮ ወጥ።",
    image: "assets/ዶሮ ወጥ.jpg",
    tag: "የቤቱ ልዩ ምግብ"
  },
  {
    id: 4,
    name: "የበሬ ጥብስ",
    category: "mains",
    price: 580,
    description: "በቃሪያና በቅመማ ቅመም የተጠበሰ የበሬ ሥጋ።",
    image: "assets/የበሬ ጥብስ.jpg",
    tag: "ተወዳጅ ምግብ"
  },
  {
    id: 5,
    name: "ክትፎ",
    category: "mains",
    price: 720,
    description: "በሚጥሚጣና በቅቤ የተዘጋጀ ባህላዊ ክትፎ።",
    image: "assets/ክትፎ.jpg",
    tag: "ባህላዊ ልዩ ምግብ"
  },
  {
    id: 6,
    name: "የጾም በያይነቱ",
    category: "desserts",
    price: 350,
    description: "የተለያዩ የጾም ወጦች ከእንጀራ ጋር።",
    image: "assets/የጾም በያይነቱ.jpg",
    tag: "የጾም ምግብ"
  },
  {
    id: 7,
    name: "ሽሮ ወጥ",
    category: "desserts",
    price: 280,
    description: "በባህላዊ ቅመሞች የተዘጋጀ ትኩስ ሽሮ ወጥ።",
    image: "assets/ሽሮ ወጥ.jpg",
    tag: "የጾም ምርጫ"
  },
  {
    id: 8,
    name: "ባህላዊ ቡና",
    category: "drinks",
    price: 120,
    description: "በኢትዮጵያዊ የቡና ሥነ ሥርዓት የተዘጋጀ ትኩስ ቡና።",
    image: "assets/ባህላዊ ቡና.jpg",
    tag: "የኢትዮጵያ ቡና"
  },
  {
    id: 9,
    name: "ፍርፍር",
    category: "mains",
    price: 300,
    description: "በበርበሬና በቅመሞች የተዘጋጀ የእንጀራ ፍርፍር።",
    image: "assets/ፍርፍር.jpg",
    tag: "ባህላዊ ምርጫ"
  },
  {
    id: 10,
    name: "ሻይ",
    category: "drinks",
    price: 70,
    description: "በቅመማ ቅመም የተዘጋጀ ትኩስ ሻይ።",
    image: "assets/ሻይ.jpg",
    tag: "ትኩስ መጠጥ"
  }
];



/* =====================================================
   2. MENU CATEGORY LABELS
===================================================== */

const categoryLabels = {
  starters: "መክሰስ",
  mains: "ዋና ምግቦች",
  desserts: "የጾም ምግቦች",
  drinks: "መጠጦች"
};


/* =====================================================
   3. ETHIOPIAN BIRR FORMAT
===================================================== */

const money = amount => {
  return `${amount.toLocaleString("en-ET")} ብር`;
};


/* =====================================================
   4. MENU ELEMENTS
===================================================== */

const menuGrid = document.querySelector("#menu-grid");

const menuCount = document.querySelector("#menu-count");

const filters = [
  ...document.querySelectorAll(".filter")
];


/* =====================================================
   5. RENDER FOOD MENU
===================================================== */

function renderMenu(category = "all") {

  const shown = dishes.filter(dish => {
    return category === "all" || dish.category === category;
  });

  menuGrid.innerHTML = shown.map(dish => {

    return `
      <article class="dish-card">

        <div class="dish-image">

          <img
            src="${dish.image}"
            alt="${dish.name} - የምግብ ማሳያ ምስል"
            loading="lazy"
          >

          <span class="dish-tag">
            ${dish.tag}
          </span>

        </div>

        <div class="dish-info">

          <div class="dish-title-row">

            <h3>${dish.name}</h3>

            <strong>
              ${money(dish.price)}
            </strong>

          </div>

          <p>
            ${dish.description}
          </p>

          <span class="dish-category">
            ${categoryLabels[dish.category]}
          </span>

        </div>

      </article>
    `;

  }).join("");

  menuCount.textContent =
    `${shown.length} ምግቦች ተገኝተዋል`;
}


/* =====================================================
   6. MENU FILTER BUTTONS
===================================================== */

filters.forEach(button => {

  button.addEventListener("click", () => {

    filters.forEach(item => {

      const active = item === button;

      item.classList.toggle("active", active);

      item.setAttribute(
        "aria-pressed",
        String(active)
      );

    });

    renderMenu(button.dataset.filter);

  });

});

renderMenu();


/* =====================================================
   7. MOBILE NAVIGATION
===================================================== */

const menuToggle = document.querySelector("#menu-toggle");

const siteNav = document.querySelector("#site-nav");

function setMenu(open) {

  siteNav.classList.toggle("open", open);

  menuToggle.classList.toggle("open", open);

  menuToggle.setAttribute(
    "aria-expanded",
    String(open)
  );

  menuToggle.setAttribute(
    "aria-label",
    open ? "ምናሌ ዝጋ" : "ምናሌ ክፈት"
  );

}

menuToggle.addEventListener("click", () => {

  const isOpen = siteNav.classList.contains("open");

  setMenu(!isOpen);

});

siteNav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {
    setMenu(false);
  });

});

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    setMenu(false);
  }

});

window.addEventListener("resize", () => {

  if (window.innerWidth > 900) {
    setMenu(false);
  }

});


/* =====================================================
   8. GALLERY LIGHTBOX
===================================================== */

const dialog = document.querySelector("#gallery-dialog");

const dialogImage = document.querySelector("#dialog-image");

const dialogCaption = document.querySelector("#dialog-caption");

const dialogClose = document.querySelector("#dialog-close");

document.querySelectorAll(".gallery-item").forEach(item => {

  item.addEventListener("click", () => {

    dialogImage.src = item.dataset.image;

    dialogImage.alt = item.querySelector("img").alt;

    dialogCaption.textContent = item.dataset.caption;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    }

  });

});

dialogClose.addEventListener("click", () => {

  dialog.close();

});

dialog.addEventListener("click", event => {

  if (event.target === dialog) {
    dialog.close();
  }

});


/* =====================================================
   9. RESERVATION FORM ELEMENTS
===================================================== */

const form = document.querySelector("#reservation-form");

const dateInput = document.querySelector("#reservation-date");

const errorBox = document.querySelector("#form-error");

const success = document.querySelector("#reservation-success");

const summary = document.querySelector("#reservation-summary");

const STORAGE_KEY = "ethio-maed-demo-reservation-v1";


/* =====================================================
   10. LOCAL DATE FUNCTION
===================================================== */

function localDateString(date = new Date()) {

  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;

}


/* =====================================================
   11. SET MINIMUM RESERVATION DATE
===================================================== */

function updateMinDate() {

  dateInput.min = localDateString();

}

updateMinDate();


/* =====================================================
   12. PREVENT HTML INJECTION
===================================================== */

function escapeHtml(value) {

  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char])
  );

}


/* =====================================================
   13. RESERVATION SUCCESS MESSAGE
===================================================== */

function showSuccess(booking) {

  form.hidden = true;

  success.hidden = false;

  summary.innerHTML = `
    <p>
      <strong>ስም:</strong>
      ${escapeHtml(booking.name)}
    </p>

    <p>
      <strong>የእንግዶች ብዛት:</strong>
      ${escapeHtml(booking.guests)}
    </p>

    <p>
      <strong>ቀን:</strong>
      ${escapeHtml(booking.date)}
    </p>

    <p>
      <strong>ሰዓት:</strong>
      ${escapeHtml(booking.time)}
    </p>
  `;

}


/* =====================================================
   14. RESERVATION FORM SUBMISSION
===================================================== */

form.addEventListener("submit", event => {

  event.preventDefault();

  errorBox.textContent = "";

  updateMinDate();

  // Check required fields.
  if (!form.reportValidity()) {

    errorBox.textContent =
      "እባክዎ አስፈላጊ መረጃዎችን በትክክል ይሙሉ።";

    return;
  }

  const data = Object.fromEntries(
    new FormData(form).entries()
  );

  // Remove unnecessary spaces.
  data.name = data.name.trim();

  data.email = data.email.trim();

  data.phone = data.phone.trim();

  data.notes = data.notes.trim();

  // Validate name.
  if (data.name.length < 2) {

    errorBox.textContent =
      "እባክዎ ቢያንስ ሁለት ፊደላት ያሉት ስም ያስገቡ።";

    return;
  }

  // Validate reservation date.
  if (data.date < localDateString()) {

    errorBox.textContent =
      "እባክዎ የዛሬን ወይም የወደፊት ቀን ይምረጡ።";

    return;
  }

  // Validate number of guests.
  if (!/^[1-8]$/.test(data.guests)) {

    errorBox.textContent =
      "እባክዎ ከ1 እስከ 8 የሚሆኑ እንግዶችን ይምረጡ።";

    return;
  }

  // Create reservation object.
  const booking = {

    name: data.name,

    email: data.email,

    phone: data.phone,

    guests: data.guests,

    date: data.date,

    time: data.time,

    notes: data.notes,

    createdAt: new Date().toISOString()

  };

  // Save reservation to browser.
  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(booking)
    );

  } catch (error) {

    errorBox.textContent =
      "መረጃውን በብራውዘር ማስቀመጥ አልተቻለም።";

    return;
  }

  showSuccess(booking);

});


/* =====================================================
   15. NEW RESERVATION
===================================================== */

document.querySelector("#new-reservation")
  .addEventListener("click", () => {

    form.reset();

    errorBox.textContent = "";

    form.hidden = false;

    success.hidden = true;

    updateMinDate();

    form.querySelector('[name="name"]').focus();

  });


/* =====================================================
   16. CLEAR SAVED RESERVATION
===================================================== */

document.querySelector("#clear-reservation")
  .addEventListener("click", () => {

    try {

      localStorage.removeItem(STORAGE_KEY);

    } catch (error) {

      // Ignore unavailable browser storage.

    }

    form.reset();

    errorBox.textContent = "";

    form.hidden = false;

    success.hidden = true;

    updateMinDate();

  });


/* =====================================================
   17. LOAD SAVED RESERVATION
===================================================== */

try {

  const saved = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "null"
  );

  if (
    saved &&
    saved.name &&
    saved.date &&
    saved.time &&
    saved.guests
  ) {

    showSuccess(saved);

  }

} catch (error) {

  // Ignore invalid or unavailable browser storage.

}


/* =====================================================
   18. DYNAMIC FOOTER YEAR
===================================================== */

document.querySelector("#year").textContent =
  new Date().getFullYear();


/* =====================================================
   END OF ETHIO MA'ED JAVASCRIPT
===================================================== */
