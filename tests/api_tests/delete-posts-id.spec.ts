/*
-   import the dependencies
*/
import {test, expect, request} from '@playwright/test'

//  define the base url 
const   base_url = 'https://jsonplaceholder.typicode.com'

/*
-   suite to test the "Delete/post/byid"
*/

test.describe('delete /posts/{id} ', () => {
    // valid delete by id
  test('verify the 200 status for valid deletion of a post', async ({ request }) => {
    const response = await request.delete(`${base_url}/posts/1`);
    expect(response.status()).toBe(200);
  });
  // invalid delete
  test('verify the status of post which does not exist in the system', async ({ request }) => {
    const response = await request.delete(`${base_url}/posts/9999`);
    expect(response.status()).toBe(404);
  });
  // invalid due to endpoint
  test('verify the 404 status for ambigious endpoint', async ({ request }) => {
    const response = await request.delete(`${base_url}/post/1-1`);
    expect(response.status()).toBe(404);
  });
  // invalid when id of the posts is missing
  test('verify the 404 status when ID is missing', async ({ request }) => {
    const response = await request.delete(`${base_url}/posts/`);
    expect(response.status()).toBe(404);
  });
  // invalid when posts id is not a number
  test('verify the 404 status when ID is not a number', async ({ request }) => {
    const response = await request.delete(`${base_url}/posts/abc`);
    expect(response.status()).toBe(404);
  });
  // invalid request with id as the negative number
  test('verify the 404 status when ID is a negative number', async ({ request }) => {
    const response = await request.delete(`${base_url}/posts/-1`);
    expect(response.status()).toBe(404);
  });
  // invalid when posts id contains some special characters
  test('verify the 404 status for special characters as ID', async ({ request }) => {
    const response = await request.delete(`${base_url}/posts/@!$`);
    expect(response.status()).toBe(404);
  });

});
