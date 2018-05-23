import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.scss"]
})
export class AutoCompleteComponent implements OnInit {
  @Input() items: any[];
  @Output() itemClick: EventEmitter<string> = new EventEmitter<string>();

  hideList: boolean = false;

  itemList: any[];

  inputText = "";

  constructor() {}

  ngOnInit() {}

  onItemClick(item: string) {
    this.hideList = true;

    this.itemClick.emit(item);

    this.inputText = item;
  }

  findItems() {
    if (!this.items || this.inputText.length == 0) {
      this.itemList = [];

      return;
    }

    this.hideList = false;

    this.itemList = this.items.filter(t =>
      t.toLowerCase().startsWith(this.inputText.toLowerCase())
    );
  }
}
