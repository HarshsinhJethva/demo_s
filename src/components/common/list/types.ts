import { FlatListProps, ViewStyle } from 'react-native';

interface ListProps extends FlatListProps<any> {
  disableRefresh?: boolean;
  bottomSheet?: boolean;
  listEmptyWrapper?: ViewStyle;
  listEmptyMessage?: string;
}

export type { ListProps };
