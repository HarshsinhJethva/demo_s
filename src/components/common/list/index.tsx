import React, { forwardRef, memo, useMemo } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ListEmptyComponent } from '@components';
import { ListProps } from './types';
import useStyles from './styles';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useTranslation } from 'react-i18next';

const List = forwardRef(
  (
    {
      onRefresh,
      refreshing,
      contentContainerStyle,
      disableRefresh,
      bottomSheet = false,
      listEmptyWrapper,
      listEmptyMessage = '',
      EmptyIcon,
      ...rest
    }: ListProps,
    ref,
  ) => {
    const styles = useStyles();
    const { colors } = useTheme();
    const { t } = useTranslation();

    const DynamicList = useMemo(() => {
      return bottomSheet ? BottomSheetFlatList : FlatList;
    }, [bottomSheet]);

    return (
      <DynamicList
        {...rest}
        ref={ref}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={[styles.wrapper, contentContainerStyle]}
        ListHeaderComponentStyle={styles.container}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        onEndReachedThreshold={0}
        ListEmptyComponent={
          <ListEmptyComponent
            style={[styles.listEmptyWrapper, listEmptyWrapper]}
            message={t(listEmptyMessage)}
            Icon={EmptyIcon}
          />
        }
        refreshControl={
          disableRefresh ? undefined : (
            <RefreshControl
              refreshing={refreshing || false}
              onRefresh={() => (onRefresh ? onRefresh() : {})}
              tintColor={colors.primary}
            />
          )
        }
      />
    );
  },
);

export default memo(List);
