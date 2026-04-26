import type { IUser} from "../types/IUser";
import type { IUserStorage} from "../types/IUserStorage";


export const saveUser = (user: IUser) => {
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

