import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtivosListComponent } from './components/ativos-list/ativos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAtivoComponent } from './components/add-ativo/add-ativo.component';
import { FormsModule } from '@angular/forms';
import { EditAtivoComponent } from './components/edit-ativo/edit-ativo.component';

@NgModule({
  declarations: [
    AppComponent,
    AtivosListComponent,
    AddAtivoComponent,
    EditAtivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
