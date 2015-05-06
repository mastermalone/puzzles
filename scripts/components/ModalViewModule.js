(function () {
    define(["CreateNode", "DOMElement", "Events"], function (CreateNode, DOMElement, Events) {
        "use strict";
        
        var  ModalViewModule = {
            setUrl: function (url) {
                return {
                    url: url
                };
            },
            placeContent: function (el, content) {
                //var cont = document.getElementById(content.id),
                var cont = document.getElementById(content),
                targetElm = document.getElementById(el), test;
                test = new DOMElement({
                    type: ["DIV", "DIV", "UL"],
                    id: ["lvs-modalBG", "modal-main", "cont-list"],
                    dataAttr: ["data-modal", "data-main", "data-list"],
                    className: ["modal", "main-cont", "modal-list"],
                    makeHeiarachy: true,
                    parent: "main"
                });
                
                if (!el || el === "" || cont !== null) {
                    console.log("ModelViewModule Error: Please be sure to include the ID of the target element as an argument", targetElm);
                    return;
                }
                //console.log("THE MAIN DIV", document.getElementById(el));
                //targetElm.appendChild(content);
            },
            makeContent: function (contentObject) {
                var pageElm, elm;
                for (var key in contentObject) {
                    console.log("VALUE OF KEY", key);
                }
            },
            render: function (data) {
                
                var jsonData = data, 
                evt = new Events(),
                i, 
                length = Object.keys(jsonData.modal).length; 
                //modalBg = new CreateNode(),
                //modalCont = new CreateNode(),
                               
                /*test = new DOMElement({
                    type: ["DIV", "DIV", "UL"],
                    id: ["lvs-modalBG", "modal-main", "cont-list"],
                    dataAttr: ["data-modal", "data-main", "data-list"],
                    className: ["modal", "main-cont", "modal-list"],
                    makeHeiarachy: true,
                    parent: "main"
                }),*/
                
                //test2 = new DOMElement("DIV", "id", "test2"),
                //t2 = test.makeElement();
                
                /*h2 = new CreateNode(),
                mbg,                
                mc,
                h2,
                preview, //Make the content be a dependency
                frag;
                
                mbg = modalBg.makeElement("DIV", "id", "lvs-modalBG");
                mbg.className = "modal";
                mc = modalCont.makeElement("DIV", "id", "modal-main");
                //test.makeElement("DIV", "id", "test-main");
                //test.makeElement();
                mbg.className = "main-cont";
                
                console.log("THE MAIN DIV", document.getElementById(el));
                mbg.appendChild(mc);*/
                
                console.log("LVL COMPONENT", document.getElementById("vs-modalBG"));
                for (i = 0; i < length; i++) {
                    //console.log("VALUE of i", i, "Modal stuff:", jsonData.modal["header"], jsonData.puzzle["level"+(i+1)].image);
                }
                //console.log("Getting into Modal View Module Render", jsonData.modal);
                
                this.placeContent("main", "");
                
                
                //console.log("VALUE of TEST:", test.makeElement());
                //this.placeContent("main", test2);
            }
        };
        
        return ModalViewModule;
    });
}());
