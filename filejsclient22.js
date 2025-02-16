(function () {
  "use strict";
  angular.module("app.traditional", []).config(config);
  function config($stateProvider, msApiProvider) {
    $stateProvider.state("app.traditional", {abstract: true, url: "/traditional", views: {"main@": {templateUrl: "app/core/layouts/content-general.html", controller: "MainController as one"}, "content@app.traditional": {templateUrl: "app/main/traditional/traditional.html", controller: "traditionalCtrl as one"}, "toolbar@app.traditional": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.traditional": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app.traditional": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}, "lottery-menu@app.traditional": {templateUrl: "app/main/traditional/menu/traditional.menu.html", controller: "traditionalMenuCtrl as vm"}}}).state("app.traditional.northern", {url: "/northern", abstract: true, resolve: {collections: function (msApi) {
      return msApi.resolve("number.collection@get");
    }, select: function (msApi) {
      return msApi.resolve("number.select@get");
    }}}).state("app.traditional.northern.jackpot", {url: "/jackpot", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 0;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.head-jackpot", {url: "/head-jackpot", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 21;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.jackpot-first", {url: "/first", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 22;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.jackpot-head-first", {url: "/head-first", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 23;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.jackpot-caishen", {url: "/caishen", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 24;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.jackpot-head-caishen", {url: "/head-caishen", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 25;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.lotto", {url: "/lotto", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 1;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.lotto-head", {url: "/lotto-head", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/general/general.html", controller: "generalCtrl as vm"}}, resolve: {betId: function () {
      return 29;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.live", {url: "/live", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/live/live.html", controller: "lotLiveCtrl as vm"}}, resolve: {betId: function () {
      return 20;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.parlay", {url: "/parlay", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/parlay/parlay.html", controller: "parlayCtrl as vm"}}, resolve: {betId: function () {
      return 2;
    }}, bodyClass: "traditional"}).state("app.traditional.northern.except-jackpot", {url: "/except-jackpot", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/except/except.html", controller: "exceptCtrl as vm"}}, resolve: {betId: function () {
      return 5;
    }, param: function () {
      return {minbet: 10, betTimes: 1, payouts: 650};
    }}, bodyClass: "traditional"}).state("app.traditional.northern.except-lotto", {url: "/except-lotto", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern/except/except.html", controller: "exceptCtrl as vm"}}, resolve: {betId: function () {
      return 6;
    }, param: function () {
      return {minbet: 4, betTimes: 4, payouts: 21100};
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd", {url: "/northern-2nd", abstract: true, resolve: {collections: function (msApi) {
      return msApi.resolve("number.collection@get");
    }, select: function (msApi) {
      return msApi.resolve("number.select@get");
    }}}).state("app.traditional.northern-2nd.quick-bet", {url: "/quick-bet", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/quick-bet/quick-bet.html", controller: "qbController as vm"}}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.2d", {url: "/2d", abstract: true}).state("app.traditional.northern-2nd.2d.dau", {url: "/dau", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/2d/dau-duoi/dau-duoi.html", controller: "dauDuoiCtrl as vm"}}, resolve: {betId: function () {
      return 7;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.2d.duoi", {url: "/duoi", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/2d/dau-duoi/dau-duoi.html", controller: "dauDuoiCtrl as vm"}}, resolve: {betId: function () {
      return 8;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.2d.27lo", {url: "/27lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/2d/27lo/27lo.html", controller: "lo27Ctrl as vm"}}, resolve: {betId: function () {
      return 9;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.2d.row-bet", {url: "/row-bet", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/2d/row-bet/row-bet.html", controller: "rowBetCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.3d", {url: "/3d", abstract: true}).state("app.traditional.northern-2nd.3d.dau", {url: "/dau", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/3d/dauduoi/dauduoi.html", controller: "dauDuoi3DCtrl as vm"}}, resolve: {betId: function () {
      return 10;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.3d.duoi", {url: "/duoi", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/3d/dauduoi/dauduoi.html", controller: "dauDuoi3DCtrl as vm"}}, resolve: {betId: function () {
      return 11;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.3d.23lo", {url: "/23lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/3d/23lo/23lo.html", controller: "d3lo23Ctrl as vm"}}, resolve: {betId: function () {
      return 12;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.4d", {url: "/4d", abstract: true}).state("app.traditional.northern-2nd.4d.duoi", {url: "/duoi", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/4d/duoi/duoi.html", controller: "d4duoiCtrl as vm"}}, resolve: {betId: function () {
      return 13;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.4d.20lo", {url: "/20lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/4d/duoi/duoi.html", controller: "d4duoiCtrl as vm"}}, resolve: {betId: function () {
      return 14;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.parlay", {url: "/parlay", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/parlay/parlay.html", controller: "north2ParlayCtrl as vm"}}, resolve: {betId: function () {
      return 2;
    }}, bodyClass: "traditional"}).state("app.traditional.northern-2nd.live", {url: "/live", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/northern-2nd/live/live.html", controller: "b2LotLiveCtrl as vm"}}, resolve: {betId: function () {
      return 20;
    }}, bodyClass: "traditional"}).state("app.traditional.southern", {url: "/southern", abstract: true, resolve: {select: function (msApi) {
      return msApi.resolve("number.select@get");
    }}}).state("app.traditional.southern.quick-bet", {url: "/quick-bet", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/quick-bet/quick-bet.html", controller: "qbMnController as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.2d", {url: "/2d", abstract: true}).state("app.traditional.southern.2d.dau", {url: "/dau", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/2d/dau/dau.html", controller: "haidDauController as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.2d.duoi", {url: "/duoi", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/2d/duoi/duoi.html", controller: "haidDauController as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.2d.18lo", {url: "/18lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/2d/18lo/18lo.html", controller: "lo18Ctrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.2d.18lo-head", {url: "/18lo-head", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/2d/18lodau/18lodau.html", controller: "lo18DauCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.2d.row-bet", {url: "/row-bet", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/2d/row-bet/row-bet.html", controller: "rowMNBetCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.3d", {url: "/3d", abstract: true}).state("app.traditional.southern.3d.dau", {url: "/dau", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/3d/dau/dau.html", controller: "badDauCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.3d.duoi", {url: "/duoi", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/3d/duoi/duoi.html", controller: "badDauCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.3d.17lo", {url: "/17lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/3d/17lo/17lo.html", controller: "d3lo17Ctrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.3d.7lo", {url: "/7lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/3d/7lo/7lo.html", controller: "d3lo7Ctrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.4d", {url: "/4d", abstract: true}).state("app.traditional.southern.4d.duoi", {url: "/duoi", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/4d/duoi/duoi.html", controller: "bonDController as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.4d.16lo", {url: "/16lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/4d/16lo/16lo.html", controller: "bonD16LoCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.parlay", {url: "/parlay", abstract: true}).state("app.traditional.southern.parlay.pair-2", {url: "/pair-2", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/parlay/pair-2.html", controller: "southParlayCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.parlay.pair-3", {url: "/pair-3", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/parlay/pair-3.html", controller: "southParlayCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.parlay.pair-4", {url: "/pair-4", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/parlay/pair-4.html", controller: "southParlayCtrl as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.7lo", {url: "/7lo", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/7lo/7lo.html", controller: "lo7Controller as vm"}}, bodyClass: "traditional"}).state("app.traditional.southern.live", {url: "/live", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern/live/live.html", controller: "liveSouthernCtrl as vm"}}, resolve: {betId: function () {
      return 27;
    }, collections: function (msApi) {
      return msApi.resolve("number.collection@get");
    }, select: function (msApi) {
      return msApi.resolve("number.select@get");
    }}, bodyClass: "traditional"}).state("app.traditional.18ab", {url: "/18ab", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/southern-parlay/southern-parlay.html", controller: "southABParlayCtrl as vm"}}, resolve: {collections: function (msApi) {
      return msApi.resolve("number.collection@get");
    }, select: function (msApi) {
      return msApi.resolve("number.select@get");
    }}, bodyClass: "traditional"}).state("app.traditional.manual", {url: "/manual", views: {"traditional-content@app.traditional": {templateUrl: "app/main/traditional/manual/manual.html", controller: "manualCtrl as vm"}}, resolve: {aBetTypes: function (msApi) {
      return msApi.resolve("aBetTypes@get");
    }}, bodyClass: "traditional"});
    msApiProvider.register("number.select", ["app/data/select.json"]);
    msApiProvider.register("number.collection", ["app/data/collection.json"]);
    msApiProvider.register("number.rowBet", ["app/data/keohang.json"]);
    msApiProvider.register("aBetTypes", ["app/data/betTypes.json"]);
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("lo27Ctrl", lo27Ctrl);
  function lo27Ctrl($rootScope, $scope, $mdSidenav, $timeout, $mdMedia, $state, $interval, $document, msUtils, network, select, betId) {
    let vm = this;
    vm.init = init;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalMoney = totalMoney;
    vm.ignorePrice = true;
    vm.betID = betId;
    vm.basePrice = 0;
    vm.numbers = [];
    $scope.$mdMedia = $mdMedia;
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 1, bet: betId};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.GameType === 1) {
          if (pr.BetType === vm.betID) {
            vm.basePrice = pr.Price;
          }
        }
      });
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, price: vm.basePrice, disabled: false};
      vm.numbers.push(number);
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [betId]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
        }
      });
      vm.inputPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    vm.selectedCheckbox = [];
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(select.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length && !number.disabled) {
          number.selected = vm.checked;
        }
      });
      vm.inputPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1 && !val.disabled) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      vm.inputPoint = 0;
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = 0;
      vm.keynumber = "";
    }
    function totalMoney() {
      vm.ns = [];
      vm.sumPoint = 0;
      vm.sumMoney = 0;
      angular.forEach(vm.numbers, function (num) {
        if (num.selected && !num.disabled) {
          vm.sumPoint += vm.inputPoint;
          vm.sumMoney += num.price * vm.inputPoint * 27;
          vm.ns.push(num.number);
        }
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: [{GameType: 1, BetType: 9, Items: [], Additional: {Row: 0, Alias: 1024, Reverse: false}}]};
      angular.forEach(vm.numbers, function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Price = number.price;
          Number.Point = vm.inputPoint;
          betObj.Tickets[0].Items.push(Number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: vm.ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [betId]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("dauDuoiCtrl", dauDuoiCtrl);
  function dauDuoiCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select, betId) {
    let vm = this;
    vm.init = init;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalMoney = totalMoney;
    vm.aBetID = aBetID;
    vm.ignorePrice = true;
    vm.betID = betId;
    vm.pointDau = 0;
    vm.pointDuoi = 0;
    vm.numbers = [];
    $scope.$mdMedia = $mdMedia;
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 1, bet: betId};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    vm.base = {7: 0, 8: 0};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.GameType === 1) {
          if (pr.BetType === 7) {
            vm.base[7] = pr.Price;
          }
          if (pr.BetType === 8) {
            vm.base[8] = pr.Price;
          }
        }
      });
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, price: {7: vm.base[7], 8: vm.base[8]}, disabled: {7: false, 8: false}, priceChanged: {7: false, 8: false}};
      vm.numbers.push(number);
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [7, 8]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          vm.basePrice = odd.Price;
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          let bPrice = angular.copy(num.price[odd.BetType]);
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              num.price[odd.BetType] = value.ExtraPrice !== undefined ? odd.Price + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
            }
          });
          num.priceChanged[odd.BetType] = num.price[odd.BetType] !== bPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged[vm.betID] = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled[betId]) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(select.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length && !number.disabled[betId]) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1 && !val.disabled[betId]) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementsByClassName("bet-input")[0].select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPointDau = vm.inputPointDuoi = vm.inputPointDd = 0;
      vm.keynumber = "";
    }
    function totalMoney() {
      if (!$rootScope.allowBetting) {
        vm.resetBetting();
      }
      vm.sumPoint = 0;
      vm.sumMoney = 0;
      angular.forEach(vm.aBetID(), function (betid) {
        let betTimes = betid.id === 7 ? 4 : 1;
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[betid.id]) {
            vm.sumPoint += betid.point;
            vm.sumMoney += num.price[betid.id] * betid.point * betTimes;
          }
        });
      });
      return vm.sumMoney;
    }
    function aBetID() {
      vm.inputPointDau = isNaN(vm.inputPointDau) ? 0 : vm.inputPointDau;
      vm.inputPointDuoi = isNaN(vm.inputPointDuoi) ? 0 : vm.inputPointDuoi;
      vm.inputPointDd = isNaN(vm.inputPointDd) ? 0 : vm.inputPointDd;
      vm.pointDau = Math.abs(vm.inputPointDau) + Math.abs(vm.inputPointDd);
      vm.pointDuoi = Math.abs(vm.inputPointDuoi) + Math.abs(vm.inputPointDd);
      return [{id: 7, point: vm.pointDau}, {id: 8, point: vm.pointDuoi}];
    }
    function submitBetting() {
      let betAlias = 0;
      betAlias += parseInt(vm.inputPointDau) === 0 ? 0 : 128;
      betAlias += parseInt(vm.inputPointDuoi) === 0 ? 0 : 256;
      betAlias += parseInt(vm.inputPointDd) === 0 ? 0 : 512;
      let betObj = {}, ticketObj;
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach(vm.aBetID(), function (betid) {
        if (betid.point !== 0) {
          ticketObj = {GameType: 1, BetType: betid.id, Items: [], Additional: {Row: 0, Alias: betAlias, Reverse: false}};
          vm.numbers.map(function (number) {
            if (number.selected && !number.disabled[betid.id]) {
              let Number = {};
              Number.Numbers = [number.number];
              Number.Price = number.price[betid.id];
              Number.Point = betid.point;
              ticketObj.Items.push(Number);
            }
          });
          betObj.Tickets.push(ticketObj);
        }
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [7, 8]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("rowBetCtrl", rowBetCtrl);
  function rowBetCtrl($rootScope, $scope, $timeout, $interval, $document, msApi, network, msUtils, Analytics) {
    let vm = this;
    vm.declareRow = declareRow;
    vm.checkDisabledReset = checkDisabledReset;
    vm.totalMoney = totalMoney;
    vm.submitBetting = submitBetting;
    vm.ignorePrice = true;
    vm.rowsBets = [];
    vm.declareRow();
    vm.ready = false;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.declareRow();
        e.preventDefault();
      }
    });
    $scope.$on("TradOdds::done", function () {
      vm.ready = true;
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [7, 8, 9]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
    });
    function declareRow() {
      msApi.request("number.rowBet@get", {}, function (response) {
        vm.rowsBets = response.list;
        angular.forEach(vm.rowsBets, function (row) {
          row.point = {7: 0, 8: 0, 78: 0, 9: 0};
        });
      });
    }
    function checkDisabledReset() {
      if (!vm.ready) {
        return;
      }
      let disabled = 0;
      angular.forEach(vm.rowsBets, function (row) {
        Object.keys(row.point).forEach(function (betid) {
          disabled += Math.abs(row.point[betid]) !== 0 ? 1 : 0;
        });
      });
      return disabled === 0;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      if (!vm.ready) {
        return;
      }
      angular.forEach(vm.rowsBets, function (row) {
        let oBet = {7: 0, 8: 0, 9: 0};
        oBet[7] = Math.abs(row.point[7]) + Math.abs(row.point[78]);
        oBet[8] = Math.abs(row.point[8]) + Math.abs(row.point[78]);
        oBet[9] = Math.abs(row.point[9]);
        let rowMoney = 0;
        Object.keys(oBet).forEach(function (betid) {
          if (Math.abs(oBet[betid]) !== 0) {
            let oddNumber = $.grep(vm.odds, function (on) {
              return on.BetType === parseInt(betid);
            })[0];
            let betTimes = $.grep([{id: 7, betTimes: 4}, {id: 8, betTimes: 1}, {id: 9, betTimes: 27}], function (p) {
              return p.id === parseInt(betid);
            })[0].betTimes;
            angular.forEach(row.numbers, function (num) {
              let findNumber = $.grep(oddNumber.Numbers, function (onb) {
                return onb.Number === num;
              });
              if (findNumber.length === 0) {
                rowMoney += oddNumber.Price * oBet[betid] * betTimes;
              } else {
                if (findNumber[0].Stop === undefined) {
                  rowMoney += oBet[betid] * (oddNumber.Price + findNumber[0].ExtraPrice) * betTimes;
                }
              }
            });
          }
        });
        row.money = rowMoney;
        vm.sumMoney += rowMoney;
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      vm.sumPoint = 0;
      vm.ns = [];
      vm.betDatas = [];
      let oddPrice, betObj, TicketObj, findExtra, betTypeAlias;
      betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach(vm.rowsBets, function (row, rowId) {
        if (row.money !== 0) {
          let oBet = {7: 0, 8: 0, 9: 0};
          oBet[7] = Math.abs(row.point[7]) + Math.abs(row.point[78]);
          oBet[8] = Math.abs(row.point[8]) + Math.abs(row.point[78]);
          oBet[9] = Math.abs(row.point[9]);
          betTypeAlias = 0;
          betTypeAlias += Math.abs(row.point[7]) !== 0 ? 128 : 0;
          betTypeAlias += Math.abs(row.point[8]) !== 0 ? 256 : 0;
          betTypeAlias += Math.abs(row.point[78]) !== 0 ? 512 : 0;
          betTypeAlias += Math.abs(row.point[9]) !== 0 ? 1024 : 0;
          Object.keys(oBet).forEach(function (betid) {
            if (Math.abs(oBet[betid]) !== 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === parseInt(betid);
              })[0];
              TicketObj = {GameType: 1, BetType: parseInt(betid), Additional: {Row: rowId, Alias: betTypeAlias, Reverse: false}, Items: []};
              angular.forEach(row.numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = oBet[betid];
                vm.sumPoint += oBet[betid];
                vm.ns = vm.ns.concat([num]);
                findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
          });
        }
      });
      vm.ns = vm.ns.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      let eventData = {betObj: betObj, sumObj: {numbers: vm.ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
      let User = $rootScope.isAuthenticated ? $rootScope.User.Username : "notAuthenticated";
      Analytics.trackEvent("ROW", "Betting", User);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.declareRow();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [7, 8, 9]});
    $timeout(function () {
      let User = $rootScope.isAuthenticated ? $rootScope.User.Username : "notAuthenticated";
      Analytics.trackEvent("ROW", "ENTER", User);
    }, 500);
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("d4duoiCtrl", d4duoiCtrl);
  function d4duoiCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, betId) {
    let vm = this;
    vm.updatePrice = updatePrice;
    vm.createPopover = createPopover;
    vm.changeLabel = changeLabel;
    vm.init = init;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalMoney = totalMoney;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.betID = betId;
    $scope.$mdMedia = $mdMedia;
    vm.createPopover();
    vm.selectedCheckbox = [];
    $timeout(function () {
      vm.changeLabel();
      vm.init();
    }, 300);
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 1, bet: betId};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    if ($rootScope.myParameters !== undefined) {
      vm.basePrice = $rootScope.myParameters.filter(function (pr) {
        return pr.GameType === 1 && pr.BetType === betId;
      })[0].Price;
    }
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      }
    }
    function changeLabel(cond) {
      vm.cond4d = cond !== undefined ? cond : undefined;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e4; i++) {
        if (i < 10) {
          i = "000" + i;
        } else if (i < 100) {
          i = "00" + i;
        } else if (i < 1e3) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: vm.basePrice, disabled: false};
        if (cond === undefined) {
          vm.numbers.push(number);
        } else {
          if (i.toString().match(cond.id)) {
            vm.numbers.push(number);
          }
        }
      }
      vm.numbers = vm.numbers.slice(0, 100);
      if (cond !== undefined) {
        $timeout(function () {
          if (vm.odds !== undefined) {
            vm.updatePrice();
          }
        }, 200);
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.updatePrice();
    });
    function updatePrice() {
      if (vm.numbers === undefined) {
        $timeout(function () {
          vm.updatePrice();
        }, 100);
        return;
      }
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [betId]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function createPopover() {
      vm.popooxx = [];
      vm.popoxxo = [];
      vm.popoxox = [];
      vm.popxoxo = [];
      vm.popxoox = [];
      vm.popxxoo = [];
      for (let i = 0; i < 100; i++) {
        i = i < 10 ? "0" + i : i;
        i = i.toString();
        let j = i.split("");
        vm.popooxx.push({id: "^" + i + "([0-9]+)$", name: i + "XX"});
        vm.popoxxo.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "$", name: i.split("").join("XX")});
        vm.popoxox.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "([0-9]+)$", name: i.split("").join("X") + "X"});
        vm.popxoxo.push({id: "^([0-9]+)" + j[0] + "([0-9]+)" + j[1] + "$", name: "X" + i.split("").join("X")});
        vm.popxoox.push({id: "^([0-9]+)" + i + "([0-9]+)$", name: "X" + i + "X"});
        vm.popxxoo.push({id: "^([0-9]+)" + i + "$", name: "XX" + i});
      }
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (id < 10) {
          if (Math.floor(index / 10) === id) {
            number.selected = vm.checked;
          }
        } else {
          if (index % 10 === id % 10) {
            number.selected = vm.checked;
          }
        }
      });
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = 0;
    }
    function totalMoney() {
      vm.sumPoint = 0;
      vm.sumMoney = 0;
      let betTimes = betId === 14 ? 20 : 1;
      vm.inputPoint = isNaN(vm.inputPoint) ? 0 : vm.inputPoint;
      angular.forEach(vm.numbers, function (num) {
        if (num.selected && !num.disabled) {
          vm.sumPoint += vm.inputPoint;
          vm.sumMoney += num.price * vm.inputPoint * betTimes;
        }
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let ns = [];
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: [{GameType: 1, BetType: betId, Items: [], Additional: {Row: 0, Alias: betId === 13 ? 524288 : 2097152, Reverse: false}}]};
      vm.numbers.map(function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Price = number.price;
          Number.Point = vm.inputPoint;
          betObj.Tickets[0].Items.push(Number);
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [betId]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("dauDuoi3DCtrl", dauDuoi3DCtrl);
  function dauDuoi3DCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, betId) {
    let vm = this;
    vm.init = init;
    vm.changeLabel = changeLabel;
    vm.updatePrice = updatePrice;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalMoney = totalMoney;
    vm.aBetID = aBetID;
    vm.ignorePrice = true;
    vm.betID = betId;
    vm.pointDau = 0;
    vm.pointDuoi = 0;
    vm.basePrice = 0;
    $scope.$mdMedia = $mdMedia;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    vm.changeLabel(0);
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 1, bet: betId};
    $timeout(function () {
      vm.init();
    }, 300);
    if ($rootScope.myParameters !== undefined) {
      vm.basePrice = $rootScope.myParameters.filter(function (pr) {
        return pr.GameType === 1 && pr.BetType === vm.betID;
      })[0].Price;
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: {10: vm.basePrice, 11: vm.basePrice}, priceChanged: {10: false, 11: false}, disabled: {10: false, 11: false}};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      }
    }
    function changeLabel(value) {
      vm.label = value;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e3; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: {10: 0, 11: 0}, priceChanged: {10: false, 11: false}, disabled: {10: false, 11: false}};
        if (value < 10) {
          if (Math.floor(i / 100) === value) {
            vm.numbers.push(number);
          }
        } else {
          if (Math.floor(i % 100 / 10) === value % 10) {
            vm.numbers.push(number);
          }
        }
      }
      if (vm.odds !== undefined) {
        vm.updatePrice();
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.updatePrice();
    });
    function updatePrice() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [10, 11]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds.filter(function (item) {
        return item.BetType === betId;
      })[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          let bPrice = angular.copy(num.price[odd.BetType]);
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              num.price[odd.BetType] = value.ExtraPrice !== undefined ? vm.basePrice + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
            }
          });
          num.priceChanged[odd.BetType] = num.price[odd.BetType] !== bPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged[vm.betID] = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (!number.disabled[betId]) {
          if (id < 10) {
            if (Math.floor(index / 10) === id) {
              number.selected = vm.checked;
            }
          } else {
            if (index % 10 === id % 10) {
              number.selected = vm.checked;
            }
          }
        }
      });
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPointDau = vm.inputPointDuoi = vm.inputPointDd = 0;
    }
    function aBetID() {
      vm.inputPointDau = isNaN(vm.inputPointDau) ? 0 : vm.inputPointDau;
      vm.inputPointDuoi = isNaN(vm.inputPointDuoi) ? 0 : vm.inputPointDuoi;
      vm.inputPointDd = isNaN(vm.inputPointDd) ? 0 : vm.inputPointDd;
      vm.pointDau = vm.inputPointDau + vm.inputPointDd;
      vm.pointDuoi = vm.inputPointDuoi + vm.inputPointDd;
      let aID = [];
      if (vm.pointDau !== 0) {
        aID.push({id: 10, point: vm.pointDau});
      }
      if (vm.pointDuoi !== 0) {
        aID.push({id: 11, point: vm.pointDuoi});
      }
      return aID;
    }
    function totalMoney() {
      vm.sumPoint = 0;
      vm.sumMoney = 0;
      angular.forEach(vm.aBetID(), function (betid) {
        let betTimes = betid.id === 10 ? 3 : 1;
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[betid.id]) {
            vm.sumPoint += betid.point;
            vm.sumMoney += num.price[betid.id] * betid.point * betTimes;
          }
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      vm.betDatas = [];
      let betAlias = 0;
      betAlias += parseInt(vm.inputPointDau) === 0 ? 0 : 8192;
      betAlias += parseInt(vm.inputPointDuoi) === 0 ? 0 : 16384;
      betAlias += parseInt(vm.inputPointDd) === 0 ? 0 : 32768;
      let betObj = {}, ticketObj;
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach(vm.aBetID(), function (betid) {
        if (betid.point !== 0) {
          ticketObj = {GameType: 1, BetType: betid.id, Additional: {Row: 0, Alias: betAlias, Reverse: false}, Items: []};
          angular.forEach(vm.numbers, function (number) {
            if (number.selected && !number.disabled[betid.id]) {
              let Number = {};
              Number.Numbers = [number.number];
              Number.Price = number.price[betid.id];
              Number.Point = betid.point;
              ticketObj.Items.push(Number);
            }
          });
          betObj.Tickets.push(ticketObj);
        }
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [10, 11]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("d3lo23Ctrl", d3lo23Ctrl);
  function d3lo23Ctrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, betId) {
    let vm = this;
    vm.init = init;
    vm.changeLabel = changeLabel;
    vm.updatePrice = updatePrice;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalMoney = totalMoney;
    vm.ignorePrice = true;
    vm.betID = betId;
    vm.basePrice = 0;
    $scope.$mdMedia = $mdMedia;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    vm.changeLabel(0);
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 1, bet: betId};
    $timeout(function () {
      vm.init();
    }, 300);
    if ($rootScope.myParameters !== undefined) {
      vm.basePrice = $rootScope.myParameters.filter(function (pr) {
        return pr.GameType === 1 && pr.BetType === vm.betID;
      })[0].Price;
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: vm.basePrice, disabled: false};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      }
    }
    function changeLabel(value) {
      vm.label = value;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e3; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: 0, disabled: false};
        if (value < 10) {
          if (Math.floor(i / 100) === value) {
            vm.numbers.push(number);
          }
        } else {
          if (Math.floor(i % 100 / 10) === value % 10) {
            vm.numbers.push(number);
          }
        }
      }
      if (vm.odds !== undefined) {
        vm.updatePrice();
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.updatePrice();
    });
    function updatePrice() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [betId]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (!number.disabled[betId]) {
          if (id < 10) {
            if (Math.floor(index / 10) === id) {
              number.selected = vm.checked;
            }
          } else {
            if (index % 10 === id % 10) {
              number.selected = vm.checked;
            }
          }
        }
      });
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = 0;
    }
    function totalMoney() {
      vm.sumPoint = 0;
      vm.sumMoney = 0;
      vm.inputPoint = isNaN(vm.inputPoint) ? 0 : vm.inputPoint;
      angular.forEach(vm.numbers, function (num) {
        if (num.selected && !num.disabled) {
          vm.sumPoint += vm.inputPoint;
          vm.sumMoney += num.price * vm.inputPoint * 23;
        }
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let ns = [];
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: [{GameType: 1, BetType: 12, Items: [], Additional: {Row: 0, Alias: 65536, Reverse: false}}]};
      vm.numbers.map(function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Price = number.price;
          Number.Point = vm.inputPoint;
          betObj.Tickets[0].Items.push(Number);
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [betId]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("bonD16LoCtrl", bonD16LoCtrl);
  function bonD16LoCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.updatePrice = updatePrice;
    vm.createPopover = createPopover;
    vm.changeLabel = changeLabel;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    $scope.$mdMedia = $mdMedia;
    $rootScope.location = {game: 4, bet: 19};
    vm.createPopover();
    vm.selectedCheckbox = [];
    $timeout(function () {
      vm.changeLabel();
    }, 300);
    vm.base = {19: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 19) {
          if (pr.GameType === 2) {
            vm.base[19][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[19][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[19][4] = pr.Price;
          }
        }
      });
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: {19: {2: vm.base[19][2], 3: vm.base[19][3], 4: vm.base[19][4]}}, disabled: {19: {2: false, 3: false, 4: false}}};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    function changeLabel(cond) {
      vm.cond4d = cond !== undefined ? cond : undefined;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e4; i++) {
        if (i < 10) {
          i = "000" + i;
        } else if (i < 100) {
          i = "00" + i;
        } else if (i < 1e3) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: {19: {2: vm.base[19][2], 3: vm.base[19][3], 4: vm.base[19][4]}}, disabled: {19: {2: false, 3: false, 4: false}}};
        if (cond === undefined) {
          vm.numbers.push(number);
        } else {
          if (i.toString().match(cond.id)) {
            vm.numbers.push(number);
          }
        }
      }
      vm.numbers = vm.numbers.slice(0, 100);
      if (cond !== undefined) {
        vm.updatePrice();
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.updatePrice();
    });
    function updatePrice() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [19]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function createPopover() {
      vm.popooxx = [];
      vm.popoxxo = [];
      vm.popoxox = [];
      vm.popxoxo = [];
      vm.popxoox = [];
      vm.popxxoo = [];
      for (let i = 0; i < 100; i++) {
        i = i < 10 ? "0" + i : i;
        i = i.toString();
        let j = i.split("");
        vm.popooxx.push({id: "^" + i + "([0-9]+)$", name: i + "XX"});
        vm.popoxxo.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "$", name: i.split("").join("XX")});
        vm.popoxox.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "([0-9]+)$", name: i.split("").join("X") + "X"});
        vm.popxoxo.push({id: "^([0-9]+)" + j[0] + "([0-9]+)" + j[1] + "$", name: "X" + i.split("").join("X")});
        vm.popxoox.push({id: "^([0-9]+)" + i + "([0-9]+)$", name: "X" + i + "X"});
        vm.popxxoo.push({id: "^([0-9]+)" + i + "$", name: "XX" + i});
      }
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (id < 10) {
          if (Math.floor(index / 10) === id) {
            number.selected = vm.checked;
          }
        } else {
          if (index % 10 === id % 10) {
            number.selected = vm.checked;
          }
        }
      });
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = 0;
    }
    function totalPoint() {
      vm.sumPoint = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[19][gameid]) {
            vm.sumPoint += vm.inputPoint;
          }
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[19][gameid]) {
            vm.sumMoney += num.price[19][gameid] * vm.inputPoint * 16;
          }
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach($rootScope.regironSelected, function (gameid) {
        let TicketObj = {GameType: gameid, BetType: 19, Items: [], Additional: {Row: 0, Alias: 1048576, Reverse: false}};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[19][gameid]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[19][gameid];
            Number.Point = vm.inputPoint;
            TicketObj.Items.push(Number);
          }
        });
        betObj.Tickets.push(TicketObj);
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [19]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("bonDController", bonDController);
  function bonDController($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.updatePrice = updatePrice;
    vm.createPopover = createPopover;
    vm.changeLabel = changeLabel;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    $scope.$mdMedia = $mdMedia;
    $rootScope.location = {game: 4, bet: 13};
    vm.selectedCheckbox = [];
    vm.createPopover();
    $timeout(function () {
      vm.changeLabel();
    }, 300);
    vm.base = {13: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 13) {
          if (pr.GameType === 2) {
            vm.base[13][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[13][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[13][4] = pr.Price;
          }
        }
      });
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: {13: {2: vm.base[13][2], 3: vm.base[13][3], 4: vm.base[13][4]}}, disabled: {13: {2: false, 3: false, 4: false}}};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    function changeLabel(cond) {
      vm.cond4d = cond !== undefined ? cond : undefined;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e4; i++) {
        if (i < 10) {
          i = "000" + i;
        } else if (i < 100) {
          i = "00" + i;
        } else if (i < 1e3) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: {13: {2: vm.base[13][2], 3: vm.base[13][3], 4: vm.base[13][4]}}, disabled: {13: {2: false, 3: false, 4: false}}};
        if (cond === undefined) {
          vm.numbers.push(number);
        } else {
          if (i.toString().match(cond.id)) {
            vm.numbers.push(number);
          }
        }
      }
      vm.numbers = vm.numbers.slice(0, 100);
      if (cond !== undefined) {
        $timeout(function () {
          vm.updatePrice();
        }, 200);
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.updatePrice();
    });
    function updatePrice() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [13]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function createPopover() {
      vm.popooxx = [];
      vm.popoxxo = [];
      vm.popoxox = [];
      vm.popxoxo = [];
      vm.popxoox = [];
      vm.popxxoo = [];
      for (let i = 0; i < 100; i++) {
        i = i < 10 ? "0" + i : i;
        i = i.toString();
        let j = i.split("");
        vm.popooxx.push({id: "^" + i + "([0-9]+)$", name: i + "XX"});
        vm.popoxxo.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "$", name: i.split("").join("XX")});
        vm.popoxox.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "([0-9]+)$", name: i.split("").join("X") + "X"});
        vm.popxoxo.push({id: "^([0-9]+)" + j[0] + "([0-9]+)" + j[1] + "$", name: "X" + i.split("").join("X")});
        vm.popxoox.push({id: "^([0-9]+)" + i + "([0-9]+)$", name: "X" + i + "X"});
        vm.popxxoo.push({id: "^([0-9]+)" + i + "$", name: "XX" + i});
      }
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (id < 10) {
          if (Math.floor(index / 10) === id) {
            number.selected = vm.checked;
          }
        } else {
          if (index % 10 === id % 10) {
            number.selected = vm.checked;
          }
        }
      });
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = 0;
    }
    function totalPoint() {
      vm.sumPoint = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[13][gameid]) {
            vm.sumPoint += vm.inputPoint;
          }
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[13][gameid]) {
            vm.sumMoney += num.price[13][gameid] * vm.inputPoint;
          }
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach($rootScope.regironSelected, function (gameid) {
        let TicketObj = {GameType: gameid, BetType: 13, Items: [], Additional: {Row: 0, Alias: 524288, Reverse: false}};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[13][gameid]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[13][gameid];
            Number.Point = vm.inputPoint;
            TicketObj.Items.push(Number);
          }
        });
        betObj.Tickets.push(TicketObj);
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [13]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("d3lo7Ctrl", d3lo7Ctrl);
  function d3lo7Ctrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.changeLabel = changeLabel;
    vm.updatePrice = updatePrice;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    $scope.$mdMedia = $mdMedia;
    $rootScope.location = {game: 4, bet: 18};
    vm.selectedCheckbox = [];
    $timeout(function () {
      vm.changeLabel(0);
    }, 300);
    vm.base = {18: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 18) {
          if (pr.GameType === 2) {
            vm.base[18][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[18][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[18][4] = pr.Price;
          }
        }
      });
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: {18: {2: vm.base[18][2], 3: vm.base[18][3], 4: vm.base[18][4]}}, disabled: {18: {2: false, 3: false, 4: false}}};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    function changeLabel(value) {
      vm.label = value;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e3; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: {18: {2: vm.base[18][2], 3: vm.base[18][3], 4: vm.base[18][4]}}, disabled: {18: {2: false, 3: false, 4: false}}};
        if (value < 10) {
          if (Math.floor(i / 100) === value) {
            vm.numbers.push(number);
          }
        } else {
          if (Math.floor(i % 100 / 10) === value % 10) {
            vm.numbers.push(number);
          }
        }
      }
      if (vm.odds !== undefined) {
        vm.updatePrice();
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.updatePrice();
    });
    function updatePrice() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [18]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (id < 10) {
          if (Math.floor(index / 10) === id) {
            number.selected = vm.checked;
          }
        } else {
          if (index % 10 === id % 10) {
            number.selected = vm.checked;
          }
        }
      });
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = 0;
    }
    function totalPoint() {
      vm.sumPoint = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[18][gameid]) {
            vm.sumPoint += vm.inputPoint;
          }
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[18][gameid]) {
            vm.sumMoney += num.price[18][gameid] * vm.inputPoint * 7;
          }
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach($rootScope.regironSelected, function (gameid) {
        let TicketObj = {GameType: gameid, BetType: 18, Items: [], Additional: {Row: 0, Alias: 131072, Reverse: false}};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[18][gameid]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[18][gameid];
            Number.Point = vm.inputPoint;
            TicketObj.Items.push(Number);
          }
        });
        betObj.Tickets.push(TicketObj);
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [18]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("badDauCtrl", badDauCtrl);
  function badDauCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.changeLabel = changeLabel;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.aBetID = aBetID;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    $scope.$mdMedia = $mdMedia;
    if ($state.current.url === "/dau") {
      vm.betID = 10;
    } else {
      vm.betID = 11;
    }
    $rootScope.location = {game: 4, bet: vm.betID};
    vm.pointDau = 0;
    vm.pointDuoi = 0;
    vm.basePrice = 0;
    vm.selectedCheckbox = [];
    $timeout(function () {
      vm.changeLabel(0);
    }, 300);
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    vm.base = {10: {2: 0, 3: 0, 4: 0}, 11: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 10) {
          if (pr.GameType === 2) {
            vm.base[10][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[10][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[10][4] = pr.Price;
          }
        }
        if (pr.BetType === 11) {
          if (pr.GameType === 2) {
            vm.base[11][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[11][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[11][4] = pr.Price;
          }
        }
      });
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: {10: {2: vm.base[10][2], 3: vm.base[10][3], 4: vm.base[10][4]}, 11: {2: vm.base[11][2], 3: vm.base[11][3], 4: vm.base[11][4]}}, disabled: {10: {2: false, 3: false, 4: false}, 11: {2: false, 3: false, 4: false}}};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    function changeLabel(value) {
      vm.label = value;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e3; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: {10: {2: vm.base[10][2], 3: vm.base[10][3], 4: vm.base[10][4]}, 11: {2: vm.base[11][2], 3: vm.base[11][3], 4: vm.base[11][4]}}, disabled: {10: {2: false, 3: false, 4: false}, 11: {2: false, 3: false, 4: false}}};
        if (value < 10) {
          if (Math.floor(i / 100) === value) {
            vm.numbers.push(number);
          }
        } else {
          if (Math.floor(i % 100 / 10) === value % 10) {
            vm.numbers.push(number);
          }
        }
      }
      if (vm.odds !== undefined) {
        vm.buildPriceTable();
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [vm.betID]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (odd.BetType === vm.betID && num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (id < 10) {
          if (Math.floor(index / 10) === id) {
            number.selected = vm.checked;
          }
        } else {
          if (index % 10 === id % 10) {
            number.selected = vm.checked;
          }
        }
      });
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPointDau = vm.inputPointDuoi = vm.inputPointDd = 0;
    }
    function aBetID() {
      vm.inputPointDau = isNaN(vm.inputPointDau) ? 0 : vm.inputPointDau;
      vm.inputPointDuoi = isNaN(vm.inputPointDuoi) ? 0 : vm.inputPointDuoi;
      vm.inputPointDd = isNaN(vm.inputPointDd) ? 0 : vm.inputPointDd;
      vm.pointDau = vm.inputPointDau + vm.inputPointDd;
      vm.pointDuoi = vm.inputPointDuoi + vm.inputPointDd;
      let aID = [];
      if (vm.pointDau !== 0) {
        aID.push({betid: 10, point: vm.pointDau});
      }
      if (vm.pointDuoi !== 0) {
        aID.push({betid: 11, point: vm.pointDuoi});
      }
      return aID;
    }
    function totalPoint() {
      vm.sumPoint = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.aBetID(), function (betid) {
          angular.forEach(vm.numbers, function (num) {
            if (num.selected && !num.disabled[betid.betid][gameid]) {
              vm.sumPoint += betid.point;
            }
          });
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.aBetID(), function (betid) {
          angular.forEach(vm.numbers, function (num) {
            if (num.selected && !num.disabled[betid.betid][gameid]) {
              vm.sumMoney += num.price[betid.betid][gameid] * betid.point;
            }
          });
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let betAlias = 0;
      betAlias += parseInt(vm.inputPointDau) === 0 ? 0 : 8192;
      betAlias += parseInt(vm.inputPointDuoi) === 0 ? 0 : 16384;
      betAlias += parseInt(vm.inputPointDd) === 0 ? 0 : 32768;
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.aBetID(), function (betid) {
          let ticketObj = {GameType: gameid, BetType: betid.betid, Additional: {Row: 0, Alias: betAlias, Reverse: false}, Items: []};
          angular.forEach(vm.numbers, function (number) {
            if (number.selected && !number.disabled[betid.betid][gameid]) {
              let Number = {};
              Number.Numbers = [number.number];
              Number.Price = number.price[betid.betid][gameid];
              Number.Point = betid.betid === 10 ? vm.pointDau : vm.pointDuoi;
              ticketObj.Items.push(Number);
            }
          });
          betObj.Tickets.push(ticketObj);
        });
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [vm.betID]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("rowMNBetCtrl", rowMNBetCtrl);
  function rowMNBetCtrl($rootScope, $scope, $timeout, $interval, $document, msApi, network, msUtils) {
    let vm = this;
    vm.declareRow = declareRow;
    vm.toggleAll = toggleAll;
    vm.checkedAll = checkedAll;
    vm.isIndeterminate = isIndeterminate;
    vm.checkDisabledReset = checkDisabledReset;
    vm.sumRowMoney = sumRowMoney;
    vm.totalMoney = totalMoney;
    vm.submitBetting = submitBetting;
    vm.ignorePrice = true;
    vm.rowsBets = [];
    vm.declareRow();
    vm.ready = false;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.declareRow();
        e.preventDefault();
      }
    });
    function declareRow() {
      msApi.request("number.rowBet@get", {}, function (response) {
        vm.rowsBets = response.list;
        angular.forEach(vm.rowsBets, function (row) {
          row.regirons = {2: false, 3: false, 4: false};
          row.point = {7: 0, 8: 0, 78: 0, 15: 0};
        });
      });
    }
    $scope.$on("TradOdds::done", function () {
      vm.ready = true;
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [7, 8, 15]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
    });
    function checkedAll(id) {
      if (!vm.ready) {
        return;
      }
      let count = 0;
      angular.forEach(vm.rowsBets, function (row) {
        count += row.regirons[id] === true ? 1 : 0;
      });
      return count === vm.rowsBets.length;
    }
    function toggleAll(id) {
      if (!vm.ready) {
        return;
      }
      let check = vm.checkedAll(id);
      angular.forEach(vm.rowsBets, function (row) {
        row.regirons[id] = !check;
      });
    }
    function isIndeterminate(id) {
      if (!vm.ready) {
        return;
      }
      let count = 0;
      angular.forEach(vm.rowsBets, function (row) {
        count += row.regirons[id] === true ? 1 : 0;
      });
      if (count === 0 || count === vm.rowsBets.length) {
        return false;
      } else {
        return true;
      }
    }
    function checkDisabledReset() {
      if (!vm.ready) {
        return;
      }
      let disabled = 0;
      angular.forEach(vm.rowsBets, function (row) {
        Object.keys(row.regirons).forEach(function (gameid) {
          disabled += row.regirons[gameid] ? 1 : 0;
        });
        Object.keys(row.point).forEach(function (betid) {
          disabled += Math.abs(row.point[betid]) !== 0 ? 1 : 0;
        });
      });
      return disabled === 0;
    }
    function sumRowMoney(row) {
      if (!vm.ready) {
        return;
      }
      let oBet = {7: 0, 8: 0, 15: 0};
      oBet[7] = Math.abs(row.point[7]) + Math.abs(row.point[78]);
      oBet[8] = Math.abs(row.point[8]) + Math.abs(row.point[78]);
      oBet[15] = Math.abs(row.point[15]);
      let rowMoney = 0;
      Object.keys(row.regirons).forEach(function (gameid) {
        if (row.regirons[gameid]) {
          Object.keys(oBet).forEach(function (betid) {
            if (Math.abs(oBet[betid]) !== 0) {
              let oddValues = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === parseInt(betid);
              })[0];
              let betTimes = parseInt(betid) === 15 ? 18 : 1;
              angular.forEach(row.numbers, function (num) {
                let findNumber = $.grep(oddValues.Numbers, function (onb) {
                  return onb.Number === num;
                });
                if (findNumber.length === 0) {
                  rowMoney += oddValues.Price * oBet[betid] * betTimes;
                } else {
                  if (findNumber[0].Stop === undefined) {
                    rowMoney += oBet[betid] * (oddValues.Price + findNumber[0].ExtraPrice) * betTimes;
                  }
                }
              });
            }
          });
        }
      });
      row.sumRowMoney = rowMoney;
      return rowMoney;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach(vm.rowsBets, function (row) {
        vm.sumMoney += row.sumRowMoney !== undefined ? row.sumRowMoney : 0;
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      vm.sumPoint = 0;
      let oddValues, oddPrice, betObj, TicketObj, findExtra, betTypeAlias, ns = [];
      betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach(vm.rowsBets, function (row, rowId) {
        if (row.sumRowMoney !== 0) {
          let oBet = {7: 0, 8: 0, 15: 0};
          oBet[7] = Math.abs(row.point[7]) + Math.abs(row.point[78]);
          oBet[8] = Math.abs(row.point[8]) + Math.abs(row.point[78]);
          oBet[15] = Math.abs(row.point[15]);
          betTypeAlias = 0;
          betTypeAlias += Math.abs(row.point[7]) !== 0 ? 128 : 0;
          betTypeAlias += Math.abs(row.point[8]) !== 0 ? 256 : 0;
          betTypeAlias += Math.abs(row.point[78]) !== 0 ? 512 : 0;
          betTypeAlias += Math.abs(row.point[15]) !== 0 ? 2048 : 0;
          Object.keys(row.regirons).forEach(function (gameid) {
            if (row.regirons[gameid]) {
              oddValues = $.grep(vm.odds, function (game) {
                return game.GameType === parseInt(gameid);
              });
              Object.keys(oBet).forEach(function (betid) {
                if (Math.abs(oBet[betid]) !== 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === parseInt(betid);
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: parseInt(betid), Items: [], Additional: {Row: rowId, Alias: betTypeAlias, Reverse: false}};
                  angular.forEach(row.numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    ns = ns.concat([num]);
                    Number.Point = oBet[betid];
                    vm.sumPoint += oBet[betid];
                    findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].Stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
              });
            }
          });
        }
      });
      ns = ns.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [7, 8, 15]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("d3lo17Ctrl", d3lo17Ctrl);
  function d3lo17Ctrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.changeLabel = changeLabel;
    vm.updatePrice = updatePrice;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    $scope.$mdMedia = $mdMedia;
    $rootScope.location = {game: 4, bet: 17};
    vm.selectedCheckbox = [];
    $timeout(function () {
      vm.changeLabel(0);
    }, 300);
    vm.base = {17: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 17) {
          if (pr.GameType === 2) {
            vm.base[17][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[17][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[17][4] = pr.Price;
          }
        }
      });
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: {17: {2: vm.base[17][2], 3: vm.base[17][3], 4: vm.base[17][4]}}, disabled: {17: {2: false, 3: false, 4: false}}};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    function changeLabel(value) {
      vm.label = value;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e3; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: {17: {2: vm.base[17][2], 3: vm.base[17][3], 4: vm.base[17][4]}}, disabled: {17: {2: false, 3: false, 4: false}}};
        if (value < 10) {
          if (Math.floor(i / 100) === value) {
            vm.numbers.push(number);
          }
        } else {
          if (Math.floor(i % 100 / 10) === value % 10) {
            vm.numbers.push(number);
          }
        }
      }
      if (vm.odds !== undefined) {
        vm.updatePrice();
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.updatePrice();
    });
    function updatePrice() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [17]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (id < 10) {
          if (Math.floor(index / 10) === id) {
            number.selected = vm.checked;
          }
        } else {
          if (index % 10 === id % 10) {
            number.selected = vm.checked;
          }
        }
      });
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = 0;
    }
    function totalPoint() {
      vm.sumPoint = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[17][gameid]) {
            vm.sumPoint += vm.inputPoint;
          }
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[17][gameid]) {
            vm.sumMoney += num.price[17][gameid] * vm.inputPoint * 17;
          }
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach($rootScope.regironSelected, function (gameid) {
        let TicketObj = {GameType: gameid, BetType: 17, Items: [], Additional: {Row: 0, Alias: 262144, Reverse: false}};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[17][gameid]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[17][gameid];
            Number.Point = vm.inputPoint;
            TicketObj.Items.push(Number);
          }
        });
        betObj.Tickets.push(TicketObj);
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [17]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("lo18DauCtrl", lo18DauCtrl);
  function lo18DauCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    $scope.$mdMedia = $mdMedia;
    vm.base = {30: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 30) {
          if (pr.GameType === 2) {
            vm.base[30][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[30][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[30][4] = pr.Price;
          }
        }
      });
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, price: {30: {2: vm.base[30][2], 3: vm.base[30][3], 4: vm.base[30][4]}}, disabled: {30: {2: false, 3: false, 4: false}}};
      vm.numbers.push(number);
    }
    $rootScope.location = {game: 4, bet: 30};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [30]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (odd.BetType === 30 && num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(select.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.inputPoint = 0;
      vm.selectedCheckbox = [];
      vm.keynumber = "";
    }
    function totalPoint() {
      vm.sumPoint = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[gameid]) {
            vm.sumPoint += vm.inputPoint;
          }
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[gameid]) {
            vm.sumMoney += num.price[30][gameid] * vm.inputPoint * 18;
          }
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      vm.betDatas = [];
      let betObj = {}, TicketObj;
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach($rootScope.regironSelected, function (gameid) {
        TicketObj = {GameType: gameid, BetType: 30, Items: [], Additional: {Row: 0, Alias: 2048, Reverse: false}};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[30][gameid]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[30][gameid];
            Number.Point = vm.inputPoint;
            TicketObj.Items.push(Number);
          }
        });
        betObj.Tickets.push(TicketObj);
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [30]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("haidDauController", haidDauController);
  function haidDauController($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.aBetID = aBetID;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    $scope.$mdMedia = $mdMedia;
    if ($state.current.url === "/dau") {
      vm.betID = 7;
    } else {
      vm.betID = 8;
    }
    $rootScope.location = {game: 4, bet: vm.betID};
    vm.pointDau = 0;
    vm.pointDuoi = 0;
    vm.basePrice = 0;
    vm.numbers = [];
    vm.base = {7: {2: 0, 3: 0, 4: 0}, 8: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 7) {
          if (pr.GameType === 2) {
            vm.base[7][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[7][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[7][4] = pr.Price;
          }
        }
        if (pr.BetType === 8) {
          if (pr.GameType === 2) {
            vm.base[8][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[8][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[8][4] = pr.Price;
          }
        }
      });
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, price: {7: {2: vm.base[7][2], 3: vm.base[7][3], 4: vm.base[7][4]}, 8: {2: vm.base[8][2], 3: vm.base[8][3], 4: vm.base[8][4]}}, disabled: {7: {2: false, 3: false, 4: false}, 8: {2: false, 3: false, 4: false}}};
      vm.numbers.push(number);
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [vm.betID]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (odd.BetType === vm.betID && num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(select.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementsByClassName("bet-input")[0].select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.selectedCheckbox = [];
      vm.inputPointDau = vm.inputPointDuoi = vm.inputPointDd = 0;
      vm.keynumber = "";
    }
    function totalPoint() {
      vm.sumPoint = 0;
      vm.inputPointDau = isNaN(vm.inputPointDau) ? 0 : vm.inputPointDau;
      vm.inputPointDuoi = isNaN(vm.inputPointDuoi) ? 0 : vm.inputPointDuoi;
      vm.inputPointDd = isNaN(vm.inputPointDd) ? 0 : vm.inputPointDd;
      vm.pointDau = vm.inputPointDau + vm.inputPointDd;
      vm.pointDuoi = vm.inputPointDuoi + vm.inputPointDd;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[gameid]) {
            vm.sumPoint += vm.pointDau + vm.pointDuoi;
          }
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[gameid]) {
            vm.sumMoney += num.price[7][gameid] * vm.pointDau + num.price[8][gameid] * vm.pointDuoi;
          }
        });
      });
      return vm.sumMoney;
    }
    function aBetID() {
      let aID = [];
      if (vm.pointDau !== 0) {
        aID.push({betid: 7, point: vm.pointDau});
      }
      if (vm.pointDuoi !== 0) {
        aID.push({betid: 8, point: vm.pointDuoi});
      }
      return aID;
    }
    function submitBetting() {
      let betAlias = 0;
      betAlias += parseInt(vm.inputPointDau) === 0 ? 0 : 128;
      betAlias += parseInt(vm.inputPointDuoi) === 0 ? 0 : 256;
      betAlias += parseInt(vm.inputPointDd) === 0 ? 0 : 512;
      let betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.aBetID(), function (betid) {
          let ticketObj = {GameType: gameid, BetType: betid.betid, Additional: {Row: 0, Alias: betAlias, Reverse: false}, Items: []};
          angular.forEach(vm.numbers, function (number) {
            if (number.selected && !number.disabled[betid.betid][gameid]) {
              let Number = {};
              Number.Numbers = [number.number];
              Number.Price = number.price[betid.betid][gameid];
              Number.Point = betid.betid === 7 ? vm.pointDau : vm.pointDuoi;
              ticketObj.Items.push(Number);
            }
          });
          betObj.Tickets.push(ticketObj);
        });
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [vm.betID]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("lo18Ctrl", lo18Ctrl);
  function lo18Ctrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, select) {
    let vm = this;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    $scope.$mdMedia = $mdMedia;
    vm.base = {15: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 15) {
          if (pr.GameType === 2) {
            vm.base[15][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[15][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[15][4] = pr.Price;
          }
        }
      });
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, price: {15: {2: vm.base[15][2], 3: vm.base[15][3], 4: vm.base[15][4]}}, disabled: {15: {2: false, 3: false, 4: false}}};
      vm.numbers.push(number);
    }
    $rootScope.location = {game: 4, bet: 15};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [15]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (odd.BetType === 15 && num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(select.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.inputPoint = 0;
      vm.selectedCheckbox = [];
      vm.keynumber = "";
    }
    function totalPoint() {
      vm.sumPoint = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[gameid]) {
            vm.sumPoint += vm.inputPoint;
          }
        });
      });
      return vm.sumPoint;
    }
    function totalMoney() {
      vm.sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (gameid) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled[gameid]) {
            vm.sumMoney += num.price[15][gameid] * vm.inputPoint * 18;
          }
        });
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      vm.betDatas = [];
      let betObj = {}, TicketObj;
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach($rootScope.regironSelected, function (gameid) {
        TicketObj = {GameType: gameid, BetType: 15, Items: [], Additional: {Row: 0, Alias: 2048, Reverse: false}};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[15][gameid]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[15][gameid];
            Number.Point = vm.inputPoint;
            TicketObj.Items.push(Number);
          }
        });
        betObj.Tickets.push(TicketObj);
      });
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [15]});
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary", []).config(config);
  function config($stateProvider, msApiProvider) {
    $stateProvider.state("app.legendary", {abstract: true, url: "/legendary", views: {"main@": {templateUrl: "app/core/layouts/content-general.html", controller: "MainController as one"}, "content@app.legendary": {templateUrl: "app/main/legendary/legendary.html", controller: "legendaryCtrl as legend"}, "toolbar@app.legendary": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.legendary": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app.legendary": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}, "legendary-menu@app.legendary": {templateUrl: "app/main/legendary/menu/menu.html", controller: "legendaryMenuCtrl as vm"}}}).state("app.legendary.northern", {url: "/northern", abstract: true, resolve: {selectBox: function (msApi) {
      return msApi.resolve("number.select@get");
    }, collections: function (msApi) {
      return msApi.resolve("number.collection@get");
    }}}).state("app.legendary.northern.quick", {url: "/quick", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/quick/quick.html", controller: "northernQuickCtrl as vm"}}, resolve: {GameType: function () {
      return 0;
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.jackpot", {url: "/jackpot", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 0, BetTimes: 1, StatsType: 0};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.lotto", {url: "/lotto", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 1, BetTimes: 1, StatsType: 2};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.lotto-head", {url: "/lotto-head", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 29, BetTimes: 1, StatsType: 3};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.head-jackpot", {url: "/head", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 21, BetTimes: 1, StatsType: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.except-jackpot", {url: "/except-jackpot", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/except/legendary.except.html", controller: "legendaryExceptCtrl as vm"}}, resolve: {betId: function () {
      return 5;
    }, param: function () {
      return {minBet: 10, betTimes: 1, payouts: 650};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.except-lotto", {url: "/except-lotto", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/except/legendary.except.html", controller: "legendaryExceptCtrl as vm"}}, resolve: {betId: function () {
      return 6;
    }, param: function () {
      return {minBet: 4, betTimes: 4, payouts: 21100};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.parlay", {url: "/pair", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/parlay/legendary.parlay.html", controller: "legendaryNorthernPairCtrl as vm"}}, resolve: {GameType: function () {
      return 0;
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.live", {url: "/live/:tab", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/live/legend.live.html", controller: "LegendNorthLiveCtrl as vm"}}, resolve: {GameType: function () {
      return 0;
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.3d", {url: "/3d", abstract: true}).state("app.legendary.northern.3d.jackpot", {url: "/jackpot", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/3d/legendary.3d.html", controller: "legendNorthern3DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 11, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.3d.lotto", {url: "/lotto", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/3d/legendary.3d.html", controller: "legendNorthern3DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 12, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.4d", {url: "/4d", abstract: true}).state("app.legendary.northern.4d.jackpot", {url: "/jackpot", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/4d/legendary.4d.html", controller: "legendNorthern4DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 13, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.northern.4d.lotto", {url: "/lotto", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/4d/legendary.4d.html", controller: "legendNorthern4DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 0, BetType: 14, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern", {url: "/southern", abstract: true, resolve: {selectBox: function (msApi) {
      return msApi.resolve("number.select@get");
    }, collections: function (msApi) {
      return msApi.resolve("number.collection@get");
    }}}).state("app.legendary.southern.quick", {url: "/quick", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/quick/quick.html", controller: "southernQuickCtrl as vm"}}, resolve: {GameType: function () {
      return 1;
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.parlay", {url: "/pair", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/parlay/legendary.parlay.html", controller: "legendaryNorthernPairCtrl as vm"}}, resolve: {GameType: function () {
      return 1;
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.2d", {url: "/2d", abstract: true}).state("app.legendary.southern.2d.eighth", {url: "/eighth", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 7, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.2d.jackpot", {url: "/jackpot", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 8, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.2d.lotto", {url: "/lotto", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 15, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.2d.lotto-head", {url: "/lotto-head", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/general/legendary.general.html", controller: "legendaryGeneralCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 30, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.3d", {url: "/3d", abstract: true}).state("app.legendary.southern.3d.seventh", {url: "/seventh", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/3d/legendary.3d.html", controller: "legendNorthern3DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 10, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.3d.jackpot", {url: "/jackpot", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/3d/legendary.3d.html", controller: "legendNorthern3DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 11, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.3d.lotto", {url: "/lotto", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/3d/legendary.3d.html", controller: "legendNorthern3DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 17, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.4d", {url: "/4d", abstract: true}).state("app.legendary.southern.4d.jackpot", {url: "/jackpot", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/4d/legendary.4d.html", controller: "legendNorthern4DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 13, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.4d.lotto", {url: "/lotto", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/4d/legendary.4d.html", controller: "legendNorthern4DCtrl as vm"}}, resolve: {config: function () {
      return {GameType: 1, BetType: 19, BetTimes: 1};
    }}, bodyClass: "legendary light"}).state("app.legendary.southern.live", {url: "/live", views: {"legendary-content@app.legendary": {templateUrl: "app/main/legendary/northern/live/legend.live.html", controller: "LegendNorthLiveCtrl as vm"}}, resolve: {GameType: function () {
      return 1;
    }}, bodyClass: "legendary light"});
    msApiProvider.register("number.select", ["app/data/select.json"]);
    msApiProvider.register("number.collection", ["app/data/collection.json"]);
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendSouthern3DCtrl", legendSouthern3DCtrl);
  function legendSouthern3DCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $mdDialog, $timeout, $state, $interval, $document, msUtils, network, betId) {
    var vm = this;
    vm.getOdds = getOdds;
    vm.changeLabel = changeLabel;
    vm.updatePrice = updatePrice;
    vm.purchaseLimit = purchaseLimit;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.aBetID = aBetID;
    vm.ignorePrice = true;
    vm.betId = betId;
    vm.selectedCheckbox = [];
    $scope.$mdMedia = $mdMedia;
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = {10: item.value, 11: item.value, 101: item.value};
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
      vm.stepper.saveLocal();
    }, getPoint: function () {
      let f = vm.betStepper.filter(function (s) {
        return s.active;
      });
      if (f.length === 0) {
        vm.betStepper[0].active = true;
      }
      return vm.betStepper.filter(function (s) {
        return s.active;
      })[0].value;
    }, update: function () {
      if (vm.betPoint === 0 || vm.betPoint === null) {
        vm.betStepper = vm.betStepper.filter(function (s) {
          return !s.individual;
        });
        vm.stepper.saveLocal();
        return;
      }
      let f = vm.betStepper.filter(function (s) {
        return s.value === vm.betPoint;
      });
      if (f.length) {
        angular.forEach(vm.betStepper, function (step) {
          step.active = f[0].value === step.value;
        });
        if (!f[0].individual) {
          vm.betStepper = vm.betStepper.filter(function (s) {
            return !s.individual;
          });
        }
      } else {
        let individual = vm.betStepper.filter(function (s) {
          return s.individual;
        });
        if (individual.length) {
          individual[0].value = vm.betPoint;
        } else {
          vm.betStepper.unshift({individual: true, active: true, value: vm.betPoint});
        }
        angular.forEach(vm.betStepper, function (step) {
          step.active = step.individual;
        });
      }
      vm.stepper.saveLocal();
    }, saveLocal: function () {
      localStorage.setItem("stepper", JSON.stringify(vm.betStepper));
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled[betId]) {
          number.selected = !number.selected;
        }
      });
      vm.betPoint = {10: vm.stepper.getPoint(), 11: vm.stepper.getPoint(), 101: vm.stepper.getPoint()};
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      return ns.toString().replace(/\,+/g, ", ");
    }, checkbox: {exists: function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      var idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.betPoint = vm.stepper.getPoint();
      angular.forEach(vm.numbers, function (number, index) {
        if (!number.disabled[betId]) {
          if (id < 10) {
            if (Math.floor(index / 10) === id) {
              number.selected = vm.checked;
            }
          } else {
            if (index % 10 === id % 10) {
              number.selected = vm.checked;
            }
          }
        }
      });
      vm.betPoint = {10: vm.stepper.getPoint(), 11: vm.stepper.getPoint(), 101: vm.stepper.getPoint()};
    }}};
    vm.betPoint = {10: 0, 11: 0, 101: 0};
    vm.basePrice = {10: 0, 11: 0};
    if ($rootScope.LegendParameters !== undefined) {
      $rootScope.LegendParameters.map(function (p) {
        if (p.GameType === 1) {
          if (p.BetType === 10) vm.basePrice[10] = p.Price;
          if (p.BetType === 11) vm.basePrice[11] = p.Price;
        }
      });
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: {10: vm.basePrice[10], 11: vm.basePrice[11]}, disabled: {10: false, 11: false}, base: {10: vm.basePrice[10], 11: vm.basePrice[11]}};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    function purchaseLimit() {
      if ($rootScope.LegendParameters !== undefined) {
        vm.payouts = $rootScope.LegendParameters.filter(function (item) {
          return item.GameType === 1 && item.BetType === betId;
        })[0].Payouts;
      }
    }
    $scope.$on("oddsPrice::done", function () {
      vm.updatePrice();
      $timeout(function () {
        vm.purchaseLimit();
      });
    });
    function changeLabel(value) {
      vm.label = value;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e3; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: {10: vm.basePrice[10], 11: vm.basePrice[11]}, base: {10: vm.basePrice[10], 11: vm.basePrice[11]}, disabled: {10: false, 11: false}};
        if (value < 10) {
          if (Math.floor(i / 100) === value) {
            vm.numbers.push(number);
          }
        } else {
          if (Math.floor(i % 100 / 10) === value % 10) {
            vm.numbers.push(number);
          }
        }
      }
      vm.updatePrice();
    }
    function updatePrice() {
      vm.odds = $rootScope.LegendOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [10, 11]);
      });
      if (vm.odds.length === 0) {
        $timeout(function () {
          vm.getOdds();
        }, 1e3);
        return;
      }
      angular.forEach(vm.odds, function (pr) {
        if (pr.GameType === 1) {
          if (pr.BetType === 10) {
            vm.basePrice[10] = pr.Price;
          }
          if (pr.BetType === 11) {
            vm.basePrice[11] = pr.Price;
          }
        }
      });
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          num.base[odd.BetType] = odd.Price;
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              var extPrice = value.ExtraPrice !== undefined ? odd.Price + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
              if (betId === odd.BetType && num.price[odd.BetType] !== 0 && num.price[odd.BetType] !== extPrice) {
                num.priceChanged = true;
              }
              num.price[odd.BetType] = extPrice;
            }
          });
        });
      });
      $timeout(function () {
        vm.numbers.map(function (o) {
          return o.priceChanged = false;
        });
      }, 3e3);
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.selectedCheckbox = [];
      vm.betPoint = {10: 0, 11: 0, 101: 0};
    }
    function totalPoint() {
      let total = 0;
      vm.betPoint[10] = isNaN(vm.betPoint[10]) ? 0 : vm.betPoint[10];
      vm.betPoint[11] = isNaN(vm.betPoint[11]) ? 0 : vm.betPoint[11];
      vm.betPoint[101] = isNaN(vm.betPoint[101]) ? 0 : vm.betPoint[101];
      vm.pointSeventh = vm.betPoint[10] + vm.betPoint[101];
      vm.pointJack = vm.betPoint[11] + vm.betPoint[101];
      angular.forEach(vm.numbers, function (num) {
        if (num.selected) {
          total += vm.pointSeventh + vm.pointJack;
        }
      });
      return total;
    }
    function totalMoney() {
      let money = 0;
      angular.forEach(vm.numbers, function (num) {
        if (num.selected) {
          money += num.price[10] * vm.pointSeventh + num.price[11] * vm.pointJack;
        }
      });
      return money;
    }
    function aBetID() {
      let aID = [];
      if (vm.pointSeventh !== 0) {
        aID.push(10);
      }
      if (vm.pointJack !== 0) {
        aID.push(11);
      }
      return aID;
    }
    function submitBetting() {
      let betAlias = 0;
      betAlias += parseInt(vm.betPoint[10]) === 0 ? 0 : 8192;
      betAlias += parseInt(vm.betPoint[11]) === 0 ? 0 : 16384;
      betAlias += parseInt(vm.betPoint[101]) === 0 ? 0 : 32768;
      let betObj = {};
      betObj.Term = $rootScope.LegendTermName[1];
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach(vm.aBetID(), function (bet) {
        let ticketObj = {GameType: 1, BetType: bet, Additional: {Row: 0, Alias: betAlias, Reverse: false}, Items: []};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[bet]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[bet];
            Number.Point = bet === 10 ? vm.pointSeventh : vm.pointJack;
            ticketObj.Items.push(Number);
          }
        });
        if (ticketObj.Items.length) {
          betObj.Tickets.push(ticketObj);
        }
      });
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.costMoney = 0;
        angular.forEach(betObj.Tickets, function (ticket) {
          ticket.Money = $filter("legendCostMoney")(ticket);
          $scope.costMoney += ticket.Money;
        });
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function getOdds() {
      $rootScope.$broadcast("GetOdds", {GameType: 1, BetTypes: [10, 11]});
    }
    $timeout(function () {
      vm.getOdds();
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendSouthern2DJackpotCtrl", legendSouthern2DJackpotCtrl);
  function legendSouthern2DJackpotCtrl($rootScope, $scope, $mdMedia, $timeout, $mdDialog, $document, msUtils, message, selectBox, betId) {
    let vm = this;
    vm.betId = betId;
    vm.ignorePrice = true;
    vm.getOdds = getOdds;
    vm.buildPriceTable = buildPriceTable;
    vm.purchaseLimit = purchaseLimit;
    vm.totalPoint = totalPoint;
    vm.totalMoney = totalMoney;
    vm.submitBetting = submitBetting;
    vm.resetBetting = resetBetting;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.aBetID = aBetID;
    vm.selectedCheckbox = [];
    vm.numbers = [];
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = {7: item.value, 8: item.value, 78: item.value};
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled[betId]) {
          number.selected = !number.selected;
        }
      });
      if (n.selected) {
        vm.betPoint = {7: 0, 8: 0, 78: 0};
      }
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      return ns.toString().replace(/\,+/g, ", ");
    }, typing: function (e) {
      if (!vm.keyNumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keyNumber[vm.keyNumber.length - 1] !== ",") {
          vm.keyNumber = vm.keyNumber.substring(0, vm.keyNumber.length - 1);
        }
      }
      var value = vm.keyNumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keyNumber = vm.keyNumber + ",";
      }
    }, submit: function (click) {
      if (!vm.keyNumber) {
        return;
      }
      vm.keyNumber = vm.keyNumber.replace(/\s+/g, "");
      if (vm.keyNumber.length === 0) {
        return;
      }
      var arr = vm.keyNumber.split(",");
      var arrInput = [];
      for (var i = 0; i < arr.length; i++) {
        var number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (number) {
        if (arrInput.indexOf(number.number) !== -1 && !number.disabled[betId]) {
          if (!number.selected) {
            number.selected = true;
          }
        }
      });
      vm.keyNumber = "";
      vm.betPoint = {7: 0, 8: 0, 78: 0};
      $timeout(function () {
        document.getElementsByClassName("input-numbers-array")[0].focus();
      }, 100);
    }, checkbox: {exists: function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      var idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(selectBox.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length && !number.disabled[betId]) {
          number.selected = vm.checked;
        }
      });
      vm.betPoint = {7: 0, 8: 0, 78: 0};
    }}};
    vm.betPoint = {7: 0, 8: 0, 78: 0};
    vm.basePrice = {7: 0, 8: 0};
    if ($rootScope.LegendParameters !== undefined) {
      $rootScope.LegendParameters.map(function (p) {
        if (p.GameType === 1) {
          if (p.BetType === 7) vm.basePrice[7] = p.Price;
          if (p.BetType === 8) vm.basePrice[8] = p.Price;
        }
      });
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: {7: false, 8: false}, selected: false, base: {7: vm.basePrice[7], 8: vm.basePrice[8]}, price: {7: vm.basePrice[7], 8: vm.basePrice[8]}});
    }
    function purchaseLimit() {
      if ($rootScope.LegendParameters !== undefined) {
        vm.payouts = $rootScope.LegendParameters.filter(function (item) {
          return item.GameType === 1 && item.BetType === betId;
        })[0].Payouts;
      }
    }
    $scope.$on("oddsPrice::done", function () {
      vm.buildPriceTable();
      $timeout(function () {
        vm.purchaseLimit();
      });
    });
    function buildPriceTable() {
      vm.odds = $rootScope.LegendOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [7, 8]);
      });
      if (vm.odds.length === 0) {
        $timeout(function () {
          vm.getOdds();
        }, 1e3);
        return;
      }
      angular.forEach(vm.odds, function (pr) {
        if (pr.GameType === 1) {
          if (pr.BetType === 7) {
            vm.basePrice[7] = pr.Price;
          }
          if (pr.BetType === 8) {
            vm.basePrice[8] = pr.Price;
          }
        }
      });
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          num.base[odd.BetType] = odd.Price;
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              var extPrice = value.ExtraPrice !== undefined ? odd.Price + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
              if (betId === odd.BetType && num.price[odd.BetType] !== 0 && num.price[odd.BetType] !== extPrice) {
                num.priceChanged = true;
              }
              num.price[odd.BetType] = extPrice;
            }
          });
        });
      });
      $timeout(function () {
        vm.numbers.map(function (o) {
          return o.priceChanged = false;
        });
      }, 3e3);
    }
    function totalPoint() {
      let total = 0;
      vm.betPoint[7] = isNaN(vm.betPoint[7]) ? 0 : vm.betPoint[7];
      vm.betPoint[8] = isNaN(vm.betPoint[8]) ? 0 : vm.betPoint[8];
      vm.betPoint[78] = isNaN(vm.betPoint[78]) ? 0 : vm.betPoint[78];
      vm.pointEighth = vm.betPoint[7] + vm.betPoint[78];
      vm.pointJack = vm.betPoint[8] + vm.betPoint[78];
      angular.forEach(vm.numbers, function (num) {
        if (num.selected) {
          total += vm.pointEighth + vm.pointJack;
        }
      });
      return total;
    }
    function totalMoney() {
      let money = 0;
      angular.forEach(vm.numbers, function (num) {
        if (num.selected) {
          money += num.price[7] * vm.pointEighth + num.price[8] * vm.pointJack;
        }
      });
      return money;
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
      vm.betPoint = {7: 0, 8: 0, 78: 0};
      vm.selectedCheckbox = [];
      vm.keynumber = "";
      vm.arrayTemporary = [];
    }
    function aBetID() {
      let aID = [];
      if (vm.pointEighth !== 0) {
        aID.push(7);
      }
      if (vm.pointJack !== 0) {
        aID.push(8);
      }
      return aID;
    }
    function submitBetting() {
      let betAlias = 0;
      betAlias += parseInt(vm.betPoint[7]) === 0 ? 0 : 128;
      betAlias += parseInt(vm.betPoint[8]) === 0 ? 0 : 256;
      betAlias += parseInt(vm.betPoint[78]) === 0 ? 0 : 512;
      let betObj = {};
      betObj.Term = $rootScope.LegendTermName[1];
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach(vm.aBetID(), function (bet) {
        let ticketObj = {GameType: 1, BetType: bet, Additional: {Row: 0, Alias: betAlias, Reverse: false}, Items: []};
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled[bet]) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price[bet];
            Number.Point = bet === 7 ? vm.pointEighth : vm.pointJack;
            ticketObj.Items.push(Number);
          }
        });
        if (ticketObj.Items.length) {
          betObj.Tickets.push(ticketObj);
        }
      });
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.costMoney = 0;
        angular.forEach(betObj.Tickets, function (ticket) {
          ticket.Money = $filter("legendCostMoney")(ticket);
          $scope.costMoney += ticket.Money;
        });
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        $scope.$digest();
        e.preventDefault();
      }
    });
    function getOdds() {
      $rootScope.$broadcast("GetOdds", {GameType: 1, BetTypes: [7, 8]});
    }
    $timeout(function () {
      vm.getOdds();
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.account", []).config(config);
  function config($stateProvider, msApiProvider) {
    $stateProvider.state("app.account", {abstract: true, url: "/account", views: {"main@": {templateUrl: "app/core/layouts/content-account.html", controller: "myAccountCtrl as vm"}, "toolbar@app.account": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.account": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app.account": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}, "menu-account@app.account": {templateUrl: "app/main/account/menu.html"}}}).state("app.account.my", {url: "/my", views: {"content@app.account": {templateUrl: "app/main/account/my-account/my-account.html", controller: "myCtrl as vm", pageTrack: "/my-account"}}, bodyClass: "one-account"}).state("app.account.change-password", {url: "/change-password", views: {"content@app.account": {templateUrl: "app/main/account/change-password/change-password.html", controller: "changePasswordCtrl as vm", pageTrack: "/change-password"}}, bodyClass: "one-account"}).state("app.account.otp", {url: "/otp", views: {"content@app.account": {templateUrl: "app/main/account/otp/otp.html"}, "otpView@app.account.otp": {templateUrl: "app/main/account/otp/otp.template.html", controller: "otpController as vm", pageTrack: "/otp"}}, bodyClass: "one-account"}).state("app.account.telegram", {url: "/telegram", views: {"content@app.account": {templateUrl: "app/main/account/telegram/telegram.html", controller: "telegramCtrl as vm", pageTrack: "/telegram"}}, bodyClass: "one-account"}).state("app.account.statement", {url: "/statement", views: {"content@app.account": {templateUrl: "app/main/account/statement/statement.html", controller: "statementCtrl as vm", pageTrack: "/statement"}}, bodyClass: "one-account"}).state("app.account.statement.lottery", {abstract: true, url: "/lottery"}).state("app.account.statement.lottery.date", {url: "/:time", views: {"content@app.account": {templateUrl: "app/main/account/statement/lottery/date/date.html", controller: "dateReportCtrl as vm", pageTrack: "/statement-lottery-date"}}, bodyClass: "one-account"}).state("app.account.statement.lottery.game", {url: "/:game/:time", views: {"content@app.account": {templateUrl: "app/main/account/statement/lottery/game/game.html", controller: "gameReportCtrl as vm", pageTrack: "/statement-lottery-game"}}, bodyClass: "one-account"}).state("app.account.statement.lottery.bet", {url: "/:game/:bet/:time", views: {"content@app.account": {templateUrl: "app/main/account/statement/lottery/bet/bet.html", controller: "betReportCtrl as vm", pageTrack: "/statement-lottery-bet"}}, bodyClass: "one-account"}).state("app.account.statement.legend", {abstract: true, url: "/legend"}).state("app.account.statement.legend.date", {url: "/date?time", views: {"content@app.account": {templateUrl: "app/main/account/statement/legendary/date/date.html", controller: "legendDateReportCtrl as vm"}}, bodyClass: "one-account"}).state("app.account.statement.legend.term", {url: "/term?date&game", views: {"content@app.account": {templateUrl: "app/main/account/statement/legendary/term/term.html", controller: "legendTermReportCtrl as vm", pageTrack: "/statement-legend-term"}}, bodyClass: "one-account"}).state("app.account.statement.legend.game", {url: "/game?game&time&term", views: {"content@app.account": {templateUrl: "app/main/account/statement/legendary/game/game.html", controller: "legendGameReportCtrl as vm", pageTrack: "/statement-legend-game"}}, bodyClass: "one-account"}).state("app.account.statement.legend.bet", {url: "/bet?game&bet&term", views: {"content@app.account": {templateUrl: "app/main/account/statement/legendary/bet/bet.html", controller: "legendBetReportCtrl as vm", pageTrack: "/statement-legend-bet"}}, bodyClass: "one-account"}).state("app.account.statement.wm-casino", {abstract: true, url: "/wm-casino"}).state("app.account.statement.wm-casino.date", {url: "/:time", views: {"content@app.account": {templateUrl: "app/main/account/statement/wm-casino/date/date.html", controller: "dateWmCasinoReportCtrl as vm", pageTrack: "/statement-wm-casino-date"}}, bodyClass: "one-account"}).state("app.account.statement.wm-casino.game", {url: "/:game/:time", views: {"content@app.account": {templateUrl: "app/main/account/statement/wm-casino/game/game.html", controller: "gameWmCasinoReportCtrl as vm", pageTrack: "/statement-wm-casino-game"}}, bodyClass: "one-account"}).state("app.account.statement.casino", {abstract: true, url: "/casino"}).state("app.account.statement.casino.date", {url: "/:time", views: {"content@app.account": {templateUrl: "app/main/account/statement/casino/date/date.html", controller: "dateCasinoReportCtrl as vm", pageTrack: "/statement-casino-date"}}, bodyClass: "one-account"}).state("app.account.statement.casino.game", {url: "/:game/:time", views: {"content@app.account": {templateUrl: "app/main/account/statement/casino/game/game.html", controller: "gameCasinoReportCtrl as vm", pageTrack: "/statement-casino-game"}}, bodyClass: "one-account"}).state("app.account.statement.casino.game.presidential", {url: "/presidential", views: {"content@app.account": {templateUrl: "app/main/account/statement/casino/game/presidential/presidential.html", controller: "gameCasinoReportCtrl as vm", pageTrack: "/statement-casino-game"}}, bodyClass: "one-account"}).state("app.account.statement.saba", {abstract: true, url: "/saba"}).state("app.account.statement.saba.sport", {url: "/sport?date", views: {"content@app.account": {templateUrl: "app/main/account/statement/saba/sport/sport.html", controller: "sabaSportReportCtrl as vm", pageTrack: "/statement-saba-sport-group"}}, bodyClass: "one-account"}).state("app.account.statement.saba.items", {url: "/items?sport&date", views: {"content@app.account": {templateUrl: "app/main/account/statement/saba/items/items.html", controller: "sabaItemsReportCtrl as vm", pageTrack: "/statement-saba-items"}}, resolve: {sabaBetTypes: function (msApi) {
      return msApi.resolve("saba@get");
    }, sabaBetTypesVN: function (msApi) {
      return msApi.resolve("saba-vn@get");
    }}, bodyClass: "one-account"}).state("app.account.bet-list", {url: "/bet-list", abstract: true}).state("app.account.bet-list.traditional", {url: "/traditional", views: {"content@app.account": {templateUrl: "app/main/account/bet-list/traditional/traditional.bet-list.html", controller: "betListCtrl as vm", pageTrack: "/bet-list.traditional"}}, bodyClass: "one-account"}).state("app.account.bet-list.traditional.all", {url: "/all", views: {"content@app.account": {templateUrl: "app/main/account/bet-list/traditional/full/full.html", controller: "blFullCtrl as vm", pageTrack: "/bet-list.traditional-all"}}, bodyClass: "one-account"}).state("app.account.bet-list.traditional.batch", {url: "/batch?term&id", views: {"content@app.account": {templateUrl: "app/main/account/bet-list/traditional/batch/batch.html", controller: "blBatchCtrl as vm", pageTrack: "/bet-list.traditional-batch"}}, bodyClass: "one-account"}).state("app.account.bet-list.legendary", {url: "/legendary", views: {"content@app.account": {templateUrl: "app/main/account/bet-list/legendary/legendary.bet-list.html", controller: "legendBetListCtrl as vm", pageTrack: "/bet-list.legendary"}}, bodyClass: "one-account"}).state("app.account.bet-list.legendary.batch", {url: "/batch?term&game&id", views: {"content@app.account": {templateUrl: "app/main/account/bet-list/legendary/batch/batch.html", controller: "legendBatchCtrl as vm", pageTrack: "/bet-list.legendary-batch"}}, bodyClass: "one-account"}).state("app.account.bet-list.legendary.all", {url: "/all", views: {"content@app.account": {templateUrl: "app/main/account/bet-list/legendary/full/full.html", controller: "legendFullCtrl as vm", pageTrack: "/bet-list.legendary-all"}}, bodyClass: "one-account"}).state("app.account.limit", {url: "/limit", views: {"content@app.account": {templateUrl: "app/main/account/limit/limit.html", controller: "limitCtrl as vm", pageTrack: "/account-limit"}}, bodyClass: "one-account"}).state("app.account.rules", {url: "/rules", views: {"content@app.account": {templateUrl: "app/main/account/rules/rules.html", pageTrack: "/account-rules"}}, bodyClass: "one-account"}).state("app.account.cancelled", {url: "/cancelled", abstract: true}).state("app.account.cancelled.traditional", {url: "/traditional", views: {"content@app.account": {templateUrl: "app/main/account/cancelled/traditional/traditional.cancelled.html", controller: "cancelledCtrl as vm", pageTrack: "/cancelled.traditional"}}, bodyClass: "one-account"});
    msApiProvider.register("saba", ["app/data/saba.bet-type.json"]);
    msApiProvider.register("saba-vn", ["app/data/saba.bet-type-vn.json"]);
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("sabaItemsReportCtrl", sabaItemsReportCtrl);
  function sabaItemsReportCtrl($rootScope, $scope, $stateParams, $timeout, $mdDialog, msUtils, sabaBetTypes, sabaBetTypesVN) {
    let vm = this;
    vm.data = $stateParams;
    vm.data.SportGroup = parseInt($stateParams.sport);
    vm.sabaBetTypes = sabaBetTypes.data;
    vm.sabaBetTypesVN = sabaBetTypesVN.data;
    vm.localParlayData = sessionStorage.getItem("Parlay") === null ? {} : JSON.parse(sessionStorage.getItem("Parlay"));
    if (vm.localParlayData.Teams === undefined) {
      vm.localParlayData.Teams = [];
    }
    if (vm.localParlayData.Leagues === undefined) {
      vm.localParlayData.Leagues = [];
    }
    if (vm.localParlayData.Matchs === undefined) {
      vm.localParlayData.Matchs = [];
    }
    vm.date = moment.unix(vm.data.date).format("dddd") + ", ngày " + moment.unix(vm.data.date).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.getLeagueName = getLeagueName;
    vm.ParlayDetails = ParlayDetails;
    vm.showParlayData = showParlayData;
    vm.updateParlayData = updateParlayData;
    vm.getMatch = getMatch;
    vm.updateLeagueInfo = updateLeagueInfo;
    vm.getRNGBetItems = getRNGBetItems;
    vm.ticketResult = ticketResult;
    vm.ticketResultSingleParlay = ticketResultSingleParlay;
    vm.ticketResultIsLive = ticketResultIsLive;
    vm.ticketResultSystemParlay = ticketResultSystemParlay;
    vm.showScore = showScore;
    vm.fetchReport();
    vm.reports = [];
    function fetchReport(ltId) {
      ltId = ltId === undefined ? "" : ltId;
      let data = {Date: moment.unix(vm.data.date).format("YYYY-MM-DD"), SportGroup: vm.data.sport, LastId: ltId, Limit: 100};
      if ($rootScope.User !== undefined) {
        let MatchIds = [];
        Lotus.Saba.Report.Statement.getBetItems(data).then(function (response) {
          vm.thereMore = response.length === 100;
          vm.loading = false;
          response.map(function (item) {
            if (vm.data.SportGroup === 2 || vm.data.SportGroup === 1) {
              MatchIds.push(item.MatchId);
            }
            matchingData(item);
            if (item.ParlayType === "MixParlay" && item.ParlayData.length) {
              item.nOdds = 1;
              item.ParlayData.map(function (par) {
                item.nOdds = item.nOdds * par.Odds;
              });
            }
          });
          MatchIds = MatchIds.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) === index;
          });
          if (MatchIds.length) {
            vm.getMatch(MatchIds).then(function (MatchInfo) {
              response.map(function (item) {
                let findMatch = MatchInfo.filter(function (match) {
                  return match.MatchId === item.MatchId;
                });
                if (findMatch.length) {
                  item.MatchDetails = findMatch[0];
                }
              });
              vm.reports = vm.reports.concat(response);
              $timeout(function () {
                $scope.$digest();
              }, 10);
            });
          } else {
            vm.reports = vm.reports.concat(response);
          }
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
    function showParlayData(item) {
      if (item.showParlay) {
        item.showParlay = !item.showParlay;
      } else {
        item.parlayUpdating = true;
        vm.updateParlayData(item).then(function (response) {
          item.parlayUpdating = false;
          item.showParlay = !item.showParlay;
          $timeout(function () {
            $scope.$digest();
          }, 10);
        });
      }
    }
    function updateParlayData(item) {
      let PromiseTeamIds = [];
      let PromiseLeagueIds = [];
      item.ParlayData.map(function (parlay) {
        PromiseTeamIds.push(parlay.HomeId);
        PromiseTeamIds.push(parlay.AwayId);
        PromiseLeagueIds.push(parlay.LeagueId);
      });
      PromiseTeamIds = PromiseTeamIds.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      PromiseLeagueIds = PromiseLeagueIds.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      let promiseTeams = PromiseTeamIds.map(function (id) {
        return getTeamName(id);
      });
      return Promise.all(promiseTeams).then(function () {
        item.ParlayData.map(function (parlay) {
          let findHome = vm.localParlayData.Teams.filter(function (team) {
            return team.Id === parlay.HomeId;
          })[0];
          let findAway = vm.localParlayData.Teams.filter(function (team) {
            return team.Id === parlay.AwayId;
          })[0];
          parlay.HomeTeamNameEn = findHome.Name;
          parlay.AwayTeamNameEn = findAway.Name;
          matchingData(parlay);
        });
        let promiseLeagues = PromiseLeagueIds.map(function (id) {
          return getLeagueName(id);
        });
        return Promise.all(promiseLeagues).then(function () {
          item.ParlayData.map(function (parlay) {
            let findLeague = vm.localParlayData.Leagues.filter(function (League) {
              return League.Id === parlay.LeagueId;
            })[0];
            parlay.LeagueNameEn = findLeague.Name;
          });
          return true;
        });
      }).catch(function (e) {
        console.log(e);
      });
    }
    function getTeamName(id) {
      let find = vm.localParlayData.Teams.filter(function (team) {
        return team.Id === id;
      });
      if (find.length !== 0) {
        return find[0];
      } else {
        return Lotus.Saba.Team.getTeamName({TeamId: id}).then(function (response) {
          response.Id = id;
          vm.localParlayData.Teams.push(response);
          sessionStorage.setItem("Parlay", JSON.stringify(vm.localParlayData));
          return response;
        });
      }
    }
    function getLeagueName(id) {
      let find = vm.localParlayData.Leagues.filter(function (team) {
        return team.Id === id;
      });
      if (find.length !== 0) {
        return $timeout(function () {
          return find[0];
        });
      } else {
        return Lotus.Saba.League.getLeagueName({LeagueId: id}).then(function (response) {
          response.Id = id;
          vm.localParlayData.Leagues.push(response);
          sessionStorage.setItem("Parlay", JSON.stringify(vm.localParlayData));
          return response;
        });
      }
    }
    function ParlayDetails(item, $event) {
      $mdDialog.show({controller: ParlayDetailsCtrl, templateUrl: "app/main/account/statement/saba/items/template/dialog.parlay.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, locals: {item: item}, fullscreen: true});
      function ParlayDetailsCtrl($scope, item) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.MixParlay = item.ParlayType === "MixParlay";
        if (item.ParlayType === "MixParlay") {
          vm.updateParlayData(item).then(function () {
            $scope.ticket = item;
            $timeout(function () {
              $scope.$digest();
            }, 10);
          });
        } else {
          let TeamIds = [];
          Lotus.Saba.Report.Statement.getSystemParlayDetails({RefNo: item.ParlayRefNo}).then(function (response) {
            response.map(function (item) {
              if (item.SystemParlayDetail.length) {
                item.nOdds = 1;
                item.SystemParlayDetail.map(function (par) {
                  item.nOdds = item.nOdds * par.Odds;
                  TeamIds.push(par.HomeId);
                  TeamIds.push(par.AwayId);
                });
              }
            });
            TeamIds = TeamIds.filter(function (item, index, inputArray) {
              return inputArray.indexOf(item) === index;
            });
            let promises = TeamIds.map(function (id) {
              return getTeamName(id);
            });
            Promise.all(promises).then(function (teams) {
              response.map(function (item) {
                if (item.SystemParlayDetail.length) {
                  item.SystemParlayDetail.map(function (par) {
                    par.HomeTeamNameEn = teams.filter(function (tea) {
                      return tea.Id === par.HomeId;
                    })[0].Name;
                    par.AwayTeamNameEn = teams.filter(function (tea) {
                      return tea.Id === par.AwayId;
                    })[0].Name;
                  });
                }
              });
              $scope.SystemParlay = response;
              $timeout(function () {
                $scope.$digest();
              }, 10);
            });
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
    }
    function matchingData(item) {
      let data = vm.sabaBetTypes.filter(function (bet) {
        return bet.i === item.BetType;
      });
      let vn = vm.sabaBetTypesVN.filter(function (bet) {
        return bet.i === item.BetType;
      });
      item.BetTypeTrans = vn.length !== 0 ? vn[0].n : item.BetType;
      if (vn.length === 0) {
        item.BetTypeTrans = data.length !== 0 ? data[0].n : item.BetType;
      }
      if (data.length !== 0) {
        if (data[0].t !== undefined) {
          let trans = data[0].t[item.BetTeam];
          item.BetTeamTrans = trans;
          if (msUtils.exists(vm.data.SportGroup, [0, 2]) && trans !== undefined) {
            if (trans.includes("home")) {
              if (item.HomeTeamNameEn !== undefined) {
                item.BetTeamTrans = trans.replace(/home/g, item.HomeTeamNameEn);
              }
            }
            if (trans.includes("away")) {
              if (item.HomeTeamNameEn !== undefined) {
                item.BetTeamTrans = trans.replace(/away/g, item.AwayTeamNameEn);
              }
            }
          }
        } else {
          item.BetTeamTrans = item.BetTeam;
        }
        if (item.BetType === 5) {
          item.BetTeamTrans = "FT." + item.BetTeam;
          item.HomeHdp = "";
          item.AwayHdp = "";
        }
        if (item.BetType === 15) {
          item.BetTeamTrans = "HT." + item.BetTeam;
          item.HomeHdp = "";
          item.AwayHdp = "";
        }
      } else {
        item.BetTeamTrans = item.BetTeam;
      }
      if (item.BetType === 10) {
        item.BetTeamTrans = getTeamName(item.BetTeam).Name;
      }
      if (item.LotteryBetType !== undefined) {
        item.LotteryBetType = convertSpecialNumberBetType(item.LotteryBetType);
      }
    }
    function convertSpecialNumberBetType(txt) {
      const prefix = "special number";
      if (txt.startsWith(prefix)) {
        if (txt.length === prefix.length) {
          return "number select";
        }
        return txt.slice(prefix.length).trim();
      }
      return txt;
    }
    function getMatch(arItem) {
      let Existed = [], ExistedId = [];
      vm.localParlayData.Matchs.map(function (item) {
        if (msUtils.exists(item.MatchId, arItem)) {
          Existed.push(item);
          ExistedId.push(item.MatchId);
        }
      });
      let dnExist = arItem.filter(function (item) {
        return ExistedId.indexOf(item) === -1;
      });
      if (dnExist.length === 0) {
        return $timeout(function () {
          return Existed;
        });
      } else {
        return Lotus.Saba.Match.getMatchDetails({MatchIds: dnExist}).then(function (response) {
          vm.localParlayData.Matchs = Existed.concat(response);
          sessionStorage.setItem("Parlay", JSON.stringify(vm.localParlayData));
          return vm.localParlayData.Matchs;
        });
      }
    }
    function updateLeagueInfo(item) {
      vm.getLeagueName(item.MatchDetails.LeagueId).then(function (response) {
        item.LeagueName = response.Name;
        $timeout(function () {
          $scope.$digest();
        });
      });
    }
    function ticketResult(item, $event) {
      if (vm.data.SportGroup === 0 && item.SingleParlayData !== undefined) {
        vm.ticketResultSingleParlay(item, $event);
      } else if (vm.data.SportGroup === 0 && item.SingleParlayData === undefined && item.ParlayType !== "System Parlay" && item.ParlayType !== "MixParlay") {
        vm.ticketResultIsLive(item, $event);
      } else if (vm.data.SportGroup === 0 && item.SingleParlayData === undefined && (item.ParlayType === "System Parlay" || item.ParlayType === "MixParlay")) {
        vm.ticketResultSystemParlay(item, $event);
      } else if (vm.data.SportGroup === 2) {
        vm.ticketResultIsLive(item, $event);
      }
    }
    function ticketResultSingleParlay(item, $event) {
      $mdDialog.show({controller: resultSingleParlayCtrl, templateUrl: "app/main/account/statement/saba/items/template/result/single-parlay.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, locals: {item: item}, fullscreen: true});
      function resultSingleParlayCtrl($scope, item) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        vm.getMatch([item.MatchId]).then(function (response) {
          item.MatchDetails = response[0];
          $scope.item = item;
          $timeout(function () {
            $scope.$digest();
          });
        });
      }
    }
    function ticketResultIsLive(item, $event) {
      $mdDialog.show({controller: resultSportLiveCtrl, templateUrl: "app/main/account/statement/saba/items/template/result/sport-live.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, locals: {item: item}, fullscreen: true});
      function resultSportLiveCtrl($scope, item) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        vm.getMatch([item.MatchId]).then(function (response) {
          item.MatchDetails = response[0];
          $scope.item = item;
          $timeout(function () {
            $scope.$digest();
          });
        });
      }
    }
    function ticketResultSystemParlay(item, $event) {
      $mdDialog.show({controller: resultSystemParlayCtrl, templateUrl: "app/main/account/statement/saba/items/template/result/system-parlay.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, locals: {item: item}, fullscreen: true});
      function resultSystemParlayCtrl($scope, item) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        let MatchIds = [];
        item.ParlayData.map(function (parlay) {
          MatchIds.push(parlay.MatchId);
        });
        vm.getMatch(MatchIds).then(function (response) {
          item.ParlayData.map(function (parlay, index) {
            let find = response.filter(function (res) {
              return res.MatchId === parlay.MatchId;
            });
            if (find.length) {
              parlay.GameStatus = find[0].GameStatus;
              parlay.HomeScore = find[0].HomeScore;
              parlay.AwayScore = find[0].AwayScore;
              parlay.HtAwayScore = find[0].HtAwayScore;
              parlay.HtHomeScore = find[0].HtHomeScore;
              item.ParlayData[index] = Object.assign(find[0], parlay);
            }
          });
          vm.updateParlayData(item).then(function (response) {
            $timeout(function () {
              $scope.item = item;
              $scope.$digest();
            }, 10);
          });
        });
      }
    }
    function getRNGBetItems(item) {
      if (item.showBetItem === true) {
        item.showBetItem = false;
        return;
      }
      item.betItemUpdating = true;
      Lotus.Saba.Report.Statement.getRNGBetItems({RefNo: item.Tx}).then(function (response) {
        response.map(function (res) {
          matchingData(res);
        });
        item.RNGBetItems = response;
        item.showBetItem = true;
        item.betItemUpdating = false;
        $timeout(function () {
          $scope.$digest();
        }, 10);
      });
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("gameWmCasinoReportCtrl", gameWmCasinoReportCtrl);
  function gameWmCasinoReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.data = $stateParams;
    vm.date = moment.unix(vm.data.time).format("dddd") + ", ngày " + moment.unix(vm.data.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    vm.reports = [];
    function fetchReport(ltId) {
      ltId = ltId === undefined ? "" : ltId;
      let data = {Date: moment.unix(vm.data.time).format("YYYY-MM-DD"), GameType: vm.data.game, LastId: ltId, Limit: 100};
      if ($rootScope.User !== undefined) {
        network.Report.WMCasino.getPlayerBetItems(data).then(function (response) {
          vm.thereMore = response.length === 100;
          vm.loading = false;
          vm.reports = vm.reports.concat(response);
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("sabaSportReportCtrl", sabaSportReportCtrl);
  function sabaSportReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    let vm = this;
    vm.time = $stateParams.date;
    vm.date = moment.unix(vm.time).format("dddd") + ", ngày " + moment.unix(vm.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        let data = {Date: moment.unix(vm.time).format("YYYY-MM-DD")};
        Lotus.Saba.Report.Statement.getReportGroupBySportGroup(data).then(function (response) {
          vm.loading = false;
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("dateWmCasinoReportCtrl", dateWmCasinoReportCtrl);
  function dateWmCasinoReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.time = $stateParams.time;
    vm.date = moment.unix(vm.time).format("dddd") + ", ngày " + moment.unix(vm.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        let data = {Date: moment.unix(vm.time).format("YYYY-MM-DD")};
        network.Report.WMCasino.getReportGroupByGameType(data).then(function (response) {
          vm.loading = false;
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("gameReportCtrl", gameReportCtrl);
  function gameReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.data = $stateParams;
    vm.date = moment.unix(vm.data.time).format("dddd") + ", ngày " + moment.unix(vm.data.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        network.Report.getBetTypeReports({Date: moment.unix(vm.data.time).format("YYYY-MM-DD"), GameType: vm.data.game}).then(function (response) {
          response.sort(function (a, b) {
            return a.BetType - b.BetType;
          });
          vm.loading = false;
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("dateReportCtrl", dateReportCtrl);
  function dateReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.time = $stateParams.time;
    vm.date = moment.unix(vm.time).format("dddd") + ", ngày " + moment.unix(vm.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        network.Report.getGameTypeReports({Date: moment.unix(vm.time).format("YYYY-MM-DD")}).then(function (response) {
          vm.loading = false;
          response = response.sort(function (a, b) {
            return a.GameType - b.GameType;
          });
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("legendGameReportCtrl", legendGameReportCtrl);
  function legendGameReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.data = $stateParams;
    vm.date = moment.unix(vm.data.time).format("dddd") + ", ngày " + moment.unix(vm.data.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        network.Report.Legend.getReportGroupByBetType({Date: moment.unix(vm.data.time).format("YYYY-MM-DD"), GameType: vm.data.game, Term: vm.data.term}).then(function (response) {
          response.sort(function (a, b) {
            return a.BetType - b.BetType;
          });
          vm.loading = false;
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("legendTermReportCtrl", legendTermReportCtrl);
  function legendTermReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.time = $stateParams.date;
    vm.game = $stateParams.game;
    vm.date = moment.unix(vm.time).format("dddd") + ", ngày " + moment.unix(vm.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        network.Report.Legend.getReportGroupByTerm({GameType: vm.game, Date: moment.unix(vm.time).format("YYYY-MM-DD")}).then(function (response) {
          vm.loading = false;
          response = response.sort(function (a, b) {
            return a.Term - b.Term;
          });
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("legendDateReportCtrl", legendDateReportCtrl);
  function legendDateReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.time = $stateParams.time;
    vm.date = moment.unix(vm.time).format("dddd") + ", ngày " + moment.unix(vm.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        network.Report.Legend.getReportGroupByGameType({Date: moment.unix(vm.time).format("YYYY-MM-DD")}).then(function (response) {
          vm.loading = false;
          response = response.sort(function (a, b) {
            return a.GameType - b.GameType;
          });
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("betReportCtrl", betReportCtrl);
  function betReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.data = $stateParams;
    vm.date = moment.unix(vm.data.time).format("dddd") + ", ngày " + moment.unix(vm.data.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    vm.reports = [];
    function fetchReport(ltId) {
      ltId = ltId === undefined ? "" : ltId;
      if ($rootScope.User !== undefined) {
        let data = {Date: moment.unix(vm.data.time).format("YYYY-MM-DD"), GameType: vm.data.game, BetType: vm.data.bet, Limit: 100, LastId: ltId};
        network.Report.getTicketItemsReports(data).then(function (response) {
          vm.thereMore = response.length === 100;
          vm.lastID = response[response.length - 1].Id;
          response.sort(function (a, b) {
            return a.TicketNumber - b.TicketNumber;
          });
          vm.loading = false;
          vm.reports = vm.reports.concat(response);
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("legendBetReportCtrl", legendBetReportCtrl);
  function legendBetReportCtrl($rootScope, $scope, $stateParams, $timeout, $filter, network) {
    let vm = this;
    vm.data = $stateParams;
    vm.BetType = parseInt(vm.data.bet);
    vm.date = "Phiên " + $filter("term")(vm.data.term);
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    vm.reports = [];
    function fetchReport(ltId) {
      ltId = ltId === undefined ? "" : ltId;
      if ($rootScope.User !== undefined) {
        let data = {Term: vm.data.term, GameType: vm.data.game, BetType: vm.data.bet, Limit: 100, LastId: ltId};
        network.Report.Legend.getTicketItems(data).then(function (response) {
          vm.thereMore = response.length === 100;
          vm.lastID = response[response.length - 1].Id;
          response.sort(function (a, b) {
            return a.TicketNumber - b.TicketNumber;
          });
          vm.loading = false;
          vm.reports = vm.reports.concat(response);
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("gameCasinoReportCtrl", gameCasinoReportCtrl);
  function gameCasinoReportCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.data = $stateParams;
    vm.date = moment.unix(vm.data.time).format("dddd") + ", ngày " + moment.unix(vm.data.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    vm.reports = [];
    function fetchReport(ltId) {
      ltId = ltId === undefined ? "" : ltId;
      let data = {From: moment.unix(vm.data.time).format("YYYY-MM-DD"), To: moment.unix(vm.data.time).format("YYYY-MM-DD"), LastId: ltId, Limit: 100};
      if ($rootScope.User !== undefined) {
        if (parseInt(vm.data.game) === 0) {
          network.Report.LegendCasino.Sedie.getPlayerBetItems(data).then(function (response) {
            vm.thereMore = response.length === 100;
            vm.loading = false;
            vm.reports = vm.reports.concat(response);
            $scope.$digest();
          });
        } else {
          Lotus.SenCasino.Games.Politics.Report.getBetItems(data).then(function (response) {
            vm.thereMore = response.length === 100;
            vm.loading = false;
            vm.reports = vm.reports.concat(response);
            $scope.$digest();
          });
        }
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("dateCasinoReportCtrl", dateCasinoReportCtrl);
  function dateCasinoReportCtrl($rootScope, $scope, $state, $stateParams, $timeout, network) {
    let vm = this;
    vm.time = $stateParams.time;
    vm.date = moment.unix(vm.time).format("dddd") + ", ngày " + moment.unix(vm.time).format("DD/MM/YYYY");
    vm.loading = true;
    vm.fetchReport = fetchReport;
    vm.gotoGame = gotoGame;
    vm.fetchReport();
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        let data = {Date: moment.unix(vm.time).format("YYYY-MM-DD")};
        network.Report.LegendCasino.getReportGroupByGameType(data).then(function (response) {
          vm.loading = false;
          vm.reports = response;
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 300);
      }
    }
    function gotoGame(params) {
      if (params.game === 100) {
        $state.go("app.account.statement.casino.game.presidential", params);
      } else {
        $state.go("app.account.statement.casino.game", params);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("blFullCtrl", blFullCtrl);
  function blFullCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.dtOptions = {autoWidth: true, responsive: true, searching: false, paging: false, bInfo: false, bPaginate: false, columnDefs: [{targets: 0, orderable: false}, {targets: 1, orderable: false}, {targets: 3, orderable: false}, {targets: 4, orderable: false}, {targets: 5, orderable: false}]};
    vm.ticketByTerm = ticketByTerm;
    vm.term = $stateParams.term;
    let data = {};
    vm.tickets = [];
    vm.ticketByTerm();
    function ticketByTerm(ltId) {
      vm.loading = true;
      data.Limit = 50;
      data.LastId = ltId === undefined ? "" : ltId;
      if ($rootScope.currentTerm !== undefined) {
        network.Ticket.getItemsByTerm(data).then(function (resp) {
          vm.loading = false;
          vm.ltID = resp[resp.length - 1].Id;
          vm.hasMoreTickets = resp.length === 50;
          vm.tickets = vm.tickets.concat(resp);
          vm.tickets = vm.tickets.sort(function (a, b) {
            return a.GameType - b.GameType || a.BetType - b.BetType;
          });
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.ticketByTerm();
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("blBatchCtrl", blBatchCtrl);
  function blBatchCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.dtOptions = {autoWidth: true, responsive: true, searching: false, paging: false, bInfo: false, bPaginate: false, columnDefs: [{targets: 0, orderable: false}, {targets: 1, orderable: false}, {targets: 3, orderable: false}, {targets: 4, orderable: false}, {targets: 5, orderable: false}]};
    vm.ticketByBatchId = ticketByBatchId;
    vm.term = $stateParams.term;
    let data = {TicketNumbers: []};
    angular.forEach($stateParams.id.split(","), function (id) {
      data.TicketNumbers.push(parseInt(id));
    });
    vm.tickets = [];
    vm.ticketByBatchId();
    function ticketByBatchId(ltId) {
      vm.loading = true;
      data.Limit = 100;
      data.LastId = ltId === undefined ? "" : ltId;
      if ($rootScope.currentTerm !== undefined) {
        network.Ticket.TicketItem(data).then(function (resp) {
          vm.loading = false;
          vm.ltID = resp[resp.length - 1].Id;
          vm.hasMoreTickets = resp.length === 100;
          vm.tickets = vm.tickets.concat(resp);
          vm.tickets = vm.tickets.sort(function (a, b) {
            return a.GameType - b.GameType || a.BetType - b.BetType;
          });
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.ticketByBatchId();
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("legendFullCtrl", legendFullCtrl);
  function legendFullCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.dtOptions = {autoWidth: true, responsive: true, searching: false, paging: false, bInfo: false, bPaginate: false, columnDefs: [{targets: 0, orderable: false}, {targets: 1, orderable: false}, {targets: 3, orderable: false}, {targets: 4, orderable: false}, {targets: 5, orderable: false}]};
    vm.ticketByTerm = ticketByTerm;
    vm.term = $stateParams.term;
    let data = {};
    vm.tickets = [];
    vm.ticketByTerm();
    function ticketByTerm(ltId) {
      vm.loading = true;
      data.Limit = 50;
      data.LastId = ltId === undefined ? "" : ltId;
      if ($rootScope.currentTerm !== undefined) {
        network.Legend.Ticket.getItemsByTerm(data).then(function (resp) {
          vm.loading = false;
          vm.ltID = resp[resp.length - 1].Id;
          vm.hasMoreTickets = resp.length === 50;
          vm.tickets = vm.tickets.concat(resp);
          vm.tickets = vm.tickets.sort(function (a, b) {
            return a.GameType - b.GameType || a.BetType - b.BetType;
          });
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.ticketByTerm();
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("legendBatchCtrl", legendBatchCtrl);
  function legendBatchCtrl($rootScope, $scope, $stateParams, $timeout, network) {
    var vm = this;
    vm.dtOptions = {autoWidth: true, responsive: true, searching: false, paging: false, bInfo: false, bPaginate: false, columnDefs: [{targets: 0, orderable: false}, {targets: 1, orderable: false}, {targets: 3, orderable: false}, {targets: 4, orderable: false}, {targets: 5, orderable: false}]};
    vm.ticketByBatchId = ticketByBatchId;
    vm.term = $stateParams.term;
    let data = {TicketNumbers: []};
    angular.forEach($stateParams.id.split(","), function (id) {
      data.TicketNumbers.push(parseInt(id));
    });
    data.GameType = $stateParams.game;
    vm.tickets = [];
    vm.ticketByBatchId();
    function ticketByBatchId(ltId) {
      vm.loading = true;
      data.Limit = 100;
      data.LastId = ltId === undefined ? "" : ltId;
      if ($rootScope.currentTerm !== undefined) {
        network.Legend.Ticket.TicketItem(data).then(function (resp) {
          vm.loading = false;
          vm.ltID = resp[resp.length - 1].Id;
          vm.hasMoreTickets = resp.length === 100;
          vm.tickets = vm.tickets.concat(resp);
          vm.tickets = vm.tickets.sort(function (a, b) {
            return a.GameType - b.GameType || a.BetType - b.BetType;
          });
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.ticketByBatchId();
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("qbController", qbController);
  function qbController($rootScope, $scope, $timeout, $interval, $document, msUtils, Analytics) {
    let vm = this;
    vm.declareRow = declareRow;
    vm.checkRe = checkRe;
    vm.totalMoney = totalMoney;
    vm.checkDisabledReset = checkDisabledReset;
    vm.submitBetting = submitBetting;
    vm.ignorePrice = true;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.declareRow();
        e.preventDefault();
      }
    });
    vm.declareRow();
    function declareRow() {
      vm.rows = [];
      for (let i = 0; i < 15; i++) {
        let row = {};
        row.number = "";
        row.reverse = false;
        row.D2 = {dau: 0, duoi: 0, dd: 0, lo27: 0};
        row.D3 = {dau: 0, duoi: 0, dd: 0, lo23: 0};
        row.D4 = {duoi: 0, lo20: 0};
        row.money = 0;
        vm.rows.push(row);
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.ready = true;
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [7, 8, 9, 10, 11, 12, 13, 14]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
    });
    function checkDisabledReset() {
      let check = 0;
      angular.forEach(vm.rows, function (row) {
        check += row.number.length ? 1 : 0;
      });
      return check === 0;
    }
    function checkRe(number) {
      if (number.length === 4) {
        return number.split("")[0] === number.split("")[1] && number.split("")[1] === number.split("")[2] && number.split("")[2] === number.split("")[3];
      } else if (number.length === 3) {
        return number.split("")[0] === number.split("")[1] && number.split("")[1] === number.split("")[2];
      } else if (number.length === 2) {
        return number.split("")[0] === number.split("")[1];
      } else if (number.length === 1) {
        return false;
      } else {
        return true;
      }
    }
    function totalMoney() {
      vm.sumMoney = 0;
      let allNumbers = [];
      angular.forEach(vm.rows, function (rw) {
        if (rw.number.length > 1) {
          let n = rw.number.length === 1 ? "0" + rw.number.toString() : rw.number;
          if (rw.reverse) {
            allNumbers = allNumbers.concat(msUtils.permNumber(n));
          } else {
            allNumbers.push(n);
          }
        }
      });
      angular.forEach(vm.rows, function (row) {
        if (row.number.length < 2) {
          return;
        }
        let number = row.number;
        let numbers = row.reverse ? msUtils.permNumber(number) : [number];
        let count = allNumbers.filter(function (c) {
          return c === number;
        });
        if (count.length > 1) {
          $timeout(function () {
            row.number = "";
            row.money = 0;
          });
        }
        let rowMoney = 0, oddPrice;
        if (number.length === 4) {
          let point4DDuoi = Math.abs(row.D4.duoi);
          let point4D20Lo = Math.abs(row.D4.lo20);
          if (point4DDuoi > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 13;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.Number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point4DDuoi * oddPrice.Price;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point4DDuoi * (oddPrice.Price + findExtra[0].ExtraPrice);
                }
              }
            });
          }
          if (point4D20Lo > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 14;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.Number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point4D20Lo * oddPrice.Price * 20;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point4D20Lo * (oddPrice.Price + findExtra[0].ExtraPrice) * 20;
                }
              }
            });
          }
        } else if (number.length === 3) {
          let point3DDau = Math.abs(row.D3.dau) + Math.abs(row.D3.dd);
          let point3DDuoi = Math.abs(row.D3.duoi) + Math.abs(row.D3.dd);
          let point3D23Lo = Math.abs(row.D3.lo23);
          if (point3DDau > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 10;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point3DDau * oddPrice.Price * 3;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point3DDau * (oddPrice.Price + findExtra[0].ExtraPrice) * 3;
                }
              }
            });
          }
          if (point3DDuoi > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 11;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.Number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point3DDuoi * oddPrice.Price;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point3DDuoi * (oddPrice.Price + findExtra[0].ExtraPrice);
                }
              }
            });
          }
          if (point3D23Lo > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 12;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.Number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point3D23Lo * oddPrice.Price * 23;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point3D23Lo * (oddPrice.Price + findExtra[0].ExtraPrice) * 23;
                }
              }
            });
          }
        } else {
          let point2DDau = Math.abs(row.D2.dau) + Math.abs(row.D2.dd);
          let point2DDuoi = Math.abs(row.D2.duoi) + Math.abs(row.D2.dd);
          let point2D27Lo = Math.abs(row.D2.lo27);
          if (point2DDau > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 7;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.Number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point2DDau * oddPrice.Price * 4;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point2DDau * (oddPrice.Price + findExtra[0].ExtraPrice) * 4;
                }
              }
            });
          }
          if (point2DDuoi > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 8;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.Number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point2DDuoi * oddPrice.Price;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point2DDuoi * (oddPrice.Price + findExtra[0].ExtraPrice);
                }
              }
            });
          }
          if (point2D27Lo > 0) {
            oddPrice = $.grep(vm.odds, function (bet) {
              return bet.BetType === 9;
            })[0];
            angular.forEach(numbers, function (num) {
              let findExtra = $.grep(oddPrice.Numbers, function (n) {
                return n.Number === num;
              });
              if (findExtra.length === 0) {
                rowMoney += point2D27Lo * oddPrice.Price * 27;
              } else {
                if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                  rowMoney += point2D27Lo * (oddPrice.Price + findExtra[0].ExtraPrice) * 27;
                }
              }
            });
          }
        }
        row.money = rowMoney;
        vm.sumMoney += rowMoney;
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let oddPrice, betObj = {}, TicketObj, betTypeAlias;
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      vm.ns = [];
      vm.sumPoint = 0;
      angular.forEach(vm.rows, function (row, rowId) {
        if (row.number.length) {
          let number = row.number.length === 1 ? "0" + row.number.toString() : row.number;
          let numbers = row.reverse ? msUtils.permNumber(number) : [number];
          vm.ns = vm.ns.concat(numbers);
          betTypeAlias = 0;
          if (number.length === 4) {
            let point4DDuoi = Math.abs(row.D4.duoi);
            let point4D20Lo = Math.abs(row.D4.lo20);
            betTypeAlias += point4DDuoi > 0 ? 524288 : 0;
            betTypeAlias += point4D20Lo > 0 ? 2097152 : 0;
            if (point4DDuoi > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 13;
              })[0];
              TicketObj = {GameType: 1, BetType: 13, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point4DDuoi;
                vm.sumPoint += point4DDuoi;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
            if (point4D20Lo > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 14;
              })[0];
              TicketObj = {GameType: 1, BetType: 14, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point4D20Lo;
                vm.sumPoint += point4D20Lo;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
          } else if (number.length === 3) {
            let point3DDau = Math.abs(row.D3.dau) + Math.abs(row.D3.dd);
            let point3DDuoi = Math.abs(row.D3.duoi) + Math.abs(row.D3.dd);
            let point3D23Lo = Math.abs(row.D3.lo23);
            betTypeAlias = Math.abs(row.D3.dd) !== 0 ? 32768 : 0;
            betTypeAlias += Math.abs(row.D3.dau) ? 8192 : 0;
            betTypeAlias += Math.abs(row.D3.duoi) ? 16384 : 0;
            betTypeAlias += point3D23Lo ? 65536 : 0;
            if (point3DDau > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 10;
              })[0];
              TicketObj = {GameType: 1, BetType: 10, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point3DDau;
                vm.sumPoint += point3DDau;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
            if (point3DDuoi > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 11;
              })[0];
              TicketObj = {GameType: 1, BetType: 11, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point3DDuoi;
                vm.sumPoint += point3DDuoi;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
            if (point3D23Lo > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 12;
              })[0];
              TicketObj = {GameType: 1, BetType: 12, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point3D23Lo;
                vm.sumPoint += point3D23Lo;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
          } else {
            let point2DDau = Math.abs(row.D2.dau) + Math.abs(row.D2.dd);
            let point2DDuoi = Math.abs(row.D2.duoi) + Math.abs(row.D2.dd);
            let point2D27Lo = Math.abs(row.D2.lo27);
            betTypeAlias = Math.abs(row.D2.dd) !== 0 ? 512 : 0;
            betTypeAlias += Math.abs(row.D2.dau) > 0 ? 128 : 0;
            betTypeAlias += Math.abs(row.D2.duoi) > 0 ? 256 : 0;
            betTypeAlias += point2D27Lo > 0 ? 1024 : 0;
            if (point2DDau > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 7;
              })[0];
              TicketObj = {GameType: 1, BetType: 7, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point2DDau;
                vm.sumPoint += point2DDau;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
            if (point2DDuoi > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 8;
              })[0];
              TicketObj = {GameType: 1, BetType: 8, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point2DDuoi;
                vm.sumPoint += point2DDuoi;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
            if (point2D27Lo > 0) {
              oddPrice = $.grep(vm.odds, function (bet) {
                return bet.BetType === 9;
              })[0];
              TicketObj = {GameType: 1, BetType: 9, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                Number.Point = point2D27Lo;
                vm.sumPoint += point2D27Lo;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
          }
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: vm.ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
      let User = $rootScope.isAuthenticated ? $rootScope.User.Username : "notAuthenticated";
      Analytics.trackEvent("QUICK", "Betting", User);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.declareRow();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [7, 8, 9, 10, 11, 12, 13, 14]});
    $timeout(function () {
      let User = $rootScope.isAuthenticated ? $rootScope.User.Username : "notAuthenticated";
      Analytics.trackEvent("QUICK", "ENTER", User);
    }, 500);
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("north2ParlayCtrl", north2ParlayCtrl);
  function north2ParlayCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $interval, $state, $document, msUtils, network, select) {
    let vm = this;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.costMoney = costMoney;
    vm.submitBetting = submitBetting;
    vm.purchaseLimit = purchaseLimit;
    vm.exists = exists;
    vm.ignorePrice = true;
    $scope.$mdMedia = $mdMedia;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 1, bet: 2};
    vm.base = {2: 0, 3: 0, 4: 0};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.GameType === 1) {
          if (pr.BetType === 2) {
            vm.base[2] = pr.Price;
          }
          if (pr.BetType === 3) {
            vm.base[3] = pr.Price;
          }
          if (pr.BetType === 4) {
            vm.base[4] = pr.Price;
          }
        }
      });
    }
    vm.pair = {count: {2: 0, 3: 0, 4: 0}, money: {2: 0, 3: 0, 4: 0}, limit: {2: 0, 3: 0, 4: 0}, payout: {2: 0, 3: 0, 4: 0}};
    vm.inputPoint = {2: 0, 3: 0, 4: 0};
    vm.betTimes = {2: 54, 3: 81, 4: 108};
    vm.numbers = [];
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, base: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, price: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, disabled: {2: false, 3: false, 4: false}};
      vm.numbers.push(number);
    }
    $timeout(function () {
      if ($rootScope.isAuthenticated) {
        vm.purchaseLimit();
      }
    }, 300);
    function purchaseLimit() {
      if ($rootScope.myParameters !== undefined) {
        angular.forEach([2, 3, 4], function (betid) {
          vm.pair.limit[betid] = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betid;
          })[0].MaxPointPerNumber;
          vm.pair.payout[betid] = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betid;
          })[0].Payouts / 1e3;
        });
      } else {
        $timeout(function () {
          vm.purchaseLimit();
        }, 1e3);
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 1 && msUtils.exists(odd.BetType, [2, 3, 4]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          num.base[odd.BetType] = odd.Price;
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              let extPrice = value.ExtraPrice !== undefined ? odd.Price + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
              if (num.price[odd.BetType] !== 0 && num.price[odd.BetType] !== extPrice) {
                num.priceChanged = true;
              }
              num.price[odd.BetType] = extPrice;
            }
          });
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(select.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber.length) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementsByClassName("bet-input")[0].select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
      vm.keynumber = "";
    }
    function costMoney() {
      vm.sumPoint = 0;
      let numberArr, sumMoney;
      angular.forEach([2, 3, 4], function (betid) {
        vm.pair.count[betid] = 0;
        sumMoney = 0;
        numberArr = [];
        angular.forEach(vm.numbers, function (num) {
          if (num.selected) {
            if (!num.disabled[betid]) {
              numberArr.push(num.number);
            }
          }
        });
        vm.pair.count[betid] += numberArr.combinate(betid).length;
        let totalyArr = numberArr.combinate(betid);
        if (totalyArr.length <= 128) {
          angular.forEach(totalyArr, function (pairArr) {
            let pricePerPair = 0;
            angular.forEach(pairArr, function (number) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === number) {
                  pricePerPair += num.price[betid];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pairArr.length);
            sumMoney += pricePerPair;
          });
          vm.pair.money[betid] = sumMoney * vm.inputPoint[betid] * vm.betTimes[betid];
          vm.sumPoint += vm.pair.count[betid] * vm.inputPoint[betid];
        } else {
          vm.inputPoint[betid] = 0;
        }
      });
      vm.totalMoney = vm.pair.money[2] + vm.pair.money[3] + vm.pair.money[4];
      return vm.totalMoney;
    }
    function submitBetting() {
      vm.betDatas = [];
      let betObj, ticketObj, selectedNumber, pairArrNum, Number;
      betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      Object.keys(vm.inputPoint).forEach(function (betid) {
        if (vm.inputPoint[betid] !== 0) {
          ticketObj = {GameType: 1, BetType: parseInt(betid), Items: []};
          selectedNumber = [];
          angular.forEach(vm.numbers, function (number) {
            if (number.selected && !number.disabled[betid]) {
              selectedNumber.push(number.number);
            }
          });
          pairArrNum = selectedNumber.combinate(betid);
          angular.forEach(pairArrNum, function (pair) {
            Number = {};
            Number.Numbers = pair;
            Number.Point = vm.inputPoint[betid];
            let pricePerPair = 0;
            angular.forEach(pair, function (n) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === n) {
                  pricePerPair += num.price[betid];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pair.length);
            Number.Price = pricePerPair;
            ticketObj.Items.push(Number);
          });
          betObj.Tickets.push(ticketObj);
        }
      });
      let ns = [];
      vm.numbers.map(function (n) {
        if (n.selected) {
          ns.push(n.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [1], BetTypes: [2, 3, 4]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("b2LotLiveCtrl", b2LotLiveCtrl);
  function b2LotLiveCtrl($rootScope, $scope, $timeout, $interval, $mdMedia, $document, network, betId, collections, msUtils, message) {
    let vm = this;
    vm.init = init;
    vm.oddsPrice = oddsPrice;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.singlePointClick = singlePointClick;
    vm.clearTemporary = clearTemporary;
    vm.changeBettingPoint = changeBettingPoint;
    vm.exists = exists;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.totalPoint = totalPoint;
    vm.submitBetting = submitBetting;
    vm.betId = betId;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    vm.quickChoices = collections.list;
    vm.allowBetting = false;
    $scope.$mdMedia = $mdMedia;
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 1, bet: betId};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: 0, point: 0});
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 1 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
          vm.oddsPrice();
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      } else {
        vm.oddsPrice();
      }
    }
    function oddsPrice() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.termName !== undefined) {
          network.Games.getLoLiveOdds({Term: $rootScope.termName, GameType: 1, BetType: 20}).then(function (resp) {
            vm.odds = resp;
            vm.buildPriceTable();
          });
        } else {
          $timeout(function () {
            vm.oddsPrice();
          }, 1e3);
        }
      } else {
        network.Public.Lottery.getLoLiveOdds({GameType: 1, BetType: 20}).then(function (resp) {
          vm.odds = resp;
          vm.buildPriceTable();
        });
      }
    }
    function buildPriceTable() {
      if (vm.odds === undefined) {
        return;
      }
      vm.allowBetting = vm.odds.Active;
      vm.basePrice = vm.odds.Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds.Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      vm.clearPriceChange = $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    $scope.$on("extra-price-changed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      let matchNumber = 0;
      angular.forEach(data, function (itemPrice) {
        if (1 === itemPrice.GameType && 20 === itemPrice.BetType) {
          let findNumber = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === itemPrice.Number;
          });
          if (findNumber.length) {
            findNumber[0].ExtraPrice += itemPrice.PriceChange;
          } else {
            vm.odds.Numbers.push({Number: itemPrice.Number, ExtraPrice: itemPrice.PriceChange});
          }
          matchNumber++;
        }
      });
      if (matchNumber !== 0) {
        vm.buildPriceTable();
        if (vm.clearPriceChange) {
          clearTimeout(vm.clearPriceChange);
        }
      }
    });
    $scope.$on("stop-number-changed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      angular.forEach(data, function (item) {
        if (1 === item.GameType && 20 === item.BetType) {
          let findNumber = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === item.Number;
          });
          if (findNumber.length) {
            findNumber[0].Stop = item.Stop;
          } else {
            vm.odds.Numbers.push({Number: item.Number, Stop: item.Stop});
          }
        }
      });
      vm.buildPriceTable();
    });
    $scope.$on("lo-live:event:prize-closed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 1 && data.IsLive) {
        vm.odds.PrizeNr = data.PrizeNr;
        vm.buildPriceTable();
      }
    });
    $scope.$on("lo-live:event:game-opening", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 1 && data.IsLive) {
        vm.odds.Active = true;
        vm.buildPriceTable();
      }
    });
    $scope.$on("lo-live:event:game-closed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 1 && data.IsLive) {
        vm.odds.Active = false;
        vm.odds.PrizeNr = data.PrizeNr;
        vm.buildPriceTable();
      }
    });
    $timeout(function () {
      vm.focusVar = true;
    }, 500);
    $rootScope.$on("closeBetPanel", function () {
      vm.focusVar = "continuous";
    });
    vm.onlyNumbers = /^\d+$/;
    vm.arrayTemporary = [];
    vm.readyClear = false;
    vm.numbersCopy = [];
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
          number.point = 0;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
        vm.arrayTemporary.push(n.number);
      }
    }
    function singlePointClick($event) {
      $event.target.select();
    }
    function clearTemporary() {
      if (vm.readyClear) {
        vm.arrayTemporary = [];
        vm.readyClear = false;
        vm.numbersCopy = [];
      }
    }
    function changeBettingPoint() {
      vm.readyClear = true;
      if (vm.numbersCopy.length === 0) {
        vm.numbersCopy = angular.copy(vm.numbers);
        angular.forEach(vm.numbers, function (number) {
          if (msUtils.exists(number.number, vm.arrayTemporary) && !number.disabled) {
            number.point += parseInt(vm.betPoint);
          }
        });
      } else {
        angular.forEach(vm.numbers, function (number) {
          if (msUtils.exists(number.number, vm.arrayTemporary)) {
            number.point = vm.numbersCopy.filter(function (num) {
              return num.number === number.number;
            })[0].point + parseInt(vm.betPoint);
          }
        });
      }
    }
    vm.selectedCheckbox = [];
    function exists(parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }
    vm.data = {};
    function groupNumbers(parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length && !number.disabled) {
          number.selected = vm.checked;
          number.point = vm.checked === false ? 0 : number.point;
        }
      });
      if (!vm.checked) {
        for (let i = vm.arrayTemporary.length - 1; i >= 0; i--) {
          let px = vm.arrayNumber.indexOf(vm.arrayTemporary[i]);
          if (px > -1) {
            vm.arrayTemporary.splice(vm.arrayTemporary.indexOf(vm.arrayTemporary[i]), 1);
          }
        }
      } else {
        vm.arrayTemporary = vm.arrayTemporary.concat(vm.arrayNumber);
        vm.arrayTemporary = vm.arrayTemporary.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) === index;
        });
      }
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber() {
      if (!vm.keynumber.length) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1 && !val.disabled) {
          val.selected = true;
        }
      });
      vm.arrayTemporary = vm.arrayTemporary.concat(arrInput);
      vm.keynumber = "";
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
        vm.betPoint = 0;
      });
      vm.selectedCheckbox = [];
      vm.keynumber = "";
    }
    function totalPoint() {
      if (!vm.allowBetting) {
        vm.resetBetting();
      }
      let total = 0, oddNumbers;
      vm.totalMoney = 0;
      angular.forEach(vm.numbers, function (num) {
        total += !num.disabled ? num.point : 0;
        if (vm.odds && num.selected) {
          oddNumbers = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === num.number;
          });
          if (oddNumbers.length && !oddNumbers[0].stop && oddNumbers[0].ExtraPrice !== 0) {
            vm.totalMoney += num.point * (vm.basePrice + oddNumbers[0].ExtraPrice);
          } else {
            vm.totalMoney += num.point * vm.basePrice;
          }
        }
      });
      vm.totalMoney = vm.odds !== undefined ? vm.totalMoney * vm.odds.PrizeNr : vm.totalMoney;
      vm.sumPoint = total;
      return total;
    }
    function submitBetting() {
      let ns = [];
      let checkCount = 0;
      let betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{PrizeNr: vm.odds.PrizeNr, GameType: 1, BetType: betId, Items: []}];
      vm.numbers.map(function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Point = number.point;
          Number.Price = number.price;
          betObj.Tickets[0].Items.push(Number);
          ns.push(number.number);
        }
        checkCount += number.selected && (number.point === 0 || number.point === null || isNaN(number.point)) ? 1 : 0;
      });
      if (checkCount === 0) {
        let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
        $rootScope.$broadcast("EventBetting", eventData);
      } else {
        message.show("Quý khách vui lòng kiểm tra lại số điểm muốn đặt cược.");
      }
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("qbMnController", qbMnController);
  function qbMnController($rootScope, $scope, $timeout, $interval, $document, msUtils, Analytics) {
    let vm = this;
    vm.declareRow = declareRow;
    vm.checkRe = checkRe;
    vm.sumRowMoney = sumRowMoney;
    vm.totalMoney = totalMoney;
    vm.toggleAll = toggleAll;
    vm.checkedAll = checkedAll;
    vm.isIndeterminate = isIndeterminate;
    vm.checkDisabledReset = checkDisabledReset;
    vm.submitBetting = submitBetting;
    vm.ignorePrice = true;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.declareRow();
        e.preventDefault();
      }
    });
    vm.declareRow();
    function declareRow() {
      vm.rows = [];
      for (let i = 0; i < 15; i++) {
        let row = {};
        row.number = "";
        row.reverse = false;
        row.regirons = {2: false, 3: false, 4: false};
        row.D2 = {dau: 0, duoi: 0, dd: 0, lo18: 0};
        row.D3 = {dau: 0, duoi: 0, dd: 0, lo17: 0};
        row.D4 = {duoi: 0, lo16: 0};
        row.money = 0;
        vm.rows.push(row);
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.ready = true;
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [7, 8, 15, 10, 11, 17, 13, 19]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
    });
    function checkedAll(id) {
      let count = 0;
      angular.forEach(vm.rows, function (row) {
        count += row.regirons[id] === true ? 1 : 0;
      });
      return count === vm.rows.length;
    }
    function toggleAll(id) {
      let check = vm.checkedAll(id);
      angular.forEach(vm.rows, function (row) {
        row.regirons[id] = !check;
      });
    }
    function isIndeterminate(id) {
      let count = 0;
      angular.forEach(vm.rows, function (row) {
        count += row.regirons[id] === true ? 1 : 0;
      });
      if (count === 0 || count === vm.rows.length) {
        return false;
      } else {
        return true;
      }
    }
    function checkDisabledReset() {
      let check = 0;
      angular.forEach(vm.rows, function (row) {
        check += row.number.length ? 1 : 0;
      });
      return check === 0;
    }
    function checkRe(number) {
      if (number.length === 4) {
        return number.split("")[0] === number.split("")[1] && number.split("")[1] === number.split("")[2] && number.split("")[2] === number.split("")[3];
      } else if (number.length === 3) {
        return number.split("")[0] === number.split("")[1] && number.split("")[1] === number.split("")[2];
      } else if (number.length === 2) {
        return number.split("")[0] === number.split("")[1];
      } else if (number.length === 1) {
        return false;
      } else {
        return true;
      }
    }
    function sumRowMoney(row, index) {
      if (!row.number.length) {
        return;
      }
      let number = row.number.length === 1 ? "0" + row.number.toString() : row.number;
      let allNumbers = [];
      angular.forEach(vm.rows, function (rw, rid) {
        if (rw.number.length && rid !== index) {
          let n = rw.number.length === 1 ? "0" + rw.number.toString() : rw.number;
          if (rw.reverse) {
            allNumbers = allNumbers.concat(msUtils.permNumber(n));
          } else {
            allNumbers.push(n);
          }
        }
      });
      if (msUtils.exists(number, allNumbers)) {
        row.number = "";
      }
      let numbers = row.reverse ? msUtils.permNumber(number) : [number];
      let sumMoney = 0, oddPrice;
      Object.keys(row.regirons).forEach(function (gameid) {
        if (row.regirons[gameid]) {
          if (number.length === 4) {
            let point4DDuoi = Math.abs(row.D4.duoi);
            let point4D16Lo = Math.abs(row.D4.lo16);
            if (point4DDuoi > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 13;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point4DDuoi * oddPrice.Price;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point4DDuoi * (oddPrice.Price + findExtra[0].ExtraPrice);
                  }
                }
              });
            }
            if (point4D16Lo > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 19;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point4D16Lo * oddPrice.Price * 16;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point4D16Lo * (oddPrice.Price + findExtra[0].ExtraPrice) * 16;
                  }
                }
              });
            }
          } else if (number.length === 3) {
            let point3DDau = Math.abs(row.D3.dau) + Math.abs(row.D3.dd);
            let point3DDuoi = Math.abs(row.D3.duoi) + Math.abs(row.D3.dd);
            let point3D17Lo = Math.abs(row.D3.lo17);
            if (point3DDau > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 10;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point3DDau * oddPrice.Price;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point3DDau * (oddPrice.Price + findExtra[0].ExtraPrice);
                  }
                }
              });
            }
            if (point3DDuoi > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 11;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point3DDuoi * oddPrice.Price;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point3DDuoi * (oddPrice.Price + findExtra[0].ExtraPrice);
                  }
                }
              });
            }
            if (point3D17Lo > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 17;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point3D17Lo * oddPrice.Price * 17;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point3D17Lo * (oddPrice.Price + findExtra[0].ExtraPrice) * 17;
                  }
                }
              });
            }
          } else {
            let point2DDau = Math.abs(row.D2.dau) + Math.abs(row.D2.dd);
            let point2DDuoi = Math.abs(row.D2.duoi) + Math.abs(row.D2.dd);
            let point2D18Lo = Math.abs(row.D2.lo18);
            if (point2DDau > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 7;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point2DDau * oddPrice.Price;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point2DDau * (oddPrice.Price + findExtra[0].ExtraPrice);
                  }
                }
              });
            }
            if (point2DDuoi > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 8;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point2DDuoi * oddPrice.Price;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point2DDuoi * (oddPrice.Price + findExtra[0].ExtraPrice);
                  }
                }
              });
            }
            if (point2D18Lo > 0) {
              oddPrice = vm.odds.filter(function (item) {
                return item.GameType === parseInt(gameid) && item.BetType === 15;
              })[0];
              angular.forEach(numbers, function (num) {
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  sumMoney += point2D18Lo * oddPrice.Price * 18;
                } else {
                  if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                    sumMoney += point2D18Lo * (oddPrice.Price + findExtra[0].ExtraPrice) * 18;
                  }
                }
              });
            }
          }
        }
      });
      row.money = sumMoney;
      return sumMoney;
    }
    function totalMoney() {
      let money = 0;
      angular.forEach(vm.rows, function (row) {
        money += row.money;
      });
      vm.sumMoney = money;
      return money;
    }
    function submitBetting() {
      vm.betDatas = [];
      vm.ns = [];
      vm.sumPoint = 0;
      let oddPrice, betObj = {}, TicketObj, betTypeAlias;
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      angular.forEach(vm.rows, function (row, rowId) {
        if (row.number.length) {
          let number = row.number.length === 1 ? "0" + row.number.toString() : row.number;
          let numbers = row.reverse ? msUtils.permNumber(number) : [number];
          vm.ns = vm.ns.concat(numbers);
          Object.keys(row.regirons).forEach(function (gameid) {
            if (row.regirons[gameid]) {
              let oddValues = $.grep(vm.odds, function (game) {
                return game.GameType === parseInt(gameid);
              });
              betTypeAlias = 0;
              if (number.length === 4) {
                let point4DDuoi = Math.abs(row.D4.duoi);
                let point4D16Lo = Math.abs(row.D4.lo16);
                betTypeAlias += point4DDuoi > 0 ? 524288 : 0;
                betTypeAlias += point4D16Lo > 0 ? 1048576 : 0;
                if (point4DDuoi > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 13;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 13, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point4DDuoi;
                    vm.sumPoint += point4DDuoi;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
                if (point4D16Lo > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 19;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 19, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point4D16Lo;
                    vm.sumPoint += point4D16Lo;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].Stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
              } else if (number.length === 3) {
                let point3DDau = Math.abs(row.D3.dau) + Math.abs(row.D3.dd);
                let point3DDuoi = Math.abs(row.D3.duoi) + Math.abs(row.D3.dd);
                let point3D17Lo = Math.abs(row.D3.lo17);
                betTypeAlias = Math.abs(row.D3.dd) !== 0 ? 32768 : 0;
                betTypeAlias += Math.abs(row.D3.dau) > 0 ? 8192 : 0;
                betTypeAlias += Math.abs(row.D3.duoi) > 0 ? 16384 : 0;
                betTypeAlias += point3D17Lo > 0 ? 262144 : 0;
                if (point3DDau > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 10;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 10, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point3DDau;
                    vm.sumPoint += point3DDau;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].Stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
                if (point3DDuoi > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 11;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 11, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point3DDuoi;
                    vm.sumPoint += point3DDuoi;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
                if (point3D17Lo > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 17;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 17, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point3D17Lo;
                    vm.sumPoint += point3D17Lo;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].Stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
              } else {
                let point2DDau = Math.abs(row.D2.dau) + Math.abs(row.D2.dd);
                let point2DDuoi = Math.abs(row.D2.duoi) + Math.abs(row.D2.dd);
                let point2D18Lo = Math.abs(row.D2.lo18);
                betTypeAlias = Math.abs(row.D2.dd) !== 0 ? 512 : 0;
                betTypeAlias += Math.abs(row.D2.dau) > 0 ? 128 : 0;
                betTypeAlias += Math.abs(row.D2.duoi) > 0 ? 256 : 0;
                betTypeAlias += point2D18Lo > 0 ? 2048 : 0;
                if (point2DDau > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 7;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 7, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point2DDau;
                    vm.sumPoint += point2DDau;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].Stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
                if (point2DDuoi > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 8;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 8, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point2DDuoi;
                    vm.sumPoint += point2DDuoi;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].Stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
                if (point2D18Lo > 0) {
                  oddPrice = $.grep(oddValues, function (bet) {
                    return bet.BetType === 15;
                  })[0];
                  TicketObj = {GameType: parseInt(gameid), BetType: 15, Additional: {Row: rowId, Alias: betTypeAlias, Reverse: row.reverse}, Items: []};
                  angular.forEach(numbers, function (num) {
                    let Number = {};
                    Number.Numbers = [num];
                    Number.Point = point2D18Lo;
                    vm.sumPoint += point2D18Lo;
                    let findExtra = $.grep(oddPrice.Numbers, function (n) {
                      return n.Number === num;
                    });
                    if (findExtra.length === 0) {
                      Number.Price = oddPrice.Price;
                      TicketObj.Items.push(Number);
                    } else {
                      if (findExtra[0].ExtraPrice !== undefined) {
                        Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                      }
                      if (!findExtra[0].Stop) {
                        TicketObj.Items.push(Number);
                      }
                    }
                  });
                  if (TicketObj.Items.length) {
                    betObj.Tickets.push(TicketObj);
                  }
                }
              }
            }
          });
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: vm.ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
      let User = $rootScope.isAuthenticated ? $rootScope.User.Username : "notAuthenticated";
      Analytics.trackEvent("QUICK", "Betting", User);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.declareRow();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [7, 8, 15, 10, 11, 17, 13, 19]});
    $timeout(function () {
      let User = $rootScope.isAuthenticated ? $rootScope.User.Username : "notAuthenticated";
      Analytics.trackEvent("QUICK", "ENTER", User);
    }, 500);
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("southParlayCtrl", southParlayCtrl);
  function southParlayCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $interval, $state, $document, msUtils, network, select) {
    let vm = this;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.costMoney = costMoney;
    vm.submitBetting = submitBetting;
    vm.purchaseLimit = purchaseLimit;
    vm.payouts = payouts;
    vm.ignorePrice = true;
    $scope.$mdMedia = $mdMedia;
    if ($state.current.url === "/pair-2") {
      vm.betID = 2;
    } else if ($state.current.url === "/pair-3") {
      vm.betID = 3;
    } else {
      vm.betID = 4;
    }
    vm.base = {2: {2: 0, 3: 0, 4: 0}, 3: {2: 0, 3: 0, 4: 0}, 4: {2: 0, 3: 0, 4: 0}};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.BetType === 2) {
          if (pr.GameType === 2) {
            vm.base[2][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[2][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[2][4] = pr.Price;
          }
        }
        if (pr.BetType === 3) {
          if (pr.GameType === 2) {
            vm.base[3][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[3][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[3][4] = pr.Price;
          }
        }
        if (pr.BetType === 4) {
          if (pr.GameType === 2) {
            vm.base[4][2] = pr.Price;
          }
          if (pr.GameType === 3) {
            vm.base[4][3] = pr.Price;
          }
          if (pr.GameType === 4) {
            vm.base[4][4] = pr.Price;
          }
        }
      });
    }
    $rootScope.location = {game: 4, bet: vm.betID};
    vm.pair = {count: {2: 0, 3: 0, 4: 0}, money: {2: 0, 3: 0, 4: 0}};
    vm.inputPoint = {2: 0, 3: 0, 4: 0};
    vm.basePrice = 0;
    vm.numbers = [];
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, price: {2: {2: vm.base[2][2], 3: vm.base[2][3], 4: vm.base[2][4]}, 3: {2: vm.base[3][2], 3: vm.base[3][3], 4: vm.base[3][4]}, 4: {2: vm.base[4][2], 3: vm.base[4][3], 4: vm.base[4][4]}}, disabled: {2: {2: false, 3: false, 4: false}, 3: {2: false, 3: false, 4: false}, 4: {2: false, 3: false, 4: false}}};
      vm.numbers.push(number);
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].MaxPointPerNumber;
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    function payouts(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          return $rootScope.myParameters.filter(function (item) {
            return item.GameType === gameid && item.BetType === betid;
          })[0].Payouts / 1e3;
        } else {
          $timeout(function () {
            vm.payouts(gameid, betid);
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [2, 3, 4]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          let exNumber = $.grep(odd.Numbers, function (n) {
            return n.Number === num.number;
          });
          let extPrice = exNumber.length && exNumber[0].ExtraPrice !== undefined ? odd.Price + exNumber[0].ExtraPrice : odd.Price;
          if (exNumber.length && exNumber[0].Stop) {
            num.disabled[odd.BetType][odd.GameType] = exNumber[0].Stop;
          }
          num.basePrice = odd.Price;
          if (odd.BetType === vm.betID && num.price[odd.BetType][odd.GameType] !== extPrice && num.price[odd.BetType][odd.GameType] !== 0) {
            num.priceChanged = true;
          }
          num.price[odd.BetType][odd.GameType] = extPrice;
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    vm.exists = function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    };
    function groupNumbers(id) {
      let idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(select.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementsByClassName("bet-input")[0].select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
      vm.keynumber = "";
    }
    function costMoney(pair) {
      let numberArr;
      let numberPair = 0;
      angular.forEach([2, 3, 4], function (betid) {
        numberPair = 0;
        angular.forEach($rootScope.regironSelected, function (regiron) {
          numberArr = [];
          angular.forEach(vm.numbers, function (num) {
            if (num.selected) {
              if (!num.disabled[betid][regiron]) {
                numberArr.push(num.number);
              }
            }
          });
          numberPair += numberArr.combinate(betid).length;
        });
        vm.pair.count[betid] = numberPair;
      });
      let sumMoney = 0;
      angular.forEach($rootScope.regironSelected, function (regiron) {
        numberArr = [];
        angular.forEach(vm.numbers, function (num) {
          if (num.selected) {
            if (!num.disabled[pair][regiron]) {
              numberArr.push(num.number);
            }
          }
        });
        let totalyArr = numberArr.combinate(pair);
        if (totalyArr.length <= 128) {
          angular.forEach(totalyArr, function (pairArr) {
            let pricePerPair = 0;
            angular.forEach(pairArr, function (number) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === number) {
                  pricePerPair += num.price[pair][regiron];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pairArr.length);
            sumMoney += pricePerPair;
          });
        } else {
          vm.inputPoint[pair] = 0;
        }
      });
      if (pair === 2) {
        sumMoney = sumMoney * vm.inputPoint[2] * 36;
        vm.pair.money[2] = sumMoney;
      } else if (pair === 3) {
        sumMoney = sumMoney * vm.inputPoint[3] * 54;
        vm.pair.money[3] = sumMoney;
      } else if (pair === 4) {
        sumMoney = sumMoney * vm.inputPoint[4] * 72;
        vm.pair.money[4] = sumMoney;
      }
      return sumMoney;
    }
    function submitBetting() {
      let betObj, selectedNumber, pairArrNum, Number;
      betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach($rootScope.regironSelected, function (gameid) {
        Object.keys(vm.inputPoint).forEach(function (betid) {
          if (vm.inputPoint[betid] !== 0) {
            let TicketObj = {GameType: gameid, BetType: parseInt(betid), Items: []};
            selectedNumber = [];
            angular.forEach(vm.numbers, function (number) {
              if (number.selected && !number.disabled[betid][gameid]) {
                selectedNumber.push(number.number);
              }
            });
            pairArrNum = selectedNumber.combinate(betid);
            angular.forEach(pairArrNum, function (pair) {
              Number = {};
              Number.Numbers = pair;
              Number.Point = vm.inputPoint[betid];
              let pricePerPair = 0;
              angular.forEach(pair, function (n) {
                angular.forEach(vm.numbers, function (num) {
                  if (num.number === n) {
                    pricePerPair += num.price[betid][gameid];
                  }
                });
              });
              pricePerPair = Math.ceil(pricePerPair / pair.length);
              Number.Price = pricePerPair;
              TicketObj.Items.push(Number);
            });
            betObj.Tickets.push(TicketObj);
          }
        });
      });
      vm.sumMoney = vm.pair.money[2] + vm.pair.money[3] + vm.pair.money[4];
      vm.sumPoint = vm.pair.count[2] * vm.inputPoint[2] + vm.pair.count[3] * vm.inputPoint[3] + vm.pair.count[4] * vm.inputPoint[4];
      let ns = [];
      vm.numbers.map(function (number) {
        if (number.selected) {
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [2, 3, 4]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("liveSouthernCtrl", liveSouthernCtrl);
  function liveSouthernCtrl($rootScope, $scope, $timeout, $interval, $mdMedia, $document, network, betId, collections, msUtils, message) {
    let vm = this;
    vm.init = init;
    vm.oddsPrice = oddsPrice;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.singlePointClick = singlePointClick;
    vm.clearTemporary = clearTemporary;
    vm.changeBettingPoint = changeBettingPoint;
    vm.exists = exists;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.totalPoint = totalPoint;
    vm.submitBetting = submitBetting;
    vm.betId = betId;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    vm.quickChoices = collections.list;
    vm.allowBetting = false;
    $scope.$mdMedia = $mdMedia;
    $rootScope.location = {game: 2, bet: betId};
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: 0, point: 0});
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 2 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
          vm.oddsPrice();
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      } else {
        vm.oddsPrice();
      }
    }
    function oddsPrice() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.termName !== undefined) {
          network.Games.getLoLiveOdds({Term: $rootScope.termName, GameType: 2, BetType: 27}).then(function (resp) {
            vm.odds = resp;
            vm.buildPriceTable();
          });
        } else {
          $timeout(function () {
            vm.oddsPrice();
          }, 1e3);
        }
      } else {
        network.Public.Lottery.getLoLiveOdds({GameType: 2, BetType: 27}).then(function (resp) {
          vm.odds = resp;
          vm.buildPriceTable();
        });
      }
    }
    function buildPriceTable() {
      if (vm.odds === undefined) {
        return;
      }
      vm.allowBetting = vm.odds.Active;
      vm.basePrice = vm.odds.Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds.Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.Stop = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      vm.clearPriceChange = $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    vm.onlyNumbers = /^\d+$/;
    vm.arrayTemporary = [];
    vm.readyClear = false;
    vm.numbersCopy = [];
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
          number.point = 0;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
        vm.arrayTemporary.push(n.number);
      }
    }
    function singlePointClick($event) {
      $event.target.select();
    }
    function clearTemporary() {
      if (vm.readyClear) {
        vm.arrayTemporary = [];
        vm.readyClear = false;
        vm.numbersCopy = [];
      }
    }
    function changeBettingPoint() {
      vm.readyClear = true;
      if (vm.numbersCopy.length === 0) {
        vm.numbersCopy = angular.copy(vm.numbers);
        angular.forEach(vm.numbers, function (number) {
          if (msUtils.exists(number.number, vm.arrayTemporary) && !number.disabled) {
            number.point += parseInt(vm.betPoint);
          }
        });
      } else {
        angular.forEach(vm.numbers, function (number) {
          if (msUtils.exists(number.number, vm.arrayTemporary)) {
            number.point = vm.numbersCopy.filter(function (num) {
              return num.number === number.number;
            })[0].point + parseInt(vm.betPoint);
          }
        });
      }
    }
    vm.selectedCheckbox = [];
    function exists(parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }
    function groupNumbers(parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length && !number.disabled) {
          number.selected = vm.checked;
          number.point = vm.checked === false ? 0 : number.point;
        }
      });
      if (!vm.checked) {
        for (let i = vm.arrayTemporary.length - 1; i >= 0; i--) {
          let px = vm.arrayNumber.indexOf(vm.arrayTemporary[i]);
          if (px > -1) {
            vm.arrayTemporary.splice(vm.arrayTemporary.indexOf(vm.arrayTemporary[i]), 1);
          }
        }
      } else {
        vm.arrayTemporary = vm.arrayTemporary.concat(vm.arrayNumber);
        vm.arrayTemporary = vm.arrayTemporary.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) === index;
        });
      }
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1 && !val.disabled) {
          val.selected = true;
        }
      });
      vm.arrayTemporary = vm.arrayTemporary.concat(arrInput);
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
        vm.betPoint = 0;
      });
      vm.selectedCheckbox = [];
      vm.keynumber = "";
      vm.arrayTemporary = [];
    }
    function totalPoint() {
      if (!vm.allowBetting) {
        vm.resetBetting();
      }
      let total = 0, oddNumbers;
      vm.totalMoney = 0;
      angular.forEach(vm.numbers, function (num) {
        total += !num.disabled ? num.point : 0;
        if (vm.odds && num.selected) {
          oddNumbers = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === num.number;
          });
          if (oddNumbers.length && !oddNumbers[0].stop && oddNumbers[0].ExtraPrice !== 0) {
            vm.totalMoney += num.point * (vm.basePrice + oddNumbers[0].ExtraPrice);
          } else {
            vm.totalMoney += num.point * vm.basePrice;
          }
        }
      });
      if (vm.odds !== undefined) {
        vm.totalMoney = vm.totalMoney * vm.odds.PrizeNr;
      }
      vm.sumPoint = total;
      return total;
    }
    function submitBetting() {
      let checkCount = 0;
      let betObj = {};
      let ns = [];
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{PrizeNr: vm.odds.PrizeNr, GameType: 2, BetType: betId, Items: []}];
      vm.numbers.map(function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Point = number.point;
          Number.Price = number.price;
          betObj.Tickets[0].Items.push(Number);
          ns.push(number.number);
        }
        checkCount += number.selected && (number.point === 0 || number.point === null || isNaN(number.point)) ? 1 : 0;
      });
      if (checkCount === 0) {
        let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
        $rootScope.$broadcast("EventBetting", eventData);
      } else {
        message.show("Quý khách vui lòng kiểm tra lại số điểm muốn đặt cược.");
      }
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $scope.$on("extra-price-changed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      let matchNumber = 0;
      angular.forEach(data, function (itemPrice) {
        if (2 === itemPrice.GameType && 27 === itemPrice.BetType) {
          let findNumber = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === itemPrice.Number;
          });
          if (findNumber.length) {
            findNumber[0].ExtraPrice += itemPrice.PriceChange;
          } else {
            vm.odds.Numbers.push({Number: itemPrice.Number, ExtraPrice: itemPrice.PriceChange});
          }
          matchNumber++;
        }
      });
      if (matchNumber !== 0) {
        vm.buildPriceTable();
        if (vm.clearPriceChange) {
          clearTimeout(vm.clearPriceChange);
        }
      }
    });
    $scope.$on("stop-number-changed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      angular.forEach(data, function (item) {
        if (2 === item.GameType && 27 === item.BetType) {
          let findNumber = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === item.Number;
          });
          if (findNumber.length) {
            findNumber[0].Stop = item.Stop;
          } else {
            vm.odds.Numbers.push({Number: item.Number, Stop: item.Stop});
          }
        }
      });
      vm.buildPriceTable();
    });
    $scope.$on("lo-live:event:prize-closed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 2) {
        vm.odds.PrizeNr = data.PrizeNr;
        vm.buildPriceTable();
      }
    });
    $scope.$on("lo-live:event:game-opening", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 2) {
        vm.odds.Active = true;
        vm.buildPriceTable();
      }
    });
    $scope.$on("lo-live:event:game-closed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 2) {
        vm.odds.Active = false;
        vm.odds.PrizeNr = data.PrizeNr;
        vm.buildPriceTable();
      }
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("lo7Controller", lo7Controller);
  function lo7Controller($rootScope, $scope, $timeout, $interval, $document, network, msUtils) {
    let vm = this;
    vm.declareRow = declareRow;
    vm.totalMoney = totalMoney;
    vm.toggleAll = toggleAll;
    vm.checkedAll = checkedAll;
    vm.isIndeterminate = isIndeterminate;
    vm.checkDisabledReset = checkDisabledReset;
    vm.submitBetting = submitBetting;
    vm.ignorePrice = true;
    vm.declareRow();
    function declareRow() {
      vm.rowsBets = [];
      for (let i = 0; i < 15; i++) {
        let row = {};
        row.number = "";
        row.regirons = {2: false, 3: false, 4: false};
        row.lo = {16: {point: 0, reverse: false}, 18: {point: 0, reverse: false}};
        row.money = 0;
        vm.rowsBets.push(row);
      }
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.declareRow();
        e.preventDefault();
      }
    });
    $scope.$on("TradOdds::done", function () {
      vm.ready = true;
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return msUtils.exists(odd.GameType, [2, 3, 4]) && msUtils.exists(odd.BetType, [16, 18]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
    });
    function checkedAll(id) {
      let count = 0;
      angular.forEach(vm.rowsBets, function (row) {
        count += row.regirons[id] === true ? 1 : 0;
      });
      return count === vm.rowsBets.length;
    }
    function toggleAll(id) {
      let check = vm.checkedAll(id);
      angular.forEach(vm.rowsBets, function (row) {
        row.regirons[id] = !check;
      });
    }
    function isIndeterminate(id) {
      let count = 0;
      angular.forEach(vm.rowsBets, function (row) {
        count += row.regirons[id] === true ? 1 : 0;
      });
      if (count === 0 || count === vm.rowsBets.length) {
        return false;
      } else {
        return true;
      }
    }
    function checkDisabledReset() {
      let check = 0;
      angular.forEach(vm.rowsBets, function (row) {
        if (row.number !== null) {
          check += row.number.length ? 1 : 0;
        }
      });
      return check === 0;
    }
    function totalMoney() {
      let sumMoney = 0, rowMoney, oddValues, oddPrice, numbers;
      angular.forEach(vm.rowsBets, function (row) {
        rowMoney = 0;
        if (row.number) {
          if (row.number.length === 3) {
            row.lo[16].disabledReverse = true;
            row.lo[18].disabledReverse = row.number.split("")[0] === row.number.split("")[1] && row.number.split("")[1] === row.number.split("")[2];
          } else {
            row.lo[16].disabledReverse = row.number.split("")[0] === row.number.split("")[1];
            row.lo[18].disabledReverse = true;
          }
          Object.keys(row.regirons).forEach(function (gameid) {
            if (row.regirons[gameid]) {
              oddValues = $.grep(vm.odds, function (game) {
                return game.GameType === parseInt(gameid);
              });
              if (row.number.length === 3) {
                oddPrice = $.grep(oddValues, function (bet) {
                  return bet.BetType === 18;
                })[0];
                numbers = row.lo[18].reverse ? msUtils.permNumber(row.number) : [row.number];
                angular.forEach(numbers, function (num) {
                  let findExtra = $.grep(oddPrice.Numbers, function (n) {
                    return n.Number === num;
                  });
                  if (findExtra.length === 0) {
                    rowMoney += row.lo[18].point * oddPrice.Price * 7;
                  } else {
                    if (!findExtra[0].Stop && findExtra[0].ExtraPrice) {
                      rowMoney += row.lo[18].point * (oddPrice.Price + findExtra[0].ExtraPrice) * 7;
                    }
                  }
                });
              } else if (row.number.length === 1 || row.number.length === 2) {
                oddPrice = $.grep(vm.odds, function (bet) {
                  return bet.BetType === 16;
                })[0];
                let number = row.number.length === 1 ? "0" + row.number.toString() : row.number;
                numbers = row.lo[16].reverse ? msUtils.permNumber(number) : [number];
                angular.forEach(numbers, function (num) {
                  let findExtra = $.grep(oddPrice.Numbers, function (n) {
                    return n.Number === num;
                  });
                  if (findExtra.length === 0) {
                    rowMoney += row.lo[16].point * oddPrice.Price * 7;
                  } else {
                    if (!findExtra[0].Stop && findExtra[0].ExtraPrice !== undefined) {
                      rowMoney += row.lo[16].point * (oddPrice.Price + findExtra[0].ExtraPrice) * 7;
                    }
                  }
                });
              }
            }
          });
          row.money = rowMoney;
          sumMoney += rowMoney;
        } else {
          row.lo[16].disabledReverse = true;
          row.lo[18].disabledReverse = true;
        }
      });
      vm.sumMoney = sumMoney;
      return sumMoney;
    }
    function submitBetting() {
      vm.sumPoint = 0;
      vm.ns = [];
      vm.betDatas = [];
      let oddPrice, betObj, numbers, oddValues;
      betObj = {Term: $rootScope.termName, IgnorePrice: vm.ignorePrice, Tickets: []};
      angular.forEach(vm.rowsBets, function (row, rowId) {
        Object.keys(row.regirons).forEach(function (gameid) {
          if (row.regirons[gameid]) {
            oddValues = $.grep(vm.odds, function (game) {
              return game.GameType === parseInt(gameid);
            });
            if (row.number.length === 3) {
              numbers = row.lo[18].reverse ? msUtils.permNumber(row.number) : [row.number];
              oddPrice = $.grep(oddValues, function (bet) {
                return bet.BetType === 18;
              })[0];
              let TicketObj = {GameType: parseInt(gameid), BetType: 18, Items: [], Additional: {Row: rowId, Alias: 131072, Reverse: row.lo[18].reverse}};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                vm.ns = vm.ns.concat([num]);
                Number.Point = row.lo[18].point;
                vm.sumPoint += row.lo[18].point;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].Stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            } else if (row.number.length === 1 || row.number.length === 2) {
              let number = row.number.length === 1 ? "0" + row.number.toString() : row.number;
              numbers = row.lo[16].reverse ? msUtils.permNumber(number) : [number];
              oddPrice = $.grep(oddValues, function (bet) {
                return bet.BetType === 16;
              })[0];
              let TicketObj = {GameType: parseInt(gameid), BetType: 16, Items: [], Additional: {Row: rowId, Alias: 4096, Reverse: row.lo[16].reverse}};
              angular.forEach(numbers, function (num) {
                let Number = {};
                Number.Numbers = [num];
                vm.ns = vm.ns.concat([num]);
                Number.Point = row.lo[16].point;
                vm.sumPoint += row.lo[16].point;
                let findExtra = $.grep(oddPrice.Numbers, function (n) {
                  return n.Number === num;
                });
                if (findExtra.length === 0) {
                  Number.Price = oddPrice.Price;
                  TicketObj.Items.push(Number);
                } else {
                  if (findExtra[0].ExtraPrice !== undefined) {
                    Number.Price = oddPrice.Price + findExtra[0].ExtraPrice;
                  }
                  if (!findExtra[0].stop) {
                    TicketObj.Items.push(Number);
                  }
                }
              });
              if (TicketObj.Items.length) {
                betObj.Tickets.push(TicketObj);
              }
            }
          }
        });
      });
      vm.ns = vm.ns.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      let eventData = {betObj: betObj, sumObj: {numbers: vm.ns, point: vm.sumPoint, money: vm.sumMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.declareRow();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [2, 3, 4], BetTypes: [16, 18]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("parlayCtrl", parlayCtrl);
  function parlayCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $interval, $state, $document, msUtils, network, collections) {
    let vm = this;
    vm.init = init;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.costMoney = costMoney;
    vm.submitBetting = submitBetting;
    vm.purchaseLimit = purchaseLimit;
    vm.exists = exists;
    vm.ignorePrice = true;
    vm.quickChoices = collections.list;
    $scope.$mdMedia = $mdMedia;
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 0, bet: 2};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    vm.base = {2: 0, 3: 0, 4: 0};
    if ($rootScope.myParameters !== undefined) {
      $rootScope.myParameters.map(function (pr) {
        if (pr.GameType === 0) {
          if (pr.BetType === 2) {
            vm.base[2] = pr.Price;
          }
          if (pr.BetType === 3) {
            vm.base[3] = pr.Price;
          }
          if (pr.BetType === 4) {
            vm.base[4] = pr.Price;
          }
        }
      });
    }
    vm.pair = {count: {2: 0, 3: 0, 4: 0}, money: {2: 0, 3: 0, 4: 0}, limit: {2: 0, 3: 0, 4: 0}, payout: {2: 0, 3: 0, 4: 0}};
    vm.inputPoint = {2: 0, 3: 0, 4: 0};
    vm.numbers = [];
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, base: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, price: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, disabled: {2: false, 3: false, 4: false}};
      vm.numbers.push(number);
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        vm.purchaseLimit();
      }
    }
    function purchaseLimit() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          angular.forEach([2, 3, 4], function (betid) {
            vm.pair.limit[betid] = $rootScope.myParameters.filter(function (item) {
              return item.GameType === 0 && item.BetType === betid;
            })[0].MaxPointPerNumber;
            vm.pair.payout[betid] = $rootScope.myParameters.filter(function (item) {
              return item.GameType === 0 && item.BetType === betid;
            })[0].Payouts / 1e3;
          });
        } else {
          $timeout(function () {
            vm.purchaseLimit();
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 0 && msUtils.exists(odd.BetType, [2, 3, 4]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      if (!vm.odds.length) {
        return;
      }
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          num.base[odd.BetType] = odd.Price;
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              let extPrice = value.ExtraPrice !== undefined ? odd.Price + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
              if (num.price[odd.BetType] !== 0 && num.price[odd.BetType] !== extPrice) {
                num.priceChanged = true;
              }
              num.price[odd.BetType] = extPrice;
            }
          });
        });
      });
      vm.clearPriceChange = $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    function exists(parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }
    function groupNumbers(parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementsByClassName("bet-input")[0].select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
      vm.keynumber = "";
    }
    function costMoney() {
      vm.sumPoint = 0;
      let numberArr, sumMoney;
      angular.forEach([2, 3, 4], function (betid) {
        vm.pair.count[betid] = 0;
        sumMoney = 0;
        numberArr = [];
        angular.forEach(vm.numbers, function (num) {
          if (num.selected) {
            if (!num.disabled[betid]) {
              numberArr.push(num.number);
            }
          }
        });
        vm.pair.count[betid] += numberArr.combinate(betid).length;
        let totalyArr = numberArr.combinate(betid);
        if (totalyArr.length <= 128) {
          angular.forEach(totalyArr, function (pairArr) {
            let pricePerPair = 0;
            angular.forEach(pairArr, function (number) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === number) {
                  pricePerPair += num.price[betid];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pairArr.length);
            sumMoney += pricePerPair;
          });
          vm.pair.money[betid] = sumMoney * vm.inputPoint[betid];
          vm.sumPoint += vm.pair.count[betid] * vm.inputPoint[betid];
        } else {
          vm.inputPoint[betid] = 0;
        }
      });
      vm.totalMoney = vm.pair.money[2] + vm.pair.money[3] + vm.pair.money[4];
      return vm.totalMoney;
    }
    function submitBetting() {
      let betObj, ticketObj, selectedNumber, pairArrNum, Number;
      betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      Object.keys(vm.inputPoint).forEach(function (betid) {
        if (vm.inputPoint[betid] !== 0) {
          ticketObj = {GameType: 0, BetType: parseInt(betid), Items: []};
          selectedNumber = [];
          angular.forEach(vm.numbers, function (number) {
            if (number.selected && !number.disabled[betid]) {
              selectedNumber.push(number.number);
            }
          });
          pairArrNum = selectedNumber.combinate(betid);
          angular.forEach(pairArrNum, function (pair) {
            Number = {};
            Number.Numbers = pair;
            Number.Point = vm.inputPoint[betid];
            let pricePerPair = 0;
            angular.forEach(pair, function (n) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === n) {
                  pricePerPair += num.price[betid];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pair.length);
            Number.Price = pricePerPair;
            ticketObj.Items.push(Number);
          });
          betObj.Tickets.push(ticketObj);
        }
      });
      let ns = [];
      vm.numbers.map(function (n) {
        if (n.selected) {
          ns.push(n.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    if (!$rootScope.isAuthenticated) {
      $timeout(function () {
        $rootScope.$broadcast("TradOdds::get", {GameTypes: [0], BetTypes: [2, 3, 4]});
      }, 200);
    } else {
      $rootScope.$broadcast("TradOdds::get", {GameTypes: [0], BetTypes: [2, 3, 4]});
    }
  }
}());
Array.prototype.combinate = function (iItems, aIn) {
  if (!aIn) {
    aIn = [];
    this.combinate.aResult = [];
  }
  for (let i = 0; i < this.length; i++) {
    let a = aIn.concat(this[i]);
    let aRest = this.concat();
    aRest.splice(0, i + 1);
    if (iItems && iItems - 1 <= aRest.length) {
      aRest.combinate(iItems - 1, a);
      if (iItems === 1) this.combinate.aResult.push(a);
    }
  }
  return this.combinate.aResult;
};
(function () {
  "use strict";
  angular.module("app.traditional").controller("lotLiveCtrl", lotLiveCtrl);
  function lotLiveCtrl($rootScope, $scope, $timeout, $interval, $mdMedia, $document, $mdDialog, $state, network, betId, collections, msUtils, message) {
    let vm = this;
    vm.init = init;
    vm.oddsPrice = oddsPrice;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.singlePointClick = singlePointClick;
    vm.clearTemporary = clearTemporary;
    vm.changeBettingPoint = changeBettingPoint;
    vm.exists = exists;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.totalPoint = totalPoint;
    vm.submitBetting = submitBetting;
    vm.Promenade = Promenade;
    vm.betId = betId;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    vm.quickChoices = collections.list;
    vm.allowBetting = false;
    $scope.$mdMedia = $mdMedia;
    $rootScope.location = {game: 0, bet: betId};
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: 0, point: 0});
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 0 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts / 1e3;
          vm.oddsPrice();
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      } else {
        vm.oddsPrice();
      }
    }
    function oddsPrice() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.termName !== undefined) {
          network.Games.getLoLiveOdds({Term: $rootScope.termName, GameType: 0, BetType: 20}).then(function (resp) {
            vm.odds = resp;
            vm.buildPriceTable();
          });
        } else {
          $timeout(function () {
            vm.oddsPrice();
          }, 1e3);
        }
      } else {
        network.Public.Lottery.getLoLiveOdds({GameType: 0, BetType: 20}).then(function (resp) {
          vm.odds = resp;
          vm.buildPriceTable();
        });
      }
    }
    function buildPriceTable() {
      if (vm.odds === undefined) {
        return;
      }
      vm.allowBetting = vm.odds.Active;
      vm.basePrice = vm.odds.Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds.Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.Stop = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      vm.clearPriceChange = $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    vm.onlyNumbers = /^\d+$/;
    vm.arrayTemporary = [];
    vm.readyClear = false;
    vm.numbersCopy = [];
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
          number.point = 0;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
        vm.arrayTemporary.push(n.number);
      }
    }
    function singlePointClick($event) {
      $event.target.select();
    }
    function clearTemporary() {
      if (vm.readyClear) {
        vm.arrayTemporary = [];
        vm.readyClear = false;
        vm.numbersCopy = [];
      }
    }
    function changeBettingPoint() {
      vm.readyClear = true;
      if (vm.numbersCopy.length === 0) {
        vm.numbersCopy = angular.copy(vm.numbers);
        angular.forEach(vm.numbers, function (number) {
          if (msUtils.exists(number.number, vm.arrayTemporary) && !number.disabled) {
            number.point += parseInt(vm.betPoint);
          }
        });
      } else {
        angular.forEach(vm.numbers, function (number) {
          if (msUtils.exists(number.number, vm.arrayTemporary)) {
            number.point = vm.numbersCopy.filter(function (num) {
              return num.number === number.number;
            })[0].point + parseInt(vm.betPoint);
          }
        });
      }
    }
    vm.selectedCheckbox = [];
    function exists(parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }
    function groupNumbers(parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length && !number.disabled) {
          number.selected = vm.checked;
          number.point = vm.checked === false ? 0 : number.point;
        }
      });
      if (!vm.checked) {
        for (let i = vm.arrayTemporary.length - 1; i >= 0; i--) {
          let px = vm.arrayNumber.indexOf(vm.arrayTemporary[i]);
          if (px > -1) {
            vm.arrayTemporary.splice(vm.arrayTemporary.indexOf(vm.arrayTemporary[i]), 1);
          }
        }
      } else {
        vm.arrayTemporary = vm.arrayTemporary.concat(vm.arrayNumber);
        vm.arrayTemporary = vm.arrayTemporary.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) === index;
        });
      }
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1 && !val.disabled) {
          val.selected = true;
        }
      });
      vm.arrayTemporary = vm.arrayTemporary.concat(arrInput);
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
        vm.betPoint = 0;
      });
      vm.selectedCheckbox = [];
      vm.keynumber = "";
      vm.arrayTemporary = [];
    }
    function totalPoint() {
      if (!vm.allowBetting) {
        vm.resetBetting();
      }
      let total = 0, oddNumbers;
      vm.totalMoney = 0;
      vm.numbers.map(function (num) {
        total += !num.disabled ? num.point : 0;
        if (vm.odds && num.selected) {
          oddNumbers = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === num.number;
          });
          if (oddNumbers.length && !oddNumbers[0].stop && oddNumbers[0].ExtraPrice !== 0) {
            vm.totalMoney += num.point * (vm.basePrice + oddNumbers[0].ExtraPrice);
          } else {
            vm.totalMoney += num.point * vm.basePrice;
          }
        }
      });
      vm.sumPoint = total;
      return total;
    }
    function submitBetting() {
      let ns = [];
      let checkCount = 0;
      let betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{GameType: 0, BetType: betId, Items: []}];
      vm.numbers.map(function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Point = number.point;
          Number.Price = number.price;
          betObj.Tickets[0].Items.push(Number);
          ns.push(number.number);
        }
        checkCount += number.selected && (number.point === 0 || number.point === null || isNaN(number.point)) ? 1 : 0;
      });
      if (checkCount === 0) {
        let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
        $rootScope.$broadcast("EventBetting", eventData);
      } else {
        message.show("Quý khách vui lòng kiểm tra lại số điểm muốn đặt cược.");
      }
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $scope.$on("extra-price-changed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      let matchNumber = 0;
      angular.forEach(data, function (itemPrice) {
        if (0 === itemPrice.GameType && 20 === itemPrice.BetType) {
          let findNumber = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === itemPrice.Number;
          });
          if (findNumber.length) {
            findNumber[0].ExtraPrice += itemPrice.PriceChange;
          } else {
            vm.odds.Numbers.push({Number: itemPrice.Number, ExtraPrice: itemPrice.PriceChange});
          }
          matchNumber++;
        }
      });
      if (matchNumber !== 0) {
        vm.buildPriceTable();
        if (vm.clearPriceChange) {
          clearTimeout(vm.clearPriceChange);
        }
      }
    });
    $scope.$on("stop-number-changed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      angular.forEach(data, function (item) {
        if (0 === item.GameType && 20 === item.BetType) {
          let findNumber = $.grep(vm.odds.Numbers, function (n) {
            return n.Number === item.Number;
          });
          if (findNumber.length) {
            findNumber[0].Stop = item.Stop;
          } else {
            vm.odds.Numbers.push({Number: item.Number, Stop: item.Stop});
          }
        }
      });
      vm.buildPriceTable();
    });
    $scope.$on("lo-live:event:prize-closed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 0 && data.IsLive) {
        vm.odds.Price = data.Pricing.filter(function (pr) {
          return pr.BetType === 20;
        })[0].Price;
        vm.odds.PrizeNr = data.PrizeNr;
        vm.buildPriceTable();
      }
      if (data.PrizeNr === 1) {
        vm.Promenade();
      }
    });
    $scope.$on("lo-live:event:game-opening", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 0 && data.IsLive) {
        vm.odds.Active = true;
        vm.buildPriceTable();
      }
    });
    $scope.$on("lo-live:event:game-closed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.termName && data.GameType === 0 && data.IsLive) {
        vm.odds.Active = false;
        vm.odds.PrizeNr = data.PrizeNr;
        vm.odds.Price = data.Pricing.filter(function (pr) {
          return pr.BetType === 20;
        })[0].Price;
        vm.buildPriceTable();
      }
    });
    function Promenade() {
      $mdDialog.show({controller: PromenadeCtrl, templateUrl: "app/main/traditional/northern/live/promenade.dialog.html", fullscreen: true});
      function PromenadeCtrl($scope) {
        $scope.doPromenade = function () {
          $state.go("app.traditional.northern.jackpot");
          $mdDialog.cancel();
        };
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("exceptCtrl", exceptCtrl);
  function exceptCtrl($rootScope, $scope, $mdSidenav, $mdMedia, $timeout, $interval, $document, msUtils, network, collections, betId, param) {
    let vm = this;
    vm.init = init;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.exists = exists;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.totalPoint = totalPoint;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.calcMoney = calcMoney;
    vm.betId = betId;
    vm.param = param;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    vm.quickChoices = collections.list;
    $scope.$mdMedia = $mdMedia;
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 0, bet: betId};
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    vm.basePrice = 0;
    if ($rootScope.myParameters !== undefined) {
      vm.basePrice = $rootScope.myParameters.filter(function (pr) {
        return pr.GameType === 0 && pr.BetType === vm.betId;
      })[0].Price;
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: vm.basePrice, point: 0});
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          let myParamValues = $rootScope.myParameters.filter(function (item) {
            return item.GameType === 0 && item.BetType === betId;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts;
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 0 && odd.BetType === betId && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      if (!vm.odds.length) {
        return;
      }
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
        $timeout(function () {
          angular.forEach(vm.numbers, function (n) {
            n.priceChanged = false;
          });
        }, 3e3);
      });
      vm.clearPriceChange = $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
      }
    }
    vm.selectedCheckbox = [];
    function exists(parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }
    function groupNumbers(parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length && !number.disabled) {
          number.selected = vm.checked;
        }
      });
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1 && !val.disabled) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function totalPoint() {
      if (!$rootScope.allowBetting) {
        vm.resetBetting();
      }
      let total = 0, oddNumbers;
      vm.totalMoney = 0;
      vm.numbers.map(function (num) {
        total += !num.disabled && num.selected ? vm.betPoint : 0;
        if (vm.odds && num.selected) {
          oddNumbers = $.grep(vm.odds[0].Numbers, function (n) {
            return n.Number === num.number;
          });
          if (oddNumbers.length && !oddNumbers[0].stop && oddNumbers[0].ExtraPrice !== 0) {
            vm.totalMoney += vm.calcMoney(vm.basePrice + oddNumbers[0].ExtraPrice);
          } else {
            vm.totalMoney += vm.calcMoney(vm.basePrice);
          }
        }
      });
      vm.sumPoint = total;
      return total;
    }
    function calcMoney(price) {
      if (vm.betId === 5) {
        return vm.betPoint * (price - vm.payouts) / 10;
      } else {
        return vm.betPoint * (price - vm.payouts) * vm.param.betTimes;
      }
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.betPoint = 0;
      vm.selectedCheckbox = [];
      vm.keynumber = "";
    }
    function submitBetting() {
      let ns = [];
      let betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{GameType: 0, BetType: betId, Items: []}];
      vm.numbers.map(function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Price = number.price;
          Number.Point = vm.betPoint;
          betObj.Tickets[0].Items.push(Number);
          ns.push(number.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    if (!$rootScope.isAuthenticated) {
      $timeout(function () {
        $rootScope.$broadcast("TradOdds::get", {GameTypes: [0], BetTypes: [betId]});
      }, 200);
    } else {
      $rootScope.$broadcast("TradOdds::get", {GameTypes: [0], BetTypes: [betId]});
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("generalCtrl", generalCtrl);
  function generalCtrl($rootScope, $scope, $state, $mdSidenav, $mdMedia, $timeout, $interval, $document, $mdDialog, msUtils, network, collections, betId, message) {
    let vm = this;
    vm.purchaseLimit = purchaseLimit;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.singlePointClick = singlePointClick;
    vm.clearTemporary = clearTemporary;
    vm.changeBettingPoint = changeBettingPoint;
    vm.exists = exists;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.totalPoint = totalPoint;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.onTabSelected = onTabSelected;
    vm.setupHighlight = setupHighlight;
    vm.betId = betId;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    vm.warnPriceChanges = [];
    vm.quickChoices = collections.list;
    $scope.$mdMedia = $mdMedia;
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $rootScope.location = {game: 0, bet: vm.betId};
    vm.basePrice = 0;
    if ($rootScope.myParameters !== undefined) {
      vm.basePrice = $rootScope.myParameters.filter(function (pr) {
        return pr.GameType === 0 && pr.BetType === vm.betId;
      })[0].Price;
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: vm.basePrice, point: 0, selectCount: 0});
    }
    function purchaseLimit() {
      if ($rootScope.myParameters !== undefined) {
        return $rootScope.myParameters.filter(function (item) {
          return item.GameType === 0 && item.BetType === betId;
        })[0].MaxPointPerNumber;
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 0 && odd.BetType === betId && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      if (!vm.odds.length) {
        return;
      }
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.price = num.price < vm.basePrice ? vm.basePrice : num.price;
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        $scope.$digest();
      });
      vm.clearPriceChange = $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
      if ($rootScope.myParameters !== undefined) {
        vm.highlightObj = localStorage.getItem("highlight") === null ? {} : JSON.parse(localStorage.getItem("highlight"));
        vm.highlightObj[$rootScope.User.Username] === undefined ? vm.highlightObj[$rootScope.User.Username] = {} : vm.highlightObj[$rootScope.User.Username];
        vm.highlight = vm.highlightObj[$rootScope.User.Username][betId] === undefined ? {enabled: false, atPrice: vm.basePrice} : vm.highlightObj[$rootScope.User.Username][betId];
      }
    }
    vm.onlyNumbers = /^\d+$/;
    vm.arrayTemporary = [];
    vm.readyClear = false;
    vm.numbersCopy = [];
    vm.selectedCheckbox = [];
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          if (!number.selected) {
            number.selected = true;
            number.selectCount = 1;
          } else {
            if (number.selectCount === 1) {
              number.selectCount = 0;
              number.selected = false;
              number.point = 0;
            } else {
              number.selectCount--;
              if (number.selectCount < 0) {
                number.selectCount = 0;
                number.selected = false;
                number.point = 0;
              }
            }
          }
        }
        if (number.selected && number.point === 0 && number.selectCount === 0) {
          number.selectCount = 1;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
      }
    }
    function singlePointClick($event) {
      $event.target.select();
    }
    function clearTemporary() {
      if (vm.readyClear) {
        vm.readyClear = false;
        vm.numbersCopy = [];
        angular.forEach(vm.numbers, function (number) {
          number.selectCount = 0;
        });
      }
    }
    function changeBettingPoint() {
      vm.betPoint = vm.betPoint === null ? 0 : vm.betPoint;
      vm.readyClear = vm.betPoint !== 0;
      if (vm.numbersCopy.length === 0) {
        vm.numbersCopy = angular.copy(vm.numbers);
        angular.forEach(vm.numbers, function (number) {
          if (!number.disabled && number.selected) {
            number.point += parseInt(vm.betPoint) * number.selectCount;
          }
        });
      } else {
        angular.forEach(vm.numbers, function (number) {
          if (!number.disabled && number.selected) {
            number.point = vm.numbersCopy.filter(function (num) {
              return num.number === number.number;
            })[0].point + parseInt(vm.betPoint) * number.selectCount;
          }
        });
      }
    }
    function exists(parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }
    function onTabSelected(tab) {
      vm.activeTab = tab;
    }
    function groupNumbers(parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      if (vm.checked) {
        angular.forEach(vm.numbers, function (number) {
          if ($.grep(vm.arrayNumber, function (b) {
            return b === number.number;
          }).length && !number.disabled) {
            if (!number.selected) {
              number.selected = true;
              number.selectCount = 1;
            } else {
              if (parent !== 8) {
                number.selectCount++;
              } else {
                number.selectCount = 1;
              }
            }
          }
          if (number.selected && number.point === 0 && number.selectCount === 0) {
            number.selectCount = 1;
          }
        });
      } else {
        angular.forEach(vm.numbers, function (number) {
          if ($.grep(vm.arrayNumber, function (b) {
            return b === number.number;
          }).length && !number.disabled) {
            if (number.selectCount === 1) {
              number.selectCount = 0;
              number.point = 0;
              number.selected = false;
            } else {
              number.selectCount--;
              if (number.selectCount < 0) {
                number.selectCount = 0;
                number.selected = false;
                number.point = 0;
              }
            }
          }
        });
      }
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
      if (e.which === 13) {
        console.log("done button");
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (number) {
        let countNumber = arrInput.filter(function (n) {
          return n === number.number;
        }).length;
        if (arrInput.indexOf(number.number) !== -1 && !number.disabled) {
          if (!number.selected) {
            number.selected = true;
            number.selectCount = countNumber;
          } else {
            number.selectCount += countNumber;
          }
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 100);
      }
    }
    function totalPoint() {
      if (!$rootScope.allowBetting) {
        vm.resetBetting();
      }
      let total = 0, oddNumbers;
      vm.totalMoney = 0;
      vm.numbers.map(function (num) {
        total += !num.disabled ? num.point : 0;
        if (vm.odds && num.selected) {
          oddNumbers = $.grep(vm.odds[0].Numbers, function (n) {
            return n.Number === num.number;
          });
          if (oddNumbers.length && !oddNumbers[0].stop && oddNumbers[0].ExtraPrice !== 0) {
            vm.totalMoney += num.point * (vm.basePrice + oddNumbers[0].ExtraPrice);
          } else {
            vm.totalMoney += num.point * vm.basePrice;
          }
        }
      });
      vm.sumPoint = total;
      return total;
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
        delete number.selectCount;
        vm.betPoint = 0;
      });
      vm.selectedCheckbox = [];
      vm.keynumber = "";
      vm.arrayTemporary = [];
      vm.warnPriceChanges = [];
    }
    function submitBetting() {
      let ns = [];
      let checkCount = 0;
      let betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{GameType: 0, BetType: betId, Items: []}];
      vm.numbers.map(function (number) {
        if (number.selected && !number.disabled) {
          let Number = {};
          Number.Numbers = [number.number];
          Number.Point = number.point;
          Number.Price = number.price;
          betObj.Tickets[0].Items.push(Number);
          ns.push(number.number);
        }
        checkCount += number.selected && (number.point === 0 || number.point === null || isNaN(number.point)) ? 1 : 0;
      });
      if (checkCount === 0) {
        if (vm.warnPriceChanges.length && !vm.ignorePrice) {
          $mdDialog.show({clickOutsideToClose: false, escapeToClose: false, controllerAs: "ctrl", templateUrl: "app/main/traditional/betting/prompt.dialog.html", controller: warnPriceChangesCtrl});
          function warnPriceChangesCtrl($scope, $mdDialog) {
            $scope.warnPriceChanges = vm.warnPriceChanges;
            $scope.cancel = function () {
              $mdDialog.hide();
              vm.resetBetting();
            };
            $scope.continuous = function () {
              vm.warnPriceChanges.length = 0;
              vm.submitBetting();
            };
          }
        } else {
          let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
          $rootScope.$broadcast("EventBetting", eventData);
        }
      } else {
        message.show("Quý khách vui lòng kiểm tra lại số điểm muốn đặt cược.");
      }
    }
    function setupHighlight($event) {
      $mdDialog.show({clickOutsideToClose: true, escapeToClose: true, parent: angular.element(document.body), targetEvent: $event, templateUrl: "app/main/traditional/northern/general/setup.html", controller: setupHighlightCtr, locals: {data: vm.highlight}});
      function setupHighlightCtr($scope, data) {
        $scope.highlight = angular.copy(data);
        $scope.done = function () {
          if ($scope.highlight.atPrice < parseInt(vm.basePrice)) {
            message.infoMultiple("Giá phải lớn hơn hoặc bằng " + parseInt(vm.basePrice));
          } else {
            vm.highlightObj[$rootScope.User.Username][betId] = $scope.highlight;
            localStorage.setItem("highlight", JSON.stringify(vm.highlightObj));
            vm.highlight = $scope.highlight;
            $mdDialog.hide();
          }
        };
      }
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    if (!$rootScope.isAuthenticated) {
      $timeout(function () {
        $rootScope.$broadcast("TradOdds::get", {GameTypes: [0], BetTypes: [betId]});
      }, 200);
    } else {
      $rootScope.$broadcast("TradOdds::get", {GameTypes: [0], BetTypes: [betId]});
    }
    $scope.$on("lo-live:event:game-closed", function ($event, data) {
      if (data.Term === $rootScope.termName && data.GameType === 0) {
        if ($state.current.name === "app.traditional.northern.lotto") {
          $timeout(function () {
            $state.go("app.traditional.northern.live");
          }, 1e4);
        }
      }
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("southernQuickCtrl", southernQuickCtrl);
  function southernQuickCtrl($scope, $rootScope, $mdDialog, msUtils, GameType) {
    let vm = this;
    vm.GameType = GameType;
    vm.parseNumbers = parseNumbers;
    vm.resetBetting = resetBetting;
    vm.buildTable = buildTable;
    vm.repeatLimitTo = repeatLimitTo;
    vm.checkAllowInput = checkAllowInput;
    vm.totalPoint = totalPoint;
    vm.submitBetting = submitBetting;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = item.value;
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.viewFull = {2: false, 3: false, 4: false};
    vm.numbers = {2: [], 3: [], 4: []};
    vm.numbersArr = [{id: 0, text: "0", type: "single"}, {id: 1, text: "1", type: "single"}, {id: 2, text: "2", type: "single"}, {id: 3, text: "3", type: "single"}, {id: 4, text: "4", type: "single"}, {id: 5, text: "5", type: "single"}, {id: 6, text: "6", type: "single"}, {id: 7, text: "7", type: "single"}, {id: 8, text: "8", type: "single"}, {id: 9, text: "9", type: "single"}];
    vm.BetTypes = [{group: "2D", numbers: 2, BetTypes: [{Label: "2D Đầu", BetType: 7}, {Label: "2D Đuôi", BetType: 8}, {Label: "2D 18Lô", BetType: 15}, {Label: "2D 18Lô Đầu", BetType: 30}]}, {group: "3D", numbers: 3, BetTypes: [{Label: "3D Đầu", BetType: 10}, {Label: "3D Đuôi", BetType: 11}, {Label: "3D 17Lô", BetType: 17}]}, {group: "4D", numbers: 4, BetTypes: [{Label: "4D Đuôi", BetType: 13}, {Label: "4D 16Lô", BetType: 19}]}];
    vm.selected = [];
    vm.checkAllow = function (item, BetType) {
      if (BetType !== undefined && $rootScope.LegendCurrentTerm !== undefined) {
        let currentBetTypes = $rootScope.LegendCurrentTerm.filter(function (g) {
          return g.GameType === 1;
        })[0].Games;
        let currentAllowed = currentBetTypes.filter(function (b) {
          return b.BetType === BetType;
        })[0].Status === 0;
        if (!currentAllowed) {
          return vm.numbers[item].length > 100 || vm.numbers[item].length === 0;
        } else {
          return true;
        }
      } else {
        return vm.numbers[item].length > 100 || vm.numbers[item].length === 0;
      }
    };
    vm.Thousands = [];
    vm.Hundreds = [];
    vm.Dozens = [];
    vm.Units = [];
    vm.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };
    vm.toggle = function (item, list) {
      let idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      } else {
        list.push(item);
      }
      vm.parseNumbers();
    };
    vm.toggleEven = function (ar, list) {
      let check = list.some(function (id) {
        return msUtils.exists(id, ar);
      });
      ar.map(function (id) {
        let idx = list.indexOf(id);
        if (check && list.indexOf(id) > -1) {
          list.splice(idx, 1);
        }
        if (!check) {
          list.push(id);
        }
      });
      vm.parseNumbers();
    };
    vm.clear = function (list) {
      list.length = 0;
      vm.parseNumbers();
    };
    function parseNumbers() {
      vm.numberParsed = {2: [], 3: [], 4: []};
      vm.Thousands.map(function (t) {
        vm.Hundreds.map(function (h) {
          vm.Dozens.map(function (d) {
            vm.Units.map(function (u) {
              vm.numberParsed[4].push(t.toString() + h.toString() + d.toString() + u.toString());
            });
          });
        });
      });
      vm.numberParsed[4].sort();
      vm.Hundreds.map(function (h) {
        vm.Dozens.map(function (d) {
          vm.Units.map(function (u) {
            vm.numberParsed[3].push(h.toString() + d.toString() + u.toString());
          });
        });
      });
      vm.numberParsed[3].sort();
      vm.Dozens.map(function (d) {
        vm.Units.map(function (u) {
          vm.numberParsed[2].push(d.toString() + u.toString());
        });
      });
      vm.numberParsed[2].sort();
      vm.buildTable();
    }
    function buildTable() {
      vm.numbers = {2: [], 3: [], 4: []};
      vm.numberParsed[2].map(function (n) {
        vm.numbers[2].push({number: n});
      });
      vm.numberParsed[3].map(function (n) {
        vm.numbers[3].push({number: n});
      });
      vm.numberParsed[4].map(function (n) {
        vm.numbers[4].push({number: n});
      });
      vm.viewFull = {2: false, 3: false, 4: false};
      vm.betPoint = 0;
    }
    function repeatLimitTo(index) {
      if (vm.viewFull[index]) {
        return 100;
      } else {
        return 24;
      }
    }
    function totalPoint() {
      if ($rootScope.isAuthenticated) {
        vm.Parameters = $rootScope.LegendParameters;
      } else {
        vm.Parameters = [{GameType: 0, BetType: 0, Payouts: 7e4, Price: 750}, {GameType: 0, BetType: 1, Payouts: 8e4, Price: 22690}, {GameType: 0, BetType: 29, Payouts: 8e4, Price: 22500}, {GameType: 0, BetType: 2, Payouts: 1e4, Price: 580}, {GameType: 0, BetType: 3, Payouts: 4e4, Price: 540}, {GameType: 0, BetType: 4, Payouts: 1e5, Price: 470}, {GameType: 0, BetType: 5, Payouts: 650, Price: 71e3}, {GameType: 0, BetType: 6, Payouts: 21100, Price: 81e3}, {GameType: 0, BetType: 11, Payouts: 65e4, Price: 690}, {GameType: 0, BetType: 12, Payouts: 65e4, Price: 15430}, {GameType: 0, BetType: 13, Payouts: 6e6, Price: 690}, {GameType: 0, BetType: 14, Payouts: 6e6, Price: 690}, {GameType: 0, BetType: 20, Payouts: 8e4, Price: 21740}, {GameType: 0, BetType: 21, Payouts: 7e4, Price: 730}, {GameType: 0, BetType: 26, Payouts: 8e5, Price: 19540}, {GameType: 1, BetType: 2, Payouts: 8e5, Price: 775}, {GameType: 1, BetType: 3, Payouts: 5e6, Price: 775}, {GameType: 1, BetType: 4, Payouts: 2e7, Price: 775}, {GameType: 1, BetType: 7, Payouts: 75e3, Price: 775}, {GameType: 1, BetType: 8, Payouts: 75e3, Price: 775}, {GameType: 1, BetType: 10, Payouts: 65e4, Price: 690}, {GameType: 1, BetType: 11, Payouts: 65e4, Price: 690}, {GameType: 1, BetType: 13, Payouts: 6e6, Price: 690}, {GameType: 1, BetType: 15, Payouts: 75e3, Price: 773}, {GameType: 1, BetType: 30, Payouts: 75e3, Price: 13860}, {GameType: 1, BetType: 17, Payouts: 65e4, Price: 690}, {GameType: 1, BetType: 19, Payouts: 6e6, Price: 690}, {GameType: 1, BetType: 27, Payouts: 75e3, Price: 774}, {GameType: 1, BetType: 28, Payouts: 65e4, Price: 690}];
      }
      let total = 0;
      vm.totalMoney = 0;
      vm.toPoint = 0;
      for (let key in vm.numbers) {
        if (vm.numbers.hasOwnProperty(key)) {
          let value = vm.numbers[key];
          key = parseInt(key);
          if (key === 2) {
            total += vm.betPoint * value.length * vm.selected.filter(function (s) {
              return msUtils.exists(s, [7, 8, 15, 30]);
            }).length;
            [7, 8, 30].map(function (BetType) {
              if (msUtils.exists(BetType, vm.selected)) {
                let Price = vm.Parameters.filter(function (pam) {
                  return pam.GameType === 1 && pam.BetType === BetType;
                })[0].Price;
                vm.totalMoney += vm.betPoint * value.length * Price;
              }
            });
            if (msUtils.exists(15, vm.selected)) {
              let Parameters = vm.Parameters.filter(function (pam) {
                return pam.GameType === 1 && pam.BetType === 15;
              })[0];
              vm.totalMoney += vm.betPoint * value.length * Parameters.Price * 18;
            }
          } else if (key === 3) {
            total += vm.betPoint * value.length * vm.selected.filter(function (s) {
              return msUtils.exists(s, [10, 11]);
            }).length;
            [10, 11].map(function (BetType) {
              if (msUtils.exists(BetType, vm.selected)) {
                let Price = vm.Parameters.filter(function (pam) {
                  return pam.GameType === 1 && pam.BetType === BetType;
                })[0].Price;
                vm.totalMoney += vm.betPoint * value.length * Price;
              }
            });
            if (msUtils.exists(17, vm.selected)) {
              let Parameters = vm.Parameters.filter(function (pam) {
                return pam.GameType === 1 && pam.BetType === 17;
              })[0];
              vm.totalMoney += vm.betPoint * value.length * Parameters.Price * 17;
            }
          } else if (key === 4) {
            total += vm.betPoint * value.length * vm.selected.filter(function (s) {
              return msUtils.exists(s, [13, 19]);
            }).length;
            if (msUtils.exists(13, vm.selected)) {
              let Price = vm.Parameters.filter(function (pam) {
                return pam.GameType === 1 && pam.BetType === 13;
              })[0].Price;
              vm.totalMoney += vm.betPoint * value.length * Price;
            }
            if (msUtils.exists(19, vm.selected)) {
              let Parameters = vm.Parameters.filter(function (pam) {
                return pam.GameType === 1 && pam.BetType === 19;
              })[0];
              vm.totalMoney += vm.betPoint * value.length * Parameters.Price * 16;
            }
          }
        }
      }
      vm.toPoint = total;
      return total;
    }
    function resetBetting() {
      vm.viewFull = {2: false, 3: false, 4: false};
      vm.numbers = {2: [], 3: [], 4: []};
      vm.Thousands = [];
      vm.Hundreds = [];
      vm.Dozens = [];
      vm.Units = [];
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
    }
    function submitBetting() {
      let betObj = {};
      betObj.Term = $rootScope.LegendTermName[1];
      betObj.IgnorePrice = true;
      betObj.Tickets = [];
      vm.selected.map(function (betType) {
        let Ticket = {};
        Ticket.GameType = GameType;
        Ticket.BetType = betType;
        Ticket.Items = [];
        let Price = vm.Parameters.filter(function (pam) {
          return pam.GameType === 1 && pam.BetType === betType;
        })[0].Price;
        if (msUtils.exists(betType, [7, 8, 15, 30])) {
          vm.numbers[2].map(function (number) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = Price;
            Number.Point = vm.betPoint;
            Ticket.Items.push(Number);
          });
        } else if (msUtils.exists(betType, [10, 11, 17])) {
          vm.numbers[3].map(function (number) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = Price;
            Number.Point = vm.betPoint;
            Ticket.Items.push(Number);
          });
        } else if (msUtils.exists(betType, [13, 19])) {
          vm.numbers[4].map(function (number) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = Price;
            Number.Point = vm.betPoint;
            Ticket.Items.push(Number);
          });
        }
        if (Ticket.Items.length !== 0 && Ticket.Items.length <= 100) {
          betObj.Tickets.push(Ticket);
        }
      });
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      let numbers = [];
      if (msUtils.exists(7, vm.selected) || msUtils.exists(8, vm.selected) || msUtils.exists(15, vm.selected) || msUtils.exists(30, vm.selected)) {
        angular.forEach(vm.numbers[2], function (n) {
          numbers.push(n.number);
        });
      }
      if (msUtils.exists(10, vm.selected) || msUtils.exists(11, vm.selected) || msUtils.exists(17, vm.selected)) {
        angular.forEach(vm.numbers[3], function (n) {
          numbers.push(n.number);
        });
      }
      if (msUtils.exists(13, vm.selected) || msUtils.exists(19, vm.selected)) {
        angular.forEach(vm.numbers[4], function (n) {
          numbers.push(n.number);
        });
      }
      numbers = numbers.toString().replace(/\,+/g, ", ");
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.toPoint, money: vm.totalMoney, numbers: numbers}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = point;
        $scope.costMoney = money;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("northernQuickCtrl", northernQuickCtrl);
  function northernQuickCtrl($scope, $rootScope, $mdDialog, msUtils, GameType) {
    let vm = this;
    vm.GameType = GameType;
    vm.parseNumbers = parseNumbers;
    vm.resetBetting = resetBetting;
    vm.buildTable = buildTable;
    vm.repeatLimitTo = repeatLimitTo;
    vm.checkAllowInput = checkAllowInput;
    vm.totalPoint = totalPoint;
    vm.submitBetting = submitBetting;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = item.value;
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.viewFull = {2: false, 3: false, 4: false};
    vm.numbers = {2: [], 3: [], 4: []};
    vm.numbersArr = [{id: 0, text: "0", type: "single"}, {id: 1, text: "1", type: "single"}, {id: 2, text: "2", type: "single"}, {id: 3, text: "3", type: "single"}, {id: 4, text: "4", type: "single"}, {id: 5, text: "5", type: "single"}, {id: 6, text: "6", type: "single"}, {id: 7, text: "7", type: "single"}, {id: 8, text: "8", type: "single"}, {id: 9, text: "9", type: "single"}];
    if (vm.GameType === 0) {
      vm.BetTypes = [{group: "2 Càng", numbers: 2, BetTypes: [{Label: "Đề", BetType: 0}, {Label: "Lô", BetType: 1}, {Label: "Đề đầu", BetType: 21}, {Label: "Lô đầu", BetType: 29}, {Label: "Đề trượt", BetType: 5}, {Label: "Lô trượt", BetType: 6}]}, {group: "3 Càng", numbers: 3, BetTypes: [{Label: "Đề 3 Càng", BetType: 11}, {Label: "Lô 3 Càng", BetType: 12}]}, {group: "4 Càng", numbers: 4, BetTypes: [{Label: "Đề 4 Càng", BetType: 13}, {Label: "Lô 4 Càng", BetType: 14}]}];
    } else {
      vm.BetTypes = [{group: "2D", numbers: 2, BetTypes: [{Label: "2D Đầu", BetType: 7}, {Label: "2D Đuôi", BetType: 8}, {Label: "2D 18Lô", BetType: 18}]}, {group: "3D", numbers: 3, BetTypes: [{Label: "3D Đầu", BetType: 10}, {Label: "3D Đuôi", BetType: 11}, {Label: "3D 17Lô", BetType: 17}]}, {group: "4D", numbers: 4, BetTypes: [{Label: "4D Đuôi", BetType: 13}, {Label: "4D 16Lô", BetType: 19}]}];
    }
    vm.selected = [];
    vm.checkAllow = function (item, BetType) {
      if (BetType !== undefined && $rootScope.LegendCurrentTerm !== undefined) {
        let currentBetTypes = $rootScope.LegendCurrentTerm.filter(function (g) {
          return g.GameType === 0;
        })[0].Games;
        let currentAllowed = currentBetTypes.filter(function (b) {
          return b.BetType === BetType;
        })[0].Status === 0;
        if (!currentAllowed) {
          if (BetType === 5) {
            if (vm.numbers[2].length < 10 || vm.numbers[2].length > 100) {
              let index = vm.selected.indexOf(5);
              if (index > -1) {
                vm.selected.splice(index, 1);
              }
              return true;
            }
          } else if (BetType === 6) {
            if (vm.numbers[2].length < 4 || vm.numbers[2].length > 100) {
              let index = vm.selected.indexOf(6);
              if (index > -1) {
                vm.selected.splice(index, 1);
              }
              return true;
            }
          } else {
            return vm.numbers[item].length > 100 || vm.numbers[item].length === 0;
          }
        } else {
          return true;
        }
      } else {
        return vm.numbers[item].length > 100 || vm.numbers[item].length === 0;
      }
    };
    vm.Thousands = [];
    vm.Hundreds = [];
    vm.Dozens = [];
    vm.Units = [];
    vm.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };
    vm.toggle = function (item, list) {
      let idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      } else {
        list.push(item);
      }
      vm.parseNumbers();
    };
    vm.toggleEven = function (ar, list) {
      if (msUtils.containsAll(ar, list)) {
        ar.map(function (el) {
          let idx = list.indexOf(el);
          if (msUtils.exists(el, ar)) {
            list.splice(idx, 1);
          }
        });
      } else {
        ar.map(function (id) {
          if (!msUtils.exists(id, list)) {
            list.push(id);
          }
        });
      }
      vm.parseNumbers();
    };
    vm.clear = function (list) {
      list.length = 0;
      vm.parseNumbers();
    };
    function parseNumbers() {
      vm.numberParsed = {2: [], 3: [], 4: []};
      vm.Thousands.map(function (t) {
        vm.Hundreds.map(function (h) {
          vm.Dozens.map(function (d) {
            vm.Units.map(function (u) {
              vm.numberParsed[4].push(t.toString() + h.toString() + d.toString() + u.toString());
            });
          });
        });
      });
      vm.numberParsed[4].sort();
      vm.Hundreds.map(function (h) {
        vm.Dozens.map(function (d) {
          vm.Units.map(function (u) {
            vm.numberParsed[3].push(h.toString() + d.toString() + u.toString());
          });
        });
      });
      vm.numberParsed[3].sort();
      vm.Dozens.map(function (d) {
        vm.Units.map(function (u) {
          vm.numberParsed[2].push(d.toString() + u.toString());
        });
      });
      vm.numberParsed[2].sort();
      vm.buildTable();
    }
    function buildTable() {
      vm.numbers = {2: [], 3: [], 4: []};
      vm.numberParsed[2].map(function (n) {
        vm.numbers[2].push({number: n});
      });
      vm.numberParsed[3].map(function (n) {
        vm.numbers[3].push({number: n});
      });
      vm.numberParsed[4].map(function (n) {
        vm.numbers[4].push({number: n});
      });
      vm.viewFull = {2: false, 3: false, 4: false};
      vm.betPoint = 0;
    }
    function repeatLimitTo(index) {
      if (vm.viewFull[index]) {
        return 100;
      } else {
        return 24;
      }
    }
    function totalPoint() {
      if ($rootScope.isAuthenticated) {
        vm.Parameters = $rootScope.LegendParameters;
      } else {
        vm.Parameters = [{GameType: 0, BetType: 0, Payouts: 7e4, Price: 750}, {GameType: 0, BetType: 1, Payouts: 8e4, Price: 22690}, {GameType: 0, BetType: 29, Payouts: 8e4, Price: 22500}, {GameType: 0, BetType: 2, Payouts: 1e4, Price: 580}, {GameType: 0, BetType: 3, Payouts: 4e4, Price: 540}, {GameType: 0, BetType: 4, Payouts: 1e5, Price: 470}, {GameType: 0, BetType: 5, Payouts: 650, Price: 71e3}, {GameType: 0, BetType: 6, Payouts: 21100, Price: 81e3}, {GameType: 0, BetType: 11, Payouts: 65e4, Price: 690}, {GameType: 0, BetType: 12, Payouts: 65e4, Price: 15430}, {GameType: 0, BetType: 13, Payouts: 6e6, Price: 690}, {GameType: 0, BetType: 14, Payouts: 6e6, Price: 690}, {GameType: 0, BetType: 20, Payouts: 8e4, Price: 21740}, {GameType: 0, BetType: 21, Payouts: 7e4, Price: 730}, {GameType: 0, BetType: 26, Payouts: 8e5, Price: 19540}, {GameType: 1, BetType: 2, Payouts: 8e5, Price: 775}, {GameType: 1, BetType: 3, Payouts: 5e6, Price: 775}, {GameType: 1, BetType: 4, Payouts: 2e7, Price: 775}, {GameType: 1, BetType: 7, Payouts: 75e3, Price: 775}, {GameType: 1, BetType: 8, Payouts: 75e3, Price: 775}, {GameType: 1, BetType: 10, Payouts: 65e4, Price: 690}, {GameType: 1, BetType: 11, Payouts: 65e4, Price: 690}, {GameType: 1, BetType: 13, Payouts: 6e6, Price: 690}, {GameType: 1, BetType: 15, Payouts: 75e3, Price: 773}, {GameType: 1, BetType: 30, Payouts: 75e3, Price: 13860}, {GameType: 1, BetType: 17, Payouts: 65e4, Price: 690}, {GameType: 1, BetType: 19, Payouts: 6e6, Price: 690}, {GameType: 1, BetType: 27, Payouts: 75e3, Price: 774}, {GameType: 1, BetType: 28, Payouts: 65e4, Price: 690}];
      }
      let total = 0;
      vm.totalMoney = 0;
      vm.toPoint = 0;
      for (let key in vm.numbers) {
        if (vm.numbers.hasOwnProperty(key)) {
          let value = vm.numbers[key];
          key = parseInt(key);
          if (key === 2) {
            total += vm.betPoint * value.length * vm.selected.filter(function (s) {
              return msUtils.exists(s, [0, 1, 5, 6, 21, 29]);
            }).length;
            [0, 1, 21, 29].map(function (BetType) {
              if (msUtils.exists(BetType, vm.selected)) {
                let Price = vm.Parameters.filter(function (pam) {
                  return pam.GameType === 0 && pam.BetType === BetType;
                })[0].Price;
                vm.totalMoney += vm.betPoint * value.length * Price;
              }
            });
            if (msUtils.exists(5, vm.selected)) {
              let Parameters = vm.Parameters.filter(function (pam) {
                return pam.GameType === 0 && pam.BetType === 5;
              })[0];
              vm.totalMoney += vm.betPoint * value.length * (Parameters.Price - Parameters.Payouts) / 10;
            }
            if (msUtils.exists(6, vm.selected)) {
              let Parameters = vm.Parameters.filter(function (pam) {
                return pam.GameType === 0 && pam.BetType === 6;
              })[0];
              vm.totalMoney += vm.betPoint * value.length * (Parameters.Price - Parameters.Payouts) * 4;
            }
          } else if (key === 3) {
            total += vm.betPoint * value.length * vm.selected.filter(function (s) {
              return msUtils.exists(s, [11, 12]);
            }).length;
            [11, 12].map(function (BetType) {
              if (msUtils.exists(BetType, vm.selected)) {
                let Price = vm.Parameters.filter(function (pam) {
                  return pam.GameType === 0 && pam.BetType === BetType;
                })[0].Price;
                vm.totalMoney += vm.betPoint * value.length * Price;
              }
            });
          } else if (key === 4) {
            total += vm.betPoint * value.length * vm.selected.filter(function (s) {
              return msUtils.exists(s, [13, 14]);
            }).length;
            [13, 14].map(function (BetType) {
              if (msUtils.exists(BetType, vm.selected)) {
                let Price = vm.Parameters.filter(function (pam) {
                  return pam.GameType === 0 && pam.BetType === BetType;
                })[0].Price;
                vm.totalMoney += vm.betPoint * value.length * Price;
              }
            });
          }
        }
      }
      vm.toPoint = total;
      return total;
    }
    function resetBetting() {
      vm.viewFull = {2: false, 3: false, 4: false};
      vm.numbers = {2: [], 3: [], 4: []};
      vm.Thousands = [];
      vm.Hundreds = [];
      vm.Dozens = [];
      vm.Units = [];
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
    }
    function submitBetting() {
      let betObj = {};
      betObj.Term = $rootScope.LegendTermName[0];
      betObj.IgnorePrice = true;
      betObj.Tickets = [];
      vm.selected.map(function (betType) {
        let Ticket = {};
        Ticket.GameType = GameType;
        Ticket.BetType = betType;
        Ticket.Items = [];
        let Price = vm.Parameters.filter(function (pam) {
          return pam.GameType === 0 && pam.BetType === betType;
        })[0].Price;
        if (msUtils.exists(betType, [0, 1, 5, 6, 21, 29])) {
          vm.numbers[2].map(function (number) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = Price;
            Number.Point = vm.betPoint;
            Ticket.Items.push(Number);
          });
        } else if (msUtils.exists(betType, [11, 12])) {
          vm.numbers[3].map(function (number) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = Price;
            Number.Point = vm.betPoint;
            Ticket.Items.push(Number);
          });
        } else if (msUtils.exists(betType, [13, 14])) {
          vm.numbers[4].map(function (number) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = Price;
            Number.Point = vm.betPoint;
            Ticket.Items.push(Number);
          });
        }
        if (Ticket.Items.length !== 0 && Ticket.Items.length <= 100) {
          betObj.Tickets.push(Ticket);
        }
      });
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      let numbers = [];
      if (msUtils.exists(0, vm.selected) || msUtils.exists(1, vm.selected) || msUtils.exists(29, vm.selected) || msUtils.exists(5, vm.selected) || msUtils.exists(6, vm.selected) || msUtils.exists(21, vm.selected)) {
        angular.forEach(vm.numbers[2], function (n) {
          numbers.push(n.number);
        });
      }
      if (msUtils.exists(11, vm.selected) || msUtils.exists(12, vm.selected)) {
        angular.forEach(vm.numbers[3], function (n) {
          numbers.push(n.number);
        });
      }
      if (msUtils.exists(13, vm.selected) || msUtils.exists(14, vm.selected)) {
        angular.forEach(vm.numbers[4], function (n) {
          numbers.push(n.number);
        });
      }
      numbers = numbers.toString().replace(/\,+/g, ", ");
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.toPoint, money: vm.totalMoney, numbers: numbers}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = point;
        $scope.costMoney = money;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendaryNorthernPairCtrl", legendaryNorthernPairCtrl);
  function legendaryNorthernPairCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $interval, $mdDialog, $state, $document, msUtils, network, selectBox, GameType) {
    let vm = this;
    vm.getOdds = getOdds;
    vm.buildPriceTable = buildPriceTable;
    vm.resetBetting = resetBetting;
    vm.costMoney = costMoney;
    vm.submitBetting = submitBetting;
    vm.purchaseLimit = purchaseLimit;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.GameType = GameType;
    vm.ignorePrice = true;
    $scope.$mdMedia = $mdMedia;
    vm.selectedCheckbox = [];
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.inputPoint = {2: item.value, 3: item.value, 4: item.value};
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      vm.selected = ns.toString().replace(/\,+/g, ", ");
      return vm.selected;
    }, typing: function (e) {
      if (!vm.keyNumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keyNumber[vm.keyNumber.length - 1] !== ",") {
          vm.keyNumber = vm.keyNumber.substring(0, vm.keyNumber.length - 1);
        }
      }
      var value = vm.keyNumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keyNumber = vm.keyNumber + ",";
      }
    }, submit: function (click) {
      if (!vm.keyNumber) {
        return;
      }
      vm.keyNumber = vm.keyNumber.replace(/\s+/g, "");
      if (vm.keyNumber.length === 0) {
        return;
      }
      let arr = vm.keyNumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (number) {
        if (arrInput.indexOf(number.number) !== -1) {
          if (!number.selected) {
            number.selected = true;
          }
        }
      });
      vm.keyNumber = "";
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
      if (click) {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 100);
      }
    }, checkbox: {exists: function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      var idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(selectBox.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
    }}};
    vm.base = {2: 0, 3: 0, 4: 0};
    if ($rootScope.LegendParameters !== undefined) {
      angular.forEach($rootScope.LegendParameters, function (pr) {
        if (pr.GameType === vm.GameType) {
          if (pr.BetType === 2) {
            vm.base[2] = pr.Price;
          }
          if (pr.BetType === 3) {
            vm.base[3] = pr.Price;
          }
          if (pr.BetType === 4) {
            vm.base[4] = pr.Price;
          }
        }
      });
    }
    vm.pair = {count: {2: 0, 3: 0, 4: 0}, money: {2: 0, 3: 0, 4: 0}, limit: {2: 0, 3: 0, 4: 0}, payout: {2: 0, 3: 0, 4: 0}, point: {2: 0, 3: 0, 4: 0}};
    vm.inputPoint = {2: 0, 3: 0, 4: 0};
    vm.numbers = [];
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      var number = {number: i.toString(), selected: false, base: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, price: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, disabled: {2: false, 3: false, 4: false}};
      vm.numbers.push(number);
    }
    $timeout(function () {
      if ($rootScope.isAuthenticated) {
        vm.purchaseLimit();
      }
    }, 300);
    $scope.$on("oddsPrice::done", function () {
      vm.buildPriceTable();
    });
    function purchaseLimit() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.LegendParameters !== undefined) {
          angular.forEach([2, 3, 4], function (betid) {
            vm.pair.limit[betid] = $rootScope.LegendParameters.filter(function (item) {
              return item.GameType === vm.GameType && item.BetType === betid;
            })[0].MaxPointPerNumber;
            vm.pair.payout[betid] = $rootScope.LegendParameters.filter(function (item) {
              return item.GameType === vm.GameType && item.BetType === betid;
            })[0].Payouts / 1e3;
          });
        } else {
          $timeout(function () {
            vm.purchaseLimit();
          }, 1e3);
        }
      }
    }
    function buildPriceTable() {
      vm.odds = $rootScope.LegendOdds.filter(function (odd) {
        return odd.GameType === vm.GameType && msUtils.exists(odd.BetType, [2, 3, 4]);
      });
      if (vm.odds.length === 0) {
        $timeout(function () {
          vm.getOdds();
        }, 1e3);
        return;
      }
      angular.forEach(vm.odds, function (pr) {
        if (pr.GameType === vm.GameType) {
          if (pr.BetType === 2) {
            vm.base[2] = pr.Price;
          }
          if (pr.BetType === 3) {
            vm.base[3] = pr.Price;
          }
          if (pr.BetType === 4) {
            vm.base[4] = pr.Price;
          }
        }
      });
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          num.base[odd.BetType] = odd.Price;
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              var extPrice = value.ExtraPrice !== undefined ? odd.Price + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
              if (num.price[odd.BetType] !== 0 && num.price[odd.BetType] !== extPrice) {
                num.priceChanged = true;
              }
              num.price[odd.BetType] = extPrice;
            }
          });
        });
      });
      $timeout(function () {
        vm.numbers.map(function (o) {
          return o.priceChanged = false;
        });
      }, 3e3);
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
      vm.keynumber = "";
    }
    function costMoney() {
      vm.toPoint = 0;
      var numberArr, sumMoney;
      angular.forEach([2, 3, 4], function (betId) {
        vm.pair.count[betId] = 0;
        sumMoney = 0;
        numberArr = [];
        angular.forEach(vm.numbers, function (num) {
          if (num.selected) {
            if (!num.disabled[betId]) {
              numberArr.push(num.number);
            }
          }
        });
        vm.pair.count[betId] += numberArr.combinate(betId).length;
        var totalYArr = numberArr.combinate(betId);
        if (totalYArr.length <= 128) {
          angular.forEach(totalYArr, function (pairArr) {
            var pricePerPair = 0;
            angular.forEach(pairArr, function (number) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === number) {
                  pricePerPair += num.price[betId];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pairArr.length);
            sumMoney += pricePerPair;
          });
          vm.pair.money[betId] = sumMoney * vm.inputPoint[betId];
          vm.pair.point[betId] = vm.pair.count[betId] * vm.inputPoint[betId];
          vm.toPoint += vm.pair.count[betId] * vm.inputPoint[betId];
        } else {
          vm.inputPoint[betId] = 0;
        }
      });
      vm.totalMoney = vm.pair.money[2] + vm.pair.money[3] + vm.pair.money[4];
      return vm.totalMoney;
    }
    function submitBetting() {
      var betObj, ticketObj, selectedNumber, pairArrNum, Number;
      betObj = {};
      betObj.Term = $rootScope.LegendTermName[GameType];
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      Object.keys(vm.inputPoint).forEach(function (betId) {
        if (vm.inputPoint[betId] !== 0 && vm.inputPoint[betId] !== null) {
          ticketObj = {GameType: vm.GameType, BetType: parseInt(betId), Items: []};
          selectedNumber = [];
          angular.forEach(vm.numbers, function (number) {
            if (number.selected && !number.disabled[betId]) {
              selectedNumber.push(number.number);
            }
          });
          pairArrNum = selectedNumber.combinate(betId);
          angular.forEach(pairArrNum, function (pair) {
            Number = {};
            Number.Numbers = pair;
            Number.Point = vm.inputPoint[betId];
            var pricePerPair = 0;
            angular.forEach(pair, function (n) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === n) {
                  pricePerPair += num.price[betId];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pair.length);
            Number.Price = pricePerPair;
            ticketObj.Items.push(Number);
          });
          if (ticketObj.Items.length) {
            betObj.Tickets.push(ticketObj);
          }
        }
      });
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.toPoint, money: vm.totalMoney, numbers: vm.selected}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.costMoney = money;
        $scope.Point = point;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function getOdds() {
      $rootScope.$broadcast("GetOdds", {GameType: vm.GameType, BetTypes: [2, 3, 4]});
    }
    $timeout(function () {
      vm.getOdds();
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("LegendNorthLiveCtrl", LegendNorthLiveCtrl);
  function LegendNorthLiveCtrl($rootScope, $scope, $timeout, $interval, $mdMedia, $document, $mdDialog, $stateParams, network, msUtils, message, GameType, collections) {
    let vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.GameType = GameType;
    vm.purchaseLimit = purchaseLimit;
    vm.oddsPrice = oddsPrice;
    vm.buildPriceTable = buildPriceTable;
    vm.build3DTable = build3DTable;
    vm.resetBetting = resetBetting;
    vm.totalPoint = totalPoint;
    vm.submitBetting = submitBetting;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.numbers = [];
    vm.quickChoices = collections.list;
    vm.label3D = GameType === 0 ? "Live 3 Càng" : "Live 3D";
    vm.TabSelected = TabSelected;
    vm.checkPointDisabled = checkPointDisabled;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.sortNumberByStat = sortNumberByStat;
    vm.sortNumbers = sortNumbers;
    vm.getFullResult = getFullResult;
    vm.Seamless = Seamless;
    vm.allowBetting = true;
    vm.selectedCheckbox = [];
    vm.InterfaceCheckbox = [];
    vm.selected3dNumber = [];
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = item.value;
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
      }
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      vm.selected = ns.toString().replace(/\,+/g, ", ");
      return vm.selected;
    }, typing: function (e) {
      if (!vm.keyNumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keyNumber[vm.keyNumber.length - 1] !== ",") {
          vm.keyNumber = vm.keyNumber.substring(0, vm.keyNumber.length - 1);
        }
      }
      var value = vm.keyNumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keyNumber = vm.keyNumber + ",";
      }
    }, submit: function (click) {
      if (!vm.keyNumber) {
        return;
      }
      vm.keyNumber = vm.keyNumber.replace(/\s+/g, "");
      if (vm.keyNumber.length === 0) {
        return;
      }
      var arr = vm.keyNumber.split(",");
      var arrInput = [];
      for (var i = 0; i < arr.length; i++) {
        var number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (number) {
        if (arrInput.indexOf(number.number) !== -1 && !number.disabled) {
          if (!number.selected) {
            number.selected = true;
          }
        }
      });
      vm.keyNumber = "";
      vm.betPoint = 0;
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 100);
      }
    }, typing3d: function (e) {
      if (!vm.keyNumber3D) {
        return;
      }
      if (e.which === 8) {
        if (vm.keyNumber3D[vm.keyNumber3D.length - 1] !== ",") {
          vm.keyNumber3D = vm.keyNumber3D.substring(0, vm.keyNumber3D.length - 1);
        }
      }
      var value = vm.keyNumber3D.split(",");
      if (value[value.length - 1].length > 2) {
        vm.keyNumber3D = vm.keyNumber3D + ",";
      }
    }, submit3D: function (click) {
      if (!vm.keyNumber3D || vm.disabled3D) {
        return;
      }
      vm.keyNumber3D = vm.keyNumber3D.replace(/\s+/g, "");
      if (vm.keyNumber3D.length === 0) {
        return;
      }
      let arr = vm.keyNumber3D.split(",");
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-3).replace(/\s+/g, "");
        if (number.length) {
          number = msUtils.pad(number, 3);
          if (!isNaN(number) && angular.isNumber(+number)) {
            if (number.length !== 0) vm.selected3dNumber.push(number);
          }
        }
      }
      vm.selected3dNumber = msUtils.removeDup(vm.selected3dNumber);
      vm.build3DTable();
      vm.keyNumber3D = "";
      vm.betPoint = 0;
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[1].focus();
        }, 100);
      }
    }, checkbox: {exists: function (parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }, group: function (parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }}, interface: {exists: function (item) {
      return vm.InterfaceCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      let idx = vm.InterfaceCheckbox.indexOf(id);
      if (idx > -1) {
        vm.InterfaceCheckbox.splice(idx, 1);
      } else {
        vm.InterfaceCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.betPoint = 0;
      angular.forEach(vm.numbers, function (number, index) {
        if (!number.disabled) {
          if (id < 10) {
            if (Math.floor(index / 10) === id) {
              number.selected = vm.checked;
            }
          } else {
            if (index % 10 === id % 10) {
              number.selected = vm.checked;
            }
          }
        }
      });
    }}};
    vm.defaultTab = $stateParams.tab === "3d" ? 1 : 0;
    function checkPointDisabled() {
      if (vm.onTabSelected === 0) {
        return vm.numbers.filter(function (n) {
          return n.selected;
        }).length === 0;
      } else if (vm.onTabSelected === 1) {
        return vm.selected3dNumber.length === 0;
      }
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: 0, point: 0});
    }
    $timeout(function () {
      vm.oddsPrice();
      vm.getFullResult();
    }, 300);
    function purchaseLimit() {
      let BetType;
      if (GameType === 0) {
        BetType = vm.onTabSelected === 0 ? 20 : 26;
      } else {
        BetType = vm.onTabSelected === 0 ? 27 : 28;
      }
      if ($rootScope.LegendParameters !== undefined) {
        vm.currentPayouts = $rootScope.LegendParameters.filter(function (item) {
          return item.GameType === GameType && item.BetType === BetType;
        })[0].Payouts;
      }
    }
    function oddsPrice() {
      let BetTypes = GameType === 0 ? [20, 26] : [27, 28];
      if ($rootScope.isAuthenticated) {
        if ($rootScope.LegendCurrentTerm !== undefined) {
          network.Legend.getLiveOdds({Term: $rootScope.LegendTermName[GameType], GameType: GameType, BetTypes: BetTypes}).then(function (resp) {
            vm.odds = resp;
            vm.TabSelected();
          });
        } else {
          $timeout(function () {
            vm.oddsPrice();
          }, 1e3);
        }
      } else {
        network.Public.Legend.getLiveOdds({GameType: 0, BetTypes: BetTypes}).then(function (resp) {
          vm.odds = resp;
          vm.TabSelected();
        });
      }
    }
    function TabSelected(i, ws) {
      i = i === undefined ? vm.onTabSelected : i;
      vm.onTabSelected = i;
      vm.resetBetting(ws);
      if (vm.odds === undefined) {
        return;
      }
      let bet;
      if (i === 0 || i === 1) {
        if (GameType === 0) {
          bet = i === 0 ? 20 : 26;
        } else {
          bet = i === 0 ? 27 : 28;
        }
        vm.currentOdd = vm.odds.filter(function (o) {
          return o.BetType === bet;
        })[0];
        vm.allowBetting = vm.currentOdd.Active;
        vm.basePrice = vm.currentOdd.Price;
        vm.PrizeNr = vm.currentOdd.PrizeNr;
        vm.currentPayouts = vm.currentOdd.Payouts;
        if (GameType === 1) {
          vm.basePrice = vm.basePrice * vm.PrizeNr;
        }
        vm.PrizeNr = bet === 26 ? vm.PrizeNr - 4 : vm.PrizeNr;
        if (bet === 28 && vm.PrizeNr === 18) {
          vm.PrizeNr = 17;
        }
        vm.PrizeNr = vm.PrizeNr < 1 ? 0 : vm.PrizeNr;
        vm.disabled3D = vm.PrizeNr <= 1;
      }
      if (i === 0) {
        vm.buildPriceTable();
      }
      if (GameType === 1) {
        $timeout(function () {
          vm.purchaseLimit();
        }, 1e3);
      }
    }
    function buildPriceTable() {
      if (vm.clearPriceChange) {
        clearTimeout(vm.clearPriceChange);
      }
      vm.numbers.map(function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.currentOdd.Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      vm.clearPriceChange = $timeout(function () {
        vm.numbers.map(function (item) {
          item.priceChanged = false;
        });
      }, 3e3);
    }
    function build3DTable() {
      vm.number3Ds = [];
      angular.forEach(vm.selected3dNumber, function (n) {
        let exNum = $.grep(vm.currentOdd.Numbers, function (f) {
          return f.Number === n;
        });
        if (exNum.length && exNum[0].Stop) {
          vm.number3Ds.push({number: n, disabled: true});
        } else {
          vm.number3Ds.push({number: n});
        }
      });
    }
    $scope.$on("legend::stop-number-changed", function ($event, data) {
      if (vm.currentOdd === undefined) {
        return;
      }
      angular.forEach(data, function (item) {
        if (0 === item.GameType && 20 === item.BetType) {
          let findNumber = $.grep(vm.currentOdd.Numbers, function (n) {
            return n.Number === item.Number;
          });
          if (findNumber.length) {
            findNumber[0].Stop = item.Stop;
          } else {
            vm.currentOdd.Numbers.push({Number: item.Number, Stop: item.Stop});
          }
        }
      });
      vm.buildPriceTable();
    });
    $scope.$on("live-legend:event:prize-closed", function ($event, data) {
      vm.priceChanged = true;
      $timeout(function () {
        vm.priceChanged = false;
      }, 3e3);
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.LegendTermName[GameType]) {
        if (data.GameType === 1) {
          vm.odds.map(function (o) {
            o.PrizeNr = data.PrizeNr;
            if (data.PrizeNr === 1) {
              o.Active = false;
            }
          });
        } else {
          vm.odds.map(function (o) {
            o.PrizeNr = data.PrizeNr;
            if (data.PrizeNr === 1) {
              o.Active = false;
            }
            o.Payouts = data.Payouts.filter(function (p) {
              return p.BetType === o.BetType;
            })[0].Payouts;
          });
        }
        vm.TabSelected(undefined, true);
      }
    });
    $scope.$on("live-legend:event:game-opening", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.LegendTermName[GameType] && data.GameType === GameType) {
        vm.odds.map(function (o) {
          o.Active = true;
          o.PrizeNr = data.PrizeNr;
          if (data.GameType === 0) {
            o.Payouts = data.Payouts.filter(function (p) {
              return p.BetType === o.BetType;
            })[0].Payouts;
          }
        });
        vm.TabSelected();
      }
    });
    $scope.$on("live-legend:event:game-closed", function ($event, data) {
      if (vm.odds === undefined) {
        return;
      }
      if (data.Term === $rootScope.LegendTermName[GameType] && data.GameType === GameType) {
        vm.odds.map(function (o) {
          o.Active = false;
          o.PrizeNr = data.PrizeNr;
        });
        if (data.GameType === 0) {
          vm.odds.map(function (o) {
            o.Payouts = data.Payouts.filter(function (p) {
              return p.BetType === o.BetType;
            })[0].Payouts;
          });
        }
        vm.TabSelected();
      }
    });
    function resetBetting(ws) {
      if (!ws) {
        vm.numbers.map(function (number) {
          number.selected = false;
          number.point = 0;
          vm.betPoint = 0;
        });
      }
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
      vm.selected3dNumber = [];
      vm.number3Ds = [];
      vm.selectedCheckbox = [];
      vm.InterfaceCheckbox = [];
      vm.keyNumber = "";
      vm.keyNumber3D = "";
    }
    function totalPoint() {
      let total = 0, oddNumbers;
      vm.totalMoney = 0;
      vm.toPoint = 0;
      if (vm.onTabSelected === 0) {
        angular.forEach(vm.numbers, function (num) {
          total += !num.disabled && num.selected ? vm.betPoint : 0;
          if (vm.currentOdd && num.selected) {
            oddNumbers = $.grep(vm.currentOdd.Numbers, function (n) {
              return n.Number === num.number;
            });
            if (oddNumbers.length && !oddNumbers[0].Stop && oddNumbers[0].ExtraPrice !== 0) {
              vm.totalMoney += vm.betPoint * (vm.basePrice + oddNumbers[0].ExtraPrice);
            } else {
              vm.totalMoney += vm.betPoint * vm.basePrice;
            }
          }
        });
      } else if (vm.onTabSelected === 1) {
        angular.forEach(vm.number3Ds, function (n) {
          if (!n.disabled) {
            total += vm.betPoint;
            vm.totalMoney += vm.betPoint * vm.basePrice;
          }
        });
      }
      vm.toPoint = total;
      return total;
    }
    function submitBetting() {
      let betObj = {}, betType;
      if (GameType === 0) {
        betType = vm.onTabSelected === 0 ? 20 : 26;
      } else {
        betType = vm.onTabSelected === 0 ? 27 : 28;
      }
      betObj.Term = $rootScope.LegendTermName[GameType];
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{GameType: GameType, BetType: betType, Items: []}];
      if (vm.onTabSelected === 0) {
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled) {
            var Number = {};
            Number.Numbers = [number.number];
            Number.Point = vm.betPoint;
            Number.Price = number.price;
            betObj.Tickets[0].Items.push(Number);
          }
        });
      } else {
        angular.forEach(vm.number3Ds, function (number) {
          if (!number.disabled) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Point = vm.betPoint;
            Number.Price = vm.basePrice;
            betObj.Tickets[0].Items.push(Number);
          }
        });
      }
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      let numbers;
      if (vm.onTabSelected === 0) {
        numbers = vm.selected;
      } else {
        numbers = [];
        angular.forEach(vm.number3Ds, function (n) {
          numbers.push(n.number);
        });
        numbers = numbers.toString().replace(/\,+/g, ", ");
      }
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.toPoint, money: vm.totalMoney, numbers: numbers}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = point;
        $scope.costMoney = money;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    $timeout(function () {
      $rootScope.$broadcast("getMissing", {GameType: GameType, StatsType: 2});
    });
    $scope.$on("getMissing::done", function () {
      vm.missingNumbers = [];
      let findByGame = $rootScope.missNumbers.filter(function (game) {
        return game.GameType === GameType;
      });
      if (findByGame.length) {
        let findByStats = findByGame[0].missNumbers.filter(function (item) {
          return item.StatsType === 2;
        });
        if (findByStats.length) {
          vm.missingNumbers = findByStats[0].Data;
        }
        if (vm.missingNumbers.length) {
          vm.sortNumberByStat();
        }
      }
    });
    vm.sortType = 0;
    function sortNumberByStat() {
      let totalTimes = 0;
      vm.missingNumbers.map(function (item) {
        totalTimes += item.TimesDrawn;
      });
      vm.numbers.map(function (number) {
        let findMiss = vm.missingNumbers.filter(function (item) {
          return item.Number === number.number;
        });
        if (findMiss.length) {
          number.TimesMissing = findMiss[0].TimesMissing;
          number.AvgTimesMissing = findMiss[0].AvgTimesMissing;
          number.LastTimesMissing = findMiss[0].LastTimesMissing;
          number.Frequency = (findMiss[0].TimesDrawn / totalTimes * 100).toFixed(2);
          number.high = findMiss[0].high;
          vm.sortReady = true;
          vm.sortNumbers(vm.sortType);
          $timeout(function () {
            $scope.$digest();
          }, 100);
        }
      });
    }
    function sortNumbers(type) {
      vm.selectedCheckbox = [];
      vm.InterfaceCheckbox = [];
      vm.sortType = type;
      if (vm.sortType === 0) {
        vm.numbers.sort(function (a, b) {
          return a.number - b.number;
        });
      } else if (vm.sortType === 1) {
        vm.numbers.sort(function (a, b) {
          return b.TimesMissing - a.TimesMissing || a.AvgTimesMissing - b.AvgTimesMissing;
        });
      } else {
        vm.numbers.sort(function (a, b) {
          return b.Frequency - a.Frequency;
        });
      }
    }
    $scope.$on("highlight::number", function ($event, data) {
      vm.numbers.map(function (item) {
        item.priceChanged = item.number === data;
      });
      $timeout(function () {
        $scope.$digest();
      }, 100);
      vm.clearPriceChange = $timeout(function () {
        vm.numbers.map(function (item) {
          item.priceChanged = false;
        });
      }, 5e3);
    });
    function getFullResult(call) {
      Lotus.Lottery789.LotteryResult.getLatestResults({GameType: 0}).then(function (response) {
        $rootScope.theResults = response;
        $rootScope.needUpdateResult = false;
        vm.updatingResult = false;
        if (call) {
          $timeout(function () {
            vm.Seamless();
          }, 100);
        }
      });
    }
    function Seamless(ev) {
      if ($rootScope.needUpdateResult) {
        vm.updatingResult = true;
        vm.getFullResult(true);
        return;
      }
      $mdDialog.show({controller: seamlessCtrl, templateUrl: "app/main/legendary/seamless.dialog.html", parent: angular.element(document.body), targetEvent: ev, fullscreen: true, clickOutsideToClose: true, locals: {result: $rootScope.theResults}}).then(function (answer) {
        vm.numbers.map(function (number) {
          if (msUtils.exists(number.number, answer) && !number.disabled) {
            number.selected = true;
          }
        });
      }, function () {});
      function seamlessCtrl($scope, $mdDialog, result) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.confirm = function () {
          $mdDialog.hide($scope.chooseNumbers);
        };
        $scope.chooseNumbers = [];
        $scope.Reverse = true;
        $scope.maxTimes = 5;
        $scope.maxTimesArray = [3, 4, 5, 6, 7, 8, 9, 10];
        $scope.Frequency = 1;
        $scope.FrequencyArray = [1, 2, 3];
        $scope.setMaxTimes = function (item) {
          $scope.maxTimes = item;
          $scope.changeMaxTimes();
        };
        $scope.setFrequency = function (item) {
          $scope.Frequency = item;
          $scope.buildSeamless();
        };
        $scope.changeReverse = function (cond) {
          $scope.Reverse = cond;
          $timeout(function () {
            $scope.buildSeamless();
          }, 300);
        };
        $scope.changeMaxTimes = function () {
          $scope.SeamlessViews = [];
          $scope.SeamlessResultFiltered = $scope.SeamlessResult.filter(function (item) {
            return item.Times === $scope.maxTimes;
          });
          $scope.SeamlessResultFiltered.map(function (item) {
            if ($scope.SeamlessResult.filter(function (r) {
              return r.Times > $scope.maxTimes && item.Index === r.Index;
            }).length) {
              item.hasMore = true;
            }
          });
          $scope.SeamlessResultFiltered.sort(function (a, b) {
            return a.Number - b.Number;
          });
          $timeout(function () {
            $scope.buildView();
          }, 100);
        };
        $scope.buildView = function (index) {
          index = index === undefined ? 0 : index;
          for (let i = 0; i < 300; i++) {
            if ($scope.SeamlessResultFiltered[index + i] !== undefined) {
              $scope.SeamlessViews.push($scope.SeamlessResultFiltered[index + i]);
            }
          }
          index += 300;
          if (index < $scope.SeamlessResultFiltered.length) {
            $timeout(function () {
              $scope.buildView(index);
            }, 100);
          }
        };
        $scope.buildSeamless = function () {
          $scope.SeamlessResult = Lotus.Lottery789.ResultStats.SeamlessResult.lookupNorthernResult({LotteryResults: result, AllowedReverseResult: $scope.Reverse, WinNumberFrequence: $scope.Frequency, Type: 1});
          $scope.changeMaxTimes();
        };
        $scope.chooseBet = function (item) {
          $timeout(function () {
            $scope.chooseNumbers.push(item.Number);
            $scope.chooseNumbers = $scope.chooseNumbers.filter(function (item, index, inputArray) {
              return inputArray.indexOf(item) === index;
            });
          }, 200);
        };
        $scope.chooseClear = function (item) {
          $timeout(function () {
            $scope.chooseNumbers = $scope.chooseNumbers.filter(function (nr) {
              return nr !== item.Number;
            });
          }, 200);
        };
        $scope.chooseView = function (item) {
          $mdDialog.show({controller: seamlessFullCtrl, templateUrl: "app/main/legendary/seamless.full.dialog.html", parent: angular.element(document.body), targetEvent: ev, multiple: true, fullscreen: true, clickOutsideToClose: true, locals: {result: result, item: item, Reverse: $scope.Reverse}});
        };
        $scope.exitsSelected = function (item) {
          return msUtils.exists(item.Number, $scope.chooseNumbers);
        };
        $timeout(function () {
          $scope.buildSeamless();
        }, 300);
      }
      function seamlessFullCtrl($scope, result, item, Reverse) {
        $scope.viewNumber = item;
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.sliceResults = result.filter(function (re, index) {
          return index <= item.Times;
        }).reverse();
        $scope.resultCalculated = [];
        let matchLotto;
        $scope.sliceResults.map(function (result) {
          let dataCalculated = getByPosition(item, result, matchLotto, Reverse);
          matchLotto = dataCalculated.lotto;
          dataCalculated.Term = result.Term;
          dataCalculated.DrawResultAt = result.DrawResultAt;
          $scope.resultCalculated.push(dataCalculated);
        });
        $scope.resultCalculated = $scope.resultCalculated.reverse();
      }
    }
    function getByPosition(itemNumber, Result, matchLotto, Reverse) {
      let numbers;
      if (matchLotto === undefined) {
        numbers = [];
      } else {
        numbers = Reverse ? msUtils.permNumber(matchLotto) : [matchLotto];
      }
      let Lotto = "";
      let fullString = [];
      fullString = fullString.concat(sToa(Result.Jackpot)).concat(sToa(Result.First)).concat(sToa(Result.Second[0])).concat(sToa(Result.Second[1])).concat(sToa(Result.Third[0])).concat(sToa(Result.Third[1])).concat(sToa(Result.Third[2])).concat(sToa(Result.Third[3])).concat(sToa(Result.Third[4])).concat(sToa(Result.Third[5])).concat(sToa(Result.Fourth[0])).concat(sToa(Result.Fourth[1])).concat(sToa(Result.Fourth[2])).concat(sToa(Result.Fourth[3])).concat(sToa(Result.Fiveth[0])).concat(sToa(Result.Fiveth[1])).concat(sToa(Result.Fiveth[2])).concat(sToa(Result.Fiveth[3])).concat(sToa(Result.Fiveth[4])).concat(sToa(Result.Fiveth[5])).concat(sToa(Result.Sixth[0])).concat(sToa(Result.Sixth[1])).concat(sToa(Result.Sixth[2])).concat(sToa(Result.Seventh[0])).concat(sToa(Result.Seventh[1])).concat(sToa(Result.Seventh[2])).concat(sToa(Result.Seventh[3]));
      fullString.map(function (item, i) {
        if (i === itemNumber.Index[0] || i === itemNumber.Index[1]) {
          item.position = true;
        }
      });
      Lotto = fullString[itemNumber.Index[0]].number.toString() + fullString[itemNumber.Index[1]].number.toString();
      if (msUtils.exists(fullString[3].number.toString() + fullString[4].number.toString(), numbers)) {
        fullString[3].match = true;
        fullString[4].match = true;
      }
      if (msUtils.exists(fullString[8].number.toString() + fullString[9].number.toString(), numbers)) {
        fullString[8].match = true;
        fullString[9].match = true;
      }
      if (msUtils.exists(fullString[13].number.toString() + fullString[14].number.toString(), numbers)) {
        fullString[13].match = true;
        fullString[14].match = true;
      }
      if (msUtils.exists(fullString[18].number.toString() + fullString[19].number.toString(), numbers)) {
        fullString[18].match = true;
        fullString[19].match = true;
      }
      if (msUtils.exists(fullString[23].number.toString() + fullString[24].number.toString(), numbers)) {
        fullString[23].match = true;
        fullString[24].match = true;
      }
      if (msUtils.exists(fullString[28].number.toString() + fullString[29].number.toString(), numbers)) {
        fullString[28].match = true;
        fullString[29].match = true;
      }
      if (msUtils.exists(fullString[33].number.toString() + fullString[34].number.toString(), numbers)) {
        fullString[33].match = true;
        fullString[34].match = true;
      }
      if (msUtils.exists(fullString[38].number.toString() + fullString[39].number.toString(), numbers)) {
        fullString[38].match = true;
        fullString[39].match = true;
      }
      if (msUtils.exists(fullString[43].number.toString() + fullString[44].number.toString(), numbers)) {
        fullString[43].match = true;
        fullString[44].match = true;
      }
      if (msUtils.exists(fullString[48].number.toString() + fullString[49].number.toString(), numbers)) {
        fullString[48].match = true;
        fullString[49].match = true;
      }
      if (msUtils.exists(fullString[52].number.toString() + fullString[53].number.toString(), numbers)) {
        fullString[52].match = true;
        fullString[53].match = true;
      }
      if (msUtils.exists(fullString[56].number.toString() + fullString[57].number.toString(), numbers)) {
        fullString[56].match = true;
        fullString[57].match = true;
      }
      if (msUtils.exists(fullString[60].number.toString() + fullString[61].number.toString(), numbers)) {
        fullString[60].match = true;
        fullString[61].match = true;
      }
      if (msUtils.exists(fullString[64].number.toString() + fullString[65].number.toString(), numbers)) {
        fullString[64].match = true;
        fullString[65].match = true;
      }
      if (msUtils.exists(fullString[68].number.toString() + fullString[69].number.toString(), numbers)) {
        fullString[68].match = true;
        fullString[69].match = true;
      }
      if (msUtils.exists(fullString[72].number.toString() + fullString[73].number.toString(), numbers)) {
        fullString[72].match = true;
        fullString[73].match = true;
      }
      if (msUtils.exists(fullString[76].number.toString() + fullString[77].number.toString(), numbers)) {
        fullString[76].match = true;
        fullString[77].match = true;
      }
      if (msUtils.exists(fullString[80].number.toString() + fullString[81].number.toString(), numbers)) {
        fullString[80].match = true;
        fullString[81].match = true;
      }
      if (msUtils.exists(fullString[84].number.toString() + fullString[85].number.toString(), numbers)) {
        fullString[84].match = true;
        fullString[85].match = true;
      }
      if (msUtils.exists(fullString[88].number.toString() + fullString[89].number.toString(), numbers)) {
        fullString[88].match = true;
        fullString[89].match = true;
      }
      if (msUtils.exists(fullString[91].number.toString() + fullString[92].number.toString(), numbers)) {
        fullString[91].match = true;
        fullString[92].match = true;
      }
      if (msUtils.exists(fullString[94].number.toString() + fullString[95].number.toString(), numbers)) {
        fullString[94].match = true;
        fullString[95].match = true;
      }
      if (msUtils.exists(fullString[97].number.toString() + fullString[98].number.toString(), numbers)) {
        fullString[97].match = true;
        fullString[98].match = true;
      }
      if (msUtils.exists(fullString[99].number.toString() + fullString[100].number.toString(), numbers)) {
        fullString[99].match = true;
        fullString[100].match = true;
      }
      if (msUtils.exists(fullString[101].number.toString() + fullString[102].number.toString(), numbers)) {
        fullString[101].match = true;
        fullString[102].match = true;
      }
      if (msUtils.exists(fullString[103].number.toString() + fullString[104].number.toString(), numbers)) {
        fullString[103].match = true;
        fullString[104].match = true;
      }
      if (msUtils.exists(fullString[105].number.toString() + fullString[106].number.toString(), numbers)) {
        fullString[105].match = true;
        fullString[106].match = true;
      }
      return {data: fullString, lotto: Lotto};
    }
    function sToa(string) {
      let output = [];
      string.split("").map(function (item) {
        output.push({number: item});
      });
      return output;
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendaryGeneralCtrl", legendaryGeneralCtrl);
  function legendaryGeneralCtrl($rootScope, $scope, $mdMedia, $timeout, $mdDialog, $document, message, collections, config, msUtils) {
    let vm = this;
    vm.config = config;
    vm.ignorePrice = true;
    vm.quickChoices = collections.list;
    vm.getOdds = getOdds;
    vm.buildPriceTable = buildPriceTable;
    vm.purchaseLimit = purchaseLimit;
    vm.totalPoint = totalPoint;
    vm.submitBetting = submitBetting;
    vm.resetBetting = resetBetting;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.sortNumberByStat = sortNumberByStat;
    vm.sortNumbers = sortNumbers;
    vm.showHelp = showHelp;
    vm.getFullResult = getFullResult;
    vm.Seamless = Seamless;
    vm.warnPriceChanges = [];
    vm.selectedCheckbox = [];
    vm.InterfaceCheckbox = [];
    vm.numbers = [];
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = item.value;
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
      }
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      vm.selected = ns.toString().replace(/\,+/g, ", ");
      return vm.selected;
    }, typing: function (e) {
      if (!vm.keyNumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keyNumber[vm.keyNumber.length - 1] !== ",") {
          vm.keyNumber = vm.keyNumber.substring(0, vm.keyNumber.length - 1);
        }
      }
      let value = vm.keyNumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keyNumber = vm.keyNumber + ",";
      }
    }, submit: function (click) {
      if (!vm.keyNumber) {
        return;
      }
      vm.keyNumber = vm.keyNumber.replace(/\s+/g, "");
      if (vm.keyNumber.length === 0) {
        return;
      }
      let arr = vm.keyNumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (number) {
        if (arrInput.indexOf(number.number) !== -1 && !number.disabled) {
          if (!number.selected) {
            number.selected = true;
          }
        }
      });
      vm.keyNumber = "";
      vm.betPoint = 0;
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 100);
      }
    }, checkbox: {exists: function (parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }, group: function (parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }}, interface: {exists: function (item) {
      return vm.InterfaceCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      let idx = vm.InterfaceCheckbox.indexOf(id);
      if (idx > -1) {
        vm.InterfaceCheckbox.splice(idx, 1);
      } else {
        vm.InterfaceCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.betPoint = 0;
      angular.forEach(vm.numbers, function (number, index) {
        if (!number.disabled) {
          if (id < 10) {
            if (Math.floor(index / 10) === id) {
              number.selected = vm.checked;
            }
          } else {
            if (index % 10 === id % 10) {
              number.selected = vm.checked;
            }
          }
        }
      });
    }}};
    vm.basePrice = 0;
    if ($rootScope.LegendParameters !== undefined) {
      vm.basePrice = $rootScope.LegendParameters.filter(function (pr) {
        return pr.GameType === config.GameType && pr.BetType === config.BetType;
      })[0].Price;
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: vm.basePrice});
    }
    function purchaseLimit() {
      if ($rootScope.LegendParameters !== undefined) {
        vm.Payouts = $rootScope.LegendParameters.filter(function (item) {
          return item.GameType === config.GameType && item.BetType === config.BetType;
        })[0].Payouts;
      }
    }
    $scope.$on("oddsPrice::done", function () {
      vm.purchaseLimit();
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.LegendOdds.filter(function (odd) {
        return odd.GameType === config.GameType && odd.BetType === config.BetType;
      });
      if (vm.odds.length === 0) {
        $timeout(function () {
          vm.getOdds();
        }, 1e3);
        return;
      }
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        var exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        vm.numbers.map(function (o) {
          return o.priceChanged = false;
        });
      }, 3e3);
    }
    function totalPoint() {
      let total = 0, oddNumbers;
      vm.totalMoney = 0;
      vm.toPoint = 0;
      angular.forEach(vm.numbers, function (num) {
        total += !num.disabled && num.selected ? vm.betPoint : 0;
        if (vm.odds && num.selected) {
          oddNumbers = $.grep(vm.odds[0].Numbers, function (n) {
            return n.Number === num.number;
          });
          if (oddNumbers.length && !oddNumbers[0].stop && oddNumbers[0].ExtraPrice !== 0) {
            vm.totalMoney += vm.betPoint * (vm.basePrice + oddNumbers[0].ExtraPrice) * config.BetTimes;
          } else {
            vm.totalMoney += vm.betPoint * vm.basePrice * config.BetTimes;
          }
        }
      });
      vm.toPoint = total;
      return total;
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        vm.betPoint = 0;
      });
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
      vm.selectedCheckbox = [];
      vm.InterfaceCheckbox = [];
      vm.keynumber = "";
      vm.arrayTemporary = [];
      vm.warnPriceChanges = [];
    }
    function submitBetting() {
      let betObj = {};
      betObj.Term = $rootScope.LegendTermName[config.GameType];
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{GameType: config.GameType, BetType: config.BetType, Items: []}];
      angular.forEach(vm.numbers, function (number) {
        if (number.selected && !number.disabled) {
          var Number = {};
          Number.Numbers = [number.number];
          Number.Point = vm.betPoint;
          Number.Price = number.price;
          betObj.Tickets[0].Items.push(Number);
        }
      });
      if (vm.warnPriceChanges.length && !vm.ignorePrice) {
        $mdDialog.show({clickOutsideToClose: false, escapeToClose: false, controllerAs: "ctrl", templateUrl: "app/main/traditional/betting/prompt.dialog.html", controller: warnPriceChangesCtrl});
        function warnPriceChangesCtrl($scope, $mdDialog) {
          $scope.warnPriceChanges = vm.warnPriceChanges;
          $scope.cancel = function () {
            $mdDialog.hide();
            vm.resetBetting();
          };
          $scope.continuous = function () {
            vm.warnPriceChanges.length = 0;
            vm.submitBetting();
          };
        }
      } else {
        let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
        if (!$rootScope.isAuthenticated) {
          always = true;
        }
        if (always) {
          vm.sendBettingRequest(betObj);
        } else {
          vm.commitBetting(betObj);
        }
      }
    }
    function commitBetting(betObj) {
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.toPoint, money: vm.totalMoney, numbers: vm.selected}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = point;
        $scope.costMoney = money;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    function getOdds() {
      $rootScope.$broadcast("GetOdds", {GameType: config.GameType, BetTypes: [config.BetType]});
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        $scope.$digest();
        e.preventDefault();
      }
    });
    $timeout(function () {
      vm.getOdds();
      if (msUtils.exists(config.BetType, [0, 1, 21, 29])) {
        $rootScope.$broadcast("getMissing", {GameType: config.GameType, StatsType: config.StatsType});
      }
      if ($rootScope.theResults === undefined) {
        vm.getFullResult();
      }
    });
    $scope.$on("getMissing::done", function () {
      vm.missingNumbers = [];
      let findByGame = $rootScope.missNumbers.filter(function (game) {
        return game.GameType === config.GameType;
      });
      if (findByGame.length) {
        let findByStats = findByGame[0].missNumbers.filter(function (item) {
          return item.StatsType === config.StatsType;
        });
        if (findByStats.length) {
          vm.missingNumbers = findByStats[0].Data;
        }
        if (vm.missingNumbers.length) {
          vm.sortNumberByStat();
        }
      }
    });
    vm.sortType = 0;
    function sortNumberByStat() {
      let totalTimes = 0;
      vm.missingNumbers.map(function (item) {
        totalTimes += item.TimesDrawn;
      });
      vm.numbers.map(function (number) {
        let findMiss = vm.missingNumbers.filter(function (item) {
          return item.Number === number.number;
        });
        if (findMiss.length) {
          number.TimesMissing = findMiss[0].TimesMissing;
          number.AvgTimesMissing = findMiss[0].AvgTimesMissing;
          number.LastTimesMissing = findMiss[0].LastTimesMissing;
          number.Frequency = (findMiss[0].TimesDrawn / totalTimes * 100).toFixed(2);
          number.high = findMiss[0].high;
          vm.sortReady = true;
          vm.sortNumbers(vm.sortType);
          $timeout(function () {
            $scope.$digest();
          }, 100);
        }
      });
    }
    function sortNumbers(type) {
      vm.selectedCheckbox = [];
      vm.InterfaceCheckbox = [];
      vm.sortType = type;
      if (vm.sortType === 0) {
        vm.numbers.sort(function (a, b) {
          return a.number - b.number;
        });
      } else if (vm.sortType === 1) {
        vm.numbers.sort(function (a, b) {
          return b.TimesMissing - a.TimesMissing || a.AvgTimesMissing - b.AvgTimesMissing;
        });
      } else {
        vm.numbers.sort(function (a, b) {
          return b.Frequency - a.Frequency;
        });
      }
    }
    function showHelp(ev) {
      $mdDialog.show({controller: missingHelpCtrl, templateUrl: "app/main/legendary/missing.help.dialog.html", targetEvent: ev, clickOutsideToClose: true});
      function missingHelpCtrl($scope, $mdDialog) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
      }
    }
    function getFullResult(call) {
      Lotus.Lottery789.LotteryResult.getLatestResults({GameType: 0}).then(function (response) {
        $rootScope.theResults = response;
        $rootScope.needUpdateResult = false;
        vm.updatingResult = false;
        if (call) {
          $timeout(function () {
            vm.Seamless();
          }, 100);
        }
      });
    }
    function Seamless(ev) {
      if ($rootScope.needUpdateResult) {
        vm.updatingResult = true;
        vm.getFullResult(true);
        return;
      }
      $mdDialog.show({controller: seamlessCtrl, templateUrl: "app/main/legendary/seamless.dialog.html", parent: angular.element(document.body), targetEvent: ev, fullscreen: true, clickOutsideToClose: true, locals: {result: $rootScope.theResults}}).then(function (answer) {
        vm.numbers.map(function (number) {
          if (msUtils.exists(number.number, answer) && !number.disabled) {
            number.selected = true;
          }
        });
      }, function () {});
      function seamlessCtrl($scope, $mdDialog, result) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.confirm = function () {
          $mdDialog.hide($scope.chooseNumbers);
        };
        $scope.chooseNumbers = [];
        $scope.Reverse = true;
        $scope.maxTimes = 5;
        $scope.maxTimesArray = [3, 4, 5, 6, 7, 8, 9, 10];
        $scope.Frequency = 1;
        $scope.FrequencyArray = [1, 2, 3];
        $scope.setMaxTimes = function (item) {
          $scope.maxTimes = item;
          $scope.changeMaxTimes();
        };
        $scope.setFrequency = function (item) {
          $scope.Frequency = item;
          $scope.buildSeamless();
        };
        $scope.changeReverse = function (cond) {
          $scope.Reverse = cond;
          $timeout(function () {
            $scope.buildSeamless();
          }, 300);
        };
        $scope.changeMaxTimes = function () {
          $scope.SeamlessViews = [];
          $scope.SeamlessResultFiltered = $scope.SeamlessResult.filter(function (item) {
            return item.Times === $scope.maxTimes;
          });
          $scope.SeamlessResultFiltered.map(function (item) {
            if ($scope.SeamlessResult.filter(function (r) {
              return r.Times > $scope.maxTimes && item.Index === r.Index;
            }).length) {
              item.hasMore = true;
            }
          });
          $scope.SeamlessResultFiltered.sort(function (a, b) {
            return a.Number - b.Number;
          });
          $timeout(function () {
            $scope.buildView();
          }, 100);
        };
        $scope.buildView = function (index) {
          index = index === undefined ? 0 : index;
          for (let i = 0; i < 300; i++) {
            if ($scope.SeamlessResultFiltered[index + i] !== undefined) {
              $scope.SeamlessViews.push($scope.SeamlessResultFiltered[index + i]);
            }
          }
          index += 300;
          if (index < $scope.SeamlessResultFiltered.length) {
            $timeout(function () {
              $scope.buildView(index);
            }, 100);
          }
        };
        $scope.buildSeamless = function () {
          $scope.SeamlessResult = Lotus.Lottery789.ResultStats.SeamlessResult.lookupNorthernResult({LotteryResults: result, AllowedReverseResult: $scope.Reverse, WinNumberFrequence: $scope.Frequency, Type: vm.config.BetType === 1 ? 1 : -1});
          $scope.changeMaxTimes();
        };
        $scope.chooseBet = function (item) {
          $timeout(function () {
            $scope.chooseNumbers.push(item.Number);
            $scope.chooseNumbers = $scope.chooseNumbers.filter(function (item, index, inputArray) {
              return inputArray.indexOf(item) === index;
            });
          }, 200);
        };
        $scope.chooseClear = function (item) {
          $timeout(function () {
            $scope.chooseNumbers = $scope.chooseNumbers.filter(function (nr) {
              return nr !== item.Number;
            });
          }, 200);
        };
        $scope.chooseView = function (item) {
          $mdDialog.show({controller: seamlessFullCtrl, templateUrl: "app/main/legendary/seamless.full.dialog.html", parent: angular.element(document.body), targetEvent: ev, multiple: true, fullscreen: true, clickOutsideToClose: true, locals: {result: result, item: item, Reverse: $scope.Reverse}});
        };
        $scope.exitsSelected = function (item) {
          return msUtils.exists(item.Number, $scope.chooseNumbers);
        };
        $timeout(function () {
          $scope.buildSeamless();
        }, 300);
      }
      function seamlessFullCtrl($scope, result, item, Reverse) {
        $scope.viewNumber = item;
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.sliceResults = result.filter(function (re, index) {
          return index <= item.Times;
        }).reverse();
        $scope.resultCalculated = [];
        let matchLotto;
        $scope.sliceResults.map(function (result) {
          let dataCalculated = getByPosition(item, result, matchLotto, Reverse);
          matchLotto = dataCalculated.lotto;
          dataCalculated.Term = result.Term;
          dataCalculated.DrawResultAt = result.DrawResultAt;
          $scope.resultCalculated.push(dataCalculated);
        });
        $scope.resultCalculated = $scope.resultCalculated.reverse();
      }
    }
    function getByPosition(itemNumber, Result, matchLotto, Reverse) {
      let numbers;
      if (matchLotto === undefined) {
        numbers = [];
      } else {
        numbers = Reverse ? msUtils.permNumber(matchLotto) : [matchLotto];
      }
      let Lotto = "";
      let fullString = [];
      fullString = fullString.concat(sToa(Result.Jackpot)).concat(sToa(Result.First)).concat(sToa(Result.Second[0])).concat(sToa(Result.Second[1])).concat(sToa(Result.Third[0])).concat(sToa(Result.Third[1])).concat(sToa(Result.Third[2])).concat(sToa(Result.Third[3])).concat(sToa(Result.Third[4])).concat(sToa(Result.Third[5])).concat(sToa(Result.Fourth[0])).concat(sToa(Result.Fourth[1])).concat(sToa(Result.Fourth[2])).concat(sToa(Result.Fourth[3])).concat(sToa(Result.Fiveth[0])).concat(sToa(Result.Fiveth[1])).concat(sToa(Result.Fiveth[2])).concat(sToa(Result.Fiveth[3])).concat(sToa(Result.Fiveth[4])).concat(sToa(Result.Fiveth[5])).concat(sToa(Result.Sixth[0])).concat(sToa(Result.Sixth[1])).concat(sToa(Result.Sixth[2])).concat(sToa(Result.Seventh[0])).concat(sToa(Result.Seventh[1])).concat(sToa(Result.Seventh[2])).concat(sToa(Result.Seventh[3]));
      fullString.map(function (item, i) {
        if (i === itemNumber.Index[0] || i === itemNumber.Index[1]) {
          item.position = true;
        }
      });
      Lotto = fullString[itemNumber.Index[0]].number.toString() + fullString[itemNumber.Index[1]].number.toString();
      if (vm.config.BetType === 1) {
        if (msUtils.exists(fullString[3].number.toString() + fullString[4].number.toString(), numbers)) {
          fullString[3].match = true;
          fullString[4].match = true;
        }
        if (msUtils.exists(fullString[8].number.toString() + fullString[9].number.toString(), numbers)) {
          fullString[8].match = true;
          fullString[9].match = true;
        }
        if (msUtils.exists(fullString[13].number.toString() + fullString[14].number.toString(), numbers)) {
          fullString[13].match = true;
          fullString[14].match = true;
        }
        if (msUtils.exists(fullString[18].number.toString() + fullString[19].number.toString(), numbers)) {
          fullString[18].match = true;
          fullString[19].match = true;
        }
        if (msUtils.exists(fullString[23].number.toString() + fullString[24].number.toString(), numbers)) {
          fullString[23].match = true;
          fullString[24].match = true;
        }
        if (msUtils.exists(fullString[28].number.toString() + fullString[29].number.toString(), numbers)) {
          fullString[28].match = true;
          fullString[29].match = true;
        }
        if (msUtils.exists(fullString[33].number.toString() + fullString[34].number.toString(), numbers)) {
          fullString[33].match = true;
          fullString[34].match = true;
        }
        if (msUtils.exists(fullString[38].number.toString() + fullString[39].number.toString(), numbers)) {
          fullString[38].match = true;
          fullString[39].match = true;
        }
        if (msUtils.exists(fullString[43].number.toString() + fullString[44].number.toString(), numbers)) {
          fullString[43].match = true;
          fullString[44].match = true;
        }
        if (msUtils.exists(fullString[48].number.toString() + fullString[49].number.toString(), numbers)) {
          fullString[48].match = true;
          fullString[49].match = true;
        }
        if (msUtils.exists(fullString[52].number.toString() + fullString[53].number.toString(), numbers)) {
          fullString[52].match = true;
          fullString[53].match = true;
        }
        if (msUtils.exists(fullString[56].number.toString() + fullString[57].number.toString(), numbers)) {
          fullString[56].match = true;
          fullString[57].match = true;
        }
        if (msUtils.exists(fullString[60].number.toString() + fullString[61].number.toString(), numbers)) {
          fullString[60].match = true;
          fullString[61].match = true;
        }
        if (msUtils.exists(fullString[64].number.toString() + fullString[65].number.toString(), numbers)) {
          fullString[64].match = true;
          fullString[65].match = true;
        }
        if (msUtils.exists(fullString[68].number.toString() + fullString[69].number.toString(), numbers)) {
          fullString[68].match = true;
          fullString[69].match = true;
        }
        if (msUtils.exists(fullString[72].number.toString() + fullString[73].number.toString(), numbers)) {
          fullString[72].match = true;
          fullString[73].match = true;
        }
        if (msUtils.exists(fullString[76].number.toString() + fullString[77].number.toString(), numbers)) {
          fullString[76].match = true;
          fullString[77].match = true;
        }
        if (msUtils.exists(fullString[80].number.toString() + fullString[81].number.toString(), numbers)) {
          fullString[80].match = true;
          fullString[81].match = true;
        }
        if (msUtils.exists(fullString[84].number.toString() + fullString[85].number.toString(), numbers)) {
          fullString[84].match = true;
          fullString[85].match = true;
        }
        if (msUtils.exists(fullString[88].number.toString() + fullString[89].number.toString(), numbers)) {
          fullString[88].match = true;
          fullString[89].match = true;
        }
        if (msUtils.exists(fullString[91].number.toString() + fullString[92].number.toString(), numbers)) {
          fullString[91].match = true;
          fullString[92].match = true;
        }
        if (msUtils.exists(fullString[94].number.toString() + fullString[95].number.toString(), numbers)) {
          fullString[94].match = true;
          fullString[95].match = true;
        }
        if (msUtils.exists(fullString[97].number.toString() + fullString[98].number.toString(), numbers)) {
          fullString[97].match = true;
          fullString[98].match = true;
        }
        if (msUtils.exists(fullString[99].number.toString() + fullString[100].number.toString(), numbers)) {
          fullString[99].match = true;
          fullString[100].match = true;
        }
        if (msUtils.exists(fullString[101].number.toString() + fullString[102].number.toString(), numbers)) {
          fullString[101].match = true;
          fullString[102].match = true;
        }
        if (msUtils.exists(fullString[103].number.toString() + fullString[104].number.toString(), numbers)) {
          fullString[103].match = true;
          fullString[104].match = true;
        }
        if (msUtils.exists(fullString[105].number.toString() + fullString[106].number.toString(), numbers)) {
          fullString[105].match = true;
          fullString[106].match = true;
        }
      } else {
        if (msUtils.exists(fullString[0].number.toString() + fullString[1].number.toString(), numbers)) {
          fullString[0].match = true;
          fullString[1].match = true;
        }
        if (msUtils.exists(fullString[5].number.toString() + fullString[6].number.toString(), numbers)) {
          fullString[5].match = true;
          fullString[6].match = true;
        }
        if (msUtils.exists(fullString[10].number.toString() + fullString[11].number.toString(), numbers)) {
          fullString[10].match = true;
          fullString[11].match = true;
        }
        if (msUtils.exists(fullString[15].number.toString() + fullString[16].number.toString(), numbers)) {
          fullString[15].match = true;
          fullString[16].match = true;
        }
        if (msUtils.exists(fullString[20].number.toString() + fullString[21].number.toString(), numbers)) {
          fullString[20].match = true;
          fullString[21].match = true;
        }
        if (msUtils.exists(fullString[25].number.toString() + fullString[26].number.toString(), numbers)) {
          fullString[25].match = true;
          fullString[26].match = true;
        }
        if (msUtils.exists(fullString[30].number.toString() + fullString[31].number.toString(), numbers)) {
          fullString[30].match = true;
          fullString[31].match = true;
        }
        if (msUtils.exists(fullString[35].number.toString() + fullString[36].number.toString(), numbers)) {
          fullString[35].match = true;
          fullString[36].match = true;
        }
        if (msUtils.exists(fullString[40].number.toString() + fullString[41].number.toString(), numbers)) {
          fullString[40].match = true;
          fullString[41].match = true;
        }
        if (msUtils.exists(fullString[45].number.toString() + fullString[46].number.toString(), numbers)) {
          fullString[45].match = true;
          fullString[46].match = true;
        }
        if (msUtils.exists(fullString[50].number.toString() + fullString[51].number.toString(), numbers)) {
          fullString[50].match = true;
          fullString[51].match = true;
        }
        if (msUtils.exists(fullString[54].number.toString() + fullString[55].number.toString(), numbers)) {
          fullString[54].match = true;
          fullString[55].match = true;
        }
        if (msUtils.exists(fullString[58].number.toString() + fullString[59].number.toString(), numbers)) {
          fullString[58].match = true;
          fullString[59].match = true;
        }
        if (msUtils.exists(fullString[62].number.toString() + fullString[63].number.toString(), numbers)) {
          fullString[62].match = true;
          fullString[63].match = true;
        }
        if (msUtils.exists(fullString[66].number.toString() + fullString[67].number.toString(), numbers)) {
          fullString[66].match = true;
          fullString[67].match = true;
        }
        if (msUtils.exists(fullString[70].number.toString() + fullString[71].number.toString(), numbers)) {
          fullString[70].match = true;
          fullString[71].match = true;
        }
        if (msUtils.exists(fullString[74].number.toString() + fullString[75].number.toString(), numbers)) {
          fullString[74].match = true;
          fullString[75].match = true;
        }
        if (msUtils.exists(fullString[78].number.toString() + fullString[79].number.toString(), numbers)) {
          fullString[78].match = true;
          fullString[79].match = true;
        }
        if (msUtils.exists(fullString[82].number.toString() + fullString[83].number.toString(), numbers)) {
          fullString[82].match = true;
          fullString[83].match = true;
        }
        if (msUtils.exists(fullString[86].number.toString() + fullString[87].number.toString(), numbers)) {
          fullString[86].match = true;
          fullString[87].match = true;
        }
        if (msUtils.exists(fullString[90].number.toString() + fullString[91].number.toString(), numbers)) {
          fullString[90].match = true;
          fullString[91].match = true;
        }
        if (msUtils.exists(fullString[93].number.toString() + fullString[94].number.toString(), numbers)) {
          fullString[93].match = true;
          fullString[94].match = true;
        }
        if (msUtils.exists(fullString[96].number.toString() + fullString[97].number.toString(), numbers)) {
          fullString[96].match = true;
          fullString[97].match = true;
        }
        if (msUtils.exists(fullString[99].number.toString() + fullString[100].number.toString(), numbers)) {
          fullString[99].match = true;
          fullString[100].match = true;
        }
        if (msUtils.exists(fullString[101].number.toString() + fullString[102].number.toString(), numbers)) {
          fullString[101].match = true;
          fullString[102].match = true;
        }
        if (msUtils.exists(fullString[103].number.toString() + fullString[104].number.toString(), numbers)) {
          fullString[103].match = true;
          fullString[104].match = true;
        }
        if (msUtils.exists(fullString[105].number.toString() + fullString[106].number.toString(), numbers)) {
          fullString[105].match = true;
          fullString[106].match = true;
        }
      }
      return {data: fullString, lotto: Lotto};
    }
    function sToa(string) {
      let output = [];
      string.split("").map(function (item) {
        output.push({number: item});
      });
      return output;
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendaryExceptCtrl", legendaryExceptCtrl);
  function legendaryExceptCtrl($rootScope, $scope, $mdSidenav, $mdMedia, $timeout, $interval, $mdDialog, $document, msUtils, network, selectBox, betId, param) {
    let vm = this;
    vm.init = init;
    vm.getOdds = getOdds;
    vm.buildPriceTable = buildPriceTable;
    vm.totalPoint = totalPoint;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.purchaseLimit = purchaseLimit;
    vm.calcMoney = calcMoney;
    vm.betId = betId;
    vm.param = param;
    vm.ignorePrice = true;
    vm.selectedCheckbox = [];
    vm.numbers = [];
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = item.value;
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
      }
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      vm.selected = ns.toString().replace(/\,+/g, ", ");
      return vm.selected;
    }, typing: function (e) {
      if (!vm.keyNumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keyNumber[vm.keyNumber.length - 1] !== ",") {
          vm.keyNumber = vm.keyNumber.substring(0, vm.keyNumber.length - 1);
        }
      }
      var value = vm.keyNumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keyNumber = vm.keyNumber + ",";
      }
    }, submit: function (click) {
      if (!vm.keyNumber) {
        return;
      }
      vm.keyNumber = vm.keyNumber.replace(/\s+/g, "");
      if (vm.keyNumber.length === 0) {
        return;
      }
      var arr = vm.keyNumber.split(",");
      var arrInput = [];
      for (var i = 0; i < arr.length; i++) {
        var number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (number) {
        if (arrInput.indexOf(number.number) !== -1 && !number.disabled) {
          if (!number.selected) {
            number.selected = true;
          }
        }
      });
      vm.keyNumber = "";
      if (!click) {
        vm.betPoint = 0;
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 100);
      }
    }, checkbox: {exists: function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      var idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = $.grep(selectBox.list, function (b) {
        return b.id === id;
      })[0].content;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }}};
    $timeout(function () {
      if ($rootScope.isAuthenticated) {
        vm.init();
      }
    }, 300);
    function init() {
      if ($rootScope.LegendParameters !== undefined) {
        vm.payouts = $rootScope.LegendParameters.filter(function (pr) {
          return pr.GameType === 0 && pr.BetType === betId;
        })[0].Payouts;
      } else {
        $timeout(function () {
          vm.init();
        }, 1e3);
      }
    }
    vm.basePrice = 0;
    if ($rootScope.LegendParameters !== undefined) {
      vm.basePrice = $rootScope.LegendParameters.filter(function (pr) {
        return pr.GameType === 0 && pr.BetType === betId;
      })[0].Price;
    }
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      vm.numbers.push({number: i.toString(), disabled: false, selected: false, price: vm.basePrice});
    }
    $scope.$on("oddsPrice::done", function () {
      vm.buildPriceTable();
    });
    function purchaseLimit() {
      if ($rootScope.LegendParameters !== undefined) {
        return $rootScope.LegendParameters.filter(function (item) {
          return item.GameType === 0 && item.BetType === betId;
        })[0].MaxPointPerNumber;
      }
    }
    function buildPriceTable() {
      vm.odds = $rootScope.LegendOdds.filter(function (odd) {
        return odd.GameType === 0 && odd.BetType === betId;
      });
      if (vm.odds.length === 0) {
        $timeout(function () {
          vm.getOdds();
        }, 1e3);
        return;
      }
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        let exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        vm.numbers.map(function (o) {
          return o.priceChanged = false;
        });
      }, 3e3);
    }
    function totalPoint() {
      var total = 0, oddNumbers;
      vm.totalMoney = 0;
      vm.toPoint = 0;
      angular.forEach(vm.numbers, function (num) {
        total += !num.disabled && num.selected ? vm.betPoint : 0;
        if (vm.odds && num.selected) {
          oddNumbers = $.grep(vm.odds[0].Numbers, function (n) {
            return n.Number === num.number;
          });
          if (oddNumbers.length && !oddNumbers[0].stop && oddNumbers[0].ExtraPrice !== 0) {
            vm.totalMoney += vm.calcMoney(vm.basePrice + oddNumbers[0].ExtraPrice);
          } else {
            vm.totalMoney += vm.calcMoney(vm.basePrice);
          }
        }
      });
      vm.toPoint = total;
      return total;
    }
    function calcMoney(price) {
      if (vm.numbers.filter(function (n) {
        return n.selected;
      }).length < vm.param.minBet) {
        return 0;
      }
      if (vm.betId === 5) {
        return vm.betPoint * (price - vm.payouts) / 10;
      } else {
        return vm.betPoint * (price - vm.payouts) * vm.param.betTimes;
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        vm.betPoint = 0;
      });
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
      vm.selectedCheckbox = [];
      vm.keynumber = "";
    }
    function submitBetting() {
      var betObj = {};
      betObj.Term = $rootScope.LegendTermName[0];
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [{GameType: 0, BetType: betId, Items: []}];
      angular.forEach(vm.numbers, function (number) {
        if (number.selected && !number.disabled) {
          var Number = {};
          Number.Numbers = [number.number];
          Number.Price = number.price;
          Number.Point = vm.betPoint;
          betObj.Tickets[0].Items.push(Number);
        }
      });
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.toPoint, money: vm.totalMoney, numbers: vm.selected}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = point;
        $scope.costMoney = money;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function getOdds() {
      $rootScope.$broadcast("GetOdds", {GameType: 0, BetTypes: [betId]});
    }
    $timeout(function () {
      vm.getOdds();
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendNorthern4DCtrl", legendNorthern4DCtrl);
  function legendNorthern4DCtrl($rootScope, $scope, $mdMedia, $mdDialog, $mdSidenav, $timeout, $state, $interval, $document, msUtils, network, config) {
    var vm = this;
    vm.getOdds = getOdds;
    vm.updatePrice = updatePrice;
    vm.changeLabel = changeLabel;
    vm.init = init;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalMoney = totalMoney;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.ignorePrice = true;
    vm.basePrice = 0;
    vm.config = config;
    $scope.$mdMedia = $mdMedia;
    vm.selectedCheckbox = [];
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = item.value;
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
      }
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      vm.selected = ns.toString().replace(/\,+/g, ", ");
      return vm.selected;
    }, checkbox: {exists: function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      var idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      angular.forEach(vm.numbers, function (number, index) {
        if (id < 10) {
          if (Math.floor(index / 10) === id) {
            number.selected = vm.checked;
          }
        } else {
          if (index % 10 === id % 10) {
            number.selected = vm.checked;
          }
        }
      });
      vm.betPoint = 0;
      if ($mdMedia("gt-sm")) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      }
    }}};
    $timeout(function () {
      vm.init();
    }, 300);
    $scope.$on("oddsPrice::done", function () {
      vm.updatePrice();
    });
    vm.labels = ["OOXX", "OXXO", "OXOX", "XOXO", "XOOX", "XXOO"];
    vm.dialogLabel = dialogLabel;
    function dialogLabel(label) {
      $mdDialog.show({locals: {label: label, cond4d: vm.cond4d}, clickOutsideToClose: true, escapeToClose: true, templateUrl: "app/main/legendary/dialog.label.html", controller: dialogLabelCtrl}).then(function (label) {
        vm.changeLabel(label);
      }, function () {});
      function dialogLabelCtrl($scope, $mdDialog, label, cond4d) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.changeLabel = function (label) {
          $mdDialog.hide(label);
        };
        $scope.label = label;
        $scope.cond4d = cond4d;
        $scope.popLabels = [];
        for (let i = 0; i < 100; i++) {
          i = i < 10 ? "0" + i : i;
          i = i.toString();
          let j = i.split("");
          if (label === "OOXX") $scope.popLabels.push({id: "^" + i + "([0-9]+)$", name: i + "XX"});
          if (label === "OXXO") $scope.popLabels.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "$", name: i.split("").join("XX")});
          if (label === "OXOX") $scope.popLabels.push({id: "^" + j[0] + "([0-9]+)+" + j[1] + "([0-9]+)$", name: i.split("").join("X") + "X"});
          if (label === "XOXO") $scope.popLabels.push({id: "^([0-9]+)" + j[0] + "([0-9]+)" + j[1] + "$", name: "X" + i.split("").join("X")});
          if (label === "XOOX") $scope.popLabels.push({id: "^([0-9]+)" + i + "([0-9]+)$", name: "X" + i + "X"});
          if (label === "XXOO") $scope.popLabels.push({id: "^([0-9]+)" + i + "$", name: "XX" + i});
        }
      }
    }
    if ($rootScope.LegendParameters !== undefined) {
      vm.basePrice = $rootScope.LegendParameters.filter(function (pr) {
        return pr.GameType === config.GameType && pr.BetType === config.BetType;
      })[0].Price;
    }
    vm.numbers = [];
    for (let i = 0; i < 100; i++) {
      if (i < 10) {
        i = "000" + i;
      } else if (i < 100) {
        i = "00" + i;
      } else if (i < 1e3) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: vm.basePrice, disabled: false};
      vm.numbers.push(number);
    }
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.LegendParameters !== undefined) {
          let myParamValues = $rootScope.LegendParameters.filter(function (item) {
            return item.GameType === config.GameType && item.BetType === config.BetType;
          })[0];
          vm.purchaseLimit = myParamValues.MaxPointPerNumber;
          vm.payouts = myParamValues.Payouts;
        } else {
          $timeout(function () {
            vm.init();
          }, 1e3);
        }
      }
    }
    function changeLabel(cond) {
      vm.cond4d = cond !== undefined ? cond : undefined;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e4; i++) {
        if (i < 10) {
          i = "000" + i;
        } else if (i < 100) {
          i = "00" + i;
        } else if (i < 1e3) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: 0, disabled: false};
        if (cond === undefined) {
          vm.numbers.push(number);
        } else {
          if (i.toString().match(cond.id)) {
            vm.numbers.push(number);
          }
        }
      }
      vm.numbers = vm.numbers.slice(0, 100);
      if (cond !== undefined) {
        $timeout(function () {
          vm.updatePrice();
        }, 200);
      }
    }
    function updatePrice() {
      vm.odds = $rootScope.LegendOdds.filter(function (odd) {
        return odd.GameType === config.GameType && odd.BetType === config.BetType;
      });
      if (vm.odds.length === 0) {
        $timeout(function () {
          vm.getOdds();
        }, 1e3);
        return;
      }
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        var exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        vm.numbers.map(function (o) {
          return o.priceChanged = false;
        });
      }, 3e3);
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
        number.point = 0;
      });
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
      vm.selectedCheckbox = [];
      vm.betPoint = 0;
    }
    function totalMoney() {
      vm.sumPoint = 0;
      vm.sumMoney = 0;
      vm.betPoint = isNaN(vm.betPoint) ? 0 : vm.betPoint;
      angular.forEach(vm.numbers, function (num) {
        if (num.selected && !num.disabled) {
          vm.sumPoint += vm.betPoint;
          vm.sumMoney += num.price * vm.betPoint * config.BetTimes;
        }
      });
      return vm.sumMoney;
    }
    function submitBetting() {
      let Alias;
      if (config.BetType === 13) {
        Alias = 524288;
      } else if (config.BetType === 14) {
        Alias = 2097152;
      } else if (config.BetType === 19) {
        Alias = 1048576;
      }
      var betObj = {Term: $rootScope.LegendTermName[config.GameType], IgnorePrice: vm.ignorePrice, Tickets: [{GameType: config.GameType, BetType: config.BetType, Items: [], Additional: {Row: 0, Alias: Alias, Reverse: false}}]};
      angular.forEach(vm.numbers, function (number) {
        if (number.selected && !number.disabled) {
          var Number = {};
          Number.Numbers = [number.number];
          Number.Price = number.price;
          Number.Point = vm.betPoint;
          betObj.Tickets[0].Items.push(Number);
        }
      });
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.sumPoint, money: vm.sumMoney, numbers: vm.selected}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = point;
        $scope.costMoney = money;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function getOdds() {
      $rootScope.$broadcast("GetOdds", {GameType: config.GameType, BetTypes: [config.BetType]});
    }
    $timeout(function () {
      vm.getOdds();
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendNorthern3DCtrl", legendNorthern3DCtrl);
  function legendNorthern3DCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $state, $interval, $mdDialog, $document, msUtils, network, config) {
    var vm = this;
    vm.init = init;
    vm.getOdds = getOdds;
    vm.changeLabel = changeLabel;
    vm.updatePrice = updatePrice;
    vm.resetBetting = resetBetting;
    vm.submitBetting = submitBetting;
    vm.totalMoney = totalMoney;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.TabSelected = TabSelected;
    vm.build3DTable = build3DTable;
    vm.checkPointDisabled = checkPointDisabled;
    vm.ignorePrice = true;
    vm.config = config;
    vm.selectedCheckbox = [];
    vm.selected3dNumber = [];
    $scope.$mdMedia = $mdMedia;
    vm.betStepper = $rootScope.betStepper;
    vm.stepper = {select: function (item) {
      vm.betPoint = item.value;
      angular.forEach(vm.betStepper, function (step) {
        step.active = item.value === step.value;
      });
    }};
    vm.number = {select: function (n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number && !number.disabled) {
          number.selected = !number.selected;
        }
      });
      if (n.selected) {
        vm.betPoint = 0;
        if ($mdMedia("gt-sm")) {
          $timeout(function () {
            document.getElementById("bet-input").select();
          }, 10);
        }
      }
    }, selected: function () {
      let ns = [];
      angular.forEach(vm.numbers, function (n) {
        if (n.selected) ns.push(n.number);
      });
      vm.selected = ns.toString().replace(/\,+/g, ", ");
      return vm.selected;
    }, checkbox: {exists: function (item) {
      return vm.selectedCheckbox.indexOf(item) > -1;
    }, group: function (id) {
      var idx = vm.selectedCheckbox.indexOf(id);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(id);
      }
      vm.checked = idx === -1;
      vm.betPoint = 0;
      angular.forEach(vm.numbers, function (number, index) {
        if (!number.disabled) {
          if (id < 10) {
            if (Math.floor(index / 10) === id) {
              number.selected = vm.checked;
            }
          } else {
            if (index % 10 === id % 10) {
              number.selected = vm.checked;
            }
          }
        }
      });
    }}, typing3d: function (e) {
      if (!vm.keyNumber3D) {
        return;
      }
      if (e.which === 8) {
        if (vm.keyNumber3D[vm.keyNumber3D.length - 1] !== ",") {
          vm.keyNumber3D = vm.keyNumber3D.substring(0, vm.keyNumber3D.length - 1);
        }
      }
      var value = vm.keyNumber3D.split(",");
      if (value[value.length - 1].length > 2) {
        vm.keyNumber3D = vm.keyNumber3D + ",";
      }
    }, submit3D: function (click) {
      if (!vm.keyNumber3D || vm.disabled3D) {
        return;
      }
      vm.keyNumber3D = vm.keyNumber3D.replace(/\s+/g, "");
      if (vm.keyNumber3D.length === 0) {
        return;
      }
      let arr = vm.keyNumber3D.split(",");
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-3).replace(/\s+/g, "");
        if (number.length) {
          number = msUtils.pad(number, 3);
          if (!isNaN(number) && angular.isNumber(+number)) {
            if (number.length !== 0) vm.selected3dNumber.push(number);
          }
        }
      }
      vm.selected3dNumber = msUtils.removeDup(vm.selected3dNumber);
      vm.build3DTable();
      vm.keyNumber3D = "";
      vm.betPoint = 0;
      if (!click) {
        $timeout(function () {
          document.getElementById("bet-input").select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 100);
      }
    }};
    $timeout(function () {
      if ($rootScope.isAuthenticated) {
        vm.init();
      }
    }, 300);
    vm.basePrice = 0;
    if ($rootScope.LegendParameters !== undefined) {
      vm.basePrice = $rootScope.LegendParameters.filter(function (pr) {
        return pr.GameType === config.GameType && pr.BetType === config.BetType;
      })[0].Price;
    }
    vm.numbers = [];
    for (let i = 0; i < 1e3; i++) {
      if (i < 10) {
        i = "00" + i;
      } else if (i < 100) {
        i = "0" + i;
      }
      let number = {number: i.toString(), selected: false, price: vm.basePrice, disabled: false};
      if (Math.floor(i / 100) === 0) {
        vm.numbers.push(number);
      }
    }
    function init() {
      if ($rootScope.LegendParameters !== undefined) {
        let myParamValues = $rootScope.LegendParameters.filter(function (item) {
          return item.GameType === config.GameType && item.BetType === config.BetType;
        })[0];
        vm.purchaseLimit = myParamValues.MaxPointPerNumber;
        vm.payouts = myParamValues.Payouts;
      } else {
        $timeout(function () {
          vm.init();
        }, 1e3);
      }
    }
    $scope.$on("oddsPrice::done", function () {
      vm.updatePrice();
    });
    function TabSelected(i) {
      i = i === undefined ? vm.onTabSelected : i;
      vm.onTabSelected = i;
      vm.resetBetting();
    }
    function build3DTable() {
      vm.number3Ds = [];
      angular.forEach(vm.selected3dNumber, function (n) {
        let exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === n;
        });
        if (exNum.length && exNum[0].Stop) {
          vm.number3Ds.push({number: n, disabled: true});
        } else {
          vm.number3Ds.push({number: n});
        }
      });
    }
    function checkPointDisabled() {
      if (vm.onTabSelected === 0) {
        return vm.numbers.filter(function (n) {
          return n.selected;
        }).length === 0;
      } else if (vm.onTabSelected === 1) {
        return vm.selected3dNumber.length === 0;
      }
    }
    function changeLabel(value) {
      vm.label = value;
      vm.selectedCheckbox = [];
      vm.numbers = [];
      for (let i = 0; i < 1e3; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = "0" + i;
        }
        let number = {number: i.toString(), selected: false, price: 0, disabled: false};
        if (value < 10) {
          if (Math.floor(i / 100) === value) {
            vm.numbers.push(number);
          }
        } else {
          if (Math.floor(i % 100 / 10) === value % 10) {
            vm.numbers.push(number);
          }
        }
      }
      vm.updatePrice();
    }
    function updatePrice() {
      vm.odds = $rootScope.LegendOdds.filter(function (odd) {
        return odd.GameType === config.GameType && odd.BetType === config.BetType;
      });
      if (vm.odds.length === 0) {
        $timeout(function () {
          vm.getOdds();
        }, 1e3);
        return;
      }
      vm.basePrice = vm.odds[0].Price;
      angular.forEach(vm.numbers, function (num) {
        vm.bPrice = angular.copy(num.price);
        var exNum = $.grep(vm.odds[0].Numbers, function (f) {
          return f.Number === num.number;
        });
        num.price = vm.basePrice;
        if (exNum.length) {
          num.disabled = exNum[0].Stop;
          num.price = exNum[0].ExtraPrice !== undefined ? vm.basePrice + exNum[0].ExtraPrice : vm.basePrice;
        }
        num.priceChanged = num.price !== vm.bPrice && vm.bPrice !== 0;
      });
      $timeout(function () {
        vm.numbers.map(function (o) {
          return o.priceChanged = false;
        });
      }, 3e3);
    }
    function resetBetting() {
      vm.numbers.map(function (n) {
        return n.selected = false;
      });
      vm.betStepper.map(function (a) {
        return a.active = false;
      });
      vm.betPoint = 0;
      vm.selected3dNumber = [];
      vm.number3Ds = [];
      vm.selectedCheckbox = [];
      vm.keyNumber3D = "";
    }
    function totalMoney() {
      vm.sumPoint = 0;
      vm.sumMoney = 0;
      vm.betPoint = isNaN(vm.betPoint) ? 0 : vm.betPoint;
      if (vm.onTabSelected === 0) {
        angular.forEach(vm.numbers, function (num) {
          if (num.selected && !num.disabled) {
            vm.sumPoint += vm.betPoint;
            vm.sumMoney += num.price * vm.betPoint * config.BetTimes;
          }
        });
      } else {
        angular.forEach(vm.number3Ds, function (n) {
          if (!n.disabled) {
            vm.sumPoint += vm.betPoint;
            vm.sumMoney += vm.betPoint * vm.basePrice;
          }
        });
      }
      return vm.sumMoney;
    }
    function submitBetting() {
      let betObj = {Term: $rootScope.LegendTermName[config.GameType], IgnorePrice: vm.ignorePrice, Tickets: [{GameType: config.GameType, BetType: config.BetType, Items: []}]};
      if (vm.onTabSelected === 0) {
        angular.forEach(vm.numbers, function (number) {
          if (number.selected && !number.disabled) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Price = number.price;
            Number.Point = vm.betPoint;
            betObj.Tickets[0].Items.push(Number);
          }
        });
      } else {
        angular.forEach(vm.number3Ds, function (number) {
          if (!number.disabled) {
            let Number = {};
            Number.Numbers = [number.number];
            Number.Point = vm.betPoint;
            Number.Price = vm.basePrice;
            betObj.Tickets[0].Items.push(Number);
          }
        });
      }
      let always = JSON.parse(sessionStorage.getItem("alwaysBetting")) !== null;
      if (!$rootScope.isAuthenticated) {
        always = true;
      }
      if (always) {
        vm.sendBettingRequest(betObj);
      } else {
        vm.commitBetting(betObj);
      }
    }
    function commitBetting(betObj) {
      let numbers;
      if (vm.onTabSelected === 0) {
        numbers = vm.selected;
      } else {
        numbers = [];
        angular.forEach(vm.number3Ds, function (n) {
          numbers.push(n.number);
        });
        numbers = numbers.toString().replace(/\,+/g, ", ");
      }
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", parent: angular.element(document.body), multiple: true, clickOutsideToClose: true, locals: {point: vm.sumPoint, money: vm.sumMoney, numbers: numbers}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = point;
        $scope.costMoney = money;
        $scope.numbers = numbers;
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("alwaysBetting", true);
          }
          vm.sendBettingRequest(betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.aBettingObject = betObj;
      $rootScope.$broadcast("LegendBetting", {message: "dialog"});
      vm.resetBetting();
    }
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    function getOdds() {
      $rootScope.$broadcast("GetOdds", {GameType: config.GameType, BetTypes: [config.BetType]});
    }
    $timeout(function () {
      vm.getOdds();
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("betListCtrl", betListCtrl).filter("blGame", blGame).filter("blBet", blBet);
  function betListCtrl($rootScope, $scope, $mdDialog, $timeout, network, $state, msUtils, message) {
    let vm = this;
    vm.betList = betList;
    vm.initBetList = initBetList;
    vm.countDownCancel = countDownCancel;
    vm.deadlineTime = deadlineTime;
    vm.cancelBetting = cancelBetting;
    vm.viewBatch = viewBatch;
    vm.betList();
    vm.tickets = [];
    function betList(ltId) {
      vm.loading = true;
      ltId = ltId === undefined ? "" : ltId;
      let data = {Limit: 100, LastId: ltId};
      if ($rootScope.currentTerm !== undefined) {
        network.Ticket.Current(data).then(function (resp) {
          vm.tickets = vm.tickets.concat(resp);
          vm.OriginalTick = angular.copy(vm.tickets);
          vm.initBetList(vm.tickets);
          vm.hasMoreTickets = resp.length === 100;
          $timeout(function () {
            $scope.$digest();
          }, 500);
        });
      } else {
        $timeout(function () {
          vm.betList();
        }, 1e3);
      }
    }
    function initBetList(resp) {
      vm.loading = false;
      vm.sumMoney = 0;
      vm.betListFull = [];
      angular.forEach(resp, function (b) {
        vm.sumMoney += b.CancelledAt === undefined ? b.Amount : 0;
      });
      var groupResp = resp.groupBy(function (o) {
        return JSON.stringify({a: o.BatchId});
      });
      angular.forEach(groupResp, function (grouped) {
        grouped.group.sort(function (a, b) {
          return a.GameType - b.GameType || a.BetType - b.BetType;
        });
        if (grouped.group[0].Additional === undefined || grouped.group[0].Additional.Row === undefined) {
          vm.betListFull.push(grouped.group);
        } else {
          let groupByRow = grouped.group.groupBy(function (o) {
            return JSON.stringify({a: o.Additional.Row});
          });
          angular.forEach(groupByRow, function (rowVal) {
            rowVal.group.sort(function (a, b) {
              return b.GameType - a.GameType;
            });
            var countCancel = $.grep(rowVal.group, function (c) {
              return c.Status === 9;
            });
            var childBet = {};
            childBet.TicketNumber = rowVal.group[0].TicketNumber;
            childBet.Term = rowVal.group[0].Term;
            childBet.CreatedAt = rowVal.group[0].CreatedAt;
            childBet.betTypeAlias = rowVal.group[0].Additional.Alias;
            childBet.CancelLimitInSec = rowVal.group[0].CancelLimitInSec;
            childBet.BatchId = rowVal.group[0].BatchId;
            childBet.CancelledAt = countCancel.length === rowVal.group.length ? rowVal.group[0].CancelledAt : undefined;
            childBet.Status = countCancel.length === rowVal.group.length ? rowVal.group[0].Status : undefined;
            childBet.partCancel = countCancel.length !== rowVal.group.length && countCancel.length !== 0;
            childBet.Amount = 0;
            childBet.Point = 0;
            childBet.betID = rowVal.group[0].BetType;
            childBet.waitToCancel = rowVal.group[0].waitToCancel;
            childBet.GameType = [];
            childBet.manyId = [];
            angular.forEach(rowVal.group, function (val) {
              childBet.Amount += val.Amount;
              childBet.Point += val.Point;
              childBet.GameType.push(val.GameType);
              childBet.manyId.push(val.TicketNumber);
            });
            vm.betListFull.push([childBet]);
          });
        }
      });
      vm.countDownCancel();
    }
    let timer;
    function countDownCancel() {
      angular.forEach(vm.OriginalTick, function (otick) {
        otick.CancelLimitInSec--;
      });
      angular.forEach(vm.betListFull, function (bets) {
        angular.forEach(bets, function (bet) {
          if (bet.CancelLimitInSec) {
            bet.CancelLimitInSec--;
          }
          if (bet.deadTime === undefined || bet.deadTime < 10) {
            vm.deadlineTime(bet);
          } else {
            bet.deadTime--;
          }
        });
      });
    }
    function deadlineTime(tick) {
      let gameID = typeof tick.GameType === "object" ? tick.GameType[0] : tick.GameType;
      let betID = tick.BetType !== undefined ? tick.BetType : tick.betID;
      let deadData = $.grep($rootScope.currentTerm, function (d) {
        return d.GameType === gameID;
      })[0];
      tick.deadTime = $.grep(deadData.Games, function (d) {
        return d.BetType === betID;
      })[0].CloseAfter;
    }
    $rootScope.fullCancelWait = [];
    function cancelBetting(tick) {
      var textContent = tick.manyId === undefined ? "" : "những ";
      var confirm = $mdDialog.confirm().title("Vui lòng xác nhận").textContent("Quý khách muốn hủy " + textContent + "phiếu cược này").ariaLabel("Cancel betting").targetEvent(tick).clickOutsideToClose(true).parent(angular.element(document.body)).ok("Hủy cược").cancel("Đóng");
      $mdDialog.show(confirm).then(function () {
        tick.waitToCancel = true;
        let tickToCancel = {Term: $rootScope.termName, Tickets: []};
        if (tick.manyId) {
          angular.forEach(tick.manyId, function (tickId) {
            let findTick = vm.OriginalTick.filter(function (t) {
              return t.TicketNumber === tickId;
            })[0];
            let TicketObj = {GameType: findTick.GameType, BetType: findTick.BetType, TicketNumber: findTick.TicketNumber};
            tickToCancel.Tickets.push(TicketObj);
          });
        } else {
          let TicketObj = {GameType: tick.GameType, BetType: tick.BetType, TicketNumber: tick.TicketNumber};
          tickToCancel.Tickets.push(TicketObj);
        }
        network.Games.cancelTicket(tickToCancel).then(function (resp) {
          if (resp) {
            console.log(resp);
            $rootScope.fullCancelWait = $rootScope.fullCancelWait.concat(resp);
            angular.forEach(resp, function (t) {
              vm.OriginalTick.find(function (tick) {
                return tick.TicketNumber === t.TicketNumber;
              }).waitToCancel = true;
            });
          }
        });
      }, function () {});
    }
    $scope.$on("ticketCancelApproved", function ($event, aDatas) {
      angular.forEach(aDatas, function (data) {
        if ($.grep($rootScope.fullCancelWait, function (item) {
          return item.TicketNumber === data.TicketNumber;
        }).length) {
          let findTickAmount = $.grep(vm.OriginalTick, function (item) {
            return item.TicketNumber === data.TicketNumber;
          });
          if (findTickAmount.length) {
            $rootScope.User.Balance = $rootScope.User.Balance + findTickAmount[0].Amount;
          }
          vm.OriginalTick.find(function (tick) {
            return tick.TicketNumber === data.TicketNumber;
          }).Status = 9;
          $timeout.cancel(timer);
          vm.initBetList(angular.copy(vm.OriginalTick));
        }
      });
    });
    function viewBatch(batch) {
      let TickByBatch = $.grep(vm.OriginalTick, function (item) {
        return item.BatchId === batch.BatchId;
      });
      let aTickId = [];
      angular.forEach(TickByBatch, function (tick) {
        aTickId.push(tick.TicketNumber);
      });
      if (batch.manyId) {
        $state.go("app.account.bet-list.traditional.batch", {term: TickByBatch[0].Term, id: batch.manyId.join()});
      } else {
        $state.go("app.account.bet-list.traditional.batch", {term: TickByBatch[0].Term, id: aTickId.join()});
      }
    }
  }
  function blGame($rootScope) {
    return function (input) {
      if (!Array.isArray(input)) {
        var gameList = [{id: 0, name: "MB1"}, {id: 1, name: "MB2"}, {id: 2, name: "18A"}, {id: 3, name: "18B"}, {id: 4, name: "18C"}, {id: 5, name: "18A+18B"}];
        var subName = $.grep(gameList, function (value, i) {
          return value.id === parseInt(input);
        })[0].name;
        return $.grep($rootScope.currentTerm, function (value, i) {
          return value.GameType === parseInt(input);
        })[0].CityName + " (" + subName + ")";
      } else {
        input = input.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) === index;
        });
        var gamename = "MN ";
        var game = [];
        angular.forEach(input, function (e) {
          if (e === 0) {
            gamename = "Hà Nội (MB 1)";
          }
          if (e === 1) {
            gamename = "Hà Nội (MB 2)";
          }
          if (e === 2) {
            game.push("18A");
          }
          if (e === 3) {
            game.push("18B");
          }
          if (e === 4) {
            game.push("18C");
          }
          if (e === 5) {
            gamename = "Xiên A-B";
          }
        });
        gamename = gamename + game.reverse().join(", ");
        return gamename;
      }
    };
  }
  function blBet() {
    var betList = [{id: 0, name: "Đề"}, {id: 1, name: "Lô"}, {id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}, {id: 5, name: "Đề trượt"}, {id: 6, name: "Lô Trượt"}, {id: 7, name: "2D Đầu"}, {id: 8, name: "2D Đuôi"}, {id: 9, name: "2D 27Lô"}, {id: 10, name: "3D Đầu"}, {id: 11, name: "3D Đuôi"}, {id: 12, name: "3D 23Lô"}, {id: 13, name: "4D Đuôi"}, {id: 14, name: "4D 20Lô"}, {id: 15, name: "2D 18Lô"}, {id: 16, name: "2D 7Lô"}, {id: 17, name: "3D 17Lô"}, {id: 18, name: "3D 7Lô"}, {id: 19, name: "4D 16Lô"}, {id: 20, name: "Lô Live"}, {id: 21, name: "Đề Đầu"}, {id: 22, name: "Đề Giải 1"}, {id: 23, name: "Đề Đầu Giải 1"}, {id: 24, name: "Đề Thần Tài"}, {id: 25, name: "Đề Đầu Thần Tài"}, {id: 27, name: "Lô Live"}, {id: 29, name: "Lô Đầu"}, {id: 30, name: "2D 18Lô Đầu"}];
    return function (input) {
      if (input.BetType !== undefined) {
        return $.grep(betList, function (value) {
          return value.id === parseInt(input.BetType);
        })[0].name;
      } else {
        var betTypeAlias = input.betTypeAlias;
        var betAliasText = "";
        var betAlias = [];
        if (betTypeAlias >= 128 && betTypeAlias < 8192) {
          betAliasText = "2D ";
        } else if (betTypeAlias >= 8192 && betTypeAlias < 524288) {
          betAliasText = "3D ";
        } else if (betTypeAlias >= 524288) {
          betAliasText = "4D ";
        }
        if (betTypeAlias & 128) {
          betAlias.push("Đầu");
        }
        if (betTypeAlias & 256) {
          betAlias.push("Đuôi");
        }
        if (betTypeAlias & 512) {
          betAlias.push("Đầu-Đuôi");
        }
        if (betTypeAlias & 1024) {
          betAlias.push("27 Lô");
        }
        if (betTypeAlias & 2048) {
          betAlias.push("18 Lô");
        }
        if (betTypeAlias & 4096) {
          betAlias.push("7 Lô");
        }
        if (betTypeAlias & 8192) {
          betAlias.push("Đầu");
        }
        if (betTypeAlias & 16384) {
          betAlias.push("Đuôi");
        }
        if (betTypeAlias & 32768) {
          betAlias.push("Đầu-Đuôi");
        }
        if (betTypeAlias & 65536) {
          betAlias.push("23 Lô");
        }
        if (betTypeAlias & 131072) {
          betAlias.push("7 Lô");
        }
        if (betTypeAlias & 262144) {
          betAlias.push("17 Lô");
        }
        if (betTypeAlias & 524288) {
          betAlias.push("Đuôi");
        }
        if (betTypeAlias & 1048576) {
          betAlias.push("16 Lô");
        }
        if (betTypeAlias & 2097152) {
          betAlias.push("20 Lô");
        }
        betAlias = betAliasText + betAlias.join(", ");
        if (betTypeAlias < 127) {
          return $.grep(betList, function (value) {
            return value.id === betTypeAlias;
          })[0].name;
        } else if (betTypeAlias === 127) {
          return "Xiên Quây";
        } else {
          return betAlias;
        }
      }
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("legendBetListCtrl", legendBetListCtrl).filter("legendBlBet", legendBlBet);
  function legendBetListCtrl($rootScope, $scope, $mdDialog, $timeout, network, $state, msUtils, message) {
    var vm = this;
    vm.betList = betList;
    vm.initBetList = initBetList;
    vm.viewBatch = viewBatch;
    vm.betList();
    vm.tickets = [];
    function betList(ltId) {
      vm.loading = true;
      ltId = ltId === undefined ? "" : ltId;
      let data = {Limit: 100, LastId: ltId};
      if ($rootScope.currentTerm !== undefined) {
        network.Legend.Ticket.Current(data).then(function (resp) {
          vm.tickets = vm.tickets.concat(resp);
          vm.OriginalTick = angular.copy(vm.tickets);
          vm.initBetList(vm.tickets);
          vm.hasMoreTickets = resp.length === 100;
        });
      } else {
        $timeout(function () {
          vm.betList();
        }, 1e3);
      }
    }
    function initBetList(resp) {
      vm.loading = false;
      vm.sumMoney = 0;
      vm.betListFull = [];
      angular.forEach(resp, function (b) {
        vm.sumMoney += b.CancelledAt === undefined ? b.Amount : 0;
      });
      var groupResp = resp.groupBy(function (o) {
        return JSON.stringify({a: o.BatchId});
      });
      angular.forEach(groupResp, function (grouped) {
        grouped.group.sort(function (a, b) {
          return a.GameType - b.GameType || a.BetType - b.BetType;
        });
        if (grouped.group[0].Additional === undefined || grouped.group[0].Additional.Row === undefined) {
          vm.betListFull.push(grouped.group);
        } else {
          let groupByRow = grouped.group.groupBy(function (o) {
            return JSON.stringify({a: o.Additional.Row});
          });
          angular.forEach(groupByRow, function (rowVal) {
            rowVal.group.sort(function (a, b) {
              return b.GameType - a.GameType;
            });
            var countCancel = $.grep(rowVal.group, function (c) {
              return c.Status === 9;
            });
            var childBet = {};
            childBet.TicketNumber = rowVal.group[0].TicketNumber;
            childBet.Term = rowVal.group[0].Term;
            childBet.CreatedAt = rowVal.group[0].CreatedAt;
            childBet.betTypeAlias = rowVal.group[0].Additional.Alias;
            childBet.CancelLimitInSec = rowVal.group[0].CancelLimitInSec;
            childBet.BatchId = rowVal.group[0].BatchId;
            childBet.CancelledAt = countCancel.length === rowVal.group.length ? rowVal.group[0].CancelledAt : undefined;
            childBet.Status = countCancel.length === rowVal.group.length ? rowVal.group[0].Status : undefined;
            childBet.partCancel = countCancel.length !== rowVal.group.length && countCancel.length !== 0;
            childBet.Amount = 0;
            childBet.Point = 0;
            childBet.betID = rowVal.group[0].BetType;
            childBet.waitToCancel = rowVal.group[0].waitToCancel;
            childBet.GameType = [];
            childBet.manyId = [];
            angular.forEach(rowVal.group, function (val) {
              childBet.Amount += val.Amount;
              childBet.Point += val.Point;
              childBet.GameType.push(val.GameType);
              childBet.manyId.push(val.TicketNumber);
            });
            vm.betListFull.push([childBet]);
          });
        }
      });
      $scope.$digest();
    }
    function viewBatch(batch) {
      let TickByBatch = $.grep(vm.OriginalTick, function (item) {
        return item.BatchId === batch.BatchId;
      });
      let aTickId = [];
      angular.forEach(TickByBatch, function (tick) {
        aTickId.push(tick.TicketNumber);
      });
      if (batch.manyId) {
        $state.go("app.account.bet-list.legendary.batch", {term: TickByBatch[0].Term, game: TickByBatch[0].GameType, id: batch.manyId.join()});
      } else {
        $state.go("app.account.bet-list.legendary.batch", {term: TickByBatch[0].Term, game: TickByBatch[0].GameType, id: aTickId.join()});
      }
    }
  }
  function legendBlBet() {
    var betList = [{id: 0, name: "Đề"}, {id: 1, name: "Lô"}, {id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}, {id: 5, name: "Đề trượt"}, {id: 6, name: "Lô Trượt"}, {id: 7, name: "2D Đầu"}, {id: 8, name: "2D Đuôi"}, {id: 9, name: "2D 27Lô"}, {id: 10, name: "3D Đầu"}, {id: 11, name: "3D Đuôi", mb: "Đề 3 Càng"}, {id: 12, name: "3D 23Lô", mb: "Lô 3 Càng"}, {id: 13, name: "4D Đuôi", mb: "Đề 4 Càng"}, {id: 14, name: "4D 20Lô", mb: "Lô 4 Càng"}, {id: 15, name: "2D 18Lô"}, {id: 16, name: "2D 7Lô"}, {id: 17, name: "3D 17Lô"}, {id: 18, name: "3D 7Lô"}, {id: 19, name: "4D 16Lô"}, {id: 20, name: "Lô Live"}, {id: 21, name: "Đề Đầu"}, {id: 22, name: "Đề Giải 1"}, {id: 23, name: "Đề Đầu Giải 1"}, {id: 24, name: "Đề Thần Tài"}, {id: 25, name: "Đề Đầu Thần Tài"}, {id: 26, name: "Live 3D", mb: "Live 3 Càng"}, {id: 27, name: "Lô Live"}, {id: 28, name: "Live 3D"}, {id: 29, name: "Lô Đầu"}, {id: 30, name: "2D 18Lô Đầu"}];
    return function (input, GameType) {
      if (input.BetType !== undefined) {
        let grepName = $.grep(betList, function (value) {
          return value.id === parseInt(input.BetType);
        })[0];
        if (GameType === 0) {
          if (grepName.mb !== undefined) {
            return grepName.mb;
          } else {
            return grepName.name;
          }
        } else {
          return grepName.name;
        }
      } else {
        if (GameType[0] === 0 && input.betTypeAlias === 524288) {
          return "Đề 4 Càng";
        } else if (GameType[0] === 0 && input.betTypeAlias === 2097152) {
          return "Lô 4 Càng";
        } else {
          var betTypeAlias = input.betTypeAlias;
          var betAliasText = "";
          var betAlias = [];
          if (betTypeAlias >= 128 && betTypeAlias < 8192) {
            betAliasText = "2D ";
          } else if (betTypeAlias >= 8192 && betTypeAlias < 524288) {
            betAliasText = "3D ";
          } else if (betTypeAlias >= 524288) {
            betAliasText = "4D ";
          }
          if (betTypeAlias & 128) {
            betAlias.push("Đầu");
          }
          if (betTypeAlias & 256) {
            betAlias.push("Đuôi");
          }
          if (betTypeAlias & 512) {
            betAlias.push("Đầu-Đuôi");
          }
          if (betTypeAlias & 1024) {
            betAlias.push("27 Lô");
          }
          if (betTypeAlias & 2048) {
            betAlias.push("18 Lô");
          }
          if (betTypeAlias & 4096) {
            betAlias.push("7 Lô");
          }
          if (betTypeAlias & 8192) {
            betAlias.push("Đầu");
          }
          if (betTypeAlias & 16384) {
            betAlias.push("Đuôi");
          }
          if (betTypeAlias & 32768) {
            betAlias.push("Đầu-Đuôi");
          }
          if (betTypeAlias & 65536) {
            betAlias.push("23 Lô");
          }
          if (betTypeAlias & 131072) {
            betAlias.push("7 Lô");
          }
          if (betTypeAlias & 262144) {
            betAlias.push("17 Lô");
          }
          if (betTypeAlias & 524288) {
            betAlias.push("Đuôi");
          }
          if (betTypeAlias & 1048576) {
            betAlias.push("16 Lô");
          }
          if (betTypeAlias & 2097152) {
            betAlias.push("20 Lô");
          }
          betAlias = betAliasText + betAlias.join(", ");
          if (betTypeAlias < 127) {
            return $.grep(betList, function (value) {
              return value.id === betTypeAlias;
            })[0].name;
          } else if (betTypeAlias === 127) {
            return "Xiên Quây";
          } else {
            return betAlias;
          }
        }
      }
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("cancelledCtrl", cancelledCtrl);
  function cancelledCtrl($scope, $timeout) {
    let vm = this;
    vm.changeGame = changeGame;
    vm.getTicketItems = getTicketItems;
    vm.terms = [];
    for (let i = 0; i < 7; i++) {
      vm.terms.push(moment().subtract(i, "day").format("YYYY-MM-DD"));
    }
    vm.games = [{id: 0, name: "Miền Bắc 1", bet: [{id: 0, name: "Đề"}, {id: 1, name: "Lô"}, {id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}, {id: 5, name: "Đề Trượt"}, {id: 6, name: "Lô Trượt"}, {id: 21, name: "Đề Đầu"}, {id: 22, name: "Đề G1"}, {id: 23, name: "Đề Đầu G1"}, {id: 24, name: "Đề Thần Tài"}, {id: 25, name: "Đề Đầu TT"}, {id: 20, name: "Lô Live"}]}, {id: 1, name: "Miền Bắc 2", bet: [{id: 7, name: "2D Đầu"}, {id: 10, name: "3D Đầu"}, {id: 11, name: "3D Đuôi"}, {id: 12, name: "3D 23Lô"}, {id: 13, name: "4D Đuôi"}, {id: 14, name: "4D 20Lô"}]}, {id: 2, name: "Miền Nam 18A", bet: [{id: 7, name: "2D Đầu"}, {id: 8, name: "2D Đuôi"}, {id: 15, name: "2D 18Lô"}, {id: 16, name: "2D 7Lô"}, {id: 10, name: "3D Đầu"}, {id: 11, name: "3D Đuôi"}, {id: 17, name: "3D 17Lô"}, {id: 18, name: "3D 7Lô"}, {id: 13, name: "4D Đuôi"}, {id: 19, name: "4D 16Lô"}, {id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}]}, {id: 3, name: "Miền Nam 18B", bet: [{id: 7, name: "2D Đầu"}, {id: 8, name: "2D Đuôi"}, {id: 15, name: "2D 18Lô"}, {id: 16, name: "2D 7Lô"}, {id: 10, name: "3D Đầu"}, {id: 11, name: "3D Đuôi"}, {id: 17, name: "3D 17Lô"}, {id: 18, name: "3D 7Lô"}, {id: 13, name: "4D Đuôi"}, {id: 19, name: "4D 16Lô"}, {id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}]}, {id: 4, name: "Miền Nam 18C", bet: [{id: 7, name: "2D Đầu"}, {id: 8, name: "2D Đuôi"}, {id: 15, name: "2D 18Lô"}, {id: 16, name: "2D 7Lô"}, {id: 10, name: "3D Đầu"}, {id: 11, name: "3D Đuôi"}, {id: 17, name: "3D 17Lô"}, {id: 18, name: "3D 7Lô"}, {id: 13, name: "4D Đuôi"}, {id: 19, name: "4D 16Lô"}, {id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}]}, {id: 5, name: "Xiên 18A + 18B", bet: [{id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}]}];
    vm.loading = true;
    function changeGame() {
      vm.BetTypes = vm.games.filter(function (item) {
        return item.id === vm.GameType;
      })[0].bet;
    }
    $timeout(function () {
      vm.getTicketItems();
    }, 500);
    vm.ticketsCancelled = [];
    function getTicketItems(LastId) {
      vm.loading = true;
      let param = {Date: vm.date, GameType: vm.GameType, BetType: vm.BetType, Limit: 30};
      if (LastId !== undefined) {
        param.LastId = LastId;
      } else {
        vm.ticketsCancelled = [];
      }
      Lotus.Lottery.Report.Cancelation.getTicketItems(param).then(function (response) {
        console.log(response);
        vm.hasMoreTickets = response.length === param.Limit;
        vm.ticketsCancelled = vm.ticketsCancelled.concat(response);
        vm.loading = false;
        vm.sumMoney = 0;
        vm.ticketsCancelled.map(function (tic) {
          vm.sumMoney += tic.Amount;
        });
        $scope.$digest();
      });
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.toolbar", []).config(config);
  function config() {}
}());
(function () {
  "use strict";
  angular.module("app.toolbar").controller("gamePlayToolbarCtrl", gamePlayToolbarCtrl);
  function gamePlayToolbarCtrl($rootScope, $scope, $mdSidenav, $interval, $mdMedia, gameData, Fullscreen) {
    var vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.toggleSidenav = toggleSidenav;
    vm.gameData = gameData.data;
    vm.tickTock = tickTock;
    function tickTock() {
      vm.clock = Date.now();
    }
    vm.tickTock();
    if ($mdMedia("gt-sm")) {
      $interval(function () {
        vm.tickTock();
      }, 1e3);
    }
    vm.showToolbar = showToolbar;
    vm.isFullscreen = isFullscreen;
    function isFullscreen() {
      angular.element("html").addClass("is-fullscreen");
    }
    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler, false);
      document.addEventListener("mozfullscreenchange", exitHandler, false);
      document.addEventListener("MSFullscreenChange", exitHandler, false);
      document.addEventListener("webkitfullscreenchange", exitHandler, false);
    }
    function exitHandler() {
      if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null) {
        if (!Fullscreen.isEnabled()) {
          angular.element("html").removeClass("is-fullscreen");
        }
      }
    }
    function showToolbar() {
      angular.element("html").removeClass("is-fullscreen");
      if (Fullscreen.isEnabled()) {
        Fullscreen.cancel();
      }
    }
    function toggleSidenav(sidenavId) {
      $mdSidenav(sidenavId).toggle();
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.quick-panel", []).config(config);
  function config() {}
}());
(function () {
  "use strict";
  angular.module("app.quick-panel").controller("ChatTabController", ChatTabController);
  function ChatTabController(msApi, $timeout) {
    var vm = this;
    vm.chat = {};
    vm.chatActive = false;
    vm.replyMessage = "";
    msApi.request("quickPanel.contacts@get", {}, function (response) {
      vm.contacts = response.data;
    });
    vm.toggleChat = toggleChat;
    vm.reply = reply;
    function toggleChat(contact) {
      vm.chatActive = !vm.chatActive;
      if (vm.chatActive) {
        vm.replyMessage = "";
        vm.chat.contact = contact;
        scrollToBottomOfChat(0);
      }
    }
    function reply() {
      if (vm.replyMessage === "") {
        return;
      }
      if (!vm.chat.contact.dialog) {
        vm.chat.contact.dialog = [];
      }
      vm.chat.contact.dialog.push({who: "user", message: vm.replyMessage, time: "Just now"});
      vm.replyMessage = "";
      scrollToBottomOfChat(400);
    }
    function scrollToBottomOfChat(speed) {
      var chatDialog = angular.element("#chat-dialog");
      $timeout(function () {
        chatDialog.animate({scrollTop: chatDialog[0].scrollHeight}, speed);
      }, 0);
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("southABParlayCtrl", southABParlayCtrl);
  function southABParlayCtrl($rootScope, $scope, $mdMedia, $mdSidenav, $timeout, $interval, $state, $document, msUtils, network, collections) {
    let vm = this;
    vm.buildPriceTable = buildPriceTable;
    vm.selectNumber = selectNumber;
    vm.groupNumbers = groupNumbers;
    vm.inputKeyNumber = inputKeyNumber;
    vm.submitKeyNumber = submitKeyNumber;
    vm.resetBetting = resetBetting;
    vm.costMoney = costMoney;
    vm.submitBetting = submitBetting;
    vm.purchaseLimit = purchaseLimit;
    vm.exists = exists;
    vm.ignorePrice = true;
    vm.quickChoices = collections.list;
    $scope.$mdMedia = $mdMedia;
    vm.pair = {count: {2: 0, 3: 0, 4: 0}, money: {2: 0, 3: 0, 4: 0}, limit: {2: 0, 3: 0, 4: 0}, payout: {2: 0, 3: 0, 4: 0}};
    vm.inputPoint = {2: 0, 3: 0, 4: 0};
    vm.base = {2: 0, 3: 0, 4: 0};
    if ($rootScope.myParameters !== undefined) {
      angular.forEach($rootScope.myParameters, function (pr) {
        if (pr.GameType === 5) {
          if (pr.BetType === 2) {
            vm.base[2] = pr.Price;
          }
          if (pr.BetType === 3) {
            vm.base[3] = pr.Price;
          }
          if (pr.BetType === 4) {
            vm.base[4] = pr.Price;
          }
        }
      });
    }
    vm.numbers = [];
    for (let i = 0; i < 100; i++) {
      i = i < 10 ? i = "0" + i : i;
      let number = {number: i.toString(), selected: false, base: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, price: {2: vm.base[2], 3: vm.base[3], 4: vm.base[4]}, disabled: {2: false, 3: false, 4: false}};
      vm.numbers.push(number);
    }
    $timeout(function () {
      if ($rootScope.isAuthenticated) {
        vm.purchaseLimit();
      }
    }, 300);
    $scope.$on("$destroy", function () {
      $rootScope.location = undefined;
    });
    $document.bind("keydown keypress", function (e) {
      if (e.which === 27) {
        vm.resetBetting();
        e.preventDefault();
      }
    });
    $rootScope.location = {game: 5, bet: 2};
    function purchaseLimit(gameid, betid) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.myParameters !== undefined) {
          angular.forEach([2, 3, 4], function (betid) {
            vm.pair.limit[betid] = $rootScope.myParameters.filter(function (item) {
              return item.GameType === 5 && item.BetType === betid;
            })[0].MaxPointPerNumber;
            vm.pair.payout[betid] = $rootScope.myParameters.filter(function (item) {
              return item.GameType === 5 && item.BetType === betid;
            })[0].Payouts / 1e3;
          });
        } else {
          $timeout(function () {
            vm.purchaseLimit(gameid, betid);
          }, 1e3);
        }
      }
    }
    $scope.$on("TradOdds::done", function () {
      vm.buildPriceTable();
    });
    function buildPriceTable() {
      vm.odds = $rootScope.TradOdds.filter(function (odd) {
        return odd.GameType === 5 && msUtils.exists(odd.BetType, [2, 3, 4]) && odd.Term === ($rootScope.isAuthenticated ? $rootScope.termName : "Public");
      });
      angular.forEach(vm.numbers, function (num) {
        angular.forEach(vm.odds, function (odd) {
          num.base[odd.BetType] = odd.Price;
          num.price[odd.BetType] = num.price[odd.BetType] === 0 ? odd.Price : num.price[odd.BetType];
          angular.forEach(odd.Numbers, function (value) {
            if (value.Number === num.number) {
              let extPrice = value.ExtraPrice !== undefined ? odd.Price + value.ExtraPrice : num.price[odd.BetType];
              num.disabled[odd.BetType] = value.Stop;
              if (num.price[odd.BetType] !== 0 && num.price[odd.BetType] !== extPrice) {
                num.priceChanged = true;
              }
              num.price[odd.BetType] = extPrice;
            }
          });
        });
      });
      $timeout(function () {
        angular.forEach(vm.numbers, function (n) {
          n.priceChanged = false;
        });
      }, 3e3);
    }
    function selectNumber(n) {
      angular.forEach(vm.numbers, function (number) {
        if (number.number === n.number) {
          number.selected = !number.selected;
        }
      });
    }
    vm.selectedCheckbox = [];
    function exists(parent, id) {
      let ids = parent.toString() + id.toString();
      return vm.selectedCheckbox.indexOf(ids) > -1;
    }
    function groupNumbers(parent, id) {
      let ids = parent.toString() + id.toString();
      let idx = vm.selectedCheckbox.indexOf(ids);
      if (idx > -1) {
        vm.selectedCheckbox.splice(idx, 1);
      } else {
        vm.selectedCheckbox.push(ids);
      }
      vm.checked = idx === -1;
      vm.arrayNumber = vm.quickChoices[parent].collect[id].numbers;
      angular.forEach(vm.numbers, function (number) {
        if ($.grep(vm.arrayNumber, function (b) {
          return b === number.number;
        }).length) {
          number.selected = vm.checked;
        }
      });
    }
    function inputKeyNumber(e) {
      if (!vm.keynumber) {
        return;
      }
      if (e.which === 8) {
        if (vm.keynumber[vm.keynumber.length - 1] !== ",") {
          vm.keynumber = vm.keynumber.substring(0, vm.keynumber.length - 1);
        }
      }
      let value = vm.keynumber.split(",");
      if (value[value.length - 1].length > 1) {
        vm.keynumber = vm.keynumber + ",";
      }
    }
    function submitKeyNumber(click) {
      if (!vm.keynumber) {
        return;
      }
      vm.keynumber = vm.keynumber.replace(/\s+/g, "");
      if (vm.keynumber.length === 0) {
        return;
      }
      let arr = vm.keynumber.split(",");
      let arrInput = [];
      for (let i = 0; i < arr.length; i++) {
        let number = arr[i].slice(-2).replace(/\s+/g, "");
        number = number.length < 2 && number.length !== 0 ? "0" + number : number;
        if (!isNaN(number) && angular.isNumber(+number)) {
          if (number.length !== 0) arrInput.push(number);
        }
      }
      angular.forEach(vm.numbers, function (val) {
        if (arrInput.indexOf(val.number) !== -1) {
          val.selected = true;
        }
      });
      vm.keynumber = "";
      if (!click) {
        $timeout(function () {
          document.getElementsByClassName("bet-input")[0].select();
        }, 10);
      } else {
        $timeout(function () {
          document.getElementsByClassName("input-numbers-array")[0].focus();
        }, 10);
      }
    }
    function resetBetting() {
      angular.forEach(vm.numbers, function (number) {
        number.selected = false;
      });
      vm.selectedCheckbox = [];
      vm.inputPoint = {2: 0, 3: 0, 4: 0};
      vm.keynumber = "";
    }
    function costMoney() {
      vm.sumPoint = 0;
      let numberArr, sumMoney;
      let betTimes = {2: 72, 3: 108, 4: 144};
      angular.forEach([2, 3, 4], function (betid) {
        vm.pair.count[betid] = 0;
        sumMoney = 0;
        numberArr = [];
        angular.forEach(vm.numbers, function (num) {
          if (num.selected) {
            if (!num.disabled[betid]) {
              numberArr.push(num.number);
            }
          }
        });
        vm.pair.count[betid] += numberArr.combinate(betid).length;
        let totalyArr = numberArr.combinate(betid);
        if (totalyArr.length <= 128) {
          angular.forEach(totalyArr, function (pairArr) {
            let pricePerPair = 0;
            angular.forEach(pairArr, function (number) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === number) {
                  pricePerPair += num.price[betid];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pairArr.length);
            sumMoney += pricePerPair;
          });
          vm.pair.money[betid] = sumMoney * vm.inputPoint[betid] * betTimes[betid];
          vm.sumPoint += vm.pair.count[betid] * vm.inputPoint[betid];
        } else {
          vm.inputPoint[betid] = 0;
        }
      });
      vm.totalMoney = vm.pair.money[2] + vm.pair.money[3] + vm.pair.money[4];
      return vm.pair.money[2] + vm.pair.money[3] + vm.pair.money[4];
    }
    function submitBetting() {
      let betObj, ticketObj, selectedNumber, pairArrNum, Number;
      betObj = {};
      betObj.Term = $rootScope.termName;
      betObj.IgnorePrice = vm.ignorePrice;
      betObj.Tickets = [];
      Object.keys(vm.inputPoint).forEach(function (betid) {
        if (vm.inputPoint[betid] !== 0) {
          ticketObj = {GameType: 5, BetType: parseInt(betid), Items: []};
          selectedNumber = [];
          angular.forEach(vm.numbers, function (number) {
            if (number.selected && !number.disabled[betid]) {
              selectedNumber.push(number.number);
            }
          });
          pairArrNum = selectedNumber.combinate(betid);
          angular.forEach(pairArrNum, function (pair) {
            Number = {};
            Number.Numbers = pair;
            Number.Point = vm.inputPoint[betid];
            let pricePerPair = 0;
            angular.forEach(pair, function (n) {
              angular.forEach(vm.numbers, function (num) {
                if (num.number === n) {
                  pricePerPair += num.price[betid];
                }
              });
            });
            pricePerPair = Math.ceil(pricePerPair / pair.length);
            Number.Price = pricePerPair;
            ticketObj.Items.push(Number);
          });
          betObj.Tickets.push(ticketObj);
        }
      });
      let ns = [];
      vm.numbers.map(function (n) {
        if (n.selected) {
          ns.push(n.number);
        }
      });
      let eventData = {betObj: betObj, sumObj: {numbers: ns, point: vm.sumPoint, money: vm.totalMoney}};
      $rootScope.$broadcast("EventBetting", eventData);
    }
    $rootScope.$on("ResetBetting", function () {
      vm.resetBetting();
    });
    $rootScope.$broadcast("TradOdds::get", {GameTypes: [5], BetTypes: [2, 3, 4]});
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("traditionalMenuCtrl", traditionalMenuCtrl);
  function traditionalMenuCtrl($scope, $rootScope, $document, $mdDialog, $mdMedia, $mdSidenav, $state, msLotteryService) {
    var vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.menus = [{name: "Miền Bắc 1", icon: "icon-tile-four", navigation: "fuse.northern", sub: [{name: "Đề", navigation: "fuse.northern.jackpot", sub: [{name: "Đề", state: "app.traditional.northern.jackpot", navigation: "fuse.northern.jackpot.jackpot"}, {name: "Đề trượt", state: "app.traditional.northern.except-jackpot", navigation: "fuse.northern.jackpot.except", forceHide: true}, {name: "Đề đầu", state: "app.traditional.northern.head-jackpot", navigation: "fuse.northern.jackpot.head", forceHide: true}, {name: "Đề giải 1", state: "app.traditional.northern.jackpot-first", navigation: "fuse.northern.jackpot.jackpot-first"}, {name: "Đề đầu giải 1", state: "app.traditional.northern.jackpot-head-first", navigation: "fuse.northern.jackpot.headF"}, {name: "Đề Thần Tài", state: "app.traditional.northern.jackpot-caishen", navigation: "fuse.northern.jackpot.jackpot-caishen"}, {name: "Đề đầu Thần Tài", state: "app.traditional.northern.jackpot-head-caishen", navigation: "fuse.northern.jackpot.jackpot-head-caishen"}]}, {name: "Lô", navigation: "fuse.northern.lotto", sub: [{name: "Lô", state: "app.traditional.northern.lotto", navigation: "fuse.northern.lotto.lotto"}, {name: "Lô Xiên", state: "app.traditional.northern.parlay", navigation: "fuse.northern.lotto.parlay", forceHide: true}, {name: "Lô trượt", state: "app.traditional.northern.except-lotto", navigation: "fuse.northern.lotto.except-lotto", forceHide: true}, {name: "Lô Đầu", state: "app.traditional.northern.lotto-head", navigation: "fuse.northern.lotto.lotto-head", forceHide: true}]}, {name: "Lô Live", state: "app.traditional.northern.live", navigation: "fuse.northern.live", icon: "icon-heart", class: "live"}]}, {name: "Miền Bắc 2", icon: "icon-tile-four", navigation: "fuse.northern-2nd", sub: [{name: "Cược nhanh", state: "app.traditional.northern-2nd.quick-bet", navigation: "fuse.northern-2nd.quick-bet", hiddenXs: true}, {name: "2D", navigation: "fuse.northern-2nd.2d", sub: [{name: "2D Đầu", state: "app.traditional.northern-2nd.2d.dau", navigation: "fuse.northern-2nd.2d.dau", forceHide: false}, {name: "Kéo hàng", state: "app.traditional.northern-2nd.2d.row-bet", navigation: "fuse.northern-2nd.2d.row-bet", hiddenXs: true}]}, {name: "3D", navigation: "fuse.northern-2nd.3d", sub: [{name: "3D Đầu", state: "app.traditional.northern-2nd.3d.dau", navigation: "fuse.northern-2nd.3d.dau", forceHide: false}, {name: "3D Đuôi", state: "app.traditional.northern-2nd.3d.duoi", navigation: "fuse.northern-2nd.3d.duoi", forceHide: false}, {name: "3D 23Lô", state: "app.traditional.northern-2nd.3d.23lo", navigation: "fuse.northern-2nd.3d.23lo", forceHide: false}]}, {name: "4D", navigation: "fuse.northern-2nd.4d", sub: [{name: "4D Đuôi", state: "app.traditional.northern-2nd.4d.duoi", navigation: "fuse.northern-2nd.4d.duoi", forceHide: false}, {name: "4D 20Lô", state: "app.traditional.northern-2nd.4d.20lo", navigation: "fuse.northern-2nd.4d.20lo", forceHide: false}]}]}, {name: "Miền Nam", icon: "icon-tile-four", navigation: "fuse.southern", sub: [{name: "Cược nhanh", state: "app.traditional.southern.quick-bet", navigation: "fuse.southern.quick-bet", hiddenXs: true}, {name: "2D", navigation: "fuse.southern.2d", sub: [{name: "2D Đầu", state: "app.traditional.southern.2d.dau", navigation: "fuse.southern.2d.dau", forceHide: false}, {name: "2D Đuôi", state: "app.traditional.southern.2d.duoi", navigation: "fuse.southern.2d.duoi", forceHide: false}, {name: "2D 18Lô", state: "app.traditional.southern.2d.18lo", navigation: "fuse.southern.2d.18lo", forceHide: false}, {name: "2D 18Lô Đầu", state: "app.traditional.southern.2d.18lo-head", navigation: "fuse.southern.2d.18lo-head", forceHide: false}, {name: "Kéo hàng", state: "app.traditional.southern.2d.row-bet", navigation: "fuse.southern.2d.row-bet", hiddenXs: true}]}, {name: "3D", navigation: "fuse.southern.3d", sub: [{name: "3D Đầu", state: "app.traditional.southern.3d.dau", navigation: "fuse.southern.3d.dau", forceHide: false}, {name: "3D Đuôi", state: "app.traditional.southern.3d.duoi", navigation: "fuse.southern.3d.duoi", forceHide: false}, {name: "3D 17Lô", state: "app.traditional.southern.3d.17lo", navigation: "fuse.southern.3d.17lo", forceHide: false}, {name: "3D 7Lô", state: "app.traditional.southern.3d.7lo", navigation: "fuse.southern.3d.7lo", forceHide: false}]}, {name: "4D", navigation: "fuse.southern.4d", sub: [{name: "4D Đuôi", state: "app.traditional.southern.4d.duoi", navigation: "fuse.southern.4d.duoi", forceHide: false}, {name: "4D 16Lô", state: "app.traditional.southern.4d.16lo", navigation: "fuse.southern.4d.16lo", forceHide: false}]}, {name: "Lô Xiên", navigation: "fuse.southern.parlay", sub: [{name: "Xiên 2", state: "app.traditional.southern.parlay.pair-2", navigation: "fuse.southern.parlay.pair-2", forceHide: false}, {name: "Xiên 3", state: "app.traditional.southern.parlay.pair-3", navigation: "fuse.southern.parlay.pair-3", forceHide: false}, {name: "Xiên 4", state: "app.traditional.southern.parlay.pair-4", navigation: "fuse.southern.parlay.pair-4", forceHide: false}]}, {name: "7 Lô", state: "app.traditional.southern.7lo", navigation: "fuse.southern.7lo", hiddenXs: true}]}, {name: "Xiên 18A+B", icon: "icon-tile-four", state: "app.traditional.18ab", navigation: "fuse.18ab"}, {name: "Nhập tay", icon: "icon-tile-four", state: "app.traditional.manual", navigation: "fuse.manual"}];
    msLotteryService.deleteItem("fuse");
    msLotteryService.saveItem("fuse", {title: "Xổ số truyền thống", group: true, class: "main-menu", weight: 1});
    angular.forEach(vm.menus, function (node, i) {
      msLotteryService.saveItem(node.navigation, {title: node.name, icon: node.icon, state: node.state, class: node.class, weight: i});
      if (node.sub !== undefined) {
        angular.forEach(node.sub, function (item, i) {
          msLotteryService.saveItem(item.navigation, {title: item.name, icon: item.icon, state: item.state, class: item.class, weight: i, hidden: function () {
            return item.hiddenXs && $mdMedia("xs") || item.forceHide && $mdMedia("max-width: 1150px");
          }});
          if (item.sub !== undefined) {
            angular.forEach(item.sub, function (dol, i) {
              msLotteryService.saveItem(dol.navigation, {title: dol.name, icon: dol.icon, state: dol.state, class: dol.class, weight: i, hidden: function () {
                return dol.hiddenXs && $mdMedia("xs") || dol.forceHide && $mdMedia("max-width: 1150px");
              }});
            });
          }
        });
      }
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("manualCtrl", manualCtrl);
  function manualCtrl($rootScope, $scope, $timeout, $mdDialog, $location, message, msUtils, network, aBetTypes, Analytics) {
    let vm = this;
    vm.init = init;
    vm.getOdds = getOdds;
    vm.pairingPrice = pairingPrice;
    vm.textFocus = textFocus;
    vm.resetParse = resetParse;
    vm.submitParse = submitParse;
    vm.deleteNode = deleteNode;
    vm.cancelAll = cancelAll;
    vm.startBetting = startBetting;
    vm.validateNumbers = validateNumbers;
    vm.manualTicket = manualTicket;
    vm.mathematical = "";
    vm.mathParses = [];
    vm.parsesBeforeGroups = [];
    vm.lastIndex = 0;
    vm.aBetTypes = aBetTypes.data;
    $timeout(function () {
      vm.init();
    }, 1e3);
    function init() {
      let Term = $rootScope.isAuthenticated ? $rootScope.termName : "Public";
      angular.forEach(vm.aBetTypes, function (bet) {
        let findOdd = $rootScope.TradOdds.filter(function (odd) {
          return odd.Term === Term && odd.GameType === bet.GameType && odd.BetType === bet.BetType;
        });
        bet.success = findOdd.length !== 0;
      });
      vm.getOdds();
    }
    $scope.$on("TradOdds::done", function () {
      vm.pairingPrice();
      $timeout(function () {
        vm.init();
      }, 1e3);
    });
    function getOdds() {
      vm.oData = vm.aBetTypes.filter(function (bet) {
        return !bet.success;
      });
      if (vm.oData.length) {
        $rootScope.$broadcast("TradOdds::get", {GameTypes: [vm.oData[0].GameType], BetTypes: [vm.oData[0].BetType]});
      }
    }
    function resetParse() {
      vm.mathematical = "";
    }
    function textFocus() {
      if (vm.mathematical === "") {
        navigator.clipboard.readText().then(function (text) {
          vm.mathematical = text;
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
    function submitParse() {
      let parseData = Lotus.Lottery.Helper.LotteryCommand.parse(vm.mathematical);
      vm.errorLines = [];
      angular.forEach(parseData, function (line) {
        if (line.Error !== undefined) {
          vm.errorLines.push(line.LineContent);
        } else {
          vm.mathParses = vm.mathParses.concat(line.Data);
        }
      });
      vm.mathParses = addBy(vm.mathParses, ["GameType", "BetType", "Numbers"]);
      $timeout(function () {
        vm.pairingPrice();
      });
      if (vm.errorLines.length) {
        vm.mathematical = vm.errorLines;
        message.show("Có lỗi cú pháp. Quý khách vui lòng kiểm tra lại: <br><b>" + vm.errorLines.join(". ") + "</b>");
      } else {
        vm.mathematical = "";
      }
      Analytics.trackEvent("MANUAL-PAGE", "ParseData", $rootScope.User.Username);
    }
    function addBy(arr, keys) {
      return arr.reduce(function (ac, a) {
        let ind = ac.findIndex(function (x) {
          return keys.every(function (k) {
            if (!Array.isArray(x[k])) {
              return x[k] === a[k];
            } else {
              return JSON.stringify(x[k].sort()) === JSON.stringify(a[k].sort());
            }
          });
        });
        ind === -1 ? ac.push(a) : ac[ind].Amount += a.Amount;
        return ac;
      }, []);
    }
    function pairingPrice() {
      if ($rootScope.TradOdds !== undefined && vm.mathParses.length !== 0) {
        angular.forEach(vm.mathParses, function (item) {
          item.Price = 0;
          let findPrice = $rootScope.TradOdds.filter(function (odd) {
            return odd.GameType === item.GameType && odd.BetType === item.BetType && odd.term === $rootScope.termName;
          });
          if (findPrice.length) {
            angular.forEach(item.Numbers, function (num) {
              let exNum = findPrice[0].Numbers.filter(function (n) {
                return n.Number === num;
              });
              if (exNum.length) {
                item.Price += exNum[0].ExtraPrice !== undefined ? findPrice[0].Price + exNum[0].ExtraPrice : findPrice[0].Price;
              } else {
                item.Price += findPrice[0].Price;
              }
            });
          }
          item.Price = Math.ceil(item.Price / item.Numbers.length);
        });
      } else {
        $timeout(function () {
          vm.pairingPrice();
        }, 1e3);
      }
    }
    function deleteNode(parent, index) {
      let confirm = $mdDialog.confirm().title("Vui lòng xác nhận").textContent("Quý khách muốn hủy phiếu").ariaLabel("Cancel betting").clickOutsideToClose(true).parent(angular.element(document.body)).ok("Hủy Chọn").cancel("Đóng");
      $mdDialog.show(confirm).then(function () {
        delete vm.mathParses[parent].splice(index, 1);
      }, function () {});
    }
    function cancelAll() {
      let confirm = $mdDialog.confirm().title("Vui lòng xác nhận").textContent("Quý khách muốn hủy chọn toàn bộ phiếu đã nhập").ariaLabel("Cancel betting").clickOutsideToClose(true).parent(angular.element(document.body)).ok("Hủy Chọn").cancel("Đóng");
      $mdDialog.show(confirm).then(function () {
        vm.mathParses = [];
      }, function () {});
    }
    function startBetting() {
      vm.ns = [];
      vm.sumPoint = 0;
      let checkCount = 0;
      angular.forEach(vm.mathParses, function (item) {
        let validate = vm.validateNumbers(item);
        item.validate = validate;
        checkCount += validate === false ? 1 : 0;
        item.pointCheck = !(item.Amount !== 0 && Number.isInteger(item.Amount));
        checkCount += item.pointCheck ? 1 : 0;
      });
      if (checkCount !== 0) {
        message.show("Dữ liệu cược không hợp lệ. Quý khách vui lòng kiểm tra lại");
      } else {
        let betObj = {}, TicketObj = {};
        betObj.Term = $rootScope.termName;
        betObj.IgnorePrice = true;
        betObj.Tickets = [];
        vm.betParses = msUtils.groupBy(vm.mathParses, function (m) {
          return m.GameType;
        });
        angular.forEach(vm.betParses, function (parses) {
          vm.groupByBetTypes = msUtils.groupBy(parses, function (b) {
            return b.BetType;
          });
          angular.forEach(vm.groupByBetTypes, function (bets) {
            TicketObj = {GameType: bets[0].GameType, BetType: bets[0].BetType, Items: []};
            angular.forEach(bets, function (item) {
              if (msUtils.exists(item.BetType, [5, 6])) {
                angular.forEach(item.Numbers, function (n) {
                  let objItems = {};
                  objItems.Numbers = [n];
                  objItems.Price = item.Price;
                  objItems.Point = item.Amount;
                  TicketObj.Items.push(objItems);
                });
              } else {
                let objItems = {};
                objItems.Numbers = item.Numbers;
                objItems.Price = item.Price;
                objItems.Point = item.Amount;
                TicketObj.Items.push(objItems);
              }
              vm.ns = vm.ns.concat(item.Numbers);
              vm.sumPoint += item.Amount;
            });
            betObj.Tickets.push(TicketObj);
          });
        });
        vm.ns = vm.ns.filter(function (item, index, inputArray) {
          return inputArray.indexOf(item) === index;
        });
        vm.eventData = {betObj: betObj, sumObj: {numbers: vm.ns, point: vm.sumPoint, money: 0}};
        $rootScope.$broadcast("EventBetting", vm.eventData);
        Analytics.trackEvent("MANUAL-PAGE", "Betting", $rootScope.User.Username);
      }
    }
    function validateNumbers(item) {
      let numArr = item.Numbers.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      if (item.BetType === 2) {
        let check = 0;
        check += numArr.length === 2 ? 0 : 1;
        angular.forEach(numArr, function (num) {
          check += num.length === 2 ? 0 : 1;
        });
        return check === 0;
      } else if (item.BetType === 3) {
        let check = 0;
        check += numArr.length === 3 ? 0 : 1;
        angular.forEach(numArr, function (num) {
          check += num.length === 2 ? 0 : 1;
        });
        return check === 0;
      } else if (item.BetType === 4) {
        let check = 0;
        check += numArr.length === 4 ? 0 : 1;
        angular.forEach(numArr, function (num) {
          check += num.length === 2 ? 0 : 1;
        });
        return check === 0;
      } else if (item.BetType === 5) {
        return numArr.length >= 10;
      } else if (item.BetType === 6) {
        return numArr.length >= 4;
      } else if (msUtils.exists(item.BetType, [10, 11, 12, 17, 18])) {
        return numArr[0].length === 3;
      } else if (msUtils.exists(item.BetType, [13, 14, 19])) {
        return numArr[0].length === 4;
      } else {
        return numArr[0].length === 2;
      }
    }
    function manualTicket(ev) {
      $mdDialog.show({controller: manualCtrl, templateUrl: "app/main/from_ticket/dialog_manual.html", parent: angular.element(document.body), targetEvent: ev, clickOutsideToClose: true});
      function manualCtrl($scope, $mdDialog) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
      }
    }
    $rootScope.$on("ResetBetting", function () {
      vm.mathParses = [];
    });
    $timeout(function () {
      Analytics.trackEvent("MANUAL-PAGE", "ENTER", $rootScope.User.Username);
    }, 500);
  }
}());
(function () {
  "use strict";
  angular.module("app.results", []).config(config);
  function config($stateProvider, msApiProvider) {
    $stateProvider.state("app.results", {url: "/results", abstract: true, views: {"main@": {templateUrl: "app/core/layouts/content-general.html", controller: "MainController as one"}, "toolbar@app.results": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.results": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app.results": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}}, bodyClass: "one-results"}).state("app.results.traditional", {url: "/traditional", views: {"content@app.results": {templateUrl: "app/main/results/traditional/traditional.results.html", controller: "traditionalResultsCtrl as vm"}}, bodyClass: "one-results"}).state("app.results.legendary", {url: "/legendary", views: {"content@app.results": {templateUrl: "app/main/results/legendary/legendary.result.html", controller: "legendaryResultsCtrl as vm"}}, bodyClass: "one-results"});
  }
}());
(function () {
  "use strict";
  angular.module("app.results").controller("traditionalResultsCtrl", traditionalResultsCtrl);
  function traditionalResultsCtrl($scope, $rootScope, $mdMedia, $timeout, network, msUtils) {
    var vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.date = new Date;
    let time = moment(), beforeTime = moment("18:30", "HH: mm"), afterTime = moment("23:59", "HH: mm");
    if (time.isBetween(beforeTime, afterTime)) {
      vm.date.setDate(vm.date.getDate());
    } else {
      vm.date.setDate(vm.date.getDate() - 1);
    }
    vm.changeDate = changeDate;
    function changeDate() {
      vm.results = [];
      vm.resultReady = false;
      network.Public.Lottery.LotteryResult.getResultsByDate({Date: moment(vm.date).format("YYYY-MM-DD")}).then(function (response) {
        for (let i = 0; i < response.length; i++) {
          if (response[i].Fiveth) {
            response[i].Fifth = response[i].Fiveth;
            delete response[i].Fiveth;
          }
        }
        vm.results = response;
        vm.caishen = $.grep(response, function (item) {
          return item.Type === 4;
        })[0];
        vm.north = $.grep(response, function (item) {
          return item.Type === 0;
        })[0];
        if (vm.north !== undefined) {
          vm.matrix = msUtils.generatorMatrix(vm.north);
        }
        vm.southA = $.grep(response, function (item) {
          return item.Type === 1;
        })[0];
        vm.southB = $.grep(response, function (item) {
          return item.Type === 2;
        })[0];
        vm.southC = $.grep(response, function (item) {
          return item.Type === 3;
        })[0];
        vm.south = $.grep(response, function (item) {
          return msUtils.exists(item.Type, [1, 2, 3]);
        });
        if (vm.south.length) {
          vm.southMatrix = msUtils.generatorSouthMatrix(vm.south);
        }
        $timeout(function () {
          vm.resultReady = true;
        }, 500);
      });
    }
    $timeout(function () {
      vm.changeDate();
    }, 500);
  }
}());
(function () {
  "use strict";
  angular.module("app.results").controller("legendaryResultsCtrl", legendaryResultsCtrl);
  function legendaryResultsCtrl($scope, $rootScope, $mdMedia, $timeout, network, msUtils, $mdDialog) {
    let vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.onTabSelected = onTabSelected;
    vm.changeDate = changeDate;
    vm.watchVideo = watchVideo;
    vm.date = new Date;
    let time = moment(), beforeTime = moment("00:00", "HH: mm"), afterTime = moment("11:00", "HH: mm");
    if (time.isBetween(beforeTime, afterTime)) {
      vm.date.setDate(vm.date.getDate() - 1);
    } else {
      vm.date.setDate(vm.date.getDate());
    }
    function onTabSelected(index) {
      vm.GameType = index;
      vm.changeDate();
    }
    function changeDate() {
      vm.results = [];
      vm.resultReady = false;
      $timeout(function () {
        $scope.$digest();
      });
      $timeout(function () {
        network.Public.Lottery.LegendResult.getResultsByDate({Date: moment(vm.date).format("YYYY-MM-DD"), GameTypes: [vm.GameType]}).then(function (response) {
          vm.results = response.sort(function (a, b) {
            return moment(b.DrawResultAt).unix() - moment(a.DrawResultAt).unix();
          });
          for (let i = 0; i < vm.results.length; i++) {
            if (vm.results[i].Fiveth) {
              vm.results[i].Fifth = vm.results[i].Fiveth;
              delete vm.results[i].Fiveth;
            }
            vm.results[i].matrix = msUtils.generatorMatrix(vm.results[i]);
          }
          $timeout(function () {
            vm.resultReady = true;
          }, 200);
        });
      }, 200);
    }
    function watchVideo(item, $event) {
      $mdDialog.show({controller: watchVideoCtrl, templateUrl: "app/main/results/legendary/watch.video.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, fullscreen: true, locals: {item: item}});
      function watchVideoCtrl($scope, item) {
        $scope.cancel = function () {
          $mdDialog.hide();
        };
        $scope.info = item;
        $timeout(function () {
          let myVideo = document.getElementsByTagName("video")[0];
          myVideo.src = "https://vod.one789cdn.com/lottery789/" + item.Term + "." + item.GameType + ".mp4";
          myVideo.load();
          myVideo.play();
        }, 300);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").controller("legendaryMenuCtrl", legendaryMenuCtrl);
  function legendaryMenuCtrl($scope, $rootScope, $document, $mdDialog, $mdMedia, $mdSidenav, $state, $timeout, msLotteryService) {
    let vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.menus = [{name: "Miền Bắc", icon: "icon-tile-four", navigation: "fuse.northern", sub: [{name: "Cược Nhanh", state: "app.legendary.northern.quick", navigation: "fuse.northern.quick"}, {name: "Đề", state: "app.legendary.northern.jackpot", navigation: "fuse.northern.jackpot"}, {name: "Đề đầu", state: "app.legendary.northern.head-jackpot", navigation: "fuse.northern.head-jackpot", forceHide: true}, {name: "Lô", icon: "", state: "app.legendary.northern.lotto", navigation: "fuse.northern.lotto"}, {name: "Lô Đầu", icon: "", state: "app.legendary.northern.lotto-head", navigation: "fuse.northern.lotto-head", forceHide: true}, {name: "Lô Xiên", state: "app.legendary.northern.parlay", navigation: "fuse.northern.parlay", forceHide: true}, {name: "Lô Live", state: "app.legendary.northern.live", navigation: "fuse.northern.live", icon: "icon-heart", class: "live"}, {name: "Đề trượt", state: "app.legendary.northern.except-jackpot", navigation: "fuse.northern.except-jackpot"}, {name: "Lô trượt", state: "app.legendary.northern.except-lotto", navigation: "fuse.northern.except-lotto"}, {name: "Đề 3 Càng", state: "app.legendary.northern.3d.jackpot", navigation: "fuse.northern.3d-jackpot", forceHide: true}, {name: "Lô 3 Càng", state: "app.legendary.northern.3d.lotto", navigation: "fuse.northern.3d-lotto", forceHide: true}, {name: "Đề 4 Càng", state: "app.legendary.northern.4d.jackpot", navigation: "fuse.northern.4d-jackpot", forceHide: true}, {name: "Lô 4 Càng", state: "app.legendary.northern.4d.lotto", navigation: "fuse.northern.4d-lotto", forceHide: true}]}];
    msLotteryService.deleteItem("fuse");
    msLotteryService.saveItem("fuse", {title: "", group: true, weight: 1});
    angular.forEach(vm.menus, function (node, i) {
      msLotteryService.saveItem(node.navigation, {title: node.name, icon: node.icon, state: node.state, class: node.class, weight: i});
      if (node.sub !== undefined) {
        angular.forEach(node.sub, function (item, i) {
          msLotteryService.saveItem(item.navigation, {title: item.name, icon: item.icon, state: item.state, class: item.class, weight: i, hidden: function () {
            return item.hiddenXs && $mdMedia("xs") || item.forceHide && $mdMedia("max-width: 1150px");
          }});
          if (item.sub !== undefined) {
            angular.forEach(item.sub, function (dol, i) {
              msLotteryService.saveItem(dol.navigation, {title: dol.name, icon: dol.icon, state: dol.state, class: dol.class, weight: i, hidden: function () {
                return dol.hiddenXs && $mdMedia("xs") || dol.forceHide && $mdMedia("max-width: 1150px");
              }});
            });
          }
        });
      }
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.casino", []).config(config);
  function config($stateProvider, msApiProvider) {
    $stateProvider.state("app.casino", {url: "/casino", views: {"main@": {templateUrl: "app/core/layouts/content-game-play.html", controller: "MainController as vm"}, "toolbar@app.casino": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.casino": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "content@app.casino": {templateUrl: "app/main/casino/lobby/lobby.html", controller: "lobbyController as vm"}, "accountPanel@app.casino": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}}, resolve: {gameData: function (msApi) {
      return msApi.resolve("games@get");
    }, Maintenance: function (msApi) {
      return msApi.resolve("Maintenance@get");
    }}, bodyClass: "gaming"}).state("app.casino.single", {url: "/:area", views: {"content@app.casino": {templateUrl: "app/main/casino/casino.html", controller: "casinoController as vm"}}, bodyClass: "gaming"});
    msApiProvider.register("games", ["app/data/games.json"]);
    msApiProvider.register("Maintenance", ["app/data/wm-maintain.json"]);
  }
}());
(function () {
  "use strict";
  angular.module("app.casino").controller("lobbyController", lobbyController).directive("vidDir", [function () {
    return {restrict: "A", link: function (scope, elem, attr) {
      elem.onended = function () {
        console.log("vid ended");
      };
    }};
  }]);
  function lobbyController($rootScope, $scope, $state, $location, $mdMedia, $sce, $timeout, $interval, $mdDialog, casinoConfig, msUtils) {
    let vm = this;
    let countdown = {};
    let livePlayer = {};
    vm.a_Areas = [100, 101];
    $scope.$mdMedia = $mdMedia;
    vm.gameStyle = {background: "url(assets/images/backgrounds/crab.jpg) 50% 50% / cover no-repeat fixed"};
    vm.s_oGame = new CGame;
    vm.s_oNotify = new Notify;
    vm.init = init;
    vm.playVideo = playVideo;
    vm.videoToggle = videoToggle;
    vm.areaProperty = areaProperty;
    vm.updateRoller = updateRoller;
    vm.buildRoller = buildRoller;
    vm.resetRoller = resetRoller;
    vm.buildTokenStack = buildTokenStack;
    vm.generateTableInfo = generateTableInfo;
    vm._prepareGame = _prepareGame;
    vm.settingNewGame = settingNewGame;
    vm.gen_oPlayerModel = gen_oPlayerModel;
    vm.setChip = setChip;
    vm.chipSettings = chipSettings;
    vm.resetTable = resetTable;
    vm.tableInfo = tableInfo;
    vm.betList = betList;
    vm.firstPlayVideo = firstPlayVideo;
    vm.videoInteraction = {};
    vm._oPlayerModel = {};
    vm.showNotify = {};
    vm.Areas = {};
    vm.playingVariables = {};
    vm.a_Areas.map(function (area) {
      vm.videoInteraction[area] = false;
      vm._oPlayerModel[area] = {};
      vm.showNotify[area] = {};
      vm.Areas[area] = {videoDisplay: false};
      vm.playingVariables[area] = {_committed: false, _firstTime: true};
      countdown[area] = {};
      livePlayer[area] = {};
    });
    vm.globalConfig = {};
    vm.tokenOnStack = [];
    vm.globalConfig.configMoney = casinoConfig.configMoney();
    vm.globalConfig._iCurBetAmount = 0;
    vm.globalConfig._joinedTable = false;
    function setChip(chip) {
      vm.tokenOnStack.map(function (item) {
        item.active = item.name === chip.name;
      });
      vm.globalConfig._iCurBetAmount = vm.globalConfig.configMoney.find(function (item) {
        return item.label === chip.name;
      }).money;
    }
    function chipSettings() {
      $mdDialog.show({controller: chipSettingsCtrl, templateUrl: "app/main/casino/lobby/dialog/chip-settings.html", parent: angular.element(document.body), clickOutsideToClose: true});
      function chipSettingsCtrl($scope) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.o_playerProperty = angular.copy(vm.o_playerProperty);
        $scope.a_configToken = casinoConfig.configToken();
        $scope.setRank = function (item, init) {
          $scope.maxTokenReached = null;
          $scope.o_playerProperty.DefaultBetLimit = item;
          $scope._aToken = [];
          $scope.a_configToken[item].token.map(function (token, index) {
            $scope._aToken.push({name: token, checked: index < 5});
          });
          if (init) {
            $scope._aToken.map(function (item, index) {
              item.checked = vm.tokenOnStack.filter(function (t) {
                return t.name === item.name && !t.hidden;
              }).length;
            });
          }
        };
        $scope.f_selectToken = function (token) {
          token.checked = !token.checked;
          $scope.maxTokenReached = $scope._aToken.filter(function (item) {
            return item.checked;
          }).length > 5 || $scope._aToken.filter(function (item) {
            return item.checked;
          }).length === 0;
        };
        $scope.update = function () {
          $scope.submitting = true;
          if ($scope.o_playerProperty.DefaultBetLimit !== vm.o_playerProperty.DefaultBetLimit) {
            Lotus.SenCasino.UserGame.updateDefaultBetLimit({BetLimit: $scope.o_playerProperty.DefaultBetLimit}).then(function () {
              vm.o_playerProperty.DefaultBetLimit = $scope.o_playerProperty.DefaultBetLimit;
              $scope.updateTokenOnTable();
              $timeout(function () {
                $mdDialog.cancel();
              }, 500);
            }).catch(function (error) {});
          } else {
            $scope.updateTokenOnTable();
            $mdDialog.cancel();
          }
        };
        $scope.updateTokenOnTable = function () {
          let _tempToken = $scope._aToken.filter(function (item) {
            return item.checked;
          });
          vm.tokenOnStack.map(function (item, index) {
            item.active = index === 0;
            if (_tempToken[index] !== undefined) {
              item.hidden = false;
              item.name = _tempToken[index].name;
            } else {
              item.name = "00";
              item.hidden = true;
            }
          });
          $timeout(function () {
            vm.globalConfig._iCurBetAmount = vm.globalConfig.configMoney.find(function (cm) {
              return cm.label === vm.tokenOnStack[0].name;
            }).money;
          }, 100);
        };
        $scope.o_playerProperty.BetLimits.map(function (item) {
          if (item === $scope.o_playerProperty.DefaultBetLimit) {
            $scope.setRank(item, true);
          }
        });
      }
    }
    function CGame() {
      this.Realtime = function () {
        if (!vm.globalConfig._joinedTable) {
          vm.s_oGame.init();
          vm.globalConfig._joinedTable = true;
          vm.a_Areas.map(function (areaNumber) {
            Lotus.SenCasino.Games.Sedie.Realtime.subcribe({AreaNumber: areaNumber}).then(function () {
              console.log("Subscribe Game Sedie OK ");
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2001", function (data) {
              console.log("Ván chơi mới: data= " + JSON.stringify(data));
              vm._prepareGame(areaNumber, data);
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2002", function (data) {
              console.log("Bắt đầu cược: data= " + JSON.stringify(data));
              vm.s_oGame.playGame(areaNumber, data);
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2003", function (data) {
              console.log("Ván chơi kết thúc: data= " + JSON.stringify(data));
              vm.s_oGame._endGame(areaNumber, data.GameResult);
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2004", function (data) {
              console.log("Game tạm dừng: data= " + JSON.stringify(data));
              vm.s_oNotify.warning(data.Message);
              vm.Areas[areaNumber].AreaProperty.Status = 1;
              vm.Areas[areaNumber].AreaProperty.Message = data.Message;
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2005", function (data) {
              console.log("Dealer check-in: data= " + JSON.stringify(data));
              vm.s_oNotify.newDealer(areaNumber, data.DealerFullName);
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2006", function (data) {
              console.log("Thay đổi dụng cụ thiết bị chơi: data= " + JSON.stringify(data));
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2007", function (data) {
              console.log("Game mở lại phục vụ: data= " + JSON.stringify(data));
              vm.Areas[areaNumber].AreaProperty.Status = 2;
              vm.s_oNotify.warning(data.Message);
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2008", function (data) {
              console.log("Bàn chơi ngừng phục vụ: data= " + JSON.stringify(data));
              if (data.Message.length) {
                vm.s_oNotify.warning(data.Message);
              }
              vm.Areas[areaNumber].AreaProperty.Status = 0;
              vm.Areas[areaNumber].AreaProperty.Message = data.Message;
              if (vm.Areas[areaNumber].videoDisplay) {}
            });
            Lotus.SenCasino.Games.Sedie.Realtime.on("area:" + areaNumber + ":event:2009", function (data) {
              console.log("Huỷ ván: data= " + JSON.stringify(data));
              vm.s_oNotify.roundCanceled(areaNumber);
            });
          });
        }
      };
      this.init = function () {
        Lotus.SenCasino.UserGame.getPlayerSettings().then(function (playerSetting) {
          vm.o_playerProperty = playerSetting;
          Lotus.SenCasino.Games.Sedie.GamePlay.multiJoin({AreaNumbers: vm.a_Areas}).then(function (GamePlay) {
            vm.s_oGameProperty = GamePlay;
            vm.s_oGameProperty.map(function (item) {
              if (item.AreaProperty.Status === 0) {
                vm.s_oNotify.warning(item.AreaProperty.Message);
                item.GameProperty = {GameNumber: "", GameRound: 0, Status: 0, BetSeconds: 0};
                item.DealerProperty = {Avatar: "", FullName: ""};
              }
              vm.Areas[item.AreaNumber].AreaProperty = item.AreaProperty;
            });
            Lotus.SenCasino.Games.Sedie.Parameter.getParameters().then(function (Parameter) {
              vm.s_oGameParameter = Parameter;
              vm.s_oGame._stating();
            }).catch(function (error) {
              console.log(error);
              $timeout(function () {
                vm.s_oGame.init();
              }, 500);
            });
          }).catch(function (error) {
            console.log(error.message);
            $timeout(function () {
              vm.s_oGame.init();
            }, 500);
          });
        }).catch(function (er) {
          console.log(er.message);
          $timeout(function () {
            vm.s_oGame.init();
          }, 500);
        });
      };
      this._stating = function () {
        vm.areaProperty();
        vm.buildRoller();
        vm.buildTokenStack();
        vm.generateTableInfo();
        $timeout(function () {
          vm.globalConfig.Ready = true;
          $scope.$digest();
        }, 100);
        vm.firstPlayVideo();
      };
      this.b_cancel = function (area) {
        vm.resetTable(area);
        $timeout(function () {
          vm.Areas[area].o_Table.o_disabledTable = false;
        });
      };
      this.b_betting = function (area) {
        vm.s_oGame.executeBetting(area);
      };
      this.b_re_betting = function (area) {
        this._rePromise(area);
      };
      this.playGame = function (area, data) {
        vm.Areas[area].o_Table.maxSeconds = data.BetSeconds;
        vm.Areas[area].GameProperty.BetSeconds = data.BetSeconds - 1;
        vm.Areas[area].o_Table.s_TextStatus = "Bắt đầu đặt cược";
        vm.Areas[area].o_Table.o_disabledTable = false;
        vm.playingVariables[area]._firstTime = true;
        vm.playingVariables[area]._committed = false;
        vm.s_oGameParameter.map(function (item) {
          vm.Areas[area].o_Table.highlight[item.BetType] = false;
        });
        vm.s_oNotify.startBetting(area);
        this._checkPreOrder(area);
        if (countdown[area] !== undefined) {
          $interval.cancel(countdown[area]);
        }
        countdown[area] = $interval(function () {
          vm.Areas[area].GameProperty.BetSeconds--;
          if (vm.Areas[area].GameProperty.BetSeconds < 1) {
            $interval.cancel(countdown[area]);
            vm.Areas[area].GameProperty.BetSeconds = 0;
            vm.Areas[area].o_Table.s_TextStatus = "Ngừng đặt cược";
            vm.Areas[area].o_Table.o_disabledTable = true;
            vm.Areas[area].o_Table.o_disabledButton = {cancel: true, betting: true, reBet: true};
          }
        }, 1e3);
      };
      this._checkPreOrder = function (area) {
        let _preMoney = 0;
        if (vm.playingVariables[area]._oRecordedBetting !== undefined) {
          vm.playingVariables[area]._oRecordedBetting.map(function (item, index) {
            _preMoney += item.Amount;
          });
        }
        vm.Areas[area].o_Table.o_disabledButton.reBet = _preMoney === 0;
      };
      this._onPromise = function (area, betId) {
        if (vm.o_playerProperty.MaxWinLoseReachedException) {
          vm.s_oNotify.warning("Tài khoản của quý khách đã vượt quá giới hạn thắng thua");
          return;
        }
        if (vm.globalConfig._iCurBetAmount + vm.Areas[area].o_Table._iTotalCurrentBet > $rootScope.User.Balance) {
          vm.s_oNotify.warning("Số dư tài khoản không đủ để thực hiện tất cả đơn cược");
        } else {
          vm._oPlayerModel[area].map(function (value) {
            if (value.BetType === betId) {
              if (value.Amount + vm.globalConfig._iCurBetAmount > value.maxAmount) {
                vm.s_oNotify.warning("Mức cược không hợp lệ.<br> Quý khách không được đặt cược quá " + (value.maxAmount / 1e3).formatMoney() + "K cho cửa này");
              } else {
                vm.playingVariables[area]._committed = false;
                value.Amount += vm.globalConfig._iCurBetAmount;
                vm.Areas[area].o_Table._iTotalCurrentBet += vm.globalConfig._iCurBetAmount;
                vm.Areas[area].o_Table.o_moneyOnTable[betId].money += vm.globalConfig._iCurBetAmount;
                vm.Areas[area].o_Table.o_moneyOnTable[betId].committed = false;
                let curAmount = vm.Areas[area].o_Table.o_moneyOnTable[betId].money;
                vm.Areas[area].o_Table.a_Token[betId] = casinoConfig.generateTokenByIndex(curAmount, vm.globalConfig.configMoney);
              }
            }
          });
        }
        if (vm.Areas[area].o_Table._iTotalCurrentBet !== 0) {
          vm.Areas[area].o_Table.o_disabledButton.cancel = false;
          vm.Areas[area].o_Table.o_disabledButton.betting = false;
          vm.Areas[area].o_Table.o_disabledButton.reBet = true;
        }
      };
      this.executeBetting = function (area) {
        let _errorChecking = false;
        let _tempMoney = vm._oPlayerModel[area];
        for (let i = 0; i < _tempMoney.length; i++) {
          if (_tempMoney[i].Amount !== 0 && (_tempMoney[i].Amount < _tempMoney[i].minAmount || _tempMoney[i].Amount > _tempMoney[i].maxAmount)) {
            _errorChecking = true;
            vm.s_oNotify.warning("Mức cược trên cửa " + _tempMoney[i].BetType.formatBetType() + " phải lớn hơn " + _tempMoney[i].minAmount.formatMoney() + " và nhỏ hơn " + _tempMoney[i].maxAmount.formatMoney());
            break;
          }
        }
        if (_errorChecking) {
          return;
        }
        let _sendData = [];
        vm._oPlayerModel[area].map(function (data) {
          if (data.Amount !== 0) {
            _sendData.push({BetType: data.BetType, Amount: data.Amount});
          }
        });
        if (_sendData.length === 0) {
          return;
        }
        vm.Areas[area].o_Table.o_disabledTable = true;
        vm.Areas[area].o_Table.o_disabledButton = {cancel: true, betting: true, reBet: true};
        Lotus.SenCasino.Games.Sedie.GamePlay.play({AreaNumber: area, BetItems: _sendData}).then(function (response) {
          $rootScope.User.Balance = response.Balance;
          vm.Areas[area].o_Table.o_disabledTable = false;
          vm.s_oNotify.bettingSuccess(area);
          vm.Areas[area].o_Table.s_TextStatus = "Đặt cược thành công";
          for (let key in vm.Areas[area].o_Table.o_moneyOnTable) {
            if (vm.Areas[area].o_Table.o_moneyOnTable.hasOwnProperty(key)) {
              vm.Areas[area].o_Table.o_moneyOnTable[key].committed = vm.Areas[area].o_Table.o_moneyOnTable[key].money !== 0;
            }
          }
          vm.s_oGame._recordBetting(area);
        }).catch(function (error) {
          vm.s_oNotify.warning(error.message);
          vm.Areas[area].o_Table.o_disabledTable = false;
          vm.Areas[area].o_Table.o_disabledButton = {cancel: false, betting: false, reBet: true};
          if (error.code === "MaxWinLoseReachedException") {
            vm.o_playerProperty.MaxWinLoseReachedException = true;
          }
        });
      };
      this._recordBetting = function (area) {
        if (vm.playingVariables[area]._firstTime) {
          vm.playingVariables[area]._oRecordedBetting = angular.copy(vm._oPlayerModel[area]);
        } else {
          vm._oPlayerModel[area].map(function (pm) {
            if (pm.Amount !== 0) {
              vm.playingVariables[area]._oRecordedBetting.find(function (pv) {
                return pv.BetType === pm.BetType;
              }).Amount += pm.Amount;
            }
          });
        }
        vm.playingVariables[area]._committed = true;
        vm.playingVariables[area]._firstTime = false;
        $timeout(function () {
          vm.gen_oPlayerModel(area);
        }, 100);
        console.log("_oRecordedBetting", vm.playingVariables[area]._oRecordedBetting);
      };
      this._endGame = function (area, _iGameResult) {
        vm.Areas[area].GameProperty.BetSeconds = 0;
        vm.Areas[area].o_Table.o_disabledTable = true;
        vm.Areas[area].o_Table.o_disabledButton = {cancel: true, betting: true, reBet: true};
        vm.updateRoller(area, _iGameResult);
        vm.resetTable(area);
        this._winMoney(area, _iGameResult);
        $timeout(function () {
          vm.s_oGameParameter.map(function (pr) {
            vm.Areas[area].o_Table.highlight[pr.BetType] = vm.s_oGame._checkWinning(pr.BetType, _iGameResult);
          });
          $timeout(function () {
            vm.settingNewGame(area);
          }, 5e3);
        }, 200);
      };
      this._checkWinning = function (betId, _iGameResult) {
        if (betId === 0) {
          return _iGameResult % 2 === 0;
        } else if (betId === 1) {
          return _iGameResult % 2 !== 0;
        } else if (betId === 2) {
          return _iGameResult === 4;
        } else if (betId === 3) {
          return _iGameResult === 0;
        } else if (betId === 4) {
          return _iGameResult === 1;
        } else if (betId === 5) {
          return _iGameResult === 3;
        }
      };
      this._winMoney = function (area, _iGameResult) {
        let _totalWinMoney = 0;
        for (let key in vm.Areas[area].o_Table.o_moneyOnTable) {
          if (vm.Areas[area].o_Table.o_moneyOnTable.hasOwnProperty(key)) {
            if (vm.s_oGame._checkWinning(parseInt(key), _iGameResult)) {
              _totalWinMoney += vm.Areas[area].o_Table.o_moneyOnTable[key].money * vm.s_oGameParameter.find(function (p) {
                return p.BetType === parseInt(key);
              }).Payouts;
            }
          }
        }
        if (_totalWinMoney > 0) {
          $rootScope.User.Balance += _totalWinMoney;
          vm.s_oNotify.winMoney(area, _totalWinMoney);
        }
      };
      this._rePromise = function (area) {
        if (vm.playingVariables[area]._oRecordedBetting !== undefined) {
          vm.playingVariables[area]._oRecordedBetting.map(function (rc) {
            vm._oPlayerModel[area].find(function (pm) {
              return pm.BetType === rc.BetType;
            }).Amount = rc.Amount;
            vm.Areas[area].o_Table.o_moneyOnTable[rc.BetType].money = rc.Amount;
          });
        }
        vm.Areas[area].o_Table._iTotalCurrentBet = 0;
        for (let key in vm.Areas[area].o_Table.o_moneyOnTable) {
          if (vm.Areas[area].o_Table.o_moneyOnTable.hasOwnProperty(key)) {
            vm.Areas[area].o_Table.a_Token[key] = casinoConfig.generateTokenByIndex(vm.Areas[area].o_Table.o_moneyOnTable[key].money, vm.globalConfig.configMoney);
            vm.Areas[area].o_Table._iTotalCurrentBet += vm.Areas[area].o_Table.o_moneyOnTable[key].money;
          }
        }
        if (vm.Areas[area].o_Table._iTotalCurrentBet !== 0) {
          vm.Areas[area].o_Table.o_disabledButton.cancel = false;
          vm.Areas[area].o_Table.o_disabledButton.betting = false;
          vm.Areas[area].o_Table.o_disabledButton.reBet = true;
        }
        if (vm.Areas[area].o_Table._iTotalCurrentBet > $rootScope.User.Balance) {
          vm.s_oNotify.warning("Số dư tài khoản không đủ để thực hiện toàn bộ đơn cược.");
          $timeout(function () {
            vm.resetTable(area);
          }, 100);
        }
      };
    }
    function buildTokenStack() {
      let aAllowTokens = casinoConfig.configToken();
      aAllowTokens[vm.o_playerProperty.DefaultBetLimit].token.map(function (token, index) {
        if (index < 5) {
          vm.tokenOnStack.push({name: token});
        }
      });
      vm.tokenOnStack.length = 5;
      vm.tokenOnStack[0].active = true;
      vm.globalConfig._iCurBetAmount = vm.globalConfig.configMoney.find(function (item) {
        return item.label === vm.tokenOnStack[0].name;
      }).money;
    }
    function areaProperty() {
      vm.a_Areas.map(function (area) {
        vm.Areas[area].AreaProperty = vm.s_oGameProperty.filter(function (item) {
          return item.AreaNumber === area;
        })[0].AreaProperty;
        vm.Areas[area].GameProperty = vm.s_oGameProperty.filter(function (item) {
          return item.AreaNumber === area;
        })[0].GameProperty;
        vm.Areas[area].GameProperty.BetSeconds = vm.Areas[area].GameProperty.BetSeconds === undefined ? 0 : vm.Areas[area].GameProperty.BetSeconds;
      });
    }
    function updateRoller(area, result) {
      vm.s_oGameProperty.filter(function (item) {
        return item.AreaNumber === area;
      })[0].AreaProperty.GameResults.push(result);
      vm.buildRoller();
    }
    function resetRoller(area) {
      vm.s_oGameProperty.filter(function (item) {
        return item.AreaNumber === area;
      })[0].AreaProperty.GameResults = [];
      vm.buildRoller();
    }
    function buildRoller() {
      vm.a_Areas.map(function (area) {
        vm.Areas[area].a_gResult = vm.s_oGameProperty.filter(function (item) {
          return item.AreaNumber === area;
        })[0].AreaProperty.GameResults;
        vm.Areas[area].roadRoller = {odd: 0, even: 0};
        for (let i = 0; i < vm.Areas[area].a_gResult.length; i++) {
          if (vm.Areas[area].a_gResult[i] % 2 !== 0) {
            vm.Areas[area].roadRoller.odd++;
          } else {
            vm.Areas[area].roadRoller.even++;
          }
        }
        vm.Areas[area].roadRoller.template = [{slot: 6, data: []}];
        vm.Areas[area].a_gResult.map(function (result, index) {
          let last = vm.Areas[area].roadRoller.template[vm.Areas[area].roadRoller.template.length - 1].data[vm.Areas[area].roadRoller.template[vm.Areas[area].roadRoller.template.length - 1].data.length - 1];
          if (last === undefined) {
            vm.Areas[area].roadRoller.template[vm.Areas[area].roadRoller.template.length - 1].data.push(result);
          } else {
            if (last % 2 === result % 2) {
              vm.Areas[area].roadRoller.template[vm.Areas[area].roadRoller.template.length - 1].data.push(result);
            } else {
              vm.Areas[area].roadRoller.template.push({slot: 6, data: [result]});
            }
          }
        });
        vm.Areas[area].roadRoller.template.map(function (item, index) {
          let extraLot = item.data.length - item.slot;
          for (let x = 1; x <= extraLot; x++) {
            if (vm.Areas[area].roadRoller.template[index + x] !== undefined) {
              vm.Areas[area].roadRoller.template[index + x].slot -= 1;
            }
          }
        });
        if (vm.Areas[area].roadRoller.template.length < 20) {
          let bo = angular.copy(20 - vm.Areas[area].roadRoller.template.length);
          for (let i = 0; i < bo; i++) {
            vm.Areas[area].roadRoller.template.push({slot: 6, data: [9, 9, 9, 9, 9, 9]});
          }
        }
        vm.Areas[area].roadRoller.template.map(function (item, index) {
          let over = item.data.length - item.slot;
          if (over > 0 && over > vm.Areas[area].roadRoller.template.length - index - 1) {
            let max = angular.copy(over - (vm.Areas[area].roadRoller.template.length - index));
            for (let i = 0; i < max + 2; i++) {
              vm.Areas[area].roadRoller.template.push({slot: 6, data: [9, 9, 9, 9, 9, 9]});
            }
          }
        });
        vm.Areas[area].roadRoller.template.map(function (item, index) {
          let arrLength = angular.copy(item.data.length);
          for (let i = 0; i < 6 - arrLength; i++) {
            item.data.push(9);
          }
        });
        vm.Areas[area].roadRoller.template.reverse();
        vm.Areas[area].roadRoller.template.map(function (item, index) {
          let element = item.slot;
          if (item.data.length > item.slot) {
            let leftovers = {index: index, element: element--, overs: item.data.slice(item.slot - item.data.length)};
            item.data.splice(item.slot - item.data.length);
            leftovers.overs = leftovers.overs.filter(function (o) {
              return o !== 9;
            });
            if (leftovers.overs.length) {
              leftovers.overs.map(function (over, id) {
                vm.Areas[area].roadRoller.template[leftovers.index - 1 - id].data[leftovers.element - 1] = over;
              });
            }
          }
        });
        vm.Areas[area].roadRoller.template.reverse();
        if (vm.Areas[area].roadRoller.template.length > 20) {
          vm.Areas[area].roadRoller.template = vm.Areas[area].roadRoller.template.slice(vm.Areas[area].roadRoller.template.length - 20);
        }
      });
    }
    function generateTableInfo() {
      vm.a_Areas.map(function (area) {
        vm.settingNewGame(area);
      });
      vm.gen_oPlayerModel();
    }
    function _prepareGame(area, data) {
      if (data.GameRound === 1) {
        vm.resetRoller(area);
      }
      vm.Areas[area].GameProperty.GameNumber = data.GameNumber;
      vm.Areas[area].GameProperty.GameRound = data.GameRound;
      console.log(vm.Areas[area].GameProperty);
      vm.settingNewGame(area);
    }
    function settingNewGame(area) {
      vm.Areas[area].o_Table = {};
      vm.Areas[area].o_Table.s_TextStatus = "Chờ bắt đầu ván mới";
      vm.Areas[area].o_Table.o_moneyOnTable = {};
      vm.Areas[area].o_Table.a_Token = {};
      vm.Areas[area].o_Table.o_disabledTable = true;
      vm.Areas[area].o_Table.o_disabledButton = {cancel: true, betting: true, reBet: true};
      vm.Areas[area].o_Table.highlight = {};
      vm.Areas[area].o_Table._iTotalCurrentBet = 0;
      vm.s_oGameParameter.map(function (item, index) {
        vm.Areas[area].o_Table.highlight[item.BetType] = false;
        vm.Areas[area].o_Table.o_moneyOnTable[item.BetType] = {money: 0, committed: false};
      });
    }
    function resetTable(area) {
      vm.Areas[area].o_Table.a_Token = {};
      vm.Areas[area].o_Table.o_disabledButton = {cancel: true, betting: true, reBet: true};
      vm.Areas[area].o_Table.o_disabledTable = true;
      vm.s_oGameParameter.map(function (item) {
        vm.Areas[area].o_Table.highlight[item.BetType] = false;
      });
      vm.Areas[area].o_Table._iTotalCurrentBet = 0;
      for (let key in vm.Areas[area].o_Table.o_moneyOnTable) {
        if (vm.Areas[area].o_Table.o_moneyOnTable.hasOwnProperty(key)) {
          vm.Areas[area].o_Table.o_moneyOnTable[key].money = vm.Areas[area].o_Table.o_moneyOnTable[key].money - vm._oPlayerModel[area].find(function (oP) {
            return oP.BetType === parseInt(key);
          }).Amount;
          vm.Areas[area].o_Table.o_moneyOnTable[key].committed = vm.Areas[area].o_Table.o_moneyOnTable[key].money !== 0;
          vm.Areas[area].o_Table.a_Token[key] = casinoConfig.generateTokenByIndex(vm.Areas[area].o_Table.o_moneyOnTable[key].money, vm.globalConfig.configMoney);
          vm.Areas[area].o_Table._iTotalCurrentBet += vm.Areas[area].o_Table.o_moneyOnTable[key].money;
        }
      }
      vm.gen_oPlayerModel(area);
      if (vm.Areas[area].o_Table._iTotalCurrentBet === 0) {
        vm.s_oGame._checkPreOrder(area);
      }
    }
    function gen_oPlayerModel(area) {
      let _maxBase = casinoConfig.maxBase(vm.o_playerProperty.DefaultBetLimit);
      for (let i = 0; i < vm.s_oGameParameter.length; i++) {
        vm.s_oGameParameter[i].Amount = 0;
        vm.s_oGameParameter[i].minAmount = _maxBase * vm.s_oGameParameter[i].MinBet;
        vm.s_oGameParameter[i].maxAmount = _maxBase * vm.s_oGameParameter[i].MaxBet;
      }
      if (area === undefined) {
        vm.a_Areas.map(function (_area) {
          vm._oPlayerModel[_area] = JSON.parse(JSON.stringify(vm.s_oGameParameter));
        });
      } else {
        vm._oPlayerModel[area] = JSON.parse(JSON.stringify(vm.s_oGameParameter));
      }
    }
    function playVideo(area) {
      let s_gStream = {100: {streamNames: ["vKzPg-qpcsZ", "vKzPg-C8By5", "vKzPg-reCqs", "vKzPg-xDN2P"], startStream: "vKzPg-reCqs"}, 101: {streamNames: ["vKzPg-QRd7P", "vKzPg-UrA9G", "vKzPg-IR0zX"], startStream: "vKzPg-UrA9G"}};
      let s_streamGroup = {100: "b6a84d09-63a6-42a8-9912-1abddb8ac28b", 101: "dc3f7586-7424-4021-9ad1-3c7018f5035e"};
      if (H5LivePlayer.isSupported()) {
        if (Object.keys(livePlayer[area]).length !== 0) {
          livePlayer[area].play();
        } else {
          livePlayer[area] = H5LivePlayer.create({playerDivId: "video-element-" + area, metrics: {username: $rootScope.User.Username, game: "sedie-" + area}});
          livePlayer[area].startGroupStream({streamGroupId: s_streamGroup[area]});
        }
      } else {
        alert("Trình duyệt của quý khách không hỗ trợ xem video phát trực tuyến");
      }
    }
    function videoToggle(area) {
      vm.videoInteraction[area] = true;
      $timeout(function () {
        vm.videoInteraction[area] = false;
      }, 5e3);
      vm.Areas[area].videoDisplay = !vm.Areas[area].videoDisplay;
      if (vm.Areas[area].videoDisplay) {
        vm.playVideo(area);
      } else {
        $timeout(function () {
          livePlayer[area].pause();
        }, 1e3);
      }
    }
    function firstPlayVideo() {
      $timeout(function () {
        if (Object.keys(livePlayer[100]).length === 0) {
          vm.videoToggle(100);
        }
      }, 1e3);
      $timeout(function () {
        if (Object.keys(livePlayer[101]).length === 0) {
          vm.videoToggle(101);
        }
      }, 2e3);
    }
    function Notify() {
      this.startBetting = function (area) {
        vm.showNotify[area].startBetting = true;
        $timeout(function () {
          vm.showNotify[area].startBetting = false;
        }, 2e3);
      };
      this.bettingSuccess = function (area) {
        vm.showNotify[area].bettingSuccess = true;
        $timeout(function () {
          vm.showNotify[area].bettingSuccess = false;
        }, 2e3);
      };
      this.winMoney = function (area, money) {
        vm.showNotify[area].winMoney = money;
        $timeout(function () {
          vm.showNotify[area].winMoney = undefined;
        }, 5e3);
      };
      this.newDealer = function (area, dealer) {
        vm.showNotify[area].newDealer = dealer;
        $timeout(function () {
          vm.showNotify[area].newDealer = undefined;
        }, 5e3);
      };
      this.roundCanceled = function (area) {
        vm.showNotify[area].roundCanceled = true;
        $timeout(function () {
          vm.showNotify[area].roundCanceled = false;
        }, 5e3);
      };
      this.warning = function (message) {
        $mdDialog.show({controller: warningCtrl, templateUrl: "app/main/casino/lobby/dialog/warning.html", parent: angular.element(document.body), fullscreen: true, locals: {message: message}});
        function warningCtrl($scope, message) {
          $scope.cancel = function () {
            $mdDialog.cancel();
          };
          $scope.message = message;
        }
      };
    }
    function tableInfo(area) {
      $mdDialog.show({controller: tableCtrl, templateUrl: "app/main/casino/lobby/dialog/table.html", parent: angular.element(document.body), clickOutsideToClose: true, locals: {area: area}});
      function tableCtrl($scope, area) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        let _maxBase = casinoConfig.maxBase(vm.o_playerProperty.DefaultBetLimit);
        $scope.table = {};
        $scope.table.name = vm.s_oGameProperty.find(function (obj) {
          return obj.AreaNumber === area;
        }).AreaProperty.Name;
        $scope.table.Dealer = vm.s_oGameProperty.find(function (obj) {
          return obj.AreaNumber === area;
        }).DealerProperty.FullName;
        $scope.table.Round = area + "." + vm.s_oGameProperty.find(function (obj) {
          return obj.AreaNumber === area;
        }).GameProperty.GameNumber + "." + vm.s_oGameProperty.find(function (obj) {
          return obj.AreaNumber === area;
        }).GameProperty.GameRound;
        $scope.table._betLimit = {};
        $scope.table._betLimit.evenOdd = vm.s_oGameParameter.find(function (obj) {
          return obj.BetType === 0;
        }).MaxBet * _maxBase;
        $scope.table._betLimit.zeroFour = vm.s_oGameParameter.find(function (obj) {
          return obj.BetType === 2;
        }).MaxBet * _maxBase;
        $scope.table._betLimit.oneThree = vm.s_oGameParameter.find(function (obj) {
          return obj.BetType === 4;
        }).MaxBet * _maxBase;
      }
    }
    function betList() {
      $mdDialog.show({controller: tableCtrl, templateUrl: "app/main/casino/lobby/dialog/bet-list.html", parent: angular.element(document.body), clickOutsideToClose: true, fullscreen: true});
      function tableCtrl($scope) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.a_betLists = [];
        $scope.getBetItems = function (ltId) {
          let data = {From: moment().subtract(14, "day").format("YYYY-MM-DD"), To: moment().format("YYYY-MM-DD"), LastId: ltId, Limit: 5};
          if (ltId !== undefined) {
            data.LastId = ltId;
          }
          $scope.submitting = true;
          Lotus.SenCasino.Games.Sedie.Report.getBetItems(data).then(function (response) {
            $scope.viewMore = response.length === data.Limit;
            $scope.a_betLists = $scope.a_betLists.concat(response);
            $scope.$digest();
            $timeout(function () {
              $scope.submitting = false;
            }, 500);
          });
        };
        $scope.getBetItems();
        $scope.playVid = function (item) {
          $mdDialog.show({controller: playCtrl, templateUrl: "app/main/casino/lobby/dialog/play-vid.html", parent: angular.element(document.body), clickOutsideToClose: true, fullscreen: true, multiple: true, locals: {item: item}});
          function playCtrl($scope, item) {
            $scope.cancel = function () {
              $mdDialog.cancel();
            };
            $scope.play = function (item) {
              $scope.vidSrc = "https://vod.one789cdn.com/" + item.AreaNumber + "-" + item.GameNumber + "-" + item.GameRound + ".mp4";
              angular.element("video").attr({src: $scope.vidSrc, autoplay: "autoplay"});
            };
            $scope.vidEnded = function () {
              if (item.GameRound < 100) {
                item.GameRound = item.GameRound + 1;
                $scope.play(item);
              }
            };
            $scope.play(item);
          }
        };
      }
    }
    function init() {
      if ($rootScope.isAuthenticated && $rootScope.connectState === "Connected") {
        vm.s_oGame.Realtime();
      } else {
        $timeout(function () {
          vm.init();
        }, 500);
      }
    }
    vm.init();
    if ($rootScope.isAuthenticated) {
      $scope.$on("$destroy", function () {
        vm.a_Areas.map(function (area) {
          if (countdown[area]) {
            $interval.cancel(countdown[area]);
          }
          $timeout(function () {
            if (H5LivePlayer.isSupported()) {
              if (Object.keys(livePlayer[area]).length !== 0) {
                livePlayer[area].destroy();
              }
            }
          });
        });
        sessionStorage.setItem("justDestroy", "yes");
      });
      if (sessionStorage.getItem("justDestroy") === "yes") {
        sessionStorage.removeItem("justDestroy");
        $timeout(function () {
          location.reload();
        });
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.auth", []).config(config);
  function config($stateProvider) {
    $stateProvider.state("app.auth", {url: "/auth", views: {"main@": {templateUrl: "app/core/layouts/content-only.html", controller: "MainController as one"}, "content@app.auth": {templateUrl: "app/main/auth/auth.html", controller: "authCtrl as vm"}}, bodyClass: "auth789"}).state("app.auth.set-password", {url: "/set-password", views: {"content@app.auth": {templateUrl: "app/main/auth/password/password.html", controller: "setPasswordCtrl as vm"}}, bodyClass: "auth789"}).state("app.auth.otp", {url: "/otp", views: {"content@app.auth": {templateUrl: "app/main/auth/otp/otp.html", controller: "providedOtpCtrl as vm"}}, bodyClass: "auth789"}).state("app.auth.agreement", {url: "/agreement?id", views: {"content@app.auth": {templateUrl: "app/main/auth/agreement/agreement.html", controller: "agreementCtrl as vm"}}, bodyClass: "agreement"}).state("app.auth.enable-otp", {url: "/enable-otp", views: {"content@app.auth": {templateUrl: "app/main/auth/enable-otp/enable-otp.html"}, "otpView@app.auth.enable-otp": {templateUrl: "app/main/account/otp/otp.template.html", controller: "otpController as vm"}}, bodyClass: "enable-otp"}).state("app.auth.expired", {url: "/expired", views: {"content@app.auth": {templateUrl: "app/main/auth/password-expired/password-expired.html", controller: "expiredCtrl as vm"}}, bodyClass: "agreement"});
  }
}());
(function () {
  "use strict";
  angular.module("app.auth").controller("setPasswordCtrl", setPasswordCtrl);
  function setPasswordCtrl($rootScope, $state, $location, network, message) {
    var vm = this;
    vm.form = {};
    vm.setPassword = setPassword;
    vm.mustChange = $location.path() === "/auth/set-password";
    if ($rootScope.User === undefined && !vm.mustChange) {
      $state.go("app.dashboard");
    }
    vm.inputFocus = inputFocus;
    vm.inputKeyup = inputKeyup;
    let lowerCasePattern = /^(?=.*[a-z]).+$/;
    let upperCasePattern = /^(?=.*[A-Z]).+$/;
    let numberPattern = /^(?=.*[\d]).+$/;
    let specialCharacterPatter = /([-+=_!@#$%^&*.,;:'\"<>/?`~\[\]\(\)\{\}\\\|\s])/;
    let characterCountPattern = /^.{6,}/;
    function inputFocus() {
      vm.showCheck = true;
      vm.inputKeyup();
    }
    function inputKeyup() {
      if (vm.form.newPassword === undefined) {
        return;
      }
      vm.lowerCase = lowerCasePattern.test(vm.form.newPassword) ? 1 : 0;
      vm.upperCase = upperCasePattern.test(vm.form.newPassword) ? 1 : 0;
      vm.number = numberPattern.test(vm.form.newPassword) ? 1 : 0;
      vm.specialChar = specialCharacterPatter.test(vm.form.newPassword) ? 1 : 0;
      vm.characterCount = characterCountPattern.test(vm.form.newPassword);
      vm.totalScore = vm.lowerCase + vm.upperCase + vm.number + vm.specialChar;
      vm.passwordPerfect = vm.totalScore >= 3 && vm.characterCount;
      vm.showCheck = !vm.passwordPerfect;
    }
    function setPassword() {
      vm.submitting = true;
      vm.send = angular.copy(vm.form);
      network.User.completeNewPassword(vm.send).then(function (response) {
        vm.submitting = false;
        message.show("Cập nhật mật khẩu thành công");
        $rootScope.$broadcast("userAccount::update");
      }).catch(function (error) {
        console.log(error);
        vm.submitting = false;
        message.show(error.message);
        $state.go("app.auth");
      });
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.auth").controller("expiredCtrl", expiredCtrl);
  function expiredCtrl($scope, $rootScope, $window) {
    let vm = this;
  }
}());
(function () {
  "use strict";
  angular.module("app.auth").controller("providedOtpCtrl", providedOtpCtrl);
  function providedOtpCtrl($scope, $rootScope, network, message) {
    let vm = this;
    vm.validateOTP = validateOTP;
    function validateOTP() {
      vm.submitting = true;
      network.User.confirmSignIn({code: vm.otp}).then(function (resp) {
        $rootScope.$broadcast("userAccount::update");
      }).catch(function (err) {
        if (err.code === "CodeMismatchException") {
          vm.otp = "";
          vm.submitting = false;
          message.show("OTP không hợp lệ");
          $scope.$digest();
        } else {
          vm.otp = "";
          vm.submitting = false;
          message.show(err.message);
          $scope.$digest();
        }
      });
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.auth").controller("agreementCtrl", agreementCtrl);
  function agreementCtrl($scope, $rootScope, $window, $interval) {
    let vm = this;
    vm.iAgree = iAgree;
    vm.wait = 5;
    vm.inter = $interval(function () {
      vm.wait -= 1;
      if (vm.wait <= 0) {
        vm.thisOK = true;
        $interval.cancel(vm.inter);
      }
    }, 1e3);
    function iAgree() {
      $interval.cancel(vm.inter);
      if ($rootScope.returnUrl === undefined) {
        $window.location = "/traditional/northern/jackpot/";
      } else {
        $rootScope.returnUrl = $rootScope.returnUrl === "/" ? "/traditional/northern/jackpot/" : $rootScope.returnUrl;
        $window.location = $rootScope.returnUrl;
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("statementCtrl", statementCtrl);
  function statementCtrl($rootScope, $scope, $timeout, network, msUtils) {
    var vm = this;
    vm.fetchReport = fetchReport;
    vm.fetchReport();
    vm.loading = true;
    function fetchReport() {
      if ($rootScope.User !== undefined) {
        let data = {From: moment().subtract(1, "week").startOf("isoWeek").format("YYYY-MM-DD"), To: moment().endOf("isoWeek").format("YYYY-MM-DD"), ProductTypes: [0, 1, 2, 100, 101]};
        network.Report.getReportByProductionDate(data).then(function (response) {
          vm.loading = false;
          angular.forEach(response, function (r) {
            r.week = moment(r.Date).format("w");
            r.yearDay = moment(r.Date).dayOfYear();
            r.dateVi = moment(r.Date).format("dddd, DD/MM");
            r.unixDate = moment(r.Date).unix();
          });
          response = response.sort(function (a, b) {
            return b.yearDay - a.yearDay;
          });
          vm.groupedData = response.groupBy(function (o) {
            return JSON.stringify({a: o.week});
          });
          angular.forEach(vm.groupedData, function (w, i) {
            w.groupByDate = w.group.groupBy(function (o) {
              return JSON.stringify({a: o.yearDay});
            });
            angular.forEach(w.groupByDate, function (d) {
              d.sumDay = {Quantity: 0, Commission: 0, Amount: 0, NetAmount: 0, WinLose: 0, Result: 0};
              angular.forEach(d.group, function (p) {
                d.sumDay.Quantity += p.Quantity;
                d.sumDay.Commission += p.Commission;
                d.sumDay.Amount += p.Amount;
                d.sumDay.NetAmount += p.NetAmount;
                d.sumDay.WinLose += p.WinLose;
              });
            });
            w.weekDay = w.group[0].week === moment().format("w") ? "Tuần này" : "Tuần trước";
            w.sumWeek = {Quantity: 0, Commission: 0, Amount: 0, NetAmount: 0, WinLose: 0, Result: 0};
            angular.forEach(w.group, function (s) {
              w.sumWeek.Quantity += s.Quantity;
              w.sumWeek.Commission += s.Commission;
              w.sumWeek.Amount += s.Amount;
              w.sumWeek.NetAmount += s.NetAmount;
              w.sumWeek.WinLose += s.WinLose;
            });
          });
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          vm.fetchReport();
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("telegramCtrl", telegramCtrl);
  function telegramCtrl($rootScope, $mdDialog, $scope, message, msUtils) {
    let vm = this;
    vm.cancelTelegram = cancelTelegram;
    vm.initTelegram = initTelegram;
    vm.hasPsk = false;
    vm.deviceName = msUtils.isMobile() === null ? "máy tính" : "điện thoại";
    let tableList = ["iPad"];
    if (msUtils.exists(msUtils.isMobile(), tableList)) {
      vm.deviceName = "máy tính bảng";
    }
    vm.initTelegram();
    function initTelegram() {
      Lotus.Telegram.generateLink().then(function (response) {
        vm.hasPsk = true;
        vm.telegramBot = response;
      });
    }
    vm.copied = false;
    vm.onSuccess = function (e) {
      vm.copied = !vm.copied;
      setTimeout(function () {
        vm.copied = !vm.copied;
        $scope.$digest();
      }, 3e3);
    };
    function cancelTelegram(ev) {
      let confirm = $mdDialog.confirm().title("Hủy liên kết?").textContent("Quý khách vui lòng xác nhận sẽ hủy liên kết tài khoản này với Telegram").ariaLabel("Lucky day").targetEvent(ev).clickOutsideToClose(true).ok("Hủy liên kết").cancel("Không");
      $mdDialog.show(confirm).then(function () {
        Lotus.Telegram.unlink().then(function (response) {
          if (response.Result) {
            message.show("Hủy liên kết thành công.");
            vm.telegramBot.Status = 0;
            vm.initTelegram();
            $scope.$digest();
          }
        });
      }, function () {});
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("otpController", otpController);
  function otpController($rootScope, $mdDialog, $mdToast, $timeout, $state, network, message) {
    var vm = this;
    vm.starting = starting;
    vm.cancelOTP = cancelOTP;
    vm.init = init;
    vm.init();
    function init() {
      if ($rootScope.User !== undefined) {
        vm.EnabledOTP = $rootScope.User.MfaType === 1;
      } else {
        $timeout(function () {
          vm.init();
        }, 1e3);
      }
    }
    function cancelOTP(ev) {
      let confirm = $mdDialog.prompt().title("Qúy khách muốn hủy xác minh 2 bước").textContent("Quý khách vui lòng cung cấp mã OTP để thực hiện hủy").placeholder("OTP").ariaLabel("OTP").targetEvent(ev).required(true).ok("OK").cancel("Cancel");
      $mdDialog.show(confirm).then(function (otp) {
        network.User.disableMFA({code: otp}).then(function (resp) {
          if (resp) {
            message.show("Hủy xác minh 2 bước thành công.");
            vm.EnabledOTP = false;
            $rootScope.User.MfaType = 0;
            $rootScope.$broadcast("userAccount::update");
          }
        }).catch(function (err) {
          if (err.code === "MFARequiredException") {
            message.show("Qúy khách bắt buộc phải sử dụng OTP");
          } else {
            message.show("OTP không hợp lệ");
          }
        });
      }, function () {});
    }
    function starting(ev) {
      $mdDialog.show({controller: setupOtpCtrl, templateUrl: "app/main/account/otp/setup.dialog.html", parent: angular.element(document.body), targetEvent: ev, clickOutsideToClose: false}).then(function (value) {}, function (reason) {
        if (reason) {
          vm.EnabledOTP = true;
        }
      });
      function setupOtpCtrl($scope) {
        $scope.cancel = function (ev) {
          $mdDialog.cancel(ev);
        };
        $scope.data = {};
        $scope.data.device = "apple";
        $scope.data.step = 0;
        $scope.copied = false;
        $scope.nextStep = function () {
          if ($scope.data.step === 0) {
            $scope.preSharedKey();
            $scope.data.step = $scope.data.device === "apple" ? 1 : 2;
            $scope.data.remember = $scope.data.device === "apple" ? 1 : 2;
          } else {
            $scope.data.step = 4;
          }
        };
        $scope.preSharedKey = function () {
          $scope.submitting = true;
          network.User.generateTOTPSecretCode().then(function (resp) {
            $scope.sharedKey = resp.SecretCode;
            $scope.imgSrc = resp.Data;
            $timeout(function () {
              $scope.hasPsk = true;
              $scope.submitting = false;
            }, 1250);
          });
        };
        $scope.cannotScan = function () {
          $scope.data.step = 3;
        };
        $scope.onSuccess = function (e) {
          $scope.copied = !$scope.copied;
          setTimeout(function () {
            $scope.copied = !$scope.copied;
            $scope.$digest();
          }, 3e3);
        };
        $scope.onError = function (e) {
          console.log(e);
        };
        $scope.otpInput = {size: 6, type: "tel", onDone: function (value) {
          $scope.data.otp = value;
        }, onChange: function (value) {
          $scope.otpOk = value.length === 6;
          $scope.valFalse = false;
        }};
        $scope.setupOTP = function () {
          $scope.submitting = true;
          network.User.enableMFA({code: $scope.data.otp}).then(function (resp) {
            if (resp) {
              $scope.data.step = 5;
              $scope.submitting = false;
              $rootScope.$broadcast("userAccount::update");
              $scope.$digest();
            }
          }).catch(function (err) {
            $scope.submitting = false;
            $scope.valFalse = true;
            $scope.$digest();
          });
        };
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("myCtrl", myCtrl);
  function myCtrl($rootScope, $scope, $timeout, $mdDialog, $state, network, message) {
    let vm = this;
    vm.transferBalance = transferBalance;
    $timeout(function () {
      $rootScope.updateBalance();
    }, 1e3);
    $timeout(function () {
      if ($rootScope.User.SabaBalance === 0 || $rootScope.User.SabaBalance === undefined) {
        Lotus.Saba.Wallet.getBalance().then(function (response) {
          $rootScope.User.SabaBalance = response.Balance !== null ? response.Balance : $rootScope.User.SabaBalance;
          $timeout(function () {
            $scope.$digest();
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }, 2e3);
    function transferBalance(direction, $event) {
      $mdDialog.show({controller: moneyTransferCtrl, templateUrl: "app/main/saba/transfer-balance.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, fullscreen: true, locals: {direction: parseInt(direction)}});
      function moneyTransferCtrl($scope, $location, message, direction) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.initDirection = function (direction) {
          $scope.direction = direction;
          $scope.label = direction === 0 ? "Rút tiền từ Bong88 về" : "Chuyển tiền sang Bong88";
          $scope.shortLabel = direction === 0 ? "Rút tiền" : "Chuyển tiền";
          $scope.transfer = {Remember: false, Direction: direction};
          $scope.arTemplates = [1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6];
          $scope.arTemplates = $scope.arTemplates.filter(function (item) {
            return direction === 0 ? item < $rootScope.User.SabaBalance / 1e3 : item < $rootScope.User.Balance / 1e3;
          });
        };
        $scope.initDirection(direction);
        $scope.setMoney = function (item) {
          $scope.transfer.Amount = item;
        };
        $scope.transferAll = function () {
          $scope.transfer.Amount = $scope.direction === 0 ? Math.floor($rootScope.User.SabaBalance / 1e3) : Math.floor($rootScope.User.Balance / 1e3);
        };
        $scope.transferAction = function () {
          $scope.send = angular.copy($scope.transfer);
          $scope.send.Amount = $scope.transfer.Amount * 1e3;
          if (isNaN($scope.send.Amount)) {
            message.infoMultiple("Số tiền không hợp lệ");
            return;
          }
          if ($scope.direction === 1 && $scope.send.Amount > $rootScope.User.Balance || $scope.direction === 0 && $scope.send.Amount > $rootScope.User.SabaBalance) {
            message.infoMultiple("Số dư của quý khách không đủ để thực hiện");
            return;
          }
          $scope.submitting = true;
          Lotus.Saba.Wallet.transferBalance($scope.send).then(function (response) {
            if (response.Result) {
              $rootScope.User.Balance = $scope.transfer.Direction === 1 ? $rootScope.User.Balance - $scope.send.Amount : $rootScope.User.Balance + $scope.send.Amount;
              $rootScope.User.SabaBalance = $scope.transfer.Direction === 1 ? $rootScope.User.SabaBalance + $scope.send.Amount : $rootScope.User.SabaBalance - $scope.send.Amount;
              message.show("Chuyển tiền thành công. Quý khách vui lòng chờ trong giây lát");
              $timeout(function () {
                $scope.$digest();
              });
            }
          }).catch(function (error) {
            console.log(error.code);
            $scope.submitting = false;
            message.infoMultiple(error.message);
          });
        };
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("changePasswordCtrl", changePasswordCtrl);
  function changePasswordCtrl($rootScope, $mdDialog, $state, $timeout, network, message) {
    let vm = this;
    vm.showPassword = showPassword;
    vm.changePassword = changePassword;
    vm.show = false;
    vm.showText = "SHOW";
    vm.form = {password: "", newPassword: "", confirmPassword: ""};
    vm.inputFocus = inputFocus;
    vm.inputKeyup = inputKeyup;
    let lowerCasePattern = /^(?=.*[a-z]).+$/;
    let upperCasePattern = /^(?=.*[A-Z]).+$/;
    let numberPattern = /^(?=.*[\d]).+$/;
    let specialCharacterPatter = /([-+=_!@#$%^&*.,;:'\"<>/?`~\[\]\(\)\{\}\\\|\s])/;
    let characterCountPattern = /^.{6,}/;
    function inputFocus() {
      vm.showCheck = true;
      vm.inputKeyup();
    }
    function inputKeyup() {
      if (vm.form.newPassword === undefined) {
        return;
      }
      vm.lowerCase = lowerCasePattern.test(vm.form.newPassword) ? 1 : 0;
      vm.upperCase = upperCasePattern.test(vm.form.newPassword) ? 1 : 0;
      vm.number = numberPattern.test(vm.form.newPassword) ? 1 : 0;
      vm.specialChar = specialCharacterPatter.test(vm.form.newPassword) ? 1 : 0;
      vm.characterCount = characterCountPattern.test(vm.form.newPassword);
      vm.totalScore = vm.lowerCase + vm.upperCase + vm.number + vm.specialChar;
      vm.passwordPerfect = vm.totalScore >= 3 && vm.characterCount;
      vm.showCheck = !vm.passwordPerfect;
    }
    function showPassword() {
      vm.show = !vm.show;
      vm.showText = vm.show ? "HIDE" : "SHOW";
    }
    function changePassword() {
      vm.send = angular.copy(vm.form);
      vm.submitting = true;
      network.User.changePassword(vm.send).then(function (response) {
        console.log(response);
        if (response) {
          vm.submitting = false;
          message.show("Thay đổi mật khẩu thành công. Quý khách vui lòng đăng nhập lại");
          $timeout(function () {
            $rootScope.signOut();
          }, 1e3);
        }
      }).catch(function (error) {
        console.log(error);
        vm.submitting = false;
        if (error.code === "NotAuthorizedException") {
          message.show("Tên người dùng hoặc mật khẩu không chính xác");
        } else if (error.code === "ArgumentException") {
          message.show(error.message);
        }
      });
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("limitCtrl", limitCtrl);
  function limitCtrl($rootScope, $timeout, msUtils, network) {
    let vm = this;
    vm.count = 0;
    vm.init = init;
    vm.init();
    function init() {
      if ($rootScope.myParameters !== undefined) {
        $rootScope.myParameters.sort(function (a, b) {
          return a.GameType - b.GameType || a.BetType - b.BetType;
        });
        vm.parameter = $rootScope.myParameters.groupBy(function (o) {
          return JSON.stringify({a: o.GameType});
        });
        let order = [7, 8, 9, 15, 16, 10, 11, 12, 17, 18, 19, 13, 14, 20, 2, 3, 4];
        angular.forEach(vm.parameter, function (lotShare) {
          if (msUtils.exists(lotShare.group[0].GameType, [1, 2, 3, 4])) {
            lotShare.group.sort(function (a, b) {
              return order.indexOf(a.BetType) - order.indexOf(b.BetType);
            });
          }
        });
      } else {
        $timeout(function () {
          vm.init();
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.core", ["ngAnimate", "ngAria", "ngCookies", "ngMessages", "ngResource", "ngSanitize", "ngMaterial", "angularMoment", "ngclipboard", "nsPopover", "ng-currency", "otpInputDirective", "AngularPrint", "datatables", "FBAngular", "pascalprecht.translate", "angular-google-analytics", "ui.router", "ja.qr"]);
}());
(function () {
  "use strict";
  angular.module("app.core").directive("msPasswordExpired", msPasswordExpiredDirective);
  function msPasswordExpiredDirective($document) {
    return {restrict: "E", scope: {}, transclude: true, templateUrl: "app/core/directives/password-expired-soon/password-expired-soon.html", link: function (scope, iElement) {
      var body = $document.find("body"), bodyClass = "ms-password-expired-active";
      body.addClass(bodyClass);
      function removeInfoBar() {
        body.removeClass(bodyClass);
        iElement.remove();
        scope.$destroy();
      }
      scope.removeInfoBar = removeInfoBar;
    }};
  }
}());
(function (window, angular, undefined) {
  "use strict";
  var $el = angular.element;
  var $popovers = [];
  var globalId = 0;
  var isDef = angular.isDefined;
  var module = angular.module("nsPopover", []);
  module.provider("nsPopover", function () {
    var defaults = {angularEvent: null, container: "body", hideOnButtonClick: true, hideOnInsideClick: false, hideOnOutsideClick: true, mouseRelative: "", onClose: angular.noop, onOpen: angular.noop, placement: "bottom", plain: "false", popupDelay: 0, restrictBounds: false, scopeEvent: null, template: "", theme: "ns-popover-tooltip-theme", timeout: 300, trigger: "click", triggerPrevent: true};
    this.setDefaults = function (newDefaults) {
      angular.extend(defaults, newDefaults);
    };
    this.$get = function () {
      return {getDefaults: function () {
        return defaults;
      }};
    };
  });
  module.directive("nsPopover", ["nsPopover", "$rootScope", "$timeout", "$templateCache", "$q", "$http", "$compile", "$document", "$parse", function (nsPopover, $rootScope, $timeout, $templateCache, $q, $http, $compile, $document, $parse) {
    return {restrict: "A", scope: true, link: function (scope, elm, attrs) {
      var $container;
      var $popover;
      var $triangle;
      var align_;
      var defaults = nsPopover.getDefaults();
      var displayer_;
      var hider_;
      var match;
      var options = {angularEvent: attrs.nsPopoverAngularEvent || defaults.angularEvent, container: attrs.nsPopoverContainer || defaults.container, group: attrs.nsPopoverGroup, hideOnButtonClick: toBoolean(attrs.nsPopoverHideOnButtonClick || defaults.hideOnButtonClick), hideOnInsideClick: toBoolean(attrs.nsPopoverHideOnInsideClick || defaults.hideOnInsideClick), hideOnOutsideClick: toBoolean(attrs.nsPopoverHideOnOutsideClick || defaults.hideOnOutsideClick), mouseRelative: attrs.nsPopoverMouseRelative, onClose: $parse(attrs.nsPopoverOnClose) || defaults.onClose, onOpen: $parse(attrs.nsPopoverOnOpen) || defaults.onOpen, placement: attrs.nsPopoverPlacement || defaults.placement, plain: toBoolean(attrs.nsPopoverPlain || defaults.plain), popupDelay: attrs.nsPopoverPopupDelay || defaults.popupDelay, restrictBounds: Boolean(attrs.nsPopoverRestrictBounds) || defaults.restrictBounds, scopeEvent: attrs.nsPopoverScopeEvent || defaults.scopeEvent, template: attrs.nsPopoverTemplate || defaults.template, theme: attrs.nsPopoverTheme || defaults.theme, timeout: attrs.nsPopoverTimeout || defaults.timeout, trigger: attrs.nsPopoverTrigger || defaults.trigger, triggerPrevent: attrs.nsPopoverTriggerPrevent || defaults.triggerPrevent};
      var placement_;
      var unregisterActivePopoverListeners;
      var unregisterDisplayMethod;
      if (options.mouseRelative) {
        options.mouseRelativeX = options.mouseRelative.indexOf("x") !== -1;
        options.mouseRelativeY = options.mouseRelative.indexOf("y") !== -1;
      }
      function addEventListeners() {
        function cancel() {
          hider_.cancel();
        }
        function hide() {
          hider_.hide(options.timeout);
        }
        elm.on("mouseout", hide).on("mouseover", cancel);
        $popover.on("mouseout", hide).on("mouseover", cancel);
        unregisterActivePopoverListeners = function () {
          elm.off("mouseout", hide).off("mouseover", cancel);
          $popover.off("mouseout", hide).off("mouseover", cancel);
        };
      }
      function adjustRect(rect, adjustX, adjustY, ev) {
        var localRect = {bottom: rect.bottom, height: rect.height, left: rect.left, right: rect.right, top: rect.top, width: rect.width};
        if (adjustX) {
          localRect.left = ev.pageX;
          localRect.right = ev.pageX;
          localRect.width = 0;
        }
        if (adjustY) {
          localRect.top = ev.pageY;
          localRect.bottom = ev.pageY;
          localRect.height = 0;
        }
        return localRect;
      }
      function buttonClickHandler() {
        if ($popover.isOpen) {
          scope.hidePopover();
        }
      }
      function display(e) {
        if (angular.isObject(e) && false !== options.triggerPrevent) {
          e.preventDefault();
        }
        hider_.cancel();
        displayer_.display(options.popupDelay, e);
      }
      function getBoundingClientRect(elm) {
        var w = window;
        var doc = document.documentElement || document.body.parentNode || document.body;
        var x = isDef(w.pageXOffset) ? w.pageXOffset : doc.scrollLeft;
        var y = isDef(w.pageYOffset) ? w.pageYOffset : doc.scrollTop;
        var rect = elm.getBoundingClientRect();
        if (x || y) {
          return {bottom: rect.bottom + y, left: rect.left + x, right: rect.right + x, top: rect.top + y, height: rect.height, width: rect.width};
        }
        return rect;
      }
      function insideClickHandler() {
        if ($popover.isOpen) {
          scope.hidePopover();
        }
      }
      function loadTemplate(template, plain) {
        if (!template) {
          return "";
        }
        if (angular.isString(template) && plain) {
          return template;
        }
        return $templateCache.get(template) || $http.get(template, {cache: true});
      }
      function move(popover, placement, align, rect, triangle) {
        var containerRect;
        var popoverRect = getBoundingClientRect(popover[0]);
        var popoverRight;
        var top, left;
        var positionX = function () {
          if (align === "center") {
            return Math.round(rect.left + rect.width / 2 - popoverRect.width / 2);
          } else if (align === "right") {
            return rect.right - popoverRect.width;
          }
          return rect.left;
        };
        var positionY = function () {
          if (align === "center") {
            return Math.round(rect.top + rect.height / 2 - popoverRect.height / 2);
          } else if (align === "bottom") {
            return rect.bottom - popoverRect.height;
          }
          return rect.top;
        };
        if (placement === "top") {
          top = rect.top - popoverRect.height;
          left = positionX();
        } else if (placement === "right") {
          top = positionY();
          left = rect.right;
        } else if (placement === "bottom") {
          top = rect.bottom;
          left = positionX();
        } else if (placement === "left") {
          top = positionY();
          left = rect.left - popoverRect.width;
        }
        if (true === options.restrictBounds) {
          containerRect = getBoundingClientRect($container[0]);
          left = Math.max(containerRect.left, left);
          popoverRight = left + popoverRect.width;
          if (popoverRight > containerRect.width) {
            left = left - (popoverRight - containerRect.width);
          }
        }
        popover.css("top", top.toString() + "px").css("left", left.toString() + "px");
        if (triangle && triangle.length) {
          if (placement === "top" || placement === "bottom") {
            left = rect.left + rect.width / 2 - left;
            triangle.css("left", left.toString() + "px");
          } else {
            top = rect.top + rect.height / 2 - top;
            triangle.css("top", top.toString() + "px");
          }
        }
      }
      function outsideClickHandler(e) {
        function isInPopover(el) {
          if (el.id === id) {
            return true;
          }
          var parent = angular.element(el).parent()[0];
          if (!parent) {
            return false;
          }
          if (parent.id === id) {
            return true;
          } else {
            return isInPopover(parent);
          }
        }
        if ($popover.isOpen && e.target !== elm[0]) {
          var id = $popover[0].id;
          if (!isInPopover(e.target)) {
            scope.hidePopover();
          }
        }
      }
      function removeEventListeners() {
        unregisterActivePopoverListeners();
      }
      function toBoolean(value) {
        if (value && value.length !== 0) {
          var v = ("" + value).toLowerCase();
          value = v == "true";
        } else {
          value = false;
        }
        return value;
      }
      displayer_ = {id_: undefined, display: function (delay, e) {
        if ($parse(attrs.nsPopover)(scope) === false) {
          return;
        }
        $timeout.cancel(displayer_.id_);
        if (!isDef(delay)) {
          delay = 0;
        }
        if (options.group) {
          $rootScope.$broadcast("ns:popover:hide", options.group);
        }
        displayer_.id_ = $timeout(function () {
          if (true === $popover.isOpen) {
            return;
          }
          $popover.isOpen = true;
          $popover.css("display", "block");
          var elmRect = getBoundingClientRect(elm[0]);
          if (options.mouseRelative) {
            elmRect = adjustRect(elmRect, options.mouseRelativeX, options.mouseRelativeY, e);
          }
          move($popover, placement_, align_, elmRect, $triangle);
          addEventListeners();
          if (true === options.hideOnInsideClick) {
            $popover.on("click", insideClickHandler);
          }
          if (true === options.hideOnOutsideClick) {
            $document.on("click", outsideClickHandler);
          }
          if (true === options.hideOnButtonClick) {
            elm.on("click", buttonClickHandler);
          }
          options.onOpen(scope);
        }, delay * 1e3);
      }, cancel: function () {
        $timeout.cancel(displayer_.id_);
      }};
      hider_ = {id_: undefined, hide: function (delay) {
        $timeout.cancel(hider_.id_);
        if (delay !== "-1") {
          if (!isDef(delay)) {
            delay = 1.5;
          }
          hider_.id_ = $timeout(function () {
            $popover.off("click", insideClickHandler);
            $document.off("click", outsideClickHandler);
            elm.off("click", buttonClickHandler);
            $popover.isOpen = false;
            displayer_.cancel();
            $popover.css("display", "none");
            removeEventListeners();
            options.onClose(scope);
          }, delay * 1e3);
        }
      }, cancel: function () {
        $timeout.cancel(hider_.id_);
      }};
      $container = $document.find(options.container);
      if (!$container.length) {
        $container = $document.find("body");
      }
      match = options.placement.match(/^(top|bottom|left|right)$|((top|bottom)\|(center|left|right)+)|((left|right)\|(center|top|bottom)+)/);
      if (!match) {
        throw new Error('"' + options.placement + '" is not a valid placement or has ' + "an invalid combination of placements.");
      }
      placement_ = match[6] || match[3] || match[1];
      align_ = match[7] || match[4] || match[2] || "center";
      globalId += 1;
      $popover = $el('<div id="nspopover-' + globalId + '"></div>').addClass("ns-popover-" + placement_ + "-placement").addClass("ns-popover-" + align_ + "-align").css("position", "absolute").css("display", "none");
      $popovers.push($popover);
      scope.hidePopover = function () {
        hider_.hide(0);
      };
      scope.$on("ns:popover:hide", function (ev, group) {
        if (options.group === group) {
          scope.hidePopover();
        }
      });
      scope.$on("$destroy", function () {
        $popover.remove();
        unregisterDisplayMethod();
      });
      if (angular.isString(options.angularEvent)) {
        unregisterDisplayMethod = $rootScope.$on(options.angularEvent, display);
      } else if (angular.isString(options.scopeEvent)) {
        unregisterDisplayMethod = scope.$on(options.scopeEvent, display);
      } else {
        elm.on(options.trigger, display);
        unregisterDisplayMethod = function () {
          elm.off(options.trigger, display);
        };
      }
      $q.when(loadTemplate(options.template, options.plain)).then(function (template) {
        if (angular.isObject(template)) {
          template = angular.isString(template.data) ? template.data : "";
        }
        $popover.html(template);
        if (options.theme) {
          $popover.addClass(options.theme);
        }
        $compile($popover)(scope);
        $triangle = $el($popover[0].querySelectorAll(".triangle"));
        $container.append($popover);
      });
    }};
  }]);
}(window, window.angular));
(function () {
  "use strict";
  angular.module("app.core").directive("msSplashScreen", msSplashScreenDirective);
  function msSplashScreenDirective($animate) {
    return {restrict: "E", link: function (scope, iElement) {
      let splashScreenRemoveEvent = scope.$on("msSplashScreen::remove", function () {
        $animate.leave(iElement).then(function () {
          splashScreenRemoveEvent();
          scope = iElement = null;
        });
      });
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").directive("msSidenavHelper", msSidenavHelperDirective);
  function msSidenavHelperDirective() {
    return {restrict: "A", require: "^mdSidenav", link: function (scope, iElement, iAttrs, MdSidenavCtrl) {
      scope.$watch(function () {
        return MdSidenavCtrl.isOpen() && !MdSidenavCtrl.isLockedOpen();
      }, function (current) {
        if (angular.isUndefined(current)) {
          return;
        }
        iElement.parent().toggleClass("full-height", current);
        angular.element("html").toggleClass("sidenav-open", current);
      });
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").provider("msScrollConfig", msScrollConfigProvider).directive("msScroll", msScrollDirective);
  function msScrollConfigProvider() {
    var defaultConfiguration = {wheelSpeed: 1, wheelPropagation: false, swipePropagation: true, minScrollbarLength: null, maxScrollbarLength: null, useBothWheelAxes: false, useKeyboard: true, suppressScrollX: false, suppressScrollY: false, scrollXMarginOffset: 0, scrollYMarginOffset: 0, stopPropagationOnClick: true};
    this.config = config;
    function config(configuration) {
      defaultConfiguration = angular.extend({}, defaultConfiguration, configuration);
    }
    this.$get = function () {
      var service = {getConfig: getConfig};
      return service;
    };
  }
  function msScrollDirective($timeout, msScrollConfig, msUtils, fuseConfig) {
    return {restrict: "AE", compile: function (tElement) {
      if (fuseConfig.getConfig("disableCustomScrollbars")) {
        return;
      }
      if (fuseConfig.getConfig("disableCustomScrollbarsOnMobile") && msUtils.isMobile()) {
        return;
      }
      tElement.addClass("ms-scroll");
      return function postLink(scope, iElement, iAttrs) {
        var options = {};
        if (iAttrs.msScroll) {
          options = scope.$eval(iAttrs.msScroll);
        }
        options = angular.extend({}, msScrollConfig.getConfig(), options);
        $timeout(function () {
          PerfectScrollbar.initialize(iElement[0], options);
        }, 0);
        iElement.on("mouseenter", updateScrollbar);
        scope.$watch(function () {
          return iElement.prop("scrollHeight");
        }, function (current, old) {
          if (angular.isUndefined(current) || angular.equals(current, old)) {
            return;
          }
          updateScrollbar();
        });
        scope.$watch(function () {
          return iElement.prop("scrollWidth");
        }, function (current, old) {
          if (angular.isUndefined(current) || angular.equals(current, old)) {
            return;
          }
          updateScrollbar();
        });
        function updateScrollbar() {
          PerfectScrollbar.update(iElement[0]);
        }
        scope.$on("$destroy", function () {
          iElement.off("mouseenter");
          PerfectScrollbar.destroy(iElement[0]);
        });
      };
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").directive("msResponsiveTable", msResponsiveTableDirective);
  function msResponsiveTableDirective() {
    return {restrict: "A", link: function (scope, iElement) {
      var wrapper = angular.element('<div class="ms-responsive-table-wrapper"></div>');
      iElement.after(wrapper);
      wrapper.append(iElement);
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").provider("msNavigationService", msNavigationServiceProvider).controller("MsNavigationController", MsNavigationController).directive("msNavigation", msNavigationDirective).controller("MsNavigationNodeController", MsNavigationNodeController).directive("msNavigationNode", msNavigationNodeDirective).directive("msNavigationItem", msNavigationItemDirective).directive("msNavigationHorizontal", msNavigationHorizontalDirective).controller("MsNavigationHorizontalNodeController", MsNavigationHorizontalNodeController).directive("msNavigationHorizontalNode", msNavigationHorizontalNodeDirective).directive("msNavigationHorizontalItem", msNavigationHorizontalItemDirective);
  function msNavigationServiceProvider() {
    var $log = angular.injector(["ng"]).get("$log");
    var navigation = [];
    var service = this;
    service.saveItem = saveItem;
    service.deleteItem = deleteItem;
    service.sortByWeight = sortByWeight;
    function saveItem(path, item) {
      if (!angular.isString(path)) {
        $log.error("path must be a string (eg. `dashboard.project`)");
        return;
      }
      var parts = path.split(".");
      var id = parts[parts.length - 1];
      var parent = _findOrCreateParent(parts);
      var updateItem = false;
      for (var i = 0; i < parent.length; i++) {
        if (parent[i]._id === id) {
          updateItem = parent[i];
          break;
        }
      }
      if (updateItem) {
        angular.extend(updateItem, item);
        updateItem.uisref = _getUiSref(updateItem);
      } else {
        item.children = [];
        if (angular.isUndefined(item.weight) || !angular.isNumber(item.weight)) {
          item.weight = 1;
        }
        item._id = id;
        item._path = path;
        item.uisref = _getUiSref(item);
        parent.push(item);
      }
    }
    function deleteItem(path) {
      if (!angular.isString(path)) {
        $log.error("path must be a string (eg. `dashboard.project`)");
        return;
      }
      var item = navigation, parts = path.split(".");
      for (var p = 0; p < parts.length; p++) {
        var id = parts[p];
        for (var i = 0; i < item.length; i++) {
          if (item[i]._id === id) {
            if (item[i]._path === path) {
              item.splice(i, 1);
              return true;
            }
            item = item[i].children;
            break;
          }
        }
      }
      return false;
    }
    function sortByWeight(parent) {
      if (!parent) {
        parent = navigation;
        parent.sort(_byWeight);
      }
      for (var i = 0; i < parent.length; i++) {
        var children = parent[i].children;
        if (children.length > 1) {
          children.sort(_byWeight);
        }
        if (children.length > 0) {
          sortByWeight(children);
        }
      }
    }
    function _findOrCreateParent(parts) {
      var parent = navigation;
      if (parts.length === 1) {
        return parent;
      }
      parts.pop();
      for (var i = 0; i < parts.length; i++) {
        var _id = parts[i], createParent = true;
        for (var p = 0; p < parent.length; p++) {
          if (parent[p]._id === _id) {
            parent = parent[p].children;
            createParent = false;
            break;
          }
        }
        if (createParent) {
          var item = {_id: _id, _path: parts.join("."), title: _id, weight: 1, children: []};
          parent.push(item);
          parent = item.children;
        }
      }
      return parent;
    }
    function _getUiSref(item) {
      var uisref = "";
      if (angular.isDefined(item.state)) {
        uisref = item.state;
        if (angular.isDefined(item.stateParams) && angular.isObject(item.stateParams)) {
          uisref = uisref + "(" + angular.toJson(item.stateParams) + ")";
        }
      }
      return uisref;
    }
    this.$get = function () {
      var activeItem = null, navigationScope = null, folded = null, foldedOpen = null;
      var service = {saveItem: saveItem, deleteItem: deleteItem, sort: sortByWeight, clearNavigation: clearNavigation, setActiveItem: setActiveItem, getActiveItem: getActiveItem, getNavigation: getNavigation, getFlatNavigation: getFlatNavigation, setNavigationScope: setNavigationScope, setFolded: setFolded, getFolded: getFolded, setFoldedOpen: setFoldedOpen, getFoldedOpen: getFoldedOpen, toggleFolded: toggleFolded};
      return service;
      function clearNavigation() {
        navigation = [];
        if (navigationScope) {
          navigationScope.vm.navigation = navigation;
        }
      }
      function setActiveItem(node, scope) {
        activeItem = {node: node, scope: scope};
      }
      function getNavigation(root) {
        if (root) {
          for (var i = 0; i < navigation.length; i++) {
            if (navigation[i]._id === root) {
              return [navigation[i]];
            }
          }
          return null;
        }
        return navigation;
      }
      function getFlatNavigation(root) {
        var navigation = getNavigation(root);
        return _flattenNavigation(navigation);
      }
      function setNavigationScope(scope) {
        navigationScope = scope;
      }
      function setFolded(status) {
        folded = status;
      }
      function setFoldedOpen(status) {
        foldedOpen = status;
      }
      function toggleFolded() {
        navigationScope.toggleFolded();
      }
      function _flattenNavigation(navigation) {
        var flatNav = [];
        for (var x = 0; x < navigation.length; x++) {
          var navToPush = angular.copy(navigation[x]);
          navToPush.children = [];
          flatNav.push(navToPush);
          if (navigation[x].children.length > 0) {
            flatNav = flatNav.concat(_flattenNavigation(navigation[x].children));
          }
        }
        return flatNav;
      }
    };
  }
  function MsNavigationController($scope, msNavigationService) {
    var vm = this;
    if ($scope.root) {
      vm.navigation = msNavigationService.getNavigation($scope.root);
    } else {
      vm.navigation = msNavigationService.getNavigation();
    }
    vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
    init();
    function init() {
      msNavigationService.sort();
    }
    function toggleHorizontalMobileMenu() {
      angular.element("body").toggleClass("ms-navigation-horizontal-mobile-menu-active");
    }
  }
  function msNavigationDirective($rootScope, $timeout, $mdSidenav, msNavigationService) {
    return {restrict: "E", scope: {folded: "=", root: "@"}, controller: "MsNavigationController as vm", templateUrl: "app/core/directives/ms-navigation/templates/vertical.html", transclude: true, compile: function (tElement) {
      tElement.addClass("ms-navigation");
      return function postLink(scope, iElement) {
        var bodyEl = angular.element("body"), foldExpanderEl = angular.element('<div id="ms-navigation-fold-expander"></div>'), foldCollapserEl = angular.element('<div id="ms-navigation-fold-collapser"></div>'), sidenav = $mdSidenav("navigation");
        msNavigationService.setNavigationScope(scope);
        init();
        function init() {
          if (msNavigationService.getFolded() === null) {
            msNavigationService.setFolded(scope.folded);
          }
          if (msNavigationService.getFolded()) {
            $timeout(function () {
              $rootScope.$broadcast("msNavigation::collapse");
            });
            bodyEl.addClass("ms-navigation-folded");
            setFoldExpander();
          }
        }
        scope.$watch(function () {
          return sidenav.isLockedOpen();
        }, function (current, old) {
          if (angular.isUndefined(current) || angular.equals(current, old)) {
            return;
          }
          var folded = msNavigationService.getFolded();
          if (folded) {
            if (current) {
              $rootScope.$broadcast("msNavigation::collapse");
            } else {
              var activeItem = msNavigationService.getActiveItem();
              if (activeItem) {
                activeItem.scope.$emit("msNavigation::stateMatched");
              }
            }
          }
        });
        scope.$watch("folded", function (current, old) {
          if (angular.isUndefined(current) || angular.equals(current, old)) {
            return;
          }
          setFolded(current);
        });
        function setFolded(folded) {
          msNavigationService.setFolded(folded);
          if (folded) {
            $rootScope.$broadcast("msNavigation::collapse");
            bodyEl.addClass("ms-navigation-folded");
            setFoldExpander();
          } else {
            var activeItem = msNavigationService.getActiveItem();
            if (activeItem) {
              activeItem.scope.$emit("msNavigation::stateMatched");
            }
            bodyEl.removeClass("ms-navigation-folded ms-navigation-folded-open");
            removeFoldCollapser();
          }
        }
        function setFoldExpander() {
          iElement.parent().append(foldExpanderEl);
          $timeout(function () {
            foldExpanderEl.on("mouseenter touchstart", onFoldExpanderHover);
          });
        }
        function setFoldCollapser() {
          bodyEl.find("#main").append(foldCollapserEl);
          foldCollapserEl.on("mouseenter touchstart", onFoldCollapserHover);
        }
        function removeFoldCollapser() {
          foldCollapserEl.remove();
        }
        function onFoldExpanderHover(event) {
          if (event) {
            event.preventDefault();
          }
          msNavigationService.setFoldedOpen(true);
          var activeItem = msNavigationService.getActiveItem();
          if (activeItem) {
            activeItem.scope.$emit("msNavigation::stateMatched");
          }
          bodyEl.addClass("ms-navigation-folded-open");
          foldExpanderEl.remove();
          setFoldCollapser();
        }
        function onFoldCollapserHover(event) {
          if (event) {
            event.preventDefault();
          }
          msNavigationService.setFoldedOpen(false);
          $rootScope.$broadcast("msNavigation::collapse");
          bodyEl.removeClass("ms-navigation-folded-open");
          foldCollapserEl.remove();
          setFoldExpander();
        }
        scope.toggleFolded = function () {
          var folded = msNavigationService.getFolded();
          setFolded(!folded);
        };
        scope.$on("$stateChangeStart", function () {
          sidenav.close();
        });
        scope.$on("$destroy", function () {
          foldCollapserEl.off("mouseenter touchstart");
          foldExpanderEl.off("mouseenter touchstart");
        });
      };
    }};
  }
  function MsNavigationNodeController($scope, $element, $rootScope, $animate, $state, msNavigationService) {
    var vm = this;
    vm.element = $element;
    vm.node = $scope.node;
    vm.hasChildren = undefined;
    vm.collapsed = undefined;
    vm.collapsable = undefined;
    vm.group = undefined;
    vm.animateHeightClass = "animate-height";
    vm.toggleCollapsed = toggleCollapsed;
    vm.collapse = collapse;
    vm.expand = expand;
    vm.getClass = getClass;
    vm.isHidden = isHidden;
    init();
    function init() {
      vm.hasChildren = vm.node.children.length > 0;
      vm.group = !!(angular.isDefined(vm.node.group) && vm.node.group === true);
      if (!vm.hasChildren || vm.group) {
        vm.collapsable = false;
      } else {
        vm.collapsable = !!(angular.isUndefined(vm.node.collapsable) || typeof vm.node.collapsable !== "boolean" || vm.node.collapsable === true);
      }
      if (!vm.collapsable) {
        vm.collapsed = false;
      } else {
        vm.collapsed = !!(angular.isUndefined(vm.node.collapsed) || typeof vm.node.collapsed !== "boolean" || vm.node.collapsed === true);
      }
      if (vm.node.state === $state.current.name || $state.includes(vm.node.state)) {
        if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
          return;
        }
        $scope.$emit("msNavigation::stateMatched");
        msNavigationService.setActiveItem(vm.node, $scope);
      }
      $scope.$on("msNavigation::stateMatched", function () {
        if (vm.collapsable && vm.collapsed) {
          $scope.$evalAsync(function () {
            vm.collapsed = false;
          });
        }
      });
      $scope.$on("msNavigation::collapse", function (event, path) {
        if (vm.collapsed || !vm.collapsable) {
          return;
        }
        if (angular.isUndefined(path)) {
          vm.collapse();
        } else {
          var givenPathParts = path.split("."), activePathParts = [];
          var activeItem = msNavigationService.getActiveItem();
          if (activeItem) {
            activePathParts = activeItem.node._path.split(".");
          }
          if (givenPathParts.indexOf(vm.node._id) > -1) {
            return;
          }
          if (activePathParts.indexOf(vm.node._id) > -1) {
            return;
          }
          vm.collapse();
        }
      });
      $scope.$on("$stateChangeSuccess", function () {
        if (vm.node.state === $state.current.name) {
          if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
            return;
          }
          msNavigationService.setActiveItem(vm.node, $scope);
          $rootScope.$broadcast("msNavigation::collapse", vm.node._path);
        }
        if ($state.includes(vm.node.state)) {
          if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
            return;
          }
          $scope.$emit("msNavigation::stateMatched");
        }
      });
    }
    function toggleCollapsed() {
      if (vm.collapsed) {
        vm.expand();
      } else {
        vm.collapse();
      }
    }
    function collapse() {
      var collapseEl = vm.element.children("ul");
      var height = collapseEl[0].offsetHeight;
      $scope.$evalAsync(function () {
        vm.collapsed = true;
        vm.element.addClass("collapsing");
        $animate.animate(collapseEl, {display: "block", height: height + "px"}, {height: "0px"}, vm.animateHeightClass).then(function () {
          collapseEl.css({display: "", height: ""});
          vm.element.removeClass("collapsing");
        });
        $scope.$broadcast("msNavigation::collapse");
      });
    }
    function expand() {
      var expandEl = vm.element.children("ul");
      expandEl.css({position: "absolute", visibility: "hidden", display: "block", height: "auto"});
      var height = expandEl[0].offsetHeight;
      expandEl.css({position: "", visibility: "", display: "", height: ""});
      $scope.$evalAsync(function () {
        vm.collapsed = false;
        vm.element.addClass("expanding");
        $animate.animate(expandEl, {display: "block", height: "0px"}, {height: height + "px"}, vm.animateHeightClass).then(function () {
          expandEl.css({height: ""});
          vm.element.removeClass("expanding");
        });
        $rootScope.$broadcast("msNavigation::collapse", vm.node._path);
      });
    }
    function getClass() {
      return vm.node.class;
    }
    function isHidden() {
      if (angular.isDefined(vm.node.hidden) && angular.isFunction(vm.node.hidden)) {
        return vm.node.hidden();
      }
      return false;
    }
  }
  function msNavigationNodeDirective() {
    return {restrict: "A", bindToController: {node: "=msNavigationNode"}, controller: "MsNavigationNodeController as vm", compile: function (tElement) {
      tElement.addClass("ms-navigation-node");
      return function postLink(scope, iElement, iAttrs, MsNavigationNodeCtrl) {
        iElement.addClass(MsNavigationNodeCtrl.getClass());
        if (MsNavigationNodeCtrl.group) {
          iElement.addClass("group");
        }
      };
    }};
  }
  function msNavigationItemDirective() {
    return {restrict: "A", require: "^msNavigationNode", compile: function (tElement) {
      tElement.addClass("ms-navigation-item");
      return function postLink(scope, iElement, iAttrs, MsNavigationNodeCtrl) {
        if (MsNavigationNodeCtrl.collapsable) {
          iElement.on("click", MsNavigationNodeCtrl.toggleCollapsed);
        }
        scope.$on("$destroy", function () {
          iElement.off("click");
        });
      };
    }};
  }
  function msNavigationHorizontalDirective(msNavigationService) {
    return {restrict: "E", scope: {root: "@"}, controller: "MsNavigationController as vm", templateUrl: "app/core/directives/ms-navigation/templates/horizontal.html", transclude: true, compile: function (tElement) {
      tElement.addClass("ms-navigation-horizontal");
      return function postLink(scope) {
        msNavigationService.setNavigationScope(scope);
      };
    }};
  }
  function MsNavigationHorizontalNodeController($scope, $element, $rootScope, $state, msNavigationService) {
    var vm = this;
    vm.element = $element;
    vm.node = $scope.node;
    vm.hasChildren = undefined;
    vm.group = undefined;
    vm.getClass = getClass;
    init();
    function init() {
      vm.isActive = false;
      vm.hasChildren = vm.node.children.length > 0;
      vm.group = !!(angular.isDefined(vm.node.group) && vm.node.group === true);
      if (vm.node.state === $state.current.name || $state.includes(vm.node.state)) {
        if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
          return;
        }
        $scope.$emit("msNavigation::stateMatched");
        msNavigationService.setActiveItem(vm.node, $scope);
      }
      $scope.$on("msNavigation::stateMatched", function () {
        if (vm.hasChildren) {
          $scope.$evalAsync(function () {
            vm.isActive = true;
          });
        }
      });
      $scope.$on("msNavigation::clearActive", function () {
        if (!vm.hasChildren) {
          return;
        }
        var activePathParts = [];
        var activeItem = msNavigationService.getActiveItem();
        if (activeItem) {
          activePathParts = activeItem.node._path.split(".");
        }
        if (activePathParts.indexOf(vm.node._id) > -1) {
          $scope.$evalAsync(function () {
            vm.isActive = true;
          });
        } else {
          $scope.$evalAsync(function () {
            vm.isActive = false;
          });
        }
      });
      $scope.$on("$stateChangeSuccess", function () {
        if (vm.node.state === $state.current.name || $state.includes(vm.node.state)) {
          if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
            return;
          }
          msNavigationService.setActiveItem(vm.node, $scope);
          $rootScope.$broadcast("msNavigation::clearActive");
        }
      });
    }
    function getClass() {
      return vm.node.class;
    }
  }
  function msNavigationHorizontalNodeDirective() {
    return {restrict: "A", bindToController: {node: "=msNavigationHorizontalNode"}, controller: "MsNavigationHorizontalNodeController as vm", compile: function (tElement) {
      tElement.addClass("ms-navigation-horizontal-node");
      return function postLink(scope, iElement, iAttrs, MsNavigationHorizontalNodeCtrl) {
        iElement.addClass(MsNavigationHorizontalNodeCtrl.getClass());
        if (MsNavigationHorizontalNodeCtrl.group) {
          iElement.addClass("group");
        }
      };
    }};
  }
  function msNavigationHorizontalItemDirective($mdMedia) {
    return {restrict: "A", require: "^msNavigationHorizontalNode", compile: function (tElement) {
      tElement.addClass("ms-navigation-horizontal-item");
      return function postLink(scope, iElement, iAttrs, MsNavigationHorizontalNodeCtrl) {
        iElement.on("click", onClick);
        function onClick() {
          if (!MsNavigationHorizontalNodeCtrl.hasChildren || $mdMedia("gt-md")) {
            return;
          }
          iElement.toggleClass("expanded");
        }
        scope.$on("$destroy", function () {
          iElement.off("click");
        });
      };
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").factory("msNavFoldService", msNavFoldService).directive("msNavIsFolded", msNavIsFoldedDirective).controller("MsNavController", MsNavController).directive("msNav", msNavDirective).directive("msNavTitle", msNavTitleDirective).directive("msNavButton", msNavButtonDirective).directive("msNavToggle", msNavToggleDirective);
  function msNavFoldService() {
    var foldable = {};
    var service = {setFoldable: setFoldable, isNavFoldedOpen: isNavFoldedOpen, toggleFold: toggleFold, openFolded: openFolded, closeFolded: closeFolded};
    return service;
    function setFoldable(scope, element) {
      foldable = {scope: scope, element: element};
    }
    function toggleFold() {
      foldable.scope.toggleFold();
    }
    function openFolded() {
      foldable.scope.openFolded();
    }
    function closeFolded() {
      foldable.scope.closeFolded();
    }
  }
  function msNavIsFoldedDirective($document, $rootScope, msNavFoldService) {
    return {restrict: "A", link: function (scope, iElement, iAttrs) {
      var isFolded = iAttrs.msNavIsFolded === "true", isFoldedOpen = false, body = angular.element($document[0].body), openOverlay = angular.element('<div id="ms-nav-fold-open-overlay"></div>'), closeOverlay = angular.element('<div id="ms-nav-fold-close-overlay"></div>'), sidenavEl = iElement.parent();
      msNavFoldService.setFoldable(scope, iElement, isFolded);
      if (isFolded) {
        fold();
      } else {
        unfold();
      }
      function toggleFold() {
        isFolded = !isFolded;
        if (isFolded) {
          fold();
        } else {
          unfold();
        }
      }
      function fold() {
        body.addClass("ms-nav-folded");
        $rootScope.$broadcast("msNav::forceCollapse");
        iElement.scrollTop(0);
        sidenavEl.append(openOverlay);
        openOverlay.on("mouseenter touchstart", function (event) {
          openFolded(event);
          isFoldedOpen = true;
        });
      }
      function openFolded(event) {
        if (angular.isDefined(event)) {
          event.preventDefault();
        }
        body.addClass("ms-nav-folded-open");
        $rootScope.$broadcast("msNav::expandMatchingToggles");
        sidenavEl.find(openOverlay).remove();
        sidenavEl.parent().append(closeOverlay);
        closeOverlay.on("mouseenter touchstart", function (event) {
          closeFolded(event);
          isFoldedOpen = false;
        });
      }
      function closeFolded(event) {
        if (angular.isDefined(event)) {
          event.preventDefault();
        }
        $rootScope.$broadcast("msNav::forceCollapse");
        iElement.scrollTop(0);
        body.removeClass("ms-nav-folded-open");
        sidenavEl.parent().find(closeOverlay).remove();
        sidenavEl.append(openOverlay);
        openOverlay.on("mouseenter touchstart", function (event) {
          openFolded(event);
          isFoldedOpen = true;
        });
      }
      function unfold() {
        body.removeClass("ms-nav-folded ms-nav-folded-open");
        $rootScope.$broadcast("msNav::expandMatchingToggles");
        iElement.off("mouseenter mouseleave");
      }
      scope.toggleFold = toggleFold;
      scope.openFolded = openFolded;
      scope.closeFolded = closeFolded;
      scope.isNavFoldedOpen = isNavFoldedOpen;
      scope.$on("$destroy", function () {
        openOverlay.off("mouseenter touchstart");
        closeOverlay.off("mouseenter touchstart");
        iElement.off("mouseenter mouseleave");
      });
    }};
  }
  function MsNavController() {
    var vm = this, disabled = false, toggleItems = [], lockedItems = [];
    vm.isDisabled = isDisabled;
    vm.enable = enable;
    vm.disable = disable;
    vm.setToggleItem = setToggleItem;
    vm.getLockedItems = getLockedItems;
    vm.setLockedItem = setLockedItem;
    vm.clearLockedItems = clearLockedItems;
    function disable() {
      disabled = true;
    }
    function enable() {
      disabled = false;
    }
    function setToggleItem(element, scope) {
      toggleItems.push({element: element, scope: scope});
    }
    function setLockedItem(element, scope) {
      lockedItems.push({element: element, scope: scope});
    }
    function clearLockedItems() {
      lockedItems = [];
    }
  }
  function msNavDirective($rootScope, $mdComponentRegistry, msNavFoldService) {
    return {restrict: "E", scope: {}, controller: "MsNavController", compile: function (tElement) {
      tElement.addClass("ms-nav");
      return function postLink(scope) {
        $rootScope.$broadcast("msNav::expandMatchingToggles");
        var stateChangeSuccessEvent = $rootScope.$on("$stateChangeSuccess", function () {
          $rootScope.$broadcast("msNav::expandMatchingToggles");
          $mdComponentRegistry.when("navigation").then(function (navigation) {
            navigation.close();
            if (msNavFoldService.isNavFoldedOpen()) {
              msNavFoldService.closeFolded();
            }
          });
        });
        scope.$on("$destroy", function () {
          stateChangeSuccessEvent();
        });
      };
    }};
  }
  function msNavTitleDirective() {
    return {restrict: "A", compile: function (tElement) {
      tElement.addClass("ms-nav-title");
      return function postLink() {};
    }};
  }
  function msNavButtonDirective() {
    return {restrict: "AE", compile: function (tElement) {
      tElement.addClass("ms-nav-button");
      return function postLink() {};
    }};
  }
  function msNavToggleDirective($rootScope, $q, $animate, $state) {
    return {restrict: "A", require: "^msNav", scope: true, compile: function (tElement, tAttrs) {
      tElement.addClass("ms-nav-toggle");
      if (angular.isUndefined(tAttrs.collapsed)) {
        tAttrs.collapsed = true;
      }
      tElement.attr("collapsed", tAttrs.collapsed);
      return function postLink(scope, iElement, iAttrs, MsNavCtrl) {
        var classes = {expanded: "expanded", expandAnimation: "expand-animation", collapseAnimation: "collapse-animation"};
        var links = iElement.find("a");
        var states = [];
        var regExp = /\(.*\)/g;
        angular.forEach(links, function (link) {
          var state = angular.element(link).attr("ui-sref");
          if (angular.isUndefined(state)) {
            return;
          }
          state = state.replace(regExp, "");
          states.push(state);
        });
        MsNavCtrl.setToggleItem(iElement, scope);
        iElement.children(".ms-nav-button").on("click", toggle);
        function toggle() {
          if (MsNavCtrl.isDisabled()) {
            return;
          }
          MsNavCtrl.disable();
          if (iElement.attr("collapsed") === "true") {
            MsNavCtrl.clearLockedItems();
            scope.$emit("msNav::pushToLockedList");
            $rootScope.$broadcast("msNav::collapse");
            expand().then(function () {
              MsNavCtrl.enable();
            });
          } else {
            scope.$broadcast("msNav::forceCollapse");
          }
        }
        scope.$on("$destroy", function () {
          iElement.children(".ms-nav-button").off("click");
        });
        scope.$on("msNav::collapse", function () {
          var lockedItems = MsNavCtrl.getLockedItems();
          var locked = false;
          angular.forEach(lockedItems, function (lockedItem) {
            if (angular.equals(lockedItem.scope, scope)) {
              locked = true;
            }
          });
          if (locked) {
            return;
          }
          collapse().then(function () {
            MsNavCtrl.enable();
          });
        });
        scope.$on("msNav::forceCollapse", function () {
          collapse().then(function () {
            MsNavCtrl.enable();
          });
        });
        scope.$on("msNav::expandMatchingToggles", function () {
          var currentState = $state.current.name;
          var shouldExpand = false;
          angular.forEach(states, function (state) {
            if (currentState === state) {
              shouldExpand = true;
            }
          });
          if (shouldExpand) {
            expand();
          } else {
            collapse();
          }
        });
        scope.$on("msNav::pushToLockedList", function () {
          MsNavCtrl.setLockedItem(iElement, scope);
        });
        function expand() {
          var deferred = $q.defer();
          if (!(iElement.attr("collapsed") === "true")) {
            deferred.reject({error: true});
            return deferred.promise;
          }
          iElement.attr("collapsed", false);
          var elementToExpand = angular.element(iElement.find("ms-nav-toggle-items")[0]);
          elementToExpand.css({position: "absolute", visibility: "hidden", display: "block", height: "auto"});
          var height = elementToExpand[0].offsetHeight;
          elementToExpand.css({position: "", visibility: "", display: "", height: ""});
          scope.$evalAsync(function () {
            $animate.animate(elementToExpand, {display: "block", height: "0px"}, {height: height + "px"}, classes.expandAnimation).then(function () {
              elementToExpand.addClass(classes.expanded);
              elementToExpand.css({height: ""});
              deferred.resolve({success: true});
            });
          });
          return deferred.promise;
        }
        function collapse() {
          var deferred = $q.defer();
          if (iElement.attr("collapsed") === "true") {
            deferred.reject({error: true});
            return deferred.promise;
          }
          iElement.attr("collapsed", true);
          var elementToCollapse = angular.element(iElement.find("ms-nav-toggle-items")[0]);
          var height = elementToCollapse[0].offsetHeight;
          scope.$evalAsync(function () {
            $animate.animate(elementToCollapse, {height: height + "px"}, {height: "0px"}, classes.collapseAnimation).then(function () {
              elementToCollapse.removeClass(classes.expanded);
              elementToCollapse.css({display: "", height: ""});
              deferred.resolve({success: true});
            });
          });
          return deferred.promise;
        }
      };
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").provider("msLotteryService", msLotteryServiceProvider).controller("MsLotteryController", MsLotteryController).directive("msLottery", msLotteryDirective).controller("MsLotteryNodeController", MsLotteryNodeController).directive("msLotteryNode", msLotteryNodeDirective).directive("msLotteryItem", msLotteryItemDirective);
  function msLotteryServiceProvider() {
    var $log = angular.injector(["ng"]).get("$log");
    var navigation = [];
    var service = this;
    service.saveItem = saveItem;
    service.deleteItem = deleteItem;
    service.sortByWeight = sortByWeight;
    function saveItem(path, item) {
      if (!angular.isString(path)) {
        $log.error("path must be a string (eg. `dashboard.project`)");
        return;
      }
      var parts = path.split(".");
      var id = parts[parts.length - 1];
      var parent = _findOrCreateParent(parts);
      var updateItem = false;
      for (var i = 0; i < parent.length; i++) {
        if (parent[i]._id === id) {
          updateItem = parent[i];
          break;
        }
      }
      if (updateItem) {
        angular.extend(updateItem, item);
        updateItem.uisref = _getUiSref(updateItem);
      } else {
        item.children = [];
        if (angular.isUndefined(item.weight) || !angular.isNumber(item.weight)) {
          item.weight = 1;
        }
        item._id = id;
        item._path = path;
        item.uisref = _getUiSref(item);
        parent.push(item);
      }
    }
    function deleteItem(path) {
      if (!angular.isString(path)) {
        $log.error("path must be a string (eg. `dashboard.project`)");
        return;
      }
      var item = navigation, parts = path.split(".");
      for (var p = 0; p < parts.length; p++) {
        var id = parts[p];
        for (var i = 0; i < item.length; i++) {
          if (item[i]._id === id) {
            if (item[i]._path === path) {
              item.splice(i, 1);
              return true;
            }
            item = item[i].children;
            break;
          }
        }
      }
      return false;
    }
    function sortByWeight(parent) {
      if (!parent) {
        parent = navigation;
        parent.sort(_byWeight);
      }
      for (var i = 0; i < parent.length; i++) {
        var children = parent[i].children;
        if (children.length > 1) {
          children.sort(_byWeight);
        }
        if (children.length > 0) {
          sortByWeight(children);
        }
      }
    }
    function _findOrCreateParent(parts) {
      var parent = navigation;
      if (parts.length === 1) {
        return parent;
      }
      parts.pop();
      for (var i = 0; i < parts.length; i++) {
        var _id = parts[i], createParent = true;
        for (var p = 0; p < parent.length; p++) {
          if (parent[p]._id === _id) {
            parent = parent[p].children;
            createParent = false;
            break;
          }
        }
        if (createParent) {
          var item = {_id: _id, _path: parts.join("."), title: _id, weight: 1, children: []};
          parent.push(item);
          parent = item.children;
        }
      }
      return parent;
    }
    function _getUiSref(item) {
      var uisref = "";
      if (angular.isDefined(item.state)) {
        uisref = item.state;
        if (angular.isDefined(item.stateParams) && angular.isObject(item.stateParams)) {
          uisref = uisref + "(" + angular.toJson(item.stateParams) + ")";
        }
      }
      return uisref;
    }
    this.$get = function () {
      var activeItem = null, navigationScope = null, folded = null, foldedOpen = null;
      var service = {saveItem: saveItem, deleteItem: deleteItem, sort: sortByWeight, clearLottery: clearLottery, setActiveItem: setActiveItem, getActiveItem: getActiveItem, getLottery: getLottery, getFlatLottery: getFlatLottery, setLotteryScope: setLotteryScope, setFolded: setFolded, getFolded: getFolded, setFoldedOpen: setFoldedOpen, getFoldedOpen: getFoldedOpen, toggleFolded: toggleFolded};
      return service;
      function clearLottery() {
        navigation = [];
        if (navigationScope) {
          navigationScope.vm.navigation = navigation;
        }
      }
      function setActiveItem(node, scope) {
        activeItem = {node: node, scope: scope};
      }
      function getLottery(root) {
        if (root) {
          for (var i = 0; i < navigation.length; i++) {
            if (navigation[i]._id === root) {
              return [navigation[i]];
            }
          }
          return null;
        }
        return navigation;
      }
      function getFlatLottery(root) {
        var navigation = getLottery(root);
        return _flattenLottery(navigation);
      }
      function setLotteryScope(scope) {
        navigationScope = scope;
      }
      function setFolded(status) {
        folded = status;
      }
      function setFoldedOpen(status) {
        foldedOpen = status;
      }
      function toggleFolded() {
        navigationScope.toggleFolded();
      }
      function _flattenLottery(navigation) {
        var flatNav = [];
        for (var x = 0; x < navigation.length; x++) {
          var navToPush = angular.copy(navigation[x]);
          navToPush.children = [];
          flatNav.push(navToPush);
          if (navigation[x].children.length > 0) {
            flatNav = flatNav.concat(_flattenLottery(navigation[x].children));
          }
        }
        return flatNav;
      }
    };
  }
  function MsLotteryController($scope, msLotteryService) {
    var vm = this;
    if ($scope.root) {
      vm.navigation = msLotteryService.getLottery($scope.root);
    } else {
      vm.navigation = msLotteryService.getLottery();
    }
    vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
    init();
    function init() {
      msLotteryService.sort();
    }
    function toggleHorizontalMobileMenu() {
      angular.element("body").toggleClass("ms-navigation-horizontal-mobile-menu-active");
    }
  }
  function msLotteryDirective($rootScope, $timeout, $mdSidenav, msLotteryService) {
    return {restrict: "E", scope: {folded: "=", root: "@"}, controller: "MsLotteryController as vm", templateUrl: "app/core/directives/ms-navigation/templates/vertical.html", transclude: true, compile: function (tElement) {
      tElement.addClass("ms-navigation");
      return function postLink(scope, iElement) {
        var bodyEl = angular.element("body"), foldExpanderEl = angular.element('<div id="ms-navigation-fold-expander"></div>'), foldCollapserEl = angular.element('<div id="ms-navigation-fold-collapser"></div>'), sidenav = $mdSidenav("navigation");
        msLotteryService.setLotteryScope(scope);
        init();
        function init() {
          if (msLotteryService.getFolded() === null) {
            msLotteryService.setFolded(scope.folded);
          }
          if (msLotteryService.getFolded()) {
            $timeout(function () {
              $rootScope.$broadcast("msLottery::collapse");
            });
            bodyEl.addClass("ms-navigation-folded");
            setFoldExpander();
          }
        }
        scope.$watch(function () {
          return sidenav.isLockedOpen();
        }, function (current, old) {
          if (angular.isUndefined(current) || angular.equals(current, old)) {
            return;
          }
          var folded = msLotteryService.getFolded();
          if (folded) {
            if (current) {
              $rootScope.$broadcast("msLottery::collapse");
            } else {
              var activeItem = msLotteryService.getActiveItem();
              if (activeItem) {
                activeItem.scope.$emit("msLottery::stateMatched");
              }
            }
          }
        });
        scope.$watch("folded", function (current, old) {
          if (angular.isUndefined(current) || angular.equals(current, old)) {
            return;
          }
          setFolded(current);
        });
        function setFolded(folded) {
          msLotteryService.setFolded(folded);
          if (folded) {
            $rootScope.$broadcast("msLottery::collapse");
            bodyEl.addClass("ms-navigation-folded");
            setFoldExpander();
          } else {
            var activeItem = msLotteryService.getActiveItem();
            if (activeItem) {
              activeItem.scope.$emit("msLottery::stateMatched");
            }
            bodyEl.removeClass("ms-navigation-folded ms-navigation-folded-open");
            removeFoldCollapser();
          }
        }
        function setFoldExpander() {
          iElement.parent().append(foldExpanderEl);
          $timeout(function () {
            foldExpanderEl.on("mouseenter touchstart", onFoldExpanderHover);
          });
        }
        function setFoldCollapser() {
          bodyEl.find("#main").append(foldCollapserEl);
          foldCollapserEl.on("mouseenter touchstart", onFoldCollapserHover);
        }
        function removeFoldCollapser() {
          foldCollapserEl.remove();
        }
        function onFoldExpanderHover(event) {
          if (event) {
            event.preventDefault();
          }
          msLotteryService.setFoldedOpen(true);
          var activeItem = msLotteryService.getActiveItem();
          if (activeItem) {
            activeItem.scope.$emit("msLottery::stateMatched");
          }
          bodyEl.addClass("ms-navigation-folded-open");
          foldExpanderEl.remove();
          setFoldCollapser();
        }
        function onFoldCollapserHover(event) {
          if (event) {
            event.preventDefault();
          }
          msLotteryService.setFoldedOpen(false);
          $rootScope.$broadcast("msLottery::collapse");
          bodyEl.removeClass("ms-navigation-folded-open");
          foldCollapserEl.remove();
          setFoldExpander();
        }
        scope.toggleFolded = function () {
          var folded = msLotteryService.getFolded();
          setFolded(!folded);
        };
        scope.$on("$stateChangeStart", function () {
          sidenav.close();
        });
        scope.$on("$destroy", function () {
          foldCollapserEl.off("mouseenter touchstart");
          foldExpanderEl.off("mouseenter touchstart");
        });
      };
    }};
  }
  function MsLotteryNodeController($scope, $element, $rootScope, $animate, $state, msLotteryService) {
    var vm = this;
    vm.element = $element;
    vm.node = $scope.node;
    vm.hasChildren = undefined;
    vm.collapsed = undefined;
    vm.collapsable = undefined;
    vm.group = undefined;
    vm.animateHeightClass = "animate-height";
    vm.toggleCollapsed = toggleCollapsed;
    vm.collapse = collapse;
    vm.expand = expand;
    vm.getClass = getClass;
    vm.isHidden = isHidden;
    init();
    function init() {
      vm.hasChildren = vm.node.children.length > 0;
      vm.group = !!(angular.isDefined(vm.node.group) && vm.node.group === true);
      if (!vm.hasChildren || vm.group) {
        vm.collapsable = false;
      } else {
        vm.collapsable = !!(angular.isUndefined(vm.node.collapsable) || typeof vm.node.collapsable !== "boolean" || vm.node.collapsable === true);
      }
      if (!vm.collapsable) {
        vm.collapsed = false;
      } else {
        vm.collapsed = !!(angular.isUndefined(vm.node.collapsed) || typeof vm.node.collapsed !== "boolean" || vm.node.collapsed === true);
      }
      if (vm.node.state === $state.current.name || $state.includes(vm.node.state)) {
        if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
          return;
        }
        $scope.$emit("msLottery::stateMatched");
        msLotteryService.setActiveItem(vm.node, $scope);
      }
      $scope.$on("msLottery::stateMatched", function () {
        if (vm.collapsable && vm.collapsed) {
          $scope.$evalAsync(function () {
            vm.collapsed = false;
          });
        }
      });
      $scope.$on("msLottery::collapse", function (event, path) {
        if (vm.collapsed || !vm.collapsable) {
          return;
        }
        if (angular.isUndefined(path)) {
          vm.collapse();
        } else {
          var givenPathParts = path.split("."), activePathParts = [];
          var activeItem = msLotteryService.getActiveItem();
          if (activeItem) {
            activePathParts = activeItem.node._path.split(".");
          }
          if (givenPathParts.indexOf(vm.node._id) > -1) {
            return;
          }
          if (activePathParts.indexOf(vm.node._id) > -1) {
            return;
          }
          vm.collapse();
        }
      });
      $scope.$on("$stateChangeSuccess", function () {
        if (vm.node.state === $state.current.name) {
          if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
            return;
          }
          msLotteryService.setActiveItem(vm.node, $scope);
          $rootScope.$broadcast("msLottery::collapse", vm.node._path);
        }
        if ($state.includes(vm.node.state)) {
          if (angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params)) {
            return;
          }
          $scope.$emit("msLottery::stateMatched");
        }
      });
    }
    function toggleCollapsed() {
      if (vm.collapsed) {
        vm.expand();
      } else {
        vm.collapse();
      }
    }
    function collapse() {
      var collapseEl = vm.element.children("ul");
      var height = collapseEl[0].offsetHeight;
      $scope.$evalAsync(function () {
        vm.collapsed = true;
        vm.element.addClass("collapsing");
        $animate.animate(collapseEl, {display: "block", height: height + "px"}, {height: "0px"}, vm.animateHeightClass).then(function () {
          collapseEl.css({display: "", height: ""});
          vm.element.removeClass("collapsing");
        });
        $scope.$broadcast("msLottery::collapse");
      });
    }
    function expand() {
      var expandEl = vm.element.children("ul");
      expandEl.css({position: "absolute", visibility: "hidden", display: "block", height: "auto"});
      var height = expandEl[0].offsetHeight;
      expandEl.css({position: "", visibility: "", display: "", height: ""});
      $scope.$evalAsync(function () {
        vm.collapsed = false;
        vm.element.addClass("expanding");
        $animate.animate(expandEl, {display: "block", height: "0px"}, {height: height + "px"}, vm.animateHeightClass).then(function () {
          expandEl.css({height: ""});
          vm.element.removeClass("expanding");
        });
        $rootScope.$broadcast("msLottery::collapse", vm.node._path);
      });
    }
    function getClass() {
      return vm.node.class;
    }
    function isHidden() {
      if (angular.isDefined(vm.node.hidden) && angular.isFunction(vm.node.hidden)) {
        return vm.node.hidden();
      }
      return false;
    }
  }
  function msLotteryNodeDirective() {
    return {restrict: "A", bindToController: {node: "=msLotteryNode"}, controller: "MsLotteryNodeController as vm", compile: function (tElement) {
      tElement.addClass("ms-navigation-node");
      return function postLink(scope, iElement, iAttrs, MsLotteryNodeCtrl) {
        iElement.addClass(MsLotteryNodeCtrl.getClass());
        if (MsLotteryNodeCtrl.group) {
          iElement.addClass("group");
        }
      };
    }};
  }
  function msLotteryItemDirective() {
    return {restrict: "A", require: "^msLotteryNode", compile: function (tElement) {
      tElement.addClass("ms-navigation-item");
      return function postLink(scope, iElement, iAttrs, MsLotteryNodeCtrl) {
        if (MsLotteryNodeCtrl.collapsable) {
          iElement.on("click", MsLotteryNodeCtrl.toggleCollapsed);
        }
        scope.$on("$destroy", function () {
          iElement.off("click");
        });
      };
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").directive("msInfoBar", msInfoBarDirective);
  function msInfoBarDirective($document, $window) {
    return {restrict: "E", scope: {}, transclude: true, templateUrl: "app/core/directives/ms-info-bar/ms-info-bar.html", link: function (scope, iElement) {
      let body = $document.find("body"), bodyClass = "ms-info-bar-active";
      body.addClass(bodyClass);
      function removeInfoBar() {
        body.removeClass(bodyClass);
        iElement.remove();
        scope.$destroy();
      }
      scope.removeInfoBar = removeInfoBar;
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").directive("msCrucialMessage", msCrucialMessageDirective);
  function msCrucialMessageDirective($document) {
    return {restrict: "E", scope: {}, transclude: true, templateUrl: "app/core/directives/ms-crucial-message/crucial-message.html", link: function (scope, iElement) {
      var body = $document.find("body"), bodyClass = "ms-crucial-message-active";
      body.addClass(bodyClass);
      function removeCrucialMessage() {
        body.removeClass(bodyClass);
        iElement.remove();
        scope.$destroy();
      }
      scope.removeCrucialMessage = removeCrucialMessage;
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").directive("msAds", msAdsDirective);
  function msAdsDirective($rootScope, $document, $window) {
    return {restrict: "E", scope: {}, transclude: true, templateUrl: "app/core/directives/ms-ads/ms-ads.html", link: function (scope, iElement) {
      let body = $document.find("body"), bodyClass = "ms-ads-active";
      body.addClass(bodyClass);
      let localAds = localStorage.getItem("Ads") === null ? 0 : parseInt(localStorage.getItem("Ads"));
      function removeAds() {
        localStorage.setItem("Ads", localAds + 1);
        $rootScope.showAds = false;
        setTimeout(function () {
          body.removeClass(bodyClass);
          iElement.remove();
          scope.$destroy();
        }, 3e3);
      }
      scope.removeAds = removeAds;
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.wiki", []).config(config);
  function config($stateProvider) {
    $stateProvider.state("app.wiki", {url: "/wiki", abstract: true, views: {"main@": {templateUrl: "app/core/layouts/content-only.html", controller: "MainController as one"}}, bodyClass: "wiki"}).state("app.wiki.Main_Page", {url: "/Main_Page", views: {"content@app.wiki": {templateUrl: "app/main/wiki/wiki.html", controller: "WikiCtrl as vm"}}, bodyClass: "wiki"});
  }
}());
(function () {
  "use strict";
  angular.module("app.wiki").controller("WikiCtrl", WikiCtrl);
  function WikiCtrl($location, $state) {
    if ($location.host() !== "41592.net") {
      $state.go("app.auth");
    }
    document.title = "Wikipedia, the free encyclopedia";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "https://en.wikipedia.org/static/favicon/wikipedia.ico";
  }
}());
(function () {
  "use strict";
  angular.module("app.traditional").controller("traditionalCtrl", traditionalCtrl);
  function traditionalCtrl($scope, $rootScope, $document, $mdDialog, $timeout, $mdMedia, $state, $window, $filter, $mdSidenav, msLotteryService, msUtils, message, network) {
    $scope.$mdMedia = $mdMedia;
    let one = this;
    one.idArray = [];
    one.init = init;
    one.getTitles = getTitles;
    one.RealtimeSubscribe = RealtimeSubscribe;
    one.Subscribing = Subscribing;
    one.toggleSidenav = toggleSidenav;
    one.checkAllowBetting = checkAllowBetting;
    one.JoinServer = JoinServer;
    one.getUserGameSettings = getUserGameSettings;
    one.currentTime = currentTime;
    one.serverTimer = serverTimer;
    one.TicketCancel = TicketCancel;
    one.deadlineTime = deadlineTime;
    one.getLatestTicket = getLatestTicket;
    one.updateRecentTickets = updateRecentTickets;
    one.getOdds = getOdds;
    one.saveLocalOdds = saveLocalOdds;
    one.priceChanged = priceChanged;
    one.numberClosed = numberClosed;
    one.changeGameStatus = changeGameStatus;
    one.updateAutoCloseAt = updateAutoCloseAt;
    $timeout(function () {
      one.getTitles();
      one.init();
    }, 100);
    function getAllChildren(obj) {
      if (obj.state !== undefined) {
        one.idArray.push(obj);
      }
      if (!obj.children) {
        return;
      }
      angular.forEach(obj.children, function (child) {
        getAllChildren(child);
      });
      one.currentState = one.idArray.filter(function (id) {
        return id.state === $state.current.name;
      });
      if (one.currentState.length !== 0) {
        if (one.currentState[0].state === "app.traditional.northern-2nd.2d.dau" || one.currentState[0].state === "app.traditional.southern.2d.dau") {
          one.titles = "2D Đầu";
        } else if (one.currentState[0].state === "app.traditional.northern-2nd.3d.dau" || one.currentState[0].state === "app.traditional.southern.3d.dau") {
          one.titles = "3D Đầu";
        } else if (one.currentState[0].state === "app.traditional.northern-2nd.4d.duoi" || one.currentState[0].state === "app.traditional.southern.4d.duoi") {
          one.titles = "4D Đuôi";
        } else {
          one.titles = one.currentState[0].title;
        }
      } else {
        one.titles = "";
      }
    }
    function getTitles() {
      getAllChildren(msLotteryService.getLottery()[0]);
      one.currentName = $state.current.name;
      one.northernLotto = msUtils.exists(one.currentName, ["app.traditional.northern.lotto", "app.traditional.northern.parlay", "app.traditional.northern.except-lotto", "app.traditional.northern.lotto-head"]);
      one.northernJackpot = msUtils.exists(one.currentName, ["app.traditional.northern.jackpot", "app.traditional.northern.head-jackpot", "app.traditional.northern.except-jackpot"]);
      one.southern2D = msUtils.exists(one.currentName, ["app.traditional.southern.2d.dau", "app.traditional.southern.2d.duoi", "app.traditional.southern.2d.18lo", "app.traditional.southern.2d.18lo-head"]);
      one.southern3D = msUtils.exists(one.currentName, ["app.traditional.southern.3d.dau", "app.traditional.southern.3d.duoi", "app.traditional.southern.3d.17lo", "app.traditional.southern.3d.7lo"]);
      one.southern4D = msUtils.exists(one.currentName, ["app.traditional.southern.4d.duoi", "app.traditional.southern.4d.16lo"]);
      one.southernXien = msUtils.exists(one.currentName, ["app.traditional.southern.parlay.pair-2", "app.traditional.southern.parlay.pair-3", "app.traditional.southern.parlay.pair-4"]);
      one.northern2D = msUtils.exists(one.currentName, ["app.traditional.northern-2nd.2d.dau", "app.traditional.northern-2nd.2d.duoi", "app.traditional.northern-2nd.2d.27lo"]);
      one.northern3D = msUtils.exists(one.currentName, ["app.traditional.northern-2nd.3d.dau", "app.traditional.northern-2nd.3d.duoi", "app.traditional.northern-2nd.3d.23lo"]);
      one.northern4D = msUtils.exists(one.currentName, ["app.traditional.northern-2nd.4d.duoi", "app.traditional.northern-2nd.4d.20lo"]);
    }
    $scope.$on("$stateChangeSuccess", function () {
      one.getTitles();
      $mdSidenav("lottery-menu").close();
      if ($rootScope.User !== undefined && !msUtils.exists(0, $rootScope.User.Products)) {
        message.show("Tài khoản của quý khách không được phép chơi Xổ Số. Quý khách vui lòng liên hệ đại lý để có thêm chi tiết");
        $state.go("app.home");
      }
    });
    function toggleSidenav(sidenavId) {
      $mdSidenav(sidenavId).toggle();
    }
    $rootScope.regironSelected = [];
    function init() {
      if ($rootScope.isAuthenticated) {
        if (!one.TraditionalSubscribed) {
          one.RealtimeSubscribe();
        }
        if ($rootScope.currentTerm !== undefined) {
          if (!msUtils.exists(0, $rootScope.User.Products)) {
            message.show("Tài khoản của quý khách không được phép chơi Xổ Số. Quý khách vui lòng liên hệ đại lý để có thêm chi tiết");
            $state.go("app.home");
            return;
          }
          one.regirons = $.grep($rootScope.currentTerm, function (value) {
            return value.GameType === 2 || value.GameType === 3 || value.GameType === 4;
          });
          one.regirons.sort(function (a, b) {
            return a.GameType - b.GameType;
          });
        } else {
          $timeout(function () {
            one.init();
          }, 1e3);
        }
      } else {
        one.regirons = [{GameType: 2, CityName: "18A"}, {GameType: 3, CityName: "18B"}, {GameType: 4, CityName: "18C"}];
      }
    }
    function checkAllowBetting(gameType) {
      if ($rootScope.isAuthenticated) {
        let term = $.grep($rootScope.currentTerm, function (value) {
          return value.GameType === gameType;
        });
        return $.grep(term[0].Games, function (b) {
          return b.BetType === $rootScope.location.bet;
        })[0].Status === 0;
      } else {
        return false;
      }
    }
    one.toggle = function (item) {
      let idx = $rootScope.regironSelected.indexOf(item);
      if (idx > -1) {
        $rootScope.regironSelected.splice(idx, 1);
      } else {
        $rootScope.regironSelected.push(item);
      }
      $rootScope.regironSelected.sort();
    };
    one.exists = function (item) {
      return $rootScope.regironSelected.indexOf(item) > -1;
    };
    let retry = 0;
    function RealtimeSubscribe() {
      if ($rootScope.connectState === "Connected") {
        one.Subscribing();
      } else {
        let promise = $timeout(function () {
          retry++;
          if (!one.TraditionalSubscribed) {
            console.log("retry connect: ", retry);
            one.RealtimeSubscribe();
            $timeout.cancel(promise);
          }
        }, 3e3);
        if (retry > 4) {
          $window.location.reload();
        }
      }
    }
    function Subscribing() {
      if (!one.TraditionalSubscribed) {
        Lotus.Lottery.Realtime.subcribe().then(function () {
          if ($rootScope.FirstRegis === undefined) {
            Lotus.Lottery.Realtime.on("lottery:ancestor:event:1001", function (data, message) {
              one.priceChanged(data);
              $rootScope.$broadcast("extra-price-changed", data);
            });
            Lotus.Lottery.Realtime.on("lottery:ancestor:event:1002", function (data, message) {
              one.numberClosed(data);
              $rootScope.$broadcast("stop-number-changed", data);
            });
            Lotus.Lottery.Realtime.on("lottery:self:event:1003", function (data, message) {
              $rootScope.$broadcast("ticketApproved", data);
            });
            Lotus.Lottery.Realtime.on("lottery:self:event:1004", function (data, message) {
              $rootScope.$broadcast("ticketRejected", data);
            });
            Lotus.Lottery.Realtime.on("lottery:self:event:1005", function (data, message) {
              $rootScope.$broadcast("ticketCancelApproved", data);
            });
            Lotus.Lottery.Realtime.on("lottery:self:event:1006", function (data, message) {
              $rootScope.$broadcast("ticketCancelRejected", data);
            });
            Lotus.Lottery.Realtime.on("lottery:general:event:1007", function (data, message) {
              $rootScope.$broadcast("lo-live:event:prize-closed", data);
              if (data.GameType === 2) {
                msLotteryService.saveItem("fuse.southern.live", {icon: "icon-heart pulse"});
              } else {
                msLotteryService.saveItem("fuse.northern.live", {icon: "icon-heart pulse"});
                msLotteryService.saveItem("fuse.northern-2nd.live", {icon: "icon-heart pulse"});
              }
            });
            Lotus.Lottery.Realtime.on("lottery:general:event:1008", function (data, message) {
              if (data.IsLive) {
                $rootScope.$broadcast("lo-live:event:game-opening", data);
                if (data.GameType === 2) {
                  msLotteryService.saveItem("fuse.southern.live", {icon: "icon-heart pulse"});
                } else {
                  msLotteryService.saveItem("fuse.northern.live", {icon: "icon-heart pulse"});
                  msLotteryService.saveItem("fuse.northern-2nd.live", {icon: "icon-heart pulse"});
                }
              } else {
                one.changeGameStatus(data);
              }
            });
            Lotus.Lottery.Realtime.on("lottery:general:event:1009", function (data, message) {
              if (data.IsLive) {
                $rootScope.$broadcast("lo-live:event:game-closed", data);
                if (data.GameType === 2) {
                  msLotteryService.saveItem("fuse.southern.live", {icon: "icon-heart"});
                } else {
                  msLotteryService.saveItem("fuse.northern.live", {icon: "icon-heart"});
                  msLotteryService.saveItem("fuse.northern-2nd.live", {icon: "icon-heart"});
                }
              } else {
                one.changeGameStatus(data);
              }
            });
            Lotus.Lottery.Realtime.on("lottery:general:event:1010", function (data, message) {
              one.JoinServer(true);
            });
            Lotus.Lottery.Realtime.on("lottery:general:event:1011", function (data, message) {
              one.updateAutoCloseAt(data);
            });
            $rootScope.FirstRegis = true;
          }
        });
      }
      one.TraditionalSubscribed = true;
    }
    $scope.$on("$destroy", function () {
      if ($rootScope.isAuthenticated) {
        $timeout(function () {
          Lotus.Lottery.Realtime.unsubscribe();
          console.log("Realtime:Lottery:unsubscribe");
        });
      }
    });
    if ($rootScope.isAuthenticated) {
      if ($rootScope.currentTerm === undefined) {
        one.JoinServer(true);
      } else if (one.tickTimer === undefined) {
        one.JoinServer(true);
      }
    }
    $scope.$on("JoinServer", function () {
      if ($rootScope.currentTerm === undefined) {
        one.JoinServer(true);
      }
    });
    function changeGameStatus(data) {
      if ($rootScope.currentTerm !== undefined) {
        $rootScope.currentTerm.map(function (term) {
          if (term.Term === data.Term && term.GameType === data.GameType) {
            term.Games.map(function (BetType) {
              BetType.Status = data.BetTypes.filter(function (b) {
                return b.BetType === BetType.BetType;
              })[0].Status;
            });
          }
        });
        if (data.GameType === 0 && $rootScope.location.bet === 1 && data.BetTypes.filter(function (b) {
          return b.BetType === 1;
        })[0].Status === 0) {
          message.toast("Lô đã đóng! Quý khách sẽ chuyển sang Lô Live sau ít giây");
          let delay = Math.floor(Math.random() * 9e3) + 1e3;
          $timeout(function () {
            $state.go("app.traditional.northern.live");
          }, delay);
        }
      }
    }
    function updateAutoCloseAt(data) {
      if ($rootScope.currentTerm !== undefined) {
        $timeout.cancel(one.tickTimer);
        $rootScope.currentTerm.map(function (term) {
          if (term.Term === data.Term && term.GameType === data.GameType) {
            term.Games.map(function (BetType) {
              BetType.AutoCloseAt = data.BetTypes.filter(function (b) {
                return b.BetType === BetType.BetType;
              })[0].AutoCloseAt;
            });
          }
        });
        $timeout(function () {
          one.currentTime();
        });
      }
    }
    function JoinServer(userSetting) {
      $timeout.cancel(one.tickTimer);
      Lotus.Lottery.Term.current().then(function (resp) {
        $rootScope.currentTerm = resp;
        $rootScope.termName = resp[0].Term;
        $rootScope.TradOdds = $rootScope.TradOdds.filter(function (o) {
          return o.Term === $rootScope.termName;
        });
        sessionStorage.setItem("TradOdds", JSON.stringify($rootScope.TradOdds));
        if (one.rememberData !== undefined) {
          $timeout(function () {
            $rootScope.$broadcast("TradOdds::get", one.rememberData);
          }, 200);
        }
        one.currentTime();
        one.getLatestTicket();
        if (userSetting) {
          one.getUserGameSettings();
        }
      }).catch(function (error) {
        message.show(error.message);
      });
    }
    function getUserGameSettings() {
      network.Games.GameSetting.getGameSettings().then(function (settings) {
        settings.sort(function (a, b) {
          return a.GameType - b.GameType || a.BetType - b.BetType;
        });
        $timeout(function () {
          network.Games.GameSetting.getGamePayouts().then(function (payouts) {
            payouts.sort(function (a, b) {
              return a.GameType - b.GameType || a.BetType - b.BetType;
            });
            $rootScope.myParameters = [];
            angular.forEach(settings, function (item, i) {
              $rootScope.myParameters.push(Object.assign({}, item, payouts[i]));
            });
          });
        }, 100);
      });
    }
    function currentTime() {
      Lotus.Communication.Server.currentDateTime().then(function (resp) {
        one.serverTimestamp = resp.Timestamp;
        angular.forEach($rootScope.currentTerm, function (game) {
          angular.forEach(game.Games, function (bet) {
            bet.CloseAfter = moment(bet.AutoCloseAt).unix() - one.serverTimestamp <= 0 ? 0 : moment(bet.AutoCloseAt).unix() - one.serverTimestamp;
          });
        });
        one.serverTimer();
      });
    }
    function serverTimer() {
      if ($rootScope.location !== undefined) {
        let gameInfo = $.grep($rootScope.currentTerm, function (g) {
          return g.GameType === $rootScope.location.game;
        })[0];
        if (!msUtils.exists($rootScope.location.game, [2, 3, 4])) {
          let betInfo = $.grep(gameInfo.Games, function (b) {
            return b.BetType === $rootScope.location.bet;
          })[0];
          one.betPermissions = betInfo.Status === 1;
          one.betPermissByTime = betInfo.CloseAfter > 0;
        } else {
          let closeCount = 0, countTime = 0;
          angular.forEach($rootScope.currentTerm, function (game) {
            if (msUtils.exists(game.GameType, [2, 3, 4])) {
              if ($rootScope.location.bet !== 27) {
                if ($.grep(game.Games, function (b) {
                  return b.BetType === $rootScope.location.bet;
                })[0].Status === 0) {
                  closeCount++;
                }
                if ($.grep(game.Games, function (b) {
                  return b.BetType === $rootScope.location.bet;
                })[0].CloseAfter <= 0) {
                  countTime++;
                }
              }
            }
          });
          one.betPermissions = closeCount !== 3;
          one.betPermissByTime = countTime !== 3;
        }
      } else {
        one.betPermissByTime = false;
      }
      $rootScope.allowBetting = one.betPermissions;
      one.serverTimestamp++;
      if ($rootScope.currentTerm) {
        angular.forEach($rootScope.currentTerm, function (game) {
          angular.forEach(game.Games, function (bet) {
            bet.CloseAfter--;
          });
        });
      }
      one.tickTimer = $timeout(function () {
        one.serverTimer();
      }, 1e3);
    }
    function TicketCancel() {
      if ($rootScope.latestTicket) {
        angular.forEach($rootScope.latestTicket, function (tick) {
          if (tick.CancelLimitInSec) {
            tick.CancelLimitInSec--;
          }
          if (tick.deadTime === undefined || tick.deadTime < 10) {
            one.deadlineTime(tick);
          } else {
            tick.deadTime--;
          }
        });
      }
      if ($rootScope.Tickets) {
        if ($rootScope.hideSuccessTicket) {
          angular.forEach($rootScope.Tickets, function (tick) {
            if (tick.removeAfter !== undefined) {
              tick.removeAfter--;
            }
          });
          $rootScope.Tickets = $.grep($rootScope.Tickets, function (tick) {
            return tick.removeAfter === undefined || tick.removeAfter > 0;
          });
        }
      }
    }
    function deadlineTime(tick) {
      let deadData = $.grep($rootScope.currentTerm, function (d) {
        return d.GameType === tick.GameType;
      })[0];
      tick.deadTime = $.grep(deadData.Games, function (d) {
        return d.BetType === tick.BetType;
      })[0].CloseAfter;
    }
    function getLatestTicket(refresh) {
      refresh = refresh !== undefined;
      let data = {Limit: 5, Refresh: refresh};
      if ($rootScope.currentTerm !== undefined) {
        network.Ticket.Latest(data).then(function (result) {
          $rootScope.updatingTickets = false;
          $rootScope.latestTicket = result;
          $rootScope.latestTicket.sort(function (a, b) {
            return b.TicketNumber - a.TicketNumber;
          });
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          one.getLatestTicket();
        }, 1e3);
      }
    }
    function updateRecentTickets() {
      $rootScope.updatingTickets = true;
      $timeout(function () {
        one.getLatestTicket("refresh");
      }, 5e3);
    }
    function priceChanged(data) {
      angular.forEach($rootScope.TradOdds, function (odd) {
        angular.forEach(data, function (itemPrice) {
          if (odd.Term === itemPrice.Term && odd.GameType === itemPrice.GameType && odd.BetType === itemPrice.BetType) {
            let findNumber = $.grep(odd.Numbers, function (n) {
              return n.Number === itemPrice.Number;
            });
            if (findNumber.length) {
              findNumber[0].ExtraPrice += itemPrice.PriceChange;
            } else {
              odd.Numbers.push({Number: itemPrice.Number, ExtraPrice: itemPrice.PriceChange});
            }
          }
        });
      });
      one.saveLocalOdds();
    }
    function numberClosed(data) {
      angular.forEach($rootScope.TradOdds, function (odd) {
        angular.forEach(data, function (item) {
          if (odd.Term === item.Term && odd.GameType === item.GameType && odd.BetType === item.BetType) {
            let findNumber = $.grep(odd.Numbers, function (n) {
              return n.Number === item.Number;
            });
            if (findNumber.length) {
              findNumber[0].Stop = item.Stop;
            } else {
              odd.Numbers.push({Number: item.Number, Stop: item.Stop});
            }
          }
        });
      });
      one.saveLocalOdds();
    }
    $rootScope.TradOdds = JSON.parse(sessionStorage.getItem("TradOdds")) === null ? [] : JSON.parse(sessionStorage.getItem("TradOdds"));
    $scope.$on("TradOdds::get", function (event, data) {
      one.rememberData = data;
      one.GameTypes = [];
      one.BetTypes = [];
      let Term = $rootScope.isAuthenticated ? $rootScope.termName : "Public";
      data.GameTypes.map(function (game) {
        data.BetTypes.map(function (bet) {
          let fo = $rootScope.TradOdds.filter(function (od) {
            return od.Term === Term && od.GameType === game && od.BetType === bet;
          });
          if (fo.length === 0) {
            one.GameTypes.push(game);
            one.BetTypes.push(bet);
          }
        });
      });
      one.GameTypes = one.GameTypes.filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
      });
      one.BetTypes = one.BetTypes.filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
      });
      if (one.BetTypes.length) {
        if (one.BetTypes.length) {
          $timeout(function () {
            one.getOdds(one.GameTypes, one.BetTypes);
          }, 300);
        }
      } else {
        $rootScope.$broadcast("TradOdds::done");
        $timeout(function () {
          if (!$rootScope.isAuthenticated) {
            $rootScope.allowBetting = true;
          }
        }, 300);
      }
    });
    function getOdds(GameTypes, BetTypes) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.currentTerm !== undefined) {
          network.Games.getOdds({Term: $rootScope.termName, GameTypes: GameTypes, BetTypes: BetTypes}).then(function (resp) {
            resp.map(function (o) {
              return o.Term = $rootScope.termName;
            });
            angular.forEach(resp, function (od) {
              let i = $rootScope.TradOdds.findIndex(function (item) {
                return item.Term === $rootScope.termName && item.GameType === od.GameType && item.BetType === od.BetType;
              });
              if (i > -1) $rootScope.TradOdds[i] = od; else $rootScope.TradOdds.push(od);
            });
            one.saveLocalOdds();
          });
        } else {
          $timeout(function () {
            one.getOdds(GameTypes, BetTypes);
          }, 1e3);
        }
      } else {
        network.Public.Lottery.getOdds({GameTypes: GameTypes, BetTypes: BetTypes}).then(function (resp) {
          resp.map(function (o) {
            return o.Term = "Public";
          });
          angular.forEach(resp, function (od) {
            let i = $rootScope.TradOdds.findIndex(function (item) {
              return item.Term === "Public" && item.GameType === od.GameType && item.BetType === od.BetType;
            });
            if (i > -1) $rootScope.TradOdds[i] = od; else $rootScope.TradOdds.push(od);
          });
          one.saveLocalOdds();
        });
      }
    }
    function saveLocalOdds() {
      $rootScope.$broadcast("TradOdds::done");
      sessionStorage.setItem("TradOdds", JSON.stringify($rootScope.TradOdds));
      $timeout(function () {
        if (!$rootScope.isAuthenticated) {
          $rootScope.allowBetting = true;
        }
      }, 300);
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.saba", []).config(config);
  function config($stateProvider) {
    $stateProvider.state("app.saba", {url: "/saba?lang&native&game", views: {"main@": {templateUrl: "app/core/layouts/content-general.html", controller: "MainController as one"}, "content@app.saba": {templateUrl: "app/main/saba/saba.html", controller: "sabaCtrl as vm"}, "toolbar@app.saba": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.saba": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app.saba": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}}, bodyClass: "saba"});
  }
}());
(function () {
  "use strict";
  angular.module("app.saba").controller("sabaCtrl", sabaCtrl);
  function sabaCtrl($scope, $rootScope, $document, $mdDialog, $mdMedia, $mdSidenav, $state, $stateParams, $timeout, $sce, $interval, $location) {
    let vm = this;
    $scope.$mdMedia = $mdMedia;
    if ($location.host() === "nothing88.net" || $location.host() === "www.nothing88.net" || $location.host() === "localhost") {
      vm.Urls = {desktop: "sbtest.a0305.789sb.net", mobile: "smartsbtest.a0305.789sb.net"};
    } else {
      vm.Urls = {desktop: "mkt.a0305.789sb.net", mobile: "ismart.a0305.789sb.net"};
    }
    vm.params = $stateParams;
    let lang = $stateParams.lang === undefined ? "vn" : $stateParams.lang;
    let native = $stateParams.native === undefined ? "" : $stateParams.native;
    let game = $stateParams.game === undefined ? "" : $stateParams.game;
    let isMobile = $mdMedia("max-width: 1024px");
    let platform = isMobile ? 2 : 1;
    vm.isClub = game === "Vgaming";
    let direction;
    switch (game) {
      case "esports":
        direction = isMobile ? "&types=esports" : "&game=esports";
        break;
      case "keno":
        direction = isMobile ? "&types=keno" : "&game=keno";
        break;
      case "kenolottery":
        direction = isMobile ? "&types=KenoLottery" : "&game=kenolottery";
        break;
      case "virtualSports":
        direction = isMobile ? "&types=virtualSports" : "&game=virtualSports";
        break;
      case "casino":
        direction = isMobile ? "&types=casino" : "&act=casino";
        break;
      case "worldcup":
        direction = isMobile ? "&menutype=2&act=1" : "&menutype=2&sportid=1";
        break;
      case "Vgaming":
        direction = isMobile ? "&types=Vgaming" : "&game=Vgaming";
        break;
      default:
        direction = "";
    }
    let url = isMobile ? vm.Urls.mobile : vm.Urls.desktop;
    if (native === "desktop") {
      url = vm.Urls.desktop;
    }
    vm.gameLogin = gameLogin;
    vm.transferBalance = transferBalance;
    $rootScope.transferBalance = transferBalance;
    vm.reloadBalance = reloadBalance;
    vm.generateFreePlay = generateFreePlay;
    $timeout(function () {
      if ($rootScope.isAuthenticated) {
        $rootScope.User.SabaBalance = 0;
        vm.gameLogin();
      } else {
        vm.generateFreePlay();
      }
    }, 1e3);
    function generateFreePlay() {
      Lotus.Public.Saba.GamePlay.getUrl({Platform: platform}).then(function (response) {
        vm.currentProjectUrl = $sce.trustAsResourceUrl(response.Token + "?lang=" + lang + "&OType=4" + direction);
      });
    }
    function gameLogin() {
      vm.loadingGame = true;
      Lotus.Saba.GamePlay.login({Platform: platform}).then(function (response) {
        if (response.NextStep === 1) {
          vm.message = "Đang thực hiện đăng nhập vào Game, Quý khách vui lòng chờ trong giây lát";
          $timeout(function () {
            vm.gameLogin();
          }, 8e3);
        } else if (response.NextStep === 2) {
          vm.cantLogin = true;
          vm.needTransfer = true;
          vm.loadingGame = false;
        } else if (response.NextStep === 0) {
          vm.reloadBalance();
          vm.preHasGame = true;
          if (native === "desktop") {
            window.open(response.Token + "&lang=" + lang + "&OType=4" + direction, "_blank");
          } else {
            vm.currentProjectUrl = $sce.trustAsResourceUrl(response.Token + "&lang=" + lang + "&OType=4&" + direction);
          }
          $timeout(function () {
            vm.loadingGame = false;
          }, 1e3);
        } else if (response.NextStep === 3) {
          vm.generateFreePlay();
          vm.requestOpen = true;
          $timeout(function () {
            vm.loadingGame = false;
          }, 500);
        }
      }).catch(function (error) {
        if (error.code === "GameMaintainanceException") {
          vm.cantLogin = true;
          vm.isWMMaintenance = true;
          vm.loadingGame = false;
          vm.MaintenanceMessage = error.message;
        } else if (error.code === "GamePlayProhibitedException") {
          vm.cantLogin = true;
          vm.accountLocked = true;
          vm.loadingGame = false;
        } else if (error.code === "OperationException") {
          vm.message = "Đang thực hiện đăng nhập vào Game, Quý khách vui lòng chờ trong giây lát";
          $timeout(function () {
            vm.gameLogin();
          }, 3e3);
        } else {
          vm.hideLoader = true;
          vm.message = error.message;
          $scope.$digest();
        }
      });
    }
    function transferBalance(direction, $event, first) {
      $mdDialog.show({controller: transferBalanceCtrl, templateUrl: "app/main/saba/transfer-balance.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, fullscreen: true, locals: {direction: parseInt(direction), first: first}});
      function transferBalanceCtrl($scope, $location, direction, first, message) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.firstTime = first;
        $scope.initDirection = function (direction) {
          $scope.direction = parseInt(direction);
          $scope.label = $scope.direction === 0 ? "Rút tiền từ Bong88 về" : "Chuyển tiền sang Bong88";
          $scope.shortLabel = $scope.direction === 0 ? "Rút tiền" : "Chuyển tiền";
          $scope.transfer = {Remember: true, Direction: $scope.direction};
          $scope.arTemplates = [1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6];
          $scope.arTemplates = $scope.arTemplates.filter(function (item) {
            return $scope.direction === 0 ? item < $rootScope.User.SabaBalance / 1e3 : item < $rootScope.User.Balance / 1e3;
          });
        };
        $scope.initDirection(direction);
        $scope.setMoney = function (item) {
          $scope.transfer.Amount = item;
        };
        $scope.transferAll = function () {
          $scope.transfer.Amount = $scope.direction === 0 ? Math.floor($rootScope.User.SabaBalance / 1e3) : Math.floor($rootScope.User.Balance / 1e3);
        };
        $scope.transferAction = function () {
          $scope.send = angular.copy($scope.transfer);
          $scope.send.Amount = $scope.transfer.Amount * 1e3;
          if (isNaN($scope.send.Amount)) {
            message.infoMultiple("Số tiền không hợp lệ");
            return;
          }
          if ($scope.direction === 1 && $scope.send.Amount > $rootScope.User.Balance || $scope.direction === 0 && $scope.send.Amount > $rootScope.User.SabaBalance) {
            message.infoMultiple("Số dư của quý khách không đủ để thực hiện");
            return;
          }
          $scope.submitting = true;
          Lotus.Saba.Wallet.transferBalance($scope.send).then(function (response) {
            if (response.Result) {
              $rootScope.User.Balance = $scope.direction === 1 ? $rootScope.User.Balance - $scope.send.Amount : $rootScope.User.Balance + $scope.send.Amount;
              $rootScope.User.SabaBalance = $scope.direction === 1 ? $rootScope.User.SabaBalance + $scope.send.Amount : $rootScope.User.SabaBalance - $scope.send.Amount;
              message.show("Chuyển tiền thành công. Quý khách vui lòng chờ trong giây lát");
              vm.cantLogin = false;
              vm.needTransfer = false;
              $scope.$digest();
              $timeout(function () {
                vm.gameLogin();
              }, 2e3);
            }
          }).catch(function (error) {
            $scope.submitting = false;
            console.log(error.code);
            message.infoMultiple(error.message);
          });
        };
      }
    }
    let intervalBalance;
    function reloadBalance() {
      Lotus.Saba.Wallet.getBalance().then(function (response) {
        $rootScope.User.SabaBalance = response.Balance !== null ? response.Balance : $rootScope.User.SabaBalance;
        $timeout(function () {
          $scope.$digest();
        });
      }).catch(function (error) {
        console.log(error);
      });
      intervalBalance = $timeout(function () {
        vm.reloadBalance();
      }, 3e4);
    }
    $scope.$on("$destroy", function () {
      $timeout.cancel(intervalBalance);
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.presidential", []).config(config);
  function config($stateProvider, msApiProvider) {
    $stateProvider.state("app.presidential", {url: "/presidential", views: {"main@": {templateUrl: "app/core/layouts/content-general.html", controller: "MainController as one"}, "toolbar@app.presidential": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.presidential": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app.presidential": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}, "content@app.presidential": {templateUrl: "app/main/presidential/presidential.html", controller: "presidentialCtrl as vm"}}, bodyClass: "presidential"});
  }
}());
(function () {
  "use strict";
  angular.module("app.presidential").controller("presidentialCtrl", presidentialCtrl).filter("candidate", candidate);
  function candidate() {
    return function (input) {
      if (input === 0) {
        return "Đảng dân chủ";
      } else if (input === 1) {
        return "Đảng cộng hoà";
      } else if (input === 10) {
        return "Joe Biden";
      } else if (input === 11) {
        return "Kamala Harris";
      } else if (input === 20) {
        return "Donald Trump";
      } else if (input === 21) {
        return "Mike Pence";
      } else if (input === 30) {
        return "Ứng viên khác";
      } else {
        return input;
      }
    };
  }
  function presidentialCtrl($rootScope, $scope, $state, $timeout, $interval, $mdDialog, $mdMedia, $filter, message) {
    let vm = this;
    vm.candidatePairing = candidatePairing;
    vm.chooseCandidate = chooseCandidate;
    vm.eventHistory = eventHistory;
    let order = [1, 0, 20, 10, 21, 11, 30];
    $scope.$mdMedia = $mdMedia;
    let interval;
    $scope.$on("$destroy", function () {
      $interval.cancel(interval);
    });
    vm.Candidates = [{BetType: 1, name: "ĐẢNG CỘNG HOÀ", pictures: "/assets/images/events/election/Republican.png?v=2", Odds: "-"}, {BetType: 0, name: "ĐẢNG DÂN CHỦ", pictures: "/assets/images/events/election/Democratic.png?v=2", Odds: "-"}, {BetType: 20, name: "Donald Trump", pictures: "/assets/images/events/election/Donald_Trump.png?v=2", Odds: "-"}, {BetType: 10, name: "Joe Biden", pictures: "/assets/images/events/election/Joe_Biden.png?v=2", Odds: "-"}, {BetType: 21, name: "Mike Pence", pictures: "/assets/images/events/election/Mike_Pence.png?v=2", Odds: "-"}, {BetType: 11, name: "Kamala Harris", pictures: "/assets/images/events/election/Kamala_Harris.png?v=2", Odds: "-"}, {BetType: 30, name: "Ứng viên khác", pictures: "/assets/images/events/election/Unknown_Candidate.png?v=2", Odds: "-"}];
    $timeout(function () {
      if (!$rootScope.isAuthenticated) {
        console.log($rootScope.isAuthenticated);
        return;
      }
      Lotus.SenCasino.Games.Politics.Event.getEvent().then(function (response) {
        vm.event = response;
        response.Odds.sort(function (a, b) {
          return order.indexOf(a.BetType) - order.indexOf(b.BetType);
        });
        vm.candidatePairing(response.Odds);
        vm.eventHistory();
      });
      Lotus.SenCasino.Games.Politics.UserGame.getUserGame().then(function (response) {
        vm.userGameCandidate = response;
      });
      interval = $interval(function () {
        Lotus.SenCasino.Games.Politics.Odds.getOdds().then(function (response) {
          response.sort(function (a, b) {
            return order.indexOf(a.BetType) - order.indexOf(b.BetType);
          });
          vm.candidatePairing(response);
        });
      }, 2e4);
    }, 200);
    vm.histories = [];
    function eventHistory(ltId) {
      ltId = ltId === undefined ? "" : ltId;
      let length = 50;
      vm.submitting = true;
      Lotus.SenCasino.Games.Politics.Report.getBetItemsByEvent({Event: vm.event.Event, LastId: ltId, Limit: length}).then(function (response) {
        console.log(response);
        vm.histories = vm.histories.concat(response);
        vm.hasRecords = response.length === length;
        vm.lastId = response.length ? response[response.length - 1].Id : "";
        vm.submitting = false;
        $scope.$digest();
      });
    }
    function candidatePairing(odds) {
      vm.Candidates.map(function (item) {
        let f = odds.filter(function (o) {
          return o.BetType === item.BetType;
        })[0];
        item.Enabled = f.Enabled;
        item.Odds = f.Odds;
        item.Payouts = f.Payouts;
      });
      $scope.$digest();
    }
    function mergeArrayObjects(arr1, arr2) {
      return arr1.map(function (item, i) {
        if (item.BetType === arr2[i].BetType) {
          return Object.assign({}, item, arr2[i]);
        }
      });
    }
    function chooseCandidate(item) {
      $mdDialog.show({locals: {item: item}, clickOutsideToClose: true, controllerAs: "ctrl", templateUrl: "app/main/presidential/dialog/betting.html", controller: chooseCandidateCtrl});
      function chooseCandidateCtrl($scope, item) {
        $scope.$mdMedia = $mdMedia;
        $scope.cancel = function () {
          $mdDialog.hide();
        };
        $scope.candidate = item;
        $scope.userGameCandidate = vm.userGameCandidate;
        $scope.betPoint = vm.userGameCandidate.MinBet;
        $scope.confirm = function () {
          if ($scope.betPoint === null || $scope.betPoint === undefined) {
            message.infoMultiple("Số tiền cược không hợp lệ");
            return;
          }
          if ($scope.betPoint > vm.userGameCandidate.MaxBet || $scope.betPoint < vm.userGameCandidate.MinBet) {
            message.infoMultiple("Quý khách chỉ được đặt cược với số tiền từ " + $filter("currency")(vm.userGameCandidate.MinBet, "", 0) + " đến " + $filter("currency")(vm.userGameCandidate.MaxBet, "", 0));
            return;
          }
          $scope.submitting = true;
          Lotus.SenCasino.Games.Politics.GamePlay.play({BetType: item.BetType, Amount: $scope.betPoint}).then(function (response) {
            $rootScope.User.Balance = response.Balance;
            vm.histories = [];
            vm.eventHistory();
            $timeout(function () {
              message.show("Đặt cược thành công");
            }, 100);
            $scope.submitting = false;
          }).catch(function (e) {
            $scope.submitting = false;
            message.infoMultiple(e.message);
          });
        };
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.legendary").filter("legendCostMoney", legendCostMoney).controller("legendaryCtrl", legendaryCtrl);
  function legendaryCtrl($rootScope, $scope, $mdDialog, $mdMedia, $mdSidenav, $timeout, $interval, $window, $state, $filter, msLotteryService, msUtils, network, message) {
    $scope.$mdMedia = $mdMedia;
    let legend = this;
    let ipr;
    legend.idArray = [];
    legend.allowBetting = true;
    legend.init = init;
    legend.RealtimeSubscribe = RealtimeSubscribe;
    legend.LegendSubscribing = LegendSubscribing;
    legend.legendLatestTicket = legendLatestTicket;
    legend.getTitles = getTitles;
    legend.toggleSidenav = toggleSidenav;
    legend.getOdds = getOdds;
    legend.saveLocalOdds = saveLocalOdds;
    legend.checkAllowBetting = checkAllowBetting;
    legend.priceChanged = priceChanged;
    legend.numberClosed = numberClosed;
    legend.changeDrawResult = changeDrawResult;
    legend.changeGameStatus = changeGameStatus;
    legend.JoinServer = JoinServer;
    legend.dialogBetting = dialogBetting;
    legend.callbackApproved = callbackApproved;
    legend.drawResultTimes = drawResultTimes;
    legend.legendUpdateRecentTickets = legendUpdateRecentTickets;
    legend.legendVideo = legendVideo;
    legend.legendResult = legendResult;
    legend.brt = brt;
    legend.closedPrize = closedPrize;
    legend.updateResults = updateResults;
    legend.updateNorthPrize = updateNorthPrize;
    legend.updateSouthPrize = updateSouthPrize;
    legend.cinematicNote = cinematicNote;
    legend.countPrize = countPrize;
    legend.cinematicSetText = cinematicSetText;
    legend.setMuted = setMuted;
    legend.notifications = notifications;
    legend.turnOffVideo = turnOffVideo;
    legend.turnOnVideo = turnOnVideo;
    legend.playAudio = playAudio;
    legend.moveToLiving = moveToLiving;
    legend.getMissingNumbers = getMissingNumbers;
    legend.updateMissing = updateMissing;
    legend.updateWithResult = updateWithResult;
    legend.showResultTableOnChange = showResultTableOnChange;
    legend.reloadResult = reloadResult;
    legend.NorthernResultCommentator = NorthernResultCommentator;
    legend.ResultCommentator = ResultCommentator;
    legend.reInit = reInit;
    legend.showResultTable = $mdMedia("gt-sm");
    function showResultTableOnChange() {
      if (!$mdMedia("gt-sm")) {
        legend.showResultTable = !legend.showResultTable;
      }
    }
    angular.element($window).on("resize", function () {
      legend.showResultTable = $window.innerWidth > 960;
    });
    function reloadResult() {
      legend.reloadingResult = true;
      $timeout(function () {
        legend.legendResult();
      }, 3e3);
    }
    $timeout(function () {
      legend.getTitles();
      legend.init();
    }, 200);
    $timeout(function () {
      legend.legendVideo();
    }, 2e3);
    angular.element(document.querySelector("#content")).bind("scroll", function () {
      $rootScope.stickVideo = document.querySelector("#content").scrollTop > 64 && ($mdMedia("min-width: 400px") && $mdMedia("max-width: 960px")) && legend.cinematicState === "live";
      $timeout(function () {
        $scope.$digest();
      });
    });
    function getTitles() {
      getAllChildren(msLotteryService.getLottery()[0]);
      legend.currentName = $state.current.name;
      legend.northernLotto = msUtils.exists(legend.currentName, ["app.legendary.northern.lotto", "app.legendary.northern.parlay", "app.legendary.northern.3d.lotto", "app.legendary.northern.4d.lotto", "app.legendary.northern.lotto-head"]);
      legend.northernJackpot = msUtils.exists(legend.currentName, ["app.legendary.northern.jackpot", "app.legendary.northern.head-jackpot", "app.legendary.northern.3d.jackpot", "app.legendary.northern.4d.jackpot"]);
      legend.northernLive = msUtils.exists(legend.currentName, ["app.legendary.northern.live"]);
      legend.southern2D = msUtils.exists(legend.currentName, ["app.legendary.southern.2d.eighth", "app.legendary.southern.2d.jackpot", "app.legendary.southern.2d.lotto", "app.legendary.southern.2d.lotto-head"]);
      legend.southern3D = msUtils.exists(legend.currentName, ["app.legendary.southern.3d.seventh", "app.legendary.southern.3d.jackpot", "app.legendary.southern.3d.lotto"]);
      legend.southern4D = msUtils.exists(legend.currentName, ["app.legendary.southern.4d.jackpot", "app.legendary.southern.4d.lotto"]);
    }
    function getAllChildren(obj) {
      if (obj.state !== undefined) {
        legend.idArray.push(obj);
      }
      if (!obj.children) {
        return;
      }
      angular.forEach(obj.children, function (child) {
        getAllChildren(child);
      });
      legend.currentState = legend.idArray.filter(function (id) {
        return id.state === $state.current.name;
      });
      if (legend.currentState.length !== 0) {
        if (legend.currentState[0].state === "app.legendary.southern.2d.eighth") {
          legend.titles = "2D Đầu";
        } else if (legend.currentState[0].state === "app.legendary.southern.3d.seventh") {
          legend.titles = "3D Đầu";
        } else if (legend.currentState[0].state === "app.legendary.southern.4d.jackpot") {
          legend.titles = "4D Đuôi";
        } else {
          legend.titles = legend.currentState[0].title;
        }
      } else {
        legend.titles = "";
      }
    }
    $scope.$on("$stateChangeSuccess", function () {
      legend.GameType = $state.current.name.split(".")[2] === "northern" ? 0 : 1;
      legend.drawResultTimes();
      legend.getTitles();
      $mdSidenav("legendary-menu").close();
      if ($rootScope.User !== undefined && !msUtils.exists(1, $rootScope.User.Products)) {
        message.show("Tài khoản của quý khách không được phép chơi Xổ Số. Quý khách vui lòng liên hệ đại lý để có thêm chi tiết");
        $state.go("app.home");
      }
      $timeout(function () {
        if (legend.resultTables === undefined || legend.resultTables.GameType !== legend.GameType) {
          legend.legendResult();
        }
        $scope.$digest();
      }, 200);
    });
    function toggleSidenav(sidenavId) {
      $mdSidenav(sidenavId).toggle();
    }
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.LegendCurrentTerm !== undefined) {
          if (!msUtils.exists(1, $rootScope.User.Products)) {
            message.show("Tài khoản của quý khách không được phép chơi Xổ Số. Quý khách vui lòng liên hệ đại lý để có thêm chi tiết");
            $state.go("app.home");
          }
        } else {
          $timeout(function () {
            legend.init();
          }, 1e3);
        }
      }
    }
    if ($rootScope.LegendCurrentTerm === undefined) {
      $rootScope.LegendTermName = {0: 0, 1: 0};
    } else {
      $rootScope.LegendCurrentTerm.map(function (t) {
        if (t.GameType === 0) $rootScope.LegendTermName[0] = t.Term;
        if (t.GameType === 1) $rootScope.LegendTermName[1] = t.Term;
      });
    }
    $rootScope.betStepper = [{active: false, value: 10}, {active: false, value: 20}, {active: false, value: 50}, {active: false, value: 100}, {active: false, value: 200}, {active: false, value: 500}, {active: false, value: 1e3}, {active: false, value: 2e3}, {active: false, value: 5e3}];
    if ($rootScope.isAuthenticated) {
      legend.JoinServer();
    }
    $scope.$on("JoinServer", function () {
      if ($rootScope.LegendCurrentTerm === undefined) {
        legend.JoinServer();
      }
    });
    $timeout(function () {
      if (!legend.LegendSubscribed && $rootScope.isAuthenticated) {
        legend.RealtimeSubscribe();
      }
    }, 2e3);
    let LegendOdds = JSON.parse(sessionStorage.getItem("LegendOdds"));
    $rootScope.LegendOdds = LegendOdds === null ? [] : LegendOdds;
    $scope.$on("GetOdds", function (event, data) {
      $timeout(function () {
        if ($rootScope.isAuthenticated) {
          legend.remConfig = data;
          legend.checkAllowBetting(data);
        }
      }, 200);
      legend.rememberData = data;
      legend.BetTypes = [];
      let term = $rootScope.isAuthenticated ? $rootScope.LegendTermName[data.GameType] : "Public";
      angular.forEach(data.BetTypes, function (BetType) {
        let fo = $rootScope.LegendOdds.filter(function (od) {
          return od.Term === term && od.GameType === data.GameType && od.BetType === BetType;
        });
        if (fo.length === 0) {
          legend.BetTypes.push(BetType);
        }
      });
      if (legend.BetTypes.length) {
        $timeout(function () {
          legend.getOdds(data.GameType, legend.BetTypes);
        }, 300);
      } else {
        $rootScope.$broadcast("oddsPrice::done");
      }
    });
    let retry = 0;
    function RealtimeSubscribe() {
      if ($rootScope.connectState === "Connected") {
        legend.LegendSubscribing();
      } else {
        $timeout(function () {
          retry++;
          if (!legend.LegendSubscribed) {
            legend.RealtimeSubscribe();
          }
        }, 2e3);
        if (retry > 4) {
          $window.location.reload();
        }
      }
    }
    function legendLatestTicket(refresh) {
      refresh = refresh !== undefined;
      let data = {Limit: 5, Refresh: refresh};
      if ($rootScope.LegendCurrentTerm !== undefined) {
        network.Legend.Ticket.Latest(data).then(function (result) {
          legend.legendUpdatingTickets = false;
          legend.legendLatestTicketsArr = result;
          legend.legendLatestTicketsArr.map(function (lt) {
            lt.CreatedAt = moment(lt.CreatedAt).unix();
          });
          legend.legendLatestTicketsArr.sort(function (a, b) {
            return b.CreatedAt - a.CreatedAt;
          });
          $scope.$digest();
        });
      } else {
        $timeout(function () {
          legend.legendLatestTicket();
        }, 1e3);
      }
    }
    function legendUpdateRecentTickets() {
      legend.legendUpdatingTickets = true;
      $timeout(function () {
        legend.legendLatestTicket("refresh");
      }, 5e3);
    }
    function JoinServer(reJoin) {
      legend.legendLatestTicket();
      Lotus.Lottery789.Term.latest().then(function (resp) {
        $rootScope.LegendCurrentTerm = resp;
        legend.drawResultTimes();
        let odds = [];
        angular.forEach(resp, function (t) {
          if (t.GameType === 0) $rootScope.LegendTermName[0] = t.Term;
          if (t.GameType === 1) $rootScope.LegendTermName[1] = t.Term;
          let matchOdd = $rootScope.LegendOdds.filter(function (o) {
            return o.Term === $rootScope.LegendTermName[t.GameType] && o.GameType === t.GameType;
          });
          if (matchOdd.length !== 0) {
            odds = odds.concat(matchOdd);
          }
        });
        $rootScope.LegendOdds = odds;
        $timeout(function () {
          $rootScope.$broadcast("TradOdds::get", legend.rememberData);
          if (reJoin) {
            legend.getMissingNumbers();
          }
        }, 400);
        legend.saveLocalOdds();
        network.Legend.GameSetting.getGameSettings().then(function (settings) {
          $timeout(function () {
            network.Legend.GameSetting.getGamePayouts().then(function (payouts) {
              $rootScope.LegendParameters = [];
              angular.forEach(settings, function (item, i) {
                $rootScope.LegendParameters.push(Object.assign({}, item, payouts[i]));
              });
            });
          }, 100);
        });
      });
    }
    function saveLocalOdds() {
      sessionStorage.setItem("LegendOdds", JSON.stringify($rootScope.LegendOdds));
      $rootScope.$broadcast("oddsPrice::done");
    }
    function getOdds(GameType, BetTypes) {
      if ($rootScope.isAuthenticated) {
        if ($rootScope.LegendCurrentTerm !== undefined) {
          network.Legend.getOdds({Term: $rootScope.LegendTermName[GameType], GameType: GameType, BetTypes: BetTypes}).then(function (resp) {
            resp.map(function (o) {
              return o.Term = $rootScope.LegendTermName[GameType];
            });
            angular.forEach(resp, function (od) {
              let i = $rootScope.LegendOdds.findIndex(function (item) {
                return item.Term === $rootScope.LegendTermName[item.GameType] && item.GameType === od.GameType && item.BetType === od.BetType;
              });
              if (i > -1) $rootScope.LegendOdds[i] = od; else $rootScope.LegendOdds.push(od);
            });
            legend.saveLocalOdds();
          });
        } else {
          $timeout(function () {
            legend.getOdds(GameType, BetTypes);
          }, 1e3);
        }
      } else {
        network.Public.Legend.getOdds({GameType: GameType, BetTypes: BetTypes}).then(function (resp) {
          resp.map(function (o) {
            return o.Term = "Public";
          });
          angular.forEach(resp, function (od) {
            let i = $rootScope.LegendOdds.findIndex(function (item) {
              return item.Term === "Public" && item.GameType === od.GameType && item.BetType === od.BetType;
            });
            if (i > -1) $rootScope.LegendOdds[i] = od; else $rootScope.LegendOdds.push(od);
          });
          legend.saveLocalOdds();
        });
      }
    }
    function checkAllowBetting(data) {
      if (data === undefined) {
        return;
      }
      if ($rootScope.LegendCurrentTerm !== undefined) {
        let termByGameType = $rootScope.LegendCurrentTerm.filter(function (g) {
          return g.GameType === data.GameType;
        });
        if (termByGameType.length === 0) {
          legend.allowBetting = false;
        } else {
          let cond = $state.current.name === "app.legendary.southern.2d.jackpot" ? 8 : data.BetTypes[0];
          let gameStatus = termByGameType[0].Games.filter(function (b) {
            return b.BetType === cond;
          });
          if (gameStatus.length === 0) {
            legend.allowBetting = false;
          } else {
            legend.allowBetting = gameStatus[0].Status === 1;
          }
        }
        $scope.$digest();
      } else {
        $timeout(function () {
          legend.checkAllowBetting(data);
        }, 1e3);
      }
    }
    function priceChanged(data) {
      angular.forEach($rootScope.LegendOdds, function (odd) {
        angular.forEach(data, function (itemPrice) {
          if (odd.Term === itemPrice.Term && odd.GameType === itemPrice.GameType && odd.BetType === itemPrice.BetType) {
            let findNumber = $.grep(odd.Numbers, function (n) {
              return n.Number === itemPrice.Number;
            });
            if (findNumber.length) {
              findNumber[0].ExtraPrice += itemPrice.PriceChange;
            } else {
              odd.Numbers.push({Number: itemPrice.Number, ExtraPrice: itemPrice.PriceChange});
            }
          }
        });
      });
      legend.saveLocalOdds();
    }
    function numberClosed(data) {
      angular.forEach($rootScope.LegendOdds, function (odd) {
        angular.forEach(data, function (item) {
          if (odd.Term === item.Term && odd.GameType === item.GameType && odd.BetType === item.BetType) {
            let findNumber = $.grep(odd.Numbers, function (n) {
              return n.Number === item.Number;
            });
            if (findNumber.length) {
              findNumber[0].Stop = item.Stop;
            } else {
              odd.Numbers.push({Number: item.Number, Stop: item.Stop});
            }
          }
        });
      });
      legend.saveLocalOdds();
    }
    function LegendSubscribing() {
      if (!legend.LegendSubscribed) {
        Lotus.Lottery789.Realtime.subcribe().then(function () {
          console.log("Realtime:789:subcribe");
          if ($rootScope.legendFirstRegis === undefined) {
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1059", function (data, message) {
              legend.changeDrawResult(data);
            });
            Lotus.Lottery789.Realtime.on("lottery789:ancestor:event:1051", function (data, message) {
              legend.priceChanged(data);
            });
            Lotus.Lottery789.Realtime.on("lottery789:ancestor:event:1052", function (data, message) {
              legend.numberClosed(data);
              $rootScope.$broadcast("legend::stop-number-changed", data);
            });
            Lotus.Lottery789.Realtime.on("lottery789:self:event:1053", function (data, message) {
              $rootScope.$broadcast("Legend.Ticket::Approved", data);
            });
            Lotus.Lottery789.Realtime.on("lottery789:self:event:1054", function (data, message) {
              $rootScope.$broadcast("Legend.Ticket::Rejected", data);
            });
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1055", function (data, message) {
              $rootScope.needUpdateResult = true;
              legend.JoinServer(true);
            });
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1056", function (data, message) {
              $timeout(function () {
                legend.reInit();
              }, 500);
              if (data.PrizeNr === undefined) {
                legend.changeGameStatus(data);
              } else {
                $rootScope.$broadcast("live-legend:event:game-opening", data);
                legend.closedPrize(data);
                msLotteryService.saveItem("fuse.northern.live", {icon: "icon-heart pulse"});
              }
            });
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1057", function (data, message) {
              if (data.PrizeNr === undefined) {
                legend.changeGameStatus(data);
              } else {
                $rootScope.$broadcast("live-legend:event:game-closed", data);
                legend.closedPrize({Term: data.Term, GameType: data.GameType, PrizeNr: 0});
                msLotteryService.saveItem("fuse.northern.live", {icon: "icon-heart"});
              }
            });
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1058", function (data, message) {});
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1060", function (data, message) {
              $rootScope.$broadcast("live-legend:event:prize-closed", data);
              legend.closedPrize(data);
              msLotteryService.saveItem("fuse.northern.live", {icon: "icon-heart pulse"});
            });
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1061", function (data, message) {
              legend.updateResults(data);
              legend.updateMissing(data, true);
              legend.commentText = "";
              $timeout(function () {
                $scope.$digest();
                if (legend.lastPrize !== undefined && data.Prize > legend.lastPrize) {
                  $timeout(function () {
                    legend.ResultCommentator(data);
                  }, 400);
                } else {
                  legend.NorthernResultCommentator();
                }
                legend.lastPrize = data.Prize > legend.lastPrize || legend.lastPrize === undefined ? data.Prize : legend.lastPrize;
              }, 1e3);
            });
            Lotus.Lottery789.Realtime.on("lottery789:general:event:1062", function (data, message) {
              console.log(data);
              legend.notifications(data);
            });
            $rootScope.legendFirstRegis = true;
          }
        });
      }
      legend.LegendSubscribed = true;
    }
    function changeGameStatus(data) {
      if ($rootScope.LegendCurrentTerm !== undefined) {
        $rootScope.LegendCurrentTerm.map(function (term) {
          if (term.Term === data.Term && term.GameType === data.GameType) {
            term.Games.map(function (BetType) {
              BetType.Status = data.BetTypes.filter(function (b) {
                return b.BetType === BetType.BetType;
              })[0].Status;
            });
          }
        });
      }
      legend.checkAllowBetting(legend.remConfig);
      legend.drawResultTimes(true);
      $timeout(function () {
        legend.cinematicNote();
      }, 500);
      let delay = Math.floor(Math.random() * 9e3) + 1e3;
      if (data.GameType === 0 && data.BetTypes.filter(function (b) {
        return b.BetType === 1;
      })[0].Status === 0) {
        if (msUtils.exists($state.current.name, ["app.legendary.northern.quick", "app.legendary.northern.lotto", "app.legendary.northern.except-lotto", "app.legendary.northern.parlay", "app.legendary.northern.3d.lotto", "app.legendary.northern.4d.lotto"])) {
          message.toast("Lô đã đóng! Quý khách sẽ chuyển sang Lô Live sau ít giây");
          $timeout(function () {
            $state.go("app.legendary.northern.live");
          }, delay);
        }
      }
      if (data.GameType === 1 && data.BetTypes.filter(function (b) {
        return b.BetType === 15;
      })[0].Status === 0) {
        if (msUtils.exists($state.current.name, ["app.legendary.southern.quick", "app.legendary.southern.2d.lotto", "app.legendary.southern.2d.eighth", "app.legendary.southern.parlay", "app.legendary.southern.3d.seventh", "app.legendary.southern.3d.lotto", "app.legendary.southern.4d.lotto"])) {
          message.toast("Lô đã đóng! Quý khách sẽ chuyển sang Lô Live sau ít giây");
          $timeout(function () {
            $state.go("app.legendary.southern.live");
          }, delay);
        }
      }
    }
    $scope.$on("LegendBetting", function () {
      if (!$rootScope.isAuthenticated) {
        $rootScope.popupLogin();
        return;
      }
      if ($rootScope.User.Suspended) {
        message.show("Tài khoản của quý khách đang không được phép đặt cược.");
        return;
      }
      let costMoney = 0;
      angular.forEach($rootScope.aBettingObject.Tickets, function (ticket) {
        ticket.Money = $filter("legendCostMoney")(ticket);
        costMoney += ticket.Money;
      });
      if (costMoney > $rootScope.User.Balance) {
        message.show("Số dư tài khoản quý khách không đủ để thực hiện toàn bộ đơn cược.");
        return;
      }
      legend.dialogBetting();
    });
    function dialogBetting() {
      $mdDialog.show({locals: {item: $rootScope.aBettingObject, callback: legend.callbackApproved}, clickOutsideToClose: false, escapeToClose: false, controllerAs: "ctrl", templateUrl: "app/main/legendary/betting/betting.html", controller: bettingDialogCtrl});
      function bettingDialogCtrl($rootScope, $scope, $mdDialog, $mdMedia, item) {
        $scope.$mdMedia = $mdMedia;
        $scope.showAction = false;
        $scope.tick = {success: 0, total: 0, answered: 0};
        $scope.betTx = [];
        $scope.cancel = function () {
          $mdDialog.hide();
          $timeout.cancel($scope.autoCallback);
          $timeout.cancel($scope.autoMobilize);
        };
        $scope.tickets = angular.copy(item);
        network.Legend.Play(item).then(function (resp) {
          $scope.processing(resp);
        }).catch(function (error) {
          message.show(error.message);
        });
        $scope.processing = function (resp) {
          $scope.betTx = resp;
          $scope.tick.total = resp.length;
          angular.forEach($scope.tickets.Tickets, function (tick, index) {
            tick.Tx = resp[index].Tx;
            tick.status = "processing";
          });
          let timeAutoCheck = $scope.tickets.Tickets.length < 30 ? 30 : $scope.tickets.Tickets.length;
          $scope.autoCallback = $timeout(function () {
            $scope.checkTicket();
          }, timeAutoCheck * 1e3);
          $scope.autoMobilize = $timeout(function () {
            $scope.Mobilize = "Quá trình đặt cược diễn ra hơi lâu hơn bình thường. Quý khách vui lòng kiên nhẫn chờ thêm vài giây nữa.";
          }, timeAutoCheck * 1e3 * 2 / 3);
        };
        $scope.$on("Legend.Ticket::Approved", function ($event, Tickets) {
          angular.forEach(Tickets, function (data) {
            angular.forEach($scope.tickets.Tickets, function (tick) {
              if (tick.Tx === data.Tx && tick.status === "processing") {
                tick.status = "approved";
                $rootScope.User.Balance -= data.Amount;
                tick.TicketNumber = data.TicketNumber;
                tick.Amount = data.Amount;
                tick.PrizeNr = data.PrizeNr;
                $scope.tick.success++;
                $scope.countAnswer();
                legend.callbackApproved(tick);
              }
            });
          });
          if ($scope.tick.success >= $scope.tick.total) {
            $timeout(function () {
              $scope.allDone = true;
              if ($rootScope.data.closePanel) {
                $timeout(function () {
                  $scope.cancel();
                }, 1e3);
              } else {
                $scope.showAction = true;
              }
            }, 200);
          }
        });
        $scope.$on("Legend.Ticket::Rejected", function ($event, Tickets) {
          angular.forEach(Tickets, function (data) {
            angular.forEach($scope.tickets.Tickets, function (tick) {
              if (tick.Tx === data.Tx && tick.status === "processing") {
                tick.status = "rejected";
                tick.errorMessage = data.Errors[0].Message;
                $scope.countAnswer();
              }
            });
          });
        });
        $scope.countAnswer = function () {
          $scope.tick.answered++;
          if ($scope.tick.totalErrors) {
            $scope.tick.totalErrors--;
            $scope.fireMessageTx();
          }
          if ($scope.tick.answered === $scope.tick.total && $scope.tick.total !== $scope.tick.success) {
            $scope.errorMessageTx = "Xử lý đơn cược thành công.<br/> Nhưng có <b>" + ($scope.tick.total - $scope.tick.success) + "</b> phiếu bị lỗi. Quý khách vui lòng kiểm tra lại.";
            $scope.alertTick = true;
            $scope.showAction = true;
          }
          if ($scope.tick.answered === $scope.tick.total) {
            $rootScope.$broadcast("bettingCompleted", item);
            $timeout.cancel($scope.autoCallback);
            $timeout.cancel($scope.autoMobilize);
            $scope.Mobilize = undefined;
          }
          $scope.$digest();
        };
        $scope.checkTicket = function (fire) {
          $scope.Mobilize = undefined;
          let TxLists = [];
          if ($scope.tick.answered < $scope.tick.total) {
            angular.forEach($scope.tickets.Tickets, function (tick) {
              if (tick.status === "processing") {
                TxLists.push(tick.Tx);
              }
            });
            network.Legend.checkTx({TxList: TxLists}).then(function (response) {
              let successTicks = response.filter(function (tick) {
                return tick.Errors === undefined || tick.Errors.length === 0;
              });
              $rootScope.$broadcast("ticketApproved", successTicks);
              let rejectedTicks = response.filter(function (tick) {
                return tick.Errors;
              });
              $rootScope.$broadcast("ticketRejected", rejectedTicks);
              if (response.length < TxLists.length) {
                if (!fire) {
                  $scope.autoCallback = $timeout(function () {
                    $scope.checkTicket(true);
                  }, 2e4);
                } else {
                  $scope.alertTick = true;
                  $scope.showAction = true;
                  $scope.tick.totalErrors = TxLists.length - response.length;
                  $scope.fireMessageTx();
                  angular.forEach($scope.tickets.Tickets, function (tick) {
                    tick.notAnswer = tick.status === "processing";
                  });
                }
              }
            });
          }
        };
        $scope.fireMessageTx = function () {
          $scope.errorMessageTx = $scope.tick.totalErrors !== 0 ? "Có <b>" + $scope.tick.totalErrors + "</b> phiếu bị lỗi không xác định trong quá trình đặt cược.<br>Quý khách vui lòng kiểm tra và đặt cược lại.<br>Rất xin lỗi quý khách vì sự bất tiện này" : undefined;
        };
      }
    }
    function callbackApproved(tick) {
      let newTicket = {TicketNumber: tick.TicketNumber, GameType: tick.GameType, BetType: tick.BetType, Point: 0, Numbers: [], Amount: tick.Amount, Status: 1, PrizeNr: tick.PrizeNr, CreatedAt: moment().unix()};
      angular.forEach(tick.Items, function (item) {
        newTicket.Point += item.Point;
        newTicket.Numbers = newTicket.Numbers.concat(item.Numbers);
      });
      newTicket.Numbers = newTicket.Numbers.filter(function (item, b, self) {
        return self.indexOf(item) === b;
      });
      legend.legendLatestTicketsArr.push(newTicket);
      legend.legendLatestTicketsArr.sort(function (a, b) {
        return b.CreatedAt - a.CreatedAt;
      });
    }
    function changeDrawResult(data) {
      if ($rootScope.LegendCurrentTerm !== undefined) {
        $rootScope.LegendCurrentTerm.map(function (term) {
          if (term.Term === data.Term && term.GameType === data.GameType) {
            term.DrawResultAt = data.DrawResultAt;
          }
        });
        legend.drawResultTimes(true);
      }
    }
    function drawResultTimes(update) {
      if ($rootScope.LegendCurrentTerm !== undefined) {
        let GameType = $state.current.name.split(".")[2] === "northern" ? 0 : 1;
        let Term = $rootScope.LegendCurrentTerm.filter(function (t) {
          return t.GameType === GameType;
        });
        $rootScope.termInfo = Term[0];
        legend.DrawResultAt = {Time: Term[0].DrawResultAt, Name: $filter("legendGame")(GameType)};
        if (update) {
          $scope.$digest();
        }
      }
    }
    function legendVideo() {
      if (!$rootScope.isAuthenticated) {
        return;
      }
      let username = $rootScope.isAuthenticated ? $rootScope.User.Username : "public";
      if (H5LivePlayer.isSupported()) {
        H5LivePlayer.startAdaptiveStream({playerDivId: "player-element", streamNames: ["vKzPg-gtdm8", "vKzPg-1Ppmy", "vKzPg-ZzASt", "vKzPg-2MCUu"], startStream: "vKzPg-ZzASt", metrics: {username: username, game: "lottery789"}});
      } else {
        alert("Trình duyệt của quý khách không hỗ trợ xem video phát trực tuyến");
      }
    }
    $scope.$on("$destroy", function () {
      $timeout(function () {
        if (H5LivePlayer.isSupported()) {
          H5LivePlayer.destroy();
        }
        if (ipr !== undefined) {
          $interval.cancel(ipr);
        }
        if ($rootScope.isAuthenticated) {
          Lotus.Lottery789.Realtime.unsubscribe();
          console.log("Realtime:789:unsubscribe");
        }
      });
    });
    legend.matrix = {};
    for (let i = 0; i < 10; i++) {
      legend.matrix[i] = [];
    }
    function legendResult() {
      let GameType = $state.current.name.split(".")[2] === "northern" ? 0 : 1;
      if (legend.resultTables === undefined) {
        legend.resultTables = {GameType: GameType};
      }
      if ($rootScope.isAuthenticated) {
        if ($rootScope.LegendCurrentTerm !== undefined) {
          network.Public.Legend.LotteryResult.getLatestResultByGameType({GameType: GameType}).then(function (response) {
            if (response.Fiveth !== undefined) {
              response.Fifth = response.Fiveth;
              delete response.Fiveth;
            }
            legend.resultTables = response;
            legend.brt();
            legend.cinematicNote();
            $timeout(function () {
              legend.reloadingResult = false;
              $scope.$digest();
            });
          });
        } else {
          $timeout(function () {
            legend.legendResult();
          }, 1e3);
        }
      } else {
        if (ipr !== undefined) {
          $interval.cancel(ipr);
        }
        network.Public.Legend.LotteryResult.getLatestResultByGameType({GameType: GameType}).then(function (response) {
          if (response.Fiveth !== undefined) {
            response.Fifth = response.Fiveth;
            delete response.Fiveth;
          }
          legend.resultTables = response;
          legend.brt();
          $timeout(function () {
            legend.reloadingResult = false;
            $scope.$digest();
          });
        });
        ipr = $interval(function () {
          legend.legendResult();
        }, 3e4);
      }
    }
    function brt() {
      legend.matrix = msUtils.generatorMatrix(legend.resultTables);
    }
    function closedPrize(data) {
      if (legend.GameType === data.GameType) {
        legend.cinematicNote();
        legend.currentSpin = data.PrizeNr;
        if (data.GameType === 0) {
          if (data.PrizeNr === 27) {
            legend.latestResult = undefined;
            legend.resultTables = {Jackpot: "", First: "", Second: ["", ""], Third: ["", "", "", "", "", ""], Fourth: ["", "", "", ""], Fifth: ["", "", "", "", "", ""], Sixth: ["", "", ""], Seventh: ["", "", "", ""], Term: data.Term, GameType: 0};
          }
        } else {
          if (data.PrizeNr === 18) {
            legend.latestResult = undefined;
            legend.resultTables = {Jackpot: "", First: "", Second: "", Third: ["", ""], Fourth: ["", "", "", "", "", "", ""], Fifth: "", Sixth: ["", "", ""], Seventh: "", Eighth: "", Term: data.Term, GameType: 1};
          }
        }
        legend.brt();
        if (data.PrizeNr === 0) {
          if ($state.current.name === "app.legendary.northern.live") {
            $state.go("app.legendary.northern.lotto");
          } else if ($state.current.name === "app.legendary.southern.live") {
            $state.go("app.legendary.southern.2d.lotto");
          }
        }
        $timeout(function () {
          $scope.$digest();
        }, 100);
      } else {}
    }
    function updateResults(data) {
      console.log("Kỳ hiện tại: ", data.Term === legend.resultTables.Term ? "Yes" : "No");
      legend.latestResult = data.Result;
      if (legend.GameType === data.GameType) {
        legend.playAudio();
        if (data.Term === legend.resultTables.Term) {
          if (data.GameType === 0) {
            legend.updateNorthPrize(data);
          } else {
            legend.updateSouthPrize(data);
          }
        } else {
          if (data.GameType === 0) {
            legend.resultTables = {Jackpot: "", First: "", Second: ["", ""], Third: ["", "", "", "", "", ""], Fourth: ["", "", "", ""], Fifth: ["", "", "", "", "", ""], Sixth: ["", "", ""], Seventh: ["", "", "", ""], Term: data.Term, GameType: 0};
            legend.updateNorthPrize(data);
          } else {
            legend.resultTables = {Jackpot: "", First: "", Second: "", Third: ["", ""], Fourth: ["", "", "", "", "", "", ""], Fifth: "", Sixth: ["", "", ""], Seventh: "", Eighth: "", Term: data.Term, GameType: 1};
            legend.updateSouthPrize(data);
          }
        }
        legend.cinematicNote();
        $timeout(function () {
          $scope.$digest();
        }, 500);
      } else {}
    }
    function turnOnVideo() {
      legend.showMaskVideo = false;
      $timeout(function () {
        if (!H5LivePlayer.isPlaying()) {
          H5LivePlayer.play();
        }
        $scope.$digest();
      }, 4e3);
    }
    function turnOffVideo(data) {
      legend.showMaskVideo = true;
      legend.showing = data.GameType;
      $timeout(function () {
        if (H5LivePlayer.isPlaying()) {
          console.log("Tạm dừng Video do đang xem đài không mở thưởng");
          H5LivePlayer.pause();
        }
        $scope.$digest();
      }, 2e3);
    }
    function updateNorthPrize(data) {
      switch (data.Prize) {
        case 0:
          legend.resultTables.Jackpot = data.Result;
          break;
        case 1:
          legend.resultTables.First = data.Result;
          break;
        case 2:
          legend.resultTables.Second[0] = data.Result;
          break;
        case 3:
          legend.resultTables.Second[1] = data.Result;
          break;
        case 4:
          legend.resultTables.Third[0] = data.Result;
          break;
        case 5:
          legend.resultTables.Third[1] = data.Result;
          break;
        case 6:
          legend.resultTables.Third[2] = data.Result;
          break;
        case 7:
          legend.resultTables.Third[3] = data.Result;
          break;
        case 8:
          legend.resultTables.Third[4] = data.Result;
          break;
        case 9:
          legend.resultTables.Third[5] = data.Result;
          break;
        case 10:
          legend.resultTables.Fourth[0] = data.Result;
          break;
        case 11:
          legend.resultTables.Fourth[1] = data.Result;
          break;
        case 12:
          legend.resultTables.Fourth[2] = data.Result;
          break;
        case 13:
          legend.resultTables.Fourth[3] = data.Result;
          break;
        case 14:
          legend.resultTables.Fifth[0] = data.Result;
          break;
        case 15:
          legend.resultTables.Fifth[1] = data.Result;
          break;
        case 16:
          legend.resultTables.Fifth[2] = data.Result;
          break;
        case 17:
          legend.resultTables.Fifth[3] = data.Result;
          break;
        case 18:
          legend.resultTables.Fifth[4] = data.Result;
          break;
        case 19:
          legend.resultTables.Fifth[5] = data.Result;
          break;
        case 20:
          legend.resultTables.Sixth[0] = data.Result;
          break;
        case 21:
          legend.resultTables.Sixth[1] = data.Result;
          break;
        case 22:
          legend.resultTables.Sixth[2] = data.Result;
          break;
        case 23:
          legend.resultTables.Seventh[0] = data.Result;
          break;
        case 24:
          legend.resultTables.Seventh[1] = data.Result;
          break;
        case 25:
          legend.resultTables.Seventh[2] = data.Result;
          break;
        case 26:
          legend.resultTables.Seventh[3] = data.Result;
          break;
      }
      legend.brt();
      $timeout(function () {
        $scope.$digest();
      }, 300);
    }
    function updateSouthPrize(data) {
      switch (data.Prize) {
        case 0:
          legend.resultTables.Jackpot = data.Result;
          break;
        case 1:
          legend.resultTables.First = data.Result;
          break;
        case 2:
          legend.resultTables.Second = data.Result;
          break;
        case 3:
          legend.resultTables.Third[1] = data.Result;
          break;
        case 4:
          legend.resultTables.Third[0] = data.Result;
          break;
        case 5:
          legend.resultTables.Fourth[6] = data.Result;
          break;
        case 6:
          legend.resultTables.Fourth[5] = data.Result;
          break;
        case 7:
          legend.resultTables.Fourth[4] = data.Result;
          break;
        case 8:
          legend.resultTables.Fourth[3] = data.Result;
          break;
        case 9:
          legend.resultTables.Fourth[2] = data.Result;
          break;
        case 10:
          legend.resultTables.Fourth[1] = data.Result;
          break;
        case 11:
          legend.resultTables.Fourth[0] = data.Result;
          break;
        case 12:
          legend.resultTables.Fifth = data.Result;
          break;
        case 13:
          legend.resultTables.Sixth[2] = data.Result;
          break;
        case 14:
          legend.resultTables.Sixth[1] = data.Result;
          break;
        case 15:
          legend.resultTables.Sixth[0] = data.Result;
          break;
        case 16:
          legend.resultTables.Seventh = data.Result;
          break;
        case 17:
          legend.resultTables.Eighth = data.Result;
          break;
      }
      legend.brt();
      $timeout(function () {
        $scope.$digest();
      }, 300);
    }
    function cinematicNote() {
      let countPrize = legend.countPrize();
      if (legend.resultTables.GameType === 0) {
        legend.currentSpin = 26 - countPrize;
        if (countPrize === 27) {
          if (moment().isBefore(legend.DrawResultAt.Time)) {
            legend.cinematicState = "idle";
          } else {
            legend.cinematicState = "ended";
          }
        } else {
          legend.cinematicState = "live";
        }
      } else {
        legend.currentSpin = 17 - countPrize;
        if (countPrize === 18) {
          if (moment().isBefore(legend.DrawResultAt.Time)) {
            legend.cinematicState = "idle";
          } else {
            legend.cinematicState = "ended";
          }
        } else {
          legend.cinematicState = "live";
        }
      }
    }
    function countPrize() {
      let obj = legend.resultTables;
      let count = 0;
      Object.keys(obj).forEach(function (key) {
        if (msUtils.exists(key, ["Jackpot", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"])) {
          if (!Array.isArray(obj[key])) {
            if (obj[key].length) {
              count++;
            }
          } else {
            for (let i = 0; i < obj[key].length; i++) {
              if (obj[key][i].length) {
                count++;
              }
            }
          }
        }
      });
      return count;
    }
    function cinematicSetText(countPrize) {
      if (legend.resultTables.GameType === 0) {
        switch (countPrize) {
          case 1:
            return "Đang quay giải nhì, bộ số thứ nhất";
          case 2:
            return "Đang quay giải nhì, bộ số thứ hai";
          case 3:
            return "Đang quay giải ba, bộ số thứ nhất";
          case 4:
            return "Đang quay giải ba, bộ số thứ hai";
          case 5:
            return "Đang quay giải ba, bộ số thứ ba";
          case 6:
            return "Đang quay giải ba, bộ số thứ tư";
          case 7:
            return "Đang quay giải ba, bộ số thứ năm";
          case 8:
            return "Đang quay giải ba, bộ số thứ sáu";
          case 9:
            return "Đang quay giải tư, bộ số thứ nhất";
          case 10:
            return "Đang quay giải tư, bộ số thứ hai";
          case 11:
            return "Đang quay giải tư, bộ số thứ ba";
          case 12:
            return "Đang quay giải tư, bộ số thứ tư";
          case 13:
            return "Đang quay giải năm, bộ số thứ nhất";
          case 14:
            return "Đang quay giải năm, bộ số thứ hai";
          case 15:
            return "Đang quay giải năm, bộ số thứ ba";
          case 16:
            return "Đang quay giải năm, bộ số thứ tư";
          case 17:
            return "Đang quay giải năm, bộ số thứ năm";
          case 18:
            return "Đang quay giải năm, bộ số thứ sáu";
          case 19:
            return "Đang quay giải sáu, bộ số thứ nhất";
          case 20:
            return "Đang quay giải sáu, bộ số thứ hai";
          case 21:
            return "Đang quay giải sáu, bộ số thứ ba";
          case 22:
            return "Đang quay giải bảy, bộ số thứ nhất";
          case 23:
            return "Đang quay giải bảy, bộ số thứ hai";
          case 24:
            return "Đang quay giải bảy, bộ số thứ ba";
          case 25:
            return "Đang quay giải bảy, bộ số thứ tư";
          case 26:
            return "Đang quay giải đặc biệt";
        }
      } else {
        switch (countPrize) {
          case 1:
            return "Đang quay giải bảy";
          case 2:
            return "Đang quay giải sáu, bộ số thứ nhất";
          case 3:
            return "Đang quay giải sáu, bộ số thứ hai";
          case 4:
            return "Đang quay giải sáu, bộ số thứ ba";
          case 5:
            return "Đang quay giải năm";
          case 6:
            return "Đang quay giải tư, bộ số thứ nhất";
          case 7:
            return "Đang quay giải tư, bộ số thứ hai";
          case 8:
            return "Đang quay giải tư, bộ số thứ ba";
          case 9:
            return "Đang quay giải tư, bộ số thứ tư";
          case 10:
            return "Đang quay giải tư, bộ số thứ năm";
          case 11:
            return "Đang quay giải tư, bộ số thứ sáu";
          case 12:
            return "Đang quay giải tư, bộ số thứ bảy";
          case 13:
            return "Đang quay giải ba, bộ số thứ nhất";
          case 14:
            return "Đang quay giải ba, bộ số thứ hai";
          case 15:
            return "Đang quay giải nhì";
          case 16:
            return "Đang quay giải nhất";
          case 17:
            return "Đang quay giải đặc biệt";
        }
      }
    }
    function playAudio() {
      let audio = new Audio("assets/alert.mp3");
      audio.volume = 0.1;
      audio.play();
    }
    legend.muted = true;
    function setMuted() {
      legend.muted = !legend.muted;
      if (legend.muted) {
        H5LivePlayer.mute();
      } else {
        H5LivePlayer.unmute();
      }
    }
    function notifications(data) {
      if (legend.GameType === data.GameType) {
        legend.showNotify = true;
        legend.textNotify = data.Message;
        $timeout(function () {
          $scope.$digest();
        });
        $timeout(function () {
          legend.showNotify = false;
        }, 8e3);
      }
    }
    function moveToLiving(data) {
      if (data.Term + "." + data.GameType === legend.remember) {
        return;
      }
      $mdDialog.show({locals: {data: data, callback: legend.callbackApproved}, clickOutsideToClose: true, escapeToClose: true, templateUrl: "app/main/legendary/dialog.move.living.html", controller: moveToLivingCtrl});
      function moveToLivingCtrl($scope, data) {
        $scope.$mdMedia = $mdMedia;
        $scope.cancel = function () {
          legend.remember = data.Term + "." + data.GameType;
          $mdDialog.hide();
        };
        $scope.data = data;
        $scope.move = function () {
          if (data.GameType === 0) {
            $state.go("app.legendary.northern.live");
          } else {
            $state.go("app.legendary.southern.live");
          }
          $timeout(function () {
            $mdDialog.hide();
          }, 500);
        };
      }
    }
    $scope.$on("getMissing", function (event, data) {
      $timeout(function () {
        legend.reMissData = data;
        if ($rootScope.isAuthenticated) {
          legend.getMissingNumbers(data);
        }
      }, 1e3);
    });
    $rootScope.missNumbers = [{GameType: 0, Term: "", missNumbers: []}, {GameType: 1, Term: "", missNumbers: []}];
    function getMissingNumbers(data) {
      if (legend.reMissData === undefined) {
        return;
      }
      data = data === undefined ? legend.reMissData : data;
      if ($rootScope.LegendCurrentTerm !== undefined) {
        $rootScope.missNumbers.map(function (item) {
          if (item.GameType === data.GameType) {
            if (item.Term !== $rootScope.LegendTermName[data.GameType]) {
              item.Term = $rootScope.LegendTermName[data.GameType];
              item.missNumbers = [];
            }
          }
        });
        let matchGame = $rootScope.missNumbers.filter(function (item) {
          return item.GameType === data.GameType;
        });
        if (matchGame.length) {
          let findStats = matchGame[0].missNumbers.filter(function (item) {
            return item.StatsType === data.StatsType;
          });
          if (findStats.length === 0) {
            Lotus.Lottery789.ResultStats.TimesDrawn.getMissing({GameType: data.GameType, StatsType: data.StatsType}).then(function (response) {
              response.sort(function (a, b) {
                return b.TimesMissing - a.TimesMissing;
              });
              response.map(function (item, index) {
                item.high = item.TimesMissing >= item.AvgTimesMissing;
              });
              $rootScope.missNumbers.map(function (item) {
                if (item.GameType === data.GameType) {
                  item.missNumbers.push({StatsType: data.StatsType, Data: response});
                }
              });
              $rootScope.$broadcast("getMissing::done");
              legend.updateWithResult();
            });
          } else {
            $rootScope.$broadcast("getMissing::done");
            legend.updateWithResult();
          }
        }
      } else {
        $timeout(function () {
          legend.getMissingNumbers(data);
        }, 1e3);
      }
    }
    function updateMissing(data, newResult) {
      let number = data.Result.slice(-2);
      let missingNumbers = $rootScope.missNumbers.filter(function (item) {
        return item.GameType === data.GameType && item.Term === data.Term;
      });
      if (missingNumbers.length) {
        let findByStat = missingNumbers[0].missNumbers.filter(function (item) {
          return item.StatsType === 2;
        });
        if (findByStat.length) {
          findByStat[0].Data.map(function (item) {
            if (item.Number === number) {
              item.TimesMissing = 0;
              item.TimesDrawn++;
              item.high = false;
            }
          });
          $rootScope.$broadcast("getMissing::done");
          if (newResult) {
            $rootScope.$broadcast("highlight::number", number);
          }
        }
      }
    }
    function updateWithResult() {
      legend.NorthernResultCommentator();
      if (legend.resultTables.Term !== undefined) {
        let currentResult = [];
        if (legend.resultTables.GameType === 0) {
          currentResult = currentResult.concat([legend.resultTables.First]).concat(legend.resultTables.Second).concat(legend.resultTables.Third).concat(legend.resultTables.Fourth).concat(legend.resultTables.Fifth).concat(legend.resultTables.Sixth).concat(legend.resultTables.Seventh).concat([legend.resultTables.Jackpot]);
          currentResult = currentResult.filter(function (item) {
            return item.length !== 0;
          });
          if (currentResult.length < 27) {
            currentResult.map(function (item) {
              legend.updateMissing({Result: item, Term: legend.resultTables.Term, GameType: legend.resultTables.GameType});
            });
          }
        }
      } else {
        $timeout(function () {
          legend.updateWithResult();
        }, 1e3);
      }
    }
    function reInit() {
      Lotus.Lottery789.LotteryResult.getLatestResults({GameType: 0}).then(function (response) {
        $rootScope.theResults = response;
        legend.NorthernResultCommentator();
      });
    }
    function NorthernResultCommentator() {
      legend.commentText = "";
      legend.Commentator = {};
      if ($rootScope.missNumbers !== undefined && $rootScope.theResults !== undefined && legend.resultTables !== undefined) {
        legend.Commentator.LastLotteryResults = $rootScope.theResults;
        legend.Commentator.CurrentLotteryResult = legend.resultTables;
        let missNumber = $rootScope.missNumbers.filter(function (item) {
          return item.GameType === 0;
        })[0].missNumbers;
        let missNumbersByStats = missNumber.filter(function (item) {
          return item.StatsType === 2;
        });
        if (missNumbersByStats.length !== 0) {
          legend.Commentator.NumberTimesMissing = angular.copy(missNumbersByStats[0].Data);
          legend.Commentator.NumberTimesMissing.map(function (item) {
            delete item.MaxTimesMissing;
            delete item.AvgTimesMissing;
            delete item.LastTimesMissing;
            delete item.TimesDrawn;
            delete item.high;
          });
          Lotus.Lottery789.ResultStats.NothernResultCommentator.init(legend.Commentator);
        } else {
          legend.getMissingNumbers({GameType: 0, StatsType: 2});
        }
      } else {
        $timeout(function () {
          legend.NorthernResultCommentator();
        }, 2e3);
      }
    }
    function ResultCommentator(data) {
      let lastResult = data.Result.slice(-2);
      let result = Lotus.Lottery789.ResultStats.NothernResultCommentator.comment({Result: lastResult});
      legend.commentText = result !== null ? result.Number + ": " + result.Comments.join(" - ") : "";
    }
  }
  function legendCostMoney($rootScope) {
    return function (input) {
      let betTimesArr = [{GameType: 0, BetType: 5, times: 10}, {GameType: 0, BetType: 6, times: 4}];
      let betTimesObj = betTimesArr.filter(function (item) {
        return item.GameType === input.GameType && item.BetType === input.BetType;
      });
      let betTimes = betTimesObj.length ? betTimesObj[0].times : 1;
      var output = 0;
      let payout = $rootScope.LegendParameters.filter(function (my) {
        return my.GameType === input.GameType && my.BetType === input.BetType;
      })[0].Payouts;
      angular.forEach(input.Items, function (item) {
        if (input.GameType === 0 && input.BetType === 5) {
          output += item.Point * (item.Price - payout) / 10;
        } else if (input.GameType === 0 && input.BetType === 6) {
          output += item.Point * (item.Price - payout);
        } else {
          output += item.Price * item.Point;
        }
      });
      if (input.GameType === 0 && input.BetType === 5) {
        return output;
      } else {
        return output * betTimes;
      }
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.core").service("casinoConfig", function ($mdDialog, $mdToast) {
    this.maxBase = function (id) {
      let settings = {1: 1e4, 2: 2e4, 3: 5e4, 4: 1e5, 5: 2e5, 6: 5e5, 7: 1e6, 8: 2e6, 9: 5e6, 10: 1e7, 11: 2e7, 12: 5e7, 13: 1e8};
      return settings[id];
    };
    this.configToken = function () {
      return {1: {label: "10K - 1M", selected: false, token: ["10k", "20k", "50k", "100k", "200k", "500k", "1m"]}, 2: {label: "20K - 2M", selected: false, token: ["20k", "50k", "100k", "200k", "500k", "1m", "2m"]}, 3: {label: "50K - 5M", selected: false, token: ["50k", "100k", "200k", "500k", "1m", "2m", "5m"]}, 4: {label: "100K - 10M", selected: false, token: ["100k", "200k", "500k", "1m", "2m", "5m", "10m"]}, 5: {label: "200K - 20M", selected: false, token: ["200k", "500k", "1m", "2m", "5m", "10m", "20m"]}, 6: {label: "500K - 50M", selected: false, token: ["500k", "1m", "2m", "5m", "10m", "20m", "50m"]}, 7: {label: "1M - 100M", selected: false, token: ["1m", "2m", "5m", "10m", "20m", "50m", "100m"]}, 8: {label: "2M - 200M", selected: false, token: ["2m", "5m", "10m", "20m", "50m", "100m", "200m"]}, 9: {label: "5M - 500M", selected: false, token: ["5m", "10m", "20m", "50m", "100m", "200m", "500m"]}, 10: {label: "10M - 1B", selected: false, token: ["10m", "20m", "50m", "100m", "200m", "500m", "1b"]}, 11: {label: "20M - 2B", selected: false, token: ["20m", "50m", "100m", "200m", "500m", "1b", "2b"]}, 12: {label: "50M - 5B", selected: false, token: ["50m", "100m", "200m", "500m", "1b", "2b", "5b"]}, 13: {label: "100M - 10B", selected: true, token: ["100m", "200m", "500m", "1b", "2b", "5b", "10b"]}};
    };
    this.configMoney = function () {
      return [{label: "10k", money: 1e4}, {label: "20k", money: 2e4}, {label: "50k", money: 5e4}, {label: "100k", money: 1e5}, {label: "200k", money: 2e5}, {label: "500k", money: 5e5}, {label: "1m", money: 1e6}, {label: "2m", money: 2e6}, {label: "5m", money: 5e6}, {label: "10m", money: 1e7}, {label: "20m", money: 2e7}, {label: "50m", money: 5e7}, {label: "100m", money: 1e8}, {label: "200m", money: 2e8}, {label: "500m", money: 5e8}, {label: "1b", money: 1e9}, {label: "2b", money: 2e9}, {label: "5b", money: 5e9}, {label: "10b", money: 1e10}];
    };
    this.generateTokenByIndex = function (betValue, _tokenArr) {
      let aTokenPile = [];
      let iValueRest;
      let iCont = _tokenArr.length - 1;
      let iCurMaxTokenStake = _tokenArr[iCont].money;
      do {
        iValueRest = betValue % iCurMaxTokenStake;
        iValueRest = this.roundDecimal(iValueRest, 1);
        let iDivisionWithPrecision = betValue / iCurMaxTokenStake;
        let iDivision = Math.floor(iDivisionWithPrecision);
        for (let i = 0; i < iDivision; i++) {
          aTokenPile.push(this.getTokenIndexByValue(iCurMaxTokenStake, _tokenArr));
        }
        iCont--;
        iCurMaxTokenStake = iCont > -1 ? _tokenArr[iCont].money : undefined;
        betValue = iValueRest;
      } while (iValueRest > 0 && iCont > -1);
      aTokenPile.sort(function (a, b) {
        return a - b;
      });
      return aTokenPile;
    };
    this.getTokenIndexByValue = function (iValue, _tokenArr) {
      let iIndex = 0;
      for (let i = 0; i < _tokenArr.length; i++) {
        if (iValue === _tokenArr[i].money) {
          iIndex = i;
          break;
        }
      }
      return iIndex;
    };
    this.roundDecimal = function (num, precision) {
      let decimal = Math.pow(10, precision);
      return Math.round(decimal * num) / decimal;
    };
  });
}());
Number.prototype.formatMoney = function (c, d, t) {
  let n = this;
  c = isNaN(c = Math.abs(c)) ? 0 : c, d = d === undefined ? "." : d, t = t === undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
Number.prototype.formatBetType = function () {
  let n = this;
  let output;
  if (Number(n) === 0) {
    output = "Chẵn";
  } else if (Number(n) === 1) {
    output = "Lẻ";
  } else if (Number(n) === 2) {
    output = "4 Đỏ";
  } else if (Number(n) === 3) {
    output = "4 Trắng";
  } else if (Number(n) === 4) {
    output = "1 Đỏ";
  } else if (Number(n) === 5) {
    output = "3 Đỏ";
  }
  return output;
};
(function () {
  "use strict";
  angular.module("app.casino").controller("casinoController", casinoController);
  function casinoController($rootScope, $scope, $state, $location, $mdMedia, $interval, $timeout, $document, $stateParams, $sce, gameData, msUtils, message, Fullscreen) {
    let vm = this;
    $scope.$mdMedia = $mdMedia;
    let area = $stateParams.area === undefined ? 100 : $stateParams.area;
    vm.gameStyle = {background: "url(assets/images/backgrounds/crab.jpg) 50% 50% / cover no-repeat fixed"};
    $rootScope.gameName = "789 Casino";
    if ($location.host() === "localhost") {
      vm.url = "http://localhost:3006/?area=" + area;
    } else {
      vm.url = "https://" + $location.host() + "/xocdia/index.html?area=" + area;
    }
    vm.currentProjectUrl = $sce.trustAsResourceUrl(vm.url);
  }
}());
(function () {
  "use strict";
  angular.module("app.game", []).config(config);
  function config($stateProvider, msApiProvider) {
    $stateProvider.state("app.game", {url: "/live-casino/:id/:play", views: {"main@": {templateUrl: "app/core/layouts/content-game-play.html", controller: "MainController as vm"}, "toolbar@app.game": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.game": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "content@app.game": {templateUrl: "app/main/game/game.html", controller: "gamePlayController as vm"}, "accountPanel@app.game": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}}, resolve: {gameData: function (msApi) {
      return msApi.resolve("games@get");
    }, Maintenance: function (msApi) {
      return msApi.resolve("Maintenance@get");
    }}, bodyClass: "gaming"});
    msApiProvider.register("games", ["app/data/games.json"]);
    msApiProvider.register("Maintenance", ["app/data/wm-maintain.json"]);
  }
}());
(function () {
  "use strict";
  angular.module("app.game").controller("gamePlayController", gamePlayController);
  function gamePlayController($rootScope, $scope, $state, $mdMedia, $interval, $timeout, $document, $stateParams, $sce, gameData, msUtils, message, Fullscreen, Analytics, Maintenance, $location) {
    let vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.loadGameUrl = loadGameUrl;
    vm.loadFreeGameUrl = loadFreeGameUrl;
    vm.init = init;
    vm.gameName = $stateParams.id;
    let game = $.grep(gameData.data, function (g) {
      return g.interName === vm.gameName;
    });
    if (game.length) {
      $rootScope.gameName = game[0].name;
      vm.gameInfo = game[0];
      vm.gameStyle = {background: "url(" + vm.gameInfo.cover + ") 50% 50% / cover no-repeat fixed"};
    } else {
      $rootScope.gameName = "WM Casino";
      vm.gameStyle = {background: "url(assets/images/backgrounds/crab.jpg) 50% 50% / cover no-repeat fixed"};
    }
    $timeout(function () {
      vm.init();
    }, 300);
    function init() {
      if ($rootScope.isAuthenticated) {
        if ($stateParams.play === "free") {
          $state.go("app.game", {id: $stateParams.id, play: ""});
        } else {
          vm.loadGameUrl();
          vm.introduction = false;
        }
      } else {
        if ($stateParams.play === "free") {
          vm.introduction = false;
          vm.loadFreeGameUrl();
        } else {
          vm.introduction = true;
        }
      }
    }
    function loadFreeGameUrl() {
      let data = {ReturnUrl: "https://" + $location.host()};
      if (vm.gameInfo !== undefined) {
        data.AccessGame = vm.gameInfo.id;
      }
      vm.loadingGame = true;
      vm.preHasGame = false;
      Lotus.Public.WMCasino.GamePlay.loginGame(data).then(function (response) {
        vm.preHasGame = true;
        $timeout(function () {
          vm.loadingGame = false;
        }, 5e3);
        vm.currentProjectUrl = $sce.trustAsResourceUrl(response.Url);
      }).catch(function (error) {
        vm.isWMMaintenance = true;
        vm.MaintenanceMessage = error.message;
        message.show(error.message);
      });
      Analytics.trackEvent("WM-CASINO", "Free-Play");
    }
    function loadGameUrl() {
      if ($rootScope.User !== undefined) {
        if (!msUtils.exists(100, $rootScope.User.Products)) {
          message.show("Tài khoản của quý khách không được phép chơi Casino. Quý khách vui lòng liên hệ đại lý để có thêm chi tiết");
          return;
        }
        let data = {ReturnUrl: "https://" + $location.host()};
        if (vm.gameInfo !== undefined) {
          data.AccessGame = vm.gameInfo.id;
        }
        vm.loadingGame = true;
        vm.preHasGame = false;
        Lotus.WMCasino.GamePlay.loginGame(data).then(function (response) {
          vm.preHasGame = true;
          $timeout(function () {
            vm.loadingGame = false;
          }, 5e3);
          vm.currentProjectUrl = $sce.trustAsResourceUrl(response.Url);
          Analytics.trackEvent("WM-CASINO", "ENTER-GAME", $rootScope.User.Username);
        }).catch(function (error) {
          Analytics.trackEvent("WM-CASINO", "LoadUrlError", $rootScope.User.Username);
          if (error.code === "RetryException") {
            vm.message = "Quý khách vui lòng chờ trong giây lát";
            $timeout(function () {
              if ($state.current.name === "app.game") {
                vm.loadGameUrl();
              }
            }, 1500);
          } else {
            vm.isWMMaintenance = true;
            vm.MaintenanceMessage = error.message;
            message.show(error.message);
          }
        });
      } else {
        $timeout(function () {
          vm.loadGameUrl();
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.home", []).config(config);
  function config($stateProvider, msNavigationServiceProvider, msApiProvider) {
    $stateProvider.state("app.home", {url: "/", views: {"main@": {templateUrl: "app/core/layouts/vertical-navigation.html", controller: "MainController as one"}, "content@app.home": {templateUrl: "app/main/home/home.html", controller: "HomeCtrl as vm"}, "toolbar@app.home": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app.home": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app.home": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}}, resolve: {aGames: function (msApi) {
      return msApi.resolve("wm-game@get");
    }}, bodyClass: "one789 home"});
    msApiProvider.register("wm-game", ["app/data/games.json"]);
    msNavigationServiceProvider.saveItem("one", {title: "", group: true, weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery", {title: "XỔ SỐ TRUYỀN THỐNG", icon: "icon-traditional-lottery", weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery.northern", {title: "Miền Bắc 1", weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery.northern.jackpot", {title: "Đề", weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery.northern.jackpot.jackpot", {title: "Đề", state: "app.traditional.northern.jackpot", stateParams: {id: "home"}, weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery.northern.lotto", {title: "Lô", state: "app.traditional.northern.lotto", weight: 2});
    msNavigationServiceProvider.saveItem("one.lottery.northern.live", {title: "Lô Live", state: "app.traditional.northern.live", weight: 4});
    msNavigationServiceProvider.saveItem("one.lottery.northern.jackpot.jackpot-first", {title: "Đề giải 1", state: "app.traditional.northern.jackpot-first", weight: 9});
    msNavigationServiceProvider.saveItem("one.lottery.northern.jackpot.jackpot-head-first", {title: "Đề đầu giải 1", state: "app.traditional.northern.jackpot-head-first", weight: 10});
    msNavigationServiceProvider.saveItem("one.lottery.northern.jackpot.jackpot-caishen", {title: "Đề Thần Tài", state: "app.traditional.northern.jackpot-caishen", weight: 11});
    msNavigationServiceProvider.saveItem("one.lottery.northern.jackpot.jackpot-head-caishen", {title: "Đề Đầu Thần Tài", state: "app.traditional.northern.jackpot-head-caishen", weight: 12});
    msNavigationServiceProvider.saveItem("one.lottery.northern-2nd", {title: "Miền Bắc 2", weight: 2});
    msNavigationServiceProvider.saveItem("one.lottery.northern-2nd.quick-bet", {title: "Cược nhanh", state: "app.traditional.northern-2nd.quick-bet", hidden: function () {
      return screen.width < 600;
    }, weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery.northern-2nd.2d", {title: "2D", state: "app.traditional.northern-2nd.2d.dau", weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery.northern-2nd.2d.row-bet", {title: "Kéo hàng", state: "app.traditional.northern-2nd.2d.row-bet", hidden: function () {
      return screen.width < 600;
    }, weight: 4});
    msNavigationServiceProvider.saveItem("one.lottery.northern-2nd.3d", {title: "3D", state: "app.traditional.northern-2nd.3d.dau", weight: 2});
    msNavigationServiceProvider.saveItem("one.lottery.northern-2nd.4d", {title: "4D", state: "app.traditional.northern-2nd.4d.duoi", weight: 3});
    msNavigationServiceProvider.saveItem("one.lottery.southern", {title: "Miền Nam", weight: 3});
    msNavigationServiceProvider.saveItem("one.lottery.southern.quick-bet", {title: "Cược nhanh", state: "app.traditional.southern.quick-bet", hidden: function () {
      return screen.width < 600;
    }, weight: 1});
    msNavigationServiceProvider.saveItem("one.lottery.southern.2d", {title: "2D", state: "app.traditional.southern.2d.dau", weight: 2});
    msNavigationServiceProvider.saveItem("one.lottery.southern.2d.row-bet", {title: "Kéo hàng", state: "app.traditional.southern.2d.row-bet", hidden: function () {
      return screen.width < 600;
    }, weight: 4});
    msNavigationServiceProvider.saveItem("one.lottery.southern.3d", {title: "3D", state: "app.traditional.southern.3d.dau", weight: 3});
    msNavigationServiceProvider.saveItem("one.lottery.southern.4d", {title: "4D", state: "app.traditional.southern.4d.duoi", weight: 4});
    msNavigationServiceProvider.saveItem("one.lottery.southern.parlay", {title: "Lô Xiên", state: "app.traditional.southern.parlay.pair-2", weight: 5});
    msNavigationServiceProvider.saveItem("one.lottery.southern.7lo", {title: "7 Lô", state: "app.traditional.southern.7lo", hidden: function () {
      return screen.width < 600;
    }, weight: 6});
    msNavigationServiceProvider.saveItem("one.lottery.18ab", {title: "Xiên 18A+B", state: "app.traditional.18ab", weight: 4});
    msNavigationServiceProvider.saveItem("one.lottery.manual", {title: "Nhập tay", state: "app.traditional.manual", weight: 5});
    msNavigationServiceProvider.saveItem("one.casino", {title: "Xóc đĩa 789", icon: "icon-sedie-789", state: "app.casino", weight: 3});
    msNavigationServiceProvider.saveItem("one.saba", {title: "BONG88", icon: "icon-saba", weight: 5});
    msNavigationServiceProvider.saveItem("one.saba.sport", {title: "Bóng đá", state: "app.saba", stateParams: {game: "sport"}});
    msNavigationServiceProvider.saveItem("one.saba.sabaclub", {title: "Saba.Club", state: "app.saba", stateParams: {game: "sabaclub"}});
    msNavigationServiceProvider.saveItem("one.saba.esports", {title: "Saba E-Sports", state: "app.saba", stateParams: {game: "esports"}});
    msNavigationServiceProvider.saveItem("one.saba.keno", {title: "Keno", state: "app.saba", stateParams: {game: "keno"}});
    msNavigationServiceProvider.saveItem("one.saba.kenolottery", {title: "Lottery", state: "app.saba", stateParams: {game: "kenolottery"}});
    msNavigationServiceProvider.saveItem("one.saba.casino", {title: "RNG", state: "app.saba", stateParams: {game: "casino"}});
    msNavigationServiceProvider.saveItem("one.announcements", {title: "THÔNG BÁO", icon: "icon-tile-four", state: "app.announcements.threads", weight: 5, stateParams: {filter: "normal"}});
    msNavigationServiceProvider.saveItem("one.lotto-result", {title: "KẾT QUẢ XỔ SỐ", icon: "icon-tile-four", weight: 6});
    msNavigationServiceProvider.saveItem("one.lotto-result.traditional", {title: "Xổ số truyền thống", state: "app.results.traditional"});
  }
}());
(function () {
  "use strict";
  angular.module("app.home").controller("HomeCtrl", HomeCtrl);
  function HomeCtrl($scope, $rootScope, $mdSidenav, $mdMedia, $state, $location, $window, $anchorScroll, $timeout, aGames, message) {
    let vm = this;
    vm.aGames = aGames.data;
    vm.$mdMedia = $mdMedia;
    if ($location.host() === "41592.net" || $location.host() === "www.41592.net") {
      $state.go("app.wiki.Main_Page");
    }
    vm.gotoTraditional = gotoTraditional;
    vm.gotoLegendary = gotoLegendary;
    vm.gotoSaba = gotoSaba;
    vm.gotoCasino = gotoCasino;
    vm.toggleSidenav = toggleSidenav;
    vm.thisYear = moment().format("YYYY");
    angular.element(document.querySelector("#home")).bind("scroll", function () {
      vm.offsetToTop = document.querySelector("#home").scrollTop > 30;
      $scope.$digest();
    });
    function toggleSidenav(sidenavId) {
      $mdSidenav(sidenavId).toggle();
    }
    function gotoTraditional() {
      $state.go("app.traditional.northern.jackpot");
    }
    function gotoCasino() {
      $state.go("app.casino");
    }
    function gotoLegendary() {}
    function gotoSaba() {
      $state.go("app.saba");
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.auth").controller("authCtrl", authCtrl);
  function authCtrl($scope, $state, $mdSidenav, $mdMedia, $location, network, message) {
    let vm = this;
    vm.showPassword = showPassword;
    vm.show = false;
    vm.showText = "SHOW";
    vm.login = login;
    function showPassword() {
      vm.show = !vm.show;
      vm.showText = vm.show ? "HIDE" : "SHOW";
    }
    function login() {
      sessionStorage.removeItem("lastClick");
      vm.submitting = true;
      network.User.authenticate(vm.form).then(function (response) {
        vm.submitting = false;
        if (Object.keys(response).length === 0) {
          $state.go("app.auth.agreement");
        } else if (response.RequireAction === "NEW_PASSWORD_REQUIRED") {
          $state.go("app.auth.set-password");
        } else if (response.RequireAction === "SOFTWARE_TOKEN_MFA") {
          $state.go("app.auth.otp");
        }
        $scope.$digest();
      }).catch(function (error) {
        vm.submitting = false;
        if (error.code === "UserLambdaValidationException" || error.code === "UserBlockedException") {
          message.show("Tài khoản của quý khách đang tạm ngừng phục vụ");
        } else if (error.code === "NotAuthorizedException" || error.code === "UserNotFoundException") {
          message.show("Tên người dùng hoặc mật khẩu không chính xác");
        } else {
          message.show(error.message);
        }
      });
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.announcements", []).config(config);
  function config($stateProvider) {
    $stateProvider.state("app.announcements", {abstract: true, url: "/announcements"}).state("app.announcements.threads", {url: "/:filter", views: {"content@app": {templateUrl: "app/main/announcements/announcements.html", controller: "announcementsCtrl as vm"}, "menu-account@app": {templateUrl: "app/main/announcements/announcements.menu.html"}}, params: {type: {value: null, squash: true}}, bodyClass: "announcements"}).state("app.announcements.threads.thread", {url: "/:threadId", bodyClass: "announcements"});
  }
}());
(function () {
  "use strict";
  angular.module("app.announcements").controller("announcementsCtrl", announcementsCtrl);
  function announcementsCtrl($scope, $rootScope, $document, $mdDialog, $mdMedia, $mdSidenav, $state, $timeout, msApi, network) {
    var vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.loadAnnouncements = loadAnnouncements;
    vm.openThread = openThread;
    vm.closeThread = closeThread;
    vm.readDefaultThread = readDefaultThread;
    vm.currentFilter = {type: $state.params.type, filter: $state.params.filter};
    if ($state.params.filter === "normal") {
      vm.category = 1;
    } else if ($state.params.filter === "special") {
      vm.category = 2;
    } else if ($state.params.filter === "system") {
      vm.category = 0;
    } else if ($state.params.filter === "personal") {
      vm.category = 3;
    }
    vm.From = moment().subtract(1, "year");
    vm.To = moment().add(1, "day");
    vm.threads = [];
    vm.loadAnnouncements();
    function loadAnnouncements() {
      vm.loadingThreads = true;
      if ($rootScope.isAuthenticated) {
        let data = {From: moment(vm.From).format("YYYY-MM-DD"), To: moment(vm.To).format("YYYY-MM-DD"), Limit: 100, Category: vm.category, LastId: ""};
        network.Communication.Notification.getNotificationsByCategory(data).then(function (response) {
          vm.threads = response;
          $timeout(function () {
            vm.loadingThreads = false;
          }, 1e3);
          $scope.$digest();
          vm.readDefaultThread();
        });
      } else {
        network.Public.Communication.Notification.latest().then(function (response) {
          vm.threads = response.filter(function (category) {
            return category.Category === vm.category;
          });
          $timeout(function () {
            vm.loadingThreads = false;
          }, 1e3);
          $scope.$digest();
          vm.readDefaultThread();
        });
      }
    }
    function readDefaultThread() {
      if ($state.params.threadId) {
        for (var i = 0; i < vm.threads.length; i++) {
          if (vm.threads[i].Id === $state.params.threadId) {
            vm.openThread(vm.threads[i]);
            break;
          }
        }
      }
    }
    function openThread(thread) {
      network.Communication.Notification.read({Id: thread.Id}).then(function (response) {
        thread.Read = true;
        $scope.$digest();
      });
      vm.currentThread = thread;
      $state.go("app.announcements.threads.thread", {threadId: thread.Id}, {notify: false});
    }
    function closeThread() {
      vm.currentThread = null;
      $state.go("app.announcements.threads", {type: vm.currentFilter.type, filter: vm.currentFilter.filter}, {notify: false});
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("myAccountCtrl", myAccountCtrl);
  function myAccountCtrl($scope, $rootScope, $timeout, $state, network, message) {
    $scope.$on("$viewContentAnimationEnded", function (event) {
      if (event.targetScope.$id === $scope.$id) {
        $rootScope.$broadcast("msSplashScreen::remove");
      }
    });
    $scope.$on("$stateChangeSuccess", function () {
      $timeout(function () {
        if ($rootScope.User === undefined) {
          $state.go("app.home");
        }
      }, 1e3);
    });
    if ($rootScope.currentTerm === undefined) {
      Lotus.Lottery.Term.current().then(function (resp) {
        $rootScope.currentTerm = resp;
        $rootScope.termName = resp[0].Term;
        network.Games.GameSetting.getGameSettings().then(function (settings) {
          settings.sort(function (a, b) {
            return a.GameType - b.GameType || a.BetType - b.BetType;
          });
          $timeout(function () {
            network.Games.GameSetting.getGamePayouts().then(function (payouts) {
              payouts.sort(function (a, b) {
                return a.GameType - b.GameType || a.BetType - b.BetType;
              });
              $rootScope.myParameters = [];
              angular.forEach(settings, function (item, i) {
                $rootScope.myParameters.push(Object.assign({}, item, payouts[i]));
              });
            });
          }, 100);
        });
      }).catch(function (error) {
        message.show(error.message);
      });
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.core").service("fuseTheming", fuseThemingService);
  function fuseThemingService($cookies, $log, $mdTheming) {
    var service = {getRegisteredPalettes: getRegisteredPalettes, getRegisteredThemes: getRegisteredThemes, setActiveTheme: setActiveTheme, setThemesList: setThemesList, themes: {list: {}, active: {name: "", theme: {}}}};
    return service;
    function getRegisteredPalettes() {
      return $mdTheming.PALETTES;
    }
    function getRegisteredThemes() {
      return $mdTheming.THEMES;
    }
    function setActiveTheme(themeName) {
      if (angular.isUndefined(service.themes.list[themeName])) {
        if (angular.isUndefined(service.themes.list.default)) {
          $log.error('You must have at least one theme named "default"');
          return;
        }
        $log.warn('The theme "' + themeName + '" does not exist! Falling back to the "default" theme.');
        service.themes.active.name = "default";
        service.themes.active.theme = service.themes.list.default;
        $cookies.put("selectedTheme", service.themes.active.name);
        return;
      }
      service.themes.active.name = themeName;
      service.themes.active.theme = service.themes.list[themeName];
      $cookies.put("selectedTheme", themeName);
    }
    function setThemesList(themeList) {
      service.themes.list = themeList;
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.core").config(config);
  function config($mdThemingProvider, fusePalettes, fuseThemes) {
    var $cookies;
    angular.injector(["ngCookies"]).invoke(["$cookies", function (_$cookies) {
      $cookies = _$cookies;
    }]);
    var customTheme = $cookies.getObject("customTheme");
    if (customTheme) {
      fuseThemes.custom = customTheme;
    }
    $mdThemingProvider.alwaysWatchTheme(true);
    angular.forEach(fusePalettes, function (palette) {
      $mdThemingProvider.definePalette(palette.name, palette.options);
    });
    angular.forEach(fuseThemes, function (theme, themeName) {
      $mdThemingProvider.theme(themeName).primaryPalette(theme.primary.name, theme.primary.hues).accentPalette(theme.accent.name, theme.accent.hues).warnPalette(theme.warn.name, theme.warn.hues).backgroundPalette(theme.background.name, theme.background.hues);
    });
  }
}());
(function () {
  "use strict";
  let fuseThemes = {default: {primary: {name: "fuse-paleblue", hues: {default: "700", "hue-1": "500", "hue-2": "600", "hue-3": "400"}}, accent: {name: "light-blue", hues: {default: "600", "hue-1": "400", "hue-2": "700", "hue-3": "A100"}}, warn: {name: "red"}, background: {name: "grey", hues: {default: "A100", "hue-1": "A100", "hue-2": "100", "hue-3": "300"}}}, pinkTheme: {primary: {name: "blue-grey", hues: {default: "800", "hue-1": "600", "hue-2": "400", "hue-3": "A100"}}, accent: {name: "pink", hues: {default: "400", "hue-1": "300", "hue-2": "600", "hue-3": "A100"}}, warn: {name: "blue"}, background: {name: "grey", hues: {default: "A100", "hue-1": "A100", "hue-2": "100", "hue-3": "300"}}}, tealTheme: {primary: {name: "fuse-blue", hues: {default: "50", "hue-1": "600", "hue-2": "500", "hue-3": "A100"}}, accent: {name: "teal", hues: {default: "500", "hue-1": "600", "hue-2": "700", "hue-3": "A100"}}, warn: {name: "deep-orange"}, background: {name: "grey", hues: {default: "A100", "hue-1": "A100", "hue-2": "100", "hue-3": "300"}}}};
  angular.module("app.core").constant("fuseThemes", fuseThemes);
}());
(function () {
  "use strict";
  var fusePalettes = [{name: "fuse-blue", options: {50: "#f2f5f9", 100: "#c2d4ef", 200: "#9ab8e5", 300: "#78a0dc", 400: "#5688d3", 500: "#3470ca", 600: "#2e62b1", 700: "#275498", 800: "#21467e", 900: "#1a3865", A100: "#c2d4ef", A200: "#9ab8e5", A400: "#5688d3", A700: "#275498", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 A100", contrastStrongLightColors: "300 400"}}, {name: "fuse-paleblue", options: {50: "#ececee", 100: "#c5c6cb", 200: "#9ea1a9", 300: "#7d818c", 400: "#5c616f", 500: "#3c4252", 600: "#353a48", 700: "#1e293b", 800: "#262933", 900: "#1e2129", A100: "#c5c6cb", A200: "#9ea1a9", A400: "#5c616f", A700: "#1e293b", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 A100", contrastStrongLightColors: "300 400"}}];
  angular.module("app.core").constant("fusePalettes", fusePalettes);
}());
(function () {
  "use strict";
  angular.module("app.core").factory("fuseGenerator", fuseGeneratorService);
  function fuseGeneratorService($cookies, $log, fuseTheming) {
    var themes = {};
    var service = {generate: generate, rgba: rgba};
    return service;
    function generate() {
      var registeredThemes = angular.copy(fuseTheming.getRegisteredThemes());
      var registeredPalettes = angular.copy(fuseTheming.getRegisteredPalettes());
      angular.forEach(registeredThemes, function (registeredTheme) {
        themes[registeredTheme.name] = {};
        angular.forEach(registeredTheme.colors, function (colorType, colorTypeName) {
          themes[registeredTheme.name][colorTypeName] = {name: colorType.name, levels: {default: {color: rgba(registeredPalettes[colorType.name][colorType.hues.default].value), contrast1: rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 1), contrast2: rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 2), contrast3: rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 3), contrast4: rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 4)}, hue1: {color: rgba(registeredPalettes[colorType.name][colorType.hues["hue-1"]].value), contrast1: rgba(registeredPalettes[colorType.name][colorType.hues["hue-1"]].contrast, 1), contrast2: rgba(registeredPalettes[colorType.name][colorType.hues["hue-1"]].contrast, 2), contrast3: rgba(registeredPalettes[colorType.name][colorType.hues["hue-1"]].contrast, 3), contrast4: rgba(registeredPalettes[colorType.name][colorType.hues["hue-1"]].contrast, 4)}, hue2: {color: rgba(registeredPalettes[colorType.name][colorType.hues["hue-2"]].value), contrast1: rgba(registeredPalettes[colorType.name][colorType.hues["hue-2"]].contrast, 1), contrast2: rgba(registeredPalettes[colorType.name][colorType.hues["hue-2"]].contrast, 2), contrast3: rgba(registeredPalettes[colorType.name][colorType.hues["hue-2"]].contrast, 3), contrast4: rgba(registeredPalettes[colorType.name][colorType.hues["hue-2"]].contrast, 4)}, hue3: {color: rgba(registeredPalettes[colorType.name][colorType.hues["hue-3"]].value), contrast1: rgba(registeredPalettes[colorType.name][colorType.hues["hue-3"]].contrast, 1), contrast2: rgba(registeredPalettes[colorType.name][colorType.hues["hue-3"]].contrast, 2), contrast3: rgba(registeredPalettes[colorType.name][colorType.hues["hue-3"]].contrast, 3), contrast4: rgba(registeredPalettes[colorType.name][colorType.hues["hue-3"]].contrast, 4)}}};
        });
      });
      processAndStoreThemes(themes);
      var styleVars = {};
      angular.forEach(themes, function (theme, themeName) {
        styleVars = {};
        styleVars["@themeName"] = themeName;
        angular.forEach(theme, function (colorTypes, colorTypeName) {
          angular.forEach(colorTypes.levels, function (colors, colorLevelName) {
            angular.forEach(colors, function (color, colorName) {
              styleVars["@" + colorTypeName + (colorLevelName.charAt(0).toUpperCase() + colorLevelName.slice(1)) + (colorName.charAt(0).toUpperCase() + colorName.slice(1))] = color;
            });
          });
        });
        render(styleVars);
      });
    }
    function processAndStoreThemes(_themes) {
      var themes = angular.copy(_themes);
      angular.forEach(themes, function (theme) {
        angular.forEach(theme, function (colorType, colorTypeName) {
          theme[colorTypeName] = colorType.levels;
          theme[colorTypeName].color = colorType.levels.default.color;
          theme[colorTypeName].contrast1 = colorType.levels.default.contrast1;
          theme[colorTypeName].contrast2 = colorType.levels.default.contrast2;
          theme[colorTypeName].contrast3 = colorType.levels.default.contrast3;
          theme[colorTypeName].contrast4 = colorType.levels.default.contrast4;
          delete theme[colorTypeName].default;
        });
      });
      fuseTheming.setThemesList(themes);
      var selectedTheme = $cookies.get("selectedTheme");
      if (selectedTheme) {
        fuseTheming.setActiveTheme(selectedTheme);
      } else {
        fuseTheming.setActiveTheme("default");
      }
    }
    function render(styleVars) {
      let cssTemplate = '/* Content hack because they wont fix */\n/* https://github.com/angular/material/pull/8067 */\n[md-theme="@themeName"] md-content,\nmd-content.md-@themeName-theme {\n    color: @backgroundHue1Contrast1;\n    background-color: transparent !important;\n}\n\n[md-theme="@themeName"] md-content.md-hue-1,\nmd-content.md-@themeName-theme.md-hue-1 {\n    color: @backgroundHue1Contrast1;\n    background-color: @backgroundHue1Color;\n}\n\n[md-theme="@themeName"] md-content.md-hue-2,\nmd-content.md-@themeName-theme.md-hue-2 {\n    color: @backgroundHue2Contrast1;\n    background-color: @backgroundHue2Color;\n}\n\n[md-theme="@themeName"] md-content.md-hue-3,\n md-content.md-@themeName-theme.md-hue-3 {\n    color: @backgroundHue3Contrast1;\n    background-color: @backgroundHue3Color;\n}\n\n/* Text Colors */\n[md-theme="@themeName"] a {\n    color: @primaryDefaultContrast1;\n}\n\n[md-theme="@themeName"] .primary {\n    color: @primaryDefaultContrast2;\n}\n\n[md-theme="@themeName"] .secondary-text,\n[md-theme="@themeName"] .icon {\n    color: @backgroundDefaultContrast2;\n}\n\n[md-theme="@themeName"] .hint-text,\n[md-theme="@themeName"] .disabled-text {\n    color: @backgroundDefaultContrast3;\n}\n\n[md-theme="@themeName"] .fade-text,\n[md-theme="@themeName"] .divider {\n    color: @backgroundDefaultContrast4;\n}\n\n/* Primary */\n[md-theme="@themeName"] .md-primary-bg {\n    background-color: @primaryDefaultColor;\n    color: @primaryDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg .secondary-text,\n[md-theme="@themeName"] .md-primary-bg .icon {\n    color: @primaryDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg .hint-text,\n[md-theme="@themeName"] .md-primary-bg .disabled-text {\n    color: @primaryDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg .fade-text,\n[md-theme="@themeName"] .md-primary-bg .divider {\n    color: @primaryDefaultContrast4;\n}\n\n/* Primary, Hue-1 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 {\n    background-color: @primaryHue1Color;\n    color: @primaryHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .icon {\n    color: @primaryHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .disabled-text {\n    color: @primaryHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .divider {\n    color: @primaryHue1Contrast4;\n}\n\n/* Primary, Hue-2 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 {\n    background-color: @primaryHue2Color;\n    color: @primaryHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .icon {\n    color: @primaryHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .disabled-text {\n    color: @primaryHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .divider {\n    color: @primaryHue2Contrast4;\n}\n\n/* Primary, Hue-3 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 {\n    background-color: @primaryHue3Color;\n    color: @primaryHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .icon {\n    color: @primaryHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .disabled-text {\n    color: @primaryHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .divider {\n    color: @primaryHue3Contrast4;\n}\n\n/* Primary foreground */\n[md-theme="@themeName"] .md-primary-fg {\n    color: @primaryDefaultColor !important;\n}\n\n/* Primary foreground, Hue-1 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-1 {\n    color: @primaryHue1Color !important;\n}\n\n/* Primary foreground, Hue-2 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-2 {\n    color: @primaryHue2Color !important;\n}\n\n/* Primary foreground, Hue-3 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-3 {\n    color: @primaryHue3Color !important;\n}\n\n/* Accent */\n[md-theme="@themeName"] .md-accent-bg {\n    background-color: @accentDefaultColor;\n    color: @accentDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg .secondary-text,\n[md-theme="@themeName"] .md-accent-bg .icon {\n    color: @accentDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg .hint-text,\n[md-theme="@themeName"] .md-accent-bg .disabled-text {\n    color: @accentDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg .fade-text,\n[md-theme="@themeName"] .md-accent-bg .divider {\n    color: @accentDefaultContrast4;\n}\n\n/* Accent, Hue-1 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 {\n    background-color: @accentHue1Color;\n    color: @accentHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .icon {\n    color: @accentHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .disabled-text {\n    color: @accentHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .divider {\n    color: @accentHue1Contrast4;\n}\n\n/* Accent, Hue-2 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 {\n    background-color: @accentHue2Color;\n    color: @accentHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .icon {\n    color: @accentHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .disabled-text {\n    color: @accentHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .divider {\n    color: @accentHue2Contrast4;\n}\n\n/* Accent, Hue-3 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 {\n    background-color: @accentHue3Color;\n    color: @accentHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .icon {\n    color: @accentHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .disabled-text {\n    color: @accentHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .divider {\n    color: @accentHue3Contrast4;\n}\n\n/* Accent foreground */\n[md-theme="@themeName"] .md-accent-fg {\n    color: @accentDefaultColor !important;\n}\n\n/* Accent foreground, Hue-1 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-1 {\n    color: @accentHue1Color !important;\n}\n\n/* Accent foreground, Hue-2 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-2 {\n    color: @accentHue2Color !important;\n}\n\n/* Accent foreground, Hue-3 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-3 {\n    color: @accentHue3Color !important;\n}\n\n/* Warn */\n[md-theme="@themeName"] .md-warn-bg {\n    background-color: @warnDefaultColor;\n    color: @warnDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg .secondary-text,\n[md-theme="@themeName"] .md-warn-bg .icon {\n    color: @warnDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg .hint-text,\n[md-theme="@themeName"] .md-warn-bg .disabled-text {\n    color: @warnDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg .fade-text,\n[md-theme="@themeName"] .md-warn-bg .divider {\n    color: @warnDefaultContrast4;\n}\n\n/* Warn, Hue-1 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 {\n    background-color: @warnHue1Color;\n    color: @warnHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .icon {\n    color: @warnHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .disabled-text {\n    color: @warnHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .divider {\n    color: @warnHue1Contrast4;\n}\n\n/* Warn, Hue-2 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 {\n    background-color: @warnHue2Color;\n    color: @warnHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .icon {\n    color: @warnHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .disabled-text {\n    color: @warnHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .divider {\n    color: @warnHue2Contrast4;\n}\n\n/* Warn, Hue-3 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 {\n    background-color: @warnHue3Color;\n    color: @warnHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .icon {\n    color: @warnHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .disabled-text {\n    color: @warnHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .divider {\n    color: @warnHue3Contrast4;\n}\n\n/* Warn foreground */\n[md-theme="@themeName"] .md-warn-fg {\n    color: @warnDefaultColor !important;\n}\n\n/* Warn foreground, Hue-1 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-1 {\n    color: @warnHue1Color !important;\n}\n\n/* Warn foreground, Hue-2 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-2 {\n    color: @warnHue2Color !important;\n}\n\n/* Warn foreground, Hue-3 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-3 {\n    color: @warnHue3Color !important;\n}\n\n/* Background */\n[md-theme="@themeName"] .md-background-bg {\n    background-color: @backgroundDefaultColor;\n    color: @backgroundDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg .secondary-text,\n[md-theme="@themeName"] .md-background-bg .icon {\n    color: @backgroundDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg .hint-text,\n[md-theme="@themeName"] .md-background-bg .disabled-text {\n    color: @backgroundDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg .fade-text,\n[md-theme="@themeName"] .md-background-bg .divider {\n    color: @backgroundDefaultContrast4;\n}\n\n/* Background, Hue-1 */\n[md-theme="@themeName"] .md-background-bg.md-hue-1 {\n    background-color: @backgroundHue1Color;\n    color: @backgroundHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .icon {\n    color: @backgroundHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .disabled-text {\n    color: @backgroundHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .divider {\n    color: @backgroundHue1Contrast4;\n}\n\n/* Background, Hue-2 */\n[md-theme="@themeName"] .md-background-bg.md-hue-2 {\n    background-color: @backgroundHue2Color;\n    color: @backgroundHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .icon {\n    color: @backgroundHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .disabled-text {\n    color: @backgroundHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .divider {\n    color: @backgroundHue2Contrast4;\n}\n\n/* Background, Hue-3 */\n[md-theme="@themeName"] .md-background-bg.md-hue-3 {\n    background-color: @backgroundHue3Color;\n    color: @backgroundHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .icon {\n    color: @backgroundHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .disabled-text {\n    color: @backgroundHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .divider {\n    color: @backgroundHue3Contrast4;\n}\n\n/* Background foreground */\n[md-theme="@themeName"] .md-background-fg {\n    color: @backgroundDefaultColor !important;\n}\n\n/* Background foreground, Hue-1 */\n[md-theme="@themeName"] .md-background-fg.md-hue-1 {\n    color: @backgroundHue1Color !important;\n}\n\n/* Background foreground, Hue-2 */\n[md-theme="@themeName"] .md-background-fg.md-hue-2 {\n    color: @backgroundHue2Color !important;\n}\n\n/* Background foreground, Hue-3 */\n[md-theme="@themeName"] .md-background-fg.md-hue-3 {\n    color: @backgroundHue3Color !important;\n}';
      var regex = new RegExp(Object.keys(styleVars).join("|"), "gi");
      var css = cssTemplate.replace(regex, function (matched) {
        return styleVars[matched];
      });
      var headEl = angular.element("head");
      var styleEl = angular.element('<style type="text/css"></style>');
      styleEl.html(css);
      headEl.append(styleEl);
    }
    function rgba(color, _contrastLevel) {
      var contrastLevel = _contrastLevel || false;
      if (color.length === 4 && color[0] === 255 && color[1] === 255 && color[2] === 255) {
        color.splice(3, 4);
      }
      if (contrastLevel) {
        color = applyContrast(color, contrastLevel);
      }
      if (color.length === 3) {
        return "rgb(" + color.join(",") + ")";
      } else if (color.length === 4) {
        return "rgba(" + color.join(",") + ")";
      } else {
        $log.error("Invalid number of arguments supplied in the color array: " + color.length + "\n" + "The array must have 3 or 4 colors.");
      }
    }
    function applyContrast(color, contrastLevel) {
      var contrastLevels = {white: {1: "1", 2: "0.8", 3: "0.3", 4: "0.12"}, black: {1: "0.9", 2: "0.7", 3: "0.26", 4: "0.12"}};
      if (color[0] === 255 && color[1] === 255 && color[2] === 255) {
        color[3] = contrastLevels.white[contrastLevel];
      } else if (color[0] === 0 && color[1] === 0 && color[2] === 0) {
        color[3] = contrastLevels.black[contrastLevel];
      }
      return color;
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.core").controller("MsThemeOptionsController", MsThemeOptionsController).directive("msThemeOptions", msThemeOptions);
  function MsThemeOptionsController($cookies, fuseTheming) {
    var vm = this;
    vm.themes = fuseTheming.themes;
    vm.layoutModes = [{label: "Boxed", value: "boxed"}, {label: "Wide", value: "wide"}];
    vm.layoutStyles = [{label: "Vertical Navigation", value: "verticalNavigation", figure: "/assets/images/theme-options/vertical-nav.jpg"}, {label: "Vertical Navigation with Fullwidth Toolbar", value: "verticalNavigationFullwidthToolbar", figure: "/assets/images/theme-options/vertical-nav-with-full-toolbar.jpg"}, {label: "Vertical Navigation with Fullwidth Toolbar 2", value: "verticalNavigationFullwidthToolbar2", figure: "/assets/images/theme-options/vertical-nav-with-full-toolbar-2.jpg"}, {label: "Horizontal Navigation", value: "horizontalNavigation", figure: "/assets/images/theme-options/horizontal-nav.jpg"}, {label: "Content with Toolbar", value: "contentWithToolbar", figure: "/assets/images/theme-options/content-with-toolbar.jpg"}, {label: "Content Only", value: "contentOnly", figure: "/assets/images/theme-options/content-only.jpg"}];
    vm.layoutMode = "wide";
    vm.layoutStyle = $cookies.get("layoutStyle") || "verticalNavigation";
    vm.setActiveTheme = setActiveTheme;
    vm.getActiveTheme = getActiveTheme;
    vm.updateLayoutMode = updateLayoutMode;
    vm.updateLayoutStyle = updateLayoutStyle;
    function setActiveTheme(themeName) {
      fuseTheming.setActiveTheme(themeName);
    }
    function getActiveTheme() {
      return fuseTheming.themes.active;
    }
    function updateLayoutMode() {
      var bodyEl = angular.element("body");
      bodyEl.toggleClass("boxed", vm.layoutMode === "boxed");
    }
    function updateLayoutStyle() {
      $cookies.put("layoutStyle", vm.layoutStyle);
      location.reload();
    }
  }
  function msThemeOptions($mdSidenav) {
    return {restrict: "E", scope: {}, controller: "MsThemeOptionsController as vm", templateUrl: "app/core/theme-options/theme-options.html", compile: function (tElement) {
      tElement.addClass("ms-theme-options");
      return function postLink(scope) {
        function toggleOptionsSidenav() {
          $mdSidenav("fuse-theme-options").toggle();
        }
        scope.toggleOptionsSidenav = toggleOptionsSidenav;
      };
    }};
  }
}());
(function () {
  "use strict";
  angular.module("app.core").service("network", function ($rootScope) {
    this.User = {authenticate: function (data) {
      return Lotus.User.authenticate(data).then(function (resp) {
        return resp;
      });
    }, me: function (data) {
      return Lotus.User.Current.profile(data).then(function (resp) {
        return resp;
      });
    }, changePassword: function (data) {
      return Lotus.User.Current.changePassword(data).then(function (resp) {
        return resp;
      });
    }, completeNewPassword: function (data) {
      return Lotus.User.completeNewPassword(data).then(function (resp) {
        return resp;
      });
    }, generateTOTPSecretCode: function () {
      return Lotus.User.Current.generateTOTPSecretCode().then(function (resp) {
        return resp;
      });
    }, enableMFA: function (data) {
      return Lotus.User.Current.enableMFA(data).then(function (resp) {
        return resp;
      });
    }, disableMFA: function (data) {
      return Lotus.User.Current.disableMFA(data).then(function (resp) {
        return resp;
      });
    }, confirmSignIn: function (data) {
      return Lotus.User.confirmSignIn(data).then(function (resp) {
        return resp;
      });
    }, Wallet: {getWallet: function () {
      return Lotus.User.Wallet.getWallet().then(function (response) {
        return response;
      });
    }}};
    this.Public = {Lottery: {getOdds: function (data) {
      return Lotus.Public.Lottery.Odds.getOdds(data).then(function (response) {
        return response;
      });
    }, getLoLiveOdds: function (data) {
      return Lotus.Public.Lottery.Odds.getLiveOdds(data).then(function (response) {
        return response;
      });
    }, LotteryResult: {getResultsByDate: function (data) {
      return Lotus.Public.Lottery.LotteryResult.getResultsByDate(data).then(function (response) {
        return response;
      });
    }}, LegendResult: {getResultsByDate: function (data) {
      return Lotus.Public.Lottery789.LotteryResult.getResultsByDate(data).then(function (response) {
        return response;
      });
    }}}, Legend: {getOdds: function (data) {
      return Lotus.Public.Lottery789.Odds.getOdds(data).then(function (response) {
        return response;
      });
    }, getLiveOdds: function (data) {
      return Lotus.Public.Lottery789.Odds.getLiveOdds(data).then(function (response) {
        return response;
      });
    }, LotteryResult: {getResultsByDate: function (data) {
      return Lotus.Public.Lottery789.LotteryResult.getResultsByDate(data).then(function (response) {
        return response;
      });
    }, getLatestResultByGameType: function (data) {
      return Lotus.Public.Lottery789.LotteryResult.getLatestResultByGameType(data).then(function (response) {
        return response;
      });
    }}}, Communication: {Notification: {latest: function () {
      return Lotus.Public.Communication.Notification.latest().then(function (response) {
        return response;
      });
    }}}};
    this.Communication = {Notification: {getNotificationsByCategory: function (data) {
      return Lotus.Communication.Notification.getNotificationsByCategory(data).then(function (response) {
        return response;
      });
    }, getNotificationsOnSection: function (data) {
      return Lotus.Communication.Notification.getNotificationsOnSection(data).then(function (response) {
        return response;
      });
    }, read: function (data) {
      return Lotus.Communication.Notification.read(data).then(function (response) {
        return response;
      });
    }}};
    this.Games = {GameSetting: {getGamePayouts: function () {
      return Lotus.Lottery.GameSetting.getGamePayouts().then(function (resp) {
        return resp;
      });
    }, getGameSettings: function () {
      return Lotus.Lottery.GameSetting.getGameSettings().then(function (resp) {
        return resp;
      });
    }}, getOdds: function (data) {
      if (data.Term === undefined) {
        data.Term = $rootScope.termName;
      }
      return Lotus.Lottery.Odds.getOdds(data).then(function (resp) {
        return resp;
      });
    }, getLoLiveOdds: function (data) {
      return Lotus.Lottery.Odds.getLiveOdds(data).then(function (resp) {
        return resp;
      });
    }, Play: function (data) {
      return Lotus.Lottery.GamePlay.play(data).then(function (resp) {
        return resp;
      });
    }, cancelTicket: function (data) {
      $rootScope.infoMessages = [];
      return Lotus.Lottery.GamePlay.cancelTicket(data).then(function (resp) {
        return resp;
      });
    }, checkTx: function (data) {
      return Lotus.Lottery.GamePlay.Ticket.checkTx(data).then(function (response) {
        return response;
      });
    }};
    this.Ticket = {Latest: function (data) {
      return Lotus.Lottery.GamePlay.Ticket.latest(data).then(function (result) {
        return result;
      });
    }, Current: function (data) {
      return Lotus.Lottery.GamePlay.Ticket.current(data).then(function (result) {
        return result;
      });
    }, TicketItem: function (data) {
      return Lotus.Lottery.GamePlay.TicketItem.getItemsByTicketNumbers(data).then(function (resp) {
        return resp;
      });
    }, getItemsByTerm: function (data) {
      return Lotus.Lottery.GamePlay.TicketItem.getItemsByTerm(data).then(function (resp) {
        return resp;
      });
    }};
    this.Report = {getReportByProductionDate: function (data) {
      return Lotus.Reporting.Statement.getReportByProductionDate(data).then(function (response) {
        return response;
      });
    }, getLatestReports: function () {
      return Lotus.Lottery.Report.getLatestReports().then(function (response) {
        return response;
      });
    }, getBetTypeReports: function (data) {
      return Lotus.Lottery.Report.Statement.getReportGroupByBetType(data).then(function (response) {
        return response;
      });
    }, getGameTypeReports: function (data) {
      return Lotus.Lottery.Report.Statement.getReportGroupByGameType(data).then(function (response) {
        return response;
      });
    }, getTicketItemsReports: function (data) {
      return Lotus.Lottery.Report.Statement.getTicketItems(data).then(function (response) {
        return response;
      });
    }, Legend: {getReportGroupByGameType: function (data) {
      return Lotus.Lottery789.Report.Statement.getReportGroupByGameType(data).then(function (response) {
        return response;
      });
    }, getReportGroupByTerm: function (data) {
      return Lotus.Lottery789.Report.Statement.getReportGroupByTerm(data).then(function (response) {
        return response;
      });
    }, getReportGroupByBetType: function (data) {
      return Lotus.Lottery789.Report.Statement.getReportGroupByBetType(data).then(function (response) {
        return response;
      });
    }, getTicketItems: function (data) {
      return Lotus.Lottery789.Report.Statement.getTicketItems(data).then(function (response) {
        return response;
      });
    }}, WMCasino: {getReportGroupByDate: function (data) {
      return Lotus.WMCasino.Report.getReportGroupByDate(data).then(function (response) {
        return response;
      });
    }, getReportGroupByGameType: function (data) {
      return Lotus.WMCasino.Report.Statement.getReportGroupByGameType(data).then(function (response) {
        return response;
      });
    }, getPlayerBetItems: function (data) {
      return Lotus.WMCasino.Report.Statement.getBetItems(data).then(function (response) {
        return response;
      });
    }}, LegendCasino: {getReportGroupByGameType: function (data) {
      return Lotus.SenCasino.Report.Statement.getReportGroupByGameType(data).then(function (response) {
        return response;
      });
    }, Sedie: {getPlayerBetItems: function (data) {
      return Lotus.SenCasino.Games.Sedie.Report.getBetItems(data).then(function (response) {
        return response;
      });
    }}}};
    this.Legend = {GameSetting: {getGamePayouts: function () {
      return Lotus.Lottery789.GameSetting.getGamePayouts().then(function (resp) {
        return resp;
      });
    }, getGameSettings: function () {
      return Lotus.Lottery789.GameSetting.getGameSettings().then(function (resp) {
        return resp;
      });
    }}, getOdds: function (data) {
      if (data.Term === undefined) {
        data.Term = $rootScope.termName;
      }
      return Lotus.Lottery789.Odds.getOdds(data).then(function (resp) {
        return resp;
      });
    }, getLiveOdds: function (data) {
      return Lotus.Lottery789.Odds.getLiveOdds(data).then(function (resp) {
        return resp;
      });
    }, Play: function (data) {
      return Lotus.Lottery789.GamePlay.play(data).then(function (resp) {
        return resp;
      });
    }, checkTx: function (data) {
      return Lotus.Lottery789.GamePlay.Ticket.checkTx(data).then(function (response) {
        return response;
      });
    }, Ticket: {Latest: function (data) {
      return Lotus.Lottery789.GamePlay.Ticket.latest(data).then(function (result) {
        return result;
      });
    }, Current: function (data) {
      return Lotus.Lottery789.GamePlay.Ticket.current(data).then(function (result) {
        return result;
      });
    }, TicketItem: function (data) {
      return Lotus.Lottery789.GamePlay.TicketItem.getItemsByTicketNumbers(data).then(function (resp) {
        return resp;
      });
    }, getItemsByTerm: function (data) {
      return Lotus.Lottery789.GamePlay.TicketItem.getItemsByTerm(data).then(function (resp) {
        return resp;
      });
    }}};
  });
}());
Array.prototype.groupBy = function (hash) {
  var _hash = hash ? hash : function (o) {
    return o;
  };
  var _map = {};
  var put = function (map, key, value) {
    if (!map[_hash(key)]) {
      map[_hash(key)] = {};
      map[_hash(key)].group = [];
      map[_hash(key)].key = key;
    }
    map[_hash(key)].group.push(value);
  };
  this.map(function (obj) {
    put(_map, obj, obj);
  });
  return Object.keys(_map).map(function (key) {
    return {group: _map[key].group};
  });
};
(function () {
  "use strict";
  angular.module("app.core").factory("msUtils", msUtils);
  function msUtils($window) {
    let mobileDetect = new MobileDetect($window.navigator.userAgent), browserInfo = null;
    let service = {exists: exists, detectBrowser: detectBrowser, guidGenerator: guidGenerator, isMobile: isMobile, toggleInArray: toggleInArray, generateRandomId: generateRandomId, permNumber: permNumber, groupBy: groupBy, removeDuplicates: removeDuplicates, removeDup: removeDup, containsAll: containsAll, pad: pad, generatorNumber: generatorNumber, generatorMatrix: generatorMatrix, generatorSouthMatrix: generatorSouthMatrix};
    return service;
    function containsAll(needles, haystack) {
      for (let i = 0; i < needles.length; i++) {
        if (haystack.indexOf(needles[i]) === -1) return false;
      }
      return true;
    }
    function pad(n, width, z) {
      z = z || "0";
      n = n + "";
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    function removeDuplicates(originalArray, param) {
      return originalArray.filter(function (item, pos, array) {
        return array.map(function (mapItem) {
          return mapItem[param];
        }).indexOf(item[param]) === pos;
      });
    }
    function removeDup(names) {
      let unique = {};
      names.forEach(function (i) {
        if (!unique[i]) {
          unique[i] = true;
        }
      });
      return Object.keys(unique);
    }
    function permNumber(input) {
      function permutations(data) {
        data = data.slice();
        let reputation = [], shock = [];
        function Perm() {
          if (data.length === 0) {
            reputation.push(shock.slice());
          }
          for (let i = 0; i < data.length; i++) {
            let x = data.splice(i, 1);
            shock.push(x);
            Perm();
            shock.pop();
            data.splice(i, 0, x);
          }
        }
        Perm();
        return reputation;
      }
      input = input.split("");
      let result = permutations(input);
      for (let i = 0; i < result.length; i++) {
        result[i] = result[i].join("");
      }
      return result.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
    }
    function generateRandomId() {
      let charSet = "0123456789";
      let id = "";
      for (let i = 1; i <= 18; i++) {
        let randPos = Math.floor(Math.random() * 10);
        id += charSet[randPos];
      }
      return id;
    }
    function groupBy(array, f) {
      let groups = {};
      array.forEach(function (o) {
        let group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return Object.keys(groups).map(function (group) {
        return groups[group];
      });
    }
    function generatorNumber(length) {
      let result = "";
      let characters = "0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    function generatorMatrix(arr) {
      let matrix = {};
      for (let i = 0; i < 10; i++) {
        matrix[i] = [];
      }
      Object.keys(arr).forEach(function (key) {
        if (["Jackpot", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"].indexOf(key) > -1) {
          if (arr[key] !== undefined) {
            appendObject(arr[key], key === "Jackpot");
          }
        }
      });
      function appendObject(numbers, cond) {
        if (!Array.isArray(numbers)) {
          appendNumber(numbers, cond);
        } else {
          for (let i = 0; i < numbers.length; i++) {
            appendNumber(numbers[i]);
          }
        }
      }
      function appendNumber(number, cond) {
        let last2 = number.slice(-2);
        if (last2.length === 2) {
          if (cond) {
            matrix[last2.split("")[0]].push({value: last2.split("")[1], jack: true});
          } else {
            matrix[last2.split("")[0]].push({value: last2.split("")[1]});
          }
        }
      }
      Object.keys(matrix).forEach(function (key) {
        matrix[key] = matrix[key].sort(function (a, b) {
          return a.value - b.value;
        });
      });
      return matrix;
    }
    function generatorSouthMatrix(arr) {
      let matrix = {};
      for (let i = 0; i < 10; i++) {
        matrix[i] = {1: [], 2: [], 3: []};
      }
      for (let j = 0; j < arr.length; j++) {
        Object.keys(arr[j]).forEach(function (key) {
          if (["Jackpot", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"].indexOf(key) > -1) {
            if (arr[j][key] !== undefined) {
              appendObject(arr[j][key], key === "Jackpot", arr[j].Type);
            }
          }
        });
      }
      function appendObject(numbers, cond, Type) {
        if (!Array.isArray(numbers)) {
          appendNumber(numbers, Type, cond);
        } else {
          for (let i = 0; i < numbers.length; i++) {
            appendNumber(numbers[i], Type);
          }
        }
      }
      function appendNumber(number, Type, cond) {
        let last2 = number.slice(-2);
        if (cond) {
          matrix[last2.split("")[0]][Type].push({value: last2.split("")[1], jack: true});
        } else {
          matrix[last2.split("")[0]][Type].push({value: last2.split("")[1]});
        }
      }
      return matrix;
    }
    function detectBrowser() {
      if (browserInfo) {
        return browserInfo;
      }
      let browserData = [{string: $window.navigator.userAgent, subString: "Edge", versionSearch: "Edge", identity: "Edge"}, {string: $window.navigator.userAgent, subString: "Chrome", identity: "Chrome"}, {string: $window.navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"}, {string: $window.navigator.vendor, subString: "Apple", versionSearch: "Version", identity: "Safari"}, {prop: $window.opera, identity: "Opera"}, {string: $window.navigator.vendor, subString: "iCab", identity: "iCab"}, {string: $window.navigator.vendor, subString: "KDE", identity: "Konqueror"}, {string: $window.navigator.userAgent, subString: "Firefox", identity: "Firefox"}, {string: $window.navigator.vendor, subString: "Camino", identity: "Camino"}, {string: $window.navigator.userAgent, subString: "Netscape", identity: "Netscape"}, {string: $window.navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE"}, {string: $window.navigator.userAgent, subString: "Trident/7", identity: "Explorer", versionSearch: "rv"}, {string: $window.navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"}, {string: $window.navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"}];
      let osData = [{string: $window.navigator.platform, subString: "Win", identity: "Windows"}, {string: $window.navigator.platform, subString: "Mac", identity: "Mac"}, {string: $window.navigator.platform, subString: "Linux", identity: "Linux"}, {string: $window.navigator.platform, subString: "iPhone", identity: "iPhone"}, {string: $window.navigator.platform, subString: "iPod", identity: "iPod"}, {string: $window.navigator.platform, subString: "iPad", identity: "iPad"}, {string: $window.navigator.platform, subString: "Android", identity: "Android"}];
      let versionSearchString = "";
      function searchString(data) {
        for (let i = 0; i < data.length; i++) {
          let dataString = data[i].string;
          let dataProp = data[i].prop;
          versionSearchString = data[i].versionSearch || data[i].identity;
          if (dataString) {
            if (dataString.indexOf(data[i].subString) !== -1) {
              return data[i].identity;
            }
          } else if (dataProp) {
            return data[i].identity;
          }
        }
      }
      function searchVersion(dataString) {
        let index = dataString.indexOf(versionSearchString);
        if (index === -1) {
          return;
        }
        return parseInt(dataString.substring(index + versionSearchString.length + 1));
      }
      let browser = searchString(browserData) || "unknown-browser";
      let version = searchVersion($window.navigator.userAgent) || searchVersion($window.navigator.appVersion) || "unknown-version";
      let os = searchString(osData) || "unknown-os";
      browser = browser.toLowerCase();
      version = browser + "-" + version;
      os = os.toLowerCase();
      browserInfo = {browser: browser, version: version, os: os};
      return browserInfo;
    }
    function guidGenerator() {
      return ((1 + Math.random()) * 65536 || 0).toString(16).substring(1) + ((1 + Math.random()) * 65536 || 0).toString(16).substring(1) + ((1 + Math.random()) * 65536 || 0).toString(16).substring(1) + ((1 + Math.random()) * 65536 || 0).toString(16).substring(1) + ((1 + Math.random()) * 65536 || 0).toString(16).substring(1) + ((1 + Math.random()) * 65536 || 0).toString(16).substring(1);
    }
    function toggleInArray(item, array) {
      if (array.indexOf(item) === -1) {
        array.push(item);
      } else {
        array.splice(array.indexOf(item), 1);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.core").provider("msApi", msApiProvider);
  function msApiProvider() {
    var provider = this;
    var $log = angular.injector(["ng"]).get("$log");
    var baseUrl = "";
    var api = [];
    provider.setBaseUrl = setBaseUrl;
    provider.getBaseUrl = getBaseUrl;
    provider.getApiObject = getApiObject;
    provider.register = register;
    function setBaseUrl(url) {
      baseUrl = url;
    }
    function register(key, resource) {
      if (!angular.isString(key)) {
        $log.error('"path" must be a string (eg. `dashboard.project`)');
        return;
      }
      if (!angular.isArray(resource)) {
        $log.error('"resource" must be an array and it must follow $resource definition');
        return;
      }
      api[key] = {url: baseUrl + (resource[0] || ""), paramDefaults: resource[1] || [], actions: resource[2] || [], options: resource[3] || {}};
    }
    this.$get = function ($log, $q, $resource, $rootScope) {
      var service = {setBaseUrl: setBaseUrl, getBaseUrl: getBaseUrl, register: register, resolve: resolve, request: request};
      return service;
      function resolve(action, parameters) {
        $rootScope.$broadcast("msApi::resolveStart");
        var actionParts = action.split("@"), resource = actionParts[0], method = actionParts[1], params = parameters || {};
        if (!resource || !method) {
          $log.error("msApi.resolve requires correct action parameter (resourceName@methodName)");
          return false;
        }
        var deferred = $q.defer();
        var apiObject = api[resource];
        if (!apiObject) {
          $log.error('Resource "' + resource + '" is not defined in the api service!');
          deferred.reject('Resource "' + resource + '" is not defined in the api service!');
        } else {
          var resourceObject = $resource(apiObject.url, apiObject.paramDefaults, apiObject.actions, apiObject.options);
          resourceObject[method](params, function (response) {
            deferred.resolve(response);
            $rootScope.$broadcast("msApi::resolveSuccess");
          }, function (response) {
            deferred.reject(response);
            $rootScope.$broadcast("msApi::resolveError");
          });
        }
        return deferred.promise;
      }
      function request(action, parameters, success, error) {
        $rootScope.$broadcast("msApi::requestStart");
        var actionParts = action.split("@"), resource = actionParts[0], method = actionParts[1], params = parameters || {};
        if (!resource || !method) {
          $log.error("msApi.resolve requires correct action parameter (resourceName@methodName)");
          return false;
        }
        var deferred = $q.defer();
        var apiObject = api[resource];
        if (!apiObject) {
          $log.error('Resource "' + resource + '" is not defined in the api service!');
          deferred.reject('Resource "' + resource + '" is not defined in the api service!');
        } else {
          var resourceObject = $resource(apiObject.url, apiObject.paramDefaults, apiObject.actions, apiObject.options);
          resourceObject[method](params, function (response) {
            $rootScope.$broadcast("msApi::requestSuccess");
            deferred.resolve(response);
            if (angular.isDefined(success) && angular.isFunction(success)) {
              success(response);
            }
          }, function (response) {
            $rootScope.$broadcast("msApi::requestError");
            deferred.reject(response);
            if (angular.isDefined(error) && angular.isFunction(error)) {
              error(response);
            }
          });
        }
        return deferred.promise;
      }
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.core").service("message", function ($mdDialog, $mdToast) {
    this.show = function (msg) {
      $mdDialog.show({parent: angular.element(document.body), template: '<md-dialog class="message md-primary-bg" aria-label="message dialog">  <md-dialog-content style="min-width: 400px">   <div class="md-dialog-content">       <p class="text-center">' + msg + "</p>" + "   </div>" + "</md-dialog-content>" + "  <md-dialog-actions>" + '    <md-button ng-click="closeDialog()" class="md-warn">OK</md-button>' + "  </md-dialog-actions>" + "</md-dialog>", controller: function dialogCtrl($scope) {
        $scope.closeDialog = function () {
          $mdDialog.hide();
        };
      }});
    };
    this.infoMultiple = function (msg) {
      $mdDialog.show($mdDialog.alert().clickOutsideToClose(true).multiple(true).parent(angular.element(document.body)).textContent(msg).ariaLabel("Alert Dialog").ok("OK"));
    };
    this.popup = function (msg) {
      $mdDialog.show({controller: popupDialogCtrl, templateUrl: "app/main/announcements/views/dialog.html", locals: {msg: msg}});
      function popupDialogCtrl($scope, $mdDialog, msg) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        function htmlDecode(input) {
          let e = document.createElement("textarea");
          e.innerHTML = input;
          return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }
        $scope.message = htmlDecode(msg);
      }
    };
    this.toast = function (msg) {
      $mdToast.show($mdToast.simple().textContent(msg).position("bottom right").hideDelay(3e3));
    };
  });
}());
(function () {
  "use strict";
  angular.module("app.core").factory("apiResolver", apiResolverService);
  function apiResolverService($q, $log, api) {
    var service = {resolve: resolve};
    return service;
    function resolve(action, parameters) {
      var actionParts = action.split("@"), resource = actionParts[0], method = actionParts[1], params = parameters || {};
      if (!resource || !method) {
        $log.error("apiResolver.resolve requires correct action parameter (ResourceName@methodName)");
        return false;
      }
      var deferred = $q.defer();
      var apiObject = getApiObject(resource);
      if (!apiObject) {
        $log.error('Resource "' + resource + '" is not defined in the api service!');
        deferred.reject('Resource "' + resource + '" is not defined in the api service!');
      } else {
        apiObject[method](params, function (response) {
          deferred.resolve(response);
        }, function (response) {
          deferred.reject(response);
        });
      }
      return deferred.promise;
    }
    function getApiObject(resource) {
      var resourceParts = resource.split("."), apiObject = api;
      for (var l = 0; l < resourceParts.length; l++) {
        if (angular.isUndefined(apiObject[resourceParts[l]])) {
          $log.error('Resource part "' + resourceParts[l] + '" is not defined!');
          apiObject = false;
          break;
        }
        apiObject = apiObject[resourceParts[l]];
      }
      if (!apiObject) {
        return false;
      }
      return apiObject;
    }
  }
}());
;
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" && typeof require === "function" ? factory(require("../moment")) : typeof define === "function" && define.amd ? define(["../moment"], factory) : factory(global.moment);
}(this, function (moment) {
  "use strict";
  var vi = moment.defineLocale("vi", {months: "Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: true, weekdays: "Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: true, meridiemParse: /sa|ch/i, isPM: function (input) {
    return /^ch$/i.test(input);
  }, meridiem: function (hours, minutes, isLower) {
    if (hours < 12) {
      return isLower ? "sa" : "SA";
    } else {
      return isLower ? "ch" : "CH";
    }
  }, longDateFormat: {LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm"}, calendar: {sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L"}, relativeTime: {future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm"}, ordinalParse: /\d{1,2}/, ordinal: function (number) {
    return number;
  }, week: {dow: 1, doy: 4}});
  return vi;
}));
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
}
QR8bitByte.prototype = {getLength: function (buffer) {
  return this.data.length;
}, write: function (buffer) {
  for (var i = 0; i < this.data.length; i++) {
    buffer.put(this.data.charCodeAt(i), 8);
  }
}};
function ALPHA_NUM(data) {
  this.mode = QRMode.MODE_ALPHA_NUM;
  this.data = data;
}
ALPHA_NUM.prototype = {getCode: function (code) {
  var codes = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  return codes.indexOf(code);
}, getLength: function (buffer) {
  return this.data.length;
}, write: function (buffer) {
  for (var i = 0; i < this.data.length; i++) {
    if (this.data[i + 1]) {
      buffer.put(45 * this.getCode(this.data[i]) + this.getCode(this.data[i + 1]), 11);
    } else {
      buffer.put(this.getCode(this.data[i]), 6);
    }
    i++;
  }
}};
function NUMBER(data) {
  this.mode = QRMode.MODE_NUMBER;
  this.data = data;
}
NUMBER.prototype = {getBitLen: function (length) {
  var NUMBER_LENGTH = {3: 10, 2: 7, 1: 4};
  return NUMBER_LENGTH[length];
}, getLength: function (buffer) {
  return this.data.length;
}, write: function (buffer) {
  for (var i = 0; i < this.data.length; i++) {
    var chars = this.data[i];
    if (this.data[i + 1]) {
      chars += this.data[i + 1];
    }
    if (this.data[i + 2]) {
      chars += this.data[i + 2];
    }
    var bitLength = this.getBitLen(chars.length);
    buffer.put(parseInt(chars, 10), bitLength);
    i++;
    i++;
  }
}};
function QRCode(typeNumber, errorCorrectLevel, inputMode) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.inputMode = inputMode;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = new Array;
}
QRCode.prototype = {addData: function (data) {
  var newData;
  if (this.inputMode === "NUMBER") {
    newData = new NUMBER(data);
  } else if (this.inputMode === "ALPHA_NUM") {
    newData = new ALPHA_NUM(data);
  } else {
    newData = new QR8bitByte(data);
  }
  this.dataList.push(newData);
  this.dataCache = null;
}, isDark: function (row, col) {
  if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
    throw new Error(row + "," + col);
  }
  return this.modules[row][col];
}, getModuleCount: function () {
  return this.moduleCount;
}, make: function () {
  if (this.typeNumber < 1) {
    var typeNumber = 1;
    for (typeNumber = 1; typeNumber < 40; typeNumber++) {
      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
      var buffer = new QRBitBuffer;
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount;
      }
      for (var i = 0; i < this.dataList.length; i++) {
        var data = this.dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }
      if (buffer.getLengthInBits() <= totalDataCount * 8) break;
    }
    this.typeNumber = typeNumber;
  }
  this.makeImpl(false, this.getBestMaskPattern());
}, makeImpl: function (test, maskPattern) {
  this.moduleCount = this.typeNumber * 4 + 17;
  this.modules = new Array(this.moduleCount);
  for (var row = 0; row < this.moduleCount; row++) {
    this.modules[row] = new Array(this.moduleCount);
    for (var col = 0; col < this.moduleCount; col++) {
      this.modules[row][col] = null;
    }
  }
  this.setupPositionProbePattern(0, 0);
  this.setupPositionProbePattern(this.moduleCount - 7, 0);
  this.setupPositionProbePattern(0, this.moduleCount - 7);
  this.setupPositionAdjustPattern();
  this.setupTimingPattern();
  this.setupTypeInfo(test, maskPattern);
  if (this.typeNumber >= 7) {
    this.setupTypeNumber(test);
  }
  if (this.dataCache == null) {
    this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
  }
  this.mapData(this.dataCache, maskPattern);
}, setupPositionProbePattern: function (row, col) {
  for (var r = -1; r <= 7; r++) {
    if (row + r <= -1 || this.moduleCount <= row + r) continue;
    for (var c = -1; c <= 7; c++) {
      if (col + c <= -1 || this.moduleCount <= col + c) continue;
      if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
        this.modules[row + r][col + c] = true;
      } else {
        this.modules[row + r][col + c] = false;
      }
    }
  }
}, getBestMaskPattern: function () {
  var minLostPoint = 0;
  var pattern = 0;
  for (var i = 0; i < 8; i++) {
    this.makeImpl(true, i);
    var lostPoint = QRUtil.getLostPoint(this);
    if (i == 0 || minLostPoint > lostPoint) {
      minLostPoint = lostPoint;
      pattern = i;
    }
  }
  return pattern;
}, createMovieClip: function (target_mc, instance_name, depth) {
  var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
  var cs = 1;
  this.make();
  for (var row = 0; row < this.modules.length; row++) {
    var y = row * cs;
    for (var col = 0; col < this.modules[row].length; col++) {
      var x = col * cs;
      var dark = this.modules[row][col];
      if (dark) {
        qr_mc.beginFill(0, 100);
        qr_mc.moveTo(x, y);
        qr_mc.lineTo(x + cs, y);
        qr_mc.lineTo(x + cs, y + cs);
        qr_mc.lineTo(x, y + cs);
        qr_mc.endFill();
      }
    }
  }
  return qr_mc;
}, setupTimingPattern: function () {
  for (var r = 8; r < this.moduleCount - 8; r++) {
    if (this.modules[r][6] != null) {
      continue;
    }
    this.modules[r][6] = r % 2 == 0;
  }
  for (var c = 8; c < this.moduleCount - 8; c++) {
    if (this.modules[6][c] != null) {
      continue;
    }
    this.modules[6][c] = c % 2 == 0;
  }
}, setupPositionAdjustPattern: function () {
  var pos = QRUtil.getPatternPosition(this.typeNumber);
  for (var i = 0; i < pos.length; i++) {
    for (var j = 0; j < pos.length; j++) {
      var row = pos[i];
      var col = pos[j];
      if (this.modules[row][col] != null) {
        continue;
      }
      for (var r = -2; r <= 2; r++) {
        for (var c = -2; c <= 2; c++) {
          if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    }
  }
}, setupTypeNumber: function (test) {
  var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
  }
  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
  }
}, setupTypeInfo: function (test, maskPattern) {
  var data = this.errorCorrectLevel << 3 | maskPattern;
  var bits = QRUtil.getBCHTypeInfo(data);
  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    if (i < 6) {
      this.modules[i][8] = mod;
    } else if (i < 8) {
      this.modules[i + 1][8] = mod;
    } else {
      this.modules[this.moduleCount - 15 + i][8] = mod;
    }
  }
  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    if (i < 8) {
      this.modules[8][this.moduleCount - i - 1] = mod;
    } else if (i < 9) {
      this.modules[8][15 - i - 1 + 1] = mod;
    } else {
      this.modules[8][15 - i - 1] = mod;
    }
  }
  this.modules[this.moduleCount - 8][8] = !test;
}, mapData: function (data, maskPattern) {
  var inc = -1;
  var row = this.moduleCount - 1;
  var bitIndex = 7;
  var byteIndex = 0;
  for (var col = this.moduleCount - 1; col > 0; col -= 2) {
    if (col == 6) col--;
    while (true) {
      for (var c = 0; c < 2; c++) {
        if (this.modules[row][col - c] == null) {
          var dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
          }
          var mask = QRUtil.getMask(maskPattern, row, col - c);
          if (mask) {
            dark = !dark;
          }
          this.modules[row][col - c] = dark;
          bitIndex--;
          if (bitIndex == -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || this.moduleCount <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}};
QRCode.PAD0 = 236;
QRCode.PAD1 = 17;
QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer = new QRBitBuffer;
  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  }
  var totalDataCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    totalDataCount += rsBlocks[i].dataCount;
  }
  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
  }
  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  }
  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  }
  while (true) {
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer.put(QRCode.PAD0, 8);
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer.put(QRCode.PAD1, 8);
  }
  return QRCode.createBytes(buffer, rsBlocks);
};
QRCode.createBytes = function (buffer, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);
  for (var r = 0; r < rsBlocks.length; r++) {
    var dcCount = rsBlocks[r].dataCount;
    var ecCount = rsBlocks[r].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);
    for (var i = 0; i < dcdata[r].length; i++) {
      dcdata[r][i] = 255 & buffer.buffer[i + offset];
    }
    offset += dcCount;
    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);
    for (var i = 0; i < ecdata[r].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }
  var totalCodeCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    totalCodeCount += rsBlocks[i].totalCount;
  }
  var data = new Array(totalCodeCount);
  var index = 0;
  for (var i = 0; i < maxDcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data[index++] = dcdata[r][i];
      }
    }
  }
  for (var i = 0; i < maxEcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data[index++] = ecdata[r][i];
      }
    }
  }
  return data;
};
var QRMode = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8};
var QRErrorCorrectLevel = {L: 1, M: 0, Q: 3, H: 2};
var QRMaskPattern = {PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7};
var QRUtil = {PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function (data) {
  var d = data << 10;
  while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
    d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
  }
  return (data << 10 | d) ^ QRUtil.G15_MASK;
}, getBCHTypeNumber: function (data) {
  var d = data << 12;
  while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
    d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
  }
  return data << 12 | d;
}, getBCHDigit: function (data) {
  var digit = 0;
  while (data != 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
}, getPatternPosition: function (typeNumber) {
  return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
}, getMask: function (maskPattern, i, j) {
  switch (maskPattern) {
    case QRMaskPattern.PATTERN000:
      return (i + j) % 2 == 0;
    case QRMaskPattern.PATTERN001:
      return i % 2 == 0;
    case QRMaskPattern.PATTERN010:
      return j % 3 == 0;
    case QRMaskPattern.PATTERN011:
      return (i + j) % 3 == 0;
    case QRMaskPattern.PATTERN100:
      return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
    case QRMaskPattern.PATTERN101:
      return i * j % 2 + i * j % 3 == 0;
    case QRMaskPattern.PATTERN110:
      return (i * j % 2 + i * j % 3) % 2 == 0;
    case QRMaskPattern.PATTERN111:
      return (i * j % 3 + (i + j) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + maskPattern);
  }
}, getErrorCorrectPolynomial: function (errorCorrectLength) {
  var a = new QRPolynomial([1], 0);
  for (var i = 0; i < errorCorrectLength; i++) {
    a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
  }
  return a;
}, getLengthInBits: function (mode, type) {
  if (1 <= type && type < 10) {
    switch (mode) {
      case QRMode.MODE_NUMBER:
        return 10;
      case QRMode.MODE_ALPHA_NUM:
        return 9;
      case QRMode.MODE_8BIT_BYTE:
        return 8;
      case QRMode.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + mode);
    }
  } else if (type < 27) {
    switch (mode) {
      case QRMode.MODE_NUMBER:
        return 12;
      case QRMode.MODE_ALPHA_NUM:
        return 11;
      case QRMode.MODE_8BIT_BYTE:
        return 16;
      case QRMode.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + mode);
    }
  } else if (type < 41) {
    switch (mode) {
      case QRMode.MODE_NUMBER:
        return 14;
      case QRMode.MODE_ALPHA_NUM:
        return 13;
      case QRMode.MODE_8BIT_BYTE:
        return 16;
      case QRMode.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + mode);
    }
  } else {
    throw new Error("type:" + type);
  }
}, getLostPoint: function (qrCode) {
  var moduleCount = qrCode.getModuleCount();
  var lostPoint = 0;
  for (var row = 0; row < moduleCount; row++) {
    for (var col = 0; col < moduleCount; col++) {
      var sameCount = 0;
      var dark = qrCode.isDark(row, col);
      for (var r = -1; r <= 1; r++) {
        if (row + r < 0 || moduleCount <= row + r) {
          continue;
        }
        for (var c = -1; c <= 1; c++) {
          if (col + c < 0 || moduleCount <= col + c) {
            continue;
          }
          if (r == 0 && c == 0) {
            continue;
          }
          if (dark == qrCode.isDark(row + r, col + c)) {
            sameCount++;
          }
        }
      }
      if (sameCount > 5) {
        lostPoint += 3 + sameCount - 5;
      }
    }
  }
  for (var row = 0; row < moduleCount - 1; row++) {
    for (var col = 0; col < moduleCount - 1; col++) {
      var count = 0;
      if (qrCode.isDark(row, col)) count++;
      if (qrCode.isDark(row + 1, col)) count++;
      if (qrCode.isDark(row, col + 1)) count++;
      if (qrCode.isDark(row + 1, col + 1)) count++;
      if (count == 0 || count == 4) {
        lostPoint += 3;
      }
    }
  }
  for (var row = 0; row < moduleCount; row++) {
    for (var col = 0; col < moduleCount - 6; col++) {
      if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
        lostPoint += 40;
      }
    }
  }
  for (var col = 0; col < moduleCount; col++) {
    for (var row = 0; row < moduleCount - 6; row++) {
      if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
        lostPoint += 40;
      }
    }
  }
  var darkCount = 0;
  for (var col = 0; col < moduleCount; col++) {
    for (var row = 0; row < moduleCount; row++) {
      if (qrCode.isDark(row, col)) {
        darkCount++;
      }
    }
  }
  var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
  lostPoint += ratio * 10;
  return lostPoint;
}};
var QRMath = {glog: function (n) {
  if (n < 1) {
    throw new Error("glog(" + n + ")");
  }
  return QRMath.LOG_TABLE[n];
}, gexp: function (n) {
  while (n < 0) {
    n += 255;
  }
  while (n >= 256) {
    n -= 255;
  }
  return QRMath.EXP_TABLE[n];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)};
for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = {get: function (index) {
  return this.num[index];
}, getLength: function () {
  return this.num.length;
}, multiply: function (e) {
  var num = new Array(this.getLength() + e.getLength() - 1);
  for (var i = 0; i < this.getLength(); i++) {
    for (var j = 0; j < e.getLength(); j++) {
      num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
    }
  }
  return new QRPolynomial(num, 0);
}, mod: function (e) {
  if (this.getLength() - e.getLength() < 0) {
    return this;
  }
  var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
  var num = new Array(this.getLength());
  for (var i = 0; i < this.getLength(); i++) {
    num[i] = this.get(i);
  }
  for (var i = 0; i < e.getLength(); i++) {
    num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
  }
  return new QRPolynomial(num, 0).mod(e);
}};
function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}
QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
  if (rsBlock == undefined) {
    throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  }
  var length = rsBlock.length / 3;
  var list = new Array;
  for (var i = 0; i < length; i++) {
    var count = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];
    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }
  return list;
};
QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
    default:
      return undefined;
  }
};
function QRBitBuffer() {
  this.buffer = new Array;
  this.length = 0;
}
QRBitBuffer.prototype = {get: function (index) {
  var bufIndex = Math.floor(index / 8);
  return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
}, put: function (num, length) {
  for (var i = 0; i < length; i++) {
    this.putBit((num >>> length - i - 1 & 1) == 1);
  }
}, getLengthInBits: function () {
  return this.length;
}, putBit: function (bit) {
  var bufIndex = Math.floor(this.length / 8);
  if (this.buffer.length <= bufIndex) {
    this.buffer.push(0);
  }
  if (bit) {
    this.buffer[bufIndex] |= 128 >>> this.length % 8;
  }
  this.length++;
}};
angular.module("otpInputDirective", []).directive("otpInputDirective", ["$timeout", function ($timeout) {
  return {restrict: "A", scope: {options: "="}, template: "<div><input type='{{type}}' ng-repeat=\"c in characters\" autocomplete='off' ng-keyup='onKeyUp($index,$event)' ng-keydown='onKeyDown($index,$event)' ng-model='c.value' id='otpInput{{c.index}}' name='otpInput{{c.index}}' ng-style=\"style\" placeholder=\"{{placeholder}}\" maxlength=\"1\"  />\n</div>", link: function ($scope, elem) {
    var size = parseInt($scope.options.size) || 6;
    var width = 100 / (size + 1);
    var margin = width / size;
    var tmp = [], elementArr = [];
    var DEFAULT_COLOR = "#6f6d6d";
    var randomNumber = Math.floor(Math.random() * 1e4) + 100;
    $scope.style = {"margin-right": margin + "%", border: "none", "border-bottom": "2px solid", "border-radius": "0", display: "inline-block", width: width + "%", "text-align": "center", padding: "5px 0px", outline: "none", "box-shadow": "none", background: "transparent", "border-color": $scope.options.style && $scope.options.style.lineColor ? $scope.options.style.lineColor : DEFAULT_COLOR, color: $scope.options.style && $scope.options.style.color ? $scope.options.style.color : DEFAULT_COLOR, "font-size": $scope.options.style && $scope.options.style.fontSize ? scope.options.style.fontSize : "20px"};
    $scope.type = $scope.options.type ? $scope.options.type : "text";
    $scope.placeholder = $scope.options.placeholder && $scope.options.placeholder.length === 1 ? $scope.options.placeholder : "";
    $scope.setOtpValue = function () {
      $scope.options.value = "";
      var done = true;
      angular.forEach($scope.characters, function (v, k) {
        if (v.value.length !== 1) {
          done = false;
          return false;
        }
        $scope.options.value = $scope.options.value + v.value;
      });
      if (done) {
        if (typeof $scope.options.onDone === "function") {
          $scope.options.onDone($scope.options.value);
        }
      }
    };
    $scope.onKeyUp = function (index, e) {
      var key = e.keyCode || e.which;
      var old = $scope.options.value;
      $scope.setOtpValue();
      if ($scope.characters[index].value.length > 0 && key !== 8 && index !== size - 1) {
        $timeout(function () {
          elementArr[index + 1][0].focus();
        });
      }
      if (typeof $scope.options.onChange === "function" && old !== $scope.options.value) {
        $scope.options.onChange($scope.options.value);
      }
    };
    $scope.onKeyDown = function (index, e) {
      var key = e.keyCode || e.which;
      if (key === 8 && $scope.characters[index].value === "" && index !== 0) {
        $timeout(function () {
          elementArr[index - 1][0].focus();
        });
      }
    };
    for (var i = 0; i < size; i++) {
      tmp.push({index: randomNumber + "-" + i, value: ""});
    }
    $scope.characters = tmp;
    $timeout(function () {
      for (var i = 0; i < size; i++) {
        elementArr.push(angular.element(document.querySelector("#otpInput" + randomNumber + "-" + i)));
      }
      elementArr[0][0].focus();
    });
  }};
}]);
(function () {
  "use strict";
  angular.module("app.core").directive("numericOnly", numericOnlyDirective).directive("selectOnClick", selectOnClick);
  function selectOnClick($window, $timeout) {
    return {restrict: "A", link: function (scope, element, attrs) {
      element.on("focus", function () {
        if (parseInt(this.value) === 0) {
          this.value = "";
        } else {
          this.select();
        }
      });
    }};
  }
  function numericOnlyDirective() {
    return {require: "ngModel", link: function (scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function (inputValue) {
        var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g, "") : null;
        if (transformedInput !== inputValue) {
          modelCtrl.$setViewValue(transformedInput);
          modelCtrl.$render();
        }
        return transformedInput;
      });
    }};
  }
}());
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("angular")); else if (typeof define === "function" && define.amd) define("ng-currency", ["angular"], factory); else if (typeof exports === "object") exports["ng-currency"] = factory(require("angular")); else root["ng-currency"] = factory(root.angular);
}(window, function (__WEBPACK_EXTERNAL_MODULE_angular__) {
  return function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = installedModules[moduleId] = {i: moduleId, l: false, exports: {}};
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, {configurable: false, enumerable: true, get: getter});
      }
    };
    __webpack_require__.r = function (exports) {
      Object.defineProperty(exports, "__esModule", {value: true});
    };
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function getDefault() {
        return module.default;
      } : function getModuleExports() {
        return module;
      };
      __webpack_require__.d(getter, "a", getter);
      return getter;
    };
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 0);
  }({"./ng-currency-settings.provider.js": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var ngCurrencySettings = function () {
      function ngCurrencySettings() {
        _classCallCheck(this, ngCurrencySettings);
        this._defaults = {fraction: 0, hardCap: false, min: undefined, max: undefined, currencySymbol: ""};
      }
      _createClass(ngCurrencySettings, [{key: "$get", value: function $get() {
        var provider = this;
        return {get defaults() {
          return provider.defaults;
        }};
      }}, {key: "defaults", get: function get() {
        return this._defaults;
      }, set: function set(defaults) {
        this._defaults = defaults;
      }}]);
      return ngCurrencySettings;
    }();
    exports.default = ngCurrencySettings;
  }, "./ng-currency.directive.js": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.default = ngCurrency;
    function ngCurrency($filter, $locale, $timeout, ngCurrencySettings) {
      return {require: "ngModel", link: function link(scope, element, attrs, controller) {
        var _ngCurrencySettings$d = ngCurrencySettings.defaults, hardCap = _ngCurrencySettings$d.hardCap, min = _ngCurrencySettings$d.min, max = _ngCurrencySettings$d.max, currencySymbol = _ngCurrencySettings$d.currencySymbol, fraction = _ngCurrencySettings$d.fraction;
        var ngRequired = attrs.required;
        var active = true;
        attrs.$observe("ngCurrency", function (value) {
          active = value !== "false";
          if (active) {
            reformat();
          } else {
            controller.$viewValue = controller.$$rawModelValue;
            controller.$render();
          }
        });
        attrs.$observe("hardCap", function (value) {
          hardCap = value === "true";
          revalidate();
        });
        attrs.$observe("min", function (value) {
          min = value ? Number(value) : undefined;
          revalidate();
        });
        attrs.$observe("max", function (value) {
          max = value ? Number(value) : undefined;
          revalidate();
        });
        attrs.$observe("currencySymbol", function (value) {
          currencySymbol = value;
          reformat();
        });
        attrs.$observe("required", function (value) {
          ngRequired = value;
          revalidate();
        });
        attrs.$observe("fraction", function (value) {
          fraction = value || 2;
          reformat();
          revalidate();
        });
        $timeout(function () {
          scope.$emit("currencyRedraw");
        });
        controller.$parsers.push(function (value) {
          if (active && [undefined, null, ""].indexOf(value) === -1) {
            value = clearValue(value);
            value = keepInRange(Number(value));
            return value;
          }
          return value;
        });
        controller.$formatters.push(function (value) {
          if (active && [undefined, null, ""].indexOf(value) === -1) {
            return $filter("currency")(value, getCurrencySymbol(), fraction);
          }
          return value;
        });
        controller.$validators.min = function (value) {
          if (!ngRequired && ([undefined, null, ""].indexOf(value) !== -1 || isNaN(value))) {
            return true;
          }
          return !active || [undefined, null].indexOf(min) !== -1 || isNaN(min) || value >= min;
        };
        controller.$validators.max = function (value) {
          if (!ngRequired && ([undefined, null, ""].indexOf(value) !== -1 || isNaN(value))) {
            return true;
          }
          return !active || [undefined, null].indexOf(max) !== -1 || isNaN(max) || value <= max;
        };
        controller.$validators.fraction = function (value) {
          return !active || !value || !isNaN(value);
        };
        function reformat() {
          if (active) {
            var value = undefined;
            var updateOn = undefined, debounce = undefined;
            if (controller.$options) {
              if (controller.$options.getOption) {
                updateOn = controller.$options.getOption("updateOn");
                debounce = controller.$options.getOption("debounce");
              } else {
                updateOn = controller.$options.updateOn;
                debounce = controller.$options.debounce;
              }
            }
            if (updateOn === "blur" || debounce) {
              value = controller.$viewValue;
              for (var i = controller.$parsers.length - 1; i >= 0; i--) {
                value = controller.$parsers[i](value);
              }
            } else {
              value = controller.$$rawModelValue;
            }
            for (var _i = controller.$formatters.length - 1; _i >= 0; _i--) {
              value = controller.$formatters[_i](value);
            }
            controller.$viewValue = value;
            controller.$render();
          }
        }
        function revalidate() {
          controller.$validate();
          if (active) {
            var value = keepInRange(controller.$$rawModelValue);
            if (value !== controller.$$rawModelValue) {
              controller.$setViewValue(value.toFixed(fraction));
              controller.$commitViewValue();
              reformat();
            }
          }
        }
        function keepInRange(value) {
          if (hardCap) {
            if (max !== undefined && value > max) {
              value = max;
            } else if (min !== undefined && value < min) {
              value = min;
            }
          }
          return value;
        }
        scope.$on("currencyRedraw", function () {
          revalidate();
          reformat();
        });
        element.bind("focus", function () {
          if (active) {
            var value = clearValue(controller.$viewValue, false);
            if (controller.$viewValue !== value) {
              controller.$viewValue = value;
              controller.$render();
              element.triggerHandler("focus");
            }
          }
        });
        element.bind("blur", reformat);
        function clearValue(value) {
          var replaceSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          value = String(value);
          var decimalSeparator = $locale.NUMBER_FORMATS.DECIMAL_SEP;
          var cleared = null;
          var neg_dummy = $filter("currency")("-1", getCurrencySymbol(), fraction);
          var neg_regexp = RegExp("[0-9." + decimalSeparator + $locale.NUMBER_FORMATS.GROUP_SEP + "]+");
          var neg_dummy_txt = neg_dummy.replace(neg_regexp.exec(neg_dummy), "");
          var value_dummy_txt = value.replace(neg_regexp.exec(value), "");
          if (neg_dummy_txt === value_dummy_txt) {
            value = "-" + neg_regexp.exec(value);
          }
          if (RegExp("^-[\\s]*$", "g").test(value)) {
            value = "-0";
          }
          if (RegExp("\\d|\\-|\\" + decimalSeparator, "g").test(value)) {
            cleared = value.match(RegExp("\\d|\\-|\\" + decimalSeparator, "g")).join("").match(RegExp("\\-{0,1}((\\" + decimalSeparator + ")|([0-9]{1,}\\" + decimalSeparator + "?))&?[0-9]{0," + fraction + "}", "g")) || [""];
            cleared = cleared[0];
            cleared = replaceSeparator ? cleared.replace(decimalSeparator, ".") : cleared;
          }
          return cleared || null;
        }
        function getCurrencySymbol() {
          return currencySymbol === undefined ? $locale.NUMBER_FORMATS.CURRENCY_SYM : currencySymbol;
        }
      }};
    }
    ngCurrency.$inject = ["$filter", "$locale", "$timeout", "ngCurrencySettings"];
  }, "./ng-currency.module.js": function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var _angular = __webpack_require__("angular");
    var _angular2 = _interopRequireDefault(_angular);
    var _ngCurrencySettingsProvider = __webpack_require__("./ng-currency-settings.provider.js");
    var _ngCurrencySettingsProvider2 = _interopRequireDefault(_ngCurrencySettingsProvider);
    var _ngCurrencyDirective = __webpack_require__("./ng-currency.directive.js");
    var _ngCurrencyDirective2 = _interopRequireDefault(_ngCurrencyDirective);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _module = _angular2.default.module("ng-currency", []);
    _module.provider("ngCurrencySettings", _ngCurrencySettingsProvider2.default);
    _module.directive("ngCurrency", _ngCurrencyDirective2.default);
    exports.default = _module.name;
  }, 0: function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__("./ng-currency.module.js");
  }, angular: function (module, exports) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;
  }});
}));
(function () {
  "use strict";
  angular.module("app.core").directive("hljs", hljsDirective).directive("compareTo", compareTo);
  function hljsDirective($timeout, $q, $interpolate) {
    return {restrict: "E", compile: function (element, attr) {
      var code;
      if (!attr.code) {
        code = element.html();
        element.empty();
      }
      return function (scope, element, attr) {
        if (attr.code) {
          code = scope.$eval(attr.code);
        }
        var shouldInterpolate = scope.$eval(attr.shouldInterpolate);
        $q.when(code).then(function (code) {
          if (code) {
            if (shouldInterpolate) {
              code = $interpolate(code)(scope);
            }
            var contentParent = angular.element('<pre><code class="highlight" ng-non-bindable></code></pre>');
            element.append(contentParent);
            $timeout(function () {
              render(code, contentParent);
            }, 34, false);
          }
        });
        function render(contents, parent) {
          var codeElement = parent.find("code");
          var lines = contents.split("\n");
          lines = lines.filter(function (line) {
            return line.trim().length;
          });
          var firstLineWhitespace = lines[0].match(/^\s*/)[0];
          var startingWhitespaceRegex = new RegExp("^" + firstLineWhitespace);
          lines = lines.map(function (line) {
            return line.replace(startingWhitespaceRegex, "").replace(/\s+$/, "");
          });
          var highlightedCode = hljs.highlight(attr.language || attr.lang, lines.join("\n"), true);
          highlightedCode.value = highlightedCode.value.replace(/=<span class="hljs-value">""<\/span>/gi, "").replace("<head>", "").replace("<head/>", "");
          codeElement.append(highlightedCode.value).addClass("highlight");
        }
      };
    }};
  }
  compareTo.$inject = [];
  function compareTo() {
    return {require: "ngModel", scope: {compareTolValue: "=compareTo"}, link: function (scope, element, attributes, ngModel) {
      ngModel.$validators.compareTo = function (modelValue) {
        return modelValue === scope.compareTolValue;
      };
      scope.$watch("compareTolValue", function () {
        ngModel.$validate();
      });
    }};
  }
}());
(function (QRCode) {
  "use strict";
  angular.module("ja.qr", []).controller("QrCtrl", ["$scope", function ($scope) {
    $scope.getTypeNumeber = function () {
      return $scope.typeNumber || 0;
    };
    $scope.getCorrection = function () {
      var levels = {L: 1, M: 0, Q: 3, H: 2};
      var correctionLevel = $scope.correctionLevel || 0;
      return levels[correctionLevel] || 0;
    };
    $scope.getText = function () {
      return $scope.text || "";
    };
    $scope.getSize = function () {
      return $scope.size || 250;
    };
    $scope.isNUMBER = function (text) {
      var ALLOWEDCHARS = /^[0-9]*$/;
      return ALLOWEDCHARS.test(text);
    };
    $scope.isALPHA_NUM = function (text) {
      var ALLOWEDCHARS = /^[0-9A-Z $%*+\-./:]*$/;
      return ALLOWEDCHARS.test(text);
    };
    $scope.is8bit = function (text) {
      for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i);
        if (code > 255) {
          return false;
        }
      }
      return true;
    };
    $scope.checkInputMode = function (inputMode, text) {
      if (inputMode === "NUMBER" && !$scope.isNUMBER(text)) {
        throw new Error("The `NUMBER` input mode is invalid for text.");
      } else if (inputMode === "ALPHA_NUM" && !$scope.isALPHA_NUM(text)) {
        throw new Error("The `ALPHA_NUM` input mode is invalid for text.");
      } else if (inputMode === "8bit" && !$scope.is8bit(text)) {
        throw new Error("The `8bit` input mode is invalid for text.");
      } else if (!$scope.is8bit(text)) {
        throw new Error("Input mode is invalid for text.");
      }
      return true;
    };
    $scope.getInputMode = function (text) {
      var inputMode = $scope.inputMode;
      inputMode = inputMode || ($scope.isNUMBER(text) ? "NUMBER" : undefined);
      inputMode = inputMode || ($scope.isALPHA_NUM(text) ? "ALPHA_NUM" : undefined);
      inputMode = inputMode || ($scope.is8bit(text) ? "8bit" : "");
      return $scope.checkInputMode(inputMode, text) ? inputMode : "";
    };
  }]).directive("qr", ["$timeout", "$window", function ($timeout, $window) {
    return {restrict: "E", template: '<canvas ng-hide="image"></canvas><img ng-if="image" ng-src="{{canvasImage}}"/>', scope: {typeNumber: "=", correctionLevel: "=", inputMode: "=", size: "=", text: "=", image: "="}, controller: "QrCtrl", link: function postlink(scope, element, attrs) {
      if (scope.text === undefined) {
        throw new Error("The `text` attribute is required.");
      }
      var canvas = element.find("canvas")[0];
      var canvas2D = !!$window.CanvasRenderingContext2D;
      scope.TYPE_NUMBER = scope.getTypeNumeber();
      scope.TEXT = scope.getText();
      scope.CORRECTION = scope.getCorrection();
      scope.SIZE = scope.getSize();
      scope.INPUT_MODE = scope.getInputMode(scope.TEXT);
      scope.canvasImage = "";
      var draw = function (context, qr, modules, tile) {
        for (var row = 0; row < modules; row++) {
          for (var col = 0; col < modules; col++) {
            var w = Math.ceil((col + 1) * tile) - Math.floor(col * tile), h = Math.ceil((row + 1) * tile) - Math.floor(row * tile);
            context.fillStyle = qr.isDark(row, col) ? "#000" : "#fff";
            context.fillRect(Math.round(col * tile), Math.round(row * tile), w, h);
          }
        }
      };
      var render = function (canvas, value, typeNumber, correction, size, inputMode) {
        var trim = /^\s+|\s+$/g;
        var text = value.replace(trim, "");
        var qr = new QRCode(typeNumber, correction, inputMode);
        qr.addData(text);
        qr.make();
        var context = canvas.getContext("2d");
        var modules = qr.getModuleCount();
        var tile = size / modules;
        canvas.width = canvas.height = size;
        if (canvas2D) {
          draw(context, qr, modules, tile);
          scope.canvasImage = canvas.toDataURL() || "";
        }
      };
      render(canvas, scope.TEXT, scope.TYPE_NUMBER, scope.CORRECTION, scope.SIZE, scope.INPUT_MODE);
      $timeout(function () {
        scope.$watch("text", function (value, old) {
          if (value !== old) {
            scope.TEXT = scope.getText();
            scope.INPUT_MODE = scope.getInputMode(scope.TEXT);
            render(canvas, scope.TEXT, scope.TYPE_NUMBER, scope.CORRECTION, scope.SIZE, scope.INPUT_MODE);
          }
        });
        scope.$watch("correctionLevel", function (value, old) {
          if (value !== old) {
            scope.CORRECTION = scope.getCorrection();
            render(canvas, scope.TEXT, scope.TYPE_NUMBER, scope.CORRECTION, scope.SIZE, scope.INPUT_MODE);
          }
        });
        scope.$watch("typeNumber", function (value, old) {
          if (value !== old) {
            scope.TYPE_NUMBER = scope.getTypeNumeber();
            render(canvas, scope.TEXT, scope.TYPE_NUMBER, scope.CORRECTION, scope.SIZE, scope.INPUT_MODE);
          }
        });
        scope.$watch("size", function (value, old) {
          if (value !== old) {
            scope.SIZE = scope.getSize();
            render(canvas, scope.TEXT, scope.TYPE_NUMBER, scope.CORRECTION, scope.SIZE, scope.INPUT_MODE);
          }
        });
        scope.$watch("inputMode", function (value, old) {
          if (value !== old) {
            scope.INPUT_MODE = scope.getInputMode(scope.TEXT);
            render(canvas, scope.TEXT, scope.TYPE_NUMBER, scope.CORRECTION, scope.SIZE, scope.INPUT_MODE);
          }
        });
      });
    }};
  }]);
}(window.QRCode));
(function (window) {
  var createModule = function (angular) {
    var module = angular.module("FBAngular", []);
    module.factory("Fullscreen", ["$document", function ($document) {
      var document = $document[0];
      var serviceInstance = {all: function () {
        serviceInstance.enable(document.documentElement);
      }, enable: function (element) {
        if (element.requestFullScreen) {
          element.requestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }, cancel: function () {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }, isEnabled: function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        return fullscreenElement;
      }, toggleAll: function () {
        serviceInstance.isEnabled() ? serviceInstance.cancel() : serviceInstance.all();
      }, isSupported: function () {
        var docElm = document.documentElement;
        return docElm.requestFullScreen || docElm.mozRequestFullScreen || docElm.webkitRequestFullScreen || docElm.msRequestFullscreen;
      }};
      return serviceInstance;
    }]);
    module.directive("fullscreen", ["Fullscreen", function (Fullscreen) {
      return {link: function ($scope, $element, $attrs) {
        if ($attrs.fullscreen) {
          $scope.$watch($attrs.fullscreen, function (value) {
            var isEnabled = Fullscreen.isEnabled();
            if (value && !isEnabled) {
              Fullscreen.enable($element[0]);
              $element.addClass("isInFullScreen");
            } else if (!value && isEnabled) {
              Fullscreen.cancel();
              $element.removeClass("isInFullScreen");
            }
          });
          $element.on("fullscreenchange webkitfullscreenchange mozfullscreenchange", function () {
            if (!Fullscreen.isEnabled()) {
              $scope.$evalAsync(function () {
                $scope[$attrs.fullscreen] = false;
                $element.removeClass("isInFullScreen");
              });
            }
          });
        } else {
          $element.on("click", function (ev) {
            Fullscreen.enable($element[0]);
          });
          if ($attrs.onlyWatchedProperty !== undefined) {
            return;
          }
        }
      }};
    }]);
    return module;
  };
  if (typeof define === "function" && define.amd) {
    define("FBAngular", ["angular"], function (angular) {
      return createModule(angular);
    });
  } else {
    createModule(window.angular);
  }
}(window));
(function () {
  "use strict";
  angular.module("app.core").filter("filterByTags", filterByTags).filter("filterSingleByTags", filterSingleByTags);
  function filterByTags() {
    return function (items, tags) {
      if (items.length === 0 || tags.length === 0) {
        return items;
      }
      var filtered = [];
      items.forEach(function (item) {
        var match = tags.every(function (tag) {
          var tagExists = false;
          item.tags.forEach(function (itemTag) {
            if (itemTag.name === tag.name) {
              tagExists = true;
              return;
            }
          });
          return tagExists;
        });
        if (match) {
          filtered.push(item);
        }
      });
      return filtered;
    };
  }
  function filterSingleByTags() {
    return function (itemTags, tags) {
      if (itemTags.length === 0 || tags.length === 0) {
        return;
      }
      if (itemTags.length < tags.length) {
        return [];
      }
      var filtered = [];
      var match = tags.every(function (tag) {
        var tagExists = false;
        itemTags.forEach(function (itemTag) {
          if (itemTag.name === tag.name) {
            tagExists = true;
            return;
          }
        });
        return tagExists;
      });
      if (match) {
        filtered.push(itemTags);
      }
      return filtered;
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.core").filter("SportGroup", function () {
    let SportList = [{SportType: 0, en: "SportsBook", vn: "Thể Thao"}, {SportType: 1, en: "NumberGame", vn: "Trò chơi Số"}, {SportType: 2, en: "VirtualSports", vn: "Thể Thao Ảo"}, {SportType: 3, en: "Arcadia Gaming", vn: "Arcadia Gaming"}, {SportType: 4, en: "Saba.Club", vn: "Saba.Club"}, {SportType: 5, en: "Keno", vn: "Keno"}, {SportType: 6, en: "Lottery", vn: "Lottery"}, {SportType: 7, en: "RNG Casino", vn: "RNG Casino"}, {SportType: 99, en: "Others", vn: "Trò chơi khác"}];
    return function (input, cond) {
      let Sport = $.grep(SportList, function (value, i) {
        return value.SportType === parseInt(input);
      });
      if (Sport.length) {
        return cond === "en" ? Sport[0].en : Sport[0].vn;
      } else {
        return "Undefined";
      }
    };
  }).filter("sabaSportType", function () {
    let SportList = [{SportType: "1", name: "Soccer", vn: "Bóng Đá"}, {SportType: "1MP", name: "SoccerParlay", vn: "Xiên Bóng Đá"}, {SportType: "2", name: "Basketball", vn: "Bóng Rổ"}, {SportType: "3", name: "Football", vn: "Bóng Bầu Dục Mỹ"}, {SportType: "5", name: "Tennis", vn: "Quần Vợt"}, {SportType: "8", name: "Baseball", vn: "Bóng Chày"}, {SportType: "10", name: "Golf", vn: "Đánh Golf"}, {SportType: "11", name: "Motorsports", vn: "Đua xe Mô Tô"}, {SportType: "43", name: "E_Sports", vn: "Thể Thao Điện Tử"}, {SportType: "99", name: "OtherSports", vn: "Môn Thể Thao khác"}, {SportType: "99MP", name: "MixSportsParlay", vn: "Xiên Thể Thao"}, {SportType: "161", name: "NumberGame", vn: "Number Game"}, {SportType: "180", name: "VirtualSports", vn: "Thể Thao Ảo"}];
    return function (input, cond) {
      let Sport = $.grep(SportList, function (value, i) {
        return value.name === input;
      });
      if (Sport.length) {
        return cond === "vn" ? Sport[0].vn : Sport[0].SportType;
      } else {
        return "Undefined";
      }
    };
  }).filter("SabaTicketStatus", function () {
    let Languages = [{en: "won", vn: "Thắng"}, {en: "lose", vn: "Thua"}, {en: "half won", vn: "Thắng nửa"}, {en: "half lose", vn: "Thua nửa"}, {en: "void", vn: "Huỷ"}, {en: "running", vn: "Đang chạy"}, {en: "draw", vn: "Hoà"}, {en: "reject", vn: "Từ chối"}, {en: "refund", vn: "Hoàn tiền"}, {en: "waiting", vn: "Đang chờ"}];
    return function (input) {
      let lang = $.grep(Languages, function (value, i) {
        return value.en === input;
      });
      if (lang.length) {
        return lang[0].vn;
      } else {
        return input;
      }
    };
  }).filter("SabaOddsType", function () {
    let OddsType = [{id: 0, name: "SP"}, {id: 1, name: "MY"}, {id: 2, name: "CN"}, {id: 3, name: "DEC"}, {id: 4, name: "IN"}, {id: 5, name: "AM"}];
    return function (input) {
      let odd = $.grep(OddsType, function (value, i) {
        return value.id === parseInt(input);
      });
      if (odd.length) {
        return odd[0].name;
      } else {
        return input;
      }
    };
  }).filter("sabaSportsBet", function () {
    let SportTypes = [{SportID: 1, Sport: "Bóng đá"}, {SportID: 2, Sport: "Bóng rổ"}, {SportID: 3, Sport: "Bóng bầu dục Mỹ"}, {SportID: 4, Sport: "Khúc côn cầu trên băng"}, {SportID: 5, Sport: "Quần vợt"}, {SportID: 6, Sport: "Bóng chuyền"}, {SportID: 7, Sport: "Snooker/Pool"}, {SportID: 8, Sport: "Bóng chày"}, {SportID: 9, Sport: "Cầu lông"}, {SportID: 10, Sport: "Đánh Golf"}, {SportID: 11, Sport: "Thể Thao Môtô"}, {SportID: 12, Sport: "Bơi lội"}, {SportID: 13, Sport: "Chính trị"}, {SportID: 14, Sport: "Bóng nước"}, {SportID: 15, Sport: "Lặn"}, {SportID: 16, Sport: "Quyền anh"}, {SportID: 17, Sport: "Bắn cung"}, {SportID: 18, Sport: "Bóng bàn"}, {SportID: 19, Sport: "Cử tạ"}, {SportID: 20, Sport: "Canoeing"}, {SportID: 21, Sport: "Thể dục"}, {SportID: 22, Sport: "Điền kinh"}, {SportID: 23, Sport: "Cưỡi ngựa"}, {SportID: 24, Sport: "Bóng ném"}, {SportID: 25, Sport: "Ném phi tiêu"}, {SportID: 26, Sport: "Bóng bầu dục"}, {SportID: 27, Sport: "Cricket"}, {SportID: 28, Sport: "Khúc côn cầu trên cỏ"}, {SportID: 29, Sport: "Winter Sports"}, {SportID: 30, Sport: "Squash"}, {SportID: 31, Sport: "Giải Trí"}, {SportID: 32, Sport: "Netball"}, {SportID: 33, Sport: "Đua xe đạp"}, {SportID: 34, Sport: "Đấu kiếm"}, {SportID: 35, Sport: "Judo"}, {SportID: 36, Sport: "M. Pentathlon"}, {SportID: 37, Sport: "Rowing"}, {SportID: 38, Sport: "Đua thuyền buồm"}, {SportID: 39, Sport: "Bắn súng"}, {SportID: 40, Sport: "Taekwondo"}, {SportID: 41, Sport: "Triathlon"}, {SportID: 42, Sport: "Đấu vật"}, {SportID: 43, Sport: "Thể Thao Điện Tử"}, {SportID: 44, Sport: "Quyền Thái"}, {SportID: 45, Sport: "Beach Volleyball"}, {SportID: 47, Sport: "Kabaddi"}, {SportID: 48, Sport: "Cầu mây"}, {SportID: 49, Sport: "Bóng đá trong nhà"}, {SportID: 50, Sport: "Cricket"}, {SportID: 51, Sport: "Bóng đá bãi biển"}, {SportID: 52, Sport: "Poker"}, {SportID: 53, Sport: "Cờ vua"}, {SportID: 54, Sport: "Olympics"}, {SportID: 55, Sport: "Tài chính"}, {SportID: 56, Sport: "Lô tô"}, {SportID: 99, Sport: "Môn thể thao khác"}, {SportID: 161, Sport: "Number Game"}, {SportID: 164, Sport: "Happy 5"}, {SportID: 168, Sport: "Các trò chơi liên kết Happy 5"}, {SportID: 165, Sport: "Arcadia Gaming"}, {SportID: 180, Sport: "Bóng đá Ảo"}, {SportID: 181, Sport: "Đua Ngựa Ảo"}, {SportID: 182, Sport: "Đua Chó Ảo"}, {SportID: 183, Sport: "Đua xe mô tô ảo"}, {SportID: 184, Sport: "Đua xe Ảo"}, {SportID: 185, Sport: "Đua xe đạp ảo"}, {SportID: 186, Sport: "Quần Vợt Ảo"}, {SportID: 190, Sport: "Giải đấu Bóng đá Ảo"}, {SportID: 191, Sport: "Quốc gia Bóng đá Ảo"}, {SportID: 192, Sport: "Giải vô địch bóng đá thế giới ảo"}, {SportID: 193, Sport: "Bóng rổ Ảo"}, {SportID: 194, Sport: "Cúp bóng đá ảo Châu Á"}, {SportID: 195, Sport: "Virtual Soccer English Premier"}, {SportID: 196, Sport: "Cúp bóng đá ảo"}, {SportID: 197, Sport: "Cúp Bóng Đá Euro Ảo"}, {SportID: 199, Sport: "Virtual Sports Parlay"}, {SportID: 200, Sport: "Saba.Club"}, {SportID: 202, Sport: "RNG Keno"}, {SportID: 220, Sport: "Lottery"}, {SportID: 208, Sport: "RNG Game"}, {SportID: 210, Sport: "RNG Mobile"}];
    return function (input) {
      let SportType = $.grep(SportTypes, function (value, i) {
        return value.SportID === parseInt(input);
      });
      if (SportType.length) {
        return SportType[0].Sport;
      } else {
        return "SportType [" + input + "]";
      }
    };
  }).filter("BetTag", function () {
    return function (input, tag) {
      if (tag === undefined) {
        return input;
      } else {
        let arTag = tag.split("-");
        input = input.replace("{X}", arTag[0]);
        input = input.replace("{Y}", arTag[1]);
        return input;
      }
    };
  }).filter("sabaCurrency", function () {
    return function (input) {
      if (!isNaN(input)) {
        return new Intl.NumberFormat({maximumSignificantDigits: 4}).format(input);
      } else {
        return input;
      }
    };
  });
}());
(function () {
  "use strict";
  angular.module("app.core").filter("legendGame", function () {
    let gameList = [{id: 0, name: "Miền Bắc"}, {id: 1, name: "Miền Nam"}];
    return function (input) {
      let game = $.grep(gameList, function (value, i) {
        return value.id === parseInt(input);
      });
      if (game.length) {
        return game[0].name;
      }
    };
  });
}());
(function () {
  "use strict";
  angular.module("app.core").filter("roundPam", function () {
    return function (input) {
      if (input > 1e9) {
        return input / 1e9 + "B";
      } else if (input > 1e6) {
        return input / 1e6 + "M";
      } else if (input > 1e3) {
        return input / 1e3 + "K";
      } else {
        return input;
      }
    };
  }).filter("shortname", function () {
    return function (input) {
      var name = input.split(" "), result = "";
      angular.forEach(name, function (n) {
        result += n.substring(0, 1);
      });
      return result;
    };
  }).filter("unixToHuman", function () {
    return function (input) {
      input = input < 0 ? 0 : input;
      var hour, minute, second;
      hour = Math.floor(input / 3600);
      minute = Math.floor((input - hour * 3600) / 60);
      second = Math.floor(input - hour * 3600 - minute * 60);
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      if (hour !== 0) {
        return hour + ":" + minute + ":" + second;
      } else {
        return minute + ":" + second;
      }
    };
  }).filter("toHuman", function () {
    return function (input) {
      var minute = Math.floor(input / 60);
      var second = Math.floor(input - minute * 60);
      second = second < 10 ? "0" + second : second;
      return minute + ":" + second;
    };
  }).filter("sumPointTicket", function () {
    return function (input) {
      var output = 0;
      angular.forEach(input, function (item) {
        output += item.Point;
      });
      return output;
    };
  }).filter("sumMoneyCost", function ($rootScope) {
    return function (input) {
      let betTimesArr = [{GameType: 0, BetType: 5, times: 10}, {GameType: 0, BetType: 6, times: 4}, {GameType: 1, BetType: 2, times: 54}, {GameType: 1, BetType: 3, times: 81}, {GameType: 1, BetType: 4, times: 108}, {GameType: 1, BetType: 7, times: 4}, {GameType: 1, BetType: 9, times: 27}, {GameType: 1, BetType: 10, times: 3}, {GameType: 1, BetType: 12, times: 23}, {GameType: 1, BetType: 14, times: 20}, {GameType: 2, BetType: 2, times: 36}, {GameType: 2, BetType: 3, times: 54}, {GameType: 2, BetType: 4, times: 72}, {GameType: 2, BetType: 15, times: 18}, {GameType: 2, BetType: 16, times: 7}, {GameType: 2, BetType: 17, times: 17}, {GameType: 2, BetType: 18, times: 7}, {GameType: 2, BetType: 19, times: 16}, {GameType: 3, BetType: 2, times: 36}, {GameType: 3, BetType: 3, times: 54}, {GameType: 3, BetType: 4, times: 72}, {GameType: 3, BetType: 15, times: 18}, {GameType: 3, BetType: 16, times: 7}, {GameType: 3, BetType: 17, times: 17}, {GameType: 3, BetType: 18, times: 7}, {GameType: 3, BetType: 19, times: 16}, {GameType: 4, BetType: 2, times: 36}, {GameType: 4, BetType: 3, times: 54}, {GameType: 4, BetType: 4, times: 72}, {GameType: 4, BetType: 15, times: 18}, {GameType: 4, BetType: 16, times: 7}, {GameType: 4, BetType: 17, times: 17}, {GameType: 4, BetType: 18, times: 7}, {GameType: 4, BetType: 19, times: 16}, {GameType: 5, BetType: 2, times: 72}, {GameType: 5, BetType: 3, times: 108}, {GameType: 5, BetType: 4, times: 144}];
      let betTimesObj = betTimesArr.filter(function (item) {
        return item.GameType === input.GameType && item.BetType === input.BetType;
      });
      let betTimes = betTimesObj.length ? betTimesObj[0].times : 1;
      let output = 0;
      let payout = $rootScope.myParameters.filter(function (my) {
        return my.GameType === input.GameType && my.BetType === input.BetType;
      })[0].Payouts;
      angular.forEach(input.Items, function (item) {
        if (input.GameType === 0 && input.BetType === 5) {
          output += item.Point * (item.Price - payout) / 10;
        } else if (input.GameType === 0 && input.BetType === 6) {
          output += item.Point * (item.Price - payout);
        } else {
          output += item.Price * item.Point;
        }
      });
      if (input.GameType === 0 && input.BetType === 5) {
        return output;
      } else if (input.GameType === 2 && input.BetType === 27) {
        return output * input.PrizeNr;
      } else if (input.GameType === 1 && input.BetType === 20) {
        return output * input.PrizeNr;
      } else {
        return output * betTimes;
      }
    };
  }).filter("pickingNumber", function () {
    return function (input) {
      var output = [];
      angular.forEach(input, function (nrs) {
        output = output.concat(nrs.Nrs);
      });
      output = output.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      return output.join(", ");
    };
  }).filter("gameByTerm", function ($rootScope) {
    return function (input) {
      if (parseInt(input) === 1) {
        return "Miền Bắc 2";
      } else {
        return $.grep($rootScope.currentTerm, function (value, i) {
          return value.GameType === parseInt(input);
        })[0].CityName;
      }
    };
  }).filter("production", function () {
    return function (input) {
      if (input === 0) {
        return "Xổ số truyền thống";
      } else if (input === 1) {
        return "Xổ số 789";
      } else if (input === 2) {
        return "789 Casino";
      } else if (input === 100) {
        return "WM Casino";
      } else if (input === 101) {
        return "Bong88";
      }
    };
  }).filter("payment", function () {
    return function (input) {
      let output = input === 0 ? "Trả sau" : "Trả trước";
      return output;
    };
  }).filter("paymentDay", function () {
    let paymentDays = [{id: 1, name: "Thứ 2"}, {id: 2, name: "Thứ 3"}, {id: 3, name: "Thứ 4"}, {id: 4, name: "Thứ 5"}, {id: 5, name: "Thứ 6"}, {id: 6, name: "Thứ 7"}, {id: 7, name: "Chủ nhật"}];
    return function (input) {
      let day = $.grep(paymentDays, function (value, i) {
        return value.id === parseInt(input);
      });
      if (day.length) {
        return day[0].name;
      }
    };
  }).filter("LegendCasino", function () {
    let gameList = [{id: 0, name: "Xóc Đĩa"}, {id: 100, name: "Bầu cử TT"}];
    return function (input) {
      let game = $.grep(gameList, function (value, i) {
        return value.id === parseInt(input);
      });
      if (game.length) {
        return game[0].name;
      }
    };
  }).filter("SedieBet", function () {
    let gameList = [{id: 0, name: "Chẵn"}, {id: 1, name: "Lẻ"}, {id: 2, name: "4 Đỏ"}, {id: 3, name: "4 Trắng"}, {id: 4, name: "1 Đỏ"}, {id: 5, name: "3 Đỏ"}];
    return function (input) {
      let game = $.grep(gameList, function (value, i) {
        return value.id === parseInt(input);
      });
      if (game.length) {
        return game[0].name;
      }
    };
  }).filter("WMGame", function () {
    let gameList = [{id: 101, name: "Baccarat"}, {id: 102, name: "Rồng Hổ"}, {id: 103, name: "Roulette"}, {id: 104, name: "Tài Xỉu"}, {id: 105, name: "Ngưu Ngưu"}, {id: 106, name: "Ba Cây"}, {id: 107, name: "Fan Tan"}, {id: 108, name: "Xóc Đĩa"}, {id: 110, name: "Tôm Cua Cá"}, {id: 111, name: "Trác Kim Hoa"}, {id: 112, name: "Bài cửu Ôn Châu"}, {id: 113, name: "Mạt Chược"}, {id: 128, name: "Andar Bahar"}];
    return function (input) {
      let game = $.grep(gameList, function (value, i) {
        return value.id === parseInt(input);
      });
      if (game.length) {
        return game[0].name;
      }
    };
  }).filter("game", function () {
    var gameList = [{id: 0, name: "Miền Bắc 1"}, {id: 1, name: "Miền Bắc 2"}, {id: 2, name: "Miền Nam 18A"}, {id: 3, name: "Miền Nam 18B"}, {id: 4, name: "Miền Nam 18C"}, {id: 5, name: "Miền Nam 18A + 18B"}];
    return function (input) {
      let game = $.grep(gameList, function (value, i) {
        return value.id === parseInt(input);
      });
      if (game.length) {
        return game[0].name;
      }
    };
  }).filter("bet", function () {
    let betList = [{id: 0, name: "Đề"}, {id: 1, name: "Lô"}, {id: 2, name: "Xiên 2"}, {id: 3, name: "Xiên 3"}, {id: 4, name: "Xiên 4"}, {id: 5, name: "Đề trượt"}, {id: 6, name: "Lô Trượt"}, {id: 7, name: "2D Đầu"}, {id: 8, name: "2D Đuôi"}, {id: 9, name: "2D 27Lô"}, {id: 10, name: "3D Đầu"}, {id: 11, name: "3D Đuôi", mb: "Đề 3 Càng"}, {id: 12, name: "3D 23Lô", mb: "Lô 3 Càng"}, {id: 13, name: "4D Đuôi", mb: "Đề 4 Càng"}, {id: 14, name: "4D 20Lô", mb: "Lô 4 Càng"}, {id: 15, name: "2D 18Lô"}, {id: 16, name: "2D 7Lô"}, {id: 17, name: "3D 17Lô"}, {id: 18, name: "3D 7Lô"}, {id: 19, name: "4D 16Lô"}, {id: 20, name: "Lô Live"}, {id: 21, name: "Đề Đầu"}, {id: 22, name: "Đề Giải 1"}, {id: 23, name: "Đề Đầu Giải 1", short: "Đề Đầu G1"}, {id: 24, name: "Đề Thần Tài", short: "Đề TT"}, {id: 25, name: "Đề Đầu Thần Tài", short: "Đề Đầu TT"}, {id: 26, name: "Live 3D", mb: "Live 3 Càng"}, {id: 27, name: "2D 18Lô Live"}, {id: 28, name: "Live 3D"}, {id: 29, name: "Lô Đầu"}, {id: 30, name: "2D 18Lô Đầu"}];
    return function (input, short, GameType) {
      GameType = parseInt(GameType);
      let bet = $.grep(betList, function (value, i) {
        return value.id === parseInt(input);
      });
      if (bet.length) {
        if (GameType === 0) {
          if (bet[0].mb !== undefined) {
            return bet[0].mb;
          } else {
            return bet[0].name;
          }
        }
        if (short && bet[0].short !== undefined) {
          return bet[0].short;
        } else {
          return bet[0].name;
        }
      }
    };
  }).filter("announcements", function () {
    return function (input) {
      if (input === "normal") {
        return "Thông thường";
      } else if (input === "special") {
        return "Quan Trọng";
      } else if (input === "system") {
        return "Hệ thống";
      } else {
        return "Cá nhân";
      }
    };
  }).filter("joinArr", function () {
    return function (input) {
      input = input.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
      });
      return input.join(", ");
    };
  }).filter("group", function () {
    var groups = [{id: 0, name: "Administrator"}, {id: 16, name: "Công ty"}, {id: 32, name: "Quản trị"}, {id: 64, name: "Cổ đông"}, {id: 128, name: "Tổng đại lý"}, {id: 256, name: "Đại lý"}, {id: 512, name: "Hội viên"}];
    function localization(input) {
      return $.grep(groups, function (value) {
        return value.id === parseInt(input);
      })[0].name;
    }
    localization.$stateful = true;
    return localization;
  }).filter("betfilter", function () {
    return function (input) {
      if (input === undefined) {
        return "Tất cả";
      } else {
        var output = [];
        var outbet = [];
        $.each(input, function (index, value) {
          if (value.gameType === 0) {
            outbet = [];
            if (value.betTypes === undefined) {
              outbet.push("Tất cả");
            } else {
              $.each(value.betTypes, function (i, bet) {
                if (bet === 0) {
                  outbet.push("Đề");
                }
                if (bet === 1) {
                  outbet.push("Lô");
                }
                if (bet === 2) {
                  outbet.push("Xiên 2");
                }
                if (bet === 3) {
                  outbet.push("Xiên 3");
                }
                if (bet === 4) {
                  outbet.push("Xiên 4");
                }
                if (bet === 5) {
                  outbet.push("Đề Trượt");
                }
                if (bet === 6) {
                  outbet.push("Lô Trượt");
                }
                if (bet === 21) {
                  outbet.push("Đề Đầu");
                }
                if (bet === 22) {
                  outbet.push("Đề Giải 1");
                }
                if (bet === 23) {
                  outbet.push("Đề Đầu Giải 1");
                }
                if (bet === 24) {
                  outbet.push("Đề Thần Tài");
                }
                if (bet === 25) {
                  outbet.push("Đề Đầu Thần Tài");
                }
              });
            }
            output.push("MB 1 (" + outbet.toString() + ")");
          }
          if (value.gameType === 1) {
            outbet = [];
            if (value.betTypes === undefined) {
              outbet.push("Tất cả");
            } else {
              $.each(value.betTypes, function (i, bet) {
                if (bet === 2) {
                  outbet.push("Xiên 2");
                }
                if (bet === 3) {
                  outbet.push("Xiên 3");
                }
                if (bet === 4) {
                  outbet.push("Xiên 4");
                }
                if (bet === 7) {
                  outbet.push("2D Đầu");
                }
                if (bet === 8) {
                  outbet.push("2D Đuôi");
                }
                if (bet === 9) {
                  outbet.push("2D 27Lô");
                }
                if (bet === 10) {
                  outbet.push("3D Đầu");
                }
                if (bet === 11) {
                  outbet.push("3D Đuôi");
                }
                if (bet === 12) {
                  outbet.push("3D 23Lô");
                }
                if (bet === 13) {
                  outbet.push("4D Đuôi");
                }
                if (bet === 14) {
                  outbet.push("4D 20Lô");
                }
              });
            }
            output.push("MB 2 (" + outbet.toString() + ")");
          }
          if (value.gameType === 2) {
            outbet = [];
            if (value.betTypes === undefined) {
              outbet.push("Tất cả");
            } else {
              $.each(value.betTypes, function (i, bet) {
                if (bet === 2) {
                  outbet.push("Xiên 2");
                }
                if (bet === 3) {
                  outbet.push("Xiên 3");
                }
                if (bet === 4) {
                  outbet.push("Xiên 4");
                }
                if (bet === 7) {
                  outbet.push("2D Đầu");
                }
                if (bet === 8) {
                  outbet.push("2D Đuôi");
                }
                if (bet === 15) {
                  outbet.push("2D 18Lô");
                }
                if (bet === 16) {
                  outbet.push("2D 7Lô");
                }
                if (bet === 10) {
                  outbet.push("3D Đầu");
                }
                if (bet === 11) {
                  outbet.push("3D Đuôi");
                }
                if (bet === 17) {
                  outbet.push("3D 17Lô");
                }
                if (bet === 18) {
                  outbet.push("3D 7Lô");
                }
                if (bet === 13) {
                  outbet.push("4D Đuôi");
                }
                if (bet === 19) {
                  outbet.push("4D 16Lô");
                }
              });
            }
            output.push("MN A (" + outbet.toString() + ")");
          }
          if (value.gameType === 3) {
            outbet = [];
            if (value.betTypes === undefined) {
              outbet.push("Tất cả");
            } else {
              $.each(value.betTypes, function (i, bet) {
                if (bet === 2) {
                  outbet.push("Xiên 2");
                }
                if (bet === 3) {
                  outbet.push("Xiên 3");
                }
                if (bet === 4) {
                  outbet.push("Xiên 4");
                }
                if (bet === 7) {
                  outbet.push("2D Đầu");
                }
                if (bet === 8) {
                  outbet.push("2D Đuôi");
                }
                if (bet === 15) {
                  outbet.push("2D 18Lô");
                }
                if (bet === 16) {
                  outbet.push("2D 7Lô");
                }
                if (bet === 10) {
                  outbet.push("3D Đầu");
                }
                if (bet === 11) {
                  outbet.push("3D Đuôi");
                }
                if (bet === 17) {
                  outbet.push("3D 17Lô");
                }
                if (bet === 18) {
                  outbet.push("3D 7Lô");
                }
                if (bet === 13) {
                  outbet.push("4D Đuôi");
                }
                if (bet === 19) {
                  outbet.push("4D 16Lô");
                }
              });
            }
            output.push("MN B (" + outbet.toString() + ")");
          }
          if (value.gameType === 4) {
            outbet = [];
            if (value.betTypes === undefined) {
              outbet.push("Tất cả");
            } else {
              $.each(value.betTypes, function (i, bet) {
                if (bet === 2) {
                  outbet.push("Xiên 2");
                }
                if (bet === 3) {
                  outbet.push("Xiên 3");
                }
                if (bet === 4) {
                  outbet.push("Xiên 4");
                }
                if (bet === 7) {
                  outbet.push("2D Đầu");
                }
                if (bet === 8) {
                  outbet.push("2D Đuôi");
                }
                if (bet === 15) {
                  outbet.push("2D 18Lô");
                }
                if (bet === 16) {
                  outbet.push("2D 7Lô");
                }
                if (bet === 10) {
                  outbet.push("3D Đầu");
                }
                if (bet === 11) {
                  outbet.push("3D Đuôi");
                }
                if (bet === 17) {
                  outbet.push("3D 17Lô");
                }
                if (bet === 18) {
                  outbet.push("3D 7Lô");
                }
                if (bet === 13) {
                  outbet.push("4D Đuôi");
                }
                if (bet === 19) {
                  outbet.push("4D 16Lô");
                }
              });
            }
            output.push("MN C (" + outbet.toString() + ")");
          }
          if (value.gameType === 5) {
            outbet = [];
            if (value.betTypes === undefined) {
              outbet.push("Tất cả");
            } else {
              $.each(value.betTypes, function (i, bet) {
                if (bet === 2) {
                  outbet.push("Xiên 2");
                }
                if (bet === 3) {
                  outbet.push("Xiên 3");
                }
                if (bet === 4) {
                  outbet.push("Xiên 4");
                }
              });
            }
            output.push("MN AB (" + outbet.toString() + ")");
          }
        });
        return output.toString();
      }
    };
  }).filter("sumByKey", function () {
    return function (data, key) {
      if (typeof data === "undefined" || typeof key === "undefined") {
        return 0;
      }
      var sum = 0;
      for (var i = data.length - 1; i >= 0; i--) {
        sum += parseInt(data[i][key]);
      }
      return sum;
    };
  }).filter("sumOfValue", function () {
    return function (data, key) {
      if (angular.isUndefined(data) || angular.isUndefined(key)) return 0;
      var sum = 0;
      angular.forEach(data, function (value) {
        var val = value[key] === undefined ? 0 : value[key];
        sum = sum + Math.floor(val);
      });
      return sum;
    };
  }).filter("words", function () {
    return function (value) {
      if (value && value % 1 === 0) return numberToText(value * 1e3);
      return value;
    };
  }).filter("term", function () {
    return function (input) {
      if (input !== undefined) {
        return input.substring(2).replace(/-/g, "");
      }
    };
  });
  let arText = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
  function readDozens(number, fully) {
    let string = "", dozen = Math.floor(number / 10), unit = number % 10;
    if (dozen > 1) {
      string = " " + arText[dozen] + " mươi";
      if (unit === 1) {
        string += " mốt";
      }
    } else if (dozen === 1) {
      string = " mười";
      if (unit === 1) {
        string += " một";
      }
    } else if (fully && unit > 0) {
      string = " lẻ";
    }
    if (unit === 5 && dozen >= 1) {
      string += " lăm";
    } else if (unit > 1 || unit === 1 && dozen === 0) {
      string += " " + arText[unit];
    }
    return string;
  }
  function readBlock(number, fully) {
    let string = "", hundred = Math.floor(number / 100);
    number = number % 100;
    if (fully || hundred > 0) {
      string = " " + arText[hundred] + " trăm";
      string += readDozens(number, true);
    } else {
      string = readDozens(number, false);
    }
    return string;
  }
  function readMillions(number, fully) {
    let string = "", million = Math.floor(number / 1e6);
    number = number % 1e6;
    if (million > 0) {
      string = readBlock(million, fully) + " triệu";
      fully = true;
    }
    let thousand = Math.floor(number / 1e3);
    number = number % 1e3;
    if (thousand > 0) {
      string += readBlock(thousand, fully) + " nghìn";
      fully = true;
    }
    if (number > 0) {
      string += readBlock(number, fully);
    }
    return string;
  }
  function numberToText(number) {
    if (number === 0) return " không";
    let string = "", suffixes = "";
    do {
      let Billion = number % 1e9;
      number = Math.floor(number / 1e9);
      if (number > 0) {
        string = readMillions(Billion, true) + suffixes + string;
      } else {
        string = readMillions(Billion, false) + suffixes + string;
      }
      suffixes = " tỷ";
    } while (number > 0);
    return string;
  }
}());
(function () {
  "use strict";
  angular.module("app.core").filter("filterByPropIds", filterByPropIds);
  function filterByPropIds() {
    return function (items, parameter, ids) {
      if (items.length === 0 || !ids || ids.length === 0) {
        return items;
      }
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var match = false;
        for (var j = 0; j < ids.length; j++) {
          var id = ids[j];
          if (item[parameter].indexOf(id) > -1) {
            match = true;
            break;
          }
        }
        if (match) {
          filtered.push(item);
        }
      }
      return filtered;
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.core").filter("filterByIds", filterByIds);
  function filterByIds() {
    return function (items, ids) {
      if (items.length === 0 || !ids) {
        return items;
      }
      if (ids.length === 0) {
        return [];
      }
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var match = false;
        for (var j = 0; j < ids.length; j++) {
          var id = ids[j];
          if (item.id === id) {
            match = true;
            break;
          }
        }
        if (match) {
          filtered.push(item);
        }
      }
      return filtered;
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.core").filter("toTrusted", toTrustedFilter).filter("htmlToPlaintext", htmlToPlainTextFilter).filter("nospace", nospaceFilter).filter("humanizeDoc", humanizeDocFilter);
  function toTrustedFilter($sce) {
    return function (value) {
      return $sce.trustAsHtml(value);
    };
  }
  function htmlToPlainTextFilter() {
    return function (text) {
      return String(text).replace(/<[^>]+>/gm, "").replace(/&nbsp;/g, " ");
    };
  }
  function nospaceFilter() {
    return function (value) {
      return !value ? "" : value.replace(/ /g, "");
    };
  }
  function humanizeDocFilter() {
    return function (doc) {
      if (!doc) {
        return;
      }
      if (doc.type === "directive") {
        return doc.name.replace(/([A-Z])/g, function ($1) {
          return "-" + $1.toLowerCase();
        });
      }
      return doc.label || doc.name;
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.core").filter("altDate", altDate);
  function altDate() {
    return function (value) {
      var diff = Date.now() - new Date(value);
      if (diff < 36e5) {
        return moment(value).fromNow();
      } else if (diff < 864e5) {
        return moment(value).format("HH:mm");
      } else if (diff < 6048e5) {
        return moment(value).format("dddd");
      } else {
        return moment(value).calendar();
      }
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.core").provider("fuseConfig", fuseConfigProvider);
  function fuseConfigProvider() {
    var fuseConfiguration = {disableCustomScrollbars: false, disableMdInkRippleOnMobile: true, disableCustomScrollbarsOnMobile: true};
    this.config = config;
    function config(configuration) {
      fuseConfiguration = angular.extend({}, fuseConfiguration, configuration);
    }
    this.$get = function () {
      var service = {getConfig: getConfig, setConfig: setConfig};
      return service;
      function getConfig(configName) {
        if (angular.isUndefined(fuseConfiguration[configName])) {
          return false;
        }
        return fuseConfiguration[configName];
      }
      function setConfig(configName, configValue) {
        fuseConfiguration[configName] = configValue;
      }
    };
  }
}());
(function () {
  "use strict";
  angular.module("app.toolbar").controller("ToolbarController", ToolbarController);
  function ToolbarController($rootScope, $scope, $q, $state, $timeout, $location, $mdSidenav, $mdDialog, $translate, $mdMedia, $mdToast, msNavigationService, aGames, network, message, Fullscreen, fuseTheming) {
    var vm = this;
    $scope.$mdMedia = $mdMedia;
    vm.bodyEl = angular.element("body");
    $rootScope.setTheme = setTheme;
    vm.toggleSidenav = toggleSidenav;
    vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
    vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
    $rootScope.gotoGame = gotoGame;
    vm.gotoGame = gotoGame;
    vm.showToolbar = showToolbar;
    vm.isFullscreen = isFullscreen;
    vm.setActiveTheme = setActiveTheme;
    vm.viewNotification = viewNotification;
    vm.aGames = aGames.data;
    msNavigationService.saveItem("one.wm-casino", {title: "WM CASINO", icon: "icon-wm-casino", weight: 4});
    angular.forEach(vm.aGames, function (item) {
      msNavigationService.saveItem("one.wm-casino." + item.interName, {title: item.name, state: "app.game", stateParams: {id: item.interName}, hidden: function () {
        return item.hidden;
      }});
    });
    $rootScope.setupTheme = localStorage.getItem("setupTheme") === null ? "auto" : localStorage.getItem("setupTheme");
    $timeout(function () {
      vm.setActiveTheme($rootScope.setupTheme);
    }, 2e3);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (event) {
      let newColorScheme = event.matches ? "default" : "tealTheme";
      if ($rootScope.setupTheme === "auto") {
        fuseTheming.setActiveTheme(newColorScheme);
      }
    });
    function setTheme(theme) {
      $rootScope.setupTheme = theme;
      localStorage.setItem("setupTheme", theme);
      vm.setActiveTheme(theme);
    }
    function setActiveTheme(theme) {
      if (theme === "auto" || theme === null) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          fuseTheming.setActiveTheme("default");
        } else {
          fuseTheming.setActiveTheme("tealTheme");
        }
      } else {
        fuseTheming.setActiveTheme(theme);
      }
    }
    function viewNotification(item) {
      if (!item.Read) {
        network.Communication.Notification.read({Id: item.Id}).then(function (response) {
          item.Read = true;
          $scope.$digest();
        });
      }
      if (item.Category === 0) {
        $state.go("app.announcements.threads", {filter: "system"}).then(function () {
          $state.go("app.announcements.threads.thread", {threadId: item.Id});
        });
      } else if (item.Category === 1) {
        $state.go("app.announcements.threads", {filter: "normal"}).then(function () {
          $state.go("app.announcements.threads.thread", {threadId: item.Id});
        });
      } else if (item.Category === 2) {
        $state.go("app.announcements.threads", {filter: "special"}).then(function () {
          $state.go("app.announcements.threads.thread", {threadId: item.Id});
        });
      } else if (item.Category === 3) {
        $state.go("app.announcements.threads", {filter: "personal"}).then(function () {
          $state.go("app.announcements.threads.thread", {threadId: item.Id});
        });
      }
    }
    function gotoGame(item, $event) {
      if ($rootScope.isAuthenticated && $rootScope.User.Suspended) {
        message.show("Tài khoản của quý khách đang không được phép đặt cược.");
      } else {
        if (item === "lobby") {
          console.log("ss");
          $state.go("app.casino");
        } else {
          $state.go("app.game", {id: item.interName});
        }
      }
    }
    vm.headerMenus = [{name: "Miền Bắc", state: "app.traditional.northern.jackpot", img: "assets/images/production/bac.jpg"}, {name: "Miền Nam", state: "app.traditional.southern.2d.dau", img: "assets/images/production/nam.jpg"}];
    vm.headerMegaMenus = [{name: "Miền Bắc 1", state: "app.traditional.northern.jackpot", sub: [{name: "Đề", state: "app.traditional.northern.jackpot"}, {name: "Đề đầu", state: "app.traditional.northern.head-jackpot"}, {name: "Đề giải 1", state: "app.traditional.northern.first"}, {name: "Đề đầu giải 1", state: "app.traditional.northern.head-first"}, {name: "Đề Thần Tài", state: "app.traditional.northern.caishen"}, {name: "Đề đầu Thần Tài", state: "app.traditional.northern.head-caishen"}, {name: "Lô", state: "app.traditional.northern.lotto"}, {name: "Lô Live", state: "app.traditional.northern.live"}, {name: "Lô Xiên", state: "app.traditional.northern.parlay"}, {name: "Đề trượt", state: "app.traditional.northern.except-jackpot"}, {name: "Lô trượt", state: "app.traditional.northern.except-lotto"}, {name: "", state: ""}]}, {name: "Miền Bắc 2", state: "app.traditional.northern-2nd.2d.dau", sub: [{name: "2D Đầu", state: "app.traditional.northern-2nd.2d.dau"}, {name: "2D Đuôi", state: "app.traditional.northern-2nd.2d.duoi"}, {name: "2D 27Lô", state: "app.traditional.northern-2nd.2d.27lo"}, {name: "3D Đầu", state: "app.traditional.northern-2nd.3d.dau"}, {name: "3D Đuôi", state: "app.traditional.northern-2nd.3d.duoi"}, {name: "3D 23Lô", state: "app.traditional.northern-2nd.3d.23lo"}, {name: "4D Đuôi", state: "app.traditional.northern-2nd.4d.duoi"}, {name: "4D 20Lô", state: "app.traditional.northern-2nd.4d.20lo"}, {name: "Lô Xiên", state: "app.traditional.northern-2nd.parlay"}, {name: "Lô Live", state: "app.traditional.northern-2nd.live"}]}, {name: "Miền Nam", state: "app.traditional.southern.2d.dau", sub: [{name: "2D Đầu", state: "app.traditional.southern.2d.dau"}, {name: "2D Đuôi", state: "app.traditional.southern.2d.duoi"}, {name: "2D 18Lô", state: "app.traditional.southern.2d.18lo"}, {name: "3D Đầu", state: "app.traditional.southern.3d.dau"}, {name: "3D Đuôi", state: "app.traditional.southern.3d.duoi"}, {name: "3D 17Lô", state: "app.traditional.southern.3d.17lo"}, {name: "3D 7Lô", state: "app.traditional.southern.3d.7lo"}, {name: "4D Đuôi", state: "app.traditional.southern.4d.duoi"}, {name: "4D 16Lô", state: "app.traditional.southern.4d.16lo"}, {name: "Xiên 2", state: "app.traditional.southern.parlay.pair-2"}, {name: "Xiên 3", state: "app.traditional.southern.parlay.pair-3"}, {name: "Xiên 4", state: "app.traditional.southern.parlay.pair-4"}, {name: "7 Lô", state: "app.traditional.southern.7lo"}, {name: "", state: ""}]}, {name: "Xiên 18A+B", state: "app.traditional.18ab", sub: [{name: "Xiên 2", state: "app.traditional.18ab"}, {name: "Xiên 3", state: "app.traditional.18ab"}, {name: "Xiên 4", state: "app.traditional.18ab"}, {name: "", state: ""}]}];
    function toggleSidenav(sidenavId) {
      $mdSidenav(sidenavId).toggle();
    }
    function toggleHorizontalMobileMenu() {
      vm.bodyEl.toggleClass("ms-navigation-horizontal-mobile-menu-active");
    }
    function toggleMsNavigationFolded() {
      msNavigationService.toggleFolded();
    }
    function isFullscreen() {
      angular.element("html").addClass("is-fullscreen");
    }
    function showToolbar() {
      angular.element("html").removeClass("is-fullscreen");
      if (Fullscreen.isEnabled()) {
        Fullscreen.cancel();
      }
    }
    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler, false);
      document.addEventListener("mozfullscreenchange", exitHandler, false);
      document.addEventListener("MSFullscreenChange", exitHandler, false);
      document.addEventListener("webkitfullscreenchange", exitHandler, false);
    }
    function exitHandler() {
      if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null) {
        if (!Fullscreen.isEnabled()) {
          angular.element("html").removeClass("is-fullscreen");
        }
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.navigation", []).config(config);
  function config() {}
}());
(function () {
  "use strict";
  angular.module("app.navigation").controller("NavigationController", NavigationController);
  function NavigationController($scope, fuseTheming) {
    var vm = this;
    vm.bodyEl = angular.element("body");
    vm.folded = false;
    vm.msScrollOptions = {suppressScrollX: true};
    vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
    function toggleMsNavigationFolded() {
      vm.folded = !vm.folded;
    }
    $scope.$on("$stateChangeSuccess", function () {
      vm.bodyEl.removeClass("ms-navigation-horizontal-mobile-menu-active");
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.quick-panel").controller("QuickPanelController", QuickPanelController);
  function QuickPanelController(msApi) {
    var vm = this;
    vm.date = new Date;
    vm.settings = {notify: true, cloud: false, retro: true};
    msApi.request("quickPanel.activities@get", {}, function (response) {
      vm.activities = response.data;
    });
    msApi.request("quickPanel.events@get", {}, function (response) {
      vm.events = response.data;
    });
    msApi.request("quickPanel.notes@get", {}, function (response) {
      vm.notes = response.data;
    });
  }
}());
(function () {
  "use strict";
  angular.module("fuse", ["app.core", "app.navigation", "app.toolbar", "app.quick-panel", "app.home", "app.account", "app.game", "app.presidential", "app.casino", "app.announcements", "app.traditional", "app.legendary", "app.results", "app.auth", "app.saba", "app.wiki"]);
}());
(function () {
  "use strict";
  angular.module("fuse").controller("MainController", MainController);
  function MainController($scope, $rootScope) {
    var one = this;
    $scope.$on("$viewContentAnimationEnded", function (event) {
      if (event.targetScope.$id === $scope.$id) {
        $rootScope.$broadcast("msSplashScreen::remove");
      }
    });
  }
}());
(function () {
  "use strict";
  angular.module("app.core").run(runBlock);
  function runBlock(msUtils, fuseGenerator, fuseConfig) {
    fuseGenerator.generate();
    if (fuseConfig.getConfig("disableMdInkRippleOnMobile") && msUtils.isMobile()) {
      var bodyEl = angular.element("body");
      bodyEl.attr("md-no-ink", true);
    }
    if (msUtils.isMobile()) {
      angular.element("html").addClass("is-mobile");
    }
    var browserInfo = msUtils.detectBrowser();
    if (browserInfo) {
      var htmlClass = browserInfo.browser + " " + browserInfo.version + " " + browserInfo.os;
      angular.element("html").addClass(htmlClass);
    }
  }
}());
(function () {
  "use strict";
  angular.module("app.core").config(config);
  function config($ariaProvider, $logProvider, msScrollConfigProvider, fuseConfigProvider) {
    $logProvider.debugEnabled(true);
    $ariaProvider.config({tabindex: false});
    fuseConfigProvider.config({disableCustomScrollbars: false, disableCustomScrollbarsOnMobile: true, disableMdInkRippleOnMobile: true});
    msScrollConfigProvider.config({wheelPropagation: true});
  }
}());
(function () {
  "use strict";
  angular.module("app.account").controller("accountPanelCtrl", accountPanelCtrl);
  function accountPanelCtrl($mdSidenav) {
    var vm = this;
    vm.closeSidenav = closeSidenav;
    function closeSidenav() {
      $mdSidenav("account-panel").close();
    }
  }
}());
(function () {
  "use strict";
  angular.module("fuse").run(runBlock);
  function runBlock($rootScope, $timeout, $state, $location) {
    var stateChangeStartEvent = $rootScope.$on("$stateChangeStart", function () {
      $rootScope.loadingProgress = true;
    });
    var stateChangeSuccessEvent = $rootScope.$on("$stateChangeSuccess", function () {
      $timeout(function () {
        $rootScope.loadingProgress = false;
      });
    });
    $rootScope.state = $state;
    $rootScope.$on("$destroy", function () {
      stateChangeStartEvent();
      stateChangeSuccessEvent();
    });
    let urls, UserPoolId, UserPoolClientId;
    if ($location.host() === "nothing88.net" || $location.host() === "demo.nothing88.net" || $location.host() === "localhost") {
      urls = {Lottery: "https://lotto.rst9.net", Identity: "https://id.rst9.net", WMCasino: "https://wm.rst9.net", Communication: "https://comm.rst9.net", Reporting: "https://reporting.rst9.net", Lottery789: "https://lotto789.rst9.net", TelegramChatApp: "https://common.rst9.net/telegram", Saba: "https://sb.rst9.net", SenCasino: {Base: "https://sen.rst9.net", Games: {Sedie: "https://sen-sedie.rst9.net", Politics: "https://sen-politics.rst9.net"}}};
      UserPoolId = "ap-southeast-1_7qZOytT0i";
      UserPoolClientId = "67s4egt2pqcotjdt0hg3h95fll";
    } else {
      urls = {Lottery: "https://lotto.lotusapi.com", Identity: "https://id.lotusapi.com", WMCasino: "https://wm.lotusapi.com", Communication: "https://comm.lotusapi.com", Reporting: "https://report.lotusapi.com", Lottery789: "https://lotto789.lotusapi.com", TelegramChatApp: "https://common.lotusapi.com/telegram", Saba: "https://sb.lotusapi.com", SenCasino: {Base: "https://sen.lotusapi.com", Games: {Sedie: "https://sen-sedie.lotusapi.com", Politics: "https://sen-politics.lotusapi.com"}}};
      UserPoolId = "ap-southeast-1_rz3gbsuS3";
      UserPoolClientId = "29js9qodnnghp3n09589nbu7bb";
    }
    Lotus.configure({Urls: urls, UserPoolId: UserPoolId, UserPoolClientId: UserPoolClientId, AdvancedSecurityDataCollectionFlag: true});
  }
}());
(function () {
  "use strict";
  angular.module("fuse").config(routeConfig);
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, msApiProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    let $cookies;
    angular.injector(["ngCookies"]).invoke(["$cookies", function (_$cookies) {
      $cookies = _$cookies;
    }]);
    $stateProvider.state("app", {abstract: true, views: {"main@": {templateUrl: "app/core/layouts/content-account.html", controller: "MainController as one"}, "toolbar@app": {templateUrl: "app/toolbar/layouts/vertical-navigation/toolbar.html", controller: "ToolbarController as vm"}, "navigation@app": {templateUrl: "app/navigation/layouts/vertical-navigation/navigation.html", controller: "NavigationController as vm"}, "accountPanel@app": {templateUrl: "app/account-panel/account-panel.html", controller: "accountPanelCtrl as vm"}}, resolve: {aGames: function (msApi) {
      return msApi.resolve("wm-game@get");
    }}});
    msApiProvider.register("wm-game", ["app/data/games.json"]);
  }
}());
(function () {
  "use strict";
  angular.module("fuse").controller("IndexController", IndexController);
  function IndexController($rootScope, $scope, $interval, $timeout, $state, $document, $mdMedia, $location, $filter, $mdDialog, $mdSidenav, $anchorScroll, $window, fuseTheming, network, msUtils, message, Analytics) {
    var vm = this;
    vm.themes = fuseTheming.themes;
    $rootScope.connectState = undefined;
    $rootScope.joinedServer = false;
    vm.userInfo = userInfo;
    vm.publicNotifications = publicNotifications;
    vm.getNotificationsOnSection = getNotificationsOnSection;
    $rootScope.bellUnRead = 0;
    vm.countUnRead = countUnRead;
    $rootScope.updateBalance = updateBalance;
    $rootScope.signOut = signOut;
    $rootScope.popupLogin = popupLogin;
    $rootScope.quickLogin = quickLogin;
    $rootScope.gotoCasino = gotoCasino;
    $rootScope.gotoSaba = gotoSaba;
    vm.ConnectServer = ConnectServer;
    vm.mustChangePassword = mustChangePassword;
    vm.setNotify = setNotify;
    vm.commitBetting = commitBetting;
    vm.sendBettingRequest = sendBettingRequest;
    vm.checkPlayingGame = checkPlayingGame;
    vm.showAds = showAds;
    vm.marquee = marquee;
    vm.showPopup = showPopup;
    vm.earlier = "https://earlier." + $location.host();
    $rootScope.$on("$stateChangeSuccess", function () {
      if ($mdMedia("max-width: 959px")) {
        $timeout(function () {
          $mdSidenav("navigation").close();
        }, 100);
      }
      $rootScope.isSaba = $location.path() === "/saba";
      $rootScope.isCasino = msUtils.exists($location.path().split("/")[1], ["casino", "live-casino"]);
      Lotus.User.isAuthenticated().then(function (authenticated) {
        $rootScope.isAuthenticated = authenticated;
        if (authenticated) {
          if ($rootScope.state.current.url === "/auth" || $rootScope.state.current.url === "/auth?force&reload") {
            $state.go("app.home");
          } else {
            if ($rootScope.User === undefined) {
              vm.userInfo();
            }
          }
          if ($rootScope.connectState === "Closed" || $rootScope.connectState === "Failed") {
            vm.ConnectServer();
          }
        } else {
          vm.publicNotifications();
        }
      });
      vm.checkPlayingGame();
      if ($rootScope.isAuthenticated) {}
    });
    function mustChangePassword() {
      if (!msUtils.exists($location.path(), ["/account/change-password", "/account/otp", "/auth/otp"])) {
        $state.go("app.auth.expired");
      }
      $timeout(function () {
        if ($rootScope.User.MustChangePassword) {
          vm.mustChangePassword();
        }
      }, 1e3);
    }
    function setNotify() {
      if (!msUtils.exists($location.path(), ["/my/otp", "/my/password", "/auth"])) {
        $rootScope.passwordExpired = $rootScope.User.MustChangePasswordNotify;
      }
    }
    function gotoCasino($event) {
      if ($rootScope.isAuthenticated) {
        if (!$rootScope.User.Suspended) {
          $rootScope.gotoGame("lobby", $event);
        } else {
          message.show("Tài khoản của quý khách đang không được phép đặt cược.");
        }
      } else {
        $rootScope.gotoGame("lobby", $event);
      }
    }
    function popupLogin($event) {
      $rootScope.returnUrl = $location.url();
      $mdDialog.show({controller: authCtrl, templateUrl: "app/main/auth/auth.dialog.html", parent: angular.element(document.body), targetEvent: $event, clickOutsideToClose: true, fullscreen: true});
      function authCtrl($scope, $location, message) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        if ($location.host() === "localhost") {
          $scope.form = {username: "BTKF0211102", password: "WwVPjP1TeRGi0ZLGzxjR-"};
        }
        $scope.show = false;
        $scope.showText = "SHOW";
        $scope.showPassword = function () {
          $scope.show = !$scope.show;
          $scope.showText = $scope.show ? "HIDE" : "SHOW";
        };
        $scope.login = function () {
          $scope.submitting = true;
          network.User.authenticate($scope.form).then(function (response) {
            $mdDialog.cancel();
            if (Object.keys(response).length === 0) {
              $state.go("app.auth.agreement");
            } else if (response.RequireAction === "NEW_PASSWORD_REQUIRED") {
              $state.go("app.auth.set-password");
            } else if (response.RequireAction === "SOFTWARE_TOKEN_MFA") {
              $state.go("app.auth.otp");
            }
            $scope.$digest();
          }).catch(function (error) {
            $scope.submitting = false;
            if (error.code === "UserLambdaValidationException" || error.code === "UserBlockedException") {
              message.show("Tài khoản của quý khách đang tạm ngừng phục vụ");
            } else if (error.code === "NotAuthorizedException" || error.code === "UserNotFoundException") {
              message.show("Tên người dùng hoặc mật khẩu không chính xác");
            } else {
              message.show(error.message);
            }
          });
        };
      }
    }
    $rootScope.quick = {username: "", password: ""};
    function quickLogin() {
      sessionStorage.removeItem("lastClick");
      $rootScope.returnUrl = $location.url();
      if ($rootScope.quick.username.length < 4 || $rootScope.quick.password.length < 6) {
        message.show("Tài khoản hoặc mật khẩu không hợp lệ");
      } else {
        $rootScope.submitting = true;
        network.User.authenticate($rootScope.quick).then(function (response) {
          $rootScope.submitting = false;
          if (Object.keys(response).length === 0) {
            $state.go("app.auth.agreement");
          } else if (response.RequireAction === "NEW_PASSWORD_REQUIRED") {
            $state.go("app.auth.set-password");
          } else if (response.RequireAction === "SOFTWARE_TOKEN_MFA") {
            $state.go("app.auth.otp");
          }
          $scope.$digest();
        }).catch(function (error) {
          $rootScope.submitting = false;
          if (error.code === "UserLambdaValidationException" || error.code === "UserBlockedException") {
            message.show("Tài khoản của quý khách đang tạm ngừng phục vụ");
          } else if (error.code === "NotAuthorizedException" || error.code === "UserNotFoundException") {
            message.show("Tên người dùng hoặc mật khẩu không chính xác");
          } else {
            message.show(error.message);
          }
        });
      }
    }
    function userInfo() {
      network.User.me({bypassCache: false}).then(function (resp) {
        $rootScope.User = resp;
        $rootScope.$digest();
        $timeout(function () {
          vm.getNotificationsOnSection();
          vm.ConnectServer();
          $rootScope.$broadcast("JoinServer");
          if ($rootScope.User.MustChangePassword) {
            vm.mustChangePassword();
          }
          if ($rootScope.User.MustChangePasswordNotify !== undefined) {
            vm.setNotify();
          }
        }, 500);
      });
      $timeout(function () {
        $rootScope.$broadcast("userAccount::update");
      });
    }
    function signOut() {
      $rootScope.joinedServer = false;
      Lotus.User.Current.signOut();
      $rootScope.User = undefined;
      $rootScope.myParameters = undefined;
      $timeout(function () {
        $window.location = "/";
      }, 100);
    }
    function updateBalance() {
      $rootScope.User.updating = true;
      $timeout(function () {
        Lotus.User.Wallet.getBalance().then(function (response) {
          $rootScope.User.Balance = response.Balance;
          delete $rootScope.User.updating;
        });
      }, 5e3);
    }
    $scope.$on("userAccount::update", function () {
      network.User.me({bypassCache: true}).then(function (resp) {
        $rootScope.User = resp;
        $rootScope.$digest();
        $rootScope.$broadcast("userAccount::updateComplete");
      });
    });
    $scope.$on("userAccount::updateComplete", function () {
      if ($rootScope.User.MfaRequired && $rootScope.User.MfaType !== 1) {
        $state.go("app.auth.enable-otp");
      } else if ($location.path() === "/auth/set-password" || $location.path() === "/auth" || $location.path() === "/auth/enable-otp" || $location.path() === "/auth/otp") {
        $window.location.href = "/auth/agreement";
      }
      $timeout(function () {
        $rootScope.crucialMessage = $rootScope.User.Suspended ? "Tài khoản của quý khách đang không được phép đặt cược." : undefined;
      }, 1e3);
    });
    $scope.$on("userAccount::signOut", function () {
      $rootScope.signOut();
    });
    let countConnected = 0;
    function ConnectServer() {
      $rootScope.connectState = "Connect";
      Lotus.Realtime.connect().then(function () {
        $rootScope.connectState = "Init";
        Lotus.Realtime.Connection.on("connecting", function () {
          console.log("connecting");
          $rootScope.connectState = "Connecting";
        });
        Lotus.Realtime.Connection.on("disconnected", function () {
          console.log("disconnected");
          $rootScope.connectState = "Disconnected";
          Analytics.trackEvent("Realtime", "Disconnected", $rootScope.User.Username);
        });
        Lotus.Realtime.Connection.on("closed", function () {
          console.log("Closed");
          $rootScope.connectState = "Closed";
          Analytics.trackEvent("Realtime", "Closed", $rootScope.User.Username);
        });
        Lotus.Realtime.Connection.on("closing", function () {
          console.log("closing");
          $rootScope.connectState = "Closing";
          Analytics.trackEvent("Realtime", "Closing", $rootScope.User.Username);
        });
        Lotus.Realtime.Connection.on("suspended", function () {
          console.log("Suspended");
          $rootScope.connectState = "Suspended";
          Analytics.trackEvent("Realtime", "Suspended", $rootScope.User.Username);
          message.show("Không kết nối được đến Server. Quý khách vui lòng kiểm tra lại kết nối mạng và Refresh (F5) lại Website");
        });
        Lotus.Realtime.Connection.on("connected", function () {
          console.log("Connected");
          countConnected++;
          $rootScope.connectState = "Connected";
          if (!$rootScope.joinedServer) {
            $rootScope.joinedServer = true;
            if (countConnected === 1) {
              Lotus.User.Realtime.subcribe().then(function () {
                console.log("Subscribed");
                Lotus.User.Realtime.on("self:event:0", function (data, mes) {
                  Lotus.User.Current.getSession().then(function (session) {
                    let authTime = session.getIdToken().getAuthTime();
                    if (authTime !== data.AuthTime) {
                      let mess = data.Message.length !== 0 ? data.Message : "Phiên đăng nhập của quý khách đã hết hạn. Quý khách vui lòng đăng nhập lại";
                      message.show(mess);
                      Lotus.User.Current.signOut();
                      $rootScope.User = undefined;
                      $rootScope.joinedServer = false;
                      $rootScope.isAuthenticated = false;
                      $state.go("app.home");
                    }
                  });
                });
                Lotus.User.Realtime.on("ancestor:event:0", function (data) {
                  $rootScope.$broadcast("userAccount::signOut");
                  message.show(data.Message + "Quý khách vui lòng đăng nhập lại để tiếp tục");
                });
                Lotus.User.Realtime.on("ancestor:event:1", function (data, message) {});
                Lotus.User.Realtime.on("general:event:3001", function (data) {
                  message.popup(data.Message);
                });
                Lotus.User.Realtime.on("self:event:3001", function (data) {
                  message.popup(data.Message);
                });
              });
            }
          }
        });
        Lotus.Realtime.Connection.on("failed", function () {
          $rootScope.connectState = "Failed";
          Analytics.trackEvent("Realtime", "Failed", $rootScope.User.Username);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
    function getNotificationsOnSection() {
      $rootScope.bellNotifications = [];
      $rootScope.setInfoBarContents = [];
      network.Communication.Notification.getNotificationsOnSection().then(function (response) {
        angular.forEach(response, function (no) {
          if (msUtils.exists(2, no.DisplaySections)) {
            $rootScope.bellNotifications.push(no);
          }
          if (msUtils.exists(1, no.DisplaySections)) {
            $rootScope.setInfoBarContents.push(no);
          }
        });
        $rootScope.setInfoBarContents = $rootScope.setInfoBarContents.sort(function (a, b) {
          return a.Code - b.Code;
        });
        if ($rootScope.setInfoBarContents.length) {
          vm.marquee();
        }
        vm.countUnRead();
        vm.popupMessages = response.filter(function (res) {
          return msUtils.exists(0, res.DisplaySections);
        });
        if (vm.popupMessages.length) {
          if ($state.current.name !== "app.auth.agreement" && $state.current.name !== "app.casino" && $state.current.name !== "app.casino.single") {
            message.popup(vm.popupMessages[0].Message);
          }
        }
      });
    }
    function publicNotifications() {
      if ($rootScope.setInfoBarContents === undefined) {
        network.Public.Communication.Notification.latest().then(function (response) {
          $rootScope.setInfoBarContents = response.sort(function (a, b) {
            return a.Code - b.Code;
          });
          if ($rootScope.setInfoBarContents.length) {
            vm.marquee();
          }
          $scope.$digest();
        });
      }
    }
    function marquee() {
      let mIndex = 0;
      $interval(function () {
        mIndex += 1;
        if (document.getElementById("marquee-id")) {
          let windowSize = document.getElementById("marquee-id").clientWidth;
          let contentSize = document.getElementById("marquee-id-inner").clientWidth;
          let textIndent = windowSize / 2 - 100 - mIndex;
          if (textIndent < -windowSize / 2) {
            mIndex = 0;
          }
          $rootScope.marqueeStyle = {"text-indent": textIndent};
        }
      }, 50);
    }
    function countUnRead() {
      $rootScope.bellUnRead = 0;
      angular.forEach($rootScope.bellNotifications, function (no) {
        if (!no.Read) {
          $rootScope.bellUnRead++;
        }
      });
      if ($rootScope.bellUnRead !== 0) {}
    }
    vm.callbackApproved = callbackApproved;
    $rootScope.data = {closePanel: false};
    $rootScope.latestTicket = [];
    $rootScope.sabaProductions = [{name: "Bóng đá", class: "football", game: "", cover: "assets/images/saba/Product_Soccer.jpg", icon: "assets/images/production/saba/icon-football.png", description: "Đặt cược và đắm mình trong môn thể thao phổ biến nhất thế giới"}, {name: "Cổng Game SABA", class: "saba-game", game: "Vgaming", cover: "assets/images/saba/SabaClub.jpg", icon: "assets/images/production/saba/icon-headphone.png", description: "Đại tiệc Game Việt"}, {name: "", class: "e-sports", game: "", cover: "assets/images/saba/SabaScore.jpg", icon: "assets/images/production/saba/icon-headphone.png", description: ""}, {name: "Bóng rổ", class: "basketball", game: "", cover: "assets/images/saba/Product_Basketball.jpg", icon: "assets/images/production/saba/basketball.png", description: "Những cú Swish hoàn hảo"}, {name: "Thể Thao Điện Tử", class: "e-sports", game: "esports", cover: "assets/images/saba/sport_esports.jpg", icon: "assets/images/production/saba/icon-football.png", description: "Đặt cược vào các đội yêu thích trong các giải đấu trực tuyến hàng đầu"}, {name: "Thể Thao Ảo", class: "virtual-sports", game: "", cover: "assets/images/saba/Product_VirtualSports.jpg", icon: "assets/images/production/saba/icon-football.png", description: "Tận hưởng các trận đấu trực tuyến mà không phải chờ đợi"}, {name: "Number Game", class: "number-game", game: "kenolottery", cover: "assets/images/saba/Product_NumberGame.jpg", icon: "assets/images/production/saba/icon_basketball.png", description: "Đặt cược vào những con số may mắn"}, {name: "Trò chơi", class: "gaming", game: "", cover: "assets/images/saba/Product_Gaming.jpg", icon: "assets/images/production/saba/icon-football.png", description: "Slot, card và table game cùng rất nhiều lựa chọn"}, {name: "RNG Keno", class: "keno", game: "keno", cover: "assets/images/saba/Product_Keno.jpg", icon: "assets/images/production/saba/icon-football.png", description: "10+ RNG Keno games"}];
    function gotoSaba(item) {
      $state.go("app.saba", {game: item.game});
    }
    function callbackApproved(tick) {
      let newTicket = {TicketNumber: tick.TicketNumber, GameType: tick.GameType, BetType: tick.BetType, Point: 0, Numbers: [], Amount: tick.Amount, Status: 1, PrizeNr: tick.PrizeNr, CancelLimitInSec: 300};
      angular.forEach(tick.Items, function (item) {
        newTicket.Point += item.Point;
        newTicket.Numbers = newTicket.Numbers.concat(item.Numbers);
      });
      newTicket.Numbers = newTicket.Numbers.filter(function (item, b, self) {
        return self.indexOf(item) === b;
      });
      $rootScope.latestTicket.push(newTicket);
      $rootScope.latestTicket = msUtils.removeDuplicates($rootScope.latestTicket, "TicketNumber");
      $rootScope.latestTicket.sort(function (a, b) {
        return b.TicketNumber - a.TicketNumber;
      });
    }
    $rootScope.$on("EventBetting", function (event, data) {
      if (!$rootScope.isAuthenticated) {
        $rootScope.popupLogin();
        return;
      }
      if ($rootScope.User.Suspended) {
        message.show("Tài khoản của quý khách đang không được phép đặt cược.");
        Analytics.trackEvent("BETTING-TRAD", "User Suspended", $rootScope.User.Username);
        return;
      }
      let costMoney = 0;
      angular.forEach(data.betObj.Tickets, function (ticket) {
        costMoney += $filter("sumMoneyCost")(ticket);
      });
      if (costMoney > $rootScope.User.Balance) {
        message.show("Số dư tài khoản quý khách không đủ để thực hiện toàn bộ đơn cược.");
        Analytics.trackEvent("BETTING-TRAD", "BALANCE LOW", $rootScope.User.Username);
        return;
      }
      if (JSON.parse(sessionStorage.getItem("always")) !== null) {
        vm.sendBettingRequest(data.betObj);
      } else {
        vm.commitBetting(data);
      }
      let IgnorePrice = data.betObj.IgnorePrice === true ? "" : "-NotIgnorePrice";
      Analytics.trackEvent("BETTING-TRAD", "BETTING" + IgnorePrice, $rootScope.User.Username);
    });
    function commitBetting(data) {
      if (data.sumObj.numbers.length === 0) {
        message.show("Danh sách đặt cược không hợp lệ");
        return;
      }
      $mdDialog.show({controller: commitBettingCtrl, templateUrl: "app/main/legendary/betting/prompt.dialog.html", multiple: true, clickOutsideToClose: true, locals: {point: vm.toPoint, money: vm.totalMoney, numbers: vm.selected}});
      function commitBettingCtrl($rootScope, $scope, $mdDialog, $filter, point, money, numbers) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.alwaysBetting = false;
        $scope.Point = data.sumObj.point;
        $scope.costMoney = data.sumObj.money;
        $scope.numbers = data.sumObj.numbers.toString().replace(/\,+/g, ", ");
        $scope.done = function () {
          if ($scope.alwaysBetting) {
            sessionStorage.setItem("always", "true");
          }
          vm.sendBettingRequest(data.betObj);
        };
      }
    }
    function sendBettingRequest(betObj) {
      $rootScope.$broadcast("ResetBetting");
      $mdDialog.show({locals: {item: betObj, callback: vm.callbackApproved}, clickOutsideToClose: false, escapeToClose: false, controllerAs: "ctrl", templateUrl: "app/main/traditional/betting/betting.html", controller: bettingDialogCtrl});
      function bettingDialogCtrl($rootScope, $scope, $mdDialog, $mdMedia, item) {
        $scope.$mdMedia = $mdMedia;
        $scope.showAction = false;
        $scope.tick = {success: 0, total: 0, answered: 0};
        $scope.betTx = [];
        $scope.cancel = function () {
          $mdDialog.hide();
          $timeout.cancel($scope.autoCallback);
          $timeout.cancel($scope.autoMobilize);
        };
        $scope.tickets = angular.copy(item);
        if (item.legend) {
          network.Legend.Play(item).then(function (resp) {
            $scope.processing(resp);
          }).catch(function (error) {
            message.show(error.message);
          });
        } else {
          network.Games.Play(item).then(function (resp) {
            $scope.processing(resp);
          }).catch(function (error) {
            message.show(error.message);
          });
        }
        $scope.processing = function (resp) {
          $scope.betTx = resp;
          $scope.tick.total = resp.length;
          angular.forEach($scope.tickets.Tickets, function (tick, index) {
            tick.Tx = resp[index].Tx;
            tick.status = "processing";
          });
          let timeAutoCheck = $scope.tickets.Tickets.length < 30 ? 10 : $scope.tickets.Tickets.length;
          $scope.autoCallback = $timeout(function () {
            $scope.checkTicket();
          }, timeAutoCheck * 1e3);
          $scope.autoMobilize = $timeout(function () {
            $scope.Mobilize = "Quá trình đặt cược diễn ra hơi lâu hơn bình thường. Quý khách vui lòng kiên nhẫn chờ thêm vài giây nữa.";
          }, timeAutoCheck * 1e3 * 2 / 3);
        };
        $scope.$on("ticketApproved", function ($event, aDatas) {
          angular.forEach(aDatas, function (data) {
            angular.forEach($scope.tickets.Tickets, function (tick) {
              if (tick.Tx === data.Tx && tick.status === "processing") {
                tick.status = "approved";
                $rootScope.User.Balance -= data.Amount;
                tick.TicketNumber = data.TicketNumber;
                tick.Amount = data.Amount;
                tick.PrizeNr = data.PrizeNr;
                $scope.tick.success++;
                $scope.countAnswer();
                vm.callbackApproved(tick);
              }
            });
          });
          if ($scope.tick.success >= $scope.tick.total) {
            $timeout(function () {
              $scope.allDone = true;
              if ($rootScope.data.closePanel) {
                $timeout(function () {
                  $scope.cancel();
                  $rootScope.$broadcast("allCompleted");
                }, 1e3);
              } else {
                $scope.showAction = true;
              }
            }, 200);
          }
          Analytics.trackEvent("BETTING-TRAD", "Ticket Approved", $rootScope.User.Username);
        });
        $scope.$on("ticketRejected", function ($event, aDatas) {
          angular.forEach(aDatas, function (data) {
            angular.forEach($scope.tickets.Tickets, function (tick) {
              if (tick.Tx === data.Tx && tick.status === "processing") {
                tick.status = "rejected";
                tick.errorMessage = data.Errors[0].Message;
                $scope.countAnswer();
              }
            });
          });
          Analytics.trackEvent("BETTING-TRAD", "Ticket Rejected", $rootScope.User.Username);
        });
        $scope.countAnswer = function () {
          $scope.tick.answered++;
          if ($scope.tick.totalErrors) {
            $scope.tick.totalErrors--;
            $scope.fireMessageTx();
          }
          if ($scope.tick.answered === $scope.tick.total && $scope.tick.total !== $scope.tick.success) {
            $scope.errorMessageTx = "Xử lý đơn cược thành công.<br/> Nhưng có <b>" + ($scope.tick.total - $scope.tick.success) + "</b> phiếu bị lỗi. Quý khách vui lòng kiểm tra lại.";
            $scope.alertTick = true;
            $scope.showAction = true;
          }
          if ($scope.tick.answered === $scope.tick.total) {
            $rootScope.$broadcast("bettingCompleted", item);
            $timeout.cancel($scope.autoCallback);
            $timeout.cancel($scope.autoMobilize);
            $scope.Mobilize = undefined;
          }
          $scope.$digest();
        };
        $scope.checkTicket = function (fire) {
          $scope.Mobilize = undefined;
          let TxLists = [];
          if ($scope.tick.answered < $scope.tick.total) {
            angular.forEach($scope.tickets.Tickets, function (tick) {
              if (tick.status === "processing") {
                TxLists.push(tick.Tx);
              }
            });
            network.Games.checkTx({TxList: TxLists}).then(function (response) {
              let successTicks = response.filter(function (tick) {
                return tick.Errors === undefined || tick.Errors.length === 0;
              });
              $rootScope.$broadcast("ticketApproved", successTicks);
              let rejectedTicks = response.filter(function (tick) {
                return tick.Errors;
              });
              $rootScope.$broadcast("ticketRejected", rejectedTicks);
              if (response.length < TxLists.length) {
                if (!fire) {
                  $scope.autoCallback = $timeout(function () {
                    $scope.checkTicket(true);
                  }, 2e4);
                } else {
                  $scope.alertTick = true;
                  $scope.showAction = true;
                  $scope.tick.totalErrors = TxLists.length - response.length;
                  $scope.fireMessageTx();
                  angular.forEach($scope.tickets.Tickets, function (tick) {
                    tick.notAnswer = tick.status === "processing";
                  });
                }
              }
            });
            Analytics.trackEvent("CHECK-TX", $rootScope.connectState, $rootScope.User.Username, TxLists.length);
          }
        };
        $scope.fireMessageTx = function () {
          $scope.errorMessageTx = $scope.tick.totalErrors !== 0 ? "Có <b>" + $scope.tick.totalErrors + "</b> phiếu bị lỗi không xác định trong quá trình đặt cược.<br>Quý khách vui lòng kiểm tra và đặt cược lại.<br>Rất xin lỗi quý khách vì sự bất tiện này" : undefined;
        };
      }
    }
    vm.hideSwipe = true;
    function checkPlayingGame() {
      if (vm.inter !== undefined) {
        $interval.cancel(vm.inter);
      }
      let isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
      let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (!$mdMedia("gt-sm") && ($state.current.name === "app.casino" || $state.current.name === "app.game") && iOS) {
        vm.showMark = true;
        vm.inter = $interval(function () {
          vm.hideSwipe = document.documentElement.clientHeight < window.innerHeight;
          if (document.documentElement.clientHeight === window.innerHeight) {
            window.scroll(0, 0);
          }
        }, 1e3);
      } else {
        vm.showMark = false;
        if (vm.inter !== undefined) {
          $interval.cancel(vm.inter);
        }
        $timeout(function () {
          vm.hideSwipe = true;
        }, 100);
      }
    }
    function showAds() {
      let currentPosition = $location.path().split("/")[1];
      let allowedPosition = ["traditional", "legendary", "announcements"];
      vm.localAds = localStorage.getItem("AdsT") === null ? 0 : parseInt(localStorage.getItem("AdsT"));
      if ($location.path().split("/")[1] === "casino") {
        localStorage.setItem("AdsT", vm.localAds + 1);
      }
      if (msUtils.exists(currentPosition, allowedPosition) && vm.localAds < 20) {
        $timeout(function () {
          $rootScope.showAds = true;
        }, 1e3);
      } else {
        $rootScope.showAds = false;
      }
    }
    let range = ["17:00", "21:00"];
    document.body.addEventListener("click", function (event) {
      let state = $state.current.name.split(".")[1];
      let weekday = moment().isoWeekday();
      let currentDate = new Date;
      vm.currentUnix = Math.floor(currentDate.getTime() / 1e3);
      let time = currentDate.getHours() + ":" + currentDate.getMinutes();
      let lastClick = sessionStorage.getItem("lastClick");
      if (lastClick !== null && !isNaN(lastClick)) {
        let diffTime = vm.currentUnix - parseInt(lastClick);
        if (weekday === 1 && diffTime > 1800 && (time <= "17:00" || time >= "21:00") && $rootScope.isAuthenticated && msUtils.exists(state, ["results", "traditional", "announcements", "account"]) && $location.host() !== "551995.net") {
          vm.showPopup();
        }
      } else if ($rootScope.isAuthenticated) {
        if (state !== "auth" && weekday === 1) {
          vm.showPopup();
        }
      }
    }, true);
    function showPopup() {
      sessionStorage.setItem("lastClick", vm.currentUnix);
      $mdDialog.show({controller: rejectionCtrl, templateUrl: "app/main/announcements/warning.dialog.html", fullscreen: true});
      function rejectionCtrl($scope) {
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $timeout(function () {
          $scope.thisOK = true;
        }, 1e3);
      }
    }
  }
}());
(function () {
  "use strict";
  angular.module("fuse");
}());
(function () {
  "use strict";
  angular.module("fuse").config(config).config(["AnalyticsProvider", function (AnalyticsProvider) {
    AnalyticsProvider.setAccount("UA-167864324-1");
    AnalyticsProvider.trackPages(true);
    AnalyticsProvider.trackUrlParams(true);
    AnalyticsProvider.setPageEvent("$stateChangeSuccess");
  }]).run(["Analytics", function (Analytics) {}]);
  function config($translateProvider) {
    $translateProvider.useLoader("$translatePartialLoader", {urlTemplate: "{part}/i18n/{lang}.json"});
    $translateProvider.preferredLanguage("en");
    $translateProvider.useSanitizeValueStrategy("sanitize");
  }
}());
(function () {
  "use strict";
  angular.module("fuse").factory("api", apiService);
  function apiService($resource) {
    var api = {};
    api.baseUrl = "app/data/";
    return api;
  }
}());
