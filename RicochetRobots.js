
var map = {
  canvas : document.getElementById("map"),
  array : makeMap(map1A, map2A, map3A, map4A),
  cw : 21,
  render : function(){
	this.canvas.width = this.cw * this.array[0].length;
	this.canvas.height = this.cw * this.array.length;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  drawMap: function(){
    this.render();
    this.drawTiles();
    this.drawWalls();
    this.drawCenter();
  },
  drawCenter: function(){
      var image = document.getElementById("Center");
      var x = 7*3*this.cw-this.cw/2
      var y = 7*3*this.cw-this.cw/2.5
      this.context.drawImage(image, x, y);
  },
  drawTiles: function(){
    var left = document.getElementById("EmptyL");
    var right = document.getElementById("EmptyR");
    for (var row = 0; row < this.array.length/3; row++){
      for (var col = 0; col < this.array[row].length/3; col++){
        var x = col*this.cw*3;
        var y = row*this.cw*3;
        if (row % 2 == 0){
            if (col % 2 == 0) this.context.drawImage(right, x, y);
            else this.context.drawImage(left, x, y);
        } else {
            if (col % 2 == 0) this.context.drawImage(left, x, y);
            else this.context.drawImage(right, x, y);
        }
        var code = this.targetCode(col, row);
        if (code > 1){
            code = String(code).split("")
            color = ['','Y','R','B','G',''];
            shape = ['','M','Sn','Sa','St','BH'];
            id = color[code[0]]+shape[code[1]];
            var target = document.getElementById(id);
            this.context.drawImage(target, x+this.cw/10, y+this.cw/10);
        } 
      }
    }
  },
  drawWalls: function(){
    for (var row = 0; row < this.array.length/3; row++){
      for (var col = 0; col < this.array[row].length/3; col++){
        this.drawWall(col, row)
      }
    }
  },
  drawWall: function (cellX, cellY) {
    var cellType = this.tileType(cellX, cellY);    
    if (cellType != 'empty'){
        var x = cellX*this.cw*3
        var y = cellY*this.cw*3
        if (cellType == 'L'){
            rotation = this.cornerRotation(cellX, cellY);
            this.drawCorner(x, y, rotation)
        } else if (cellType == 'one side'){
            // console.log(cellX, this.array.length/3-1);
            
            if ( cellX == 0 || cellX == this.array[0].length/3-1){
                if (this.tileType(cellX, cellY+1) == 'one side') {
                    rotation = this.lineRotation(cellX, cellY);
                    this.drawSingle(x, y, rotation)
                }
            } 
            if ( cellY == 0 || cellY == this.array.length/3-1){
                if (this.tileType(cellX+1, cellY) == 'one side') {
                    rotation = this.lineRotation(cellX, cellY);
                    this.drawSingle(x, y, rotation)
                }
            }
        }
    }
  },
  tileType: function(cellX, cellY){
    var sum = cellSum(this.array, cellX, cellY)
    switch (sum){
        case -4: return 'inner corner';
        case 3: return 'two sides';
        case 5:
        case 7:
        case 6: return 'one side';
        case 8: return 'one corner';
        case 9: return 'empty';
        // default: console.log(sum);
    }
    if (sum > 9) return "L";
  },
  targetCode: function(cellX, cellY){
    var y = (cellY*3)+1;
    var x = (cellX*3)+1;
    return this.array[y][x];

  },
  drawCorner: function(x, y, angle) { 
    var image = document.getElementById('Corner')
    this.context.save(); 
    this.context.translate(x, y);
    var TO_RADIANS = Math.PI/180; 
    this.context.rotate(angle * TO_RADIANS);
    switch (angle){
        case 0:
            var realX = -this.cw/4;
            var realY = -this.cw/4;
            break;
        case 90:
            var realX = -this.cw/4
            var realY = -(image.height)+this.cw/2
            break;
        case 180:
            var realX = -(image.width)+this.cw/2;
            var realY = -(image.height)+this.cw/2;
            break;
        case 270:
            var realX = -(image.width)+this.cw/2
            var realY = -this.cw/4
            break;
    }
    this.context.drawImage(image, realX, realY);
    this.context.restore(); 
  },
  drawSingle: function(x, y, angle) { 
    var image = document.getElementById('Straight')
    this.context.save(); 
    this.context.translate(x, y);
    var TO_RADIANS = Math.PI/180; 
    this.context.rotate(angle * TO_RADIANS);
    switch (angle){
        case 0:
            var realX = -this.cw/4;
            var realY = -this.cw/4;
            break;
        case 90:
            var realX = -this.cw/4
            var realY = -(image.height)+this.cw/4
            break;
        case 180:
            var realX = -(image.width)+this.cw/2;
            var realY = -(image.height)+this.cw/4;
            break;
        case 270:
            var realX = -(image.width)+this.cw/2
            var realY = -this.cw/4
            break;
    }
    console.log(angle);
    
    this.context.drawImage(image, realX, realY);
    this.context.restore(); 
  },
  cornerRotation: function(cellX, cellY){
    var x = cellX*3;
    var y = cellY*3;
    if (this.array[y][x] == 1) return 0;
    if (this.array[y][x+2] == 1) return 90;
    if (this.array[y+2][x+2] == 1) return 180;
    if (this.array[y+2][x] == 1) return 270;
  },
  lineRotation: function(cellX, cellY){
    var x = cellX*3;
    var y = cellY*3;
    if (this.array[y][x+1] == 0) return 0;
    if (this.array[y+1][x+2] == 0) return 90;
    if (this.array[y+2][x+1] == 0) return 180;
    if (this.array[y+1][x] == 0) return 270;
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
  game.map.drawMap()
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
}

//===============================
// 			      HELPER
//===============================

function copyArray(arr){
  var copy = [];
  for (var i in arr){ copy[i] = arr[i].slice(0); }
  return copy;
}
