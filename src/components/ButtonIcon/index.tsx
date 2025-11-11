import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleProps, ButtonIconSizeStyleProps, ButtonIconBorderRadiusStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
  size?: ButtonIconSizeStyleProps;
  borderRadius?: ButtonIconBorderRadiusStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', size = 'MD', borderRadius = 'RIGHT', ...rest }: Props) {
  return (
    <Container
      type={type}
      size={size}
      borderRadius={borderRadius}
      {...rest}
    >
      <Icon
        name={icon}
      />
    </Container>
  );
}