class HorizontalBarChart {
	constructor(obj) {
		this.data = obj.data;

		//Charts
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
		this.labelColour = obj.labelColour;

		// Axis
		this.axisLineColour = obj.axisLineColour;

		// Bar decoration
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
		this.barColor = obj.barColor;
		//Bars
		this.barWidth = obj.barWidth;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		this.maxValue = max(this.data.map(d => d[this.yValue]));
		this.scale = this.chartWidth / this.maxValue;
        this.barStroke = obj.barStroke
        this.barStrokeWeight = obj.barStrokeWeight

		//Labels
		this.labelRotation = obj.labelRotation;
		this.labelTextSize = obj.labelTextSize;
		this.fontStyle = obj.fontStyle;
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

	}

	render() {

		push();
		translate(this.xPos, this.yPos);
		stroke(this.axisLineColour);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);



		let gap = (this.chartHeight - (this.data.length * this.barWidth)) / (this.data.length + 1)
		let xLabels = this.data.map(d => d[this.xValue]);


		push();

		translate(0,gap);
		for (let i = 0; i < this.data.length; i++) {

			// Making the bars

			fill(this.barColor)
			stroke(this.barStroke)
			strokeWeight(this.barStrokeWeight)
			rect(0, -300, this.data[i][this.yValue] * this.scale, this.barWidth);

			// Labels
			push();
			translate(-10, -this.chartHeight+10);
			textAlign(RIGHT, CENTER);
			// rotate(this.labelRotation);
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


		// Making the title for the chart
		noStroke();
		textAlign(CENTER, BOTTOM);
		textSize(this.titleSize);
		textFont(this.fontStyle);
		fill(this.titleColour);
		text(this.titleText, this.titleWidth, -325);


		pop();

	}


}