In Window's PowerShell

`Copy-Item .env.example -Destination .env`

In Linux

`cp .env.example .env`

Aim is to fill the `REACT_APP_BACKEND_STATIC_DIR` attribute with path to backend directory, where the webpack bundles should be stored.

To run the bundle build run:

`npm run dev`
