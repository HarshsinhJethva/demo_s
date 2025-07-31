import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from './redux';
import { commonActions } from '../../store';
import { helpers } from '../../utils';
// import { helpers } from '@utils';
// import commonActions from '@store/common';

interface Address {
  address_title: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

const useProductList = () => {
  const [products, setproducts] = useState<Address[] | null>(null);
  const productListData = useSelector(state => state.productList);

  const dispatch = useDispatch();

  const loader = useMemo(() => {
    return productListData?.loading;
  }, [productListData]);

  useEffect(() => {
    dispatch(commonActions.productList());

  }, [dispatch]);

  useEffect(() => {
    const response = helpers.apiResponseHandler(productListData, () => {
      dispatch(commonActions.clearproductListResponse());
      setproducts(null);
    });

    if (response?.data) {
      // console.log(response)
      setproducts([response?.data]);
    }
    // dispatch(commonActions.clearCustomerDetailResponse());
  }, [productListData, dispatch]);

  const onRefresh = () => {
    dispatch(commonActions.productList());

  };



  return { products, loader, onRefresh };
};

export default useProductList;
