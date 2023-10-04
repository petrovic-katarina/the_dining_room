import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() page: number = 1;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Input() pageSize: number = 9;
  @Input() collectionSize: number = 0;

  onChange(newPage: number) {
    this.pageChange.emit(newPage);
  }

  onFirstPage() {
    this.page = 1;
    this.onChange(this.page);
  }

  onLastPage() {
    // Izračunajte broj stranica na osnovu ukupne veličine kolekcije i veličine strane
    const totalPages = Math.ceil(this.collectionSize / this.pageSize);

    // Postavite vrednost stranice na poslednju stranicu
    this.page = totalPages;

    // Pozovite metodu onChange kako biste emitovali novu vrednost stranice
    this.onChange(this.page);
  }
}
