(function () {
    define(['DOMElement', 'Dispatch', 'Jigsaw', 'Scroller', 'CSS!../../game-modules/public/css/jquery.fs.scroller.min.css', 'CSS!../../game-modules/public/css/jquery.fs.scroller.override.css'], function (DOMElement, Dispatch, Jigsaw, Scroller, css, cssOverride) {
        'use strict';
        
        var TrayModule = {
            render: function (data) {
                //console.log('RENDERING TRAY');
                var tray, trayConten;
                console.log('TRAY CSSS', CSS);
                
                tray = new DOMElement('DIV', 'id', 'tray', 'main');
                
                trayConten = new DOMElement({
                    type: ['DIV', 'SPAN', 'DIV'],
                    id: ['level-selector', 'level-indicator', 'tray-content'],
                    text: ['Level', '1', null],
                    dataAttr: ['lv-sel', 'lv-sel'],
                    parent: 'tray'
                });
                 
                /*jig = new Jigsaw(data, '.scroller-content');
                jig.init();
                //this.update();*/
                /*$('#tray-content').scroller({
                    
                });*/
            },
            update: function (data, level) {
                var jig;
                jig = new Jigsaw(data, '.scroller-content', level);
                jig.init();
                
                $('#tray-content').scroller({});
                console.log("GETTING INTO UPDAT", data);
                
                jig = null;
            }
        };
        
        return TrayModule;
    });
}());
