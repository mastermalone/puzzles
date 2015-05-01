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
                var cont = document.getElementById(content.id),
                targetElm = document.getElementById(el);
                
                if (!el || el === "" || cont !== null) {
                    console.log("ModelViewModule Error: Please be sure to include the ID of the target element as an argument", targetElm);
                    return;
                }
                
                targetElm.appendChild(content);
            },
            render: function (data) {
                
                var jsonData = data, 
                i, 
                length = Object.keys(jsonData.modal).length, 
                modalBg = new CreateNode(),
                modalCont = new CreateNode(),
                h2 = new CreateNode(),
                mbg,                
                mc,
                h2,
                preview, //Make the content be a dependency
                frag;
                
                mbg = modalBg.makeElement("DIV", "id", "lvs-modalBG");
                mbg.className = "modal";
                mc = modalCont.makeElement("DIV", "id", "modal-main");
                mbg.className = "main-cont";
                
                
                mbg.appendChild(mc);
                
                for (i = 0; i < length; i++) {
                    console.log("VALUE of i", i, "Modal stuff:", jsonData.modal["header"], jsonData.puzzle["level"+(i+1)].image);
                }
                console.log("Getting into Modal View Module Render", jsonData.modal);
                
                this.placeContent("main", mbg);
            }
        };
        
        return ModalViewModule;
    });
}());
