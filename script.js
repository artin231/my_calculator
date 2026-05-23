let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
  
addEventListener('click', e => {

    addEventListener('mousemove', wq => {
      x = event.clientX;
        y = event.clientY;
        ctx.fillRect(x, y, 5, 5);
        ctx.fillStyle = 'red';
        addEventListener('click', w => {
        })
    })

}
)