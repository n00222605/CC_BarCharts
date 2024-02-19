let barCharts = [];
let data1;
let data2;
let cleanData1=[];
let cleanData2=[];
let numRows;

let fontLight;
let fontReg;
let fontBold;

function preload(){
    data1 = loadTable("data/Combined.csv", "csv", "header");
    data2 = loadTable("data/Journey.csv", "csv", "header");
    fontLight = loadFont('fonts/Montserrat-Thin.ttf');
    fontReg = loadFont('fonts/Montserrat-Medium.ttf');
    fontBold = loadFont('fonts/Montserrat-Bold.ttf');
}

function setup(){
    background(50)
    createCanvas(1500,1200)
    angleMode(DEGREES)

    numRows = data1.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData1.push(data1.rows[i].obj)
    }
    console.log(cleanData1)

    numRows = data2.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData2.push(data2.rows[i].obj)
    }
    console.log(cleanData2)

    let barChart01 = {
        data:cleanData1,
        chartHeight:300,
        chartWidth:300,
        xPos:100,
        yPos:350,
        axisLineColour:"#fff",
        labelColour:"#fff",
        barWidth:20,
        yValue: "Total",
        xValue:"Age_Group",
        labelRotation:45,
        labelSize:10,
        numTicks:5,
        fontStyle:fontBold,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        barStrokeWeight:3,
        labelRotation:45,
        labelTextSize:10,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        valueGap:-10,
        tickLength:-5
    }

    let barChart02 = {
        data:cleanData1,
        chartHeight:300,
        chartWidth:300,
        xPos:500,
        yPos:350,
        axisLineColour:"#d9d9d9",
        labelColour:"#37b3cc",
        barWidth:20,
        yValue: "Female",
        xValue:"Age_Group",
        labelRotation:45,
        labelSize:10,
        numTicks:5,
        fontStyle:fontBold,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        barStrokeWeight:3,
        labelRotation:45,
        labelTextSize:10,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        valueGap:-10,
        tickLength:-5
    }

    let barChart03 = {
        data:cleanData2,
        chartHeight:300,
        chartWidth:300,
        xPos:900,
        yPos:350,
        axisLineColour:"#d9d9d9",
        labelColour:"#37b3cc",
        barWidth:30,
        yValue: "Female",
        xValue:"Jorney_Time",
        labelRotation:45,
        labelSize:100,
        numTicks:5,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        barStrokeWeight:3,
        labelRotation:45,
        labelTextSize:10,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        valueGap:-10,
        tickLength:-5
    }

    let barChart04 = {
        data:cleanData2,
        chartHeight:300,
        chartWidth:300,
        xPos:100,
        yPos:750,
        axisLineColour:"#d9d9d9",
        labelColour:"#37b3cc",
        barWidth:30,
        yValue: "Female",
        yValue2:"Male",
        xValue:"Jorney_Time",
        labelRotation:45,
        labelSize:100,
        numTicks:5,
        barColor:"#03fc8c",
        barColor2:"#f54275",
        barStroke:"#fcba03",
        barStrokeWeight:3,
        labelRotation:45,
        labelTextSize:10,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        valueGap:-10,
        tickLength:-5
    }

    let barChart05 = {
        data:cleanData2,
        chartHeight:300,
        chartWidth:300,
        xPos:500,
        yPos:750,
        axisLineColour:"#d9d9d9",
        labelColour:"#37b3cc",
        barWidth:30,
        yValue: "Female",
        xValue:"Jorney_Time",
        labelRotation:45,
        labelSize:100,
        numTicks:5,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        barStrokeWeight:3,
        labelRotation:45,
        labelTextSize:10,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        valueGap:-10,
        tickLength:-5
    }


    barCharts.push(new BarChart(barChart01))
    barCharts.push(new BarChart(barChart02))
    barCharts.push(new BarChart(barChart03))
    barCharts.push(new StackedBarChart(barChart04))
    barCharts.push(new ScatterBarChart(barChart05))
}

function draw() {
    background(50);
    barCharts.forEach(bar => bar.render())
}

