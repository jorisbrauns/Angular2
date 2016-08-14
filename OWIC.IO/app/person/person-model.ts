export class Person {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    country: string;

    constructor(firstName:string, lastName:string, email:string, phoneNumber:number, country: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
    }

    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}