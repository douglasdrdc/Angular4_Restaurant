"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.macthes = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
// Simula o banco de dados atrvés de um conjunto par valor
exports.users = {
    'douglas@gmail.com': new User('douglas@gmail.com', 'Douglas', 'teste123'),
    'anapaula@hotmail.com': new User('anapaula@hotmail.com', 'Ana Paula', 'admin123')
};
