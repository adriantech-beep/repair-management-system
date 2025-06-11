import Logo from '/logo.png';

const PAGE_SIZE = 10;

const LOG_TYPES = {
  default: 'default',
  info: 'info',
  error: 'error'
}

const jobOrderStatus = {
  false : ['pending', 'blocked', 'failed', 'forConfirmation'],
  true : ['completed', 'success']
}

const jobOrderChecklist = [
  {
    name: 'simtray',
    label: 'Simtray',
    type: 'accessories'
  },
  {
    name: 'simcard',
    label: 'Sim Card',
    type: 'accessories'
  },
  {
    name: 'memorycard',
    label: 'Memory Card',
    type: 'accessories'
  },
  {
    name: 'spen',
    label: 'Spen',
    type: 'accessories'
  },
  {
    name: 'charger',
    label: 'Charger',
    type: 'accessories'
  },
  {
    name: 'bulgedBattery',
    label: 'Bulged Battery',
    type: 'condition'
  },
  {
    name: 'brokenScreen',
    label: 'Broken Screen',
    type: 'condition'
  },
  {
    name: 'brokenBackcover',
    label: 'Broken Backcover',
    type: 'condition'
  }
]

export {
  Logo,
  jobOrderStatus,
  jobOrderChecklist,
  PAGE_SIZE,
  LOG_TYPES
}