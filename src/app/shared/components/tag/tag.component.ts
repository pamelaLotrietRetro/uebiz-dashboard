import { Component, input } from "@angular/core";
import { TagModule } from "primeng/tag";
@Component({
  selector: "uebiz-tag",
  imports: [TagModule],
  templateUrl: "./tag.component.html",
})
export class TagComponent {
  severity = input<
    | "success"
    | "secondary"
    | "info"
    | "warn"
    | "danger"
    | "contrast"
    | undefined
  >("info");
  value = input("");
  rounded = input(false);
  icon = input("");
}
