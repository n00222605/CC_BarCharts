class AVGStackedBarChart {
	constructor(obj) {
        this.data = obj.data;
		this.xValue = obj.xValue;
		this.yValues = obj.yValues;
		this.zValue = obj.zValue;
		//Charts
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
		this.axisLineColour = obj.axisLineColour;
		//Bars
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
		this.barColor = obj.barColor;
		this.barWidth = obj.barWidth;
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
        //avg line
        this.avgLineColor = obj.avgLineColor;
        this.avgLineThickness = obj.avgLineThickness;
		//Labels
		this.labelColour = obj.labelColour;
		this.labelRotation = obj.labelRotation;
		this.labelTextSize = obj.labelTextSize;
		//Ticks
		this.numTicks = obj.numTicks;
		this.tickColor = obj.tickColor;
		this.tickValueColor = obj.tickValueColor;
		this.tickTextSize = obj.tickTextSize;
		this.valueGap = obj.valueGap;
		this.tickLength = obj.tickLength;
		// Title
		this.titleText = obj.titleText;
		this.titleSize = obj.titleSize;
		this.titleColour = obj.titleColour;
		this.titleWidth = this.chartWidth / 2;
        // font
		this.fontStyle = obj.fontStyle;
        // scale
		this.maxValue = max(this.data.map(d => d[this.zValue]));// Find the maximum value in the data for scaling
		this.scale = this.chartHeight / this.maxValue; // Calculate the scaling factor for the chart
	}


	render() {

		push(); // Save current drawing style
		translate(this.xPos, this.yPos);  // Translate to the starting position for drawing
		stroke(this.axisLineColour);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);


		let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1) // Calculate the gap between bars
		let xLabels = this.data.map(d => d[this.xValue]);


		push();

		translate(gap, 0); // Translate to the starting point for drawing bars
		for (let i = 0; i < this.data.length; i++) { // Loop through the data to draw bars and labels
			push();
			for (let j = 0; j < this.yValues.length; j++) {
				//bars
				let barHeight = int(this.data[i][this.yValues[j]] * this.scale);
				noStroke()
				fill(colors[j % colors.length]);
				stroke(this.barStroke)
				strokeWeight(this.barStrokeWeight)
				rect(0, 0, this.barWidth, -barHeight);
				translate(0, -barHeight);
			}

			// Labels
			pop();

			push();
			translate(this.barWidth / 2, 5);
			textAlign(LEFT, TOP);
			rotate(this.labelRotation);
			noStroke();
			fill(this.labelColour);

			textSize(this.labelTextSize);
			textFont(this.fontStyle);
			text(xLabels[i], 0, 0);
			pop()

			translate(gap + this.barWidth, 0);

		}
		pop();

        stroke(this.avgLineColor)
        strokeWeight(this.avgLineThickness)
        line(0,-100,this.chartWidth,-100)

		// loop through the ticks
		for (let i = 0; i <= this.numTicks; i++) {
			push();
			// Move to the next tick position
			translate(0, i * (-this.chartHeight / this.numTicks))
			noFill();
			stroke(this.tickColor)
			line(0, 0, this.tickLength, 0)
			textAlign(RIGHT, CENTER);
			noStroke();
			fill(this.tickValueColor);
			textSize(this.tickTextSize);
			textFont(this.fontStyle);
			// Puts a gap between each of the ticks
			let tickGap = (this.maxValue / this.numTicks).toFixed(2);
			text((tickGap * i).toFixed(2), (this.valueGap) - 5, 0)
			pop();
		}

        

		// title
		noStroke();
		textAlign(CENTER, BOTTOM);
		textSize(this.titleSize);
		textFont(this.fontStyle);
		fill(this.titleColour);
		text(this.titleText, this.titleWidth, -325);


		pop();

	}



}