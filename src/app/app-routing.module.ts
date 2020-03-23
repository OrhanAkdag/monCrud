import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: DashboardComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'product/:id', component: ProductsDetailsComponent},
  { path: 'products/edit/:id', component: ProductsEditComponent},
  { path: 'new-products', component: ProductsAddComponent},
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
