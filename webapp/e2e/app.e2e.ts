import { OpenorderPage } from './app.po';

describe('openorder App', function() {
  let page: OpenorderPage;

  beforeEach(() => {
    page = new OpenorderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('openorder works!');
  });
});
