import { writable } from 'svelte/store';

export const showBorrowModal = writable(false);

showBorrowModal.subscribe((value) => {
  if (value) {
    const dialog = document.getElementById('borrow-modal') as HTMLDialogElement;
    dialog.showModal();
  }
});