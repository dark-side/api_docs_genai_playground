export const availableLanguages = ["shell", "js", "ruby", "java"];

export const apiEndpoints = [
  {
    name: "User Registration",
    method: "POST",
    path: "/users",
    description: "Registers a new user.",
    requestExamples: {
      shell: "curl -X POST -H 'Content-Type: application/json' -d '{\"user\": {\"email\": \"newuser@example.com\", \"password\": \"password\", \"password_confirmation\": \"password\"}}' users/registrations",
      js: "fetch('users/registrations', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user: { email: 'newuser@example.com', password: 'password', password_confirmation: 'password' } }) }).then(res => res.json())",
      ruby: "Net::HTTP.post(URI('http://localhost:3002/users/registrations'), { user: { email: 'newuser@example.com', password: 'password', password_confirmation: 'password' } }.to_json, 'Content-Type' => 'application/json')",
      java: `OkHttpClient client = new OkHttpClient();
RequestBody body = RequestBody.create(
  MediaType.get("application/json"),
  "{\"user\": {\"email\": \"newuser@example.com\", \"password\": \"password\", \"password_confirmation\": \"password\"}}"
);
Request request = new Request.Builder()
  .url("http://localhost:3002/users/registrations")
  .post(body)
  .build();
Response response = client.newCall(request).execute();`
    },
    responseExample: `{
      id: 2,
      email: "newuser@example.com",
    }`
  },
  {
    name: "User Sign In",
    method: "POST",
    path: "api/auth/sign_in",
    description: "Signs in a user.",
    requestExamples: {
      shell: "curl -X POST -H 'Content-Type: application/json' -d '{\"user\": {\"email\": \"user@example.com\", \"password\": \"password\"}}' api/auth/sign_in",
      js: "fetch('api/auth/sign_in', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user: { email: 'user@example.com', password: 'password' } }) }).then(res => res.json())",
      ruby: "Net::HTTP.post(URI('http://localhost:3002/api/auth/sign_in'), { user: { email: 'user@example.com', password: 'password' } }.to_json, 'Content-Type' => 'application/json')",
      java: `OkHttpClient client = new OkHttpClient();
RequestBody body = RequestBody.create(
  MediaType.get("application/json"),
  "{\\"user\\": {\\"email\\": \\"user@example.com\\", \\"password\\": \\"password\\"}}"
);
Request request = new Request.Builder()
  .url("http://localhost:3002/api/auth/sign_in")
  .post(body)
  .build();
Response response = client.newCall(request).execute();`
    },
    responseExample: `{
      id: 1,
      email: "user@example.com",
      authentication_token: "abcdef123456"
    }`
  },
  {
    name: "User Sign Out",
    method: "DELETE",
    path: "api/auth/sign_out",
    description: "Signs out a user.",
    requestExamples: {
      shell: "curl -X DELETE -H 'Content-Type: application/json' -d '{\"user\": {\"email\": \"user@example.com\"}}' api/auth/sign_out",
      js: "fetch('api/auth/sign_out', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user: { email: 'user@example.com' } }) }).then(res => res.json())",
      ruby: "Net::HTTP.delete(URI('http://localhost:3002/api/auth/sign_out'), { user: { email: 'user@example.com' } }.to_json, 'Content-Type' => 'application/json')",
      java: `OkHttpClient client = new OkHttpClient();
RequestBody body = RequestBody.create(
  MediaType.get("application/json"),
  "{\\"user\\": {\\"email\\": \\"user@example.com\\"}}"
);
Request request = new Request.Builder()
  .url("http://localhost:3002/api/auth/sign_out")
  .delete(body)
  .build();
Response response = client.newCall(request).execute();`
    },
    responseExample: `{
      message: "Signed out successfully."
    }`
  },
  {
    name: "Get All Articles",
    method: "GET",
    path: "api/articles",
    description: "Retrieves a list of all articles.",
    requestExamples: {
      shell: "curl -X GET api/articles",
      js: "fetch('api/articles').then(res => res.json())",
      ruby: "Net::HTTP.get(URI('http://localhost:3002/api/articles'))",
      java: `OkHttpClient client = new OkHttpClient();
Request request = new Request.Builder()
  .url("http://localhost:3002/api/articles")
  .get()
  .build();
Response response = client.newCall(request).execute();`
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
    path: "api/articles/:id",
    description: "Retrieves an article by its ID.",
    requestExamples: {
      shell: "curl -X GET api/articles/1",
      js: "fetch('api/articles/1').then(res => res.json())",
      ruby: "Net::HTTP.get(URI('http://localhost:3002/api/articles/1'))",
      java: `OkHttpClient client = new OkHttpClient();
Request request = new Request.Builder()
  .url("http://localhost:3002/api/articles/1")
  .get()
  .build();
Response response = client.newCall(request).execute();`
    },
    responseExample: `{
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
    }`
  },
  {
    name: "Create Article",
    method: "POST",
    path: "api/articles",
    description: "Creates a new article.",
    requestExamples: {
      shell: "curl -X POST api/articles -d 'title=New Article&short_description=Short description of the new article'",
      js: `fetch('api/articles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Article',
    short_description: 'Short description of the new article'
  })
})`,
      ruby: `uri = URI('http://localhost:3002/api/articles')
req = Net::HTTP::Post.new(uri)
req.set_form_data('title' => 'New Article', 'short_description' => 'Short description of the new article')
res = Net::HTTP.start(uri.hostname, uri.port) do |http|
  http.request(req)
end`,
      java: `OkHttpClient client = new OkHttpClient();
RequestBody body = RequestBody.create(
  MediaType.get("application/json"),
  "{\\"title\\": \\"New Article\\", \\"short_description\\": \\"Short description of the new article\\"}"
);
Request request = new Request.Builder()
  .url("http://localhost:3002/api/articles")
  .post(body)
  .build();
Response response = client.newCall(request).execute();`
    },
    responseExample: `{
      "id": 2,
      "title": "New Article",
      "short_description": "Short description of the new article",
      "description": null,
      "image_url": null,
      "article_likes": 0,
      "article_dislikes": 0,
      "comments_count": 0,
      "comments_content": [],
      "created_at": "2025-02-06T20:41:01.530Z",
      "updated_at": "2025-02-06T20:41:01.530Z"
    }`
  },
  {
    name: "Update Article",
    method: "PUT",
    path: "api/articles/:id",
    description: "Updates an existing article.",
    requestExamples: {
      shell: "curl -X PUT api/articles/2 -d 'title=Updated Article'",
      js: `fetch('api/articles/2', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Updated Article'
  })
})`,
      ruby: `uri = URI('http://localhost:3002/api/articles/2')
req = Net::HTTP::Put.new(uri)
req.set_form_data('title' => 'Updated Article')
res = Net::HTTP.start(uri.hostname, uri.port) do |http|
  http.request(req)
end`,
      java: `OkHttpClient client = new OkHttpClient();
RequestBody body = RequestBody.create(
  MediaType.get("application/json"),
  "{\\"title\\": \\"Updated Article\\"}"
);
Request request = new Request.Builder()
  .url("http://localhost:3002/api/articles/2")
  .put(body)
  .build();
Response response = client.newCall(request).execute();`
    },
    responseExample: `{
      "id": 2,
      "title": "Updated Article",
      "short_description": "Short description of the new article",
      "description": null,
      "image_url": null,
      "article_likes": 0,
      "article_dislikes": 0,
      "comments_count": 0,
      "comments_content": [],
      "created_at": "2025-02-06T20:41:01.530Z",
      "updated_at": "2025-02-06T20:41:01.530Z"
    }`
  },
];