import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthService} from 'src/app/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isHandSet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches)
    );

  user: firebase.User;

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
  }

  register() {
    this.router.navigate(['/register']);
  }

}
