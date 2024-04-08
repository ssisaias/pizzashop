##Pizza shop

Sample order control application built with React, using:

- Shadcn ui / Radix ui / tailwind
- axios
- date-fns
- React Helmet
- React Router
- React Hook Form
- zod
- React Query

As for testing, we have:

- playwright
- msw
- [testing-library](https://testing-library.com/)
- happy-dom
- vitest

## Instructions (pnpm)

1. Clone this repository
2. Install dependencies with `pnpm install`
3. Start the app with `pnpm run dev`

## Testing:
- Run unit tests with `pnpm run test`

OR

- Run and hit mocked responses from msw with `pnpm run dev:test`

OR 

- Using playwright, run `pnpm playwright test --ui`