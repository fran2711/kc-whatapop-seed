import * as moment from "moment";
import "moment/locale/es";
import {Pipe, PipeTransform} from "@angular/core";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| Blue Path                                                        |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| Crea el pipe PublicationDatePipe. Su cometido es, partiendo de   |
| una fecha dada, retornar una cadena de texto que exprese el      |
| tiempo que ha pasado desde dicha fecha hasta ahora. Por ejemplo: |
| hace 2 horas. Para esta tarea nos apoyamos en la librería        |
| Moment.js; ya tienes hecho el import correspondiente, solo       |
| tienes que usarla donde proceda. Haciendo                        |
| 'moment(fecha).fromNow()' obtenemos justo lo que necesitamos.    |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


@Pipe ({
    name: "fromNow"
})

export class FromNowPipe implements PipeTransform {
    transform(timestamp: string) {
        return moment(timestamp).fromNow();
    }
}