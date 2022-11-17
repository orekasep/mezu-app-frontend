export interface ThumbnailProps {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface ArticleProps {
  id: string;
  attributes: {
    Title: string;
    Description: string;
    Slug: string;
    Thumbnail: ThumbnailProps;
  };
}
