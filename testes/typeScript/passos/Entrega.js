"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^eu estou na pagina de login e efetuo meu login com nome: "([^\"]*)" e senha: "([^\"]*)"$/, (nome, senha) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Login");
        yield protractor_1.$("input[name='login']").sendKeys(nome);
        yield protractor_1.$("input[name='senha']").sendKeys(senha);
        yield protractor_1.$("button[name='submit']").click();
    }));
    Given(/^Estou na tela de entrega$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/#/correios/entrega");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
    }));
    Given(/^Adiciono os produtos a entrega$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
        yield protractor_1.$("button[name='adicionar']").click();
        yield protractor_1.$("button[name='adicionar']").click();
        yield protractor_1.$("button[name='adicionar']").click();
    }));
    Given(/^Remove um produto da entrega$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Correios");
        yield protractor_1.$("button[name='remover']").click();
    }));
});
