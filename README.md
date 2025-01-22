# TypeScript Optional Parameter Bug

This repository demonstrates a common, yet subtle, bug in TypeScript related to optional parameters.  When an optional parameter is not provided, it defaults to `undefined`, which might not always be the desired behavior. This can be particularly problematic when the function doesn't explicitly handle the `undefined` case.

The `bug.ts` file shows the problematic code, while `bugSolution.ts` presents a solution to address the issue.

## How to Reproduce
1. Clone this repository.
2. Compile and run `bug.ts` using a TypeScript compiler (tsc) and a Node.js runtime (node).
3. Observe the output, which is `undefined`. This might not be the expected behavior if a missing argument should have triggered an error.

## Solution
The `bugSolution.ts` file demonstrates multiple approaches to handle this scenario, such as providing a default value or explicitly checking for `undefined`.

This example highlights the importance of thorough input validation and handling edge cases when working with optional parameters in TypeScript.