function createSeriesAndNumberMarks() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";

    for (var i = 0; i < 10; i++)
        if (i < 4)
            text += possible.charAt(Math.floor(Math.random() * possible.length)).toUpperCase();
        else
            text += numbers.charAt(Math.floor(Math.random() * numbers.length));
    return text;
}

function ManufacturerNumber() {
    var text = "";
    var numbers = "0123456789";
    for (var i = 0; i < 10; i++)
        text += numbers.charAt(Math.floor(Math.random() * numbers.length));
    return text;
}

console.log("Manufacturer number: " + ManufacturerNumber());
console.log("Series and number marks: " + createSeriesAndNumberMarks());
