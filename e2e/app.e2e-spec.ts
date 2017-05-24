import { DoorlifePage } from './app.po';

describe('doorlife App', () => {
  let page: DoorlifePage;

  beforeEach(() => {
    page = new DoorlifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
