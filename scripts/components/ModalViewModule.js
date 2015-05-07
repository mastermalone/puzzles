(function () {
    define(["DOMElement"], function (DOMElement) {
        "use strict";
        
        var  ModalViewModule = {
            setUrl: function (url) {
                return {
                    url: url
                };
            },
            render: function (data, e) {
                var jsonData = data, 
                i, 
                length = Object.keys(jsonData.modal).length,
                modal,
                modalContent,
                modatCTA,
                frag; 
                               
                modal = new DOMElement({
                    type: ["DIV", "DIV"],
                    id: ["lvs-modalBG", "modal-main"],
                    dataAttr: ["data-modal", "data-main"],
                    className: ["modal", "main-cont"],
                    nested: true,
                    parent: "main"
                });

                modalContent = new DOMElement({
                    type: ["H2", "H3", "DIV", "UL", "span"],
                    id: ["modal-header", "modal-subheader", "modal-preview", "modal-ctas", "lv-inicator"],
                    className: ["modal-hdr", "modal-sub", "modal-pre", "cta", "lvl-ind"],
                    text: [jsonData.modal["header"], jsonData.modal["subHeader"], null, null, "3"], 
                    parent: "modal-main"
                });
                
                modatCTA = new DOMElement({
                    type: ["LI", "LI"],
                    id: ["cancel", "confirm"],
                    text: [jsonData.modal["cancelTxt"], jsonData.modal["confirmTxt"]],
                    parent: "modal-ctas"
                });

                /*for (i = 0; i < length; i++) {
                    console.log("VALUE of i", i, "Modal stuff:", jsonData.modal["header"], jsonData.puzzle["level"+(i+1)].image);
                }*/
                //Make Displatch event "modal loaded to trtigger other functions"
                modal - null;
                modalContent = null;
                modatCTA = null;   
            }
        };
        
        return ModalViewModule;
    });
}());
