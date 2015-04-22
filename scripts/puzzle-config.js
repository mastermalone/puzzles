require.config({
    urlArgs: "bust=" +  (new Date()).getTime(),//Remove before deployment
    baseUrl:"scripts/",
    paths: {
        "App": "../../game-modules/scripts/app",
        "Ajax": "../../game-modules/scripts/modules/Ajax",
        "BaseController": "../../game-modules/scripts/controllers/BaseController",
        "BaseModel": "../../game-modules/scripts/models/BaseModel",
        "BaseView": "../../game-modules/scripts/views/BaseView",
        "CreateNode": "../../game-modules/scripts/modules/CreateNode",
        "Events": "../../game-modules/scripts/modules/Events",
        "jquery": "../../game-modules/scripts/lib/jquery.min",
        "LevelSelect": "modules/LevelSelect",
        "LevelSelectView": "../../game-modules/scripts/views/LevelSelectView",
        "LevelSelectController": "../../game-modules/scripts/controllers/LevelSelectController",
        "LevelSelectModel": "../../game-modules/scripts/models/LevelSelectModel",
        "ModalController": "../../game-modules/scripts/controllers/ModalController",
        "ModalModel": "../../game-modules/scripts/models/ModalModel",
        "ModalView": "../../game-modules/scripts/views/ModalView",
        "ModalViewModule": "modules/ModalViewModule",
        "Subclass": "../../game-modules/scripts/modules/Subclass"
    }
});


require(["LevelSelect","App"], function (LevelSelect, App) {
    var lvs = new LevelSelect(), api;
    api = lvs.setURL('../../game-modules/json/game.json');
    App.init(api.url);
    console.log("THE API Url", api.url);
});
