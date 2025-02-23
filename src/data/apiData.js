export const availableLanguages = ["shell", "js", "ruby"];

export const apiEndpoints = [
  {
    name: "Get All Articles",
    method: "GET",
    path: "/articles",
    description: "Retrieves a list of all articles.",
    requestExamples: {
      shell: "curl -X GET /articles",
      js: "fetch('/articles').then(res => res.json())",
      ruby: "Net::HTTP.get(URI('http://localhost:3002/articles'))"
    },
    responseExample: `[
      {
        "id": 1,
        "title": "The Art of Scoring Goals",
        "short_description": "Learn how to score goals like a pro with this comprehensive guide to the art of goal-scoring.",
        "description": "This is the description of the article with title: The Art of Scoring Goals",
        "image_url": "http://127.0.0.1:3002/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MSwicHVyIjoiYmxvYl9pZCJ9fQ==--068f058c623d882b86c3be1f83f02d9e5cf2554d/1.jpg",
        "article_likes": 71,
        "article_dislikes": 98,
        "comments_count": 2,
        "comments_content": [
          "This article was very informative and helpful.",
          "Great insights on goal-scoring!"
        ],
        "created_at": "2025-02-06T20:41:01.530Z",
        "updated_at": "2025-02-06T20:41:01.585Z"
      }
    ]`
  },
  {
    name: "Get Article by ID",
    method: "GET",
    path: "/articles/:id",
    description: "Retrieves an article by its ID.",
    requestExamples: {
      shell: "curl -X GET /articles/1",
      js: "fetch('/articles/1').then(res => res.json())",
      ruby: "Net::HTTP.get(URI('http://localhost:3002/articles/1'))"
    },
    responseExample: `{
      "id": 1,
      "title": "The Art of Scoring Goals",
      "short_description": "Learn how to score goals like a pro with this comprehensive guide to the art of goal-scoring.",
      "description": "This is the description of the article with title: The Art of Scoring Goals",
      "image_url": "http://
      "article_likes": 71,
      "article_dislikes": 98,
      "comments_count": 2,
      "comments_content": [
        "This article was very informative and helpful.",
        "Great insights on goal-scoring!"
      ],
      "created_at": "2025-02-06T20:41:01.530Z",
      "updated_at": "2025-02-06T20:41:01.585Z"
    }`
  }
];