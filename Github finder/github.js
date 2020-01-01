class Github {
  constructor() {
    this.client_id = "a23ef9e83c01f5f077be";
    this.client_secret = "987fea4de8ccbd7af48b59835cf25940e7bbe4c2";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, //profile: profile
      repos //repos: repos
    };
  }
}
