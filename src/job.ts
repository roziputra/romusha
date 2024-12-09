import { type JsMsg } from 'nats'
import { generateEmployeeChart } from './employee.job'
import logger from './logger'
import { sendEmployeeOnDutyNotif } from './nusawork.job'

export async function processJob(message: JsMsg) {
  const jobName = message.subject.split('.')[2]
  logger.info(`executing job: ${jobName}`)

  switch (jobName) {
    case 'generateEmployeeChart':
      generateEmployeeChart()
      break
    case 'sendEmployeeOnDutyNotif':
      sendEmployeeOnDutyNotif()
      break

    default:
      logger.warn(`Unknown job: ${jobName}`)
  }
  message.ack()
}
