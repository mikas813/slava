export default {
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}

const dbuser = 'user'
const dbpassword = 'admin13'

export const dbUrl = `mongodb://${dbuser}:${dbpassword}@ds155414.mlab.com:55414/heroku_9x2skcg0`