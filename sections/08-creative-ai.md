# 🎨 Creative AI

[← Previous: Use Cases](./07-use-cases.md) · **Section 8 of 11** · [Next: Privacy & Security →](./09-privacy-and-security.md)

---

> **AI isn't just for code.** Image generation, audio, video, and UI prototyping have all made massive leaps. Here's what's practical _today_.

---

## Table of Contents

- [Image Generation](#image-generation)
- [Audio & Voice](#audio--voice)
- [Video Generation](#video-generation)
- [UI Prototyping & Design](#ui-prototyping--design)
- [Practical Applications](#practical-applications)
- [Ethics & Copyright](#ethics--copyright)
- [Try It Yourself](#-try-it-yourself)

---

## Image Generation

### The Big Players (Feb 2026)

> ⚠️ _Model versions verified Feb 2026 — check tool websites for the latest._

| Tool                        | Best For                        | Notable Feature                  |
| --------------------------- | ------------------------------- | -------------------------------- |
| **Midjourney** (latest)     | Artistic/creative images        | Best aesthetic quality           |
| **GPT Image** (gpt-image-1) | General purpose, text in images | Integrated in ChatGPT            |
| **Adobe Firefly**           | Commercial-safe generation      | Trained on licensed content only |
| **Stable Diffusion**        | Local/private generation        | Open-source, runs on your GPU    |
| **Google Imagen 4**         | Photorealism                    | Best text rendering              |

### Prompting for Images

Image prompting is different from text prompting. Key elements:

```
Subject + Style + Details + Technical specs

Example: "A modern office with developers collaborating,
clean minimal design, soft natural lighting,
isometric illustration style, 16:9 aspect ratio"
```

**What works well:**

- Marketing assets (blog headers, social media)
- Placeholder images for prototypes
- Diagrams and architecture visuals
- Icon and logo concepts

**What doesn't work (yet):**

- Pixel-perfect brand consistency
- Exact text rendering (improving but still inconsistent)
- Complex multi-person scenes with specific expressions

---

## Audio & Voice

| Capability           | Tool                   | Status                                               |
| -------------------- | ---------------------- | ---------------------------------------------------- |
| **Text-to-speech**   | ElevenLabs, OpenAI TTS | Production-ready, near-human quality                 |
| **Voice cloning**    | ElevenLabs, PlayHT     | Clone voices from short audio samples (with consent) |
| **Transcription**    | Whisper, AssemblyAI    | High accuracy, real-time capable                     |
| **Music generation** | Suno v4, Udio          | Full songs from text prompts                         |
| **Sound effects**    | ElevenLabs SFX         | Generate any sound effect on demand                  |

### Practical Example: Meeting Transcription

```
Record meeting → Whisper transcription → AI summary → Action items
```

Tools like Otter.ai, Fireflies, and Granola automate this entire pipeline.

---

## Video Generation

The fastest-moving area in creative AI right now.

| Tool               | What It Does                          | Quality Level                     |
| ------------------ | ------------------------------------- | --------------------------------- |
| **Sora** (OpenAI)  | Text-to-video, up to 60s              | Cinematic, impressive but slow    |
| **Veo 3** (Google) | Text-to-video, image-to-video         | Strong realism, native audio      |
| **Runway Gen-4**   | Video editing, extend, style transfer | Best for editing existing footage |
| **Kling 2.0**      | Text-to-video, fast                   | Good quality, fast generation     |

> ⚠️ **Reality check**: Video gen is impressive for demos and short clips but not yet reliable enough for professional video production. Use it for **quick concepts**, not final deliverables.

---

## UI Prototyping & Design

This is where creative AI becomes immediately useful for dev teams.

### v0 by Vercel

- Prompt → Working React/Next.js component
- Renders live in the browser
- Exports to your codebase
- Uses shadcn/ui and Tailwind CSS

```
v0 prompt: "Create a dashboard layout with a sidebar navigation,
a stats overview with 4 metric cards, and a data table below"
```

### Other UI & Design Tools

| Tool                 | What It Generates                                 |
| -------------------- | ------------------------------------------------- |
| **v0**               | React components (production-quality)             |
| **Figma Make**       | Figma designs from text prompts (native in Figma) |
| **Stitch** (Google)  | UI prototypes from text/image in Google ecosystem |
| **Bolt.new**         | Full-stack apps from prompts                      |
| **Lovable**          | Full apps with backend                            |
| **Claude Artifacts** | Interactive HTML/React components                 |

> **Figma Make** generates editable Figma designs from natural language — useful for designers and devs who want a visual starting point before code. **Google Stitch** is similar but focused on rapid prototyping within Google's tooling.

---

## Practical Applications

Where creative AI adds real value for development teams:

| Scenario              | AI Tool                 | Time Saved       |
| --------------------- | ----------------------- | ---------------- |
| Blog header images    | Midjourney / GPT Image  | 30 min → 2 min   |
| Client demo UI        | v0                      | 4 hours → 15 min |
| Meeting transcription | Otter.ai / Granola      | 30 min → 0 min   |
| Architecture diagrams | ChatGPT + diagram tools | 1 hour → 10 min  |
| Presentation slides   | Gamma / Claude          | 2 hours → 20 min |

---

## Ethics & Copyright

Important considerations when using creative AI for client work:

- **Ownership is murky** — AI-generated images may not be copyrightable in all jurisdictions. Check with legal before using in client deliverables.
- **Training data concerns** — Some tools train on copyrighted content without permission. **Adobe Firefly** is the safest option for commercial use (trained on licensed/public domain content).
- **Deepfakes and misuse** — Never generate images of real people without consent. Many tools now embed C2PA content credentials to prove provenance.
- **Disclosure** — When using AI-generated content for clients, be transparent about it. Some industries require this.
- **Brand consistency** — AI-generated assets may not match brand guidelines. Always have a designer review before publishing.

> 💡 **For commercial work**: Default to Adobe Firefly for client-facing deliverables. Use other tools for ideation and internal use.

---

## 🧪 Try It Yourself

1. **UI prototyping**: Go to [v0.dev](https://v0.dev) and describe a component you need. See how close it gets in one prompt.

2. **Image generation**: Use GPT Image in ChatGPT to create a blog header for a technical article. Iterate on the prompt 2-3 times.

3. **Audio**: Try [ElevenLabs](https://elevenlabs.io) free tier — paste a paragraph and hear it read back. Notice how natural it sounds.

4. **Quick comparison**: Take the same prompt and try it in 2 different image generators. Notice the style differences.

5. **Full creative pipeline** (advanced): In under 1 hour, create: a logo (image gen) → landing page (v0) → explainer script (ChatGPT) → voiceover (ElevenLabs). See how much creative output AI enables.

---

## 📚 Further Reading

- [ElevenLabs Docs](https://elevenlabs.io/docs) — Text-to-speech API
- [v0.dev](https://v0.dev) — AI UI generator
- [OpenAI Image Generation Guide](https://platform.openai.com/docs/guides/images) — GPT Image best practices
- [NotebookLM](https://notebooklm.google) — AI research assistant (try uploading this repo's sections and generating an audio overview!)
- [Midjourney Docs](https://docs.midjourney.com/) — Advanced image generation
- [Adobe Firefly](https://www.adobe.com/products/firefly.html) — Commercially safe image generation

---

[← Previous: Use Cases](./07-use-cases.md) · **Section 8 of 11** · [Next: Privacy & Security →](./09-privacy-and-security.md)
