import { Injectable } from '@angular/core';
import { PedidoItem } from '../models/pedido';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  contador: number = 0
  
  listaPedidosEntregar: PedidoItem[] = []
  observableListaPedidosEntregar = new BehaviorSubject<PedidoItem[]>(this.listaPedidosEntregar)

  listaPedidosCocinar: PedidoItem[] = []
  observableListaPedidosCocinar = new BehaviorSubject<PedidoItem[]>(this.listaPedidosCocinar)

  listaPedidosCoccion: PedidoItem[] = []
  observableListaPedidosCoccion = new BehaviorSubject<PedidoItem[]>(this.listaPedidosCoccion)

  agregarNuevoPedido(pedidoNuevo: PedidoItem) {
    // console.log(pedidoNuevo)
    pedidoNuevo.numero = ++this.contador

    this.listaPedidosCocinar.push(pedidoNuevo)
  }

  empezarCoccionPedido(pedido: PedidoItem) {
    if (this.listaPedidosCoccion.length == 0) {
      for (let i = 0; i < this.listaPedidosCocinar.length; i++) {
        const pedidoCocinar = this.listaPedidosCocinar[i];
  
        if (pedidoCocinar.numero == pedido.numero) {
          this.listaPedidosCocinar.splice(i, 1)
          this.listaPedidosCoccion.push(pedidoCocinar)
        }
      }
    } else {
      alert("No se puede cocinar dos pedidos a la vez.")
    }
  }

  terminarCoccionPedido(pedido: PedidoItem) {
    for (let i = 0; i < this.listaPedidosCoccion.length; i++) {
      const pedidoCocinar = this.listaPedidosCoccion[i];

      if (pedidoCocinar.numero == pedido.numero) {
        this.listaPedidosCoccion.splice(0, 1)
        this.listaPedidosEntregar.push(pedidoCocinar)
      }
    }
  }

  entregarPedido(pedido: PedidoItem) {
    for (let i = 0; i < this.listaPedidosEntregar.length; i++) {
      const pedidoCocinar = this.listaPedidosEntregar[i];

      console.log(pedidoCocinar)
      console.log(pedido)

      if (pedidoCocinar.numero == pedido.numero) {
        console.log("Entregado")
        this.listaPedidosEntregar.splice(i, 1)
      }
    }
  }

  getPedidosCocinar() {
    return this.observableListaPedidosCocinar.asObservable()
  }

  getPedidosCoccion() {
    return this.observableListaPedidosCoccion.asObservable()
  }

  getPedidosTerminados() {
    return this.observableListaPedidosEntregar.asObservable()
  }

  constructor() { }
}
