import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

interface EducationItem {
  school: string;
  date: string;
  degree: string;
  specialization?: string;
  details?: string;
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
        school: 'AWS', 
        date: '10/15/2022', 
        degree: 'Certified AWS Cloud Practitioner',
        specialization: '',
        details: '<a href="https://www.credly.com/badges/6849deca-0e50-4332-9b73-463c2a42e509/public_url" target="_blank"><img src="../../assets/aws-certified-cloud-practitioner.png">Credly certification badge</a>',
      },
      {
        school: 'Virginia Polytechnic University', 
        date: '2022', 
        degree: 'M.A. in Information Technology',
        specialization: 'Software Development',
        details: '<a href="https://vtmit.vt.edu">Virginia Tech Online Master of Information Technology program</a>',
      },
      {
        school: 'George Mason University', 
        date: '2014', 
        degree: 'M.A. in Global Affairs',
        specialization: 'Global Economics & Development',
        details: '<a href="https://lewitherspoon-gloa720.weebly.com">Some selected samples of my academic work while pursuing my M.A.</a>'
      },
      {
        school: 'James Madison University', 
        date: '2012', 
        degree: 'B.A. in Modern Foreign Languages',
        specialization: 'French and Russian'
      },
    ];
  } 
}
