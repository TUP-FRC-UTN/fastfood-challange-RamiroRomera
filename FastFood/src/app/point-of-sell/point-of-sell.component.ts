import { Component, EventEmitter, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidoItem } from '../../models/pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {
  constructor(private pedidosService: PedidosService) {
  }

  pedidosEntregar : PedidoItem[] = []

  // pedidoEmmiter: EventEmitter<PedidoItem> = new EventEmitter<PedidoItem>();

  nuevoPedido : PedidoItem = {
    numero: 0,
    nombre: '',
    descripcion: ''
  }

  pedidoVacio : PedidoItem = {
    numero: 0,
    nombre: '',
    descripcion: ''
  } 
  
  enviarNuevoPedido() {
    this.pedidosService.agregarNuevoPedido(this.nuevoPedido);
    // this.pedidoEmmiter.emit(this.nuevoPedido)
    this.nuevoPedido = this.pedidoVacio;
  }

  ngOnInit() {
    this.pedidosService.getPedidosTerminados().subscribe(pedidos => this.pedidosEntregar = pedidos)
  }

  pedidoEntregado(pedido: PedidoItem) {
    this.pedidosService.entregarPedido(pedido);
  }
}
