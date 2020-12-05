import dotenv from 'dotenv'

const envFound = dotenv.config()
if (!envFound) {
  // This error should crash whole process
  throw new Error('⚠️  Couldn\'t find .env file  ⚠️')
}

export default {
  /**
   * DataBase URL
   */
  dataBaseUrl: process.env.MONGO_DB_URL,
  jwt_secret: process.env.JWT_SECRET || 'somethingsecret',

}

