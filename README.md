# React Boilerplate

This was created using [React Boilerplate](https://github.com/nicholastmosher/react-boilerplate/tree/react-base)

# Getting started

To setup a project using one of these configurations, first clone this repo
and checkout a new branch from react-base:

```bash
git clone https://github.com/dboots/react-blackjack
cd react-blackjack
npm install
npm run dev
```

which will serve the site at `localhost:8080`, automatically refreshing when
changes are made to the source.

# Notes

The `Deck::getHandValue` could be changed depending on if the dealer is hitting on
a soft score or not. For example, a dealer could be given the option to hit on a [A,7]
when a player has a 20.

More testing was done on tallying Aces than developing the entire thing.

Similar to real Blackjack, you only see the dealer's first until you stand.

