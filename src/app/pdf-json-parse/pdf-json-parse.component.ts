import { Component, OnInit } from '@angular/core';

let jsPDF = require('jspdf');

@Component({
  selector: 'app-pdf-json-parse',
  templateUrl: './pdf-json-parse.component.html',
  styleUrls: ['./pdf-json-parse.component.css']
})
export class PdfJsonParseComponent implements OnInit {

  constructor() {
    let doc = new jsPDF();
    doc.text("Hello", 20, 20);
    doc.save('table.pdf');
   }

  ngOnInit() {
  }

}
