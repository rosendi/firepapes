import { Pipe } from 'angular2/angular2'

import { QueryPipeTransform } from './query_pipe_transform'
import { toFirebaseQuery } from '../utils/to_firebase_query'

@Pipe({
  name: 'orderByValue',
})

export class OrderByValuePipe implements QueryPipeTransform {
  transform(firebaseRef: string | FirebaseQuery, args: string[] = []): FirebaseQuery {
    if (!firebaseRef) {
      return null;
    }

    return toFirebaseQuery(firebaseRef).orderByValue();
  }
}
