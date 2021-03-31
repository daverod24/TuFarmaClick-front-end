import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  validate( control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    return this.http.get<any>(`${ this.baseUrl }usuarios?email=${ email }`)
                .pipe(
                  map( resp => {

                    return ( resp.total === 0 ) 
                        ? null
                        : { emailTomado: true }
                  })
                );

  }
}
