export class Map {
    constructor(mortars, targets, frontObserver, MTRelationships) {
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.dstncBtwnGridLinesBold = 10;
        this.boldLineWidth = 0.05;
        this.fontSize = 1;
        this.locPointRadius = 0.2;
        this.startingX = 0;
        this.endingX = 0;
        this.startingY = 0;
        this.endingY = 0;
        this.mapSvg = document.createElement("svg");
        this.mortarTargetRelationShip = MTRelationships;
        this.mortars = mortars;
        this.targets = targets;
        this.frontObserver = frontObserver;
    }
    creataMap() {
        var mapSvg = this.mapSvg;
        mapSvg.setAttribute("width", "1200");
        mapSvg.setAttribute("height", "1200");
        mapSvg.innerHTML = "";
        this.trackMapMargins();
        this.drawGridLines();
        this.setViewBox();
        this.mortarTargetRelationShip.edges.forEach(pair => {
            var target = pair.target;
            var mortar = pair.mortar;
            this.drawCustomLine(mortar.location.east, target.location.east, mortar.location.north, target.location.north, mapSvg, this.boldLineWidth / 4, "255,0,0");
        });
        this.mortars.forEach(mortar => {
            this.addLocationPointOnMap(mortar, mapSvg, "red");
        });
        this.targets.forEach(target => {
            this.addLocationPointOnMap(target, mapSvg, "green");
        });
        this.addLocationPointOnMap(this.frontObserver, mapSvg, "blue");
        mapSvg.innerHTML = mapSvg.innerHTML + " ";
    }
    trackMapMargins() {
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.mortars.forEach(mortar => {
            this.trackMinMax(mortar);
        });
        this.targets.forEach(target => {
            this.trackMinMax(target);
        });
        this.trackMinMax(this.frontObserver);
        var maxD = Math.max(this.maxX - this.minX, this.maxY - this.minY);
        if (maxD < 100) {
            this.dstncBtwnGridLinesBold = 10;
        }
        else {
            this.dstncBtwnGridLinesBold = 1000;
        }
        this.startingX = Math.floor(this.minX / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        this.endingX = Math.ceil(this.maxX / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        this.startingY = Math.floor(this.minY / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        this.endingY = Math.ceil(this.maxY / this.dstncBtwnGridLinesBold) * this.dstncBtwnGridLinesBold;
        var mapLenght = Math.max(this.endingX - this.startingX, this.endingY - this.startingY);
        this.fontSize = Math.ceil(mapLenght / 50);
        this.locPointRadius = 0.1 * Math.ceil(mapLenght / 25);
        this.boldLineWidth = this.locPointRadius / 4;
    }
    addLocationPointOnMap(location, parentSVG, color) {
        if (Number(location.location.east) == 0 && Number(location.location.north) == 0) {
            return;
        }
        var mortarSVGElem = document.createElement("circle");
        mortarSVGElem.setAttribute("cx", location.location.east.toString());
        mortarSVGElem.setAttribute("cy", (-location.location.north).toString());
        mortarSVGElem.setAttribute("r", this.locPointRadius.toString());
        mortarSVGElem.setAttributeNS(null, 'style', 'fill: ' + color + ';');
        parentSVG.appendChild(mortarSVGElem);
        var mortarSVGRounding = document.createElement("circle");
        mortarSVGRounding.setAttribute("cx", location.location.east.toString());
        mortarSVGRounding.setAttribute("cy", (-location.location.north).toString());
        mortarSVGRounding.setAttribute("r", "4%"); //5%
        mortarSVGRounding.setAttributeNS(null, 'style', 'fill: ' + color + '; fill-opacity:0.4 ');
        parentSVG.appendChild(mortarSVGRounding);
        var locNum = document.createElement("text");
        locNum.setAttribute("x", (Number(location.location.east) + this.locPointRadius).toString());
        locNum.setAttribute("y", (-Number(location.location.north) - this.locPointRadius).toString());
        locNum.setAttribute("font-size", this.fontSize.toString());
        locNum.innerHTML = location.DisplayTitle;
        parentSVG.appendChild(locNum);
    }
    trackMinMax(location) {
        if (Number(location.location.east) == 0 && Number(location.location.north) == 0)
            return;
        if (this.minX == 0 && this.maxX == 0 && this.minY == 0 && this.maxY == 0) {
            this.minX = Number(location.location.east);
            this.maxX = Number(location.location.east);
            this.minY = Number(location.location.north);
            this.maxY = Number(location.location.north);
        }
        else {
            if (this.minX > Number(location.location.east)) {
                this.minX = Number(location.location.east);
            }
            if (this.maxX < Number(location.location.east)) {
                this.maxX = Number(location.location.east);
            }
            if (this.minY > Number(location.location.north)) {
                this.minY = Number(location.location.north);
            }
            if (this.maxY < Number(location.location.north)) {
                this.maxY = Number(location.location.north);
            }
        }
    }
    drawGridLines() {
        if (this.minX == 0 && this.maxX == 0 && this.minY == 0 && this.maxY == 0) {
            return;
        }
        var deltaX = this.maxX - this.minX;
        var deltaY = this.maxY - this.minY;
        var gridStrokeWidth = this.boldLineWidth; //0.05;
        var boldLinesCountX = Math.ceil(deltaX / this.dstncBtwnGridLinesBold);
        var boldLinesCountY = Math.ceil(deltaY / this.dstncBtwnGridLinesBold);
        var maxLinesPerDrawing = 15;
        if (Math.max(boldLinesCountX, boldLinesCountY) > maxLinesPerDrawing) {
            return;
        }
        var mapSvg = this.mapSvg;
        var linePos = 0;
        for (linePos = this.startingX; linePos <= this.endingX; linePos += this.dstncBtwnGridLinesBold) {
            this.drawVerticalLine(linePos, mapSvg, gridStrokeWidth, true);
            this.drawThinLines(linePos, false, gridStrokeWidth);
        }
        for (linePos = this.startingY; linePos <= this.endingY; linePos += this.dstncBtwnGridLinesBold) {
            this.drawHorizontalLine(linePos, mapSvg, gridStrokeWidth, true);
            this.drawThinLines(linePos, true, gridStrokeWidth);
        }
    }
    drawThinLines(startingPos, isHorizontal, gridStrokeWidth) {
        var dstncBtwnGridLinesThin = this.dstncBtwnGridLinesBold / 4;
        var dstncBtwnGridLinesXtrThin = dstncBtwnGridLinesThin / 10;
        var mapSvg = this.mapSvg;
        for (var linePos = startingPos; linePos < startingPos + this.dstncBtwnGridLinesBold; linePos += dstncBtwnGridLinesThin) {
            if (linePos > startingPos)
                isHorizontal ? this.drawHorizontalLine(linePos, mapSvg, gridStrokeWidth / 2, false) : this.drawVerticalLine(linePos, mapSvg, gridStrokeWidth / 2, false);
            for (var eThinlinePos = linePos + dstncBtwnGridLinesXtrThin; eThinlinePos < linePos + dstncBtwnGridLinesThin; eThinlinePos += dstncBtwnGridLinesXtrThin) {
                isHorizontal ? this.drawHorizontalLine(eThinlinePos, mapSvg, gridStrokeWidth / 4, false) : this.drawVerticalLine(eThinlinePos, mapSvg, gridStrokeWidth / 4, false);
            }
        }
    }
    drawHorizontalLine(linePos, parentElem, strokeWidth, showLineNum) {
        var lineVGElem = document.createElement("line");
        lineVGElem.setAttribute("x1", (this.minX - this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("x2", (this.maxX + this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("y1", (-linePos));
        lineVGElem.setAttribute("y2", (-linePos));
        lineVGElem.setAttribute("style", 'stroke:rgb(0,255,0);stroke-width:' + strokeWidth);
        parentElem.appendChild(lineVGElem);
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        if (showLineNum) {
            var nearStartX = Math.ceil(this.startingX + this.dstncBtwnGridLinesBold / 6);
            var lineNum = document.createElement("text");
            lineNum.setAttribute("x", nearStartX.toString());
            lineNum.setAttribute("y", (-linePos));
            lineNum.setAttribute("font-size", this.fontSize.toString());
            var displayLineNum = (linePos < 1000) ? linePos : linePos / 1000;
            lineNum.innerHTML = displayLineNum.toString();
            parentElem.appendChild(lineNum);
            //<text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
        }
    }
    drawVerticalLine(linePos, parentElem, strokeWidth, showLineNum) {
        var lineVGElem = document.createElement("line");
        lineVGElem.setAttribute("y1", -(this.minY - this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("y2", -(this.maxY + this.dstncBtwnGridLinesBold));
        lineVGElem.setAttribute("x1", (linePos));
        lineVGElem.setAttribute("x2", (linePos));
        lineVGElem.setAttribute("style", 'stroke:rgb(0,255,0);stroke-width:' + strokeWidth);
        parentElem.appendChild(lineVGElem);
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
        if (showLineNum) {
            var nearStartY = Math.ceil(-1 * this.startingY - this.dstncBtwnGridLinesBold / 6);
            var lineNum = document.createElement("text");
            lineNum.setAttribute("y", (nearStartY).toString());
            lineNum.setAttribute("x", (linePos));
            lineNum.setAttribute("font-size", this.fontSize.toString());
            var displayLineNum = (linePos < 1000) ? linePos : linePos / 1000;
            lineNum.innerHTML = displayLineNum.toString();
            parentElem.appendChild(lineNum);
        }
    }
    drawCustomLine(x1, x2, y1, y2, parentElem, strokeWidth, colorRGBString) {
        var lineVGElem = document.createElement("line");
        lineVGElem.setAttribute("x1", x1.toString());
        lineVGElem.setAttribute("x2", x2.toString());
        lineVGElem.setAttribute("y1", (-y1).toString());
        lineVGElem.setAttribute("y2", (-y2).toString());
        lineVGElem.setAttribute("style", 'stroke:rgb(' + colorRGBString + ' );stroke-width:' + strokeWidth);
        parentElem.appendChild(lineVGElem);
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    }
    setViewBox() {
        var viewBoxValue = this.startingX + " " +
            (-1) * this.endingY + " " +
            (this.endingX - this.startingX) + " " +
            (this.endingY - this.startingY);
        this.mapSvg.setAttribute("viewBox", viewBoxValue);
    }
}
