import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-all-tvshows',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-tvshows.component.html',
  styleUrl: './all-tvshows.component.css',
})
export class AllTVshowsComponent implements OnInit {
  currpg!: BehaviorSubject<number>;

  pg!: number;

  constructor(private tvs: TvshowsService) {
    this.currpg = new BehaviorSubject<number>(this.pg);
  }

  allShows!: any[];
  allData!: any;

  nextPg() {
    if (this.pg < this.totalpg) this.currpg.next(++this.pg);
  }
  prevPg() {
    if (this.pg > 1) this.currpg.next(--this.pg);
  }
  totalpg!: number;
  ngOnInit() {
    this.currpg.subscribe((newPage) => {
      this.tvs.getAllShows(newPage).subscribe((res) => {
        this.allShows = res.results;
        this.pg = res.page;
        this.allData = res;
        this.totalpg = res.total_pages;
        console.log(res);
      });
    });
  }
}
