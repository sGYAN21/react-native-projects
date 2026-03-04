declare module 'react-native-vector-icons/FontAwesome' {
  import { ComponentClass } from 'react';
  import { TextProps } from 'react-native';

  const FontAwesome: ComponentClass<
    TextProps & { name: string; size?: number; color?: string }
  >;

  export default FontAwesome;
}
