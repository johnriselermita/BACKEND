import mysql from 'mysql2/promis.js';

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"88888888",
    database:"LibraryDB"
});

export default pool;