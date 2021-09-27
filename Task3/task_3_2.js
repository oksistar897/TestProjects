class Validator {
    constructor(email, phone, date) {
        this.email = email;
        this.phone = phone;
        this.date = date;
    }
    isEmail() {
        let regexpEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/g;
        console.log(regexpEmail.test(this.email));
    }
    isUrkainianPhoneNumber() {
        let redexpPhoneNumber = /^(\+38)\d{10}$/;
        console.log(redexpPhoneNumber.test(this.phone));
    }
    isDate() {
        let regexpDate = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
        console.log(regexpDate.test(this.date));
    }
}
let validation = new Validator("rtthf@gmail.com", "+380730229556", "1998-12-30")
validation.isEmail();
validation.isUrkainianPhoneNumber();
validation.isDate();