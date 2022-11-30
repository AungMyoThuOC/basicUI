import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-disabled',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.css']
})
export class DisabledComponent {
  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroService.sayHello();
    console.log("Hi OniiChan")
  }
}
