import { Promise } from 'es6-promise';
import { Observable } from 'rxjs-es/Observable';
import 'rxjs-es/add/observable/of';
import 'rxjs-es/add/operator/map';

Observable.of(1,2,3,4,5).map(x => x + '!!!').subscribe((x) => console.log(`Received ${x}`));
