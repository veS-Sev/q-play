$(function () {
    var mixerTwo = mixitup(container2, {
    controls: {
      scope: 'local'
    },
    load: {
      filter: getCategory('a', 'b')
    }
  });

  // function for canvas
  function canvasAnimation(canvas) {
    var ctx = canvas.getContext('2d');
    class Pixel {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hue = Math.floor(Math.random() * 360);
        var direction = Math.random() > 0.5 ? -1 : 1;
        this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
      }
      update() {
        this.hue += this.velocity;
      }
      render(ctx) {
        var hue = Math.round(this.hue);
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
        ctx.fillRect(this.x, this.y, 1, 1);
      }
    }

    var pixels = [
      new Pixel(0, 0),
      new Pixel(1, 0),
      new Pixel(0, 1),
      new Pixel(1, 1),
    ];

    function animating() {
      pixels.forEach(function (pixel) {
        pixel.update();
        pixel.render(ctx);
      });
      requestAnimationFrame(animating);
    }
    animating();
  };

  // show animation for first canvas 
  let firstCanvas = document.getElementById('banner__bgr-canvas');
  canvasAnimation(firstCanvas);

  // show animation for second canvas
  let secondCanvas = document.getElementById('request__bgr-canvas');
  canvasAnimation(secondCanvas);


  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  function BigUser() {

    this.name = "Вася";
    this.value = this.name+'s';
    return false;
  
    // return { name: "Godzilla" };  
    // <-- возвращает этот объект
  }
  
  console.log( new BigUser());  // Godzilla, получили этот объект
});