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
                console.log("Getting into Modal View Module Render");
                
                var jsonData = data, 
                i, 
                length = Object.keys(jasonData.modal).length, 
                holder = new CreateNode(),
                hld;
                
                hld = holder.makeElement("DIV", "id", "lvs-modal");
                hld.className = "modal";
            }
        };
    });
}());
