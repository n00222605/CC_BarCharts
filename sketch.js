let barCharts = [];
let data1;
let data2;
let cleanData1=[];
let cleanData2=[];
let numRows;
let colors = ["#EBD0DE", "#EBEBD0","#D0EBDE"]

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
    createCanvas(1500,1600)
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
        //----Data----//
        data:cleanData1,
        yValue: "Total",
        xValue:"Age_Group",
        //------------//

        // axis + chart 
        chartHeight:300,
        chartWidth:300,
        xPos:200,
        yPos:350,
        axisLineColour:"#000000",
        // bars
        barWidth:20,
        barStroke:"#000000",
        barStrokeWeight:0.5,
        // labels
        labelColour:"#1C1C66",
        labelRotation:45,
        labelTextSize:10,
        // ticks
        numTicks:5,
        tickColor:"#000000",
        tickValueColor:"#1C1C66",
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Total Road Deaths Among all Age Groups",
        titleSize: 15,
        titleColour: "#1C1C66",
        // font
        fontStyle:fontBold,
    }

    let barChart02 = {
        //----Data----//
        data:cleanData1,
        yValue: "Female",
        xValue:"Age_Group",
        //------------//

        // axis + chart
        chartHeight:300,
        chartWidth:300,
        xPos:700,
        yPos:350,
        axisLineColour:"#000000",
        // bars
        barWidth:20,
        barStroke:"#000000",
        barStrokeWeight:0.5,
        // labels
        labelColour:"#1C1C66",
        labelRotation:45,
        labelTextSize:10,
        // ticks
        numTicks:5,
        tickColor:"#000000",
        tickValueColor:"#1c1c66",
        valueGap:-10,
        tickLength:-5,
        // title
        titleText: "Female Road Deaths Among all Age Groups",
        titleSize: 15,
        titleColour: "#1c1c66",
        // font
        fontStyle:fontBold,
    }

    let barChart03 = {
        //----Data----//
        data:cleanData2,
        yValue: "Male",
        xValue:"Journey_Time",
        //------------//

        // axis + chart
        chartHeight:300,
        chartWidth:300,
        xPos:200,
        yPos:1250,
        axisLineColour:"#000000",
        // bars
        barWidth:20,
        barStroke:"#000000",
        barStrokeWeight:0.5,
        // labels
        labelRotation:45,
        labelColour:"#1c1c66",
        labelTextSize:10,
        // ticks
        numTicks:5,
        tickColor:"#000000",
        tickValueColor:"#1c1c66",
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Time spent Travelling to work for Men",
        titleSize: 15,
        titleColour: "#46387C",
        // font
        fontStyle:fontBold,
    }

    let barChart04 = {
        //----Data----//
        data:cleanData2,
        xValue: "Journey_Time",
        yValues:["Male","Female"],
        zValue:"Total",
        //------------//

        // axis + chart
        chartHeight:300,
        chartWidth:300,
        xPos:200,
        yPos:800,
        axisLineColour:"#000000",
        // bars
        barWidth:28,
        barStroke:"#000000",
        barStrokeWeight:0.5,
        // labels
        labelRotation:45,
        labelColour:"#1c1c66",
        labelTextSize:10,
        // ticks
        numTicks:5,
        tickColor:"#000000",
        tickValueColor:"#1c1c66",
        tickTextSize:15,
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Male and Female Journey Times",
        titleSize: 15,
        titleColour: "#46387C",
        // font
        fontStyle:fontBold,
    }

    let barChart05 = {
        //----Data----//
        data:cleanData2,
        yValue: "Female",
        xValue:"Journey_Time",
        //------------//

        // axis + chart
        chartHeight:300,
        chartWidth:300,
        xPos:700,
        yPos:800,
        axisLineColour:"#000000",
        // bars
        barWidth:30,
        barStrokeWeight:10,
        // labels
        labelColour:"#1c1c66",
        labelRotation:0,
        labelTextSize:8,
        // ticks
        numTicks:5,
        tickColor:"#000000",
        tickValueColor:"#1c1c66",
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Time spent Travelling to work for Women",
        titleSize: 15,
        titleColour: "#46387C",
        // font
        fontStyle:fontBold,
    }

    let barChart06 = {
        //----Data----//
        data:cleanData2,
        xValue: "Journey_Time",
        yValues:["Male","Female"],
        zValue:"Total",
        //------------//

        // axis + chart
        chartHeight:300,
        chartWidth:300,
        xPos:700,
        yPos:1250,
        axisLineColour:"#000000",
        // bars
        barWidth:28,
        barStroke:"#000000",
        barStrokeWeight:0.5,
        // avg line
        avgLineColor:"#000000",
        avgLineThickness:1,
        // labels
        labelRotation:45,
        labelColour:"#1c1c66",
        labelTextSize:15,
        // ticks
        numTicks:5,
        tickColor:"#000000",
        tickValueColor:"#1c1c66",
        tickTextSize:15,
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Average time spent travelling to work for Men and Women",
        titleSize: 15,
        titleColour: "#1c1c66",
        // font
        fontStyle:fontBold,
    }


    barCharts.push(new BarChart(barChart01))
    barCharts.push(new BarChart(barChart02))
    barCharts.push(new HorizontalBarChart(barChart03))
    barCharts.push(new StackedBarChart(barChart04))
    barCharts.push(new ScatterPlotChart(barChart05))
    barCharts.push(new AVGStackedBarChart(barChart06))
}

function draw() {
    background("#F8F8F8");
    barCharts.forEach(bar => bar.render())
}

