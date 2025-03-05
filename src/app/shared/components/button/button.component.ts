import { Component,input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
@Component({
  selector: "uebiz-button",
  imports: [CommonModule, ButtonModule],
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  buttonText = input("");
  classElements = input(" rounded-2xl");
  icon = input("");
  severity = input<
    "success" | "secondary" | "info" | "warn" | "danger" | "contrast"
  >("success");
  iconPosition = input<"left" | "right" | "top" | "bottom">("left");
  disabled = input(false);
  loading = input(false);

  actionEvent = output<void>()

  actionItem(): void {
    if (!this.disabled()) {
      this.actionEvent.emit();
    }
  }
}
