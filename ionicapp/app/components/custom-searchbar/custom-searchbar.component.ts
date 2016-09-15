import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SearchTermChangedEventArgs } from './custom-searchbar.classes'

@Component({
  selector: 'custom-searchbar',
  templateUrl: 'build/components/custom-searchbar/custom-searchbar.component.html'
})
export class CustomSearchbar implements OnInit {
    
  @Input() title: string = "";
  @Input() placeholder: string = "";
  @Output() searchTermChanged = new EventEmitter<SearchTermChangedEventArgs>();
  
  private isSearchbarVisible: boolean = false;
  private searchTerm: string = "";

  constructor() {

  }
  
  ngOnInit() {

  }

  onSearchbarButtonClick(event) {
    this.changeSearchbarVisibility();
  }

  onSearchbarInput(event) {
    this.fireSearchbarChangedEvent();
  }

  onSearchbarBlur(event) {
    if (this.searchTerm.length == 0) {
      this.isSearchbarVisible = false;
    }
  }
  
  changeSearchbarVisibility() {
    this.isSearchbarVisible = !this.isSearchbarVisible;
  }

  fireSearchbarChangedEvent(){
    let eventArgs = new SearchTermChangedEventArgs(this.searchTerm)
    this.searchTermChanged.emit(eventArgs)
  }
}