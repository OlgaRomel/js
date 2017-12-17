(function(){
    'use strict';

    var canvas = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');
    var erase = document.getElementById('paint_eraser');
    var brush = document.getElementById("paint_brush");
    var color = document.getElementById('paint_brush_color');

    var handlers = {
        getColor: function() {
            context.fillStyle = color.value;
        },

        startDraw: function() {
            console.log("начало рисование");
            this.isDrawing = true;
        },

        endDraw: function() {
            console.log("рисование окончено");
            this.isDrawing = false;
        },

        drawing: function(event) {
            if (this.isDrawing) {
                console.log("рисование в процессе");
                context.beginPath();
                context.arc(event.pageX-this.offsetLeft, event.pageY-this.offsetTop, document.getElementById('paint_brush_size').value, 0, Math.PI*2, false);
                context.fill();

            } else {
                return;
            }
        },

        erase: function() {
            //clearRect(event.pageX-this.offsetLeft, event.pageY-this.offsetTop, 20, 20);
            context.fillStyle = "#FFF";
        
        },
    };

    canvas.addEventListener('mousedown',handlers.startDraw);
    canvas.addEventListener('mousemove',handlers.drawing);
    canvas.addEventListener('mouseup',handlers.endDraw);
    canvas.addEventListener('mouseout',handlers.endtDraw);

    brush.addEventListener('mouseup', handlers.getColor);
    erase.addEventListener('click', handlers.erase);
    

}())
