function calculateArea() {
    var sideLength = document.getElementById("sideLength").value;
    var area = sideLength * sideLength;
    document.getElementById("resultArea").value = area;
}

function calculatePerimeter() {
    var sideLength = document.getElementById("sideLength").value;
    var perimeter = 4 * sideLength;
    document.getElementById("resultPerimeter").value = perimeter;
}

function resetValues() {
    document.getElementById("sideLength").value = "";
    document.getElementById("resultArea").value = "";
    document.getElementById("resultPerimeter").value = "";
}
