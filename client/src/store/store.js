import { configureStore } from '@reduxjs/toolkit'
import { courseReducer } from './course/courseSlice'
import { wishlistReducer } from './wishlist/wishlistSlice';

const store = configureStore({
  reducer: {
    course: courseReducer,
    wishlist: wishlistReducer
  }
})

export default store;