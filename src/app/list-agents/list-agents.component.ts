import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'src/app/Interfaces(Modules)/Agent';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.css']
})
export class ListAgentsComponent implements OnInit {

  agents:Agent[];
  errorMessage: any;
  constructor(private adminService:AdminService,private router: Router, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {

  }
  goToAgentDetails(agent:Agent){

    
  }

}
