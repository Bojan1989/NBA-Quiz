export class User {
  username: string;
  password: string;
  role: string;

  constructor(obj?: any) {
    this.username = obj && obj.username || "";
    this.password = obj && obj.password || "";
    this.role = obj && obj.role || "";
  }
}
