---
version: alpha
name: 28-A Blackout Timeline
description: >
  Design specification for the interactive timeline documenting the April 28, 2025
  Iberian Peninsula blackout. Clean documentary aesthetic built on Material UI,
  supporting light and dark modes with a Spanish-first audience.
colors:
  primary: '#1976d2'
  primary-light: '#4ca9ff'
  primary-dark: '#00439f'
  secondary: '#dc004e'
  error: '#f44336'
  warning: '#ff9800'
  info: '#2196f3'
  success: '#4caf50'
  background: '#fafafa'
  surface: '#ffffff'
  text-primary: '#212121'
  text-secondary: '#757575'
  text-tertiary: '#9e9e9e'
  text-disabled: '#bdbdbd'
  dark-primary: '#ffa726'
  dark-primary-light: '#ffda59'
  dark-primary-dark: '#cc7400'
  dark-secondary: '#f48fb1'
  dark-background: '#1a2332'
  dark-surface: '#27303f'
  dark-text-primary: '#ffffff'
typography:
  h1:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '2.5rem'
    fontWeight: '500'
  h2:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '2rem'
    fontWeight: '500'
  h3:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '1.75rem'
    fontWeight: '500'
  h4:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '1.5rem'
    fontWeight: '500'
  h5:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '1.25rem'
    fontWeight: '500'
  h6:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '1rem'
    fontWeight: '500'
  eventTitle:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '1rem'
    fontWeight: '600'
  body1:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '1rem'
    fontWeight: '400'
  body2:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '0.875rem'
    fontWeight: '400'
  caption:
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    fontSize: '0.75rem'
    fontWeight: '400'
  timeChip:
    fontFamily: monospace
    fontSize: '0.9rem'
    fontWeight: '700'
rounded:
  xs: '2px'
  sm: '4px'
  md: '8px'
  xl: '24px'
  full: '50%'
spacing:
  1: '8px'
  2: '16px'
  3: '24px'
  4: '32px'
  5: '40px'
  6: '48px'
components:
  button:
    borderRadius: '{rounded.md}'
    padding: '8px 16px'
  introCard:
    borderRadius: '{rounded.xl}'
    borderWidth: '2px'
    borderColor: '{primary}'
  eventCard:
    borderLeftWidth: '4px'
    borderLeftColor: '{error}'
    elevationDefault: '2'
    elevationVisible: '6'
  timeChip:
    color: '{error}'
    size: small
  appBar:
    background: transparent
    elevation: '0'
---

# 28-A Blackout Timeline — Design Specification

## Overview

The visual identity is **documentary and informational**: the design serves the content (a dense crisis timeline) without dramatizing it. Material Design 3 principles applied via Material UI 7 provide structure and familiarity, letting users focus on data rather than the interface.

**Emotional register:** calm authority. Clean whites and near-whites in light mode. Deep navy/steel in dark mode. Controlled use of red (error) for crisis markers conveys urgency without visual noise.

**Light mode** is the primary experience (Spanish audience default). **Dark mode** uses an amber primary (`#ffa726`) instead of the light-mode blue — this is intentional: amber evokes the electrical/blackout theme and provides warm contrast against the deep navy background.

**Language:** Spanish is the default (pre-rendered for SEO); English available client-side via the header language selector.

**Tone:** no rounded-corner excess, no gradients, no decorative illustration. The only dramatic visual element is the vertical timeline line and alternating card layout — these carry the narrative weight.

---

## Colors

### Light Mode

| Role           | Token            | Hex       | Usage                                                                                       |
| -------------- | ---------------- | --------- | ------------------------------------------------------------------------------------------- |
| Primary        | `primary`        | `#1976d2` | Intro card border, timeline line, links, focused controls                                   |
| Primary Light  | `primary-light`  | `#4ca9ff` | Hover/pressed states on primary elements                                                    |
| Primary Dark   | `primary-dark`   | `#00439f` | Active/selected primary states                                                              |
| Secondary      | `secondary`      | `#dc004e` | Rarely used; available for accents                                                          |
| Error          | `error`          | `#f44336` | Timeline event card left-border, time chip, event dots — marks all events as crisis markers |
| Warning        | `warning`        | `#ff9800` | Power/MW event list icons                                                                   |
| Info           | `info`           | `#2196f3` | Informational states                                                                        |
| Success        | `success`        | `#4caf50` | Positive states                                                                             |
| Background     | `background`     | `#fafafa` | Page background                                                                             |
| Surface        | `surface`        | `#ffffff` | Cards, dropdowns, modals                                                                    |
| Text Primary   | `text-primary`   | `#212121` | Body text, headings                                                                         |
| Text Secondary | `text-secondary` | `#757575` | Captions, date stamps, metadata                                                             |
| Text Tertiary  | `text-tertiary`  | `#9e9e9e` | Placeholder, less-prominent labels                                                          |
| Text Disabled  | `text-disabled`  | `#bdbdbd` | Disabled inputs                                                                             |

### Dark Mode

Dark mode uses different primary and background colors. All values come from `src/ui/theme/theme.ts`.

| Role           | Token                | Value                    | Usage                                                             |
| -------------- | -------------------- | ------------------------ | ----------------------------------------------------------------- |
| Primary        | `dark-primary`       | `#ffa726`                | Intentional amber — evokes electrical/power theme in dark context |
| Primary Light  | `dark-primary-light` | `#ffda59`                |                                                                   |
| Primary Dark   | `dark-primary-dark`  | `#cc7400`                |                                                                   |
| Secondary      | `dark-secondary`     | `#f48fb1`                |                                                                   |
| Error          | —                    | `#f44336`                | Unchanged across modes                                            |
| Warning        | —                    | `#ff9800`                | Unchanged                                                         |
| Info           | —                    | `#29b6f6`                | Slightly brighter in dark                                         |
| Success        | —                    | `#66bb6a`                | Slightly brighter in dark                                         |
| Background     | `dark-background`    | `#1a2332`                | Deep navy — not pure black; avoids harsh contrast                 |
| Surface        | `dark-surface`       | `#27303f`                | Cards, elevated surfaces                                          |
| Text Primary   | `dark-text-primary`  | `#ffffff`                |                                                                   |
| Text Secondary | —                    | `rgba(255,255,255,0.7)`  |                                                                   |
| Text Tertiary  | —                    | `rgba(255,255,255,0.6)`  |                                                                   |
| Text Disabled  | —                    | `rgba(255,255,255,0.38)` |                                                                   |

> **Primary flip rationale:** The primary color deliberately shifts from blue (light) to amber (dark). Blue on white reads as trustworthy information design; amber on navy reads as electrical/energy tension. Both modes are coherent on their own terms. Do not "fix" this toward a single color — it is a design decision.

---

## Typography

**Font stack:** `"Roboto", "Helvetica", "Arial", sans-serif` for all UI text. Exception: the time chip uses `monospace` to emphasize exact timestamps (HH:MM:SS.mmm format).

| Level        | Size     | Weight  | Usage                                                          |
| ------------ | -------- | ------- | -------------------------------------------------------------- |
| `h1`         | 2.5rem   | 500     | Not currently used in UI; available for future landing content |
| `h2`         | 2rem     | 500     | Not currently used in UI                                       |
| `h3`         | 1.75rem  | 500     | Not currently used in UI                                       |
| `h4`         | 1.5rem   | 500     | Intro card title                                               |
| `h5`         | 1.25rem  | 500     | Not currently used in UI                                       |
| `h6`         | 1rem     | 500     | Base for event card titles (overridden to 600 in events)       |
| `eventTitle` | 1rem     | **600** | Timeline event card headings — bolder than default h6          |
| `body1`      | 1rem     | 400     | Intro card body paragraph                                      |
| `body2`      | 0.875rem | 400     | Event list items                                               |
| `caption`    | 0.75rem  | 400     | Date stamps (28/04/2025), footer text, end-of-timeline marker  |
| `timeChip`   | 0.9rem   | **700** | Timestamp chip (monospace, bold)                               |

**Line-height and letter-spacing** rely on MUI defaults (line-height ~1.5 for body, ~1.2–1.3 for headings). No overrides defined.

---

## Layout & Spacing

### Spacing Scale

Base unit: **8px** (MUI default). All component spacing is expressed in multiples of this unit via `theme.spacing(n)`.

| Scale | px   | MUI          | Usage                                                                                     |
| ----- | ---- | ------------ | ----------------------------------------------------------------------------------------- |
| 1     | 8px  | `spacing(1)` | Stack gaps, chip padding, icon margins                                                    |
| 2     | 16px | `spacing(2)` | Intro outer padding, footer padding, toolbar horizontal padding (xs), header internal gap |
| 3     | 24px | `spacing(3)` | Toolbar horizontal padding (sm+)                                                          |
| 4     | 32px | `spacing(4)` | Intro card content margin                                                                 |
| 5     | 40px | `spacing(5)` | Timeline container top/bottom padding; event dot diameter                                 |

### Page Structure

```
┌─────────────────────────────────────────────────────┐
│  Header (full-width, transparent AppBar)            │
│  [theme toggle]  [language selector]  right-aligned │
│  minHeight: 48px (xs) / 56px (sm+)                  │
├─────────────────────────────────────────────────────┤
│  Intro Card (centered, max 35% width on lg+)        │
│  outer padding: 16px                                │
│  card width: 90% (xs) / 70% (sm–md) / 35% (lg+)    │
│  content margin: 32px                               │
├─────────────────────────────────────────────────────┤
│  Timeline (max-width: 1200px, centered)             │
│  padding: 40px 20px (desktop/tablet)                │
│                    │                                │
│   ←left card─────  ●  ─────right card→             │
│                    │                                │
│   (alternating, 50% width each, 50px gap between)  │
│                    │                                │
│   [collapses to single left column below 768px]     │
│                    │                                │
│              "End of events"                        │
├─────────────────────────────────────────────────────┤
│  Footer (full-width, centered content)              │
│  direction: column (xs) / row (sm+)                 │
│  marginTop: 16px, paddingBottom: 16px               │
└─────────────────────────────────────────────────────┘
```

### Timeline Layout Detail

- **Center line:** `width: 4px`, `border-radius: 2px`, `left: 50%`, `background: alpha(primary.main, 0.2)`. End-caps (top/bottom): `12×12px` circles, `background: primary.main`.
- **Alternating cards:** even-index → left side (`padding-right: 40px`, text right-aligned); odd-index → right side (`left: 50%`, `padding-left: 40px`, text left-aligned).
- **Event dot:** `40×40px` circle on the center line, `border: 4px solid error.main`, `background: surface`. Contains `<FlashOn>` icon.
- **Card-to-card gap:** `margin-bottom: 50px` per item.
- **Responsive breakpoints:**
  - `< 768px`: single-column, line moves to `left: 20px`, items span full width with `padding-left: 60px`, dots shrink to `32×32px`.
  - `769–1024px`: container padding reduces to `30px 15px`, L/R card padding reduces to `30px`.
  - `> 1024px`: full alternating layout.
- **Scroll reveal:** items start at `opacity: 0, translateY(30px)`. IntersectionObserver (threshold 0.2, rootMargin `-50px 0px`) adds `.visible` class: `opacity: 1, translateY(0)`. Transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`.

---

## Elevation & Depth

The app uses elevation minimally and purposefully.

| Element                                | Elevation                     | Notes                                                                                                                                         |
| -------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| AppBar/Header                          | 0 (flat)                      | `elevation={0}`, `boxShadow: none`, `background: transparent`. The header does not visually separate from the page — it floats above content. |
| Intro Card                             | Default MUI Paper             | No explicit elevation override; renders with standard paper shadow.                                                                           |
| Timeline event cards (not yet visible) | 2                             | Low shadow while below viewport.                                                                                                              |
| Timeline event cards (scroll-revealed) | 6                             | Elevation animates up to 6 on reveal (`transition: all 0.3s ease`), adding a subtle "lifting" effect as each card enters view.                |
| Theme-defined AppBar shadow            | `0px 2px 4px rgba(0,0,0,0.1)` | Defined in theme overrides but overridden to none in the Header component. Available for any AppBar that does not override it.                |

Depth is conveyed primarily through MUI's box-shadow elevation system. No gradients, backdrop-blur, or layered transparency effects are used outside of MUI defaults.

---

## Shapes

| Radius         | Value  | Usage                                                                                        |
| -------------- | ------ | -------------------------------------------------------------------------------------------- |
| `xs` / line    | `2px`  | Timeline center line end caps                                                                |
| `sm`           | `4px`  | Event list item hover background                                                             |
| `md` (base)    | `8px`  | Buttons, chips, end-of-timeline text badge, MUI default component radius                     |
| Sponsor iframe | `6px`  | GitHub Sponsors iframe, hardcoded                                                            |
| `xl`           | `24px` | Intro card — intentionally larger to signal a distinct "card" context vs. the timeline cards |
| `full`         | `50%`  | Timeline dots, timeline line end-caps                                                        |

The progression from `4px` (micro interactions) → `8px` (standard UI atoms) → `24px` (feature card) → `50%` (dots/markers) reflects component hierarchy: tighter radius = more atomic, larger radius = more prominent/branded.

---

## Components

### Header / AppBar

- **MUI:** `AppBar position="static" elevation={0}` + `Toolbar`
- Background: transparent (`backgroundColor: transparent`, `boxShadow: none`). Header floats over the page with no visual boundary.
- Toolbar height: `48px` (xs) / `56px` (sm+)
- Content: right-aligned flex row, `gap: 16px`
- Contains: `ThemeSwitch` (toggle, size small) + `Select` (language, size small, minWidth 80px)
- Select border: default `text.secondary`, hover `text.primary`, focused `primary.main`

### Intro Card

- **MUI:** `Card` inside a centered `Box`
- Width responsive: `90%` (xs) → `70%` (sm/md) → `35%` (lg+)
- Border: `2px solid primary.main`, `borderRadius: 24px`
- Background: `background.paper`
- Content margin: `32px` on all sides
- Title: `h4` variant, `color: primary.main`, `textAlign: center`, `marginBottom: 16px`
- Body: `body1`, `color: text.primary`, `whiteSpace: pre-line`. Contains a `Link` to the official Moncloa PDF.

### Timeline Event Card

- **MUI:** `Card` (Paper elevation)
- Left accent border: `4px solid error.main`
- Background: `background.paper`
- Elevation: animates 2 → 6 on scroll-reveal
- Transition: `all 0.3s ease`

### Time Chip

- **MUI:** `Chip color="error" size="small"`
- Font: `monospace`, weight `bold`, size `0.9rem`
- Contains `AccessTime` icon
- Displays event `startTime` in `HH:MM:SS.mmm` format

### Event Title

- **MUI:** `Typography variant="h6"`
- `fontWeight: 600` (overrides theme h6 default of 500)
- `color: text.primary`
- `marginTop: 8px`

### Event List Items

Each event card contains a `List dense` of `ListItem` rows with conditional icons and `body2` text:

| Condition (text content) | Icon         | Color            |
| ------------------------ | ------------ | ---------------- |
| Contains "Total"         | `Warning`    | `error.main`     |
| Contains "Hz"            | `QueryStats` | `text.secondary` |
| Contains "MW"            | `FlashOn`    | `warning.main`   |
| Default                  | `Edit`       | `text.secondary` |

- List item padding: `py: 0.5 (4px), px: 0`
- Icon column: `minWidth: 30px`
- Bold weight (`fontWeight: 600`) applied to items containing "Total"
- Hover: `translateX(4px)`, `backgroundColor: rgba(0,0,0,0.02)`, transition `0.2s ease`
- Scroll-reveal stagger animation: `slideIn` keyframe (`opacity 0→1`, `translateX -20px→0`), `0.3s ease forwards`, delay `itemIndex × 0.05s`

### Event Date Footer

- **MUI:** `Typography variant="caption"`
- `color: text.secondary`, `display: block`, `marginTop: 8px`, `textAlign: right`
- Format: `DD/MM/YYYY`

### Footer

- **MUI:** `Stack` (outer: `direction row/column`, `spacing 8px`, dividers) + `Stack` (inner copyright row)
- `paddingBottom: 16px`, `marginTop: 16px`
- Responsive: stacks vertically on xs, horizontal row on sm+
- Vertical `Divider` separates the three sections
- Contains: copyright (CopyrightIcon + name link + year), source link (Moncloa report), GitHub link (GitHubIcon), GitHub Sponsors iframe (`height: 32px, width: 114px, borderRadius: 6px`)
- All link colors: `text.primary`

### Buttons

- `textTransform: none` (no ALL-CAPS)
- `borderRadius: 8px`
- `padding: 8px 16px`

---

## Do's and Don'ts

### Do

- **Use theme tokens** for all colors. Reference `theme.palette.*` in `sx` props or via `useTheme()`. Never hardcode hex values outside of `src/ui/theme/theme.ts`.
- **Use `t()` from `useTranslation()`** for all translated strings, not the `<Trans>` component. The `<Trans>` component can cause SSG pre-render issues.
- **Guard browser APIs** with `typeof window !== 'undefined'` before accessing `localStorage`, `window.matchMedia`, or any DOM API. The app uses SSG and runs in a Node environment at build time.
- **Respect `prefers-reduced-motion`**: The Timeline CSS module already disables scroll-reveal transitions and the `slideIn` keyframe for users who request it. Any new animations must follow the same pattern.
- **Keep the AppBar flat**: The header intentionally has no background or shadow. This is a design choice — the header floats transparently above the content.
- **Follow the 8px spacing grid**: Use `theme.spacing(n)` for all margin/padding. Raw pixel values in CSS modules should be multiples of 8 (8/16/24/32/40/48...) or justified exceptions.
- **Pre-render in Spanish**: The SSG build pre-renders Spanish content. Language switching is client-side only after hydration. Ensure new features work in both languages.

### Don't

- **Don't "fix" the primary color flip** between light mode (blue) and dark mode (amber). The amber-in-dark is intentional design — it suits the electrical/blackout theme.
- **Don't use `rgba(0,0,0,*)` for dark-mode-compatible colors**: Such values are invisible or wrong in dark mode. Use `theme.palette.action.hover`, `theme.palette.divider`, or `alpha(color, opacity)` from MUI's color utility.
- **Don't add elevation to the AppBar**: Even if MUI's default shadow is defined in the theme, the Header component deliberately overrides it to none.
- **Don't import CSS directly for component styling**: All component styles use MUI `sx` props and `useTheme()`. The only CSS module is `Timeline.module.css` for the complex timeline layout. New components should follow the `sx` pattern.
- **Don't add decorative visuals** (gradients, illustrations, background patterns). The design is intentionally sparse — data and narrative carry the page.
- **Don't use the `<Trans>` component** for SSG-rendered content (see Do's above).
