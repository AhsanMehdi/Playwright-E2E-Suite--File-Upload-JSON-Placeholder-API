/*
-   import the dependencies
*/
import {test, expect, request} from '@playwright/test'

//  define the base url 
const   base_url = 'https://jsonplaceholder.typicode.com'

/*
-   suite to test the "Post/posts"
*/


test.describe(' POST/posts', () => {
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
  // empty string
  test('send the post request with empty strings and the status should be 201', async () => {
    const response = await api_object.post(`${base_url}/posts`, {
      data: {
        title: '',
        body: '',
        userId: 1
      }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('');
    expect(body.body).toBe('');
  });
  // numeric values
  test('send the post request with numberic values, and verify status', async () => {
    const response = await api_object.post(`${base_url}/posts`, {
      data: {
        title: 12345,
        body: 67890,
        userId: 1
      }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(typeof body.title).toBe('number');
  });
  // longest values as string
  test('send post request with the longest string as title or body', async () => {
    const longText = 'a'.repeat(10000);
    const response = await api_object.post(`${base_url}/posts`, {
      data: {
        title: longText,
        body: longText,
        userId: 1
      }
    });
    expect(response.status()).toBe(201);
  });
  // null values as input
  test('send post request with null values', async () => {
    const response = await api_object.post(`${base_url}/posts`, {
      data: {
        title: null,
        body: null,
        userId: 1
      }
    });
    expect(response.status()).toBe(201);
    const json = await response.json();
    expect(json.title).toBeNull();
  });
  // incomplete arguments / less arguments
  test('send post request with one less argument as required', async () => {
    const response = await api_object.post(`${base_url}/posts`, {
      data: {
        title: 'Missing userId',
        body: 'Edge case'
      }
    });
    expect(response.status()).toBe(201);
  });
  // more arguments
  test('send post request with extra arguments', async () => {
    const response = await api_object.post(`${base_url}/posts`, {
      data: {
        title: 'Test',
        body: 'Test',
        userId: 1,
        extraField: 'unexpected'
      }
    });
    expect(response.status()).toBe(201);
    const json = await response.json();
    expect(json.extraField).toBe('unexpected');
  });
  // negative data test
  test('send post request with negative numbers', async () => {
    const response = await api_object.post(`${base_url}/posts`, {
      data: {
        title: 'Negative userId',
        body: 'Edge case',
        userId: -1
      }
    });
    expect(response.status()).toBe(201);
  });

});
