import moment from 'moment'

export const startTime = () => {
  let day 
  let today = moment()
  let h = today.hour()

  switch (h === x) {
    case (x = 0):
      day = '#273D45'
      break;
    case (x = 1):
      day = "#234654"
    case (x=2):
      day = '#2a5566'
    case (x=3):
      day= '#317089'
    case (x=4):
      day= '#2d7c9b'
    case (x=5):
      day= '#1788b5'
    case (x=6):
      day= '#2891ba'
    case (x=7):
      day= '#109cd3'
    case (x=8):
      day= '#'
    case (x=9):
      day= '#33addd'
    case (x=10):
      day= '#44b2dd'
    case (x = 11):
      day = "#64c1e5"
    case (x=12):
      day = '#81d03f'
    case (x=13):
      day= '#a8dff4'
    case (x=14):
      day= '#c4e5f2'
    case (x=15):
      day= '#b1cdd8'
    case (x=16):
      day= '#89add3'
    case (x=17):
      day= '#6498d1'
    case (x=18):
      day= '#3d68a0'
    case (x=19):
      day= '#5c2491'
    case (x=20):
      day= '#1a1b6d'
    case (x = 21):
      day = "#141560"
    case (x=22):
      day = '#'
    case (x=23):
      day= '#0d0e49'
    case (x=24):
      day= '#19262b'
    default: 
      return 
  }
}