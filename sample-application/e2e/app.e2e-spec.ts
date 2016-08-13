import { SampleApplicationPage } from './app.po';

describe('sample-application App', function() {
  let page: SampleApplicationPage;

  beforeEach(() => {
    page = new SampleApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
