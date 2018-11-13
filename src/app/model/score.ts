export class Score {
  username: string;
  score: number;

  constructor(obj?: any) {
    this.username = obj && obj.username || "";
    this.score = obj && obj.score || null;
  }
}
