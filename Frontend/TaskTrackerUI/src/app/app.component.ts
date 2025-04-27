import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskTrackerUI';
  tasks: Task[] = [];
  loading = false;
  newTask: Task = {
    title: '',
    description: '',
    dueDate: new Date(),
    isCompleted: false
  };

  constructor(private taskService: TaskService) { }

  loadTasks() {
    this.loading = true;
    this.taskService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading tasks', error);
        this.loading = false;
      }
    );
  }
  
  
  ngOnInit() {
    this.loadTasks();
  }
  
  addTask() {
    if (!this.newTask.title || !this.newTask.description) return;
    
    this.taskService.addTask(this.newTask).subscribe({
      next: (response) => {
        this.tasks.push(response);
        this.newTask = { title: '', description: '', dueDate: new Date(), isCompleted: false };
      },
      error: (error) => {
        console.error('Error adding task', error);
        alert('Failed to add task');
      }
    });
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe(
      (updatedTask: Task) => {
        const index = this.tasks.findIndex(t => t.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
      },
      (error) => {
        console.error('Error updating task', error);
      }
    );
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      () => {
        this.loadTasks();
      },
      (error) => {
        console.error('Error deleting task', error);
      }
    );
}

  finishTask(task: Task) {
    const updatedTask = { id: task.id, title: task.title, description: task.description, dueDate: task.dueDate, isCompleted: true };
    this.taskService.updateTask(updatedTask).subscribe({
      next: (response) => { this.loadTasks(); },
      error: (error) => {
        console.error('Error finishing task', error);
        alert('Failed to finish task');
      }
    });
  }
}
