import App from "./App.svelte";
// import Drag from "./Drag.svelte";

const app = new App({
  target: document.body,
  props: {
    words: ["magalotti", "haruka", "tokky", "manju", "nuts", "sherlock"],
  },
});

// const drag = new Drag({
//   target: document.body,
//   props: {},
// });

// export default app;
