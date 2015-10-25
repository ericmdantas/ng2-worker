export class Todo {
  message: string = '';
  createdAt: number = Date.now();

  constructor(message: string) {
    this.message = message;
  }
}
