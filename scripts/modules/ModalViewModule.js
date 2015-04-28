(function () {
    define(["CreateNode"], function (CreateNode) {
        "use strict";
        
        var  ModalViewModule = {
            setUrl: function (url) {
                return {
                    url: url
                };
            },
            placeContent: function (el, content) {
                if (!el || el === "") {
                    console.log("ModelViewModule Error: Please be sure to include the ID of the target element as an argument");
                    return;
                }
                var targetElm = document.getElementById(el);
                targetElm.appendChild(content);
            },
            render: function (data) {
                
                var jsonData = data, 
                i, 
                length = Object.keys(jsonData.modal).length, 
                modalBg = new CreateNode(),
                mbg,
                modalCont = new CreateNode(),
                mc,
                frag;
                
                mbg = modalBg.makeElement("DIV", "id", "lvs-modalBG");
                mbg.className = "modal";
                
                for (i = 0; i < length; i++) {
                    
                }
                console.log("Getting into Modal View Module Render", jsonData.modal);
                
                this.placeContent("main", mbg);
            }
        };
        
        return ModalViewModule;
    });
}());
