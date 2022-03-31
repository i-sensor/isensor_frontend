import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from 'react'

export interface BackdropProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpened: boolean
  handleClose: MouseEventHandler<HTMLDivElement>
}
