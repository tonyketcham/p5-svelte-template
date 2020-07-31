# p5.js Svelte App

Ok hi! 👋👋🏿👋🏽👋🏻👋🏾👋🏼

This is a project skeleton for creating a [p5.js](https://p5js.org/) sketch in a [Svelte](https://svelte.dev) app.

![p5-Svelte logo](https://raw.githubusercontent.com/tonyketcham/p5-svelte/nice/screely-1596170721775.png)

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit tonyketcham/p5-svelte p5-svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd p5-svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## p5.js instance mode

Since Svelte doesn't allow us to globally expose the p5 library, we must instead do some trickery and use p5's [instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode):

```js
import p5 from "p5";

export default function sketch(node) {
  new p5((instance) => workspace(instance), node);
}

/**
 * The main method
 *
 * @param {p5} p5 sketch instance, scoped where many may exist on the same page
 */
const workspace = (p5) => {
  let x = 100;
  let y = 100;

  p5.setup = () => {
    p5.createCanvas(400, 400);
  };

  p5.draw = () => {
    p5.background(0);

    if (p5.mouseIsPressed) {
      p5.fill(255);
    } else {
      p5.fill(0);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
  };
};
```

This has the benefit of allowing multiple sketches per page with seperation of concerns.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```

---

This project is a fork of the [official Svelte template](https://github.com/sveltejs/template).
