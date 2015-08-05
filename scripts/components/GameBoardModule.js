(function () {
    define(['Emitter'], function (emitter) {
        var GameBoardModule = {
            img: '',
            imageView: '',
            ctx: '',
            imageParent: document.getElementById('main'),
            zone: '',
            scaledHeight: '',
            maxWidth: 700,
            render: function (data) {
                
                if (!data.image || typeof document.querySelector('#image-view') !== 'object') {
                    console.log('No image path was found in the data object', typeof document.querySelector('#image-view'));
                    return;
                }else {
                    this.img = new Image();
                    this.img.src = data.image;

                    this.img.onload = function () {
                        var imageData;

                        this.scaledHeight = Math.ceil(this.img.height);
                        //console.log('Value of image width:', this.img.width, 'Value of image height:', this.img.height);
                        
                        if (this.img.width > this.maxWidth) {
                            this.scaledHeight = (this.img.height / this.img.width) * this.maxWidth;
                            //console.log("scaled height:", this.scaledHeight);
                        }else {
                            this.maxWidth = this.img.width;
                        }
                        this.imgView = document.createElement('canvas');
                        this.imgView.id = 'image-view';
                        this.imgView.width = this.maxWidth;
                        this.imgView.height = this.scaledHeight;
                        this.ctx = this.imgView.getContext('2d');
                        this.ctx.drawImage(this.img, 0, 0, this.maxWidth, this.scaledHeight);
                        
                        
                        /*if (!document.querySelector('#image-view')) {
                            this.imageParent.appendChild(this.imgView);
                        }*/
                        //this.imageView = document.querySelector('#image-view');
                        console.log('TYPE OF GAMEBOARD', !document.querySelector('#image-view'));
                        this.imageParent.appendChild(this.imgView);

                        imageData = {
                            width: this.maxWidth,
                            height: this.scaledHeight
                        };
                        emitter.emit('imageloaded', imageData);
                   }.bind(this);
                }                
            }
        };
        
        return GameBoardModule;
    });
}());
