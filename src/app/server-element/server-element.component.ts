import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated   // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("Constructor Called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called!", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Called!");
    console.log('content before:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck Called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Called!");
    console.log('content after:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called!");
  }

}
