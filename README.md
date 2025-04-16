# BET STATUS DASHBOARD

## Configuration

### .env file

Rename the `.env.example` file to `.env`

## Installation

Before you can run the project, you need to install dependencies in both folders(client and server).

```bash
npm install
```

## Run Project

1.Go to server folder and run the back-end application.

```bash
npm run start
```

2.Go to client folder and run the front-end application.

```bash
npm run start
```

## REFLECTION QUESTIONS:

1.I chose this approach to managing Redux state to see each action. I use Redux DevTools which helps me track every action and see the exact state changes. Also, when creating slices I structure them in a way that each action is easy to understand both for myself and for the team.

2.Alternative way to implement filter by using local useState, if the filter is only relevant to a single component and doesn't need to be shared globally.

3.I try to keep middle between simplicity and scalability. My endpoints follow REST principles, with clear error message and status code.

4. I would add more filtering and sorting options that user can find quickly what they need(e.g by date or amount) Also when there's larger amount of bet data I would implement pagination with limit 10 items per page this would improve UX by preventing long scrolling - instead they can switch pages.

