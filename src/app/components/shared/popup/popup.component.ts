import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  list: string[] = ['I develop the user interface.', 'Web page development.',
  'I create ux element interactions.', 'I position your company brand.'];
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
