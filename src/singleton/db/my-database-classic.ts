export class MyDatabaseClassic {
  // private static instance?: MyDatabaseClassic;
  private static instance?: MyDatabaseClassic | null = null;

  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }
}

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();

console.log(db1 === db2);
