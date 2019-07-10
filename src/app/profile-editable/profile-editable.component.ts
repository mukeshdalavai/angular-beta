import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-editable',
  templateUrl: './profile-editable.component.html',
  styleUrls: ['./profile-editable.component.css']
})
export class ProfileEditableComponent implements OnInit {
selectedFile: File
  public editable="false";
  constructor() { }

  ngOnInit() {
  }
  public edit(){
    if(this.editable=='false')
    this.editable="true";
    else
    this.editable="false";
    console.log(this.editable);
    return this.editable;
  }
  onFileChanged(event){
    this.selectedFile=event.target.files[0]
  }
  onUpload(){
    //saving file to db 
  }

}
