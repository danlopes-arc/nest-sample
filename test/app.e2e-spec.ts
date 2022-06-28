import { Test, TestingModule } from '@nestjs/testing';
import * as supertest from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let request: supertest.SuperTest<supertest.Test>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = moduleFixture.createNestApplication();

    await app.init();

    request = supertest(app.getHttpServer());
  });

  it('should not GET /', () => {
    return request.get('/').expect(404);
  });
});
