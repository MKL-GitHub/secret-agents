import { createSelector } from "reselect";
import { AppState } from "../types";
import { NewsItemState } from "./types";

const selectNewsItem = (state: AppState): NewsItemState => state.newsItem;

export const newsItemSelector = createSelector([selectNewsItem], newsItem => newsItem);