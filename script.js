const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;

    function draw(x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }


    canvas.addEventListener('mousemove', function(e) {
        draw(e.clientX, e.clientY);
    });

    

    