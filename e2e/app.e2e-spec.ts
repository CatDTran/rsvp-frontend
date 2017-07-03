import { RsvpFrontendPage } from './app.po';

describe('rsvp-frontend App', () => {
  let page: RsvpFrontendPage;

  beforeEach(() => {
    page = new RsvpFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
