import { generateClient } from 'aws-amplify/api';
import type { Schema } from './resource';

const client = generateClient<Schema>();

async function createPost() {
  await client.models.Post.create({
    title: 'Hello world',
    location: {
      lat: 123,
      long: 123,
    },
  });
}

async function test() {
  const {
    data: [post],
  } = await client.models.Post.list();

  const { data } = await client.models.Post.get({ id: 'MyId' });

  const { data: data2 } = await client.mutations.myMutation();

  type TM = typeof data2;

  type TPost = typeof post;
  //    ^?
}
