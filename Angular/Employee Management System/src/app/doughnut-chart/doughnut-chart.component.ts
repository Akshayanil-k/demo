import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {
  
  constructor(){}

  ngOnInit(): void {
    this.createChart();
  }
  
  createChart(): void {
    const activeEmployees = 43;
    const inactiveEmployees = 9;

    const doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [activeEmployees, inactiveEmployees],
          backgroundColor: [
            '#00FFFF',
            '#008000'
          ],
          borderWidth: 1
        }],
        labels: [
          'Active Employees',
          'Inactive Employees'
        ]
      },
      options: {
        responsive: true,
      }
    });
  }

}






/*
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  activeEmployees!: 25;
  inactiveEmployees!: number;
  //const activeEmployees = 25

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>('http://localhost:3000/profile').subscribe(data => {
      const activeEmployees = data.filter((profile: { active: any; }) => profile.active).length;
      const inactiveEmployees = data.filter((profile: { active: any; }) => !profile.active).length;
      this.createChart(activeEmployees, inactiveEmployees);
    });
  }

  createChart(activeEmployees: number, inactiveEmployees: number): void {
    const doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [activeEmployees, inactiveEmployees],
          backgroundColor: [
            '	#00FFFF',
            '#008000'
          ],
          borderWidth: 1
        }],
        labels: [
          'Active Employees',
          'Inactive Employees'
        ]
      },
      options: {
        responsive: true,
      }
    });
  }

}
*/
