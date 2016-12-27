import {Component, Input, Output, EventEmitter} from "@angular/core";

import { Product } from "../../models/product";

@Component({
    selector: "product",
    templateUrl: "./app/components/product/product.component.html"
})
export class ProductComponent {

    @Input() data: Product;

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Green Path                                                       |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Expón un atributo de salida con el decorador correspondiente. El |
    | tipo de dicho atributo debe permitir la emisión de eventos; la   |
    | idea es enviar al componente padre el producto sobre el cuál se  |
    | ha hecho clic. Y puesto que dicho clic se realiza en el template |
    | de este componente, necesitas, además, un manejador para el      |
    | mismo.                                                           |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    @Output() seeProductSelected: EventEmitter<Product> = new EventEmitter<Product>();


    notifySelectedProduct(product: Product): void {
        this.seeProductSelected.emit(product);
    }

}
