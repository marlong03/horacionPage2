import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { PeriodicoComponent } from './components/periodico/periodico.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { FundacionComponent } from './components/fundacion/fundacion.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { DetalleNoticiaComponent } from './components/noticia/detalle-noticia/detalle-noticia.component';
import { BannerDefaultComponent } from './components/sections/banner-default/banner-default.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    PoliticasComponent,
    PeriodicoComponent,
    HistoriaComponent,
    FundacionComponent,
    NoticiaComponent,
    AgendaComponent,
    DetalleNoticiaComponent,
    BannerDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
