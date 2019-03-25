export class Users {

    username: string;
    password: string;
    role?:[string];
    token?:string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

}
