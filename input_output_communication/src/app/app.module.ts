import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParrentComponent } from './components/parrent_to_child/parrent/parrent.component';
import { ChildComponent } from './components/parrent_to_child/child/child.component';
import { ChildComponent as ChildComponent2} from './components/child_to_parrent/child/child.component';
import { ParrentComponent as ParentCompontent2} from './components/child_to_parrent/parrent/parrent.component';


@NgModule({
  declarations: [
    AppComponent,
    ParrentComponent,
    ChildComponent,
    ChildComponent2,
    ParentCompontent2,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
