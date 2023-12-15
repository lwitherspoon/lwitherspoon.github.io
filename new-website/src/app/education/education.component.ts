import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

interface EducationItem {
  school: string;
  graduated: number;
  degree: string;
  specialization: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  events: EducationItem[] = []; 
  
  constructor() { 
    this.events = [
      {
        school: 'Virginia Polytechnic University', 
        graduated: 2022, 
        degree: 'M.A. in Information Technology',
        specialization: 'Software Development'
      },
      {
        school: 'George Mason University', 
        graduated: 2014, 
        degree: 'M.A. in Global Affairs',
        specialization: 'Global Economics & Development'
      },
      {
        school: 'James Madison University', 
        graduated: 2012, 
        degree: 'B.A. in Modern Foreign Languages',
        specialization: 'French and Russian'
      },
    ];
  } 
}
