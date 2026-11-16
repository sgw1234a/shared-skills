---
name: nature-figure-web
description: Plan, create and review evidence-grounded scientific figures, multi-panel layouts and legends in ChatGPT. Use for 科研绘图、论文配图、多面板图、图注、投稿前图件检查.
---

# Nature Figure 网页版

This standalone workflow adapts scientific figure-design guidance from [Nature Skills](https://github.com/Yuan1z0825/nature-skills). It uses data and tools available in the current conversation.

## Define the evidence and output

- Establish the central claim, the figure's role in the paper, the intended audience or journal, and the requested output. For multiple panels, state how each supports the main claim, validates it, or addresses a control. Make the strongest supported evidence easy to find.
- Inspect uploaded data before plotting. Identify variables, units, independent observations, grouping, missing values, and the meaning of uncertainty. Identify paired measurements and distinguish biological from technical replicates when relevant. Preserve values and design constraints. Clearly mark quantities or evidence that are missing.
- Distinguish quantitative data plots, evidence-bearing images and conceptual schematics. In schematics, distinguish measured relationships from hypotheses and label illustrative elements accordingly.

## Build and check

- Choose an encoding that exposes the comparison. Show distributions for variability, match lines for paired observations, and show effect sizes with appropriate intervals when supported. Keep comparable axes and units consistent. Clearly label transformations, baselines, error bars, and sample counts. Select distinguishable colors at final size and use markers or line patterns where needed.
- If the conversation can execute code, render the figure from supplied data, check it panel by panel at its intended size, and export the requested format when supported. Common outputs are SVG or PDF for vector work, PNG or TIFF for raster work, and a reproducible plotting script. If execution is unavailable, deliver the specification, legend and runnable code. Verify the output before reporting checks.
- In the legend, state the panel roles, units, sample definition and size, what summaries and error bars show, and the statistical test if supplied or computed. For submission, verify the selected journal's current specifications. Check for cropped labels, misleading scales, illegible glyphs, poor contrast and mismatches with source data.
