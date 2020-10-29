import { Component,  OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajes=[];
  mensaje:string = "";
  emisor:string= "";
  doc;
  constructor(private afs:AngularFirestore) { }

  ngOnInit(): void {
    const doc = this.afs.collection('Chat');
    this.doc= doc;
    doc.valueChanges().subscribe(data=>
      {
        this.mensajes=data;
      })
  }


  Enviar()
  {
    console.log(this.emisor);
    console.log(this.mensaje);
    this.doc.add({emisor:this.emisor, mensaje:this.mensaje});
  }
}



