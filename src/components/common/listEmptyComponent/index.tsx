import React, { ReactElement, memo } from 'react';
import { View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Text } from '@components';
import useStyles from './styles';

type ListEmptyComponentProps = {
  message?: string;
  style?: ViewStyle;
};

const ListEmptyComponent = ({
  message,
  style,
  Icon,
}: ListEmptyComponentProps): ReactElement => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <View style={[styles.wrapper, style]}>
      {Icon && <Icon />}
      <Text
        value={message ? message : "No Data Found"}
        style={styles.message}
        medium
      />
    </View>
  );
};

export default memo(ListEmptyComponent);
