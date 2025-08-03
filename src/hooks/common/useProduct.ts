import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from './redux';
import commonActions from '@store/common';
import { helpers } from '@utils';

const useProductList = () => {
  const [products, setproducts] = useState(null);
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
      // setproducts(null);
    });

    if (response?.data) {
      // console.log(response?.data?.events);
      setproducts(response?.data?.events);
    }
    // dispatch(commonActions.clearCustomerDetailResponse());
  }, [productListData, dispatch]);

  const onRefresh = () => {
    dispatch(commonActions.productList());
  };

  return { products, loader, onRefresh };
};

export default useProductList;
