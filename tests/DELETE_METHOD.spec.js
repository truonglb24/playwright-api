const {test, expect} = require("@playwright/test");

test('should be able to delete a post', async ({request})=>{
    // Construct data
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    // Send DELETE request
    const response = await request.delete(url);

    // Verification
    expect(response.status()).toBe(200);
});