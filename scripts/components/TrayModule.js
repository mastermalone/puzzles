(function () {
    define(['DOMElement', 'Dispatch', 'Jigsaw'], function (DOMElement, Dispatch, Jigsaw) {
        'use strict';
        
        var TrayModule = {
            render: function (data) {
                //console.log('RENDERING TRAY');
                var tray, trayConten, jig, frag = document.createDocumentFragment();
                //console.log('TRAY DATA', data);
                
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
