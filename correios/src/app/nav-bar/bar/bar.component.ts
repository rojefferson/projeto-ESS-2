import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public options = [{path: 'correios/cadastrar-pedido', text: 'Cadastrar Pedido'}, {path: 'correios/pedidos', text: 'Pedidos'}, {path: 'correios/envio-de-pacote', text: 'Entregas'}, {path: 'correios/rota', text: 'Rotas'}]

  constructor() { }

  ngOnInit(): void {
  }

  showNavOptions(): void {
    document.querySelector('.navoptions')?.classList.toggle('navoptions-show');
  }

}
