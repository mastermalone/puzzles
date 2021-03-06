(function () {
	 define(["DOMElement"], function (DOMElement) {
	     "use strict";

	 	function LevelSelect () {
	 		this.levelSelectId = "";
	 	}
	 	 
	 	LevelSelect.prototype = {
	 		constructor: LevelSelect,
	 		setURL: function (url) {
                return {
                    url: url
                };  
	 		},
	 		animateLevels: function (Bool) {
	 			this.animate = Bool;
	 			if(!this.animate){
	 				//console.log("You did not set this to true");
	 				return;
	 			}
	 			console.log("Got passed the check for bool", this.animate);
	 		},
	 		render: function (data) {
	 			//Create elements for the level select view based on the data object returned
	 			var jsonData = data, i, levels = data, length = Object.keys(jsonData.puzzle).length/*Object.keys(data[Object.keys(data)]).length*/, holder, selectBtn , sb, selector, slctr, frag = document.createDocumentFragment();
	 			console.log("VALUE OF HOLDER", typeof holder === "undefined");
	 			//console.log("VALUE OF FIRST CHILD", /*Object.keys(data[Object.keys(data)]).length,*/ jsonData.puzzle["level"+"2"].image, /*Object.keys(data[Object.keys(data)]),*/ Object.keys(jsonData.puzzle).length, jsonData.modal);
	 			if (!document.getElementById("level-select")) {
	 			    console.log("holder is not defined, so make the level select");
    	 			holder = new DOMElement({
                        type: ["DIV"],
                        id: ["level-select"],
                        parent: "main"
                    });
                    console.log("THE HOLDER:", holder.type.id.toString());
                    slctr = new DOMElement({
                        type: ["SPAN"],
                        id: ["selector"],
                        text: ["Level"],
                        parent: "level-select"
                    });
                                    
                    for (i = 0; i < length; i++){
                        //Create Level Select Buttons
                        sb = new DOMElement("DIV", "id", "select-btn"+(i+1), frag, (i+1+""));
                        if (i >= 9) {
                            frag.childNodes[i].className = "tens";
                        }
                    }
                    
                    document.getElementById("level-select").appendChild(frag);
                    
                    jsonData = null;
                    holder = null;
                    selector = null;
                    sb = null;
	 			}	 		   
	 		}
	 	};
	 	
	 	return LevelSelect;
	 });
}());
