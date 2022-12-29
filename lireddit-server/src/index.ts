import { MikroORM, RequiredEntityData } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up;

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  // app.get('/', (_, res) => {
  //   res.send('hello');
  // });

  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app });
  });

  app.listen(4000, () => {
    console.log('Listening on port 4000');
  });
  const generator = orm.getSchemaGenerator();
  await generator.updateSchema();

  // const post = orm.em.create(Post, {
  //   title: 'my third post',
  // } as RequiredEntityData<Post>);
  // await orm.em.persistAndFlush(post);

  const posts = await orm.em.find(Post, {});
  console.log(posts);
};

main().catch((err) => {
  console.error(err);
});

// import { MikroORM, RequiredEntityData } from '@mikro-orm/core';
// import { __prod__ } from './constants';
// import { Post } from './entities/Post';

// const main = async () => {
//   const orm = await MikroORM.init({
//     entities: [Post],
//     dbName: 'lireddit',
//     type: 'postgresql',
//     debug: !__prod__,
//   });

//   const post = orm.em.fork({}).create(Post, {
//     title: 'my first post',
//   } as RequiredEntityData<Post>);
//   await orm.em.persistAndFlush(post);
//   // await orm.em.persistAndFlush;
//   // await orm.em.nativeInsert(Post, { title: 'my second post' });
// };

// main().catch((err) => {
//   console.error(err);
// });
