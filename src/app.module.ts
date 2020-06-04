import {GraphQLModule} from '@graphql-modules/core';
import {CommonModule} from './common.module';
import {TimeModule} from './time.module';

export const AppModule: GraphQLModule = new GraphQLModule({
  imports: ({config: {format24h}}) => [
    CommonModule.forRoot({format24h}),
    TimeModule, // Add .forRoot({}) as workaround
  ],
});
