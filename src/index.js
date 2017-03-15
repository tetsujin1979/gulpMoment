angular
	.module('app', ['angularMoment'])
	.run(function (amMoment) {
  amMoment.changeLocale('en');
});
