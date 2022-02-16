
const assert = require('assert');

const mainPage = require('../../test/pageobjects/mainPage');
const resultListPage = require('../../test/pageobjects/resultPage');



describe('Search functionality suite', () => {
    it('execute 1,3,10', async () => {
        
        
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
        
        let searchInput = await mainPage.searchInput;
        
        await searchInput.addValue('Appian');

        await browser.pause(1000);

        await browser.keys('\uE007');

     });
     it('16. Next page redirection', async () => {
        
        
        let nextPageButton = await resultListPage.nextPageButton;
        
        await nextPageButton.scrollIntoView();

        await nextPageButton.click();

        await browser.pause(1000);

        let currentPage = await resultListPage.currentPage;

        assert.strict(await currentPage.isClickable(), false);

        assert.strict(await currentPage.getText(), '2');

     });
     it('17. Previous page redirection', async () => {
        
        
        let previousPageButton = await resultListPage.previousPageButton;
        
        await previousPageButton.scrollIntoView();

        await previousPageButton.click();

        await browser.pause(1000);

        let currentPage = await resultListPage.currentPage;

        assert.strict(await currentPage.isClickable(), false);

        assert.strict(await currentPage.getText(), '1');

     });
    });