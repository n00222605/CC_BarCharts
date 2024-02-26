class StackedBarChart {
	constructor(obj) {
		this.data = obj.data;

		//Charts
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;

		// Axis
		this.axisLineColour = obj.axisLineColour;
		this.axisLineThickness = obj.axisLineThickness;

		// Bar decoration
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
		this.barColor = obj.barColor;


		//Bars
		this.barWidth = obj.barWidth;
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
		this.xValue = obj.xValue;
		this.yValues = obj.yValues;
		this.zValue = obj.zValue;
		this.maxValue = max(this.data.map(d => d[this.zValue]));

		//Labels
		this.labelColour = obj.labelColour;
		this.scale = this.chartHeight / this.maxValue;
		this.labelRotation = obj.labelRotation;
		this.labelTextSize = obj.labelTextSize;
		this.fontStyle = obj.fontStyle;


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

	}

	render() {

		push();
		translate(this.xPos, this.yPos);
		strokeWeight(this.axisLineThickness)
		stroke(this.axisLineColour);
		line(0, 0, 0, -this.chartHeight);
		line(0, 0, this.chartWidth, 0);


		let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1)
		let xLabels = this.data.map(d => d[this.xValue]);


		push();

		translate(gap, 0);

		for (let i = 0; i < this.data.length; i++) {
			push();
			// Making the bars
			for (let j = 0; j < this.yValues.length; j++) {

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

		// Ticks
		for (let i = 0; i <= this.numTicks; i++) {
			push();
			translate(0, i * (-this.chartHeight / this.numTicks))
			noFill();
			stroke(this.tickColor)
			line(0, 0, this.tickLength, 0)
			textAlign(RIGHT, CENTER);
			noStroke();
			fill(this.tickValueColor);
			textSize(this.tickTextSize);
			textFont(this.fontStyle);

			let tickGap = (this.maxValue / this.numTicks).toFixed(2);
			text((tickGap * i).toFixed(2), (this.valueGap) - 5, 0)
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