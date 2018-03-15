var pic = d3.select("svg");
var days = [7,9,5,1,8,4,3,6]
var scores = [23,25,14,5,22,15,11,17]

var circles = pic.selectAll('circles').data(days).enter();
circles.append("circle");
