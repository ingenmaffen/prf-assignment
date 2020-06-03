import { Component, OnInit } from '@angular/core';
import { Angulartics2Piwik } from 'angulartics2/piwik';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly angulartics: Angulartics2Piwik,
    private readonly matomoTracker: MatomoTracker
  ) {
    angulartics.startTracking();
  }

  ngOnInit() {
    this.matomoTracker.trackEvent('App init', 'From base url', 'Loaded', 1);
  }
}
