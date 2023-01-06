import { Router } from 'express'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('/', {
    skills: skills
  })
})

export {
  router
}
