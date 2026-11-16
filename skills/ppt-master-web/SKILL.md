---
name: ppt-master-web
description: Draft and review source-grounded slide decks in ChatGPT, with slide-level design, speaker notes, and editable PowerPoint export when supported. Use for 论文汇报、组会 PPT、答辩、演示文稿改版.
---

# PPT Master 网页版

This standalone workflow adapts the presentation design principles of [PPT Master](https://github.com/hugohe3/ppt-master) by Hugo He. It uses capabilities available in the conversation. The original desktop exporter and template library are separate.

## Plan

- Identify the audience, the presentation objective, the supplied sources, and the required output. Use a clear assumption for missing preferences when it still permits progress. Ask only about inputs that could materially change the result.
- For each slide, record one communication job, a title that expresses the main point, the evidence or visual it needs, and optional speaker notes. Organize the slides to develop the argument. Preserve source claims, terminology, numbers, units, uncertainty, and provenance. Mark missing evidence instead of inventing it.
- For research reporting, connect the question, method, result and limitation. In a comparison, align the baseline, metrics and units. Use a meaningful sequence or design grid to connect related slides.

## Author and deliver

- Treat supplied templates and source slides as constraints where requested. Use native text, shapes, tables and charts when editability matters and the available exporter supports them. Use images for relevant visuals and keep rasterized content distinguishable from editable elements. Use the user's typography, page size, color and language requirements.
- If a presentation authoring tool is available, generate the requested deliverable. Verify readable labels, unclipped text, intact sources, consistent alignment, and the actual output format. If a PPTX is produced, open or render it when supported. Claim editability only for objects verified to be editable.
- If there is no usable PPTX creation tool, deliver the slide-by-slide content and design brief. For desktop-only actions such as PPT Master's own template import pipeline, animation, narration, or direct video export, give an actionable handoff to local Codex. Never promise an export that was not created.
