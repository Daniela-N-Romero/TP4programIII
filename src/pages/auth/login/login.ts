import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { rolRedirect } from "../../../utils/auth";
import { getUsers, loginUser } from "../../../utils/localStorage";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;


form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;

  const users = getUsers();
  const usuarioEncontrado = users.find((u) => u.email === valueEmail && u.password === valuePassword);
  
  if (usuarioEncontrado){
      const rol = usuarioEncontrado.role as Rol
      const user: IUser = {
        email: valueEmail,
        role: rol,
        loggedIn: true,
      };

      loginUser(user);
      rolRedirect(rol);
  }

});
