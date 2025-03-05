import { Component, input } from "@angular/core";
import { SkeletonModule } from "primeng/skeleton";
@Component({
  selector: "uebiz-skeleton-loader",
  imports: [SkeletonModule],
  templateUrl: "./skeleton-loader.component.html",
})
export class SkeletonLoaderComponent {
  items = input(1);
  numberOfItems = [1];
  classElements = input<string>("h-4 bg-gray-100 rounded-xl mt-2");

  ngOnInit(): void {
    this.numberOfItems = new Array(this.items());
  }
}
