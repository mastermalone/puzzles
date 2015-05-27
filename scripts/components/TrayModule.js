(function () {
    define(['DOMElement', 'Dispatch'], function (DOMElement, Dispatch) {
        'use strict';
        
        var TrayModule = {
            render: function (data) {
                //console.log('RENDERING TRAY');
                var tray, trayConten, frag = document.createDocumentFragment();
                //console.log('TRAY DATA', data);
                
                tray = new DOMElement('DIV', 'id', 'tray', 'main');
                
                
                trayConten = new DOMElement({
                    type: ['DIV', 'SPAN', 'DIV'],
                    id: ['level-selector', 'level-indicator', 'tray-content'],
                    text: ['Level', '1', null],
                    parent: 'tray'
                });
            }
        };
        
        return TrayModule;
    });
}());
