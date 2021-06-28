export type NewsItem = {
  id: String;
  cover: String;
  title: String;
  summary: String;
}

export type NewsContent = {
  title: String;
  summary: String;
  createdAt: String;
  detail: String;
  image: {
    src: String;
  }
}

export enum SEARCH_TYPE {
  AUTO,
  ENTER,
}

// the string value following theguardian apis, see doc: https://open-platform.theguardian.com/documentation/
export enum FILTER {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  MOST_POPULAR = 'relevance',
}