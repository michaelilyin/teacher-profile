import {Subscription} from 'rxjs/Subscription';

export function unsubscribe(sub: Subscription) {
  if (sub) {
    sub.unsubscribe();
  }
}
