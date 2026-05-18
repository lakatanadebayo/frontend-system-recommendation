import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../service/data/data.service";
import {Router} from "@angular/router";
import {UserDefaultService} from "../../service/user-default/user-default.service";
import {Subject, takeUntil} from "rxjs";
import {MenuItem} from "../../entity/MenuItem";
import {User} from "../../entity/User";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit, OnDestroy {

  localAuthStatus: boolean = false
  localUser: User

  menuItems: MenuItem[] = [
    { label: 'Utilisateur', route: '/app/home/user' },
    { label: 'Ressource', route: '/app/home/ressource' },
    { label: 'Recommandation', route: '/app/home/recommandation' }
  ]

  private destroy$ = new Subject<void>()

  constructor(private dataService: DataService, private router: Router, private userDefaultService: UserDefaultService) {  }

  ngOnInit(): void {
    this.getAuthStatusFromDataService()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getAuthStatusFromDataService(): void {
    this.dataService.authStatus$.pipe(takeUntil(this.destroy$)).subscribe(authStatus => {
      this.localAuthStatus = authStatus
    })
  }

  signIn() {
    this.router.navigate(['app/authentication'])
  }

  signOut() {
    this.dataService.setAuthStatus(false)
    this.dataService.setUser(this.userDefaultService.getDefaultUser())
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['app/home/recommandation'])
    })
  }

}
