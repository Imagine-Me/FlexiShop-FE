import { IIcon } from '../image.interface'

export enum AlignmentEnum {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ColorEnum {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  PURPLE = 'purple',
  PINK = 'pink',
  BROWN = 'brown',
  BLACK = 'black',
  WHITE = 'white',
  GREY = 'grey',
  TRANSPARENT = 'transparent',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export interface Contacts {
  icon: IIcon
  title: string
  contact: string
}


export type AnyFunction = (...args: any[]) => any;