import { ElementType, ComponentPropsWithoutRef } from 'react'

interface DynamicElementProps<T extends ElementType> {
  as?: T
  children?: React.ReactNode
}

type Props<T extends ElementType> = DynamicElementProps<T> & 
  Omit<ComponentPropsWithoutRef<T>, keyof DynamicElementProps<T>>

const Typography =<T extends ElementType = 'div'>({
  as,
  children,
  ...props
}: Props<T>) => {
  const Component = as || 'div'
  
  return <Component {...props}>{children}</Component>
}

export default Typography