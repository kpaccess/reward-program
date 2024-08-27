# Customer Reward Program

This React.js + Vite application calculates and displays rewared points for customers based on their transactions over a three-month period. The application simulates an asynchronous API call to fetch transaction data and computes the rewards.

### Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Points Calculation Rules](#points-calculation-rules)

## Features

- ** Rewards Calculation:** Automatically calculates reward points based on based on transaction amounts using predefined rules.
- \*\* Monthly and Total Aggregation: Displays points earned by each customer per month and in total.
- \*\*Simulated API Calls: \*\* Demonstrates how to handle asynchronous data fetching in React
- ** Error Handling: ** Gracefully manages errors and displays appropriate error messages
- ** Loading Indicator: ** Provides feedback during data fetching with loading state

## Installation

To run this project locally, follow the steps below:

1. **Clone the respository:**

```bash
    git clone https://github.com/kpaccess/reward-program
    cd reward-program
```

2. **Install dependencies:**

```bash
    npm install
```

3. **\*Start the development server:**

```base
    npm start
```

## Usage

### Points Calculation Rules

The reward points are calculated base on the following rules:

- **2 points ** for every dollar spent over $100 in a single transaction.
- ** 1 points ** for every dollar spend between $50 and $100 in a single transaction.

For example:

- A transaction of **$120** results in **90 points**:
  - 20 dollars over 100 = 20 \* 2 = 40 points
  - 50 dollars between 50 and 100 = 50 \* 1 = 50 points
- A transaction of **$75** results in **25 points**:
  - 25 dollars between 50 and 100 = 25 \* 1 = 25 points
