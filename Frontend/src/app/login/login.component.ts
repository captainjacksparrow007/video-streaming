import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any

  constructor(
    public messageService:MessageService,
    private usersService:UsersService
  ) { }

  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
    this.usersService.getUsers().subscribe(
      (result: any)=>{
        this.users=result
      },
      err=>console.log(err)
      
    )
  }

}
