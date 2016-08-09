"use strict";
var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function () {
        // Imaginary method that is supposed to validate an auth token
        // and return a boolean
        return true;
    };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map