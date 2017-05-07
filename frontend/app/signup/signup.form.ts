// signup.form.ts
//The form structure for adding an admin
export class SignupForm {
    constructor(
        public name: string,
        public email: string,
        public username: string,
        public password: string
    ) { }
}