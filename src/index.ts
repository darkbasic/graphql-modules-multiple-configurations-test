import 'reflect-metadata';
import {ApolloServer, gql} from 'apollo-server';
import {AppModule} from './app.module';
import {createTestClient} from 'apollo-server-testing';

const startTest = async (format24h: boolean) => {
  const {schema} = AppModule.forRoot({format24h});

  const server = new ApolloServer({schema});
  const {url} = await server.listen();
  console.log(`Server ready at ${url}`);

  const {query} = createTestClient(server);
  const res = await query({
    query: gql`
      {
        time
      }
    `,
  });
  console.log('res: ', res.errors ?? res.data);

  await server.stop();
};

(async () => {
  await startTest(true);
  await startTest(false);
})();
