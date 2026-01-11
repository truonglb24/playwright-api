const { test, expect } = require("@playwright/test");

test('should be able to update part a post', async ({request})=>{
    // Construct data
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const postContent = {
        title: 'update title from truonglb',
        body: 'update body from truonglb'
    };
    const options = {
        headers : {
            'Content-type': 'application/json; charset=UTF-8',
        },
        data: postContent
    };
    // Send PATCH request
    const response = await request.patch(url, options);
    const status = response.status();
    const bodyJson = await response.json();

    //Verification
    expect(status).toBe(200);
    const {title, body} = bodyJson;
    expect(title).toBe(postContent.title);
    expect(body).toBe(postContent.body);
});