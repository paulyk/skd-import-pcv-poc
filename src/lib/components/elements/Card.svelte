<div>
  <slot />
</div>

<style>
  div {
    padding: 2rem;
    background-color: var(--cardBg);
    box-shadow: var(--level-3);
    border-radius: var(--borderRadius);
  }

  :global(div > *:first-child) {
    margin-top: 0;    
  }
  :global(div > *:last-child) {
    margin-bottom: 1;    
  }
</style>
