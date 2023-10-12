import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'double-v-partners',
  templateUrl: './double-v-partners.component.html',
  styleUrls: ['./double-v-partners.component.css']
})
export class DoubleVPartnersComponent {

  constructor(
    private apiService:ApiService, 
    private router:Router
  ) {
  }

  data: any = {};
  users_array: any = [];

  searchForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  get username() {
    return this.searchForm.get('username');
  }
  
  //Buscar usuarios en el API
  onSearchUser(formValue: any) {
    $('#doublevpartners-error-span').css('display', 'none');
    let username = formValue.username;
    if(username != 'doublevpartners') {
      let i: any;
      this.apiService.getUsersList(username).subscribe(data => {
        this.data = data;
        for(i = 0; i < 10; i++){
          this.users_array.push(this.data.items[i]);
        }
      });
      this.dragTable();
    } else {
      $('#doublevpartners-error-span').css('display', 'block');
    }
  }

  //Pinta tabla de datos
  dragTable() {
    $('#first-form').css('display', 'none');
    $('#print-users').css('display', 'block');
  }

  viewUser(user_login: string){
    this.router.navigate(['view-user', user_login]);
  }
}
