import { CommonModule } from "@angular/common";
import { Component,input, output} from "@angular/core";
import { TableModule } from "primeng/table";
import { TagComponent } from "@components/tag/tag.component";
import { SkeletonLoaderComponent } from "@components/skeleton-loader/skeleton-loader.component";
@Component({
  selector: "uebiz-table",
  imports: [TableModule, CommonModule, TagComponent, SkeletonLoaderComponent],
  templateUrl: "./table.component.html",
})
export class TableComponent {
  tableHeadings = input<any[]>([]);
  tableBody = input<any[]>([]);
  loading = input<boolean>(false);
  columns = input<{ field: string; header: string }[]>([])
  // we typically don't use any but in this case it cal literally be an array of anything will change to be more type specific at a later stage
  data = input<any[]>([])
  rows = input<number>(5)
  rowsPerPageOptions = input<number[]>([5, 10, 25, 50])
  rowSelected = output<any[]>()
  selectedRows: any[] = [];

  onSelectionChange(selected: any[]) {
    this.selectedRows = selected;
    console.log(this.selectedRows)
    this.rowSelected.emit(this.selectedRows);
  }
}
