import { Inject, Injectable } from "@angular/core";
import { Http, RequestOptions, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Product } from "../models/product";
import { ProductFilter } from "../models/product-filter";
import { BackendUri } from "../app.settings";

@Injectable()
export class ProductService {

    constructor(
        @Inject(BackendUri) private _backendUri: string,
        private _http: Http) { }

    getProducts(filter: ProductFilter = undefined): Observable<Product[]> {

        let search: URLSearchParams = new URLSearchParams();

        if (filter) {
            if (filter.text) {
                search.set("q", filter.text);
            }
            if (filter.category) {
                search.set("category.id", filter.category);
            }
            if (filter.state) {
                search.set("state", filter.state);
            }
            // if (filter.price) {
            //     search.set("price_lte", filter.price);
            // }
            // if (filter.seller) {
            //     search.set("seller.id", filter.seller);
            // }
        }

        search.set("_sort", "publishedDate");        search.set("_order", "DESC");

        let options: RequestOptions = new RequestOptions();
        options.search = search;

        return this._http
            .get(`${this._backendUri}/products`, options)
            .map((data: Response): Product[] => Product.fromJsonToList(data.json()));
    }

    getProduct(productId: number): Observable<Product> {
        return this._http
                   .get(`${this._backendUri}/products/${productId}`)
                   .map((data: Response): Product => Product.fromJson(data.json()));
    }

    buyProduct(productId: number): Observable<Product> {
        let body: any = { "state": "sold" };
        return this._http
                   .patch(`${this._backendUri}/products/${productId}`, body)
                   .map((data: Response): Product => Product.fromJson(data.json()));
    }

    setProductAvailable(productId: number): Observable<Product> {
        let body: any = { "state": "selling" };
        return this._http
                   .patch(`${this._backendUri}/products/${productId}`, body)
                   .map((data: Response): Product => Product.fromJson(data.json()));
    }
}
