import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmOverlays } from 'agm-overlays';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLandingComponent } from './pages/main-landing/main-landing.component';
import { SearchPanelComponent } from './pages/main-landing/search-panel/search-panel.component';
import { SectionHeaderComponent } from './pages/main-landing/section-header/section-header.component';
import { SectionOffersComponent } from './pages/main-landing/section-offers/section-offers.component';
import { SectionCitiesComponent } from './pages/main-landing/section-cities/section-cities.component';
import { FooterComponent } from './common/layout/footer/footer.component';
import { HeaderInfoComponent } from './common/layout/header-info/header-info.component';
import { HeaderToolBarComponent } from './common/layout/header-tool-bar/header-tool-bar.component';
import { OfferLandingComponent } from './pages/Offer/offer-landing/offer-landing.component';
import { OfferInfoLandingComponent } from './pages/Offer/offer-info-landing/offer-info-landing.component';
import { OfferInformationComponent } from './pages/Offer/offer-info-landing/offer-information/offer-information.component';
import { OfferPlanComponent } from './pages/Offer/offer-info-landing/offer-plan/offer-plan.component';
import { OfferLocationComponent } from './pages/Offer/offer-info-landing/offer-location/offer-location.component';
import { LoginComponent } from './pages/user/login/login.component';
import { OfferBookingComponent } from './pages/Offer/offer-booking/offer-booking.component';
import { SingleTripCardComponent } from './common/widgets/single-trip-card/single-trip-card.component';

import { OursocialmediaComponent } from './common/widgets/oursocialmedia/oursocialmedia.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserProfileLandingComponent } from './pages/user/user-profile-landing/user-profile-landing.component';
import { UserProfileComponent } from './pages/user/user-profile-landing/tabs/user-profile/user-profile.component';
import { UserTripsComponent } from './pages/user/user-profile-landing/tabs/user-trips/user-trips.component';
import { UserSecurityComponent } from './pages/user/user-profile-landing/tabs/user-security/user-security.component';
import { ProfileinputComponent } from './common/widgets/profileinput/profileinput.component';
import { TourInformationComponent } from './pages/tour-information/tour-information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReadOnlyStarsComponent } from './common/widgets/read-only-stars/read-only-stars.component';
import { StepperComponent } from './common/widgets/stepper/stepper.component';
import { MatIconModule } from '@angular/material/icon';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BookingPageComponent } from './pages/booking/booking-page.component';
import { LoaderComponent } from './common/widgets/loader/loader.component';
import { Onlynumbers } from './data/directives/onlynumbers.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GuestCountInputComponent } from './common/widgets/guest-count-input/guest-count-input.component';
import { UpperFirstCharPipe } from './data/pipes/upper-first-char.pipe';
import { ServerimagePipe } from './data/pipes/serverimage.pipe';
import { CustomSelectComponent } from './common/widgets/custom-select/custom-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SwiperModule } from 'swiper/angular';
import { CustomDatePickerComponent } from './common/widgets/custom-date-picker/custom-date-picker.component';
import { LottieModule } from 'ngx-lottie';
import { AccordionListComponent } from './common/widgets/accordion-list/accordion-list.component';
import { BannerCarouselComponent } from './common/widgets/banner-carousel/banner-carousel.component';
import { PricePipe } from './data/pipes/price.pipe';
import { ValidationIconComponent } from './common/widgets/validation-icon/validation-icon.component';
import { CustomInputComponent } from './common/widgets/custom-input/custom-input.component';
import { FilterWidgetComponent } from './pages/offers-page/filter-widget/filter-widget.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { TourMapComponent } from './pages/tour-information/tour-map/tour-map.component';
import { SectionDailyTripsComponent } from './pages/main-landing/section-daily-trips/section-daily-trips.component';
import { GraphQLModule } from './graphql.module';
import { SplashComponent } from './common/widgets/splash/splash.component';
import player from 'lottie-web';
import { SaferniImageComponent } from './common/widgets/saferni-image/saferni-image.component';
import { CustomTextareaComponent } from './common/widgets/custom-textarea/custom-textarea.component';
import { HorizontalListviewComponent } from './common/widgets/horizontal-listview/horizontal-listview.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NocontentComponent } from './common/widgets/loader/nocontent/nocontent.component';
import { ErrorDlgComponent } from './common/widgets/error-dlg/error-dlg.component';
import { BookingSubmitPopupComponent } from './common/widgets/booking-submit-popup/booking-submit-popup.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LanguagePipe } from './data/pipes/language.pipe';
import { LanguageSelectorComponent } from './common/layout/language-selector/language-selector.component';
import { LogoComponent } from './common/widgets/logo/logo.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
} from '@angular/fire/analytics';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SocialLinkDirective } from './data/directives/social-link.directive';
import { TicketCounterComponent } from './common/widgets/ticket-counter/ticket-counter.component';
import { SnackCompComponent } from './common/widgets/snack-comp/snack-comp.component';
import { MatRadioModule } from '@angular/material/radio';
import { PillComponent } from './common/widgets/pill/pill.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { PhoneInputComponent } from './common/widgets/phone-input/phone-input.component';
import { PriceCaculatorPipe } from './data/pipes/price-caculator.pipe';
import { TravelTypePipe } from './data/pipes/travel-type.pipe';
import { ManageBookingComponent } from './pages/manage-booking/manage-booking.component';
import { E404Component } from './pages/e404/e404.component';

import { ImageViewerModule } from '@nghacks/image-viewer';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    SearchPanelComponent,
    SectionHeaderComponent,
    SectionOffersComponent,
    SectionCitiesComponent,
    SectionDailyTripsComponent,
    SplashComponent,
    FooterComponent,
    HeaderInfoComponent,
    HeaderToolBarComponent,
    OfferLandingComponent,
    CustomTextareaComponent,
    OfferInfoLandingComponent,
    OfferInformationComponent,
    OfferPlanComponent,
    OfferLocationComponent,
    SaferniImageComponent,
    LoginComponent,
    OfferBookingComponent,
    SingleTripCardComponent,
    OursocialmediaComponent,
    UserProfileLandingComponent,
    UserProfileComponent,
    UserTripsComponent,
    UserSecurityComponent,
    ProfileinputComponent,
    TourInformationComponent,
    HorizontalListviewComponent,
    ReadOnlyStarsComponent,
    StepperComponent,
    OffersPageComponent,
    BookingPageComponent,
    LoaderComponent,
    Onlynumbers,
    AboutUsComponent,
    GuestCountInputComponent,
    UpperFirstCharPipe,
    ServerimagePipe,
    CustomSelectComponent,
    CustomDatePickerComponent,
    BookingSubmitPopupComponent,
    AccordionListComponent,
    BannerCarouselComponent,
    PricePipe,
    ValidationIconComponent,
    CustomInputComponent,
    FilterWidgetComponent,
    TourMapComponent,
    NocontentComponent,
    ErrorDlgComponent,
    LanguagePipe,
    LanguageSelectorComponent,
    LogoComponent,
    SocialLinkDirective,
    TicketCounterComponent,
    SnackCompComponent,
    PillComponent,
    PlaygroundComponent,
    PhoneInputComponent,
    PriceCaculatorPipe,
    TravelTypePipe,

    ManageBookingComponent,

    E404Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    NgSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSelectModule,
    SwiperModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB33Yp_MzVXNyeTWkiip0mfGThC5xMSp-I',
    }),
    MatBottomSheetModule,
    GraphQLModule,
    LottieModule.forRoot({ player: playerFactory }),
    TranslocoRootModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireMessagingModule,
    MatSnackBarModule,
    MatRadioModule,
    NgxIntlTelInputModule,
    ImageViewerModule,
  ],
  providers: [
    ScreenTrackingService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'never' },
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
