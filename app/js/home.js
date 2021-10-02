$(function(){
  var container2 = document.querySelector('.galery__home');
  var mixerTwo = mixitup(container2, {
    controls: {
        scope: 'local'
    },
    load: {
      filter: '.category-a'
  }
  });
console.log(Date());
let x = new Date();
let weekDay =x.getDay();
let time=x.getHours();
let indicator = document.querySelector('.footer__online-indicator');
let indicatorText = document.querySelector('.footer__working-text');
function getIndicator(){
if((weekDay==0 || weekDay==6)&& time<9 || time>18){
  indicator.style.backgroundColor='red';
  indicatorText.textContent='сейчас отдыхаем';
}else{
  indicator.style.backgroundColor='green';
  indicatorText.textContent='сейчас работаем';
}};
getIndicator();
var canvas = document.getElementById('banner__bgr-canvas');
var ctx = canvas.getContext('2d');
function Pixel( x, y ) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor( Math.random() * 360 );
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
};

Pixel.prototype.render = function( ctx ) {
  var hue = Math.round( this.hue );
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
  ctx.fillRect( this.x, this.y, 1, 1 );
}

var pixels = [
  new Pixel( 0, 0 ),
  new Pixel( 1, 0 ),
  new Pixel( 0, 1 ),
  new Pixel( 1, 1 ),
];

function animating() {
  pixels.forEach( function( pixel ) {
    pixel.update();
    pixel.render( ctx );
  });
  requestAnimationFrame( animating );
}

animating();

var canvas = document.getElementById('request__bgr-canvas');
var ctx = canvas.getContext('2d');
function Pixel( x, y ) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor( Math.random() * 360 );
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
};

Pixel.prototype.render = function( ctx ) {
  var hue = Math.round( this.hue );
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
  ctx.fillRect( this.x, this.y, 1, 1 );
}

var pixels = [
  new Pixel( 0, 0 ),
  new Pixel( 1, 0 ),
  new Pixel( 0, 1 ),
  new Pixel( 1, 1 ),
];

function animating() {
  pixels.forEach( function( pixel ) {
    pixel.update();
    pixel.render( ctx );
  });
  requestAnimationFrame( animating );
}

animating();



});