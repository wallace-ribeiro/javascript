var f = function f() {
    var arr = [ "red", "green", "blue" ];
    var result = [];
    for(var i=0; i<arr.length-1; i++) {
        let j = i;
        var func = function() {
            return arr[j];
        };
        result.push(func);
    }
    return result;
}

let a = f();
console.log(a[0]());
console.log(a[1]());


var f = function f() {
    var arr = [ "red", "green", "blue" ];
    var result = [];
    for(var i=0; i<arr.length-1; i++) {
        var j = i;
        var func = function() {
            return arr[j];
        };
        result.push(func);
    }
    return result;
}

a = f();
console.log(a[0]());
console.log(a[1]());