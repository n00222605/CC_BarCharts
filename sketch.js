let barCharts = [];
let data1;
let data2;
let cleanData1=[];
let cleanData2=[];
let numRows;
let colors = ["#f0a5d3", "#816094"]

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
        //----Data----//
        data:cleanData1,
        yValue: "Total",
        xValue:"Age_Group",
        //------------//

        // axis + chart 
        chartHeight:300,
        chartWidth:300,
        xPos:100,
        yPos:350,
        axisLineColour:"#fff",
        // bars
        barWidth:20,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        barStrokeWeight:3,
        // labels
        labelColour:"#fff",
        labelRotation:45,
        labelTextSize:10,
        // ticks
        numTicks:5,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Time spent Travelling to work for men",
        titleSize: 15,
        titleColour: "#46387C",
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
        xPos:500,
        yPos:350,
        axisLineColour:"#d9d9d9",
        barStrokeWeight:3,
        // bars
        barWidth:20,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        // labels
        labelColour:"#37b3cc",
        labelRotation:45,
        labelTextSize:10,
        labelTextSize:10,
        // ticks
        numTicks:5,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        valueGap:-10,
        tickLength:-5,
        // title
        titleText: "Time spent Travelling to work for men",
        titleSize: 15,
        titleColour: "#46387C",
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
        xPos:950,
        yPos:350,
        axisLineColour:"#ffffff",
        // bars
        barWidth:20,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        barStrokeWeight:3,
        // labels
        labelRotation:45,
        labelColour:"#9003fc",
        labelTextSize:10,
        // ticks
        numTicks:5,
        tickColor:"#9003fc",
        tickValueColor:"#9003fc",
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Time spent Travelling to work for men",
        titleSize: 15,
        titleColour: "#46387C",
        // font
        fontStyle:fontReg,
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
        xPos:100,
        yPos:800,
        axisLineColour:"#151126",
        axisLineThickness: 1.3,
        // bars
        barWidth:28,
        barStroke:"#fcba03",
        barStrokeWeight:3,
        // labels
        labelRotation:45,
        labelColour:"#2F3159",
        labelTextSize:14,
        // ticks
        numTicks:5,
        tickColor:"#151126",
        tickValueColor:"#151126",
        tickTextSize:14,
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
        xPos:500,
        yPos:800,
        axisLineColour:"#000000",
        // bars
        barWidth:30,
        barColor:"#03fc8c",
        barStroke:"#fcba03",
        barStrokeWeight:8,
        // labels
        labelColour:"#37b3cc",
        labelRotation:0,
        labelTextSize:7,
        // ticks
        numTicks:5,
        tickColor:"#9003fc",
        tickValueColor:"#fc0335",
        tickLength:-5,
        valueGap:-10,
        // title
        titleText: "Male and Female Journey Times",
        titleSize: 15,
        titleColour: "#46387C",
        // font
        fontStyle:fontBold,
    }


    barCharts.push(new BarChart(barChart01))
    barCharts.push(new BarChart(barChart02))
    barCharts.push(new HorizontalBarChart(barChart03))
    barCharts.push(new StackedBarChart(barChart04))
    barCharts.push(new ScatterPlotChart(barChart05))
}

function draw() {
    background("#d9b6b6");
    barCharts.forEach(bar => bar.render())
}

