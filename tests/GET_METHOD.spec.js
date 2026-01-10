const {test, expect} = require("@playwright/test");

test('should be able to send a GET method request', async({request})=>{
    // Send GET Request
    let res = await request.get("https://jsonplaceholder.typicode.com/posts")
    
    // Extract response data
    const status = res.status();
    const jsonResponse = await res.json();
    let randomIndex = Math.floor(Math.random() * jsonResponse.length);
    const randomPost = jsonResponse[randomIndex];

    // Verification
    expect(status).toBe(200)
    expect(jsonResponse.length).toBeGreaterThan(99)

    const {userId, id,title, body} = randomPost;
    expect(userId).toBeTruthy()
    expect(id).toBeTruthy()
    expect(title).toBeTruthy()
    expect(body).toBeTruthy()

});