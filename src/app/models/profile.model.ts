interface ProfileModel {
    firstName: string;
    lastName: string;
    email: string;
    mobileNo: number;
    DOB: Date;
    address: string;
    country: string;
    selfInfo: string;
}

export class Profile implements ProfileModel {
    firstName = "";
    lastName = "";
    email = "";
    mobileNo = 0;
    DOB = new Date;
    address = "";
    country = "";
    selfInfo = ""
}
