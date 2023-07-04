import express from "express";
import homeController from '../controller/homeController.js'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    // ko viết () vì khi viết sẽ ko lấy được 2 tham số 
    // res, req => tự động truyền
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser);
    router.get('/about', (req, res) => {
        res.send('Hello World Le Tat Tuan!')
    })

    return app.use('/', router);
}

module.exports = initWebRoute;