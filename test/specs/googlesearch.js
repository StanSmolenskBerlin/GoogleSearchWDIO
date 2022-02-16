
const assert = require('assert');

const mainPage = require('../../test/pageobjects/mainPage');
const resultListPage = require('../../test/pageobjects/resultPage');



describe('Search functionality suite', () => {
    it('execute 1,3', async () => {
        
        
        browser.url(mainPage.googleSearchURL);
       
        browser.setWindowSize(1400, 900);

        let coockieAccept = await mainPage.coockieAccept;

        await coockieAccept.waitUntil(function () {
          return  coockieAccept.isEnabled();
          }, {
            timeout: 5000,
            timeoutMsg: 'expected element is not visible after 5s'
          });   

            
        await coockieAccept.click();

        await browser.pause(3000);

        let coockieAcceptHeader = await mainPage.coockieAcceptHeader;

        assert.strictEqual(await coockieAcceptHeader.isDisplayed(), false);

        let usersSettings = await browser.execute(function () {   return this.localStorage.getItem('sb_wiz.zpc.'); });


        assert.notEqual(usersSettings, null);

 
     });
     it('10. Adding value', async () => {
        
        
        let searchInput = await mainPage.searchInput;
        
        await searchInput.addValue('Appian');

        await browser.pause(1000);

        assert.strictEqual(await searchInput.getValue(), 'Appian');

 
     });
     it('11. Result getting by using Enter', async () => {
        
        
      await browser.keys('\uE007');

      await browser.pause(1000);

        let firstRow = await resultListPage.firstRow;

        await firstRow.waitUntil(function () {
            return  firstRow.isEnabled();
            }, {
              timeout: 5000,
              timeoutMsg: 'expected element is not visible after 5s'
            });   
  
        
        assert.strictEqual(await firstRow.getText(), 'Appian: Low-Code Automatisierung ...\n' + 'https://appian.com › ...\n' + 'Appian ist eine einheitliche Plattform für den Wandel. Wir unterstützen unsere Kunden dabei, ihre wichtigsten Prozessabläufe zu erkennen, zu gestalten und zu ...');

        await browser.back();

        await browser.pause(1000);
  
 
     });
     it('12. Result getting by using Search button', async () => {
        
        
      let searchInput = await mainPage.searchInput;
        
      await searchInput.addValue('Appian');

      let gooogleSearchButton = await mainPage.gooogleSearchButton;

      let googleLogo = await mainPage.googleLogo;

      await googleLogo.click();
      
      await gooogleSearchButton.click();

      await browser.pause(1000);

        let firstRow = await resultListPage.firstRow;

        await firstRow.waitUntil(function () {
            return  firstRow.isEnabled();
            }, {
              timeout: 5000,
              timeoutMsg: 'expected element is not visible after 5s'
            });   
  
        
        assert.strictEqual(await firstRow.getText(), 'Appian: Low-Code Automatisierung ...\n' + 'https://appian.com › ...\n' + 'Appian ist eine einheitliche Plattform für den Wandel. Wir unterstützen unsere Kunden dabei, ihre wichtigsten Prozessabläufe zu erkennen, zu gestalten und zu ...');

      
 
     });
     it('13. Redirection to the link', async () => {
        
        
      let firstRow = await resultListPage.firstRow;

      await firstRow.click();

      await browser.pause(3500);

      assert.strictEqual(await browser.getTitle(), 'Appian: Low-Code Automatisierung, Unternehmensanwendungen, BPM, RPA');


   });
     it('14. Pictures Search', async () => {
        
      browser.url(mainPage.googleSearchURL);


      let bilder = await mainPage.bilder;

      await bilder.waitUntil(function () {
        return  bilder.isEnabled();
        }, {
          timeout: 5000,
          timeoutMsg: 'expected element is not visible after 5s'
        });   
        
      await bilder.click();
        
      let searchInput = await mainPage.searchInput;
        
      await searchInput.addValue('Appian');

      await browser.keys('\uE007');

      await browser.pause(1000);

      await browser.takeScreenshot();

      await browser.saveScreenshot('test/screenshots/13.pictures.search.png');


 
     });
     it('15. Invalid value search', async () => {
        
      browser.url(mainPage.googleSearchURL);
        
      let searchInput = await mainPage.searchInput;
        
      await searchInput.addValue('afkjafkasflasfklsakflkaslkfqkrnqkrnqkrn');

      await browser.keys('\uE007');


      await browser.pause(1000);

      let invalidSearchValueHeader = await resultListPage.invalidSearchValueHeader;

      assert.strictEqual(await invalidSearchValueHeader.getText(), 'Es wurden keine mit deiner Suchanfrage - afkjafkasflasfklsakflkaslkfqkrnqkrnqkrn - übereinstimmenden Dokumente gefunden.');
 
      let firstRow = await resultListPage.firstRow;

      assert.strictEqual(await firstRow.isDisplayed(), false);

     });
});