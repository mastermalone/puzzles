(function () {
    define(['DOMElement', 'Dispatch'], function (DOMElement, Dispatch) {
        var GameBoardModule = {
            render: function (data) {
                console.log('GAMEBOARD IS RENDERING');
                
                var img,
                imageView,
                ctx,
                imageParent = document.getElementById('main'),
                zone;
                
               img = new Image();
               img.src = data.image;
               img.style.width = "700px";
               
               img.onload = function () {
                  imgView = document.createElement('canvas');
                  imgView.id = 'image-view';
                  imgView.style.width = window.getComputedStyle(img).width;
                  imgView.style.height = window.getComputedStyle(img).height;
                  ctx = imgView.getContext('2d');
                  ctx.drawImage(img, 0, 0, 300, 200);
                  imageParent.appendChild(imgView);
               };
            }
        };
        
        return GameBoardModule;
    });
}());
