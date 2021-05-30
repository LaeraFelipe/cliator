"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteCommandCase = void 0;
var ExecuteCommandCase = /** @class */ (function () {
    function ExecuteCommandCase(configuration, fileManager) {
        this.configuration = configuration;
        this.fileManager = fileManager;
    }
    ExecuteCommandCase.prototype.execute = function (type, args) { };
    ExecuteCommandCase.prototype.validate = function () { };
    return ExecuteCommandCase;
}());
exports.ExecuteCommandCase = ExecuteCommandCase;
