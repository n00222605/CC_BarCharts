class HorizontalBarChart {
	constructor(obj) {
		this.data = obj.data;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		//Charts
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
		this.axisLineColour = obj.axisLineColour;
		//Bars
		this.barColor = obj.barColor;
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
		this.barWidth = obj.barWidth;
        this.barStroke = obj.barStroke
        this.barStrokeWeight = obj.barStrokeWeight
		//Labels
		this.labelColour = obj.labelColour;
		this.labelRotation = obj.labelRotation;
		this.labelTextSize = obj.labelTextSize;
		// ticks
		this.numTicks = obj.numTicks;
		this.tickColor = obj.tickColor;
		this.tickValueColor = obj.tickValueColor;
		this.tickTextSize = obj.tickTextSize;
		this.valueGap = obj.valueGap;
		this.tickLength = obj.tickLength;
		// Title
		this.titleText = obj.titleText;
		this.titleXOffset = obj.titleXOffset;
		this.titleYOffset = obj.titleYOffset;
		this.titleSize = obj.titleSize;
		this.titleColour = obj.titleColour;
		this.titleWidth = this.chartWidth / 2;
		// fonts
		this.fontStyle = obj.fontStyle;
		// scale
		this.maxValue = max(this.data.map(d => d[this.yValue])); // Find the maximum value in the data for scaling
        this.scale = this.chartHeight / this.maxValue; // Calculate the scaling factor for the chart
	}

	render() {

		push(); // Save current drawing style
		translate(this.xPos, this.yPos); // Translate to the starting position for drawing
		stroke(this.axisLineColour);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);



		let gap = (this.chartHeight - (this.data.length * this.barWidth)) / (this.data.length + 1); // Calculate the gap between bars
		let xLabels = this.data.map(d => d[this.xValue]);


		push();

		translate(0,gap);
		for (let i = 0; i < this.data.length; i++) {
			// bars
			fill(colors[i%colors.length])
			stroke(this.barStroke)
			strokeWeight(this.barStrokeWeight)
			rect(0, -300, this.data[i][this.yValue] * this.scale, this.barWidth);
			// Labels
			push();
			translate(-10, -this.chartHeight+10);
			textAlign(RIGHT, CENTER);
			fill(this.labelColour);
			noStroke();
			textSize(this.labelTextSize);
			textFont(this.fontStyle);
			text(xLabels[i], 0, 0);
			pop()
			translate(0, gap + this.barWidth);
		}
		pop();
		// Ticks
		for (let i = 0; i <= this.numTicks; i++) {
			push();
			translate(i * (this.chartWidth / this.numTicks), 15);
			noFill();
			stroke(this.tickColor);
			line(0, -15, 0, this.tickLength); // Adjust line coordinates
			textAlign(LEFT, TOP); // Change textAlign
			noStroke();
			fill(this.tickValueColor);
			textSize(this.tickTextSize);
			textFont(this.fontStyle);

			let tickGap = (this.maxValue / this.numTicks).toFixed(2);
			text((tickGap * i).toFixed(2), 0, -this.valueGap-10); // Adjust text position
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