import { Component, OnInit } from '@angular/core';
import { Obtener_seriesService } from '../obtener_series.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  constructor(private Obtener_seriesService: Obtener_seriesService) {}
  series: Serie[] = [];
  averageSeasons: number | null = null;

  ngOnInit(): void {
    this.Obtener_seriesService.getSeries().subscribe(series => {
      this.series = series
      this.calculateAverageSeasons();
    });
  }

  private calculateAverageSeasons(): void {
    if (this.series.length === 0) {
      this.averageSeasons = 0;
      return;
    }

    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }
}
