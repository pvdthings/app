<script>
  import { page } from '$app/stores';
</script>

<div class="w-screen h-1/2-screen relative">
  <div class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
    <h1 class="text-3xl font-bold">It's not loading!</h1>
    <h2 class="text-xl font-medium">{$page.status} {$page.error.message}</h2>
  </div>
</div>