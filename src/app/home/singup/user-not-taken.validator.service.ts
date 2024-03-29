import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SingUpService } from './singup.service';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signUpService: SingUpService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                  .valueChanges
                  .pipe(debounceTime(300))
                  .pipe(switchMap(userName =>
                       this.signUpService.checkUserNameTaken(userName)
                  ))
                  .pipe(map(isTaken => isTaken ? { userNameTaken: true} : null))
                  .pipe(first());
        };
    }
}
