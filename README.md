# Frontend Mentor - REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project structure](#project-structure)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![Preview](./preview.jpg)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-c0iH-u73bM)
- Live Site URL: [GitHub Pages](https://rahulpaul12.github.io/rest-countries-api-with-color-theme-switcher-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (design tokens)
- CSS Flexbox & CSS Grid
- Mobile-first responsive workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [React Router](https://reactrouter.com/) - For routing
- Vanilla CSS for styling components

### Project structure

```
index.html                    → Entry point
src/main.jsx                  → React root & initial setup
src/App.jsx                   → Main app component & Routing setup
src/pages/HomePage.jsx        → Main page with country grid & search/filter
src/pages/DetailPage.jsx      → Detailed view of a single country
src/components/Header.jsx     → Navigation bar & theme switcher
src/components/SearchAndFilter.jsx → Input for search and region dropdown
src/components/CountryCard.jsx → Individual country presentation card
data.json                     → Local JSON data source for countries
```

### What I learned

During this project, I gained significant experience in several key areas:

- **React components architecture:** Structuring the application into logical pages and reusable components (`Header`, `CountryCard`, `SearchAndFilter`).
  
- **Client-side routing:** Implemented dynamic routing using `react-router-dom` to navigate between the homepage and individual country details without page reloads.

- **Theme Switching:** Created a robust dark/light mode toggle by updating a `data-theme` attribute on the root element and persisting the user's preference in `localStorage`.

```js
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);
```

- **Data Filtering & Memoization:** Used `useMemo` to efficiently filter the list of countries based on search term and region without unnecessary re-renders.

```js
const filteredCountries = useMemo(() => {
  return countriesData.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter ? country.region === regionFilter : true;
    return matchesSearch && matchesRegion;
  });
}, [searchTerm, regionFilter]);
```

### Continued development

- **API Integration:** Transition from the local `data.json` to fetching live data directly from the REST Countries API.
- **Accessibility Improvements:** Refine keyboard navigation and focus management across the site, particularly on the custom select dropdown and theme toggle button.
- **Performance Optimization:** Implement lazy loading or pagination for the main countries grid to improve initial load time.

## Author

- Frontend Mentor - [@rahulpaul127](https://www.frontendmentor.io/profile/rahulpaul127)
- Twitter - [@RahulRPaul127](https://twitter.com/RahulRPaul127)
