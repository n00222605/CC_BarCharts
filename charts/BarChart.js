class BarChart{
	constructor (obj){
		this.data = obj.data;
		//charts
		this.chartWidth = obj.chartWidth;
		this.chartHeight = obj.chartHeight;
		this.xPos = obj.xPos;
		this.yPos = obj.yPos;
		//colors + custom
		this.axisLineColour = obj.axisLineColour;
		this.labelColour = obj.labelColour;
		this.fontStyle = obj.fontStyle;
		this.barColor = obj.barColor;
		// let barColor=[];
		this.barStroke = obj.barStroke;
		this.barStrokeWeight = obj.barStrokeWeight;
		//bars
		this.barWidth = obj.barWidth;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		//labels
		this.numTicks = obj.numTicks;
		this.maxValue = max(this.data.map(d => d[this.yValue]));
		this.scale = this.chartHeight / this.maxValue;
		this.labelRotation = obj.labelRotation;
		this.labelTextSize = obj.labelTextSize;
		//ticks
		this.tickColor =  obj.tickColor;
		this.tickValueColor = obj.tickValueColor;
		this.valueGap = obj.valueGap;
		this.tickLength = obj.tickLength;

		this.titleText = obj.titleText;
		this.titleSize = obj.titleSize;
		this.titleColour = obj.titleColour;
		this.titleWidth = this.chartWidth / 2;
		
	}

	render(){
		

		push();
		translate (this.xPos, this.yPos);
		stroke(this.axisLineColour);
		line(0,0,0,-this.chartHeight);
		line(0,0,this.chartWidth,0 );

		let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length + 1)
		let xLabels = this.data.map(d => d[this.xValue]);

		
		push();

		translate(gap, 0);
		for(let i = 0; i < this.data.length; i++){
			
			// fill(barColor[i % barColor.length]);
			fill(this.barColor)
			stroke(this.barStroke)
			strokeWeight(this.barStrokeWeight)
			rect(0,0, this.barWidth, -this.data[i][this.yValue]*this.scale);
			
			push();
			translate(this.barWidth/2,5);
			textAlign(LEFT, CENTER);
			rotate(this.labelRotation);
			noStroke();
			fill(this.labelColour);
			
			textSize(this.labelTextSize);
			textFont(this.fontStyle)
			text(xLabels[i],0,0);
			pop()
			translate(gap+this.barWidth,0)
		}
		pop();

		for(let i = 0; i<=this.numTicks;i++){
			push();
			translate(0,i*(-this.chartHeight/this.numTicks))
			noFill();
			stroke(this.tickColor)
			line(0,0,this.tickLength,0)
			textAlign(RIGHT, CENTER);
			noStroke();
			fill(this.tickValueColor);
			let tickGap =  (this.maxValue / this.numTicks).toFixed(2);
			text((tickGap*i).toFixed(2),(this.valueGap) - 5,0)
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