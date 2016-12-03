import { CutitAngular2Page } from './app.po';

describe('cutit-angular-2 App', function() {
  let page: CutitAngular2Page;

  beforeEach(() => {
    page = new CutitAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
