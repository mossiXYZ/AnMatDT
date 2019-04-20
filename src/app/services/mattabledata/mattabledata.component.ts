import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-mattabledata',
  templateUrl: './mattabledata.component.html',
  styleUrls: ['./mattabledata.component.css']
})
export class MattabledataComponent implements OnInit {
  displayedColumns = ['ROLLNO','SESSION_ID', 'CLS', 'STD_NM', 'FATH_NM', 'PERCENT'];

  dataSource: MatTableDataSource<any>;


@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(private myservice: BackendService) { }

ngOnInit() {
this.dataSource = new MatTableDataSource(this.myservice.getData());
}



applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
}
