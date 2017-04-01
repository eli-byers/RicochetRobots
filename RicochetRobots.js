
var map = {
  canvas : document.getElementById("map"),
  array : map1A,
  cw : 20,
  render : function(){
	this.canvas.width = map.cw * this.array[0].length;
	this.canvas.height = map.cw * this.array.length;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  drawWall: function (cellX, cellY, ctx) {
    var cellType = this.tileType(cellX, cellY);
    // TODO: given code add image to canvase
  },
  tileType: function(cellX, cellY){
    // TODO: make codes
    var sum = cellSum(this.array, cellX, cellY)
    switch (sum){
        case -4:        // inner corner
            console.log('inner corner');
            break;
        case 3:         // two sides
            console.log('two sides');
            break;
        case 6:         // one side
            console.log('one side');
            break;
        case 8:         // one corner
            console.log('one corner');
            break;
        case 9:         // empty
            console.log('empty');
            break;
        default:        // >9 special L
            console.log('>9 special L');
            break;
    }
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
    for (var row = 0; row < this.map.array.length/3; row++){
      for (var col = 0; col < this.map.array[row].length/3; col++){
        this.map.drawWall(col, row, this.map.context);
      }
    //   console.log('------------------------');
    }
  };
}

//===============================
// 			      HELPER
//===============================

function copyArray(arr){
  var copy = [];
  for (var i in arr){ copy[i] = arr[i].slice(0); }
  return copy;
}
