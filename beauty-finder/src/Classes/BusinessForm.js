export default class BusinessForm {
    constructor(email, pswd) {
        this.email = email;
        this.pswd = pswd;

        this.formData = {};
    }

    setFormData(formData) {
        this.formData = formData;
    }

    getFormData() {
        return this.formData;
    }

}
export function createForm(email, pswd) {
    return new BusinessForm(email, pswd);
}
