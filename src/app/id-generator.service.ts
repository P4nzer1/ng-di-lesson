import { Injectable } from '@angular/core';
import { IdGenerator } from './id-generator';

@Injectable({
    providedIn: 'root'
})
export class IdGeneratorService extends IdGenerator {
    #id = 0;
  override generate(): number {
    return  ++this.#id;
  }
}
