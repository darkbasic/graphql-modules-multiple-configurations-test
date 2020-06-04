import {GraphQLModule} from '@graphql-modules/core';
import {Format24h} from './format24h.symbol';
import {ProviderScope} from '@graphql-modules/di';

export const CommonModule: GraphQLModule = new GraphQLModule({
  providers: ({config: {format24h}}) => {
    return [
      {
        provide: Format24h,
        scope: ProviderScope.Application,
        useValue: format24h,
      },
    ];
  },
});
