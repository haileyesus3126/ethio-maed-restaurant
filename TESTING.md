# Manual Testing Checklist

## Setup

Open `index.html` in Chrome, Firefox or Edge. Press F12 to open DevTools Console and check for errors.

## Navigation

- [ ] Desktop navigation jumps to correct sections.
- [ ] At viewport width 390px, hamburger opens and closes menu.
- [ ] Selecting a navigation link closes the mobile menu.
- [ ] Escape closes mobile menu.
- [ ] Keyboard Tab focus is visible.

## Menu filters

- [ ] All dishes shows 8 dishes.
- [ ] Starters shows 2 dishes.
- [ ] Mains shows 3 dishes.
- [ ] Desserts shows 2 dishes.
- [ ] Drinks shows 1 dish.
- [ ] Selected button has `aria-pressed="true"` and `active` class.
- [ ] Dish count updates accurately.

## Gallery

- [ ] Clicking each of 4 gallery images opens the correct larger illustration and caption.
- [ ] Close button closes lightbox.
- [ ] Escape closes lightbox.
- [ ] Clicking outside image closes lightbox.

## Reservation demo

- [ ] Empty required fields show browser validation.
- [ ] Invalid email is rejected.
- [ ] Names shorter than 2 characters are rejected.
- [ ] Past dates are rejected; date minimum is local today.
- [ ] Valid booking displays summary and a clear demo-only notice.
- [ ] Refresh restores saved booking from localStorage.
- [ ] 'Make another request' resets the form while retaining previous stored demo record until replaced.
- [ ] 'Clear saved request' deletes the saved booking and resets the form.
- [ ] No real email is sent and no server request is made.

## Responsive & accessibility

- [ ] Check 320px, 390px, 768px, 1024px and 1440px viewport widths.
- [ ] No horizontal scrolling from page layout.
- [ ] Images have meaningful alt text.
- [ ] Reduced motion preference disables decorative animations.
- [ ] Test keyboard navigation, labels, and screen reader announcements.

## Deployment

- [ ] `index.html`, `css`, `js` and `assets` are in repository root.
- [ ] GitHub Pages serves the site with working relative asset paths.
- [ ] No errors in browser Console on the live URL.
