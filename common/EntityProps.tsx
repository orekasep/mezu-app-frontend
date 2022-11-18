export interface ThumbnailProps {
  data: {
    attributes?: {
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
    ThumbnailUrl?: string;
    Content?: string;
  };
}

export interface ArticleResponseProps {
  data?: [ArticleProps];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ArticleItemProps {
  id: string;
  title: string;
  description: string;
  url: string;
}
