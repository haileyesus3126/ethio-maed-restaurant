# Saffron & Stone — Professional Restaurant Website

A complete, responsive **HTML5 + CSS3 + Vanilla JavaScript** restaurant portfolio project. No frameworks, build tools, API keys, or server required.

## Features

- Premium responsive restaurant landing page with hero, story, menu, gallery, reviews, booking demo and footer
- **Working menu filters:** All dishes, Starters, Mains, Desserts, Drinks
- **Accessible gallery lightbox:** native `<dialog>`, close button, Escape key, click outside
- **Mobile navigation:** hamburger, Escape support, automatic close on link selection
- **Reservation demo:** required-field validation, browser-native email checks, past-date protection, 1–8 guests
- **Browser storage:** last demo reservation saved with `localStorage`, restored on refresh, can be cleared
- Responsive layout, keyboard focus states, semantic HTML, reduced-motion support
- All illustration assets are included locally as SVG, so images work without an internet connection

> **Important:** This is a fictional demonstration website. The restaurant, menu prices, address, opening hours, reviews and booking functionality are illustrative. A reservation is **not sent to a business**. Browser storage is local to the visitor's device and is not a shared booking system. Replace all sample content before using it for a real business.

## Quick start

1. Unzip the project.
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code **Live Server** extension.
4. Try the filters, gallery, mobile menu and booking demo.

## Project structure

```text
restaurant-website/
├── index.html
├── css/style.css
├── js/main.js
├── assets/*.svg
├── README.md
├── TESTING.md
├── DEPLOYMENT.md
└── .gitignore
```

## Customize

- **Brand / address / hours / email:** edit `index.html`.
- **Menu items, categories and prices:** edit the `dishes` array in `js/main.js`.
- **Colors / typography / layout:** edit the variables and rules in `css/style.css`.
- **Gallery:** edit gallery buttons in `index.html` and replace the local SVG files with your own licensed photographs.
- **Reservation demo:** stored under `saffron-stone-demo-reservation-v1` in browser `localStorage`. This is not a real reservation service.
- **Currency:** edit `money()` in `js/main.js` (the default is demo USD).

## Browser storage & privacy

The demo stores the most recent reservation, including entered name and email, **only in the current browser**. Use **Clear saved request** to remove it. Do not enter real sensitive personal information into this demonstration. For a real restaurant, implement a backend, secure storage, privacy notices, consent, and real booking confirmation.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages instructions. The project uses relative asset paths and works in a GitHub Pages repository subpath.

## License / assets

All included SVG illustrations were generated specifically for this example. Google Fonts are loaded online; the design falls back to system fonts if offline.
