# Scholar App

### Development

**First time:**

1. Install Android Studio, with an Android SDK and an Emulator
2. Install Xcode
3. Install Node.js
4. Install Bun
5. Install Java

**To run the app locally:**
Android Studio must be open with an emulator running.
`bun android`

Simulator for macOs must be open.
`bun ios`

-   If you get an error when building for IOS, run the following command:

    ```bash
    sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
    ```

### Deployment

**First time:**
`bun install -g eas-cli`
`eas login`
`eas build:configure``

**Secrets:**
Add secrets to .env file with the keys in the .env.example file.
Push secrets to eas before deploy:
`bun eas:secrets`

**To deploy the app:**

Build the app:
`bun eas:android`
`bun eas:ios`

Submit the app:
`bun eas:android-submit`
`bun eas:ios-submit`

List deploy tasks: `eas build:list`
Cancel deploy task: `eas build:cancel <id>`
