var player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};
var player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};
var player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
        play: 433,
    },
    server: "chess",
};
var Figures;
(function (Figures) {
    Figures["SQUARES"] = "squares";
    Figures["CIRCLES"] = "circles";
    Figures["TRIANGES"] = "triangles";
    Figures["OTHERS"] = "others";
})(Figures || (Figures = {}));
function calculateAmountOfFigures(figure) {
    var result = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    if (!Array.isArray(figure)) {
        console.log("Is not Array!");
    }
    else {
        figure.forEach(function (item, index, arr) {
            if (item.hasOwnProperty("name")) {
                switch (item["name"]) {
                    case "rect":
                        result["squares"] += 1;
                        break;
                    case "circle":
                        result["circles"] += 1;
                        break;
                    case "triangle":
                        result["triangles"] += 1;
                        break;
                    default:
                        result["others"] += 1;
                        break;
                }
            }
        });
        return result;
    }
    return result;
}
var data = [
    {
        name: "rect",
        data: { a: 5, b: 10 },
    },
    {
        name: "rect",
        data: { a: 6, b: 11 },
    },
    {
        name: "triangle",
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: "line",
        data: { l: 15 },
    },
    {
        name: "circle",
        data: { r: 10 },
    },
    {
        name: "circle",
        data: { r: 5 },
    },
    {
        name: "rect",
        data: { a: 15, b: 7 },
    },
    {
        name: "triangle",
    },
];
console.log(calculateAmountOfFigures(data));
