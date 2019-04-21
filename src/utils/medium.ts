
interface QueryEdge {
  node: {
    id: string;
    title: string;
    createdAt: string;
    uniqueSlug: string;
    virtuals: {
      subtitle: string;
      readingTime: number;
      previewImage: {
        imageId: string;
      };
      tags: {
        name: string;
      };
      totalClapCount: number;
    };
    author: {
      name: string;
      username: string;
    }
  };
};

export interface QueryResponse {
  edges: QueryEdge[];
}

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  createdOn: string;
  readingTime: number;
  tags: string[];
  clapCount: number;
  author: string;
};

export const parseQuery = (response: QueryResponse): Post[] => (
  response.edges.map(({ node }) => {
    const {
      id, title, createdAt, uniqueSlug, virtuals, author,
    } = node;
    return {
      author: author.name,
      clapCount: virtuals.totalClapCount,
      createdOn: createdAt,
      id,
      image: `https://cdn-images-1.medium.com/max/512/${virtuals.previewImage.imageId}`,
      readingTime: virtuals.readingTime,
      subtitle: virtuals.subtitle,
      tags: virtuals.tags.map(({ name }) => name),
      title,
      url: `https://medium.com/@${author.username}/${uniqueSlug}`,
    };
  })
);
