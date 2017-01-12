import { Observable } from 'rxjs-es/Observable';

Observable.create((obs) => { for (let n of [1, 2, 3]) obs.next(n); })
  .subscribe((x) => console.log(`Received ${x}`));
