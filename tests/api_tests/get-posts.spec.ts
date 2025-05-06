/*
-   import the dependencies
*/
import {test, expect, request} from '@playwright/test'

//  define the base url 
const   base_url = 'https://jsonplaceholder.typicode.com'

/*
-   suite to test the "Get/posts"
*/
test.describe('Get/posts' , () => {
    // send a valid request
    test(' check the status of valid request, it should be 200' , async ()=>{
        const object = await request.newContext();
        const response = await object.get(`${base_url}/posts`);
        // log the response
        const response_body = await response.json();
        console.log(response_body)
        // validate the response 
        expect (response.status()).toBe(200);
    });
    // send valid request with adding query params 
    test(' should reponse with larger query params' , async ()=>{
        const object = await request.newContext();
        const response = await object.get(`${base_url}/posts?limit=100000`);
        // log the response
        const response_body = await response.json();
        console.log(response_body)
        // validate the response 
        expect (response.status()).toBe(200);
    });
    // send valid request with adding query params
    test(' send request with invalid query params' , async ()=>{
        const object = await request.newContext();
        const response = await object.get(`${base_url}/posts?author=unknown`);
        // log the response
        const response_body = await response.json();
        console.log(response_body)
        // validate the response 
        expect (response.status()).toBe(200);
    });

})


/*
-   suite to test the Get/Posts/byid
*/
test.describe('GET /posts/{id}', () => {
    // send invalid api with post id as string
    test(' response status should be 404 with invalid api request with id as string', async () => {
        const object = await request.newContext();
        const response = await object.get(`${base_url}/posts/hello`);
        // log the response
        const response_body = await response.json();
        console.log(response_body)
        // validate the response 
        expect (response.status()).toBe(404);
    });
    // send invalid api with post id that does not exists in the system
    test(' response status should be 404 with invalid api which does not exists ', async () => {
        const object = await request.newContext();
        const response = await object.get(`${base_url}/posts/100000000`);
        // log the response
        const response_body = await response.json();
        console.log(response_body)
        // validate the response 
        expect (response.status()).toBe(404);
    });
    // send invalid api with negative post id
    test(' response status should be 404 with invalid api request for negative id', async () => {
        const object = await request.newContext();
        const response = await object.get(`${base_url}/posts/-5`);
        // log the response
        const response_body = await response.json();
        console.log(response_body)
        // validate the response 
        expect (response.status()).toBe(404);
    });
  });