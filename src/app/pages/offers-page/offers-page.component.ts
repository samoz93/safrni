import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { TripModel } from 'src/app/data/models/TripModel';
import { TripService } from 'src/app/data/services/trip.service';
import { StaticInfo, TABS } from 'src/app/data/static/main-info';
import { FilterWidgetComponent } from './filter-widget/filter-widget.component';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss'],
})
export class OffersPageComponent implements OnInit {
  images = [
    'https://wallpapercave.com/wp/wp1813727.jpg',
    'https://wallpapercave.com/wp/wp1813725.jpg',
    'https://i.ytimg.com/vi/no7LCcGTvn8/maxresdefault.jpg',
  ];
  projectName = StaticInfo.projectName;
  data$: Observable<TripModel[]>;
  constructor(public _ser: TripService, private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.data$ = this._ser.data$;
  }

  onFilterChange(filterData: any) {
    console.log('mainPage', filterData);
  }

  openFilter() {
    const data = this._bottomSheet.open(FilterWidgetComponent);
    data.afterDismissed().subscribe((d) => {
      this.onFilterChange(d);
    });
  }
}
