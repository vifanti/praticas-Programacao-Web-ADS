import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { JwtModule } from '@auth0/angular-jwt';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { VerificaCategoriaComponent } from './verifica-categoria/verifica-categoria.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderModule } from './shared/modules/page-header/page-header.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function tokenGetter() {
    return localStorage.getItem('access_token');
  }
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        PageHeaderModule,
        NgbDropdownModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: tokenGetter
            }
        }),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    declarations: [
      AppComponent,
      SidebarComponent,
      HeaderComponent,
      VerificaCategoriaComponent,
      HomeComponent,
      LoginComponent
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
