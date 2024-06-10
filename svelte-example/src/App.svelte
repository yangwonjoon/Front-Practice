<script>
  export let name;
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>The count is {count}</p>
  <button on:click={increment}>Increment</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  button {
    padding: 1em;
    font-size: 1.2em;
  }
</style>
