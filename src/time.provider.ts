import {Injectable, ProviderScope, Inject} from '@graphql-modules/di';
import {Format24h} from './format24h.symbol';

@Injectable({
  scope: ProviderScope.Session,
})
export class Time {
  @Inject(Format24h) format24h: boolean | undefined;

  getTime() {
    if (this.format24h === undefined) {
      throw new Error('Time format is undefined');
    }
    return this.format24h ? '16:30' : '4:30 pm';
  }
}
