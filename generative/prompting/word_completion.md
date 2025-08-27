# How LLMs predict the next word

Large language models (LLMs) predict the next word by estimating a probability distribution over the vocabulary conditioned on the prompt 🧠🔤. The input is tokenized, embedded, and processed by transformer layers with self‑attention, which lets the model focus on the most relevant context.

The network outputs logits for each token; softmax turns these into probabilities 🎯. Decoding then selects the next token using greedy selection or sampling methods like temperature, top‑k, or nucleus sampling 🎲. The chosen token is appended and fed back, repeating step by step. Trained on vast corpora, LLMs internalize linguistic patterns, enabling coherent, contextually appropriate continuations 📚.

## Examples

- Greedy decoding:
```text
Prompt: The capital of France is
→ Paris
```

- Temperature = 1.0 (more diverse):
```text
Prompt: The story begins at midnight and
→ the city exhales; lanterns flicker as footsteps scatter into alleys.
```

- Top‑k / nucleus sampling:
```text
Prompt: A recipe for pancakes includes
→ flour, eggs, milk, a pinch of salt, and butter.
```

## Further Reading 🔗
- [Attention Is All You Need (Vaswani et al., 2017)](https://arxiv.org/abs/1706.03762)
- [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/)
- [The Curious Case of Neural Text Degeneration (Holtzman et al., 2020)](https://arxiv.org/abs/1904.09751)
