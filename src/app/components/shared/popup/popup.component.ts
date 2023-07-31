import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  list: string[] = ['services.popup.text-1', 'services.popup.text-2',
  'services.popup.text-3', 'services.popup.text-4'];
  title: string = '';
  isMap: boolean = false;

  constructor(public dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) public data: { title: string, isMap: boolean }) {}

  ngOnInit(): void {
    const { title, isMap } = this.data;
    this.title = title;
    this.isMap = isMap;
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
