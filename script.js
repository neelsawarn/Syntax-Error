const $ = i => document.getElementById(i),
  $$ = s => document.querySelectorAll(s);

const f$ = n => (n < 0 ? "-$" : "$") + Math.abs(Math.round(n)).toLocaleString("en-US");
const R = (a, b) => a + Math.random() * (b - a);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const cl = (v, a, b) => Math.max(a, Math.min(b, v));

const MO = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
const K = ["sp", "tech", "bonds", "crypto"];
const TF = { "1D": 1, "1W": 3, "1M": 8, "1Y": 24 };

const AS = {
  sp: { n: "S&P 500", p: 4800, v: .0009 },
  tech: { n: "TECH", p: 312, v: .0028 },
  bonds: { n: "BONDS", p: 101, v: .0003 },
  crypto: { n: "CRYPTO", p: 2450, v: .008 }
};

const NET = [100, 120, 150, 180, 250, 300, 350, 350, 400, 450, 500, 500, 0, 550, 600];
const SAL = [1500, 1800, 2100, 2400, 3200, 3500, 3800, 3800, 4100, 4300, 4500, 4700, 0, 4800, 5200];

const EV = [
  ["💸 Surprise bonus", "Your manager rewarded a great quarter: +$500.", 500, 0, 6, 0],
  ["🦷 Medical bill", "An unexpected clinic visit: -$700.", -700, -4, -4, 0],
  ["🎉 Friend’s party", "A great night out: -$150, +happiness.", -150, 0, 10, -5],
  ["💻 Laptop died", "Emergency replacement: -$900.", -900, 0, -6, 0],
  ["🧧 Side gig", "A freelance job paid +$600 but wore you out.", 600, 0, 0, -12],
  ["🔥 Burnout week", "Long hours caught up with you.", 0, -5, -8, -25]
];

const D = {
  24: {
    t: "Age 24 · Vehicle decision",
    x: "Your commuter vehicle broke down and you need to get to work.",
    o: [
      {
        n: "Buy a used car in cash",
        c: "-$4,000",
        ok: () => S.cash >= 4000,
        f() { S.cash -= 4000; },
        m: "You paid cash: no payments, but your cushion shrank."
      },
      {
        n: "Finance a car",
        c: "+$450/mo",
        f() { S.extra += 450; },
        m: "Loan payments will quietly eat your monthly savings for years."
      },
      {
        n: "Take the bus (monthly pass)",
        c: "+$80/mo",
        f() { S.extra += 80; },
        m: "You skipped the car and kept your capital working."
      }
    ]
  },

  28: {
    t: "Age 28 · Marriage",
    x: "You’re getting married! Risky assets have taken a dip. How do you spend?",
    o: [
      {
        n: "Lavish wedding",
        c: "-$6,000",
        ok: () => S.cash >= 6000,
        f() { S.cash -= 6000; S.hap += 20; },
        m: "A dream wedding, and a drained account."
      },
      {
        n: "Modest wedding",
        c: "-$2,000",
        ok: () => S.cash >= 2000,
        f() { S.cash -= 2000; S.hap += 12; },
        m: "Happy, with your cushion mostly intact."
      },
      {
        n: "Skip it, invest $3,000 in the dip",
        c: "-$3,000 to S&P 500",
        ok: () => S.cash >= 3000,
        f() {
          S.cash -= 3000;
          S.h.sp += 3000;
          S.c.sp += 3000;
          S.hap -= 5;
        },
        m: "You bought the dip instead of a ceremony."
      }
    ]
  },

  30: {
    t: "Age 30 · Recession layoff",
    x: "The crash wiped out value and your company laid you off: $0 income and a ~$2,200/mo deficit. How do you survive?",
    o: [
      {
        n: "Live off checking cash",
        c: "-$5,000",
        ok: () => S.cash >= 5000,
        f() { S.cash -= 5000; },
        m: "Your cash cushion absorbed the rent. No assets sold at the bottom."
      },
      {
        n: "Liquidate everything at the bottom",
        c: "sells all holdings",
        f() {
          K.forEach(k => {
            S.cash += S.h[k];
            S.h[k] = 0;
            S.c[k] = 0;
          });
          S.cash -= 5000;
        },
        m: "You locked in crash-bottom prices. The recovery will pass you by."
      },
      {
        n: "Break bonds early (15% penalty)",
        c: "needs $1,000 in bonds",
        ok: () => S.h.bonds >= 1000,
        f() {
          S.cash += S.h.bonds * .85 - 5000;
          S.h.bonds = 0;
          S.c.bonds = 0;
        },
        m: "You paid a 15% penalty to free up cash."
      }
    ]
  },

  32: {
    t: "Age 32 · Final strategy",
    x: "The dust has settled. Choose your long-term strategy.",
    o: [
      {
        n: "Dividend income engine",
        c: "S&P 500 +6%",
        f() { S.h.sp *= 1.06; },
        m: "Steady dividends keep compounding."
      },
      {
        n: "All-in aggressive growth",
        c: "tech & crypto ±",
        f() {
          const r = R(.75, 1.5);
          S.h.tech *= r;
          S.h.crypto *= r;
        },
        m: "High risk, high drama."
      },
      {
        n: "Balanced buffer",
        c: "bonds & S&P +3%",
        f() {
          S.h.bonds *= 1.03;
          S.h.sp *= 1.03;
        },
        m: "A calm, defensive finish."
      }
    ]
  }
};

const init = () => ({
  age: 18,
  m: 0,
  cash: 1000,
  h: { sp: 0, tech: 0, bonds: 0, crypto: 0 },
  c: { sp: 0, tech: 0, bonds: 0, crypto: 0 },
  extra: 0,
  hp: 80,
  en: 80,
  hap: 75,
  slots: 3,
  log: [],
  msgs: [],
  unread: 0,
  busy: 0,
  need: 0,
  done: {},
  tab: "sp",
  tf: "1D",
  p: ""
});

function mkClimate() {
  const o = {};

  for (let a = 18; a <= 31; a++) {
    const s = R(-.08, .16);
    const t = R(-.25, .35);
    const b = R(.03, .06);
    const x = R(-.55, .65);

    let m = {
      sp: 1 + s,
      tech: 1 + t,
      bonds: 1 + b,
      crypto: 1 + x
    };

    let tag = s > .1 && x > .25
      ? "🚀 Risk-On Surge"
      : s < 0
        ? "📉 Bear Market Pullback"
        : "🟢 Bull Market";

    if (a == 29) {
      m = { sp: .6, tech: .35, bonds: 1.02, crypto: .2 };
      tag = "💥 Great Recession Crash";
    }

    if (a == 30) {
      m = { sp: 1.25, tech: 1.8, bonds: 1.04, crypto: 2.2 };
      tag = "🚀 Recovery Surge";
    }

    o[a] = { m, tag };
  }

  return o;
}

let S = init(), CL = mkClimate();
const P = {}, HI = {};

function step(k, ret) {
  const o = P[k];
  P[k] = o * (1 + ret);
  S.h[k] *= 1 + ret;

  const c = P[k];
  const w = Math.abs(ret) * R(0, .8) * o;

  HI[k].push({
    o,
    c,
    h: Math.max(o, c) + w,
    l: Math.min(o, c) - w,
    t: MO[S.m] + " " + S.age
  });

  if (HI[k].length > 900) HI[k].shift();
}

K.forEach(k => {
  P[k] = AS[k].p * R(.86, .9);
  HI[k] = [];
});

S.age = 17;

for (let i = 0; i < 220; i++) {
  S.m = (i / 18 | 0) % 12;
  K.forEach(k => step(k, R(-1, 1) * AS[k].v * 2 + AS[k].v * .12));
}

S.age = 18;
S.m = 0;

function agg(k, n) {
  const h = HI[k].slice(-n * 48), o = [];

  for (let i = 0; i < h.length; i += n) {
    const g = h.slice(i, i + n);

    o.push({
      o: g[0].o,
      c: g[g.length - 1].c,
      h: Math.max(...g.map(x => x.h)),
      l: Math.min(...g.map(x => x.l)),
      t: g[0].t
    });
  }

  return o;
}

function head() {
  const c = agg(S.tab, TF[S.tf]);
  const o = c[0].o;
  const p = P[S.tab];
  const d = p - o;
  const e = $("chg");

  if (!e) return;

  $("px").textContent = p.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  e.textContent = `${d >= 0 ? "▲ +" : "▼ "}${d.toFixed(2)} (${(d / o * 100).toFixed(2)}%)`;
  e.style.color = d >= 0 ? "#10b981" : "#ef4444";
}

function draw() {
  const cv = $("ch");
  if (!cv || !cv.clientWidth) return;

  const d = devicePixelRatio || 1;
  const W = cv.clientWidth, Ht = cv.clientHeight;

  cv.width = W * d;
  cv.height = Ht * d;

  const x = cv.getContext("2d");
  x.scale(d, d);

  const c = agg(S.tab, TF[S.tf]);
  const hi = Math.max(...c.map(a => a.h));
  const lo = Math.min(...c.map(a => a.l));
  const pad = (hi - lo) * .08;
  const top = hi + pad, bot = lo - pad;
  const pw = 56, ph = 20;
  const cw = (W - pw) / c.length;
  const Y = v => (top - v) / (top - bot) * (Ht - ph);

  x.font = "11px system-ui";
  x.strokeStyle = "#ffffff14";
  x.fillStyle = "#94a3b8";

  for (let i = 0; i <= 4; i++) {
    const v = bot + (top - bot) * i / 4, y = Y(v);

    x.beginPath();
    x.moveTo(0, y);
    x.lineTo(W - pw, y);
    x.stroke();

    x.fillText(
      v.toFixed(v > 999 ? 0 : 2).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      W - pw + 6,
      y + 4
    );
  }

  c.forEach((a, i) => {
    const col = a.c >= a.o ? "#10b981" : "#ef4444";
    const cx = i * cw + cw / 2;

    x.strokeStyle = x.fillStyle = col;
    x.beginPath();
    x.moveTo(cx, Y(a.h));
    x.lineTo(cx, Y(a.l));
    x.stroke();

    x.fillRect(
      cx - cw * .32,
      Y(Math.max(a.o, a.c)),
      cw * .64,
      Math.max(1.5, Math.abs(Y(a.o) - Y(a.c)))
    );
  });

  x.fillStyle = "#94a3b8";

  for (let i = 0; i < 6; i++) {
    const j = Math.floor(i * (c.length - 1) / 5);
    x.fillText(c[j].t, Math.min(j * cw, W - pw - 48), Ht - 5);
  }
}

let tt;

function toast(m) {
  const e = $("toast");
  e.textContent = m;
  e.classList.add("on");
  clearTimeout(tt);
  tt = setTimeout(() => e.classList.remove("on"), 3800);
}

function msg(t, x) {
  S.msgs.unshift([t, x, S.age]);
  S.unread++;
  hud();
}

function journal(t, x) {
  S.log.unshift([t, x]);
}

const inv = () => K.reduce((a, k) => a + S.h[k], 0);
const worth = () => S.cash + inv();

function hud() {
  $("hCash").textContent = f$(S.cash);
  $("hCash").style.color = S.cash < 0 ? "#ef4444" : "";
  $("hInv").textContent = f$(inv());

  $("hJob").textContent =
    S.age == 30 ? "Jobless (laid off)"
      : S.age < 22 ? "Junior Dev"
        : S.age < 26 ? "Software Engineer"
          : "Senior Engineer";

  $("hAge").textContent = "Age " + S.age;
  $("hYr").textContent = "Year " + (S.age - 17);

  $("vH").style.width = S.hp + "%";
  $("vE").style.width = S.en + "%";
  $("vP").style.width = S.hap + "%";

  const b = $("badge");
  b.textContent = S.unread;
  b.style.display = S.unread ? "block" : "none";

  const g = $("go");
  g.style.display = S.age > 31 ? "none" : "block";
  g.disabled = !!(S.busy || S.need);
  g.textContent = `▶ Live age ${S.age} → ${S.age + 1}  ·  ${S.slots} action${S.slots == 1 ? "" : "s"} left`;
}

function vit() {
  S.hp = cl(S.hp, 0, 100);
  S.en = cl(S.en, 0, 100);
  S.hap = cl(S.hap, 0, 100);
}

function act(a) {
  if (S.busy || S.need) return;
  if (S.slots < 1) return toast("No actions left this year. Live the year ▶");

  if (a == "work") {
    if (S.en < 15) return toast("Too tired. Rest first.");

    const g = Math.round((SAL[S.age - 18] || 1200) * .3);
    S.cash += g;
    S.en -= 20;
    S.hap -= 4;
    S.hp -= 2;
    toast(`💼 Overtime shift: +${f$(g)}`);
  }

  if (a == "rest") {
    S.en += 30;
    S.hp += 8;
    S.hap += 3;
    toast("😴 Rested: more energy and health");
  }

  if (a == "travel") {
    if (S.cash < 600) return toast("A trip costs $600.");

    S.cash -= 600;
    S.hap += 18;
    S.en -= 10;
    S.hp += 3;
    toast("✈️ Trip: -$600, big happiness boost");
  }

  S.slots--;
  vit();
  hud();
}

const TT = {
  market: "📊 Stock Market",
  portfolio: "👛 Portfolio",
  journal: "📖 Journal",
  messages: "💬 Messages",
  settings: "⚙️ Settings"
};

function panel(p) {
  S.p = p || "";

  const el = $("pnl");
  $$("[data-p]").forEach(b =>
    b.classList.toggle("act", !!p && b.dataset.p == p)
  );

  if (!p) {
    el.classList.remove("on");
    return;
  }

  el.classList.add("on");

  let h = `<div class="ph"><b>${TT[p]}</b><button class="ib" data-x="1">✕</button></div>`;

  if (p == "market") {
    h += `
      <div class="tabs">
        ${K.map(k => `<button data-t="${k}" class="${k == S.tab ? "act" : ""}">${AS[k].n}</button>`).join("")}
        <span class="sp"></span>
        ${Object.keys(TF).map(t => `<button data-tf="${t}" class="${t == S.tf ? "act" : ""}">${t}</button>`).join("")}
      </div>
      <div class="pr"><b id="px"></b><span id="chg"></span></div>
      <canvas id="ch"></canvas>
      <div class="al">
        ${K.map((k, i) => `<label>${AS[k].n}<small>holding ${f$(S.h[k])}</small><input type="number" min="0" step="50" value="0" id="a${i}"></label>`).join("")}
      </div>
      <div class="bud"><span>Cash ${f$(S.cash)}</span><span>Left to allocate: <b id="rem"></b></span></div>
      <div class="pre">
        <button data-pre="4">Equal 4-way</button>
        <button data-pre="2">50/50</button>
        <button data-pre="m">Max cash</button>
        <button data-pre="0">Clear</button>
      </div>
      <button class="cta" id="buy">Invest</button>`;
  }

  if (p == "portfolio") {
    h += K.map(k => {
      const v = S.h[k], c = S.c[k], g = v - c;

      return `<div class="row">
        <b>${AS[k].n} · ${f$(v)}</b>
        <small>cost ${f$(c)}</small>
        <em class="${g >= 0 ? "up" : "dn"}">${g >= 0 ? "+" : ""}${f$(g)} (${c ? (g / c * 100).toFixed(1) : "0.0"}%)</em>
        <button data-sell="${k}" ${v < 1 ? "disabled" : ""}>Sell all</button>
      </div>`;
    }).join("") + `
      <div class="c2"><h5>Net worth</h5><p>${f$(worth())} = ${f$(S.cash)} cash + ${f$(inv())} invested</p></div>`;
  }

  if (p == "journal") {
    h += S.log.length
      ? S.log.map(l => `<div class="c2"><h5>${l[0]}</h5><p>${l[1]}</p></div>`).join("")
      : `<div class="c2"><p>Your choices and their ripple effects will be logged here.</p></div>`;
  }

  if (p == "messages") {
    S.unread = 0;
    hud();

    h += S.msgs.length
      ? S.msgs.map(l => `<div class="c2"><h5>${l[0]} · age ${l[2]}</h5><p>${l[1]}</p></div>`).join("")
      : `<div class="c2"><p>No messages yet.</p></div>`;
  }

  if (p == "settings") {
    h += `
      <div class="c2"><h5>Controls</h5><p>W A S D walk · drag to look around · E interact at the desk (market) or bed (rest)</p></div>
      <button class="cta" id="rs">Restart game</button>`;
  }

  el.innerHTML = h;

  if (p == "market") {
    head();
    draw();
    rem();
  }
}

$("pnl").onclick = e => {
  const b = e.target.closest("button"), d = b ? b.dataset : {};
  if (!b) return;

  if (d.x) panel();
  else if (d.t || d.tf) {
    if (d.t) S.tab = d.t;
    if (d.tf) S.tf = d.tf;

    $$("#pnl [data-t]").forEach(x =>
      x.classList.toggle("act", x.dataset.t == S.tab)
    );

    $$("#pnl [data-tf]").forEach(x =>
      x.classList.toggle("act", x.dataset.tf == S.tf)
    );

    head();
    draw();
  }
  else if (d.pre != null) preset(d.pre);
  else if (b.id == "buy") buy();
  else if (b.id == "rs") location.reload();
  else if (d.sell) {
    const k = d.sell;

    toast(`Sold ${AS[k].n} for ${f$(S.h[k])}`);
    S.cash += S.h[k];
    S.h[k] = 0;
    S.c[k] = 0;

    hud();
    panel("portfolio");
  }
};

$("pnl").oninput = rem;

function rem() {
  const t = K.reduce((a, k, i) => a + Math.max(0, +($("a" + i) || {}).value || 0), 0);
  const r = S.cash - t, e = $("rem");

  if (e) {
    e.textContent = f$(r);
    e.style.color = r < 0 ? "#ef4444" : "#10b981";
  }
}

function preset(p) {
  const c = Math.max(0, Math.floor(S.cash));

  const v = p == "4" ? [c / 4, c / 4, c / 4, c / 4]
    : p == "2" ? [c / 2, c / 2, 0, 0]
      : p == "m" ? [c, 0, 0, 0]
        : [0, 0, 0, 0];

  v.forEach((n, i) => $("a" + i).value = Math.floor(n));
  rem();
}

function buy() {
  const v = K.map((k, i) => Math.max(0, +$("a" + i).value || 0));
  const t = v.reduce((a, b) => a + b, 0);

  if (!t) return toast("Enter an amount to invest");
  if (t > S.cash) return toast("Not enough cash");

  S.cash -= t;

  K.forEach((k, i) => {
    S.h[k] += v[i];
    S.c[k] += v[i];
  });

  toast(`Invested ${f$(t)} across ${v.filter(x => x).length} asset(s)`);
  panel("market");
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-p]");

  if (b && b.closest("#side,#dock")) {
    panel(S.p == b.dataset.p ? "" : b.dataset.p);
  }

  const a = e.target.closest("[data-a]");
  if (a) act(a.dataset.a);
});

$("gear").onclick = () => panel("settings");
$("go").onclick = () => live();

function dlg(h) {
  $("dc").innerHTML = h;
  $("dlg").classList.add("on");
}

function decide() {
  const d = D[S.age];
  if (!d || S.done[S.age]) return;

  S.need = 1;
  hud();

  let sel = -1;

  const r = () => dlg(`
    <small>MAJOR DECISION</small>
    <h2>${d.t}</h2>
    <p>${d.x}</p>
    ${d.o.map((o, i) => {
      const bad = o.ok && !o.ok();

      return `<button class="opt ${i == sel ? "sel" : ""}" data-i="${i}" ${bad ? "disabled" : ""}>
        <b>${o.n}</b><em>${bad ? "Not enough cash" : o.c}</em>
      </button>`;
    }).join("")}
    <button class="cta" id="cf" ${sel < 0 ? "disabled" : ""}>Confirm choice</button>
  `);

  r();

  $("dc").onclick = e => {
    const b = e.target.closest("button");
    if (!b) return;

    if (b.dataset.i != null) {
      sel = +b.dataset.i;
      r();
    }
    else if (b.id == "cf") {
      const o = d.o[sel];

      o.f();
      S.done[S.age] = 1;
      S.need = 0;
      vit();
      $("dlg").classList.remove("on");

      journal("Age " + S.age + " · " + d.t.split("· ")[1], o.m);
      msg("📓 Journal", o.m);

      if (S.age == 32) end();
      else {
        hud();
        toast(o.m);
      }
    }
  };
}

function end() {
  const v = inv(), nw = S.cash + v;

  const [t, d] = nw >= 60000
    ? ["🏆 Tier 1 · Financial independence", "You mastered diversification and liquidity. Holding cash let you ride out the Age 30 crash without panic-selling."]
    : nw >= 30000
      ? ["🥈 Tier 2 · Financially stable", "You stayed solvent from 18 to 32. Costs and downturns slowed your compounding."]
      : ["🥉 Tier 3 · Recovery mode", "Thin cash buffers and crash-bottom decisions hurt you. A hard lesson in liquidity risk."];

  dlg(`
    <small>FINANCIAL REPORT CARD · AGE 32</small>
    <h2>${t}</h2>
    <p>${d}</p>
    <div class="g3">
      <div><b>${f$(S.cash)}</b>Cash</div>
      <div><b>${f$(v)}</b>Investments</div>
      <div><b>${f$(nw)}</b>Net worth</div>
    </div>
    <p>❤️ ${S.hp | 0} · ⚡ ${S.en | 0} · 😊 ${S.hap | 0}</p>
    <button class="cta" id="rs2">Play again</button>
  `);

  $("dc").onclick = e => {
    if (e.target.id == "rs2") location.reload();
  };
}

function tip() {
  const c = CL[S.age];
  if (!c) return;

  const up = c.m.tech > 1;
  const say = Math.random() < .65 ? up : !up;

  msg("📰 Market analyst", `Desk chatter says tech looks ${say ? "bullish" : "shaky"} this year. (Analysts are not always right.)`);
}

function newAge() {
  hud();
  tip();

  if (D[S.age]) decide();
  else toast(`Age ${S.age}: invest, take actions, then live the year.`);
}

const win = [];

async function live() {
  if (S.busy || S.need) return;

  S.busy = 1;
  panel(S.p == "market" ? "market" : "");

  const a = S.age, c = CL[a], net = NET[a - 18] - S.extra, b = $("ban");

  b.classList.add("on");
  hud();

  for (let m = 0; m < 12; m++) {
    S.m = m;
    b.textContent = `${c.tag} · ${MO[m]} · age ${a}`;

    for (let i = 0; i < 6; i++) {
      K.forEach(k => step(k, Math.pow(c.m[k], 1 / 72) - 1 + R(-1, 1) * AS[k].v * 1.5));

      glow(m * 6 + i);
      hud();

      if (S.p == "market") {
        head();
        draw();
      }

      await sleep(55);
    }

    S.cash += a == 30 ? 0 : net;
    hud();

    if (m == 5 && Math.random() < .75) {
      const e = EV[Math.random() * EV.length | 0];

      S.cash += e[2];
      S.hp += e[3];
      S.hap += e[4];
      S.en += e[5];

      vit();
      msg(e[0], e[1]);
      toast(e[0] + " " + e[1]);
    }
  }

  journal(
    `Age ${a} → ${a + 1}`,
    `${c.tag}. Saved ${f$(net * 12)}${S.extra ? ` after ${f$(S.extra)}/mo car or transit costs` : ""}. Net worth now ${f$(worth())}.`
  );

  S.age++;
  S.m = 0;
  S.slots = 3;
  S.hp -= 2;
  S.hap -= 2;
  S.en += 25;

  if (S.hp < 25) {
    S.cash -= 700;
    S.hp += 15;
    msg("🏥 Hospital", "Low health caught up with you: -$700. Rest more.");
  }

  vit();
  b.classList.remove("on");
  S.busy = 0;
  newAge();
}

/* ---------- 3D ---------- */

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0d18);
scene.fog = new THREE.Fog(0x0a0d18, 16, 44);

const cam = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, .1, 100);
const rd = new THREE.WebGLRenderer({ antialias: true });

rd.setPixelRatio(Math.min(devicePixelRatio, 2));
rd.setSize(innerWidth, innerHeight);
$("gl").appendChild(rd.domElement);

scene.add(new THREE.HemisphereLight(0xffb98a, 0x1b2440, .6));

const L = (c, i, d, x, y, z) => {
  const l = new THREE.PointLight(c, i, d);
  l.position.set(x, y, z);
  scene.add(l);
  return l;
};

L(0xff9a60, .9, 20, 0, 3, -7);
L(0xffaa55, 1.1, 9, -9, 2, -6.4);
const lap = L(0x6aa8ff, .8, 6, 4, 1.6, -6.4);
L(0xffd2a0, .7, 24, 0, 3.7, 1);

const M = (c, o) => new THREE.MeshStandardMaterial(
  Object.assign({ color: c, roughness: .7 }, o)
);

const OB = [];

function box(w, h, d, x, y, z, c, s, o) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M(c, o));

  m.position.set(x, y + h / 2, z);
  scene.add(m);

  if (s) OB.push([
    x - w / 2 - .3,
    x + w / 2 + .3,
    z - d / 2 - .3,
    z + d / 2 + .3
  ]);

  return m;
}

function cyl(r, h, x, y, z, c, o) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 14), M(c, o));
  m.position.set(x, y + h / 2, z);
  scene.add(m);
  return m;
}

function tex(w, h, fn) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  fn(c.getContext("2d"));
  return new THREE.CanvasTexture(c);
}

const cityT = tex(1024, 256, x => {
  const g = x.createLinearGradient(0, 0, 0, 256);

  [[0, "#241c4a"], [.55, "#d9567a"], [.8, "#ff9a5a"], [1, "#ffd08a"]]
    .forEach(a => g.addColorStop(a[0], a[1]));

  x.fillStyle = g;
  x.fillRect(0, 0, 1024, 256);

  [["#2b2347", 150], ["#1a1630", 190], ["#0e0c1c", 210]]
    .forEach(([col, mh], Lr) => {
      for (let i = 0; i < 1024; i += 34 - Lr * 6) {
        const h = R(40, mh), w = 28 - Lr * 4;

        x.fillStyle = col;
        x.fillRect(i, 256 - h, w, h);

        if (Lr > 0) {
          for (let j = 0; j < h - 8; j += 9) {
            for (let k = 3; k < w - 3; k += 7) {
              if (Math.random() < .35) {
                x.fillStyle = Math.random() < .8 ? "#ffd27a" : "#9fd0ff";
                x.fillRect(i + k, 256 - h + j + 4, 3, 4);
              }
            }
          }
        }
      }
    });
});

const winM = new THREE.MeshBasicMaterial({ map: cityT });
const wn = new THREE.Mesh(new THREE.PlaneGeometry(20, 4.4), winM);

wn.position.set(0, 2.2, -8);
scene.add(wn);

const glow = i => winM.color.setScalar(.62 + .38 * Math.cos(i / 72 * Math.PI * 2));

[-5, 0, 5, -10, 10].forEach(x => box(.14, 4.4, .2, x, 0, -7.9, 0x10131c));

box(20, .12, .3, 0, 3.5, -7.9, 0x10131c);
box(20, .2, 16, 0, -.2, 0, 0x3b2a22, 0, { roughness: .45 });
box(.3, 4, 16, -10, 0, 0, 0x2a3042);
box(.3, 4, 16, 10, 0, 0, 0x2a3042);
box(20, 4, .3, 0, 0, 8, 0x2a3042);
box(20, .2, 16, 0, 4, 0, 0x151a28);

const post = tex(256, 384, x => {
  x.fillStyle = "#0c0e14";
  x.fillRect(0, 0, 256, 384);
  x.fillStyle = "#cbd0da";
  x.font = "bold 38px Impact,Arial Narrow,sans-serif";

  ["BETTER", "DECISIONS", "BIGGER", "TOMORROWS"].forEach((t, i) => {
    x.fillStyle = i % 2 ? "#8a93a6" : "#e5e9f2";
    x.fillText(t, 24, 96 + i * 62);
  });
});

const ps = new THREE.Mesh(
  new THREE.PlaneGeometry(1.8, 2.7),
  new THREE.MeshBasicMaterial({ map: post })
);

ps.position.set(-9.8, 2.3, -3);
ps.rotation.y = Math.PI / 2;
scene.add(ps);

box(3.2, .6, 4.4, -7.2, 0, -4.4, 0x2b2d44, 1);
box(3.25, .18, 2.6, -7.2, .6, -3.6, 0x3f5fa8);
box(2.4, .25, .8, -7.2, .6, -6.2, 0xcfd3e6);
box(3.4, 1.5, .2, -7.2, 0, -6.7, 0x3a2a22);
box(.9, .6, .9, -9.3, 0, -6.2, 0x3a2a22, 1);
cyl(.07, .4, -9.3, .6, -6.2, 0x888888);

const lb = new THREE.Mesh(
  new THREE.SphereGeometry(.24, 12, 12),
  new THREE.MeshBasicMaterial({ color: 0xffc27a })
);

lb.position.set(-9.3, 1.25, -6.2);
scene.add(lb);

box(5, .12, 1.6, 4, .8, -6.9, 0x6b4a34, 1);
box(.2, .8, 1.5, 1.6, 0, -6.9, 0x4a3322);
box(.2, .8, 1.5, 6.4, 0, -6.9, 0x4a3322);
box(1.1, .05, .75, 4, .92, -6.7, 0x20242e);

const sc = box(
  1.1, .7, .05, 4, .97, -7.1, 0x0b1424, 0,
  { emissive: 0x2a6fe0, emissiveIntensity: .8 }
);

sc.rotation.x = -.2;
cyl(.12, .22, 5.2, .92, -6.7, 0xd6a35f);

box(1.2, .12, 1.2, 4, .55, -5.4, 0x1c2232);
box(1.2, 1.1, .12, 4, .6, -4.8, 0x1c2232);
cyl(.08, .55, 4, 0, -5.4, 0x333a4d);

box(4, .5, 1.6, 0, 0, 5.3, 0x34405e, 1);
box(4, .9, .35, 0, .5, 6.1, 0x2c3650);
box(5, .02, 3.5, 0, 0, 2.6, 0x2a2233);
box(.5, 3, 3.2, 9.6, 0, -1, 0x2a1f1a, 1);

[0xc0392b, 0x2980b9, 0xf1c40f, 0x27ae60]
  .forEach((c, i) => box(.3, .5, .1 + i * .02, 9.35, .5 + i * .6, -.2 - i * .4, c));

cyl(.35, .5, 8.7, 0, -6.9, 0x7a4a2a);

[
  [8.7, 1.1, -6.9, .55],
  [8.45, 1.5, -6.8, .4],
  [8.95, 1.45, -7, .4]
].forEach(p => {
  const s = new THREE.Mesh(
    new THREE.SphereGeometry(p[3], 10, 10),
    M(0x1f7a4a)
  );

  s.position.set(p[0], p[1], p[2]);
  scene.add(s);
});

const pl = new THREE.Group();
scene.add(pl);

const hood = M(0x1b2233, { roughness: .85 });

const part = (g, m, x, y, z) => {
  const q = new THREE.Mesh(g, m);
  q.position.set(x, y, z);
  pl.add(q);
  return q;
};

const BX = THREE.BoxGeometry;

part(new BX(.7, .85, .4), hood, 0, 1.05, 0);
part(new BX(.95, .24, .46), hood, 0, 1.42, 0);
part(new BX(.5, .22, .3), hood, 0, 1.58, -.12);
part(new THREE.SphereGeometry(.22, 16, 16), M(0xe0b896), 0, 1.78, 0);
part(
  new THREE.SphereGeometry(.245, 16, 16, 0, Math.PI * 2, 0, Math.PI * .62),
  M(0x2a1a0c, { roughness: .95 }),
  0, 1.8, -.02
);

const lgL = part(new BX(.28, .65, .3), M(0x222a3d), -.17, .33, 0);
const lgR = part(new BX(.28, .65, .3), M(0x222a3d), .17, .33, 0);
const arL = part(new BX(.2, .7, .25), hood, -.5, 1.05, 0);
const arR = part(new BX(.2, .7, .25), hood, .5, 1.05, 0);

pl.position.set(3.2, 0, -3.4);
pl.rotation.y = Math.PI;

const key = {};
let yaw = 0, drag = 0, lx = 0, near = "";

addEventListener("keydown", e => {
  if (e.target.tagName == "INPUT") return;

  const k = e.key.toLowerCase();
  key[k] = 1;

  if (k == "e") interact();
  if (k.startsWith("arrow")) e.preventDefault();
});

addEventListener("keyup", e => key[e.key.toLowerCase()] = 0);

$("gl").onpointerdown = e => {
  drag = 1;
  lx = e.clientX;
};

addEventListener("pointerup", () => drag = 0);

addEventListener("pointermove", e => {
  if (drag) {
    yaw -= (e.clientX - lx) * .006;
    lx = e.clientX;
  }
});

function interact() {
  if (near == "desk") panel("market");
  else if (near == "bed") act("rest");
}

const DESK = [4, -5.2], BED = [-7.2, -3.4];
const vel = new THREE.Vector3();
const clk = new THREE.Clock();
const mc = $("mmc").getContext("2d");
const BL = [];

let walk = 0;

for (let i = 0; i < 46; i++) {
  const x = R(-48, 48), z = R(-48, 48);

  if (Math.abs(x) > 14 || Math.abs(z) > 11) {
    BL.push([x, z, R(3, 8), R(3, 8)]);
  }
}

const hit = (x, z) =>
  OB.some(b => x > b[0] && x < b[1] && z > b[2] && z < b[3]) ||
  Math.abs(x) > 9.3 || z < -7.3 || z > 7.3;

cam.position.set(3.2, 2.1, -.1);

function mini() {
  const x = mc;

  x.clearRect(0, 0, 340, 340);
  x.save();
  x.translate(170, 170);
  x.scale(10, 10);
  x.translate(-pl.position.x, -pl.position.z);

  x.fillStyle = "#070b16";
  x.fillRect(-60, -60, 120, 120);

  x.fillStyle = "#131a2b";
  BL.forEach(b => x.fillRect(b[0], b[1], b[2], b[3]));

  x.fillStyle = "rgba(16,185,129,.3)";
  x.fillRect(-10, -8, 20, 16);

  x.strokeStyle = "#10b981";
  x.lineWidth = .15;
  x.strokeRect(-10, -8, 20, 16);

  x.fillStyle = "#3b82f688";
  OB.forEach(b => x.fillRect(
    b[0] + .3,
    b[2] + .3,
    b[1] - b[0] - .6,
    b[3] - b[2] - .6
  ));

  x.restore();
  x.save();
  x.translate(170, 170);
  x.rotate(Math.PI - pl.rotation.y);

  x.fillStyle = "#fff";
  x.shadowColor = "#10b981";
  x.shadowBlur = 10;
  x.beginPath();
  x.moveTo(0, -14);
  x.lineTo(9, 10);
  x.lineTo(0, 5);
  x.lineTo(-9, 10);
  x.fill();

  x.restore();
}

function loop() {
  requestAnimationFrame(loop);

  const dt = Math.min(clk.getDelta(), .1);
  const s = Math.sin(yaw), c = Math.cos(yaw);

  const fw = (key.w || key.arrowup ? 1 : 0) -
    (key.s || key.arrowdown ? 1 : 0);

  const rt = (key.d || key.arrowright ? 1 : 0) -
    (key.a || key.arrowleft ? 1 : 0);

  let mx = -s * fw + c * rt;
  let mz = -c * fw - s * rt;

  const l = Math.hypot(mx, mz);

  if (l > 0) {
    mx /= l;
    mz /= l;
  }

  vel.x += (mx * 34 - vel.x * 9) * dt;
  vel.z += (mz * 34 - vel.z * 9) * dt;

  const nx = pl.position.x + vel.x * dt;
  const nz = pl.position.z + vel.z * dt;

  if (!hit(nx, pl.position.z)) pl.position.x = nx;
  else vel.x = 0;

  if (!hit(pl.position.x, nz)) pl.position.z = nz;
  else vel.z = 0;

  const sp = Math.hypot(vel.x, vel.z);

  if (sp > .4) {
    const d = ((Math.atan2(vel.x, vel.z) - pl.rotation.y + Math.PI) %
      (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;

    pl.rotation.y += d * Math.min(1, dt * 12);
  }

  walk += sp * dt * 1.6;

  const sw = Math.sin(walk * 4) * Math.min(sp, 3) * .22;

  lgL.rotation.x = sw;
  lgR.rotation.x = -sw;
  arL.rotation.x = -sw;
  arR.rotation.x = sw;

  pl.position.y = Math.abs(Math.sin(walk * 4)) * .04 * Math.min(1, sp / 2);

  const tp = new THREE.Vector3(
    cl(pl.position.x + s * 3.3, -9.5, 9.5),
    2.1,
    cl(pl.position.z + c * 3.3, -7.6, 7.6)
  );

  cam.position.lerp(tp, Math.min(1, dt * 7));
  cam.lookAt(pl.position.x, 1.35, pl.position.z);

  const nd =
    Math.hypot(pl.position.x - DESK[0], pl.position.z - DESK[1]) < 2.6
      ? "desk"
      : Math.hypot(pl.position.x - BED[0], pl.position.z - BED[1]) < 2.8
        ? "bed"
        : "";

  if (nd != near) {
    near = nd;

    const t = $("tip");
    t.style.display = nd ? "block" : "none";
    t.textContent = nd == "desk"
      ? "Press E · open the stock market"
      : "Press E · rest in bed";
  }

  lap.intensity = .7 + .15 * Math.sin(clk.elapsedTime * 2);

  rd.render(scene, cam);
  mini();
}

addEventListener("resize", () => {
  cam.aspect = innerWidth / innerHeight;
  cam.updateProjectionMatrix();
  rd.setSize(innerWidth, innerHeight);

  if (S.p == "market") draw();
});

setInterval(() => {
  if (S.busy) return;

  K.forEach(k => step(k, R(-1, 1) * AS[k].v));
  hud();

  if (S.p == "market") {
    head();
    draw();
  }

  if (S.p == "portfolio") panel("portfolio");
}, 1000);

hud();
tip();
panel("market");
toast("Welcome to RIPPLE. W A S D to walk, drag to look, E at the desk.");
loop();