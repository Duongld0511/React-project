import { IAuth } from '../interface/auth';
import instance from "./instance";

export const signup = (user: IAuth) => {
    return instance.post("/signup", user)
}
export const signin = (user: IAuth) => {
    return instance.post("/signin", user)
}