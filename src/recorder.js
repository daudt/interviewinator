export default class Recorder {
  constructor() {
    this.recorderEvents = []
  }

  record(recorderEvent) {
    this.recorderEvents.push(recorderEvent)

    console.log('all events', this.recorderEvents)
  }
}
