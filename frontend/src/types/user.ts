import { Role } from "./role";

export type User = {
    id : number;
    email: string;
    name: string;
    roles : Role[];
}