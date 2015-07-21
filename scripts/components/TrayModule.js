(function () {
    define(['DOMElement', 'Dispatch', 'Jigsaw', 'Scroller', 'Text!../../game-modules/public/css/jquery.fs.scroller.min.css'], function (DOMElement, Dispatch, Jigsaw, Scroller, CSS) {
        'use strict';
        
        var TrayModule = {
            render: function (data) {
                //console.log('RENDERING TRAY');
                var tray, trayConten, jig, frag = document.createDocumentFragment();
                console.log('TRAY CSSS', CSS);
                
                tray = new DOMElement('DIV', 'id', 'tray', 'main');
                
                trayConten = new DOMElement({
                    type: ['DIV', 'SPAN', 'DIV'],
                    id: ['level-selector', 'level-indicator', 'tray-content'],
                    text: ['Level', '1', null],
                    dataAttr: ['lv-sel', 'lv-sel'],
                    parent: 'tray'
                });
                
                jig = new Jigsaw(data, 'tray-content');
                jig.init();
            }
        };
        
        return TrayModule;
    });
}());
