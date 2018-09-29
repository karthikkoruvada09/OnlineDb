import { RouModule } from './rou.module';

describe('RouModule', () => {
  let rouModule: RouModule;

  beforeEach(() => {
    rouModule = new RouModule();
  });

  it('should create an instance', () => {
    expect(rouModule).toBeTruthy();
  });
});
