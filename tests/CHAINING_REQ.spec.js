/*
 - Create order -> Read order details -> Update order -> Delete order || CRUD
*/
require('dotenv').config()
const { test, expect } = require("@playwright/test");


test('should be able to perform CRUD on post type', async ({request})=>{
    
    // Consstruct data
    const baseUrl = process.env.BASE_URL;
    console.log(baseUrl);
    
    const postContent = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    const putContent = {
        id: 1,
        title: 'truonglb',
        body: 'this is body',
        userId: 1,
    };
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };
    const postOptions = {
        headers:headers,
        data: postContent
    };
    const putOptions = {
        headers:headers,
        data: putContent
    };
    // Create a post
    const postRes = await request.post(baseUrl + '/posts', postOptions);
    const resBody = await postRes.json();
    let postId = resBody.id; // 101
    postId = Number(postId) - 1; // 100
    // TODO: Verification

    // Reuse the post ID to read the details
    const getRes = await request.get(`${baseUrl}/posts/${postId}`);
    // TODO: Verification

    // Update the post
    const putRes = await request.put(`${baseUrl}/posts/${postId}`, putOptions);
    // TODO: Verification

    // Delete the post
    const deleteRes = await request.delete(`${baseUrl}/posts/${postId}`);
    // TODO: Verification

})