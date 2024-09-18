import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidoItem } from '../../models/pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent {
  constructor(private pedidosService: PedidosService) {
  }

  pedidosCocinar : PedidoItem[] = []
  pedidosCoccion : PedidoItem[] = []
  
  ngOnInit() {
    this.pedidosService.getPedidosCocinar().subscribe(pedidos => this.pedidosCocinar = pedidos)
    this.pedidosService.getPedidosCoccion().subscribe(pedidos => this.pedidosCoccion = pedidos)
  }
  
  empezarCoccion(pedido: PedidoItem) {
    this.pedidosService.empezarCoccionPedido(pedido)
  }
  
  terminarCoccion() {
    this.pedidosService.terminarCoccionPedido(this.pedidosCoccion[0])
  }
}
