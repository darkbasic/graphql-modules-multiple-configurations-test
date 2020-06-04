import {GraphQLModule} from '@graphql-modules/core';
import {gql} from 'apollo-server';
import {Time} from './time.provider';
import {CommonModule} from './common.module';

export const TimeModule: GraphQLModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      time: String!
    }
  `,
  resolvers: {
    Query: {
      time(root, args, {injector}) {
        return injector.get(Time).getTime();
      },
    },
  },
  providers: [Time],
  imports: [CommonModule],
});
