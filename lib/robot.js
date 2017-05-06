'use strict';

 function Robot() {
   // implement your solution here!
  this.coordinates = [0,0]
  this.bearing = null
 }

Robot.prototype.orient = function(direction) {
  var directions = [ 'north', 'east', 'south', 'west' ];
  if(directions.includes(direction)) {
    this.bearing = direction
  } else {
    var error = new Error("Invalid Robot Bearing")
    throw error
  }
}

Robot.prototype.turnRight = function() {
  var directions = [ 'north', 'east', 'south', 'west' ];
  // find direction
  this.bearing = directions[(directions.indexOf(this.bearing)+ 1) % 4]
}

Robot.prototype.turnLeft = function() {
  var directions = [ 'north', 'west', 'south', 'east' ];
  // find direction
  this.bearing = directions[(directions.indexOf(this.bearing)+ 1) % 4]
}

Robot.prototype.at = function(x,y){
  this.coordinates = [x,y]
}

Robot.prototype.advance = function(x,y){
  if (this.bearing === "north"){
    this.coordinates[1]++
  } else if (this.bearing === "south"){
    this.coordinates[1]--
  } else if (this.bearing === "east"){
    this.coordinates[0]++
  } else if (this.bearing === "west"){
    this.coordinates[0]--
  }
}



Robot.prototype.instructions = function(directions){
  var legend = {
    "L" : "turnLeft",
    "R" : "turnRight",
    "A" : "advance",
  }
  return directions.split('').map(function(dir){
    return legend[dir]
  })
}

Robot.prototype.place = function(obj){
  this.coordinates[0] = obj.x
  this.coordinates[1] = obj.y
  this.bearing = obj.direction
};

Robot.prototype.evaluate = function(string) {
  //console.log(this);
  console.log(string);
  string.split('').forEach(dir => {
    if (dir === "R") {
      this.turnRight()
    } else if (dir === "L") {
      this.turnLeft()
    } else if (dir === "A") {
      this.advance()
    }
  })
  //console.log(this.place(string));
  //return this.place(string)

};
