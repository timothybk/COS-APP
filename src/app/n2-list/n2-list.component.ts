import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-n2-list',
  templateUrl: './n2-list.component.html',
  styleUrls: ['./n2-list.component.css']
})
export class N2ListComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items', ref => ref.orderBy('N2')).valueChanges();
  }

  ngOnInit() {
  }

}
