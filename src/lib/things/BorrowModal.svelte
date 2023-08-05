<script lang="ts">
  import Button from "$lib/foundation/Button.svelte";
	import { ButtonTheme } from "$lib/foundation/button";
  import { showBorrowModal } from "./borrowModalStore";
  import CloseIcon from "$lib/icons/x-mark.svg";
	import { onDestroy } from "svelte";

  let dialog: HTMLDialogElement;

  const unsubscribe = showBorrowModal.subscribe((value) => {
    if (value) dialog.showModal();
  });

  const closeModal = () => showBorrowModal.set(false);

  const learnMore = () => {
    closeModal();
    window.open("https://www.pvdthings.coop/membership", '_blank').focus();
  };

  onDestroy(unsubscribe);
</script>

<dialog bind:this={dialog} id="borrow-modal" class="modal modal-bottom sm:modal-middle">
  <form method="dialog" class="modal-box">
    <button class="btn btn-circle btn-ghost outline-none absolute right-2 top-2" on:click={() => showBorrowModal.set(false)}>
      <img src={CloseIcon} alt="Close" height="24" width="24" />
    </button>
    <h3 class="font-bold text-lg">How to Borrow</h3>
    <ol class="py-4">
      <li class="mb-2">1. Purchase a PVD Things membership and pay annual dues.</li>
      <li class="mb-2">2. Visit us at 12 Library Court in Providence.</li>
    </ol>
    <div class="modal-bottom flex flex-row justify-end gap-3">
      <Button on:click={learnMore}>
        Learn More
      </Button>
      <Button theme={ButtonTheme.primary} on:click={closeModal}>
        OK
      </Button>
    </div>
  </form>
</dialog>