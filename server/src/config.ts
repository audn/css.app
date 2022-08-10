const config = {
      port: 4000,
      twitterApi: 'https://api.twitter.com/2',
      redirect_uri: 'http://localhost:4000/auth/twitter/callback',
      cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000,
      },
      twitterAuth:
            'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=dTdacThkLVZER0pCZkZ6SklUTjI6MTpjaQ&redirect_uri=http://localhost:4000/auth/twitter/callback&scope=tweet.read%20users.read%20follows.read&state=state&code_challenge=challenge&code_challenge_method=plain',
};
export default config;
