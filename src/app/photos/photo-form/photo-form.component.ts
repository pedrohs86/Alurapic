import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'ap-photo-form',
    templateUrl: './photo-form.component.html',
})
export class PhotoFormComponent implements OnInit {

    photoForm: FormGroup;
    file: File;

    constructor(
      private formBuilder: FormBuilder,
      private photoService: PhotoService,
      private router: Router,
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
        .subscribe(() => this.router.navigate(['']));
        alert('Upload complete');
    }

}
