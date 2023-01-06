import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  type: String,
  proficiency: String
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}
