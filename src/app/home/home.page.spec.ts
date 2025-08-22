import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ciudad: string = '';
  temperatura: string = '';
  descripcion: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  obtenerClima() {
    const apiKey = 'b21f8249102161783dbc7a16fd9cbd20'; // Reemplaza con tu API Key de OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&appid=${apiKey}&units=metric&lang=es`;

    this.http.get(url).subscribe({
      next: (data: any) => {
        this.temperatura = data.main.temp;
        this.descripcion = data.weather[0].description;
        this.error = '';
      },
      error: () => {
        this.error = '❌ Ciudad no encontrada o error de conexión.';
        this.temperatura = '';
        this.descripcion = '';
      }
    });
  }
}
