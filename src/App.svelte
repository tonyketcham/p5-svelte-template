<script>
  export let library;
  import Canvas from './p5/Canvas.svelte';
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  header {
    margin-bottom: 3rem;
  }

  h1 {
    color: #ed225d;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <header>
    <h1>
      <img src={library.logo} alt={library.name} />
      /Svelte
    </h1>
    <a class="button" href="https://svelte.dev/tutorial">Learn Svelte</a>
    •
    <a class="button" href="https://p5js.org/get-started/">Learn p5</a>
  </header>

  <Canvas />
</main>
