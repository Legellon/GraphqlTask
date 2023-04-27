<script>
import Card from "./components/Shop/Card.svelte";
import Nav from "./components/Shop/Nav.svelte";
import Router from "svelte-spa-router";
import { routes } from "./routes.js";
</script>

<Router {routes} />
<Nav/>
<Card/>

