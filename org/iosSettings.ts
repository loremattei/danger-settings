import {warn, danger} from 'danger'
import * as allPRs from './allPRs'

// ioS Rules
export default async () => {
    await allPRs.prSize()
    await allPRs.internalLink()
}