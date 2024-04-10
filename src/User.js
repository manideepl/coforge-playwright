"use strict";
class Model {
    constructor(id, username, firstName, lastName) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const UserModel = new Model(94, "manideep", "manideep", "lanka");
console.log(UserModel);
