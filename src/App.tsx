import { useEffect, useState } from "react"
import { JourneyFlow } from "./scenes"

const PHONE = "+919600695352"
const REGISTER = "https://bit.ly/Narpaal2_CustomerRegistration"
const CUSTOMER_LOGIN = "https://narpaal.data2morrow.com/Customers/Login/"
const FORGOT = "https://narpaal.data2morrow.com/Customers/Login/OTP/Otp.php"
const YOUTUBE = "https://www.youtube.com/channel/UCKLJtGOi86vxn9G41resUdQ"
const WA = `https://wa.me/919600695352?text=${encodeURIComponent("Hello Narpaal, I would like to order A2 Hallikar milk.")}`

/** Flip to true when Services, Products, and Client feedbacks are ready to show. */
const showDrafts = false

const steps = [
  {
    n: "01",
    label: "Grazed",
    title: "Grazed",
    text: "Hallikar cows graze the hills around Denkanikottai. Narpaal does not keep a farm. They stay with the farmers who raised them.",
  },
  {
    n: "02",
    label: "Milked",
    title: "Milked",
    text: "A desi cow gives little milk, and that is the milk we want. It is drawn at the farmer’s own house. Nobody is asked to haul it into town.",
  },
  {
    n: "03",
    label: "Collected",
    title: "Collected",
    text: "Our staff reach every house. Farmers are paid about twice the usual price, and they keep the fuel they would have spent on the road.",
  },
  {
    n: "04",
    label: "Delivered",
    title: "Delivered",
    text: "The can is tested, then only chilled — never pasteurised. It leaves for homes in Hosur and Bengaluru the same morning. It is good for one day.",
  },
]

const pours = [
  {
    id: "coffee",
    title: "Filter coffee",
    note: "Silky in the tumbler",
    detail: "The decoction stays the hero. This milk only has to be fresh, and a little sweet on its own.",
    image: "/morning-coffee.jpg",
    alt: "Milk poured into a steel tumbler of filter coffee",
  },
  {
    id: "glass",
    title: "A child’s glass",
    note: "Nothing added",
    detail: "Raw A2 milk from one native breed. Chilled overnight, drunk the day it arrives.",
    image: "/morning-glass.jpg",
    alt: "A child holding a glass of milk",
  },
  {
    id: "curd",
    title: "Evening curd",
    note: "What the day leaves",
    detail: "Set aside what you do not finish. By night it becomes tomorrow’s curd, still only milk.",
    image: "/morning-curd.jpg",
    alt: "Set curd lifted from a clay pot",
  },
  {
    id: "tea",
    title: "Morning tea",
    note: "A small, honest pour",
    detail: "The same cow, the same village, in the first glass of the day.",
    image: "/morning-tea.jpg",
    alt: "A glass of milky morning tea",
  },
]

const points = [
  {
    title: "Hallikar only",
    text: "Native cows from the farms around Hosur. No other breed goes into the can.",
  },
  {
    title: "Raw, for one day",
    text: "Chilled at night so the enzymes stay. Not pasteurised. Finished by the next evening.",
  },
  {
    title: "Checked before it leaves",
    text: "The cow’s blood is sampled. Every can is tested at the chilling centre.",
  },
]

function Bottle() {
  return (
    <div className="bottle" aria-hidden="true">
      <img className="bottle-photo" src="/bottle.png?v=7" alt="" />
      <div className="label">
        <p className="pack-name">Narpaal</p>
        <p className="pack-line">Natural milk from native cows</p>
        <p className="pack-a2">A2 Milk</p>
        <div className="pack-blue">
          <img src="/logo.jpg" alt="" />
          <p>நாட்டுப் பசும்பால்</p>
        </div>
      </div>
    </div>
  )
}

function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [onLogin, setOnLogin] = useState(() => window.location.hash === "#login")

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    const onHash = () => setOnLogin(window.location.hash === "#login")
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("hashchange", onHash)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("hashchange", onHash)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={solid || open || onLogin ? "solid" : ""}>
      <a className="brand" href="#top" onClick={close}>
        <img src="/logo.jpg" alt="நற்பால்" />
      </a>
      <nav className={open ? "open" : ""}>
        <a href="#top" onClick={close}>
          Home
        </a>
        <a href="#story" onClick={close}>
          Our story
        </a>
        <a href="#journey" onClick={close}>
          The journey
        </a>
        <a href="#goodness" onClick={close}>
          Goodness
        </a>
      </nav>
      <div className="head-actions">
        <a className="btn small ghost" href="#login" onClick={close}>
          Login
        </a>
        <a className="btn small" href="#order" onClick={close}>
          Order
        </a>
      </div>
      <button
        className="burger"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="clouds" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow tamil">நாட்டுப் பசும்பால்</p>
          <h1>
            Naturally
            <br />
            <em>good.</em>
          </h1>
          <p className="lead">
            Raw A2 milk from Hallikar cows. We collect it at the farmer’s house
            and bring it to yours — chilled, never pasteurised, good for one day.
          </p>
          <div className="actions">
            <a className="btn" href="#order">
              Order milk <span aria-hidden="true">→</span>
            </a>
            <a className="btn ghost" href="#journey">
              See the journey
            </a>
          </div>
        </div>
        <div className="stage">
          <img
            src="/hallikar.jpg"
            alt="A white Hallikar cow wearing a rope halter and a brass bell"
          />
          <Bottle />
          <p className="stamp">A2 · one day</p>
        </div>
      </div>
    </section>
  )
}

function Goodness() {
  return (
    <section className="goodness" id="goodness">
      <div className="wrap good-grid">
        <div className="reveal">
          <p className="eyebrow">The milk</p>
          <h2>
            Naturally
            <br />
            <em>good.</em>
          </h2>
          <p>
            A short road, from a named cow. Village milk for a town morning,
            with nothing done to it except the cold.
          </p>
          <a className="text-link" href="#story">
            How Narpaal began <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="good-bottle">
          <span className="badge">Pure A2</span>
          <Bottle />
        </div>
        <ul className="points">
          {points.map((point) => (
            <li key={point.title}>
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Journey() {
  const [step, setStep] = useState(0)
  const [manualPause, setManualPause] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    if (manualPause || hovering || reduced) return
    const id = window.setTimeout(() => setStep((s) => (s + 1) % steps.length), 4800)
    return () => window.clearTimeout(id)
  }, [step, manualPause, hovering, reduced])

  const current = steps[step]

  return (
    <section className="journey" id="journey">
      <div className="wrap">
        <div
          className="journey-card"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="journey-copy">
            <p className="eyebrow light">The journey</p>
            <h2>
              From graze
              <br />
              to glass.
            </h2>
            <div className="step-fade" key={current.n}>
              <p className="step-no">{current.n}</p>
              <h3>{current.title}</h3>
              <p className="step-text" aria-live="polite">
                {current.text}
              </p>
            </div>
            <div className={`track ${manualPause || hovering || reduced ? "hold" : ""}`} key={step}>
              <i />
            </div>
            <div className="step-row" role="tablist" aria-label="Journey steps">
              {steps.map((item, index) => (
                <button
                  key={item.n}
                  role="tab"
                  aria-selected={index === step}
                  onClick={() => setStep(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="pause" onClick={() => setManualPause((v) => !v)}>
              {manualPause ? "Play" : "Pause"}
            </button>
          </div>
          <div className={`journey-art${manualPause || reduced ? " is-paused" : ""}`}>
            <JourneyFlow step={step} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Mornings() {
  const [active, setActive] = useState(pours[0].id)
  const current = pours.find((item) => item.id === active) ?? pours[0]

  return (
    <section className="mornings" id="mornings">
      <div className="wrap">
        <p className="eyebrow">How it is drunk</p>
        <h2>
          Made for every <em>morning.</em>
        </h2>
        <div className="morning-grid">
          <div className="pour-list">
            {pours.map((item, index) => {
              const open = item.id === active
              return (
                <button
                  key={item.id}
                  className={open ? "open" : ""}
                  aria-expanded={open}
                  onClick={() => setActive(item.id)}
                >
                  <span className="idx">0{index + 1}</span>
                  <span>
                    <strong>{item.title}</strong>
                    <em>{open ? item.detail : item.note}</em>
                  </span>
                </button>
              )
            })}
          </div>
          <div className="pour-stage" key={current.id}>
            <img src={current.image} alt={current.alt} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap story-grid">
        <figure>
          <img
            src="/hallikar.jpg"
            alt="Hallikar cow, the native breed Narpaal collects from"
          />
          <figcaption>Hallikar. The only cow in this milk.</figcaption>
        </figure>
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Pure beginnings. A short road.</h2>
          <p>
            Narpaal began on 1 May 2017 with Team Amirdham, in and around
            Denkanikottai and Hosur. The idea was small: the purest milk we
            could carry, from Hallikar cows only.
          </p>
          <p>
            Desi cows are not a shortcut. Their farmers already know the work,
            so we did not build a farm of our own. Trained staff visit the
            houses, pay fairly, and bring the cans in.
          </p>
          <blockquote>
            <p>Keep it raw.</p>
            <p className="credit">
              The then District Collector, Mr. Kathiravan, asked that this milk
              not be pasteurised. The chilling unit was opened by the then
              minister, Mr. Balakrishna Reddy, with the Animal Husbandry
              department beside them.
            </p>
          </blockquote>
          <p className="quiet">
            Good health. Better living. Udyam TN-11-0010199.
          </p>
        </div>
      </div>
    </section>
  )
}

function Order() {
  return (
    <section className="order" id="order">
      <div className="wrap">
        <div className="order-card">
          <div>
            <p className="eyebrow light">Hosur · Bengaluru</p>
            <h2>The goodness, at your door.</h2>
            <p>
              Register for a daily can, or call if you already know the road to
              our milk. One breed. One day. Nothing in between but the chill.
            </p>
            <div className="actions">
              <a className="btn light" href={REGISTER} target="_blank" rel="noreferrer">
                Register for milk
              </a>
              <a className="btn ghost on-blue" href={WA} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
          <Bottle />
        </div>
        <div className="contact-row">
          <a href={`tel:${PHONE}`}>
            <span>Call</span>
            +91 96006 95352
          </a>
          <a href="mailto:amirdham.a2milk@gmail.com">
            <span>Email</span>
            amirdham.a2milk@gmail.com
          </a>
          <p>
            <span>Visit</span>
            Door 61, Street 33, KCC Nagar, Hosur, Tamil Nadu 635109
          </p>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: "Village milk, town morning",
    text: "The cow’s blood is sampled before the milk is taken. Staff collect at the farmer’s house. Farmers are paid about twice the usual price, and they save the fuel of the trip.",
  },
  {
    title: "One day only",
    text: "At the chilling centre every can is tested, including with a lactometer. The milk is good for one day.",
  },
  {
    title: "Collected at the house",
    text: "Narpaal keeps no farm. Trained staff collect from farmers who already raise desi cows. A desi cow gives little, so the round reaches many houses.",
  },
  {
    title: "Advice for suppliers",
    text: "Farmers who supply milk can ask for help meeting the quality checks.",
  },
  {
    title: "Packing",
    text: "As of April 2020 the packing machine was semi-automatic, with a fully automatic line still ahead.",
  },
  {
    title: "With the department",
    text: "The Animal Husbandry department guides the work, alongside the then District Collector.",
  },
]

const products = [
  { name: "A2 milk", line: "Team" },
  { name: "Desi egg", line: "Team" },
  { name: "Jaggery", line: "Amuthu" },
  { name: "Thandu keerai", line: "Mathruboomi" },
  { name: "Palak", line: "Swanand" },
  { name: "Brinjal", line: "Mathruboomi" },
  { name: "Drumsticks", line: "Mathruboomi" },
  { name: "Amla juice", line: "HealthNattraj" },
  { name: "Arugampul juice", line: "HealthNattraj" },
  { name: "Bitter gourd juice", line: "HealthNattraj" },
  { name: "Bottle gourd juice", line: "HealthNattraj" },
  { name: "Carrot and beetroot juice", line: "HealthNattraj" },
  { name: "Vazhaithandu juice", line: "HealthNattraj" },
]

const feedbacks = [
  {
    name: "Sudhakar",
    role: "Customer",
    text: "Milk is one of the important products in the daily life of the Indian consumers, the satisfaction of the customers is essential for the Dairy Sector development.",
  },
  {
    name: "Harish",
    role: "Client",
    text: "The authors determined how far the consumers are satisfied with the dairy products of a particular brand and the buying behavior over it.",
  },
  {
    name: "Geetha",
    role: "Client",
    text: "Milk is one of the important products in the daily life of the Indian consumers, the satisfaction of the customers is essential for the Dairy Sector development.",
  },
  {
    name: "Mallika",
    role: "Client",
    text: "Milk is one of the important products in the daily life of the Indian consumers, the satisfaction of the customers is essential for the Dairy Sector development.",
  },
]

function Drafts() {
  return (
    <div className="drafts">
      <section className="draft-block" id="services">
        <div className="wrap">
          <p className="eyebrow">From the first site</p>
          <h2>Our services</h2>
          <div className="service-grid">
            {services.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="draft-block" id="products">
        <div className="wrap">
          <p className="eyebrow">From the first site</p>
          <h2>Our products</h2>
          <div className="product-grid">
            {products.map((item) => (
              <article key={item.name}>
                <span>{item.line}</span>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="draft-block" id="feedback">
        <div className="wrap">
          <p className="eyebrow">From the first site</p>
          <h2>Client feedbacks</h2>
          <div className="feedback-grid">
            {feedbacks.map((item) => (
              <blockquote key={item.name}>
                <p>{item.text}</p>
                <p className="credit">
                  {item.name}, {item.role}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div>
          <img src="/logo.jpg" alt="" />
          <p>நாட்டுப் பசும்பால். Raw A2 milk from Hallikar cows, since 2017.</p>
        </div>
        <div>
          <p className="foot-label">Explore</p>
          <a href="#story">Our story</a>
          <a href="#journey">The journey</a>
          <a href="#goodness">Goodness</a>
          <a href="#mornings">Mornings</a>
        </div>
        <div>
          <p className="foot-label">Order</p>
          <a href={REGISTER} target="_blank" rel="noreferrer">
            Register
          </a>
          <a href="#login">Login</a>
          <a href={YOUTUBE} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://narpaal.data2morrow.com/" target="_blank" rel="noreferrer">
            Current portal
          </a>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} Narpaal · Team Amirdham</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="login-page">
      <form className="login-card" action={CUSTOMER_LOGIN} method="post">
        <img src="/logo.jpg" alt="" />
        <p className="eyebrow tamil">நாட்டுப் பசும்பால்</p>
        <h1>Login</h1>
        <p>Sign in with your user name.</p>
        <label>
          User name
          <input name="username" autoComplete="username" required />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        <button className="btn" type="submit" name="login" value="Sign in">
          Sign in
        </button>
        <p className="login-links">
          <a href={FORGOT}>Forgot user name or password?</a>
          <a href={REGISTER} target="_blank" rel="noreferrer">
            New here? Register
          </a>
        </p>
      </form>
    </main>
  )
}

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const login = hash === "#login"

  return (
    <>
      <Nav />
      {login ? (
        <LoginPage />
      ) : (
        <main>
          <Hero />
          <Goodness />
          <Journey />
          <Mornings />
          <Story />
          {showDrafts ? <Drafts /> : null}
          <Order />
        </main>
      )}
      <Footer />
    </>
  )
}
