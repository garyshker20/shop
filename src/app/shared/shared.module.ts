import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SearchComponent, HeaderComponent, FilterComponent, SortComponent, FooterComponent],
  exports: [SearchComponent, HeaderComponent, FilterComponent, SortComponent, FooterComponent]
})
export class SharedModule { }
