import { N2Item } from './../../shared/n2-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-n2-list-item',
  templateUrl: './n2-list-item.component.html',
  styleUrls: ['./n2-list-item.component.css']
})
export class N2ListItemComponent implements OnInit {
  @Input() n2Item: N2Item;

  constructor() { }

  ngOnInit() {
  }

}
