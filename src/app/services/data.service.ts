import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private dataSrc = new BehaviorSubject(null);
  currentSrc = this.dataSrc.asObservable();

  constructor() { }

  change(data: any) {
    this.dataSrc.next(data);
  }

}