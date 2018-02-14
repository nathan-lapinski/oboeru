import { OboeruPage } from './app.po';

describe('oboeru App', () => {
  let page: OboeruPage;

  beforeEach(() => {
    page = new OboeruPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
