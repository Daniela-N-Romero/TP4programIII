import { getUser } from "./utils/localStorage.ts"

const autoRedirect = () => {
    const user = getUser();
    if (!user) return;
    

}
