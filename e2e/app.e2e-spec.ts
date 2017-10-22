import { TeacherProfilePage } from './app.po';

describe('teacher-profile App', () => {
  let page: TeacherProfilePage;

  beforeEach(() => {
    page = new TeacherProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
