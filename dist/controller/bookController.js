"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bookModel_1 = __importDefault(require("../model/bookModel"));
exports.default = {
    listAll: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var books, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, bookModel_1.default.find()];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, res.json(books)];
                    case 2:
                        error_1 = _a.sent();
                        res.send('Erro interno no servidor!');
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    list: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, books, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, bookModel_1.default.findById(id)];
                    case 2:
                        books = _a.sent();
                        return [2 /*return*/, res.send(books)];
                    case 3:
                        error_2 = _a.sent();
                        res.send('Erro interno no servidor!');
                        console.error(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var book, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        book = new bookModel_1.default(req.body);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, book.save()];
                    case 2:
                        _a.sent();
                        res.send(book);
                        return [2 /*return*/, true];
                    case 3:
                        error_3 = _a.sent();
                        res.send('Erro interno no servidor!');
                        console.error(error_3);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, dataUpdate, update, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        dataUpdate = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, bookModel_1.default.findByIdAndUpdate(id, dataUpdate, { new: true })];
                    case 2:
                        update = _a.sent();
                        if (update)
                            res.send(dataUpdate);
                        return [2 /*return*/, true];
                    case 3:
                        error_4 = _a.sent();
                        res.send('Erro interno no servidor!');
                        console.error(error_4);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var book, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bookModel_1.default.findById(req.params.id)];
                    case 1:
                        book = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (book === null || book === void 0 ? void 0 : book.remove())];
                    case 3:
                        _a.sent();
                        res.send('Livro deletado com sucesso!');
                        return [2 /*return*/, true];
                    case 4:
                        error_5 = _a.sent();
                        res.send('Erro interno no servidor!');
                        console.error(error_5);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
};
