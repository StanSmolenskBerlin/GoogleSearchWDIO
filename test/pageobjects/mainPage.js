class mainPage {

    static get coockieAccept () {
        return (async () => await $('//*[@id="L2AGLb"]'))();
    }
    static get coockieAcceptHeader () {
        return (async () => await $('[class = "I90TVb"]'))();
    }
    static get searchInput () {
        return (async () => await $('[title="Suche"]'))();
    }
    static get aboutGoogle () {
        return (async () => await $('/html/body/div[1]/div[1]/a[1]'))();
    }
    static get store () {
        return (async () => await $('/html/body/div[1]/div[1]/a[2]'))();
    }
    static get gMail () {
        return (async () => await $('//*[@id="gb"]/div/div[1]/div/div[1]/a'))();
    }
    static get bilder () {
        return (async () => await $('//*[@id="gb"]/div/div[1]/div/div[2]/a'))();
    }
    static get googleServices () {
        return (async () => await $('//*[@id="gbwa"]/div'))();
    }
    static get googleServicesOpened () {
        return (async () => await $('//*[@id="gb"]/div/div[3]'))();
    }
    static get googleLogo () {
        return (async () => await $('[alt="Google"]'))();
    }
    static get login () {
        return (async () => await $('//*[@id="gb"]/div/div[2]/a'))();
    }
    static get gooogleSearchButton () {
        return (async () => await $('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]'))();
    }
    static get bottomSidebar () {
        return (async () => await $('/html/body/div[1]/div[5]/div[2]'))();
    }
    static get googleSearchURL (){
        return  'https://www.google.com/';
    }
  }
  
  module.exports = mainPage;