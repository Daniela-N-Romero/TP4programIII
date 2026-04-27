import type { IUser} from "../types/IUser";
import type { IUserStorage} from "../types/IUserStorage";


export const loginUser = (user: IUser) => {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
};
export const getUser = () => {
  return localStorage.getItem("userData");
};
export const removeUser = () => {
  localStorage.removeItem("userData");
};

export const getUsers = (): IUserStorage[] => {
    const users = localStorage.getItem("users")
    return users? JSON.parse(users) : [] 
}

export const saveUser = (user: IUserStorage) => {
  const users = getUsers();
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users));
};
