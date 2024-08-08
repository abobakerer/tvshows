import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id!: number;
  constructor(private details: TvshowsService, private route: ActivatedRoute) {}

  tv!: any;
  seasons!: number;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.details.getShowDetails(this.id).subscribe((res) => {
      this.tv = res;
      this.seasons = this.tv.seasons.length;
      console.log(res);
    });
  }
}
