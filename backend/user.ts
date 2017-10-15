export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) {}

  macthes(another: User): boolean {
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password;
  }
}

// Simula o banco de dados atrvés de um conjunto par valor
export const users: {[key: string]: User} = {
  'douglas@gmail.com': new User('douglas@gmail.com', 'Douglas', 'teste123'),
  'anapaula@hotmail.com': new User('anapaula@hotmail.com', 'Ana Paula', 'admin123')
}
