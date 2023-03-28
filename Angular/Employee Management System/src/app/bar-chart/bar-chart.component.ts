import { Component, OnInit } from '@angular/core';
import  Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const leavesTaken = [4, 3, 8, 1, 6];
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: daysOfWeek,
        datasets: [{
          data: leavesTaken,
          backgroundColor: '#FF0000',
          borderWidth: 1
        }],
      },
      options: {
        responsive: true,
      }
    });
  }
}





/*

import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  leaves: number[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const formattedWeekAgo = this.formatDate(weekAgo);
    const formattedToday = this.formatDate(today);
    const url = `http://localhost:3000/leaveDates?from=${formattedWeekAgo}&to=${formattedToday}`;
    this.http.get<any>(url).subscribe(data => {
      this.leaves = data.map((leave: { duration: any; }) => leave.duration);
      this.createChart();
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  createChart(): void {
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .range([0, width])
      .domain(d3.range(this.leaves.length).map(i => i.toString()))
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.leaves.filter(l => l !== undefined)) || 0])
      .range([height, 0]);

    const svg = d3.select('#barChart')
      .append('svg')
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    svg.selectAll('rect')
      .data(this.leaves)
      .join('rect')
      .attr('x', (d, i) => x(i.toString()) || 0)
      .attr('y', d => y(d || 0))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d || 0))
      .attr('fill', 'steelblue');

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));
  }

}
*/
