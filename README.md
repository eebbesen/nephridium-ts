![workflow](https://github.com/eebbesen/nephridium-ts/actions/workflows/push.yml/badge.svg)

# nephridium-ts

This is an experimental app to help users build URLs for https://github.com/eebbesen/nephridium.

Functionality is incomplete but it still may be of use for generating the Nephridium URL params.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Favicon from https://commons.wikimedia.org/wiki/File:Oversimplification_Fallacy_Icon.png

Try it out at https://nephridium-ts.vercel.app/! You can use https://data.cityofchicago.org/resource/22u3-xenr.json as a test URL if you don't have your own.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Use https://www.w3.org/TR/html-aria/#docconformance to map HTMLElements to their ARIA roles.
https://testing-library.com/docs/queries/about/#byrole has more specific information to React.

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Test

Coverage stats will print to the console.

```bash
npm run test
```
