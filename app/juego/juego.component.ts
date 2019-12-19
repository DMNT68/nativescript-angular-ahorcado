import { Component, Input } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { JuegoService } from '../juego.service';
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";


@Component({
  selector: "juego",
  moduleId: module.id,
  templateUrl: "./juego.component.html",
  styleUrls: ['./juego.component.css']
})

export class JuegoComponent {
     palabra: string;
     palabraOculta = '';
     intentos=0;
     gano=false;
     perdio=false;
     letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    constructor(private router: RouterExtensions, private js:JuegoService){
      console.log('palabra inyectada',this.palabra);
        this.palabra = js.palabra;
        this.palabraOculta = '_ '.repeat(this.palabra.length);
    }

    comprobar(letra) {
        this.existeLetra(letra);
        const palabraOcultaArr = this.palabraOculta.split(' ');
        for (let i = 0; i < this.palabra.length; i++) {
          if (this.palabra[i] === letra) {
            palabraOcultaArr[i] = letra;
          }
        }
        this.palabraOculta = palabraOcultaArr.join(' ');
        this.verificaGane();
      }
    
      verificaGane() {
        const  palabraArr = this.palabraOculta.split(' ');
        const palabraEvaluar = palabraArr.join('');
        if (palabraEvaluar === this.palabra) {
          this.gano = true;
          TNSFancyAlert.showSuccess("FELICITACIONES!", "Felidades Ganaste", "Nuevo Juego!").then(() => {
            this.reiniciar();
            this.regresar();
            return;
          });
        }
    
        if (this.intentos >= 9) {
          this.perdio = true;
          TNSFancyAlert.showError("LÁSTIMA 😢","Perdiste el Juego","Reiniciar").then(()=>{
            this.reiniciar();
            return;
          });
        }
      }
    
      existeLetra(letra) {
        if (this.palabra.indexOf( letra ) >= 0 ) {
          //  console.log('letra existe' + letra);
        } else {
          this.intentos++;
          if(this.intentos == 8){
            TNSFancyAlert.showWarning("ADVERTENCIA", "Te queda un intento mas. Si Fallas perderás el juego", 'OK');
          }
        }
      }


      reiniciar(){
        this.palabraOculta = '_ '.repeat(this.palabra.length);
        this.perdio=false;
        this.gano=false;
        this.intentos=0;
      }

      regresar(){
        this.router.navigate([''],{transition:{name:'slideRight'}});
      }
}
