# Deploy on GitHub Pages

1. Create a **public** GitHub repository named `restaurant-website` (or another name).
2. Open this project folder in VS Code Terminal and run:

```bash
git init
git add .
git commit -m "Build responsive restaurant website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/restaurant-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your real GitHub username. If the remote already exists, use `git remote set-url origin ...`.

3. On GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
5. Wait for publishing and open:

`https://YOUR_USERNAME.github.io/restaurant-website/`

6. Test all images, menu filters, gallery and booking demo on the deployed site.

**Notes:** No `npm install`, build command or backend is needed. The demo reservation stays in the visitor's browser only. Replace sample contact details and fictitious testimonials before public business use.
