import { useDispatch } from "common/react-redux";
import { setProgress } from "~/lib/store/features/topLoadingBarSlice";

function useTopLoadingBar() {
  // redux dispatch
  const dispatch = useDispatch();

  // set progress dispatch
  const setProgressDispatch = (progress: number) => {
    dispatch(setProgress(progress));
  };

  return { setProgressDispatch };
}

export default useTopLoadingBar;
