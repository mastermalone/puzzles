(function () {
    define(['DOMElement', 'Dispatch', 'Jigsaw', 'Scroller', 'CSS!../../game-modules/public/css/jquery.fs.scroller.min.css', 'CSS!../../game-modules/public/css/jquery.fs.scroller.override.css'], function (DOMElement, Dispatch, Jigsaw, Scroller, css, cssOverride) {
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
                 
                jig = new Jigsaw(data, '.scroller-content');
                jig.init();
                
                $('#tray-content').scroller({
                    
                });
            }
        };
        
        return TrayModule;
    });
}());
