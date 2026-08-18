import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.css'

gsap.registerPlugin(ScrollTrigger)

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark' || savedTheme === 'light') {
  document.documentElement.dataset.theme = savedTheme
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="scroll-progress" aria-hidden="true"></div>
  <main>
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="SignalBoard home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>SignalBoard</span>
      </a>
      <nav class="nav-links" aria-label="Page sections">
        <a href="#product">Product</a>
        <a href="#workflow">Workflow</a>
        <a href="#pricing">Scope</a>
      </nav>
      <button class="theme-toggle" type="button" aria-label="Toggle color theme">
        <span aria-hidden="true"></span>
      </button>
    </header>

    <section class="hero section-shell" id="top">
      <div class="hero-copy">
        <p class="eyebrow">Launch command center for small product teams</p>
        <h1>Turn scattered launch work into one calm, accountable board.</h1>
        <p class="hero-text">
          SignalBoard gives founders and product leads a live view of launch risks, owner handoffs,
          and decision notes without pretending you have a giant operations team.
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="#product">View product</a>
          <a class="secondary-action" href="#workflow">See workflow</a>
        </div>
        <div class="truth-row" aria-label="Project principles">
          <span>Sample data</span>
          <span>No fake logos</span>
          <span>Built for 390px+</span>
        </div>
      </div>

      <div class="hero-product" aria-label="SignalBoard product preview">
        <div class="window-bar">
          <span></span><span></span><span></span>
          <strong>Sample workspace</strong>
        </div>
        <div class="launch-card active">
          <div>
            <p>Checkout redesign</p>
            <strong>Ready for final QA</strong>
          </div>
          <span class="status calm">On track</span>
        </div>
        <div class="signal-grid">
          <article>
            <span>Risk</span>
            <strong>Copy freeze waiting on legal</strong>
          </article>
          <article>
            <span>Owner</span>
            <strong>Maya, Design</strong>
          </article>
          <article>
            <span>Decision</span>
            <strong>Ship v1 without coupons</strong>
          </article>
          <article>
            <span>Next check</span>
            <strong>Today, 4:30 PM</strong>
          </article>
        </div>
        <div class="progress-panel">
          <div class="progress-copy">
            <span>Release readiness</span>
            <strong data-count="72">0%</strong>
          </div>
          <div class="progress-track"><span></span></div>
        </div>
        <div class="activity-rail" aria-label="Recent launch activity">
          <p><span></span> Risk owner changed from Support to Product</p>
          <p><span></span> Rollback note attached to checkout flag</p>
          <p><span></span> Decision logged: coupons move to v1.1</p>
        </div>
      </div>
    </section>

    <section class="signal-strip" aria-label="SignalBoard operating model">
      <div class="section-shell signal-strip-inner">
        <article>
          <span>Inputs</span>
          <strong>Risks, owners, decisions</strong>
        </article>
        <article>
          <span>System</span>
          <strong>One launch state</strong>
        </article>
        <article>
          <span>Output</span>
          <strong>Clear next action</strong>
        </article>
      </div>
    </section>

    <section class="proof-band" id="product">
      <div class="section-shell product-shell">
        <div class="section-intro reveal">
          <p class="eyebrow">Show, do not claim</p>
          <h2>A product surface built from realistic launch data.</h2>
          <p>
            The dashboard below is intentionally labeled as sample data. No fake customers,
            no invented logos, no vanity numbers.
          </p>
        </div>
        <div class="board">
          <div class="board-column">
            <div class="column-title">
              <span class="dot amber"></span>
              <strong>Needs attention</strong>
            </div>
            <button class="task-card" type="button">
              <span>Billing copy</span>
              <strong>Pricing language still conflicts with support docs.</strong>
              <small>Owner: Product</small>
            </button>
            <button class="task-card" type="button">
              <span>Web analytics</span>
              <strong>Event names verified locally, not in production yet.</strong>
              <small>Owner: Engineering</small>
            </button>
          </div>
          <div class="board-column">
            <div class="column-title">
              <span class="dot teal"></span>
              <strong>In review</strong>
            </div>
            <button class="task-card highlighted" type="button">
              <span>Activation path</span>
              <strong>New-user checklist gets one more usability pass.</strong>
              <small>Owner: Design</small>
            </button>
            <button class="task-card" type="button">
              <span>Launch email</span>
              <strong>Subject line approved; screenshots updated.</strong>
              <small>Owner: Marketing</small>
            </button>
          </div>
          <div class="board-column">
            <div class="column-title">
              <span class="dot green"></span>
              <strong>Ready</strong>
            </div>
            <button class="task-card" type="button">
              <span>Rollback plan</span>
              <strong>Feature flag and support note are documented.</strong>
              <small>Owner: Engineering</small>
            </button>
            <button class="task-card" type="button">
              <span>Founder note</span>
              <strong>Short, specific, and free of hype math.</strong>
              <small>Owner: CEO</small>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell workflow" id="workflow">
      <div class="section-intro reveal">
        <p class="eyebrow">System thinking in the product</p>
        <h2>Every launch item carries context, ownership, and a recovery path.</h2>
      </div>
      <div class="workflow-grid">
        <article class="feature reveal">
          <span>01</span>
          <h3>Capture uncertainty early</h3>
          <p>Risks sit beside the work instead of being buried in a meeting note.</p>
        </article>
        <article class="feature reveal">
          <span>02</span>
          <h3>Make ownership visible</h3>
          <p>Every card has one current owner, so handoffs are explicit.</p>
        </article>
        <article class="feature reveal">
          <span>03</span>
          <h3>Leave an audit trail</h3>
          <p>Decision notes explain what changed and why, useful when launch pressure rises.</p>
        </article>
      </div>
      <div class="timeline" aria-label="Launch workflow timeline">
        <div class="timeline-line"><span></span></div>
        <article>
          <small>Morning</small>
          <strong>Flag the messy unknowns</strong>
          <p>Teams add risk notes before the launch meeting turns vague.</p>
        </article>
        <article>
          <small>Midday</small>
          <strong>Assign one accountable owner</strong>
          <p>SignalBoard keeps current ownership visible while the work moves.</p>
        </article>
        <article>
          <small>Ship room</small>
          <strong>Recover without guessing</strong>
          <p>Rollback notes and decisions stay attached to the launch state.</p>
        </article>
      </div>
    </section>

    <section class="scope-band" id="pricing">
      <div class="section-shell scope-shell reveal">
        <div>
          <p class="eyebrow">Honest scope</p>
          <h2>Designed as a premium home page prototype, not a pretend unicorn.</h2>
        </div>
        <p>
          This page focuses on product clarity, responsive craft, dark mode, and a few
          purposeful interactions. The product data is sample-only and marked that way.
        </p>
      </div>
    </section>
  </main>

  <div class="lock-overlay" aria-hidden="true">
    <div class="lock-stage">
      <div class="lock-3d" aria-hidden="true">
        <div class="lock-shackle"></div>
        <div class="lock-body">
          <span class="lock-keyhole"></span>
        </div>
        <div class="lock-shine"></div>
      </div>
      <p class="lock-kicker">Bonus mode</p>
      <strong class="lock-message">Focus mode unlocked</strong>
    </div>
  </div>
`

const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle')!
themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = nextTheme
  localStorage.setItem('theme', nextTheme)
})

gsap.to('.scroll-progress', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: document.documentElement,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.2,
  },
})

gsap.set('.site-header, .hero-copy > *, .hero-product', { autoAlpha: 0, y: 18 })
gsap
  .timeline({ defaults: { ease: 'power3.out', duration: 0.75 } })
  .to('.site-header', { autoAlpha: 1, y: 0 })
  .to('.hero-copy > *', { autoAlpha: 1, y: 0, stagger: 0.09 }, '-=0.35')
  .to('.hero-product', { autoAlpha: 1, y: 0, duration: 0.9 }, '-=0.45')
  .from('.launch-card, .signal-grid article, .progress-panel', {
    autoAlpha: 0,
    y: 14,
    stagger: 0.06,
    duration: 0.55,
  }, '-=0.45')
  .from('.activity-rail p', {
    autoAlpha: 0,
    x: 18,
    stagger: 0.08,
    duration: 0.45,
  }, '-=0.2')

gsap.to('.site-header', {
  minHeight: 62,
  boxShadow: '0 10px 34px rgba(23, 20, 17, 0.08)',
  scrollTrigger: {
    trigger: '.hero',
    start: '120 top',
    end: '320 top',
    scrub: true,
  },
})

gsap.to('.hero-product', {
  yPercent: -8,
  rotateX: 3,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
})

gsap.to('.hero-copy', {
  yPercent: 5,
  autoAlpha: 0.62,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: '35% top',
    end: 'bottom top',
    scrub: true,
  },
})

gsap.to('.progress-track span', {
  width: '72%',
  duration: 1.35,
  ease: 'power3.out',
  delay: 0.7,
})

const counter = document.querySelector<HTMLElement>('[data-count]')
if (counter) {
  gsap.to({ value: 0 }, {
    value: Number(counter.dataset.count),
    duration: 1.25,
    delay: 0.75,
    ease: 'power2.out',
    onUpdate() {
      counter.textContent = `${Math.round(this.targets()[0].value)}%`
    },
  })
}

gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
  gsap.from(element, {
    autoAlpha: 0,
    y: 28,
    duration: 0.75,
    ease: 'power3.out',
    immediateRender: false,
    scrollTrigger: {
      trigger: element,
      start: 'top 84%',
      once: true,
    },
  })
})

gsap.from('.signal-strip article', {
  autoAlpha: 0,
  y: 22,
  stagger: 0.1,
  duration: 0.65,
  ease: 'power3.out',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.signal-strip',
    start: 'top 82%',
    once: true,
  },
})

gsap.from('.board-column', {
  autoAlpha: 0,
  y: 38,
  stagger: 0.12,
  duration: 0.75,
  ease: 'power3.out',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.board',
    start: 'top 78%',
    once: true,
  },
})

gsap.to('.timeline-line span', {
  scaleY: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 75%',
    end: 'bottom 60%',
    scrub: true,
  },
})

gsap.from('.timeline article', {
  autoAlpha: 0,
  x: 28,
  stagger: 0.18,
  duration: 0.7,
  ease: 'power3.out',
  immediateRender: false,
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 72%',
    once: true,
  },
})

document.querySelectorAll<HTMLElement>('.task-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  })
})

const konami = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']
let konamiIndex = 0
let focusModeEnabled = false
let lockHideTimeout: number | undefined

function playLockAnimation(unlocked: boolean) {
  const overlay = document.querySelector<HTMLElement>('.lock-overlay')
  const message = document.querySelector<HTMLElement>('.lock-message')
  const shackle = document.querySelector<HTMLElement>('.lock-shackle')

  if (!overlay || !message || !shackle) return

  message.textContent = unlocked ? 'Focus mode unlocked' : 'Focus mode locked'
  overlay.setAttribute('aria-hidden', 'false')
  if (lockHideTimeout) {
    window.clearTimeout(lockHideTimeout)
  }
  gsap.killTweensOf(['.lock-overlay', '.lock-stage', '.lock-3d', '.lock-shackle', '.lock-shine'])

  const timeline = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      lockHideTimeout = window.setTimeout(() => {
        gsap.to('.lock-overlay', {
          autoAlpha: 0,
          duration: 0.35,
          onComplete: () => overlay.setAttribute('aria-hidden', 'true'),
        })
      }, 900)
    },
  })

  timeline
    .set(shackle, { x: 0, y: 0, rotate: 0, transformOrigin: '18px 54px' })
    .fromTo('.lock-overlay', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 })
    .fromTo('.lock-stage', { y: 44, scale: 0.72, rotateX: 24 }, { y: 0, scale: 1, rotateX: 0, duration: 0.62, ease: 'back.out(1.8)' }, '<')
    .fromTo('.lock-3d', { rotateY: -42, rotateX: 20, z: -80 }, { rotateY: 0, rotateX: 0, z: 0, duration: 0.76, ease: 'power3.out' }, '<')
    .fromTo('.lock-message, .lock-kicker', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.32 }, '-=0.22')

  if (unlocked) {
    timeline
      .to(shackle, { y: -24, duration: 0.24, ease: 'power2.out' }, '-=0.18')
      .to(shackle, { x: 38, rotate: 42, duration: 0.42, ease: 'back.out(1.7)' })
      .to('.lock-3d', { rotateY: 10, duration: 0.22, yoyo: true, repeat: 1, ease: 'power2.inOut' }, '-=0.22')
  } else {
    timeline
      .set(shackle, { x: 38, y: -24, rotate: 42 })
      .to(shackle, { x: 0, rotate: 0, duration: 0.34, ease: 'power3.inOut' }, '-=0.1')
      .to(shackle, { y: 0, duration: 0.22, ease: 'bounce.out' })
      .to('.lock-body', { y: 5, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.inOut' }, '-=0.16')
  }

  timeline
    .fromTo('.lock-shine', { xPercent: -120, autoAlpha: 0 }, { xPercent: 145, autoAlpha: 1, duration: 0.55 }, '-=0.35')
}

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase()
  if (key === konami[konamiIndex]) {
    konamiIndex += 1
    if (konamiIndex === konami.length) {
      focusModeEnabled = !focusModeEnabled
      document.body.classList.toggle('focus-mode', focusModeEnabled)
      playLockAnimation(focusModeEnabled)
      gsap.fromTo('.hero-product', { boxShadow: '0 0 0 rgba(15, 118, 110, 0)' }, { boxShadow: focusModeEnabled ? '0 0 0 5px rgba(15, 118, 110, 0.18), 0 34px 100px rgba(39, 31, 22, 0.22)' : '0 24px 70px rgba(39, 31, 22, 0.16)', duration: 0.55, ease: 'power3.out' })
      konamiIndex = 0
    }
  } else {
    konamiIndex = key === konami[0] ? 1 : 0
  }
})
