export class Keyable<T> {
  constructor(public readonly key: string, public readonly data: T) {

  }
}

export function mapListKeys(snapshot) {
  return snapshot.map(element => {
    return new Keyable(element.key, element.payload.val());
  });
}
