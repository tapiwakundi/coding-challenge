# Node.js Backend Development Coding Challenge

The purpose of this challenge is to assess your skills in Node.js, your understanding of REST API development, and your ability to handle more complex requirements for updating resources.

You are to create an API endpoint that allows users to update blog posts. Every blog post should have a `title`, `content`, and `tags` field.

## Requirements:

1. Implement the following endpoint:
   - `PUT /posts/:id`: Updates the blog post with the given `id`. The request body can contain the new `title`, `content`, and/or `tags`.
2. The update operation should have the following features:
   - If the `title` or `content` fields are present in the request, they should update the corresponding fields in the post.
   - The `tags` field in the request should be an array of strings. It should replace the current tags of the post. If the `tags` field is not present in the request, the tags of the post should not be changed.
   - The `PUT /posts/:id` endpoint should return the updated post with its tags in the response.
3. There should be validation to make sure that the inputs are valid and of the datatype we expect
4. Anything else you think is important to making this endpoint as robust as possible
