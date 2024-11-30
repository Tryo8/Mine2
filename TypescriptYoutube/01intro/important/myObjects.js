"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "abdo",
    email: "as@jsj",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "sd", isPaid: false, email: "ddd@234" };
createUser(newUser);
function createCourse() {
    return { name: "reactsjs", price: 500 };
}
function getUserDet(user) {
    return { name: "", email: "", isActive: true };
}
getUserDet({ name: "", email: "", isActive: true });
