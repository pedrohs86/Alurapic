import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'ap-photo-form',
    templateUrl: './photo-form.component.html',
})
export class PhotoFormComponent implements OnInit {

    photoForm: FormGroup;
    file: File;
    preview: string;
    percentDone = 0;

    constructor(
      private formBuilder: FormBuilder,
      private photoService: PhotoService,
      private router: Router,
      private alertService: AlertService,
      private userService: UserService,
      ) { }

    ngOnInit(): void {

        this.photoForm = this.formBuilder.group({
            file: ['', Validators.required],
            description: ['', Validators.maxLength(300)],
            allowComments: [true]
        });
    }

    upload() {
      const description = this.photoForm.get('description').value;
      const allowComments = this.photoForm.get('allowComments').value;
      this.photoService
        .upload(description, allowComments, this.file)
        .pipe(finalize(() => {
          this.router.navigate(['/user', this.userService.getUserName()]);
        }))
        .subscribe(
            (event: HttpEvent<any>) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.alertService.success('Upload complete', true);
              }
            },
            err => {
              this.alertService.danger('Upload Error!', true);
            }
            );

    }

    handleFile(file: File) {
      this.file = file;
      const reader = new FileReader();
      reader.onload = (event: any) => this.preview = event.target.result;
      reader.readAsDataURL(file);
    }

}
