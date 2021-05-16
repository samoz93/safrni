import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationModel } from 'src/app/data/models/LocationModel';
import { TimelineModel } from 'src/app/data/models/timelineModel';
import { TripModel } from 'src/app/data/models/TripModel';
import { LocalService } from 'src/app/data/services/local.service';
import {
  Enum_Booking_Currency,
  Trips,
} from 'src/app/data/services/saferniGraphql.service';
import { TripService } from 'src/app/data/services/trip.service';
import { ICONS } from 'src/app/data/utils/enums';
import { TooltipPosition } from '@angular/material/tooltip';
import { BookingService } from 'src/app/data/services/booking.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingSubmitPopupComponent } from 'src/app/common/widgets/booking-submit-popup/booking-submit-popup.component';

@Component({
  selector: 'app-tour-information',
  templateUrl: './tour-information.component.html',
  styleUrls: ['./tour-information.component.scss'],
})
export class TourInformationComponent implements OnInit {
  trip: TripModel;
  timelines: TimelineModel[] = [];
  relatedTrips: TripModel[];
  bookForm: FormGroup;
  icons = ICONS;

  isSubmiting = false;

  isArabic$;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    loc: LocalService,
    private bookingService: BookingService,
    public dialog: MatDialog
  ) {
    this.isArabic$ = loc.isArabic$;
  }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      arrivalDate: new FormControl(null, [Validators.required]),
      message: new FormControl(null),
    });
    this.activatedRoute.data.subscribe(async (data) => {
      this.trip = data.dataMap.trip;
      this.timelines = data.dataMap.timelines;
      this.relatedTrips = await this.tripService.getRelatedTrips(this.trip);
    });
  }

  async onFormSubmitted() {
    Object.keys(this.bookForm.controls).forEach((field) => {
      const control = this.bookForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
    if (this.bookForm.valid) {
      this.isSubmiting = true;

      let result = await this.bookingService.createBooking(
        this.trip.id,
        this.bookForm.get('fullName')?.value,
        this.trip.basePrice,
        this.trip.basePeopleCount,
        this.trip.discount,
        Enum_Booking_Currency.Dollar,
        this.bookForm.get('phone')?.value,
        this.bookForm.get('arrivalDate')?.value,
        this.bookForm.get('message')?.value
      );

      this.isSubmiting = false;
      this.openDialog(result);
    }
  }
  showOnMap() {
    this.router.navigate([
      '/map',
      this.activatedRoute.snapshot.paramMap.get('id'),
    ]);
  }

  getAllLocations(): LocationModel[] {
    let allLocations = new Array();
    this.timelines.forEach((element) => {
      allLocations.push(...element.locations);
    });

    return allLocations;
  }
  getCarouselImages(): string[] {
    return this.getAllLocations().map((l) => l.images[0].url);
  }

  openDialog(success: boolean = true): void {
    const dialogRef = this.dialog.open(BookingSubmitPopupComponent, {
      data: { success: success },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
