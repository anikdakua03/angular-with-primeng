import { Injectable, signal } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  allNotifications = signal<string[]>([]);

  private hubConnection!: HubConnection;

  connectionURL: string = "https://localhost:7111/notifications";
  // connectionURL: string = "http://localhost:5171/notifications";

  constructor() {
    this.createConnection();
  }

  getHubConnection(): HubConnection {
    return this.hubConnection;
  }

  private createConnection() {
    // Create the connection to the SignalR Hub
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.connectionURL)
      .build();

    // Start the connection
    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connected'))
      .catch((err) => console.log('Error while starting connection: ' + err));

    // Register the method to receive messages from the hub
    // this.hubConnection.on('ReceiveNotification', (message: string) => {
    //   console.log('Received message:', message);
    //   this.addNotifications(message);
    //   // You can implement further logic here to display the notification
    //   // alert(message);
    // });

    // Register the method to receive messages from the hub
    this.hubConnection.on('SendNotificationToAll', (message: string) => {
      console.log('Received message from send notification All method:', message);
      this.addNotifications(message);
      // You can implement further logic here to display the notification
      // alert(message);
    });
  }

  addNotifications(notification: string) {
    this.allNotifications.set([...this.allNotifications(), notification]);
  }
}
