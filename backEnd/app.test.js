const { response } = require('express');
const request = require('supertest');
const app = require('./app.js');

describe("These are the tests for GET", () => {

    test('GET /', async () => {
        const testVariable = "info at other endpoints.";
        
        return await request(app)
            .get('/')
            .then((response, request) =>{
                expect(200),
                expect(response.text).toEqual(testVariable)
                // console.log("This should be the response: ", response.text)
                // console.log("This should be the request: ", request)
            })
    });

    test('GET /books', async () => {
        const testVariable = "success!";
        

        return await request(app)
            .get('/books')
            .then((response, request) =>{
                console.log("response.body: ", response.body.message)
                expect(200),
                expect(response.body.message).toEqual(testVariable)
                // console.log("This should be the response: ", response.text)
                // console.log("This should be the request: ", request)
            })
    });

    test('GET /books/:id', async () => {
        const testVariable = "success!";
        

        return await request(app)
            .get('/books/1')
            .then((response, request) =>{
                console.log("response.body: ", response.body.message)
                expect(200),
                expect(response.body.message).toEqual(testVariable)
                // console.log("This should be the response: ", response.text)
                // console.log("This should be the request: ", request)
            })
    });

})