import { Role } from './role';

export class User {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    role: Role;
    token?: string;
}