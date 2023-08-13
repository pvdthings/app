<script>
    import "../app.css";
    import { Head } from "$lib/components";
    import Layout from "$lib/components/layout/Layout.svelte";
</script>

<Head 
	title="PVD Things" 
	description="PVD Things Catalog"
	keywords="Providence, Library, Things, PVD, Tools, Rentals, Sharing"
	image="/PVD_Things_Twitter_Header.png"
	url="https://app.pvdthings.coop"
	twitterHandle="@pvdthings"
/>
<Layout>
	<slot />
</Layout>