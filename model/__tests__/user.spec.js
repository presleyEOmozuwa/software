const { expect, it } = require('@jest/globals');
const app = require('../app');
const request = require('supertest');

describe('User Controller', () => {
    it("should return a list of users with status code 200", async () => {
        const { body, statusCode } = await request(app).get('/users');
        console.log(body);
        console.log(statusCode);
        expect(statusCode).toBe(200);
    })

    it("should return a specific user with status code 200", async () => {
        const { body, statusCode } = await request(app).get('/userbyid');
        console.log(body);
        console.log(statusCode);
        expect(statusCode).toBe(200);
    })
})