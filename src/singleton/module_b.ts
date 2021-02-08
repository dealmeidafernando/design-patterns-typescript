import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Denilson', age: 50 });
myDatabaseClassic.add({ name: 'Kowalic', age: 20 });
myDatabaseClassic.add({ name: 'Amanda', age: 30 });
myDatabaseClassic.show();
