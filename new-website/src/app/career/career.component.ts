import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

interface JobItem {
  company: string;
  title: string;
  timeframe: string;
  description?: string;
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
      { company: 'NRECA', title: 'Sr. Software Developer (IV)', timeframe: 'Sept 2023 to Present', description: 'Lead developer on agile software development team responsible for all aspects of SDLC for portfolio of web applications designed to support business functions. Responsibilities include architecting full-stack solutions from conception to deployment, including management of cloud infrastructure and DevSecOps pipelines, as well as production workload support.' },
      { company: 'NRECA', title: 'Sr. Software Developer (III)', timeframe: 'Dec 2018 to Sept 2023', description: 'Core contributor on agile software development team, during which I delivered reliable software that adhered to best practices for all aspects of software lifecycle (analysis, design, development, testing, release, and maintenance).' },
      { company: 'NRECA', title: 'Sr. Front-End Developer and Technical Lead', timeframe: 'Nov 2014 to Dec 2018', description: 'Led four-person development team to bring web project visions to reality and ensure they met expectations by translating business goals into prioritized technical requirements needed for successful project completion' },
      { company: 'The Knowland Group', title: 'Marketing Coordinator', timeframe: 'Oct 2013 to Nov 2014', description: 'Managed all online strategies to increase web application and website traffic, lead generation, and user engagement. Participated in agile planning sessions to help identify and prioritize enhancements needed in web application. Shortened web content update cycle from several weeks to a couple hours by designing and coding a custom Drupal interface, migrating static website content, and regression testing the website.' },
      { company: 'Acumatica', title: 'Website Manager and Marketing Assistant', timeframe: 'Feb 2013 to Oct 2013', description: 'Responsible for all website changes, increasing web conversion rates, and weekly reporting on website performance metrics for the marketing department.' }
    ];
  }
}
