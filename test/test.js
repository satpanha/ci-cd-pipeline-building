import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  it('returns HTTP 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
  });

  it('returns the expected greeting', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Hello, GitHub Actions!');
  });
});

describe('GET /health', () => {
  it('returns 200 and { status: "ok" }', async () => {
    const res = await request(app).get('/health');

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ status: 'ok' });
  });
});
