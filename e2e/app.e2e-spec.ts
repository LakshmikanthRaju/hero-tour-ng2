import { HeroTourNg2Page } from './app.po';

describe('hero-tour-ng2 App', () => {
  let page: HeroTourNg2Page;

  beforeEach(() => {
    page = new HeroTourNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
