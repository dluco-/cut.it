import { CutitPage } from './app.po';

describe('cutit App', function() {
  let page: CutitPage;

  beforeEach(() => {
    page = new CutitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
