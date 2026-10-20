# Meta Language Creation Pattern

The Meta Language Creation Pattern enables you to teach a language model custom notation, shorthand,
or symbolic systems instead of natural language. This allows for more efficient communication, reduced
token usage, and precise control over complex instructions.

## Overview

Rather than describing every detail in full natural language, you can define compact syntax that the
model interprets according to your rules. This pattern is particularly useful when:

- You need to express complex relationships concisely
- You're working with repetitive structures or commands

The model acts as an interpreter for your custom language, expanding shorthand into full actions or
analyses.

## Template

```
When I say "CityA,N->CityB,M", I mean my route goes from CityA to CityB, and I will stay N days in
CityA and M days in CityB
```

## Usage example

```
We are going to create a trip planning application. I will describe my trip and you will list
interesting things to do in places that I pass through. I am going to use shorthand notation.

When I say "Florence,3->Rome,2", I mean my route will go from Florence to Rome and I will stay
3 days in Florence and 2 days in Rome.
```

Then use it:

```
Florence,3->Rome,2->Naples,1
```

**Output:**

```
Florence (3 days):
- Visit the Uffizi Gallery to see Renaissance masterpieces
- Climb the Duomo for panoramic city views
- Explore the Boboli Gardens
- Walk across Ponte Vecchio at sunset

Rome (2 days):
- Tour the Colosseum and Roman Forum
- Visit Vatican City and the Sistine Chapel
- Throw a coin in the Trevi Fountain
- Enjoy authentic carbonara in Trastevere

Naples (1 day):
- Sample authentic Neapolitan pizza at its birthplace
- Take a quick day trip to Pompeii
- Stroll along the waterfront promenade
```

## Further Reading 🔗

- [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382)
