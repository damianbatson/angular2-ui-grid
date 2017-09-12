import {
  Directive, ElementRef, Injector, Input, OnInit, SimpleChanges, OnChanges, DoCheck,
  OnDestroy, Output, EventEmitter
} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ui-grid'})

export class Ng1ComponentFacade extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
  OnDestroy {

  // @Input() data: {};
  @Input() public data:any = {
    filterString: '',
    columnName: 'name'
  };
  @Output() onUpdate: EventEmitter<{}>;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('ui-grid', elementRef, injector);
  }

  ngOnInit() { super.ngOnInit(); }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }
  ngDoCheck() { super.ngDoCheck(); }
  ngOnDestroy() { super.ngOnDestroy(); }
}
