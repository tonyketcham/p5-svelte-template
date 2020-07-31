import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    library: {
      name: "p5.js",
      logo: "./p5js.svg",
    },
  },
});

export default app;
