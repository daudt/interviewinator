import Rx from 'rx-lite'
import Recorder from './recorder'
import RecorderEvent from './recorderEvent'

const EVENTS = ['keyup', 'mouseup']

export default class InterviewiNator {
  constructor(element) {
    this.element = element
    // this.init()
    this.observables = EVENTS.map(e => {
      return Rx.Observable.fromEvent(this.element, e)
    })
    this.source = Rx.Observable.merge(this.observables)
    this.subscription = this.source.subscribe(evt => {

      const time = Date.now()
      const value = this.element.value

      this.recorder.record(new RecorderEvent(value, time))

      console.log(evt)
    })
    this.recorder = new Recorder()
  }

  init() {
    console.log('yo, I\'m init!')
  }

}
