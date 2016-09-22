# Blocktags

Donations powered by Bitcoins!
This app allows you to receive donations to your Blockchain.info wallet.

Make sure to create an account at [Blockchain](https://blockchain.info), otherwise your users will not receive a notification when the payment was successful.

Feel free to open a Pull Request and help us, to improve the project and add more features.

Also check out https://makersphere.org & follow us on https://twitter.com/makerspherehq ✌️

## Features
* No Backend required
* Bitcoin powered
* Smooth user experience
* Support for desktop & mobile wallets
* Live payment status
* Twitter & Facebook shareable

## How it works
Users enter an amount they want to give, confirm the donation with the `Donate` button and click or scan the `QR Code`.
They will be taken to their wallet app, to finish the transaction.
When the payment was successful, they will receive a status notification.

## Usage
Clone the repository and edit the configuration file `_config.yml` to add your informations.
You need a software capable of editing `.psd` files, to customize the banners (used for Twitter, Facebook).
Build the Jekyll website using `bundle install` & `bundle exec jekyll serve`.
Voilà, your Bitcoin powered donation page is ready.

## License
If you are _not a nonprofit organization_ and would like to use this app in _other ways than permitted_ by `LICENSE`, please contact us via [Twitter](https://twitter.com/makerspherehq), or Email.

## Credits
This project is inspired by Twitter Donations (powered by [Square Cash](https://cash.me), and relies heavily on the [Blockchain](https://blockchain.info) API for updates.
We're using QRCode.js, written by [davidshimjs](https://github.com/davidshimjs/qrcodejs).
Thank you!
