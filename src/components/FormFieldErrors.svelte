<script>
  /**
   * The Vest validation result.
   * @type {import('vest').SuiteResult}
   */
  export let validationResult;
  /**
   * Errors will be retreived for the given field name.
   * @type {string}
   */
  export let fieldName;
</script>

{#if validationResult.hasErrors(fieldName)}
  <ul>
    {#each validationResult.getErrors(fieldName) as error}
      <li>{error}</li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    padding-inline-start: 0;
    color: red;
    list-style: none;
  }

  li::before {
    content: '( ! ) ';
  }
</style>
