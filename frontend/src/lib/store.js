import { writable } from "svelte/store";

export const isLogged = writable(false);
export const gotCode = writable(false);

export const user = writable({
  username: "",
  token: null,
  newPassword: "",
  verifyCode: "",
  groups: [],
});
