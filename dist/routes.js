"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bookController_1 = __importDefault(require("./controller/bookController"));
var routes = express_1.Router();
routes.get('/list', bookController_1.default.listAll);
routes.get('/list/:id', bookController_1.default.list);
routes.post('/create', bookController_1.default.create);
routes.put('/update/:id', bookController_1.default.update);
routes.delete('/delete/:id', bookController_1.default.delete);
exports.default = routes;
