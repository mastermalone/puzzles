(function () {
    define(["DOMElement", "Dispatch"], function (DOMElement, Dispatch) {
        var GameBoardModule = {
            render: function (data) {
                console.log("GAMEBOARD IS RENDERING");
                
                var img,
                imageView,
                zone;
                
               img = new Image();
               img.src = "";
               
               img.onload = function () {
                   imgView = new DOMElement("canvas", "id", "game-bg");
               };
            }
        };
        
        return GameBoardModule;
    });
}());
