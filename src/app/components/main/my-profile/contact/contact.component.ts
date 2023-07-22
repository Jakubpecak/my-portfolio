import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/components/shared/popup/popup.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(title: string, isMap: boolean): void {
    this.dialog.open(PopupComponent, { disableClose: true, data: { title, isMap } });
  }

}
