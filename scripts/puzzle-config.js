require.config({
    urlArgs: 'bust=' +  (new Date()).getTime(),//Remove before deployment
    baseUrl:'scripts/',
    paths: {
        'App': '../../game-modules/scripts/app',
        'Ajax': '../../game-modules/scripts/modules/Ajax',
        'BaseController': '../../game-modules/scripts/controllers/BaseController',
        'BaseModel': '../../game-modules/scripts/models/BaseModel',
        'BaseView': '../../game-modules/scripts/views/BaseView',
        'CreateNode': '../../game-modules/scripts/modules/CreateNode',
        'CSS': '../../game-modules/scripts/lib/require-css/css.min',
        'CssTransitions': '../../game-modules/scripts/modules/CssTransitionEvents',
        'Dispatch': '../../game-modules/scripts/modules/Dispatch',
        'domReady': '../../game-modules/scripts/lib/domReady',
        'DOMElement': '../../game-modules/scripts/modules/DOMElement',
        'Easel': '../../game-modules/scripts/lib/easeljs/easeljs-0.8.0.min',
        'EventEmitter2': '../../game-modules/scripts/lib/eventemitter2',
        'Emitter': '../../game-modules/scripts/modules/Emitter',
        'Events': '../../game-modules/scripts/modules/Events',
        'GameBoardController':'../../game-modules/scripts/controllers/GameBoardController',
        'GameBoardModel':'../../game-modules/scripts/models/GameBoardModel',
        'GameBoardModule':'components/GameBoardModule',
        'GameBoardView':'../../game-modules/scripts/views/GameBoardView',
        'jquery': '../../game-modules/scripts/lib/jquery.min',
        'jquery-ui': '../../game-modules/scripts/lib/jquery-ui/jquery-ui.min',
        'Jigsaw': '../../game-modules/scripts/modules/Jigsaw',
        'LevelSelect': 'components/LevelSelect',
        'LevelSelectView': '../../game-modules/scripts/views/LevelSelectView',
        'LevelSelectController': '../../game-modules/scripts/controllers/LevelSelectController',
        'LevelSelectModel': '../../game-modules/scripts/models/LevelSelectModel',
        'ModalController': '../../game-modules/scripts/controllers/ModalController',
        'ModalModel': '../../game-modules/scripts/models/ModalModel',
        'ModalView': '../../game-modules/scripts/views/ModalView',
        'ModalViewModule': 'components/ModalViewModule',
        'Scroller': '../../game-modules/scripts/lib/jquery.fs.scroller.min',
        'Subclass': '../../game-modules/scripts/modules/Subclass',
        'TrayController': '../../game-modules/scripts/controllers/TrayController',
        'Text': '../../game-modules/scripts/lib/requirejs-text/2.0.14/text',     
        'TrayModel': '../../game-modules/scripts/models/TrayModel',
        'TrayModule': 'components/TrayModule',
        'TrayView': '../../game-modules/scripts/views/TrayView',
        //'Tween': '../../game-modules/scripts/lib/tweenjs/tweenjs-0.6.0.min'
        'Tween': '../../game-modules/scripts/lib/createjs-tweenjs/lib/tweenjs-NEXT.combined',
        'TweenCSS': '../../game-modules/scripts/lib/createjs-tweenjs/src/tweenjs/CSSPlugin'
    },
    shim: {
        'Easel': {
            exports: 'Easel'
        },
        'tween': {
            deps: ['Easel'],
            exports: 'Tween'
        },
        'tweenCSS': {
            deps: ['tween'],
            exports: 'TweenCSS'
        },
        'jquery-ui': {
            deps: ['jquery'],
            exports: 'jquery-ui'
        },
        'Scroller': {
            deps: ['jquery'],
            exports: 'Scroller'
        },
        'eventemitter2': {
            exports: 'EventEmitter2'
        }
    }
    
});

require(['App', 'domReady', 'Tween'], function (App, domReady) {
    var api = App.setAPIURL(encodeURI('../../game-modules/json/game.json'));//Temporary JSON work;
    //var api = App.setAPIURL('../game-modules/json/game.json');//Temporary JSON home;
    
    console.log('THE API URL', api.url);
    
    domReady(function () {
        App.init(api.url);
    });
});
