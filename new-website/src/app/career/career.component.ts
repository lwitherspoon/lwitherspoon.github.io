import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

interface JobItem {
  company: string;
  title: string;
  timeframe: string;
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  jobs: JobItem[];

  constructor() {
    this.jobs = [
      { company: 'NRECA', title: 'Sr. Software Developer', timeframe: 'TBD to Present' },
      { company: 'NRECA', title: 'Sr. Software Developer', timeframe: 'TBD to Present' },
      { company: 'NRECA', title: 'Sr. Software Developer', timeframe: 'TBD to Present' },
      { company: 'NRECA', title: 'Sr. Software Developer', timeframe: 'TBD to Present' }
    ];
  }
}
