[![Build Status](https://travis-ci.org/rcltech/ladybird.svg?branch=master)](https://travis-ci.org/rcltech/ladybird)

# Ladybird - RC Tech Club User Authentication Microservice

### Developer guide

Ladybird is designed to allow login for RC Tech Club applications.

Ladybird accepts a `redirectTo` parameter returns back an `id`, which is the token that can be used to make requests to
the API Server `phoenix`.

### Sample Code

##### ReactJS

```
localStorage.setItem('id', qs.parse(window.location.search).id || '');

if (localStorage.getItem('id') === '') {
  const app_url = 'owl.rctech.club';
  window.location.replace(
    `https://ladybird.rctech.club/?redirectTo=${app_url}`
  );
}
```

Note that this uses `query-string` aka `qs` as an npm dependency.
