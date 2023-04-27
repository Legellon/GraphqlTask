import { wrap } from 'svelte-spa-router/wrap'

import Main from "./Main.svelte";
import AuthorizationPage from "./components/Authorization/AuthorizationPage.svelte";
import ResetPassword from "./components/Authorization/Forms/ResetPassword.svelte";
import NewPassword from "./components/Authorization/Forms/NewPassword.svelte";

const routes = {
    '/': wrap({ component: Main }),
    '/auth/login': wrap({ component: AuthorizationPage }),
    '/auth/reset-password': wrap({ component: ResetPassword}),
    '/auth/new-password': wrap({ component: NewPassword}),
    '*': wrap({ component: Main}),
}

export { routes }
