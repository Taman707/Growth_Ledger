// analysis-dash.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analysis-dash',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analysis-dash.html',
  styleUrl: './analysis-dash.css'
})
export class AnalysisDash {

  /* ---------------- FILTERS ---------------- */
  selectedTime = 'month';
  selectedMetric = 'revenue';
  chartType = 'bar';

  timeOptions = [
    { label: 'Weekly', value: 'week' },
    { label: 'Monthly', value: 'month' },
    { label: 'Yearly', value: 'year' }
  ];

  metricOptions = [
    { label: 'Revenue', value: 'revenue' },
    { label: 'Expenses', value: 'expense' },
    { label: 'Net Profit', value: 'profit' },
    { label: 'Cashflow', value: 'cashflow' },
    { label: 'Growth Index', value: 'growth' }
  ];

  /* ---------------- MOCK DATA ---------------- */

  dataMap: any = {
    week: {
      revenue:  [45, 52, 38, 66, 72, 90, 78],
      expense:  [22, 28, 26, 34, 41, 39, 30],
      profit:   [23, 24, 12, 32, 31, 51, 48],
      cashflow: [60, 65, 58, 72, 78, 88, 82],
      growth:   [20, 28, 18, 34, 41, 55, 48]
    },

    month: {
      revenue:  [120,140,180,165,210,240,260,245,300,320,310,350],
      expense:  [80,90,95,100,110,120,140,135,150,160,155,170],
      profit:   [40,50,85,65,100,120,120,110,150,160,155,180],
      cashflow: [90,110,130,120,160,190,205,198,230,250,240,280],
      growth:   [12,18,24,20,30,34,38,35,44,48,46,55]
    },

    year: {
      revenue:  [180,240,320,420,520],
      expense:  [120,160,210,260,300],
      profit:   [60,80,110,160,220],
      cashflow: [140,200,260,350,420],
      growth:   [10,16,24,36,48]
    }
  };

  labelsMap: any = {
    week: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    month:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    year:['2022','2023','2024','2025','2026']
  };

  get chartData(): number[] {
    return this.dataMap[this.selectedTime][this.selectedMetric];
  }

  get chartLabels(): string[] {
    return this.labelsMap[this.selectedTime];
  }

  get maxValue(): number {
    return Math.max(...this.chartData);
  }

get linePoints(): string {

  const width = 600;
  const height = 220;
  const paddingX = 25;
  const usableWidth = width - (paddingX * 2);

  return this.chartData.map((val, i) => {

    const x =
      paddingX +
      (i / (this.chartData.length - 1)) * usableWidth;

    const y =
      height -
      (val / this.maxValue) * 170;

    return `${x},${y}`;

  }).join(' ');
}

}
