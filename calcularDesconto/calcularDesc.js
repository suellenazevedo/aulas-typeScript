function calcula(value, desc) {
    if (desc === void 0) { desc = 0.50; }
    var cal = value * desc;
    return cal;
}
console.log(calcula(100));
console.log(calcula(200, 0.30));
console.log(calcula(300, 0.60));
console.log(calcula(400));
console.log(calcula(500));
