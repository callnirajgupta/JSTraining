var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
var color1;
(function (color1) {
    color1[color1["red"] = 100] = "red";
    color1[color1["blue"] = 200] = "blue";
    color1[color1["green"] = 300] = "green";
})(color1 || (color1 = {}));
console.log(color[0]);
console.log(color['red']);
console.log(color1[0]);
console.log(color1['red']);
