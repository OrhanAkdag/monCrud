import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './components/menu/menu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { ModalModule } from 'ngx-bootstrap';
import { CdkTableModule } from '@angular/cdk/table';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MatCardModule } from '@angular/material/card';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { MatRadioModule } from '@angular/material/radio';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsListComponent,
    ModalComponent,
    DashboardComponent,
    NotfoundComponent,
    ProductsDetailsComponent,
    ProductsAddComponent,
    ProductsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ModalModule.forRoot(),
    CdkTableModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
