/*import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const productiveHours = 800;
    const totalHours = 1000;
    const value = Math.round(productiveHours / totalHours * 100);

    const arc = d3.arc()
      .innerRadius(70)
      .outerRadius(90)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    const svg = d3.select('.gauge-chart svg');
    const chart = svg.select('.chart');
    const outerCircle = chart.select('.outer');
    const innerCircle = chart.select('.inner');
    const valueText = chart.select('.value');

    outerCircle.style('stroke-dasharray', `calc(2 * ${Math.PI} * ${arc.outerRadius()} / 3) calc(2 * ${Math.PI} * ${arc.outerRadius()} / 3)`);
    innerCircle.style('stroke-dasharray', `calc(2 * ${Math.PI} * ${arc.outerRadius()} / 3) calc(2 * ${Math.PI} * ${arc.outerRadius()} / 3)`);
    innerCircle.style('stroke-dashoffset', `calc(2 * ${Math.PI} * ${arc.outerRadius()} / 3)`);
    valueText.text(`${value}%`);

    svg.on('mouseenter', function() {
      innerCircle.transition()
        .duration(200)
        .style('stroke-width', 10);
    });
    svg.on('mouseleave', function() {
      innerCircle.transition()
        .duration(200)
        .style('stroke-width', 5);
    });
  }

}

*/



import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const productiveHours = 800;
    const totalHours = 1000;
    const value = Math.round(productiveHours / totalHours * 100);

    const svg = d3.select('.gauge-chart svg')
      .attr('viewBox', '-50 -50 100 100');

    const g = svg.append('g')
      .attr('transform', 'translate(0, 0)');

    const arc = d3.arc()
      .innerRadius(70)
      .outerRadius(90)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    const path = g.append('path')
      //.attr('d', arc)
      .attr('stroke', '#000')
      .attr('stroke-width', '10')
      .attr('fill', 'none');

    const valueText = g.append('text')
      .text(`${value}%`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '20')
      .attr('dy', '0.5em');

    const unitText = g.append('text')
      .text('Productive')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12')
      .attr('dy', '1.5em');

    svg.on('mouseenter', function() {
      path.transition()
        .duration(200)
        .attr('stroke-width', 15);
    });
    svg.on('mouseleave', function() {
      path.transition()
        .duration(200)
        .attr('stroke-width', 10);
    });
  }

}


