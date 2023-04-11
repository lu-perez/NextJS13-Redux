'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setSearch } from '../store/searchSlice'

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(state => state.search.searchTerm);

  return (
    <div>
      <input
      type="text"
      value={searchTerm}
      onChange={e => dispatch(setSearch(e.target.value))}
    />
    <div>{searchTerm}</div>
    </div>
  )
}

export default SearchInput