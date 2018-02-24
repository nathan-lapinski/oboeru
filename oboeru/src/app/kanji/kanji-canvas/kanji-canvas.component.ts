import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-kanji-canvas',
  templateUrl: './kanji-canvas.component.html',
  styleUrls: ['./kanji-canvas.component.css']
})
export class KanjiCanvasComponent implements OnInit, AfterViewInit {
  private paint = false;
  private kanjiCanvas;
  private context;
  private clickX = [];
  private clickY = [];
  private clickDrag = [];
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.kanjiCanvas = document.getElementById('kanjiCanvas');
    this.context = this.kanjiCanvas.getContext('2d');
  }

  public onMouseDown(event) {
    const mouseX = event.pageX - this.kanjiCanvas.offsetLeft;
    const mouseY = event.pageY - this.kanjiCanvas.offsetTop;

    this.paint = true;
    this.addClick(mouseX, mouseY);
    this.redraw();
  }

  public onMouseUp(event) {
    this.paint = false;
  }

  public onMouseMove(event) {
    if (this.paint) {
      this.addClick(event.pageX - this.kanjiCanvas.offsetLeft, event.pageY - this.kanjiCanvas.offsetTop, true);
      this.redraw();
    }
  }

  public onMouseLeave(event) {
    this.paint = false;
  }

  public clearCanvas(): void {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  private addClick(x, y, dragging = false): void {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
  }

  private redraw(): void {
    this.clearCanvas();
    this.context.strokeStyle = '#000000';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 5;

    for (let i = 0; i < this.clickX.length; i++) {
      this.context.beginPath();
      if (this.clickDrag[i] && i) {
        this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
      } else {
        this.context.moveTo(this.clickX[i] - 1, this.clickY[i]);
      }
      this.context.lineTo(this.clickX[i], this.clickY[i]);
      this.context.closePath();
      this.context.stroke();
    }
  }

}
