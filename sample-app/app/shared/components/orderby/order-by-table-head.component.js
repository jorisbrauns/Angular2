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
var core_1 = require('@angular/core');
var _1 = require('./');
var OrderByTableHeadComponent = (function () {
    function OrderByTableHeadComponent() {
        this.orderByUpdate = new core_1.EventEmitter();
    }
    OrderByTableHeadComponent.prototype.ngAfterViewInit = function () {
        console.log(this.orderByComponents);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OrderByTableHeadComponent.prototype, "orderByUpdate", void 0);
    __decorate([
        core_1.ViewChildren(_1.OrderByComponent), 
        __metadata('design:type', core_1.QueryList)
    ], OrderByTableHeadComponent.prototype, "orderByComponents", void 0);
    OrderByTableHeadComponent = __decorate([
        core_1.Component({
            selector: 'thead[order-by]',
            templateUrl: './app/shared/Components/orderby/order-by-table-head.component.html',
            styleUrls: ['./app/shared/Components/orderby/order-by-table-head.component.css'],
            directives: [_1.OrderByComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByTableHeadComponent);
    return OrderByTableHeadComponent;
}());
exports.OrderByTableHeadComponent = OrderByTableHeadComponent;
//# sourceMappingURL=order-by-table-head.component.js.map