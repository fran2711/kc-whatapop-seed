import { Injectable } from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Product} from "../models/product";
import {ProductService} from "./product.service";
import {ProductFilter} from "../models/product-filter";
import {Observable} from "rxjs";

@Injectable()
export class SoldProductsResolve implements Resolve<Product[]>{

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Yellow Path                                                      |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Aquí toca hacer varias cosas:                                    |
    |                                                                  |
    | 1. Debemos hacer que SoldProductsResolve resuelva datos durante  |
    |    la naveación de la ruta '/reset', por tanto, haz lo que creas |
    |    oportuno para ello. Como pista te diré: Resolve<T>.           |
    |                                                                  |
    | 2. Debemos resolver la colección de productos vendidos. Toca ir  |
    |    a servidor a través de ProductService, que tendrás que        |
    |    inyectar como dependencia. Además, debes crear un nuevo       |
    |    ProductFilter que contemple el filtro a aplicar en servidor.  |
    |    Fíjate en qué se diferencia un producto a la venta de uno     |
    |    ya vendido; quizá te ayude con este punto.                    |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    constructor(private _productService: ProductService){}

    private _productFilter: ProductFilter = {};

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]>{
        this._productFilter.state = "sold";
        return this._productService.getProducts(this._productFilter);
    }
}
