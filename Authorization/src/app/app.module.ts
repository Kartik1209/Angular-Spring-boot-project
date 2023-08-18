import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FilterPipe } from './shared/filter.pipe';
import { AvailableProductsComponent } from './available-products/available-products.component';
import { ProductsByManufacturerComponent } from './products-by-manufacturer/products-by-manufacturer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    HeaderComponent,
    HomeComponent,
    AddNewProductComponent,
    UpdateProductComponent,
    ProfileComponent,
    AddToCartComponent,
    AddressDetailsComponent,
    FrontPageComponent,
    UpdateProfileComponent,
    FilterPipe,
    AvailableProductsComponent,
    ProductsByManufacturerComponent,
    AddProductComponent,
    DeleteServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule,
    CommonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
