import MessageData from './MessageData'
import fs from 'fs'
export default class MessageDataFile implements MessageData {
  async read (lg: string): Promise<string> {
    return await new Promise((resolve, reject) => {
      fs.readFile(`./messages/${lg}.txt`, 'utf8', (error, data) => {
        if (error) {
          reject(error)
        }
        resolve(data)
      })
    })
  }
}
