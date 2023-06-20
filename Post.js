class Post {
  constructor(id, title, content, tags) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.tags = tags;
  }

  /**
   * Updates the properties of the Post instance based on provided data.
   *
   * @param {Object} data - The data to update the Post with.
   * @param {string} [data.title] - The new title for the Post.
   * @param {string} [data.content] - The new content for the Post.
   * @param {Array<string>} [data.tags] - The new tags for the Post.
   *
   * @returns {Promise<Post>} A Promise that resolves with the updated Post or rejects with an error.
   *
   * @throws {Error} Will throw an error if a random number is less than 0.1 (to simulate random update failures).
   */
  update(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error("Random update error"));
        } else {
          if (data.title) {
            this.title = data.title;
          }
          if (data.content) {
            this.content = data.content;
          }
          if (data.tags) {
            this.tags = data.tags;
          }
          resolve(this);
        }
      }, 500);
    });
  }
}

module.exports = { Post };
