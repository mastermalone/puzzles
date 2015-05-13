(function () {
    define(["DOMElement"], function (DOMElement) {
        "use strict";
        
        var TrayModule = {
            render: function (data) {
                console.log("RENDERING TRAY");
                
                var tray = new DOMElement({
                    type: ["DIV"],
                    id: ["tray"]
                });
            }
        };
        
        return TrayModule;
    });
}());
