import create from "zustand";
import createPostSlice from "./Slices/createPostSlice";
import createUserSlice from "./Slices/createUserSlice";

const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
  ...createPostSlice(set, get),
}));

export default useStore;