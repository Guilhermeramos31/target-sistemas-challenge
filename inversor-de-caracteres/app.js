const string = "target sistemas";

console.log(reverse(string));

function reverse(a) {
    var gnirts = [];
    for (let i = a.length; i > 0; i--) {
        gnirts.push(a[i-1]);
    }
    return gnirts.toString().replace(/[',']/g,'');
}