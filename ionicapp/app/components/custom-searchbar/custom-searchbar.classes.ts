export class SearchTermChangedEventArgs {
  
  private _searchTerm: string = "";
    
  constructor(searchTerm: string) {
    this._searchTerm = searchTerm;
  }
  
  public get searchTerm() : string {
    return this._searchTerm;
  }
}