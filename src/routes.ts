import { Router } from 'express'
import bookController from './controller/bookController'

const routes = Router()

routes.get('/list', bookController.listAll)
routes.get('/list/:id', bookController.list)
routes.post('/create', bookController.create)
routes.put('/update/:id', bookController.update)
routes.delete('/delete/:id', bookController.delete)


export default routes