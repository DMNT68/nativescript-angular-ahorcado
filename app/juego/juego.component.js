"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var JuegoComponent = /** @class */ (function () {
    function JuegoComponent(router) {
        this.router = router;
        this.palabraOculta = '';
        this.intentos = 0;
        this.gano = false;
        this.perdio = false;
        this.letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        console.log('palabra inyectada', this.palabra);
        this.palabraOculta = '_ '.repeat(this.palabra.length);
    }
    JuegoComponent.prototype.comprobar = function (letra) {
        this.existeLetra(letra);
        var palabraOcultaArr = this.palabraOculta.split(' ');
        for (var i = 0; i < this.palabra.length; i++) {
            if (this.palabra[i] === letra) {
                palabraOcultaArr[i] = letra;
            }
        }
        this.palabraOculta = palabraOcultaArr.join(' ');
        this.verificaGane();
    };
    JuegoComponent.prototype.verificaGane = function () {
        var palabraArr = this.palabraOculta.split(' ');
        var palabraEvaluar = palabraArr.join('');
        if (palabraEvaluar === this.palabra) {
            this.gano = true;
            console.log('Usuario Gano');
        }
        if (this.intentos >= 9) {
            this.perdio = true;
            console.log('Usuario perdio');
        }
    };
    JuegoComponent.prototype.existeLetra = function (letra) {
        if (this.palabra.indexOf(letra) >= 0) {
            //  console.log('letra existe' + letra);
        }
        else {
            this.intentos++;
        }
    };
    JuegoComponent.prototype.reiniciar = function () {
        this.palabraOculta = '_ '.repeat(this.palabra.length);
        this.perdio = false;
        this.gano = false;
        this.intentos = 0;
    };
    JuegoComponent.prototype.regresar = function () {
        this.router.navigate(['']);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], JuegoComponent.prototype, "palabra", void 0);
    JuegoComponent = __decorate([
        core_1.Component({
            selector: "juego",
            moduleId: module.id,
            templateUrl: "./juego.component.html",
            styleUrls: ['./juego.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], JuegoComponent);
    return JuegoComponent;
}());
exports.JuegoComponent = JuegoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVlZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianVlZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELHNEQUErRDtBQVMvRDtJQVVJLHdCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVIzQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQUMsQ0FBQyxDQUFDO1FBQ1gsU0FBSSxHQUFDLEtBQUssQ0FBQztRQUNYLFdBQU0sR0FBQyxLQUFLLENBQUM7UUFDYixXQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ25ELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDaEQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNFLElBQU8sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsd0NBQXdDO1FBQzFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBdkRPO1FBQVIsWUFBSyxFQUFFOzttREFBaUI7SUFEakIsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FZOEIseUJBQWdCO09BVm5DLGNBQWMsQ0F5RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImp1ZWdvXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2p1ZWdvLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbJy4vanVlZ28uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSnVlZ29Db21wb25lbnQge1xyXG4gICAgIEBJbnB1dCgpIHBhbGFicmE6IHN0cmluZztcclxuICAgICBwYWxhYnJhT2N1bHRhID0gJyc7XHJcbiAgICAgaW50ZW50b3M9MDtcclxuICAgICBnYW5vPWZhbHNlO1xyXG4gICAgIHBlcmRpbz1mYWxzZTtcclxuICAgICBsZXRyYXMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLFxyXG4gICAgICAgICAgICAnSycsICdMJywgJ00nLCAnTicsICfDkScsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLFxyXG4gICAgICAgICAgICAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWiddO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwYWxhYnJhIGlueWVjdGFkYScsdGhpcy5wYWxhYnJhKTtcclxuICAgICAgICB0aGlzLnBhbGFicmFPY3VsdGEgPSAnXyAnLnJlcGVhdCh0aGlzLnBhbGFicmEubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wcm9iYXIobGV0cmEpIHtcclxuICAgICAgICB0aGlzLmV4aXN0ZUxldHJhKGxldHJhKTtcclxuICAgICAgICBjb25zdCBwYWxhYnJhT2N1bHRhQXJyID0gdGhpcy5wYWxhYnJhT2N1bHRhLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhbGFicmEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhbGFicmFbaV0gPT09IGxldHJhKSB7XHJcbiAgICAgICAgICAgIHBhbGFicmFPY3VsdGFBcnJbaV0gPSBsZXRyYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWxhYnJhT2N1bHRhID0gcGFsYWJyYU9jdWx0YUFyci5qb2luKCcgJyk7XHJcbiAgICAgICAgdGhpcy52ZXJpZmljYUdhbmUoKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHZlcmlmaWNhR2FuZSgpIHtcclxuICAgICAgICBjb25zdCAgcGFsYWJyYUFyciA9IHRoaXMucGFsYWJyYU9jdWx0YS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGNvbnN0IHBhbGFicmFFdmFsdWFyID0gcGFsYWJyYUFyci5qb2luKCcnKTtcclxuICAgICAgICBpZiAocGFsYWJyYUV2YWx1YXIgPT09IHRoaXMucGFsYWJyYSkge1xyXG4gICAgICAgICAgdGhpcy5nYW5vID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdVc3VhcmlvIEdhbm8nKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAodGhpcy5pbnRlbnRvcyA+PSA5KSB7XHJcbiAgICAgICAgICB0aGlzLnBlcmRpbyA9IHRydWU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVXN1YXJpbyBwZXJkaW8nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBleGlzdGVMZXRyYShsZXRyYSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhbGFicmEuaW5kZXhPZiggbGV0cmEgKSA+PSAwICkge1xyXG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdsZXRyYSBleGlzdGUnICsgbGV0cmEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmludGVudG9zKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlaW5pY2lhcigpe1xyXG4gICAgICAgIHRoaXMucGFsYWJyYU9jdWx0YSA9ICdfICcucmVwZWF0KHRoaXMucGFsYWJyYS5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMucGVyZGlvPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2Fubz1mYWxzZTtcclxuICAgICAgICB0aGlzLmludGVudG9zPTA7XHJcbiAgICAgIH1cclxuICAgICAgcmVncmVzYXIoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==