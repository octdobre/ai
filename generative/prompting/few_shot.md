# Few-Shot Prompting

Few-shot prompting is a technique where you provide a large language model (LLM) with a
small set of labeled examples directly inside your prompt. By pairing inputs with the
outputs you expect, you teach the model a pattern to imitate—format, tone, constraints,
and decision criteria—without retraining. In effect, the prompt itself becomes a compact
specification and tutorial. ✍️

## Why It Works 🧠

- **Pattern induction**: The model learns the structure and constraints from your
  examples and mimics them in its response.
- **Format control**: You specify exact output shapes (lists, tables, JSON, etc.) by
  demonstrating them.

## When To Use ✅

- **Ambiguous tasks** where instructions alone are under-specified.
- **Domain- or style-sensitive outputs** (e.g., legal tone, editorial voice, code style).

## How To Write Effective Few-Shot Prompts ✍️

- Pick 2–5 clean, representative examples (include one edge case).
- Use explicit, consistent labels (for example, `input:`) and a fixed output schema.

## Worked Example: Sentiment Classification 🧪

### I. Prompt

```text
You are a sentiment classifier. Classify each input as one of: positive, negative, neutral.
Respond using exactly the format: "sentiment: <label>".

example
input:  The movie was good but a bit too long
sentiment: neutral

input: I didnt like this book, it lacked details
sentiment: negative

input: i loved this book, it was really helpfull
sentiment: positive

test

input: i dont know what to think about this restaurant, the service was slow but the dishes were good.
what is the sentiment ?
```

## Worked Example: Situation Classification And Suggested Action 🧪

You can also teach the model to classify a situation and recommend an appropriate action.
Provide a few input/output pairs where the output includes both a situation label and a
concise next step. Keep labels constrained and actions specific.

```text
You are a driving safety assistant. Classify each situation as one of: dangerous, caution, normal.
Then propose a single next action. Respond exactly as:
"situation: <label>\naction: <short imperative sentence>".

example
input: Heavy rain reduces visibility; wipers struggling; highway speed is 65 mph.
situation: dangerous
action: Slow down, increase following distance, and exit safely if visibility worsens.

input: Tire pressure warning light just turned on; car handles normally; gas station nearby.
situation: caution
action: Stop at the station and inflate tires to the recommended PSI now.

input: Clear weather, light traffic, driver alert, speed within the posted limit.
situation: normal
action: Maintain speed and lane; continue scanning mirrors and the road ahead.

test

input: The car ahead brakes suddenly on a city street; you are two car lengths behind at 35 mph.
What is the situation and what should we do next?
```

## Worked Example: Action Decomposition To Desired Outcome 🧪

Teach the model to break a goal into clear intermediate steps and end with a concise
outcome. Provide a few pairs that demonstrate the exact structure you want.

```text
You are a travel planning assistant. For a given travel goal, produce a minimal, ordered list of steps.
Include any necessary pre-checks (for example, passports/visas) and a final verification step. Respond exactly as:
"steps:
1. <step one>
2. <step two>
...
result: <one-sentence outcome>"

example
input: Plan a 5-day budget trip to Tokyo in May under $2,500 including flights and lodging.
steps:
1. Verify passport validity (6+ months) and Japan entry requirements.
2. Compare round-trip flights from preferred airports; choose <=1 stop and good arrival times.
3. Reserve lodging near rail transit (JR lines) with free cancellation.
4. Outline a balanced daily itinerary (Shibuya/Shinjuku, Asakusa/Ueno, day trip option).
5. Arrange airport transfer and transit cards (Suica/PASMO) for arrival.
6. Allocate budget across flights, lodging, food, and activities; track in one sheet.
7. Consolidate confirmations and add calendar holds for key activities.
result: Flights and lodging booked within $2,500 and a practical 5-day itinerary with transit ready.

input: Book a last-minute weekend road trip to a national park within 4 hours driving, with pet-friendly lodging.
steps:
1. Check weather, park alerts, and road conditions for target dates.
2. List parks within 4 hours; pick the best option based on conditions and interest.
3. Reserve a pet-friendly hotel or campsite near the park entrance.
4. Plan the driving route, fuel stops, and park entry timing.
5. Pack essentials: water, snacks, pet supplies, first aid, and layers.
6. Download offline maps, trail info, and required permits.
result: Confirmed pet-friendly lodging and a safe, time-bound route for a two-day park visit.

test

input: Organize a 7-day family vacation to Barcelona under $4,000 including flights and lodging; ensure passports are valid and reserve timed tickets for Sagrada Família.
What are the steps and the final result?
```

## Alternatives And Complements

- **Zero-shot prompting** for simple tasks with clear instructions.
- **One-shot prompting** when one canonical pattern suffices.
- **Many-shot prompting** for nuanced tasks when cost is acceptable.
- **Chain-of-thought or rationale prompting** to elicit intermediate reasoning steps.
- **Retrieval-augmented generation (RAG)** to inject factual context alongside a few shots.

## Further Reading 🔗

- [Prompting Guide: Few-shot](https://www.promptingguide.ai/techniques/fewshot)
