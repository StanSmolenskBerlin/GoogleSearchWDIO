class resultListPage {

    static get firstRow () {
        return (async () => await $('//*[@id="rso"]/div[1]/div/div/div/div/div'))();
    }
    static get nextPageButton () {
        return (async () => await $('[id="pnnext"]'))();
    }
    static get previousPageButton () {
        return (async () => await $('[id="pnprev"]'))();
    }
    static get secondPageButton () {
        return (async () => await $('[aria-label="Page 2"]'))();
    }
    static get currentPage () {
        return (async () => await $('[class="YyVfkd"]'))();
    }
    static get lastPage () {
        return (async () => await $('[class="YyVfkd"]'))();
    }
    static get firstPage () {
        return (async () => await $('[class="YyVfkd"]'))();
    }
    static get invalidSearchValueHeader () {
        return (async () => await $('//*[@id="topstuff"]/div/div/p[1]'))();
    }

   }
  
  module.exports = resultListPage;