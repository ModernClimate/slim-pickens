This app serves as a testing ground for the library, and is also used as [the demo page](http://outrageous-show.surge.sh/).

## Updating the example app

This app was build with `create-react-app`. As with most react apps, you can initialize and start the app like this:

```
yarn install
yarn start
```

The build includes hot module reloading, so changes to the JavaScript code will reflect immediately on the page. However, if you are making changes to the stylesheet, make sure to also run the following task:

```
yarn run watch-css
```

## Testing library changes

If you are using the example app to visually test changes to the library, you'll need to use linking. Assuming you are at the root level of the repository:

```
yarn run compile
yarn link
cd example
yarn install
yarn link @ackmann-dickenson/slim-pickens
yarn start
```
