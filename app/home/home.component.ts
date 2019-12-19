import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { JuegoService } from '../juego.service';
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";


@Component({
    selector:'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent {

    palabra:string;

    constructor(private router: RouterExtensions, private js:JuegoService){}

    irJuego(){
        if(this.palabra==undefined){
            TNSFancyAlert.showError("Error","Ingresa una palabra","OK",1);
            return;
        }
        this.js.palabra = this.palabra.toUpperCase();
        this.router.navigate(['/juego'], {transition:{name:'slide'}});
    }

}