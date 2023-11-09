import { configureStore } from "react-redux";
import Slice from "./features/Slice";

export const store = configureStore ({
    reducer:{
        Slice1:Slice
    }
});