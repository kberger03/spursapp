"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var editGameModal_form_1 = require("./editGameModal.form");
var games_service_1 = require("../services/games.service");
var editGameModalComponent = (function () {
    function editGameModalComponent(gamesService) {
        var _this = this;
        this.gamesService = gamesService;
        this.oneGame = '';
        this.singularGame = '';
        this.game = new editGameModal_form_1.editGameModalForm('', '', '', 0, 0);
        this.submitted = false;
        this.oneGame = this.gamesService.getOption();
        this.gamesService.getGame(this.oneGame).subscribe(function (data) {
            _this.singularGame = data;
            console.log("singular game is " + data);
        });
    }
    editGameModalComponent.prototype.onSubmit = function (value) {
        console.log(value);
        this.submitted = true;
    };
    return editGameModalComponent;
}());
editGameModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'editGameModal-cmp',
        templateUrl: 'editGameModal.html'
    }),
    __metadata("design:paramtypes", [games_service_1.GamesService])
], editGameModalComponent);
exports.editGameModalComponent = editGameModalComponent;
