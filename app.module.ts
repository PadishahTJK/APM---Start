// 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Dobavlyaem  Form  
import {FormsModule}  from "@angular/forms";

// import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {TestListComponent}  from  './test/test-list.component';
import {TaftishIlmComponent} from './taftish/taftish-ilm.component';
import{ProvComponent} from './prov/prov.component';  
//Dobavlyaem   ProductFilterPipe  tochnee importiruem 
import{ProductFilterPipe} from './products/product-filter.pipe';
import{StarComponent} from './shared/star.component';

@NgModule({
  imports: [ BrowserModule,
             FormsModule  
           ],
  declarations: [ AppComponent,
                ProductListComponent,
                ProductFilterPipe,
                
                TestListComponent,
                TaftishIlmComponent,
                ProvComponent,
                StarComponent
                ],

  bootstrap: [ AppComponent ]
})
export class AppModule {
     
 }
