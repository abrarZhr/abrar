# Technical Enhancement Plan — Disney+ Clone / Portfolio

## Critical Bugs

### 1. `GlobalApi.tsx` — API call fires at import time
`getTrandingMovies` is a `Promise`, not a function. Any component importing it receives a resolved/pending promise immediately, not lazy data.

```ts
// Current (broken)
getTrandingMovies: axios.get(...)

// Fix
getTrandingMovies: () => axios.get(...)
```

### 2. `slider.tsx` — broken `mailto:` link
`<a href="abrar_3378@hotmail.com">` is missing the `mailto:` prefix — clicking does nothing.

```tsx
// Fix
<a href="mailto:abrar_3378@hotmail.com">abrar_3378@hotmail.com</a>
```

### 3. `AutoSlider.tsx` — memory leak
`setInterval` inside the `created` callback runs forever with no cleanup. Should store the interval ID and clear it on slider destroy.

```ts
// Fix
created(s) {
  const id = setInterval(() => s.next(), 3000);
  s.on("destroyed", () => clearInterval(id));
}
```

---

## Security

### 4. `GlobalApi.tsx` — hardcoded API key
`api_Key = "dac104cd33e24d95a9d67c88a2f590a0"` is committed in source code.

**Fix:** Move to `.env` and access via `import.meta.env.VITE_TMDB_KEY`.

```ts
// .env
VITE_TMDB_KEY=your_key_here

// GlobalApi.tsx
const api_Key = import.meta.env.VITE_TMDB_KEY;
```

Add `.env` to `.gitignore`.

---

## Architecture

### 5. React components in `public/`
`Arrow`, `Diamond`, `Green`, `Start`, `Arrow2` are `.tsx` files inside `public/`. Vite's `public/` folder is for static assets only — it bypasses the bundler entirely. These components must be moved to `src/`.

**Fix:** Move all `.tsx` files from `public/` → `src/components/decorators/` and update all import paths.

---

## Code Quality

### 6. Missing `key` props in `Header.tsx`
`manu.map(...)` renders `<HeaderItem>` without a `key` prop, causing React reconciliation warnings.

```tsx
// Fix
{manu.map((item) => (
  <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
))}
```

### 7. `index.css` — duplicate Tailwind import
`@import "tailwindcss"` appears on both line 2 and line 3. Remove the duplicate.

### 8. `framer-motion` missing from `package.json`
`slider.tsx` imports `{ motion }` from `framer-motion` but the package is not listed in `dependencies`.

**Fix:**
```bash
pnpm add framer-motion
```

### 9. Dead code in `App.jsx`
`<Header />` and `<ProdectionHouse />` are commented out but their imports remain at the top of the file. Either restore the components or remove the imports.

### 10. Filename typo
`prodextionHouse.tsx` → should be `productionHouse.tsx`. Update the filename and all import references.

---

## Priority Order

| # | File | Issue | Impact |
|---|------|-------|--------|
| 1 | `GlobalApi.tsx` | API call fires at import time | Runtime crash / no data |
| 2 | `slider.tsx` | `mailto:` prefix missing | Broken UX |
| 3 | `GlobalApi.tsx` | API key hardcoded in source | Security |
| 4 | `public/*.tsx` | Components in wrong folder | Build may break |
| 5 | `package.json` | `framer-motion` not installed | Crash if animation runs |
| 6 | `AutoSlider.tsx` | `setInterval` never cleared | Memory leak |
| 7 | `Header.tsx` | Missing `key` props | React warnings |
| 8 | `index.css` | Duplicate `@import` | Minor / redundant |
| 9 | `App.jsx` | Dead imports and commented code | Cleanliness |
| 10 | `prodextionHouse.tsx` | Filename typo | Cleanliness |

---

## Status

- [ ] Fix `GlobalApi.tsx` — lazy function + env key
- [ ] Fix `mailto:` in `slider.tsx`
- [ ] Fix `setInterval` leak in `AutoSlider.tsx`
- [ ] Move TSX decorators out of `public/`
- [ ] Add `framer-motion` to dependencies
- [ ] Add `key` props in `Header.tsx`
- [ ] Remove duplicate `@import` in `index.css`
- [ ] Clean up dead code in `App.jsx`
- [ ] Rename `prodextionHouse.tsx` → `productionHouse.tsx`
