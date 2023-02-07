import { Contact } from "./contact";
import { Course } from "./course"

export type Student = {
    id: number;
    name: string;
    nickname: string;
    graduated: boolean;
    imgUrl: string;
    birthDate: string;
    location: string;
    description: string;
    contact : Contact;
    courses: Course[];
}