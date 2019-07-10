import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min';
@Component({
  selector: 'app-home-graph',
  templateUrl: './home-graph.component.html',
  styleUrls: ['./home-graph.component.css']
})
export class HomeGraphComponent implements OnInit {
  ngOnInit() {
    let dataPoints = [];
    let y = 0;		
    for ( var i = 0; i < 10000; i++ ) {		  
      y += Math.round(5 + Math.random() * (-5 - 5));	
      dataPoints.push({ y: y});
    }
    let chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Donation Analysis"
      },
      subtitles:[{
        text: "Share for care"
      }],
      data: [
      {
        type: "line",                
        dataPoints: dataPoints
      }]
    });
      
    chart.render();
      }

}
