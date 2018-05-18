import { Component, OnInit } from '@angular/core';
 
import { User } from '../models/u';
import { UserService } from '../u_service/u.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'list.component.html'
})
 
export class ListComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}