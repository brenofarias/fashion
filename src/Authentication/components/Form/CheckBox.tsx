import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Box, Text } from '../../../components';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => (
  <RectButton onPress={() => onChange()} style={{ justifyContent: 'center' }}>
    <Box flexDirection="row" alignItems="center">
      <Box
        marginRight="m"
        height={20}
        width={20}
        borderRadius="s"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderColor="primary"
        backgroundColor={checked ? 'primary' : 'white'}
      >
        <Icon name="check" color="white" />
      </Box>
      <Text variant="button">{label}</Text>
    </Box>
  </RectButton>
);

export default CheckBox;
