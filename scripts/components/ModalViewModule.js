(function () {
    define(["DOMElement", "Dispatch"], function (DOMElement, Dispatch) {
        "use strict";
        var dsp = new Dispatch(), 
        modal,
        ModalViewModule = {
            render: function (data, lvl) {
                var jsonData = data, 
                i, 
                length = Object.keys(jsonData.modal).length,
                modal,
                modalContent,
                modatCTA,
                lvlInd; 
                
                /*DOMElement allows for easy creation of different types of dynamic elements 
                 * In the code below, I create the modal overlay and all of it's nested child nodes
                 */               
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
                    text: [jsonData.modal["header"], jsonData.modal["subHeader"], null, null, lvl], 
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
                
                lvlInd = document.getElementById("lv-inicator");
                
                modal = document.getElementById("lvs-modalBG");
                modal.style.opacity = 0;
                window.getComputedStyle(modal).opacity;
                modal.className = "fade-in";
                
                parseInt(lvl) > 9 ? lvlInd.className = "lvl-ind tens" : "lvl-ind";
                
                //Dispatch modalLoaded when the modal overlay is in the DOM. This is the event target referenced in the ModalController's addInteraction method.
                dsp.customEvent("lvs-modalBG", "modalLoaded");
                
                modal - null;
                modalContent = null;
                modatCTA = null;   
            }
        };
        
        return ModalViewModule;
    });
}());
