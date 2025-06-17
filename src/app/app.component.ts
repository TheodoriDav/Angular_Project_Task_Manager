import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';

  taskArray=[{taskName: ' ', isCompleted: false,isEdible:false} ]

//gia na addarw ta task 
  onSubmit(form: NgForm){
  console.log(form);
  this.taskArray.push({
    taskName: form.controls['task'].value,
    isCompleted: false,
    isEdible: false
  });
  form.resetForm();
}
//gia na diagrafei ta task sugkekrimena kai oxi opoio nane 
onDelete(index: number){
  //gia na diagrafei to task apo to array
  this.taskArray.splice(index, 1);

}

onCheck(){
  //gia na allazei to isCompleted se true
  console.log(this.taskArray)
}

onEdit(index: number){
  //gia na allazei to isEdible se true
  this.taskArray[index].isEdible = true;
  console.log(this.taskArray[index].isEdible);
}
onSave(index: number,newtask: string){
  //gia na apothikeush to kainourgio task apo to array
  this.taskArray[index].taskName = newtask;
  this.taskArray[index].isEdible = false;
}
}
