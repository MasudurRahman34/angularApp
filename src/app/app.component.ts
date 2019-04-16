import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	servers = [
    {
      name: 'samhuvo',
      description: 'nice phone',
      price: '15000',
      stock: '200',
      discount: '20',
      user_id: this.generateId()
    }
  ];
		inputName= null;
		description= null;
		price= null;
		stock= null;
		discount= null;

constructor(private serverService: ServerService) {}
  inputProduct(){
		this.servers.push({
	      name: this.inputName,
	      description: this.description,
	      price: this.price,
	      stock: this.stock,
	      discount: this.discount,
	      user_id: this.generateId()
	    });
	}
onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  
}
