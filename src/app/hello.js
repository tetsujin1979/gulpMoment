angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (amMoment) {
      this.hello = 'Hello World!';
      this.time = new Date();
      this.language = 'en';
      this.changeLanguage = function () {
        amMoment.changeLocale(this.language);
      };
    }
  });
