var board = require('./map.js')


var map = {
  canvas : document.getElementById("map"),
  array : board.map1A,
  cw : 20,
  render : function(){
	this.canvas.width = map.cw * this.array[0].length;
	this.canvas.height = map.cw * this.array.length;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  drawWall: function (r,c, ctx) {
    // switch()

  },
  tileType: function(ul, br){

  }

};

var scene = {
  canvas: document.getElementById("game"),
  components: [],
  robots: [],
  start : function () {
    this.canvas.width = map.cw * map.array[0].length;
    this.canvas.height = (map.cw * map.array.length);
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  clear : function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function startGame (){
  game = new Game(scene, map);
  game.drawMap()
}

//===============================
//			     CLASSES
//===============================

function Game (scene, map, info){
  var _this = this;
  this.scene = scene;
  this.map = map;
  this.time = 0;
  this.DEBUG = false;
  this.drawMap = function(){
    for (var i = 0; i < this.map.array.length; i++){
      for (var k = 0; k < this.map.array[i].length; k++){
        this.map.drawWall(i,k, this.map.context);
      }
    }
  };
//   this.updateGameArea = function(){
//     if (this.paused){ return; }

//     _this.time += 1/60;
//     _this.scene.clear();



//     // update everything
//     for (var c = _this.scene.components.length-1; c >= 0; c--){ _this.scene.components[c].update(); }
//     for (var g = _this.scene.robots.length-1; g >= 0; g--){ _this.scene.robots[g].update(); }

//     // blink map
//     if (_this.map.blink){ _this.map.drawWhiteWalls(); }

//     _this.drawScore();
//     _this.drawMessage();
//     _this.spawnGhost();

//     // path finding debug
//     if (_this.DEBUG){
//       // console.log(_this.map.pathMap);
//       var ctx = _this.scene.context;
//       ctx.fillStyle = 'teal';
//       ctx.font = "10px Arial";

//       for (var i in _this.map.pathMap){
//         for (var k in _this.map.pathMap[i]){
//           var y = (i * _this.map.cw)+_this.map.cw/2+3;
//           var x = (k * _this.map.cw)+_this.map.cw/5+3;
//           if (_this.map.pathMap[i][k] !== 1000 ){
//             ctx.fillText(_this.map.pathMap[i][k]+"",x,y);
//           }
//         }
//       }
//     }
//   };
}

//===============================
// 			      HELPER
//===============================

function copyArray(arr){
  var copy = [];
  for (var i in arr){ copy[i] = arr[i].slice(0); }
  return copy;
}
