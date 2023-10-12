import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  user_data:any = {};

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  //Inicializa componente con datos del usuario
  ngOnInit(): void {
    let user_login = this.activatedRoute.snapshot.paramMap.get('user_login');
    this.getUserData(user_login);
  }

  //Llamado al API
  getUserData(user_login: any) {
    this.apiService.getUserData(user_login).subscribe(data => {
      this.user_data = data;
    });
  }

  //Regreso al inicio
  goToIndex() {
    this.router.navigate(['']);
  }
}
