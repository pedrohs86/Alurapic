import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SingUpService } from './singup.service';

@Component({

    templateUrl: './singup.component.html',
})


export class SingupComponent implements OnInit {

  singupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;


  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private singupService: SingUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) {}

  ngOnInit(): void {
      this.singupForm = this.formBuilder.group({
        email: ['',
          [
            Validators.required,
            Validators.email
          ]
        ],
        fullName: ['',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40)
          ]
        ],
        userName: ['',
          [
            Validators.required,
            lowerCaseValidator,
            Validators.minLength(2),
            Validators.maxLength(30)
          ],
          [
            this.userNotTakenValidatorService.checkUserNameTaken()
          ]
        ],
        password: ['',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(16)
          ]
        ],

      });

// tslint:disable-next-line: no-unused-expression
      this.platformDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus();
  }

  singup() {
    const newUser: NewUser = this.singupForm.getRawValue() as NewUser;
    this.singupService
        .singup(newUser)
        .subscribe(
          () => this.router.navigate(['']),
          err => console.log(err)
        );
  }

}
