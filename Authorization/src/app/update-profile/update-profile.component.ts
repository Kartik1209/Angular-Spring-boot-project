import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  currentUser: any;
  profileDetails: any = {
    custId: '',
    personalInfo: '',
    email: '',
    gender: '',
    mobile: '',
  };

  constructor(
    private profileService: ProfileService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser().username;
    this.profileDetails.custId = this.currentUser;
    this.profileDetails.email = this.storageService.getUser().email;
    this.profileService.getProfileById(this.currentUser).subscribe((data) => {
      console.log(data);
      this.profileDetails = data;
    });
  }

  editprofile() {
    this.profileService.updateProfile(this.profileDetails).subscribe((data) => {
      console.log(data);
      alert('saved');
    });
    this.router.navigate(['/profile']).then(() => {
      window.location.reload();
    });
  }
}
