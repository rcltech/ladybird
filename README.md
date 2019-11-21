# Ladybird - RC Lee Hall User Auth Microservice

To connect Ladybird to your app, you need to redirect to Ladybird's host url.

For example:

```
localStorage.setItem('id', qs.parse(window.location.search).id || '');
    if (localStorage.getItem('id') === '') {
      const app_url = 'owl.rctech.club'; \\ your app's host url
      window.location.replace(
        `https://ladybird.rctech.club/?redirectTo=${app_url}`
      );
    }
```

`localStorage.setItem('id', qs.parse(window.location.search).id || '')` stores the token returned by Ladybird in your app's browser local storage. Note that this uses `query-string` aka `qs` as an npm dependency.
