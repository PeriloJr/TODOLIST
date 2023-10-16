const getAllTasks = (requests, response) =>{
    return response.status(200).json({message: 'controller ok'});
}

module.exports = {
    getAllTasks
}