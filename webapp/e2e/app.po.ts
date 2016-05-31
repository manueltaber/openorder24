export class OpenorderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('openorder-app h1')).getText();
  }
}
