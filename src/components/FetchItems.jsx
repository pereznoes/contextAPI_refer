import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions } from '../store/itemsSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

export default function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch('http://127.0.0.1:8000/cake/list/', { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(data));
        // console.log(data);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
     
    </>
  );
}
