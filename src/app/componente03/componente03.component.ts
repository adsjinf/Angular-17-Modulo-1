import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  // Variável de imagem
  imagem:string = 'dia.jpg';

  // Função para alterar imagem
  alterarImagem(){
    if(this.imagem == 'dia.jpg'){
      this.imagem = 'noite.jpg'
    }else{
      this.imagem = 'dia.jpg'
    }
  }
}
