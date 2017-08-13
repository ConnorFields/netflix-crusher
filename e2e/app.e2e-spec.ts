import { NetflixCrusherPage } from './app.po';

describe('netflix-crusher App', function() {
  let page: NetflixCrusherPage;

  beforeEach(() => {
    page = new NetflixCrusherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
