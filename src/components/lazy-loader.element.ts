import { controller, attr } from '@github/catalyst';

@controller
class LazyLoaderElement extends HTMLElement {
  @attr url: string;

  connectedCallback() {
    // this.innerHTML = await(await fetch(this.url)).text();
    console.log('url', this.url);
    fetch(this.url)
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status,
          );
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          // just a test to show results
          this.innerHTML = `<a target="_blank" href="${data[0].url}"><img src="${data[0].download_url}" width="500" height="500" /></a>`;
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
    this.dispatchEvent(new CustomEvent('loaded'));
  }
}
