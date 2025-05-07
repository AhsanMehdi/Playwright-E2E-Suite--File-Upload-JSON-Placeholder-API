/*
-   import the dependencies
*/
import {test, expect, request} from '@playwright/test'

//  define the base url 
const   base_url = 'https://jsonplaceholder.typicode.com'

/*
-   suite to test the "Post/posts"
*/
// define the post id to be updated
const postId = 1;

test.describe(' PATCH /posts/{id}', () => {
  let api_object;
    /*
     - hook for initializing the api object only one time
    */
  test.beforeAll(async ({ playwright }) => {
    api_object = await request.newContext();
  });
    /*
     - hook to clear api object after execution
    */
  test.afterAll(async () => {
    await api_object.dispose();
  });

  /*
  -----------------        Put              ---------------------
  */
 // empty body
  test('send put request with empty body', async () => {
    const response = await api_object.put(`${base_url}/posts/${postId}`, {
      data: {}
    });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json).toEqual({ id: postId });
  });
  // invalid request
  test('send put request with invalid id', async () => {
    const response = await api_object.put(`${base_url}/posts/invalid-id`, {
      data: {
        title: 'Test',
        body: 'Body',
        userId: 1
      }
    });
    expect(response.status()).toBe(500); // JSONPlaceholder accepts this
  });
  // less than required arguments
  test('send put request with missing arguments', async () => {
    const response = await api_object.put(`${base_url}/posts/${postId}`, {
      data: {
        title: 'Only title'
      }
    });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.title).toBe('Only title');
  });
  // extra fields
  test('send put requests with extra fields', async () => {
    const response = await api_object.put(`${base_url}/posts/${postId}`, {
      data: {
        title: 'Test',
        body: 'Test body',
        userId: 1,
        extraField: 'extra'
      }
    });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.extraField).toBe('extra');
  });

  /*
  -----------------        Patch              ---------------------
  */
 // empty body
  test('send patch request with empty body', async () => {
    const response = await api_object.patch(`${base_url}/posts/${postId}`, {
      data: {}
    });
    expect(response.status()).toBe(200);
  });
  // null values
  test('send patch request with null values', async () => {
    const response = await api_object.patch(`${base_url}/posts/${postId}`, {
      data: {
        title: null
      }
    });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.title).toBeNull();
  });
  // longest string values
  test('send patch request with longest strings', async () => {
    const longTitle = 'a'.repeat(10000);
    const response = await api_object.patch(`${base_url}/posts/${postId}`, {
      data: {
        title: longTitle
      }
    });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.title.length).toBe(10000);
  });
  // numeric data instead of string
  test('send patch request which contains the numeric values', async () => {
    const response = await api_object.patch(`${base_url}/posts/${postId}`, {
      data: {
        title: 123,
        body: 456
      }
    });
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(typeof json.title).toBe('number');
  });
  // invalid id
  test('send invalid patch request', async () => {
    const response = await api_object.patch(`${base_url}/posts/9999`, {
      data: {
        title: 'Non-existent ID'
      }
    });
    expect(response.status()).toBe(200); // JSONPlaceholder still returns 200
  });

});
