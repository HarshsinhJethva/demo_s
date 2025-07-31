import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { ReactElement } from 'react';

interface BottomSheetProps extends BottomSheetModalProps {
  children: ReactElement | ReactElement[];
  height: string[] | number[];
  onDismiss?(): void;
  noHandle?: boolean;
  list?: boolean;
}

export type { BottomSheetProps };
