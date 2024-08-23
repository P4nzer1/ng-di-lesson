import { Injectable, Inject } from '@angular/core';
import { IdGenerator } from './id-generator';
import { NAME_PREFIX_TOKEN } from './name-prefix.token';

export interface TodoItem {
  id: number;
  name: string;
}

@Injectable ({
  providedIn: 'root',
})
export class TodosService {
  constructor(
    @Inject(NAME_PREFIX_TOKEN) private readonly namePrefix: string,
    private readonly idGenerator: IdGenerator
  ) {}

  #todos: TodoItem[] = [];

  getAll(): TodoItem[] {
    return this.#todos
  }

  getById(id: number): TodoItem | undefined {
    return this.#todos.find(todo => todo.id === id);
  }
  
  add(name: string): void {
    const newTodo: TodoItem = {
      id: this.idGenerator.generate(),
      name: `${this.namePrefix} ${name}`
    };
    this.#todos.push(newTodo);
  }


  remove(id: number): void {
    this.#todos = this.#todos.filter(todo => todo.id !== id);  
  }
}
