import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SideNavigationComponent} from "./components/side-navigation/side-navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, SideNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DeloitteTest2';
  userType: string = "Admin";


  userList2: UserTypes = {
    "Admin": {
      "User Management": ["Pending Access", "Permission Groups", "User Management", "User Roster"],
      "Application Management": ["Applications", "Upload Application"],
      "Framework Management": ["Frameworks", "Upload Framework"],
      "Document Library": ["My Documents", "Library"],
      "Internal Help Desk": ["Tickets"]
    },
    "Help Desk": {
      "Pending Action Items": ["Pending Users", "Pending Applications", "Pending Frameworks"],
      "Digital Assets": ["Applications", "Frameworks", "Document Library"],
      "Companies, PO, Users": ["User Management", "Company/PO", "User Roster"],
      "Help Desk": ["Tickets"]
    },
    "Read Only": {
      "Pending Action Items": ["Dashboard", "Applications", "Frameworks", "My Documents", "Library", "User Roster"]
    }

  }
}

  export interface UserTypes {
  [key: string]: Options;
}

  export interface Options {
    [key: string]: string[];
  }
