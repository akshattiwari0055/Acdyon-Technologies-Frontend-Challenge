# SignalBoard decisions

## Track picked
Part 2: premium home page.

## Product choice
SignalBoard is an invented but believable launch command center for small product teams. I chose it because the product can be shown directly through a realistic dashboard surface instead of relying on testimonials, fake logos, or inflated traction claims.

## Why this approach over the obvious alternative
The obvious alternative was a glossy SaaS landing page with generic cards, fake customer proof, and many decorative animations. I avoided that because Acdyon grades honesty and ownership as much as taste. The page leads with a clear value prop, then immediately shows a labeled sample workspace with risks, owners, decisions, and readiness state.

## UI craft and motion decisions
The layout uses a restrained editorial/product hybrid: large first-viewport type, a concrete product mock, tight cards, real dark mode, and responsive breakpoints checked against the 390px and 1440px targets. GSAP is used for entrance timing, product-card sequencing, scroll progress, subtle hero parallax, board choreography, a timeline reveal, an animated readiness meter, and a small Konami easter egg. Content stays visible by default so the motion enhances the page instead of becoming a dependency.

## Trade-off under the time limit
The dashboard is a polished static prototype rather than a connected application. With a real week, I would add a clickable product demo with editable launch cards, saved theme preferences across server-rendered loads, and a short accessibility pass with screen-reader testing beyond semantic labels and focus states.

## AI usage and personal verification
AI helped draft and implement the first version quickly. I personally aligned the content with the challenge criteria, removed any fake social proof, verified that the product data is labeled as sample data, added responsive/dark-mode behavior, and checked the build output before handoff.
