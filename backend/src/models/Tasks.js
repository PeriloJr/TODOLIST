const connection = require('./connection');

const getAllTasks = async () =>{
    const tasks = await connection.execute('SELECT * FROM TASKS');
    return tasks;
}

module.exports = {
    getAllTasks
};