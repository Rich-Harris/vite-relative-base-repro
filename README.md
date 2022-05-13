# vite relative paths

This is an example repro to illustrate https://github.com/vitejs/vite/pull/7644#issuecomment-1126198509.

Running `npm run build` (aka `node index.js`) causes Vite to build `src/index.js` to `public/build`. Running `npm start` starts a server.

## Expected behaviour

`public/build/app.js` includes the following:

```js
const routes = {
  home: () => __vitePreload(() => import("./chunks/home-fd4bed33.js"), true ? ["chunks/home-fd4bed33.js","assets/home-203ffc0a.css"] : void 0)
};
```

The dependencies are relative to `/build/app.js`, and should resolve to `/build/chunks/home-fd4ved33.js` and `/build/assets/home-203ffc0a.css`.

## Actual behaviour

The dependencies are resolved against the document's baseURI. Even in the trivial case where we're visiting `/`, this breaks (`/chunks/home-fd4ved33.js` and `/assets/home-203ffc0a.css`), but even if we were to account for that somehow it would still be broken when we visited `/some/nested/path`.

As far as I can tell, _the document baseURI is irrelevant_.