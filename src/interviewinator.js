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
    /*this.subscription = */this.source.subscribe(evt => {

      const time = Date.now()
      const value = this.element.value

      this.recorder.record(new RecorderEvent(value, time))

      console.log(evt)
      
    })
    document.querySelector('#startBtn').addEventListener('click', () => {
      this.startRecording()
    })
    document.querySelector('#stopRecBtn').addEventListener('click', () => {
      this.stopRecording()
    })
    document.querySelector('#play').addEventListener('click', () => {
      this.play(this.recorder.recorderEvents[this.recorder.recorderEvents.length -1].value)
    })
    this.recorder = new Recorder()
  }

  init() {
    console.log('yo, I\'m init!')
  }
  play(e) {
    document.querySelector('.player').textContent = e
  }
  stopRecording() {
    console.log('stop')
  }
  startRecording() {
    console.log('start: ')
  }
}
