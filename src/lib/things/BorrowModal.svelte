<script lang="ts">
  import Button from "$lib/foundation/Button.svelte";
  import { showBorrowModal } from "./borrowModalStore";
</script>

<dialog id="borrow-modal" class="modal modal-bottom sm:modal-middle">
  <form method="dialog" class="modal-box">
    <button class="btn btn-circle btn-ghost absolute right-2 top-2" on:click={() => showBorrowModal.set(false)}>✕</button>
    <h3 class="font-bold text-lg">How to Borrow</h3>
    <ol class="py-4">
      <li class="mb-2">1. Purchase a PVD Things membership and pay annual dues.</li>
      <li>2. Visit us at 12 Library Court in Providence.</li>
    </ol>
    <div class="modal-bottom float-right">
      <Button
        on:click={() => window.open("https://www.pvdthings.coop/membership", '_blank').focus()}
      >
        Learn More
      </Button>
    </div>
  </form>
</dialog>