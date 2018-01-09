import { ScrollbarService } from './../../shared/directives/scrollbar/scrollbar.service';
import { OnInit, Component } from '@angular/core';

interface ITheme {
  name: string;
  class: string;
  options: MCustomScrollbar.CustomScrollbarOptions;
}

@Component({
  selector: 'malihu-scrollbar-demo',
  templateUrl: './malihu-scrollbar-demo.component.html',
  styleUrls: ['./malihu-scrollbar-demo.component.scss']
})
export class MalihuScrollbarDemoComponent implements OnInit {

  loremIpsum = require('raw-loader!./lorem-ipsum.txt');

  themes: ITheme[] = [{ 
      name: '"dark"', 
      class: 'light', 
      options: { 
        axis: 'y', 
        theme: 'metro', 
        scrollButtons: { 
          enable: true 
        } 
      } 
  }];

  constructor(
    private mScrollbarService: ScrollbarService,
  ) { }

  ngOnInit() {
  }
}
