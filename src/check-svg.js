

// let s  = PathToSegment('M7,5 l0.75,-3 l0.75,3');
let s  = PathToSegment('M 6,10A 6 4 10 1 1 14,10');

let Points = GetPoints(Array.from(s));
let m = {s, Points};


console.log("fix", JSON.stringify(m));

