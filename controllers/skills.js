// import { skills } from "../data/skill-data.js";
import { Skill } from "../models/skill.js";

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newSkill as new,
  create
}
