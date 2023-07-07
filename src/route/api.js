import express from "express";
import APIController from '../controller/APIController.js'

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers); // method GET
    // ko viết () vì khi viết sẽ ko lấy được 2 tham số 
    // res, req => tự động truyền
    router.post('/create-user', APIController.createNewUser); // POST 
    router.put('/update-user', APIController.updateUser); // method PUT
    router.delete('/delete-user/:id', APIController.deleteUser); // method delete
    return app.use('/api/v1/', router);
}

module.exports = initAPIRoute;