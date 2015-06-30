(function () {
    define(['Dispatch'], function (Dispatch) {
        var GameBoardModule = {
            render: function (data) {
                console.log('GAMEBOARD IS RENDERING');
                
                var img,
                    imageView,
                    ctx,
                    imageParent = document.getElementById('main'),
                    zone,
                    scaledHeight,
                    dsp,
                    maxWidth = 700;
                
                img = new Image();
                img.src = data.image;
                dsp = new Dispatch();
                
                img.onload = function () {
                    scaledHeight = img.height;
                    console.log('Value of image width:', img.width, 'Value of image height:', img.height);
                    
                    if (img.width > maxWidth) {
                        scaledHeight = (img.height / img.width) * maxWidth;
                        console.log("scaled height:", scaledHeight);
                    }else {
                        maxWidth = img.width;
                    }
                    imgView = document.createElement('canvas');
                    imgView.id = 'image-view';
                    imgView.width = maxWidth;
                    imgView.height = scaledHeight;
                    ctx = imgView.getContext('2d');
                    ctx.drawImage(img, 0, 0, maxWidth, scaledHeight);
                    imageParent.appendChild(imgView);
                    dsp.customEvent(imgView, 'imagesize', {width:maxWidth, height:scaledHeight});
               };
            }
        };
        
        return GameBoardModule;
    });
}());
