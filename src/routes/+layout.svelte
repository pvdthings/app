<script>
	import '../app.css';
	import { Head } from '$lib/components';
	import BottomNavigationView from '$lib/views/BottomNavigationView.svelte';
	import AppBar from '$lib/components/layout/AppBar.svelte';
</script>

<Head
	title="PVD Things"
	description="PVD Things Catalog"
	keywords="Providence, Library, Things, PVD, Tools, Rentals, Sharing"
	image="/PVD_Things_Twitter_Header.png"
	url="https://app.pvdthings.coop"
	twitterHandle="@pvdthings"
/>
<main class="bg-indigo-100 flex flex-col min-h-screen w-full">
	<AppBar />
	<div class="flex-grow pt-28 lg:pt-32 pb-20">
		<slot />
	</div>
	<BottomNavigationView />
</main>
