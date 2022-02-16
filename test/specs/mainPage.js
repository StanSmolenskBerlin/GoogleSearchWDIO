


const assert = require('assert');

const mainPage = require('../../test/pageobjects/mainPage');



describe('Search functionality suite', () => {
    it('1. URL can be opened', async () => {
        
        
        browser.url(mainPage.googleSearchURL);
       
        browser.setWindowSize(1400, 900);

        let coockieAccept = await mainPage.coockieAccept;

        await coockieAccept.waitUntil(function () {
          return  coockieAccept.isEnabled();
          }, {
            timeout: 5000,
            timeoutMsg: 'expected element is not visible after 5s'
          });   

        assert.strictEqual(await browser.getTitle(), 'Google');
        assert.strictEqual(await browser.getUrl(), 'https://www.google.com/');

    });
    it('2. Cookie pop-up', async () => {
        
        
       let coockieAcceptHeader = await mainPage.coockieAcceptHeader;

       assert.strictEqual(await coockieAcceptHeader.getText(), 'Bevor Sie zur Google Suche weitergehen');


    });
    it('3. Cookie confirmation', async () => {
        
        
      let coockieAccept = await mainPage.coockieAccept;
        
      await coockieAccept.click();

      await browser.pause(3000);

      let coockieAcceptHeader = await mainPage.coockieAcceptHeader;

      assert.strictEqual(await coockieAcceptHeader.isDisplayed(), false);

      let usersSettings = await browser.execute(function () {   return this.localStorage.getItem('sb_wiz.zpc.'); });


      assert.notEqual(usersSettings, null);

 
     });
     it('4. Rendering of the main components', async () => {
        
        
      let aboutGoogle = await mainPage.aboutGoogle;
        
      assert.strictEqual(await aboutGoogle.isDisplayed(), true);
     
      let store = await mainPage.store;
        
      assert.strictEqual(await store.isDisplayed(), true);

      let gMail = await mainPage.gMail;
        
      assert.strictEqual(await gMail.isDisplayed(), true);

      let bilder = await mainPage.bilder;
        
      assert.strictEqual(await bilder.isDisplayed(), true);

      let searchInput = await mainPage.searchInput;
        
      assert.strictEqual(await searchInput.isDisplayed(), true);

      let googleServices = await mainPage.googleServices;
        
      assert.strictEqual(await googleServices.isDisplayed(), true);

      let login = await mainPage.login;
        
      assert.strictEqual(await login.isDisplayed(), true);

      let gooogleSearchButton = await mainPage.gooogleSearchButton;
        
      assert.strictEqual(await gooogleSearchButton.isDisplayed(), true);
 
     });
     it('5. Redirection to the About Google', async () => {
        
        
      let aboutGoogle = await mainPage.aboutGoogle;
        
      await aboutGoogle.click();

      await browser.pause(300);

      assert.strictEqual(await browser.getTitle(), 'Google - Info');

      await browser.pause(300);

      await browser.back();

      await browser.pause(1000);


     });
     it('6. Redirection to Store', async () => {
        
        
      let store = await mainPage.store;

      await store.waitUntil(function () {
        return  store.isEnabled();
        }, {
          timeout: 5000,
          timeoutMsg: 'expected element is not visible after 5s'
        });   
        
      await store.click();

      await browser.pause(300);

      assert.strictEqual(await browser.getTitle(), 'Google Store for Google Made Devices & Accessories');

      await browser.pause(300);

      await browser.back();

      await browser.pause(1000);


     });
     it('7. Redirection to the Gmail', async () => {
        
        
      let gMail = await mainPage.gMail;

      await gMail.waitUntil(function () {
        return  gMail.isEnabled();
        }, {
          timeout: 5000,
          timeoutMsg: 'expected element is not visible after 5s'
        });   
        
      await gMail.click();

      await browser.pause(300);

      assert.strictEqual(await browser.getTitle(), 'Gmail: kostenlose, vertrauliche und sichere E-Mails | Google Workspace');

      await browser.pause(300);

      await browser.back();

      await browser.pause(1000);


     });
     it('8. Redirection to the Google Bilder', async () => {
        
        
      let bilder = await mainPage.bilder;

      await bilder.waitUntil(function () {
        return  bilder.isEnabled();
        }, {
          timeout: 5000,
          timeoutMsg: 'expected element is not visible after 5s'
        });   
        
      await bilder.click();

      await browser.pause(300);

      assert.strictEqual(await browser.getTitle(), 'Google Bilder');

      await browser.pause(300);

      await browser.back();

      await browser.pause(1000);


     });
     it('9. Redirection to the Google Bilder', async () => {
        
        
      let login = await mainPage.login;

      await login.waitUntil(function () {
        return  login.isEnabled();
        }, {
          timeout: 5000,
          timeoutMsg: 'expected element is not visible after 5s'
        });   
        
      await login.click();

      await browser.pause(300);

      assert.strictEqual(await browser.getTitle(), 'Anmelden – Google Konten');

      await browser.pause(300);

      await browser.back();

      await browser.pause(1000);



     });
    });