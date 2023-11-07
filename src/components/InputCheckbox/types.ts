import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onChange: (newValue: boolean) => boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
