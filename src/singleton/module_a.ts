import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Denilson', age: 28 });
myDatabaseClassic.add({ name: 'Kowalic', age: 50 });
myDatabaseClassic.add({ name: 'Amanda', age: 23 });
// myDatabaseClassic.show();
