import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['Front End', 'Back End', 'Fullstack']
  },
  proficiency: {
    type: String,
    enum: ['Low', 'Medium', 'High']
  }
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}
