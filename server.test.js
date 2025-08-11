const request = require('supertest');
const app = require('./server');

describe('Hello World App', () => {
  test('should return Hello World on main page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });

  // This test will initially fail to demonstrate a failed test screenshot
  test('should fail initially for screenshot purposes', async () => {
    const response = await request(app).get('/');
    // Change this expectation to make it fail initially
    expect(response.text).toBe('Hello World FAIL');
  });
});