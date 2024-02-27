class BarChart {
    constructor(obj) {
        // Data 
        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        // Chart 
        this.chartWidth = obj.chartWidth;
        this.chartHeight = obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;

        // Bar 
        this.barStroke = obj.barStroke;
        this.barStrokeWeight = obj.barStrokeWeight;
        this.barColor = obj.barColor;
        this.barWidth = obj.barWidth;

        // Label 
        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;

        // Tick 
        this.numTicks = obj.numTicks;
        this.tickColor = obj.tickColor;
        this.tickValueColor = obj.tickValueColor;
        this.valueGap = obj.valueGap;
        this.tickLength = obj.tickLength;

        // Title
        this.titleText = obj.titleText;
        this.titleSize = obj.titleSize;
        this.titleColour = obj.titleColour;
        this.titleWidth = this.chartWidth / 2;

        // Font 
        this.fontStyle = obj.fontStyle;

        // Scale 
        this.maxValue = max(this.data.map(d => d[this.yValue])); // Find the maximum value in the data for scaling
        this.scale = this.chartHeight / this.maxValue; // Calculate the scaling factor for the chart
    }

    render() {
        push(); // Save current drawing style
        translate(this.xPos, this.yPos); // Translate to the starting position for drawing
        stroke(this.axisLineColour);
        line(0, 0, 0, -this.chartHeight);
        line(0, 0, this.chartWidth, 0);

        let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1); // Calculate the gap between bars
        let xLabels = this.data.map(d => d[this.xValue]);

        push();

        translate(gap, 0); // Translate to the starting point for drawing bars
        for (let i = 0; i < this.data.length; i++) { // Loop through the data to draw bars and labels
            fill(colors[i % colors.length]);
            stroke(this.barStroke);
            strokeWeight(this.barStrokeWeight);
            rect(0, 0, this.barWidth, -this.data[i][this.yValue] * this.scale);

            push();
            translate(this.barWidth / 2, 5);
            textAlign(LEFT, CENTER);
            rotate(this.labelRotation);
            noStroke();
            fill(this.labelColour);

            textSize(this.labelTextSize);
            textFont(this.fontStyle);
            text(xLabels[i], 0, 0);
            pop();
            translate(gap + this.barWidth, 0);
        }
        pop();

        // Loop through the ticks
        for (let i = 0; i <= this.numTicks; i++) {
            push();
            // Move to the next tick position
            translate(0, i * (-this.chartHeight / this.numTicks));
            noFill();
            stroke(this.tickColor);
            line(0, 0, this.tickLength, 0);
            textFont(this.fontStyle);
            textAlign(RIGHT, CENTER);
            noStroke();
            fill(this.tickValueColor);
            // Puts a gap between each of the ticks
            let tickGap = (this.maxValue / this.numTicks).toFixed(2);
            text((tickGap * i).toFixed(2), (this.valueGap) - 5, 0);
            pop();
        }

        noStroke();
        textAlign(CENTER, BOTTOM);
        textSize(this.titleSize);
        textFont(this.fontStyle);
        fill(this.titleColour);
        text(this.titleText, this.titleWidth, -325);

        pop();
    }
}
