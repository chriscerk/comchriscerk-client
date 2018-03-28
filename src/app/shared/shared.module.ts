import { PrettyURLPipe } from './pipes/pretty-url.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SummaryPipe, PrettyURLPipe],
  exports: [SummaryPipe, PrettyURLPipe]
})
export class SharedModule { }
