import db from '../config/db.js';

export const insert = async (name, email, password) => {
    const [result] = await db.query('INSERT INTO user(name, email, password) VALUES (?, ?, ?)', 
        [name, email, password]
    );

        return result.insertId;
}

export const findUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM user WHERE email = ?', 
        [email]
    );
    return rows;
}