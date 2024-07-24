import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordFeatureModule } from "./modules/password-feature/password-feature.module";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { PasswordTaskDetailsService } from "./services/password-task-details.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordFeatureModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PasswordTaskDetailsService]
})
export class AppComponent implements OnInit {
  title = 'PasswordStrengthProject';
  detailsContent: string = '';

  constructor(private passwordTaskDetailsService: PasswordTaskDetailsService) {}

  ngOnInit() {
    this.detailsContent = this.passwordTaskDetailsService.getDetailsContent();
  }
}
