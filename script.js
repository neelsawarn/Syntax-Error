/* Ripple: Life & Markets. Game logic. */
/* Backup copy of data.json: used only if the browser blocks fetch (e.g. index.html opened by double-click). Keep it identical to data.json. */
const FALLBACK = { "_note": "Real monthly adjusted closes Jan 2008-Dec 2025 (Digrin.com); life = historic car/home/wedding prices by year", "stocks": { "aapl": [4.05, 3.74, 4.29, 5.2, 5.65, 5.01, 4.75, 5.07, 3.4, 3.22, 2.77, 2.55, 2.7, 2.67, 3.14, 3.76, 4.06, 4.26, 4.89, 5.03, 5.54, 5.64, 5.98, 6.3, 5.74, 6.12, 7.03, 7.81, 7.68, 7.52, 7.69, 7.27, 8.49, 9.0, 9.31, 9.65, 10.15, 10.56, 10.42, 10.47, 10.4, 10.04, 11.68, 11.51, 11.4, 12.11, 11.43, 12.11, 13.65, 16.22, 17.93, 17.47, 17.28, 17.47, 18.27, 19.98, 20.04, 17.88, 17.66, 16.06, 13.74, 13.4, 13.44, 13.44, 13.74, 12.12, 13.83, 14.98, 14.66, 16.08, 17.2, 17.35, 15.48, 16.38, 16.7, 18.36, 19.81, 20.36, 20.94, 22.56, 22.18, 23.78, 26.29, 24.4, 25.9, 28.51, 27.62, 27.78, 29.04, 27.96, 27.04, 25.25, 24.7, 26.76, 26.6, 23.67, 21.89, 21.86, 24.64, 21.19, 22.71, 21.74, 23.7, 24.26, 25.85, 25.96, 25.4, 26.62, 27.89, 31.62, 33.16, 33.16, 35.41, 33.38, 34.48, 38.17, 35.87, 39.34, 40.14, 39.52, 39.1, 41.77, 39.35, 38.76, 43.99, 43.58, 44.8, 53.78, 53.33, 51.7, 42.34, 37.39, 39.46, 41.22, 45.22, 47.78, 41.84, 47.3, 50.92, 50.08, 53.73, 59.68, 64.31, 70.66, 74.48, 65.93, 61.33, 70.86, 76.89, 88.23, 102.8, 125.06, 112.24, 105.5, 115.58, 128.82, 128.11, 117.9, 118.76, 127.81, 121.36, 133.39, 142.06, 148.09, 138.02, 146.11, 161.46, 173.45, 170.72, 161.49, 170.78, 154.19, 145.78, 133.91, 159.18, 154.21, 135.55, 150.4, 145.43, 127.65, 141.76, 145.05, 162.26, 166.96, 174.65, 191.12, 193.57, 185.36, 168.92, 168.49, 187.66, 190.21, 182.18, 178.8, 169.63, 168.49, 190.44, 208.63, 219.98, 227.1, 231.07, 224.04, 235.62, 248.62, 234.3, 240.36, 220.77, 211.2, 199.88, 204.18, 206.57, 231.29, 253.69, 269.38, 278.09, 271.12], "msft": [23.23, 19.46, 20.3, 20.4, 20.33, 19.75, 18.47, 19.67, 19.24, 16.1, 14.67, 14.11, 12.41, 11.8, 13.42, 14.8, 15.36, 17.48, 17.3, 18.23, 19.02, 20.51, 21.84, 22.64, 20.93, 21.39, 21.86, 22.79, 19.34, 17.25, 19.35, 17.69, 18.46, 20.1, 19.15, 21.16, 21.03, 20.27, 19.36, 19.77, 19.2, 19.96, 21.04, 20.55, 19.23, 20.57, 19.91, 20.21, 22.98, 24.87, 25.28, 25.09, 23.02, 24.12, 23.24, 24.47, 23.62, 22.66, 21.3, 21.37, 21.97, 22.43, 23.08, 26.71, 28.36, 28.06, 25.87, 27.33, 27.23, 28.97, 31.44, 30.84, 31.2, 31.82, 34.05, 33.56, 34.25, 34.88, 36.1, 38.24, 39.02, 39.52, 40.5, 39.34, 34.22, 37.41, 34.68, 41.49, 40.23, 37.91, 40.1, 37.61, 38.25, 45.5, 47.29, 48.27, 47.93, 44.59, 48.4, 43.7, 46.77, 45.16, 50.02, 51.02, 51.15, 53.21, 53.87, 55.55, 57.8, 57.54, 59.23, 61.57, 63.17, 62.35, 65.76, 67.99, 67.74, 75.64, 76.92, 78.18, 86.83, 86.1, 83.81, 85.87, 91.15, 90.94, 97.83, 103.99, 105.88, 98.88, 103.1, 94.43, 97.09, 104.6, 110.12, 121.94, 115.91, 125.54, 127.71, 129.63, 130.73, 134.81, 142.83, 148.79, 160.61, 153.27, 149.2, 169.55, 173.85, 193.07, 194.49, 214.48, 200.02, 192.55, 204.11, 212.08, 221.17, 222.08, 225.32, 241.0, 239.17, 259.49, 272.91, 289.72, 270.57, 318.26, 317.86, 323.37, 299.0, 287.88, 297.05, 267.38, 262.55, 248.02, 271.12, 253.04, 225.39, 224.65, 247.61, 232.74, 240.5, 242.67, 280.49, 298.94, 320.2, 332.04, 327.54, 320.26, 308.52, 330.37, 370.99, 368.18, 389.27, 405.74, 412.69, 381.9, 407.94, 439.21, 411.1, 410.65, 423.61, 400.03, 417.71, 415.78, 409.42, 392.38, 371.03, 390.67, 455.85, 492.54, 528.28, 502.56, 513.72, 513.58, 488.91, 480.57], "amzn": [3.88, 3.22, 3.56, 3.93, 4.08, 3.67, 3.82, 4.04, 3.64, 2.86, 2.14, 2.56, 2.94, 3.24, 3.67, 4.03, 3.9, 4.18, 4.29, 4.06, 4.67, 5.94, 6.8, 6.73, 6.27, 5.92, 6.79, 6.86, 6.27, 5.46, 5.89, 6.24, 7.85, 8.26, 8.77, 9.0, 8.48, 8.66, 9.01, 9.79, 9.84, 10.22, 11.13, 10.76, 10.81, 10.68, 9.61, 8.66, 9.72, 8.98, 10.13, 11.6, 10.65, 11.42, 11.66, 12.41, 12.72, 11.64, 12.6, 12.54, 13.28, 13.21, 13.32, 12.69, 13.46, 13.88, 15.06, 14.05, 15.63, 18.2, 19.68, 19.94, 17.93, 18.1, 16.82, 15.21, 15.63, 16.24, 15.65, 16.95, 16.12, 15.27, 16.93, 15.52, 17.73, 19.01, 18.6, 21.09, 21.46, 21.7, 26.81, 25.64, 25.6, 31.3, 33.24, 33.79, 29.35, 27.63, 29.68, 32.98, 36.14, 35.78, 37.94, 38.46, 41.86, 39.49, 37.53, 37.49, 41.17, 42.25, 44.33, 46.25, 49.73, 48.4, 49.39, 49.03, 48.07, 55.26, 58.84, 58.47, 72.54, 75.62, 72.37, 78.31, 81.48, 84.99, 88.87, 100.64, 100.15, 79.9, 84.51, 75.1, 85.94, 81.99, 89.04, 96.33, 88.75, 94.68, 93.34, 88.81, 86.8, 88.83, 90.04, 92.39, 100.44, 94.19, 97.49, 123.7, 122.12, 137.94, 158.23, 172.55, 157.44, 151.81, 158.4, 162.85, 160.31, 154.65, 154.7, 173.37, 161.15, 172.01, 166.38, 173.54, 164.25, 168.62, 175.35, 166.72, 149.57, 153.56, 163.0, 124.28, 120.21, 106.21, 134.95, 126.77, 113.0, 102.44, 96.54, 84.0, 103.13, 94.23, 103.29, 105.45, 120.58, 130.36, 133.68, 138.01, 127.12, 133.09, 146.09, 151.94, 155.2, 176.76, 180.38, 175.0, 176.44, 193.25, 186.98, 178.5, 186.33, 186.4, 207.89, 219.39, 237.68, 212.28, 190.26, 184.42, 205.01, 219.39, 234.11, 229.0, 219.57, 244.22, 233.22, 230.82], "googl": [13.99, 11.68, 10.92, 14.24, 14.52, 13.05, 11.74, 11.48, 9.93, 8.91, 7.26, 7.63, 8.39, 8.38, 8.63, 9.82, 10.34, 10.45, 10.98, 11.44, 12.29, 13.29, 14.45, 15.37, 13.14, 13.06, 14.06, 13.03, 12.04, 11.03, 12.02, 11.16, 13.03, 15.21, 13.78, 14.72, 14.88, 15.21, 14.54, 13.49, 13.11, 12.55, 14.96, 13.41, 12.77, 14.69, 14.86, 16.01, 14.38, 15.33, 15.9, 14.99, 14.4, 14.38, 15.69, 16.98, 18.7, 16.86, 17.31, 17.54, 18.73, 19.86, 19.69, 20.44, 21.6, 21.82, 22.01, 20.99, 21.71, 25.55, 26.27, 27.78, 29.28, 30.14, 27.63, 26.49, 28.31, 28.96, 28.7, 28.84, 29.14, 28.13, 27.2, 26.28, 26.62, 27.87, 27.47, 27.18, 27.01, 26.75, 32.56, 32.09, 31.62, 36.52, 37.78, 38.53, 37.71, 35.52, 37.78, 35.06, 37.09, 34.84, 39.19, 39.12, 39.82, 40.11, 38.43, 39.25, 40.62, 41.85, 41.99, 45.79, 48.89, 46.05, 46.83, 47.31, 48.23, 51.16, 51.32, 52.17, 58.55, 54.68, 51.37, 50.45, 54.48, 55.93, 60.78, 61.01, 59.78, 54.02, 54.96, 51.76, 55.76, 55.8, 58.29, 59.38, 54.8, 53.63, 60.34, 58.96, 60.48, 62.35, 64.59, 66.34, 70.96, 66.33, 57.55, 66.7, 71.0, 70.23, 73.7, 80.71, 72.59, 80.04, 86.89, 86.81, 90.51, 100.14, 102.15, 116.57, 116.73, 120.94, 133.46, 143.33, 132.42, 146.65, 140.56, 143.49, 134.03, 133.78, 137.76, 113.03, 112.69, 107.94, 115.22, 107.2, 94.75, 93.62, 100.04, 87.4, 97.91, 89.21, 102.75, 106.33, 121.71, 118.57, 131.47, 134.89, 129.63, 122.91, 131.28, 138.37, 138.78, 137.16, 149.51, 161.25, 170.87, 180.64, 170.12, 162.03, 164.69, 169.92, 167.77, 188.2, 202.83, 169.29, 153.92, 158.06, 170.94, 175.62, 191.23, 212.17, 242.47, 280.46, 319.35, 312.39], "ko": [16.61, 16.46, 17.25, 16.68, 16.23, 14.83, 14.69, 14.85, 15.19, 12.66, 13.58, 13.12, 12.38, 11.84, 12.87, 12.61, 14.4, 14.17, 14.72, 14.4, 15.99, 15.87, 17.15, 17.09, 16.27, 15.81, 16.63, 16.16, 15.54, 15.28, 16.8, 17.04, 17.98, 18.84, 19.54, 20.34, 19.44, 19.77, 20.67, 21.02, 20.81, 21.12, 21.34, 22.11, 21.34, 21.58, 21.39, 22.27, 21.49, 22.23, 23.72, 24.46, 23.96, 25.24, 26.08, 24.14, 24.65, 24.16, 24.81, 23.72, 24.37, 25.34, 26.65, 27.9, 26.36, 26.62, 26.6, 25.34, 25.32, 26.45, 27.05, 27.81, 25.46, 25.71, 26.23, 27.68, 27.76, 28.96, 26.86, 28.52, 29.37, 28.84, 31.08, 29.27, 28.54, 30.02, 28.35, 28.35, 28.63, 27.65, 28.95, 27.71, 28.52, 30.11, 30.53, 30.78, 30.75, 30.9, 33.49, 32.34, 32.2, 32.98, 31.74, 31.6, 31.04, 31.1, 29.84, 30.67, 30.75, 31.04, 31.67, 32.2, 33.93, 33.74, 34.49, 34.27, 34.13, 34.87, 34.99, 35.08, 36.38, 33.04, 33.5, 33.33, 33.16, 34.13, 36.28, 34.68, 36.25, 37.57, 39.86, 37.45, 38.07, 35.86, 37.39, 39.14, 39.2, 40.94, 42.32, 44.26, 44.1, 44.09, 43.58, 45.17, 47.66, 43.65, 36.43, 37.78, 38.43, 37.11, 39.24, 41.14, 41.34, 40.24, 43.55, 46.28, 40.64, 41.34, 44.86, 45.94, 47.05, 46.39, 48.9, 48.28, 45.33, 48.7, 45.66, 51.55, 53.11, 54.18, 54.39, 56.68, 55.6, 55.58, 56.7, 54.52, 49.86, 53.27, 57.02, 57.02, 54.96, 53.34, 56.02, 57.94, 53.88, 54.8, 56.36, 54.45, 51.35, 51.82, 54.03, 54.49, 55.0, 55.49, 57.02, 57.57, 58.65, 59.78, 62.68, 68.07, 67.96, 61.76, 61.06, 59.32, 60.49, 67.85, 68.75, 69.64, 69.21, 68.39, 65.63, 66.69, 64.6, 67.12, 71.23, 68.58] }, "life": { "car": { "2012": [31000, 15000], "2013": [32000, 15500] }, "home": { "2014": [208900, 4.17], "2015": [222400, 3.85] }, "wed": { "2016": 35329, "2017": 33391 } } };
/* Loads data.json first (stock history + real price tables). */
(async () => {
  const J = await fetch("data.json").then(r => { if (!r.ok) throw 0; return r.json() }).catch(() => FALLBACK), DATA = J.stocks, HX = J.life;
  const $ = i => document.getElementById(i), $$ = s => document.querySelectorAll(s);
  const f$ = n => (n < 0 ? "-$" : "$") + Math.abs(Math.round(n)).toLocaleString("en-US");
  const R = (a, b) => a + Math.random() * (b - a), sleep = ms => new Promise(r => setTimeout(r, ms)), cl = (v, a, b) => Math.max(a, Math.min(b, v));
  const MO = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), K = ["sp", "tech", "bonds", "crypto", "aapl", "msft", "amzn", "googl", "ko"], TF = { "6M": 6, "1Y": 12, "3Y": 36, "ALL": 999 };
  const AS = { sp: { n: "S&P 500", p: 4800, v: .0009 }, tech: { n: "TECH", p: 312, v: .0028 }, bonds: { n: "BONDS", p: 101, v: .0003 }, crypto: { n: "CRYPTO", p: 2450, v: .008 }, aapl: { n: "Apple", real: 1 }, msft: { n: "Microsoft", real: 1 }, amzn: { n: "Amazon", real: 1 }, googl: { n: "Alphabet", real: 1 }, ko: { n: "Coca-Cola", real: 1 } };
  /* Monthly take-home pay, living costs and rent for ages 21..35 (nominal USD, rising over time) */
  const SAL = [3900, 4150, 4450, 4800, 5150, 5550, 5900, 6200, 6500, 6800, 7100, 7400, 0, 7000, 7600];
  const EXB = [1600, 1650, 1700, 1760, 1810, 1870, 1920, 1980, 2040, 2100, 2160, 2230, 2300, 2370, 2440];
  const RENT = [1250, 1300, 1350, 1405, 1460, 1520, 1580, 1645, 1710, 1780, 1850, 1925, 2000, 2080, 2160];
  const pmt = (P, r, n) => P * (r / 12) / (1 - Math.pow(1 + r / 12, -n)), yr = () => 2008 + ((S0 + S.g) / 12 | 0);
  const exTot = () => S.ex.reduce((s, x) => s + (S.g < x[1] ? x[0] : 0), 0), netAt = a => SAL[a - 21] - EXB[a - 21] - (S.rent ? RENT[a - 21] : 0) - exTot(), eq = () => S.hv ? Math.max(0, S.hv - S.ln) : 0;
  const EV = [["💸 Surprise bonus", "Your manager rewarded a great quarter: +$500.", 500, 0, 6, 0], ["🦷 Medical bill", "An unexpected clinic visit: -$700.", -700, -4, -4, 0], ["🎉 Friend’s party", "A great night out: -$150, +happiness.", -150, 0, 10, -5], ["💻 Laptop died", "Emergency replacement: -$900.", -900, 0, -6, 0], ["🧧 Side gig", "A freelance job paid +$600 but wore you out.", 600, 0, 0, -12], ["🔥 Burnout week", "Long hours caught up with you.", 0, -5, -8, -25]];
  const D = {
    23: () => {
      const y = yr(), [nw, us] = HX.car[y], dn = Math.round(nw * .1), pm = Math.round(pmt(nw - dn, .048, 60) / 10) * 10; return {
        t: "Age 23 \u00b7 Vehicle decision", x: `Your commuter vehicle broke down. Real data, ${y}: average new car \u2248 ${f$(nw)} (Kelley Blue Book), average used car \u2248 ${f$(us)}.`, o: [
          { n: `Buy a used car in cash \u00b7 ${y} avg`, c: `-${f$(us)} \u00b7 +$220/mo running costs`, ok: () => S.cash >= us, f() { S.cash -= us; S.ex.push([220, 999]) }, m: "You paid cash: no loan, but fuel, insurance and repairs add up.", a: { price: us } },
          { n: `Finance a new car \u00b7 ${y} avg ${f$(nw)}`, c: `-${f$(dn)} down \u00b7 +${f$(pm + 300)}/mo for 5 yrs`, ok: () => S.cash >= dn, f() { S.cash -= dn; S.ex.push([pm, S.g + 60], [300, 999]) }, m: "Loan payments will quietly eat your monthly savings for five years.", a: { pm } },
          { n: "Take the bus (monthly pass)", c: "+$100/mo", f() { S.ex.push([100, 999]) }, m: "You skipped the car and kept your capital working." }]
      }
    },
    25: () => {
      const y = yr(), [med, rt] = HX.home[y], H = (m, dn) => { const P = Math.round(med * m / 1e3) * 1e3, L = P * (1 - dn), pi = pmt(L, rt / 100, 360); return { P, L, pi, rt, cash: Math.round(P * (dn + .03)), mo: Math.round(pi + P * .02 / 12 + L * .008 / 12) } }, C = H(.65, .1), F = H(1, .1), G = H(1.8, .05), inv = 20000,
        O = (n, h, m) => ({ n, c: `-${f$(h.cash)} cash \u00b7 ${f$(h.mo)}/mo (replaces rent)`, ok: () => S.cash >= h.cash, f() { S.cash -= h.cash; S.rent = 0; S.ex.push([h.mo, 999]); S.hv = h.P; S.ln = h.L; S.hr = rt / 100; S.pi = h.pi }, m, a: h });
      return {
        t: "Age 25 \u00b7 Housing decision", x: `Time to decide where to live. Real data, ${y}: median existing-home price \u2248 ${f$(med)} (NAR) and a 30-year mortgage averaged ${rt}% (Freddie Mac). Monthly cost = loan, tax, insurance, upkeep. Closing costs 3%.`, o: [
          { n: `Keep renting \u00b7 invest ${f$(inv)}`, c: `-${f$(inv)} to S&P 500 \u00b7 rent stays`, ok: () => S.cash >= inv, f() { S.cash -= inv; S.h.sp += inv; S.c.sp += inv }, m: "You stayed flexible and put capital to work instead of buying.", a: { inv } },
          O(`Starter condo \u00b7 ${f$(C.P)} (65% of ${y} median)`, C, "A small condo: low bills and a first slice of equity."),
          O(`Family house \u00b7 ${f$(F.P)} (${y} median)`, F, "A house of your own, with equity building slowly each month."),
          O(`Dream house \u00b7 ${f$(G.P)} (1.8\u00d7 ${y} median)`, G, "A showpiece home, and a mortgage that dominates your budget.")]
      }
    },
    27: () => {
      const y = yr(), av = HX.wed[y], lv = Math.round(av / 100) * 100, md = Math.round(av * .4 / 100) * 100, iv = 10000; return {
        t: "Age 27 \u00b7 Marriage", x: `You\u2019re getting married! Real data, ${y}: the average US wedding cost ${f$(av)} (The Knot Real Weddings Study). How do you spend?`, o: [
          { n: `Lavish wedding \u00b7 ${y} US average`, c: `-${f$(lv)}`, ok: () => S.cash >= lv, f() { S.cash -= lv; S.hap += 20 }, m: "A dream wedding, and a drained account.", a: lv },
          { n: "Modest wedding \u00b7 ~40% of average", c: `-${f$(md)}`, ok: () => S.cash >= md, f() { S.cash -= md; S.hap += 12 }, m: "Happy, with your cushion mostly intact.", a: md },
          { n: `Courthouse wedding, invest ${f$(iv)} in S&P 500`, c: `-${f$(iv + 500)} incl. $500 fee`, ok: () => S.cash >= iv + 500, f() { S.cash -= iv + 500; S.h.sp += iv; S.c.sp += iv; S.hap -= 5 }, m: "You invested instead of throwing a party.", a: iv },
          { n: "No marriage \u00b7 stay single, focus on career", c: "$0 \u00b7 no wedding costs", f() { S.hap -= 3 }, m: "You skipped marriage and kept your money and freedom. Life is still full, just different." }]
      }
    },
    33: () => {
      const bills = EXB[12] + (S.rent ? RENT[12] : 0) + exTot(), burn = Math.round(bills * 5 / 500) * 500; return {
        t: "Age 33 \u00b7 Recession layoff", x: `The crash wiped out value and your company laid you off: $0 income against about ${f$(bills)}/mo of bills. Unemployment benefits and ~5 months to land a new role put the real hit near ${f$(burn)}. How do you survive?`, o: [
          { n: "Live off checking cash", c: `-${f$(burn)}`, ok: () => S.cash >= burn, f() { S.cash -= burn }, m: "Your cash cushion absorbed the bills. No assets sold at the bottom." },
          { n: "Liquidate everything at the bottom", c: "sells all holdings", f() { K.forEach(k => { S.cash += S.h[k]; S.h[k] = 0; S.c[k] = 0 }); S.cash -= burn; S.panic += 2 }, m: "You locked in crash-bottom prices. The recovery will pass you by." },
          { n: "Break bonds early (15% penalty)", c: "needs $2,000 in bonds", ok: () => S.h.bonds >= 2000, f() { S.cash += S.h.bonds * .85 - burn; S.h.bonds = 0; S.c.bonds = 0 }, m: "You paid a 15% penalty to free up cash." }]
      }
    },
    35: {
      t: "Age 35 \u00b7 Final strategy", x: "The dust has settled. Choose your long-term strategy.", o: [
        { n: "Dividend income engine", c: "S&P 500 +6%", f() { S.h.sp *= 1.06; S.plan = 0 }, m: "Steady dividends keep compounding." },
        { n: "All-in aggressive growth", c: "tech & crypto \u00b1", f() { const r = R(.75, 1.5); S.h.tech *= r; S.h.crypto *= r; S.plan = 1 }, m: "High risk, high drama." },
        { n: "Balanced buffer", c: "bonds & S&P +3%", f() { S.h.bonds *= 1.03; S.h.sp *= 1.03; S.plan = 2 }, m: "A calm, defensive finish." }]
    }
  };
  const Z = () => Object.fromEntries(K.map(k => [k, 0])), init = () => ({ g: 0, trades: 0, panic: 0, cs: 0, plan: 0, age: 21, m: 0, cash: 3000, h: Z(), c: Z(), ex: [], rent: 1, hv: 0, ln: 0, hr: 0, pi: 0, hp: 80, en: 80, hap: 75, slots: 3, log: [], msgs: [], unread: 0, busy: 0, need: 0, done: {}, tab: "aapl", tf: "3Y", ct: 0, ma: 1, hv: null, p: "" });
  function mkClimate() {
    const o = {}; for (let a = 21; a <= 34; a++) {
      const s = R(-.08, .16), t = R(-.25, .35), b = R(.03, .06), x = R(-.55, .65); let m = { sp: 1 + s, tech: 1 + t, bonds: 1 + b, crypto: 1 + x }, tag = s > .1 && x > .25 ? "🚀 Risk-On Surge" : s < 0 ? "📉 Bear Market Pullback" : "🟢 Bull Market";
      if (a == 32) { m = { sp: .6, tech: .35, bonds: 1.02, crypto: .2 }; tag = "💥 Great Recession Crash" } if (a == 33) { m = { sp: 1.25, tech: 1.8, bonds: 1.04, crypto: 2.2 }; tag = "🚀 Recovery Surge" } o[a] = { m, tag }
    } return o
  }
  const SV = (() => { try { const x = JSON.parse(localStorage.getItem("ripple_save_v1")); return x && x.v == 1 && x.S && x.S.age < 35 ? x : null } catch (e) { return null } })();
  let S = init(), CL = mkClimate(); const P = {}, HI = {};
  function step(k, ret) { const o = P[k]; P[k] = o * (1 + ret); S.h[k] *= 1 + ret; const c = P[k], w = Math.abs(ret) * R(0, .8) * o; HI[k].push({ o, c, h: Math.max(o, c) + w, l: Math.min(o, c) - w, t: MO[S.m] + " " + S.age }); if (HI[k].length > 900) HI[k].shift() }
  /* Real monthly adjusted closes, Jan 2008 to Dec 2025 (source: Digrin.com) */
  const S0 = SV ? SV.s0 : 24 + Math.floor(Math.random() * 24);
  K.forEach(k => { HI[k] = []; if (AS[k].real) { const d = DATA[k]; for (let i = S0 - 23; i <= S0; i++)HI[k].push({ o: d[i - 1], c: d[i], h: Math.max(d[i - 1], d[i]), l: Math.min(d[i - 1], d[i]), t: "Past", d: MO[i % 12] + " " + (2008 + (i / 12 | 0)) }); P[k] = d[S0] } else P[k] = AS[k].p * R(.86, .9) });
  S.age = 20; for (let i = 0; i < 24; i++) { S.m = i % 12; K.filter(k => !AS[k].real).forEach(k => step(k, R(-1, 1) * AS[k].v * 2.4 + AS[k].v * .3)) } S.age = 21; S.m = 0;
  /* ---------- Save / load (browser localStorage, single player) ---------- */
  function save() { if (S.busy || S.need) return; try { localStorage.setItem("ripple_save_v1", JSON.stringify({ v: 1, s0: S0, S, CL, P, HI })) } catch (e) { } }
  function clearSave() { try { localStorage.removeItem("ripple_save_v1") } catch (e) { } }
  if (SV) { Object.assign(S, SV.S); CL = SV.CL; K.forEach(k => { P[k] = SV.P[k]; HI[k] = SV.HI[k] }); S.busy = 0; S.need = 0; S.p = "" }
  document.addEventListener("click", e => { if (e.target.id == "ng") { clearSave(); location.reload() } });
  const mv = (k, np) => { S.h[k] *= np / P[k]; P[k] = np };
  const agg = (k, n) => HI[k].slice(-n);
  function head() { const c = agg(S.tab, TF[S.tf]), o = c[0].o, p = P[S.tab], d = p - o, e = $("chg"); if (!e) return; $("px").textContent = p.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); e.textContent = `${d >= 0 ? "▲ +" : "▼ "}${d.toFixed(2)} (${(d / o * 100).toFixed(2)}%)`; e.style.color = d >= 0 ? "#10b981" : "#ef4444"; $("src").textContent = AS[S.tab].real ? `Historical monthly adjusted closes; opens use the previous close. Wicks are illustrative, not historical highs/lows. Data year shown: ${c[0].d || "n/a"} to ${c[c.length - 1].d || "n/a"}.` : "Simulated monthly prices and illustrative wicks — not a live market feed." }
  const fmtP = v => v.toFixed(v > 999 ? 0 : 2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const chartView = { offset: 0, count: null, key: '', pointer: null, drag: null };
  function draw() {
    const cv = $("ch"); if (!cv || !cv.clientWidth) return;
    const W = cv.clientWidth, H = cv.clientHeight, d = window.devicePixelRatio || 1; cv.width = Math.round(W * d); cv.height = Math.round(H * d);
    const x = cv.getContext('2d'); x.scale(d, d); x.fillStyle = '#101722'; x.fillRect(0, 0, W, H);
    const all = agg(S.tab, TF[S.tf]); if (!all.length) return;
    const key = S.tab + S.tf; if (chartView.key !== key) { chartView.key = key; chartView.count = null; chartView.offset = 0; chartView.pointer = null; }
    const count = Math.min(all.length, chartView.count || all.length); chartView.offset = cl(chartView.offset, 0, all.length - count);
    const end = all.length - Math.round(chartView.offset), start = Math.max(0, end - count), c = all.slice(start, end), n = c.length;
    const L = 10, R = W - 78, T = 64, B = H - 32, pw = R - L, cw = pw / (n + 2), X = i => L + (i + .5) * cw;
    const candles = c.map((a, i) => { const seed = (start + i + 1) * 1.618 + K.indexOf(S.tab), span = Math.max(Math.abs(a.c - a.o), a.c * .012), wick = span * (.22 + .32 * Math.abs(Math.sin(seed))); return { ...a, h: Math.max(a.h, a.o, a.c) + wick, l: Math.max(.0001, Math.min(a.l, a.o, a.c) - wick) }; });
    const high = Math.max(...candles.map(a => a.h)), low = Math.min(...candles.map(a => a.l)), pad = (high - low) * .12 || 1, top = high + pad, bot = low - pad, Y = v => T + (top - v) / (top - bot) * (B - T);
    S.geo = { cw, n, L, R, T, B, start }; x.font = '11px ui-monospace,monospace';
    const line = (a, b, c, d, color, dash = []) => { x.strokeStyle = color; x.lineWidth = 1; x.setLineDash(dash); x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); x.setLineDash([]); };
    for (let i = 0; i <= 6; i++) { const y = T + (B - T) * i / 6; line(L, y, R, y, '#243040'); x.fillStyle = '#8796aa'; x.fillText(fmtP(top - (top - bot) * i / 6), R + 9, y + 4); }
    const ticks = Math.min(n, Math.max(2, Math.floor(pw / 100))); for (let j = 0; j < ticks; j++) { const i = Math.round(j * (n - 1) / Math.max(1, ticks - 1)); line(X(i), T, X(i), B, '#1d2837'); x.fillStyle = '#8796aa'; x.textAlign = 'center'; x.fillText(c[i].d || (c[i].t === 'Past' ? 'M −' + (all.length - start - i - 1) : c[i].t), cl(X(i), 40, R - 30), H - 11); } x.textAlign = 'left';
    x.save(); x.beginPath(); x.rect(L, T, pw, B - T); x.clip();
    if (S.ct) { x.beginPath(); candles.forEach((a, i) => i ? x.lineTo(X(i), Y(a.c)) : x.moveTo(X(i), Y(a.c))); x.strokeStyle = '#5c9bff'; x.lineWidth = 2; x.stroke(); x.lineTo(X(n - 1), B); x.lineTo(X(0), B); x.closePath(); const g = x.createLinearGradient(0, T, 0, B); g.addColorStop(0, '#4285ed35'); g.addColorStop(1, '#4285ed00'); x.fillStyle = g; x.fill(); }
    else candles.forEach((a, i) => { const col = a.c >= a.o ? '#26a69a' : '#ef5350', cx = Math.round(X(i)) + .5, w = Math.max(1, Math.min(17, cw * .68)); line(cx, Y(a.h), cx, Y(a.l), col); x.fillStyle = col; x.fillRect(cx - w / 2, Math.min(Y(a.o), Y(a.c)), w, Math.max(1.5, Math.abs(Y(a.o) - Y(a.c)))); });
    if (S.ma) { [[5, '#f5bf57'], [12, '#8d91ff']].forEach(([period, color]) => { x.beginPath(); let begun = false; c.forEach((a, i) => { const at = start + i; if (at < period - 1) return; const avg = all.slice(at - period + 1, at + 1).reduce((sum, a) => sum + a.c, 0) / period; begun ? x.lineTo(X(i), Y(avg)) : x.moveTo(X(i), Y(avg)); begun = true; }); x.strokeStyle = color; x.lineWidth = 1.5; x.stroke(); }); }
    x.restore(); line(R, T, R, B, '#324055'); line(L, B, R, B, '#324055');
    const last = all[all.length - 1], color = last.c >= last.o ? '#26a69a' : '#ef5350', ly = Y(last.c); if (ly >= T && ly <= B) { line(L, ly, R, ly, color, [4, 4]); x.fillStyle = color; x.fillRect(R, ly - 10, 78, 20); x.fillStyle = '#fff'; x.fillText(fmtP(last.c), R + 7, ly + 4); }
    let idx = n - 1; const p = chartView.pointer; if (p && p.x >= L && p.x < R && p.y >= T && p.y <= B) { idx = cl(Math.floor((p.x - L) / cw), 0, n - 1); line(X(idx), T, X(idx), B, '#8491a3', [3, 4]); line(L, p.y, R, p.y, '#8491a3', [3, 4]); x.fillStyle = '#37465a'; x.fillRect(R, p.y - 10, 78, 20); x.fillStyle = '#fff'; x.fillText(fmtP(top - (p.y - T) / (B - T) * (top - bot)), R + 7, p.y + 4); }
    const a = candles[idx]; x.font = 'bold 12px system-ui'; x.fillStyle = '#d8e1ee'; x.fillText(AS[S.tab].n.toUpperCase() + ' · 1M · RIPPLE', 12, 21); x.font = '11px ui-monospace,monospace'; x.fillStyle = a.c >= a.o ? '#26a69a' : '#ef5350';
    const readout = 'O ' + fmtP(a.o) + '   H ' + fmtP(a.h) + '   L ' + fmtP(a.l) + '   C ' + fmtP(a.c) + (a.d ? '   · ' + a.d : ''); x.fillText(readout, 12, 40); if (S.ma) { x.fillStyle = '#f5bf57'; x.fillText('SMA 5', 12, 55); x.fillStyle = '#8d91ff'; x.fillText('SMA 12', 72, 55); }
    if (!cv.dataset.bound) {
      cv.dataset.bound = '1';
      cv.onpointermove = e => { const r = cv.getBoundingClientRect(); chartView.pointer = { x: e.clientX - r.left, y: e.clientY - r.top }; if (chartView.drag) { chartView.offset = chartView.drag.offset + (e.clientX - chartView.drag.x) / S.geo.cw; } draw(); };
      cv.onpointerleave = () => { chartView.pointer = null; if (!chartView.drag) draw(); };
      cv.onpointerdown = e => { if (e.button !== 0) return; e.stopPropagation(); chartView.drag = { x: e.clientX, offset: chartView.offset }; cv.setPointerCapture(e.pointerId); };
      const release = () => { chartView.drag = null; }; cv.onpointerup = release; cv.onpointercancel = release;
      cv.onwheel = e => { e.preventDefault(); e.stopPropagation(); const total = agg(S.tab, TF[S.tf]).length; chartView.count = cl(Math.round((chartView.count || total) * (e.deltaY > 0 ? 1.2 : .8)), Math.min(6, total), total); draw(); };
      cv.ondblclick = () => { chartView.count = null; chartView.offset = 0; draw(); };
    }
  }
  let tt; function toast(m) { const e = $("toast"); e.textContent = m; e.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => e.classList.remove("on"), 3800) }
  function msg(t, x) { S.msgs.unshift([t, x, S.age]); S.unread++; hud() }
  function journal(t, x) { S.log.unshift([t, x]) }
  const inv = () => K.reduce((a, k) => a + S.h[k], 0), worth = () => S.cash + inv();
  function hud() {
    $("hCash").textContent = f$(S.cash); $("hCash").style.color = S.cash < 0 ? "#ef4444" : ""; $("hInv").textContent = f$(inv());
    $("hJob").textContent = S.age == 33 ? "Jobless (laid off)" : S.age < 25 ? "Junior Dev" : S.age < 29 ? "Software Engineer" : "Senior Engineer"; $("hAge").textContent = "Age " + S.age; $("hYr").textContent = "Year " + (S.age - 20) + " · Month " + (S.m + 1);
    $("vH").style.width = S.hp + "%"; $("vE").style.width = S.en + "%"; $("vP").style.width = S.hap + "%";
    const b = $("badge"); b.textContent = S.unread; b.style.display = S.unread ? "block" : "none";
    const g = $("go"); $("gw").style.display = S.age > 34 ? "none" : "flex"; g.disabled = $("skip").disabled = !!(S.busy || S.need); g.textContent = `▶ Next month · ${MO[S.m]}, age ${S.age} · ${S.slots} action${S.slots == 1 ? "" : "s"} left`
  }
  function vit() { S.hp = cl(S.hp, 0, 100); S.en = cl(S.en, 0, 100); S.hap = cl(S.hap, 0, 100) }
  function act(a) {
    if (S.busy || S.need) return; if (S.slots < 1) return toast("No actions left this year. Live the year ▶");
    if (a == "work") { if (S.en < 15) return toast("Too tired. Rest first."); const g = Math.round((SAL[S.age - 21] || 1500) * .3); S.cash += g; S.en -= 20; S.hap -= 4; S.hp -= 2; S.slots--; vit(); hud(); S.busy = 1; return workScene().then(() => { S.busy = 0; hud(); toast(`💼 Overtime shift: +${f$(g)}`) }) }
    if (a == "rest") { S.en += 30; S.hp += 8; S.hap += 3; S.slots--; vit(); hud(); return sleepAnim() }
    if (a == "travel") { if (S.cash < 600) return toast("A trip costs $600."); S.cash -= 600; S.hap += 18; S.en -= 10; S.hp += 3; S.slots--; vit(); hud(); S.busy = 1; return travelScene().then(() => { S.busy = 0; hud(); toast("✈️ Trip: -$600, big happiness boost") }) }
    S.slots--; vit(); hud()
  }
  const TT = { market: "📊 Stock Market", portfolio: "👛 Portfolio", journal: "📖 Journal", messages: "💬 Messages", settings: "⚙️ Settings" };
  function panel(p) {
    S.p = p || ""; const el = $("pnl"); $$("[data-p]").forEach(b => b.classList.toggle("act", !!p && b.dataset.p == p)); if (!p) { el.classList.remove("on"); return } el.classList.add("on");
    let h = `<div class="ph"><b>${TT[p]}</b><button class="ib" data-x="1">✕</button></div>`;
    if (p == "market") {
      h += `<div class="tabs">${K.map(k => `<button data-t="${k}" class="${k == S.tab ? "act" : ""}">${AS[k].n}</button>`).join("")}<span class="sp"></span>${Object.keys(TF).map(t => `<button data-tf="${t}" class="${t == S.tf ? "act" : ""}">${t}</button>`).join("")}<button data-ct="1">${S.ct ? "Line" : "Candles"}</button><button data-ma="1" class="${S.ma ? "act" : ""}">MA</button></div>
<div class="pr"><b id="px"></b><span id="chg"></span></div><small id="src"></small><div class="terminal"><canvas id="ch" aria-label="Interactive monthly candlestick price chart"></canvas><div class="chart-help">Scroll to zoom · Drag to pan · Double-click to reset <span>1 candle = 1 month</span></div></div>
<div class="al">${K.map((k, i) => `<label>${AS[k].n}<small>holding ${f$(S.h[k])}</small><input type="number" min="0" step="50" value="0" id="a${i}"></label>`).join("")}</div>
<div class="bud"><span>Cash ${f$(S.cash)}</span><span>Left to allocate: <b id="rem"></b></span></div>
<div class="pre"><button data-pre="4">Equal split</button><button data-pre="2">50/50</button><button data-pre="m">Max cash</button><button data-pre="0">Clear</button></div><button class="cta" id="buy">Invest</button>`}
    if (p == "portfolio") { h += K.map(k => { const v = S.h[k], c = S.c[k], g = v - c; return `<div class="row"><b>${AS[k].n} · ${f$(v)}</b><small>cost ${f$(c)}</small><em class="${g >= 0 ? "up" : "dn"}">${g >= 0 ? "+" : ""}${f$(g)} (${c ? (g / c * 100).toFixed(1) : "0.0"}%)</em><button data-sell="${k}" ${v < 1 ? "disabled" : ""}>Sell all</button></div>` }).join("") + `<div class="c2"><h5>Net worth</h5><p>${f$(worth() + eq())} = ${f$(S.cash)} cash + ${f$(inv())} invested${S.hv ? ` + ${f$(eq())} home equity` : ""}</p></div>` }
    if (p == "journal") { h += S.log.length ? S.log.map(l => `<div class="c2"><h5>${l[0]}</h5><p>${l[1]}</p></div>`).join("") : `<div class="c2"><p>Your choices and their ripple effects will be logged here.</p></div>` }
    if (p == "messages") { S.unread = 0; hud(); h += S.msgs.length ? S.msgs.map(l => `<div class="c2"><h5>${l[0]} · age ${l[2]}</h5><p>${l[1]}</p></div>`).join("") : `<div class="c2"><p>No messages yet.</p></div>` }
    if (p == "settings") { h += `<div class="c2"><h5>Controls</h5><p>W A S D walk · drag to look around · E interact at the desk (market) or bed (rest) · N skip a month</p></div><button class="cta" id="rs">Restart game</button>` }
    el.innerHTML = h; if (p == "market") { head(); draw(); rem();/* Chart interaction is installed by draw(). */ }
  }
  $("pnl").onclick = e => {
    const b = e.target.closest("button"), d = b ? b.dataset : {}; if (!b) return;
    if (d.x) panel(); else if (d.ct) { S.ct = !S.ct; b.textContent = S.ct ? "Line" : "Candles"; draw() } else if (d.ma) { S.ma = !S.ma; b.classList.toggle("act"); draw() } else if (d.t || d.tf) { if (d.t) S.tab = d.t; if (d.tf) S.tf = d.tf; $$("#pnl [data-t]").forEach(x => x.classList.toggle("act", x.dataset.t == S.tab)); $$("#pnl [data-tf]").forEach(x => x.classList.toggle("act", x.dataset.tf == S.tf)); head(); draw() }
    else if (d.pre != null) preset(d.pre); else if (b.id == "buy") buy(); else if (b.id == "rs") { clearSave(); location.reload() }
    else if (d.sell) { const k = d.sell; S.trades++; if (S.c[k] > 0 && S.h[k] < S.c[k] * .85) S.panic++; toast(`Sold ${AS[k].n} for ${f$(S.h[k])}`); S.cash += S.h[k]; S.h[k] = 0; S.c[k] = 0; hud(); save(); panel("portfolio") }
  };
  $("pnl").oninput = rem;
  function rem() { const t = K.reduce((a, k, i) => a + Math.max(0, +($("a" + i) || {}).value || 0), 0), r = S.cash - t, e = $("rem"); if (e) { e.textContent = f$(r); e.style.color = r < 0 ? "#ef4444" : "#10b981" } }
  function preset(p) { const c = Math.max(0, Math.floor(S.cash)), v = K.map((_, i) => p == "4" ? c / K.length : p == "2" ? (i < 2 ? c / 2 : 0) : p == "m" ? (i ? 0 : c) : 0); v.forEach((n, i) => $("a" + i).value = Math.floor(n)); rem() }
  function buy() {
    const v = K.map((k, i) => Math.max(0, +$("a" + i).value || 0)), t = v.reduce((a, b) => a + b, 0); if (!t) return toast("Enter an amount to invest"); if (t > S.cash) return toast("Not enough cash");
    S.trades++; S.cash -= t; K.forEach((k, i) => { S.h[k] += v[i]; S.c[k] += v[i] }); toast(`Invested ${f$(t)} across ${v.filter(x => x).length} asset(s)`); save(); panel("market")
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-p]"); if (b && b.closest("#side,#dock")) panel(S.p == b.dataset.p ? "" : b.dataset.p); const a = e.target.closest("[data-a]"); if (a) act(a.dataset.a) });
  $("gear").onclick = () => panel("settings"); $("go").onclick = () => adv(0); $("skip").onclick = () => adv(1);
  function dlg(h) { $("dc").innerHTML = h; $("dlg").classList.add("on") }
  function decide() {
    let d = D[S.age]; if (typeof d == "function") d = d(); if (!d || S.done[S.age]) return; S.need = 1; hud(); let sel = -1;
    const r = () => dlg(`<small>MAJOR DECISION</small><h2>${d.t}</h2><p>${d.x}</p>${d.o.map((o, i) => { const bad = o.ok && !o.ok(); return `<button class="opt ${i == sel ? "sel" : ""}" data-i="${i}" ${bad ? "disabled" : ""}><b>${o.n}</b><em>${bad ? "Not enough cash" : o.c}</em></button>` }).join("")}<button class="cta" id="cf" ${sel < 0 ? "disabled" : ""}>Confirm choice</button>`); r();
    $("dc").onclick = async e => {
      const b = e.target.closest("button"); if (!b) return; if (b.dataset.i != null) { sel = +b.dataset.i; r() } else if (b.id == "cf") {
        $("dc").onclick = null; const o = d.o[sel]; o.f(); S.done[S.age] = 1; vit(); $("dlg").classList.remove("on"); journal("Age " + S.age + " · " + d.t.split("· ")[1], o.m); msg("📓 Journal", o.m);
        if (S.age == 23) await carScene(sel, o.a); else if (S.age == 25) await homeScene(sel, o.a); else if (S.age == 27) await (sel < 2 ? weddingScene(sel == 0, o.a) : sel == 2 ? courthouseScene(o.a) : singleScene()); S.need = 0; if (S.age == 35) end(); else { hud(); toast(o.m) }
      }
    }
  }
  const INTRO = [{ h: `<div class="big">21</div><h1>You’ve turned 21.</h1><p>Adult life starts now, and every choice ripples forward.</p>` },
  { h: `<div class="big">💼</div><h1>You’ve landed your first job.</h1><p>$3,900 a month after tax, $3,000 in the bank, and a whole life ahead.</p>` },
  { h: `<div class="big">📈</div><h1>Now you can start investing in the stock market.</h1><div class="chips"><b>Apple</b><b>Microsoft</b><b>Amazon</b><b>Alphabet</b><b>Coca-Cola</b></div><p>Real market history. Your timeline stays hidden until the end.</p>` },
  { h: `<h1>Invest wisely.</h1><p>Month by month, from age 21 to 35, build the best tomorrow you can.</p>`, b: "Start your life ▶" }];
  function deck(L, done) {
    const el = $("intro"); let i = 0; el.classList.add("on");
    const r = () => {
      el.innerHTML = `<div class="sl">${L[i].h}</div><div class="dots">${L.map((_, j) => `<i class="${j == i ? "on" : ""}"></i>`).join("")}</div><button class="cta" id="nx">${L[i].b || "Continue"}</button>`;
      el.querySelectorAll("[data-n]").forEach(e => { const f = +e.dataset.f, n = +e.dataset.n, u = e.dataset.u || "", t0 = performance.now(), tk = t => { const p = Math.max(0, Math.min(1, (t - t0 - 600) / 1800)); e.textContent = u + Math.round(f + (n - f) * p).toLocaleString("en-US"); if (p < 1) requestAnimationFrame(tk) }; requestAnimationFrame(tk) })
    };
    r(); el.onclick = e => { if (e.target.id == "nx") { if (++i < L.length) r(); else { el.classList.remove("on"); el.innerHTML = ""; done && done() } } }
  }
  function over() { clearSave(); deck([{ h: `<div class="big">💔</div><h1>You’re unable to continue.</h1><p>You ran out of money with nothing left to sell, at age ${S.age}. Some lessons cost a lot.</p>`, b: "Restart your life ↻" }], () => location.reload()) }
  function end() {
    clearSave(); const nw = worth() + eq(), o = [[.072, "Dividend income engine"], [R(.03, .115), "All-in aggressive growth"], [.055, "Balanced buffer"]][S.plan], r = o[0], f = Math.pow(1 + r, 25), sv = Math.max(0, netAt(35) * 12), fv = Math.max(0, nw) * f + sv * (f - 1) / r;
    const held = K.filter(k => S.h[k] > 100).length, cs = S.cs / Math.max(1, S.g), sc = Math.round(cl(nw / 400000, 0, 1) * 40 + cl(1 - cs * 1.3, 0, 1) * 20 + cl(held / 5, 0, 1) * 15 + (S.panic ? 0 : 15) + (S.hp + S.hap) / 20),
      tier = nw >= 400000 ? "Tier 1 · Financial independence" : nw >= 200000 ? "Tier 2 · Financially stable" : "Tier 3 · Recovery mode", rk = sc >= 80 ? "Elite investor" : sc >= 60 ? "Smart investor" : sc >= 40 ? "Learning investor" : "Novice investor",
      d0 = `${MO[S0 % 12]} ${2008 + (S0 / 12 | 0)}`, d1 = `${MO[(S0 + 167) % 12]} ${2008 + ((S0 + 167) / 12 | 0)}`,
      L = [`At 35 you held ${held} asset${held == 1 ? "" : "s"} and kept about ${Math.round(cs * 100)}% of your wealth in idle cash on average.`, S.panic ? "You sold into a loss at least once. Panic selling locks in the damage." : "You never panic-sold into a loss. That discipline matters.", `You made ${S.trades} trade${S.trades == 1 ? "" : "s"} over 14 years.`, cs > .5 ? "Too much cash sat idle, so growth passed you by." : "You kept your money working for most of the journey.", `Your real market timeline: ${d0} to ${d1}.`];
    deck([{ h: `<div class="big" data-f="35" data-n="60">35</div><h1>Now you are 60.</h1><p>25 more years have passed, and your plan has been compounding in the background.</p>` },
    { h: `<h1>Your long-term plan</h1><p><b>${o[1]}</b> · about ${(r * 100).toFixed(1)}% a year</p><div class="big" data-f="${Math.round(nw)}" data-n="${Math.round(fv)}" data-u="$">$0</div><p>You had ${f$(nw)} at 35 and kept adding ${f$(sv)} a year. This is a projection, not a promise.</p>` },
    { h: `<h1>Your investor report</h1><div class="sc" data-f="0" data-n="${sc}">0</div><p><b>${rk}</b> · ${tier}</p><div class="ls">${L.map(x => `<span>• ${x}</span>`).join("")}</div>`, b: "Play again ↻" }], () => location.reload())
  }
  function tip() { if (S.age > 34) return; const up = DATA.msft[S0 + S.g + 12] > DATA.msft[S0 + S.g], say = Math.random() < .65 ? up : !up; msg("📰 Market analyst", `Desk chatter says big tech looks ${say ? "bullish" : "shaky"} over the next 12 months. (Analysts are not always right.)`) }
  function newAge() { hud(); tip(); if (S.age == 33 && !S.done[33]) { S.need = 1; hud(); recessionScene().then(() => { S.need = 0; decide() }) } else if (D[S.age]) decide(); else toast(`Age ${S.age}: invest, take actions, then live the month.`) }
  async function adv(fast) {
    if (S.busy || S.need || S.age > 34) return; S.busy = 1; const a = S.age, c = CL[a], net = a == 33 ? 0 : netAt(a), b = $("ban"), T = {};
    K.forEach(k => { const o = P[k]; T[k] = { o, n: AS[k].real ? DATA[k][S0 + S.g + 1] : o * (Math.pow(c.m[k], 1 / 12) + R(-1, 1) * AS[k].v * 2.4) } });
    b.textContent = `Month ${S.m + 1} of 12 · age ${a}`; b.classList.add("on"); hud();
    if (!fast) for (let i = 1; i <= 6; i++) { K.forEach(k => mv(k, T[k].o + (T[k].n - T[k].o) * i / 6)); glow(S.m * 6 + i); hud(); if (S.p == "market") head(); await sleep(60) }
    K.forEach(k => { mv(k, T[k].n); HI[k].push({ o: T[k].o, c: T[k].n, h: Math.max(T[k].o, T[k].n), l: Math.min(T[k].o, T[k].n), t: MO[S.m] + " " + a, d: AS[k].real ? MO[(S0 + S.g + 1) % 12] + " " + (2008 + ((S0 + S.g + 1) / 12 | 0)) : undefined }); if (HI[k].length > 400) HI[k].shift() });
    S.cash += net; S.g++; if (S.hv) { S.hv *= 1 + .035 / 12; S.ln = Math.max(0, S.ln * (1 + S.hr / 12) - S.pi) } const w = worth(); S.cs += w > 0 ? cl(S.cash / w, 0, 1) : 1;
    if (S.m == 5 && Math.random() < .75) { const e = EV[Math.random() * EV.length | 0]; S.cash += e[2]; S.hp += e[3]; S.hap += e[4]; S.en += e[5]; vit(); msg(e[0], e[1]); toast(e[0] + " " + e[1]) }
    S.m++; b.classList.remove("on");
    if (S.cash < -2500 && inv() < 1000) { S.busy = 0; hud(); return over() }
    if (S.m == 12) {
      journal(`Age ${a} → ${a + 1}`, `Saved ${f$(net * 12)}${exTot() ? ` after ${f$(exTot())}/mo of car and housing costs` : ""}. Net worth now ${f$(worth())}.`); S.age++; S.m = 0; S.slots = 3; S.hp -= 2; S.hap -= 2; S.en += 25;
      if (S.hp < 25) { S.cash -= 700; S.hp += 15; msg("🏥 Hospital", "Low health caught up with you: -$700. Rest more.") } vit(); S.busy = 0; glow(0); save(); newAge()
    } else { S.busy = 0; hud() }
    if (S.p == "market") { head(); draw() } if (S.p == "portfolio") panel("portfolio"); save()
  }

  function travelScene() {
    const cl = k => Array.from({ length: 7 }, (_, i) => { const x = i * 290 + R(0, 120), y = R(120, 620), sc = R(.6, 1.4); return `<g transform="translate(${x},${y}) scale(${sc.toFixed(2)})" opacity="${k ? ".55" : ".9"}"><ellipse cx="0" cy="0" rx="90" ry="34" fill="#fff"/><ellipse cx="-40" cy="-18" rx="50" ry="36" fill="#fff"/><ellipse cx="34" cy="-26" rx="56" ry="44" fill="#fff"/></g>` }).join("");
    const pl = `<g transform="scale(1.15)"><path d="M-260 0 Q-250 -34 -190 -36 L230 -36 Q300 -30 320 0 Q300 30 230 34 L-190 34 Q-250 32 -260 0Z" fill="#f8fafc"/><path d="M230 -36 Q300 -30 320 0 L250 0Z" fill="#cbd5e1"/><path d="M262 -22 Q290 -16 304 -4 L262 -4Z" fill="#1e3a8a"/>
<path d="M-40 10 L-150 170 L-90 170 L80 14Z" fill="#cbd5e1"/><path d="M-30 -14 L-110 -110 L-70 -110 L60 -14Z" fill="#94a3b8"/><path d="M-200 -34 L-260 -140 L-215 -140 L-150 -34Z" fill="#ef4444"/><path d="M-240 -6 L-300 -46 L-270 -46 L-210 -6Z" fill="#ef4444"/>
<rect x="-120" y="40" width="80" height="34" rx="16" fill="#64748b"/><rect x="-40" y="52" width="14" height="10" fill="#334155"/>
${Array.from({ length: 12 }, (_, i) => `<circle cx="${-150 + i * 30}" cy="-10" r="7" fill="#38bdf8"/>`).join("")}<rect x="-190" y="12" width="420" height="8" fill="#ef4444"/></g>`;
    const dest = ["🗼", "🗽", "🏝️", "🏯", "🕌"][Math.random() * 5 | 0];
    return cut(`<defs><linearGradient id="ts" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e6fd9"/><stop offset=".7" stop-color="#7cc4ff"/><stop offset="1" stop-color="#ffd6a5"/></linearGradient><radialGradient id="tsun"><stop offset="0" stop-color="#fff7c2"/><stop offset="1" stop-color="#fff7c2" stop-opacity="0"/></radialGradient></defs>
<rect width="1600" height="900" fill="url(#ts)"/><circle cx="1350" cy="180" r="260" fill="url(#tsun)"/><circle cx="1350" cy="180" r="70" fill="#fff7c2"/>
<g class="cl" style="animation-duration:14s">${cl(1)}<g transform="translate(1900,0)">${cl(1)}</g></g>
<path d="M-50 900 Q300 760 600 820 T1200 790 T1700 830 L1700 900Z" fill="#2f7a5a" opacity=".7"/>
<path class="trail" d="M-400 640 Q700 420 1300 320 T2400 160" stroke="#fff" stroke-width="6" fill="none" opacity=".7" stroke-linecap="round"/>
<g class="fly"><g transform="translate(0,380)">${pl}</g></g>
<g class="cl" style="animation-duration:7s">${cl(0)}<g transform="translate(1900,0)">${cl(0)}</g></g>
<text class="pop" style="--d:3.6s" x="800" y="380" text-anchor="middle" font-size="140">${dest}</text>`, `<h2 style="--d:3.4s">✈️ Bon voyage!</h2><p style="--d:3.9s">-$600 for the trip, +big happiness. Memories over money, sometimes.</p>`, 6500)
  }
  function workScene() {
    const lines = Array.from({ length: 14 }, (_, i) => `<rect x="${30 + (i % 3) * 18}" y="${30 + i * 20}" width="${R(60, 190) | 0}" height="8" rx="4" fill="${["#38bdf8", "#10b981", "#f59e0b", "#f472b6"][i % 4]}"/>`).join("");
    return cut(`<defs><linearGradient id="wk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e293b"/></linearGradient><radialGradient id="scr"><stop offset="0" stop-color="#7dd3fc" stop-opacity=".5"/><stop offset="1" stop-color="#7dd3fc" stop-opacity="0"/></radialGradient><clipPath id="sc"><rect x="0" y="0" width="300" height="190" rx="6"/></clipPath></defs>
<rect width="1600" height="900" fill="url(#wk)"/>
<g opacity=".9"><rect x="980" y="110" width="520" height="420" rx="10" fill="#0b1226" stroke="#334155" stroke-width="6"/></g>
<rect x="980" y="110" width="520" height="420" fill="#0b1226" opacity="0"/><g transform="translate(990,120) scale(.31,.64)" opacity=".9">${city("#1c2a4d")}</g>
<rect x="1236" y="110" width="8" height="420" fill="#334155"/><rect x="980" y="316" width="520" height="8" fill="#334155"/>
<g class="rise" style="--d:2.4s"><g transform="translate(520,-40)"><rect x="120" y="150" width="300" height="200" rx="14" fill="#0b1020cc" stroke="#10b981" stroke-width="3"/><polyline class="draw" points="150,320 200,290 240,300 290,240 330,250 390,180" stroke="#10b981" stroke-width="6" fill="none" stroke-linecap="round"/><text x="150" y="190" font-size="24" fill="#a7f3d0" font-family="system-ui" font-weight="800">Q3 Revenue ▲</text></g></g>
<rect y="640" width="1600" height="30" fill="#6b4a2f"/><rect y="670" width="1600" height="230" fill="#3b2a1c"/>
<ellipse cx="700" cy="500" rx="320" ry="220" fill="url(#scr)" class="glow"/>
<g transform="translate(580,450)"><rect x="-10" y="0" width="320" height="200" rx="12" fill="#cbd5e1"/><g transform="translate(0,5)" clip-path="url(#sc)"><rect width="300" height="190" fill="#0b1226"/><g class="code">${lines}<g transform="translate(0,300)">${lines}</g></g></g>
<path d="M-60 200 L370 200 L400 222 L-90 222Z" fill="#94a3b8"/><circle cx="155" cy="100" r="10" fill="#e2e8f0" opacity=".4"/></g>
<rect x="1040" y="590" width="40" height="52" rx="6" fill="#f8fafc"/><path d="M1080 600 q22 6 0 26" stroke="#f8fafc" stroke-width="6" fill="none"/><path d="M1050 580 q8 -20 0 -40 M1066 580 q8 -20 0 -40" stroke="#cbd5e1" stroke-width="3" fill="none" opacity=".6" class="tw"/>
<g transform="translate(360,240)"><g class="nod"><rect x="-8" y="70" width="36" height="30" fill="#e2b48f"/><circle cx="10" cy="40" r="52" fill="#e2b48f"/><path d="M-44 30 Q-44 -20 10 -18 Q66 -20 64 30 Q50 0 0 4 Q-30 6 -44 30Z" fill="#1f140a"/><circle cx="34" cy="44" r="5" fill="#222"/><path d="M30 70 Q42 74 50 68" stroke="#a0534a" stroke-width="4" fill="none"/><rect x="22" y="30" width="30" height="20" rx="6" fill="none" stroke="#111" stroke-width="3"/></g>
<path d="M-70 100 Q10 80 90 100 L120 400 L-90 400Z" fill="#1e293b"/><path d="M0 100 L30 180 L60 100Z" fill="#f8fafc"/><path d="M24 106 L30 200 L40 106Z" fill="#b91c1c"/><path d="M0 100 L30 180 L-10 240Z M60 100 L30 180 L80 240Z" fill="#0f172a"/>
<g class="type"><path d="M60 140 Q170 200 250 240 L240 270 Q150 240 50 190Z" fill="#1e293b"/><circle cx="254" cy="256" r="18" fill="#e2b48f"/><rect x="226" y="236" width="18" height="34" fill="#f8fafc"/></g>
<g class="type2"><path d="M40 160 Q170 230 290 262 L280 290 Q150 270 30 210Z" fill="#273449"/><circle cx="296" cy="276" r="18" fill="#e2b48f"/></g></g>
${Array.from({ length: 6 }, (_, k) => `<text class="coin" style="--d:${2.8 + k * .25}s" x="${880 + k * 50}" y="${600 - (k % 2) * 20}" font-size="44">💵</text>`).join("")}`, `<h2>💼 Overtime grind</h2><p>Suit on, laptop open, deadlines crushed. Your wallet grows, your energy drops.</p>`, 6000)
  }
  function courthouseScene(a) {
    return cut(`<defs><linearGradient id="ch" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cbd5e1"/><stop offset="1" stop-color="#94a3b8"/></linearGradient></defs><rect width="1600" height="900" fill="url(#ch)"/>
<path d="M420 260 L800 120 L1180 260Z" fill="#e2e8f0"/><rect x="430" y="260" width="740" height="30" fill="#f1f5f9"/>${Array.from({ length: 6 }, (_, k) => `<rect x="${470 + k * 130}" y="290" width="44" height="400" fill="#f8fafc"/>`).join("")}<rect x="400" y="690" width="800" height="30" fill="#e2e8f0"/><rect y="720" width="1600" height="180" fill="#64748b"/>
<text x="800" y="230" text-anchor="middle" font-size="34" font-weight="900" fill="#475569" font-family="system-ui">CITY HALL</text>
<g class="wl"><g class="step">${fig(730, "#334155")}</g></g><g class="wr"><g class="step">${fig(870, 0, 1)}</g></g>
<g class="pop" style="--d:2.6s"><rect x="80" y="380" width="240" height="150" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="4"/><text x="200" y="420" text-anchor="middle" font-size="22" font-weight="800" fill="#92400e" font-family="system-ui">MARRIAGE LICENSE</text><path d="M110 480 q30 -30 60 0 t60 0 t60 0" stroke="#1e3a8a" stroke-width="3" fill="none" class="draw"/></g>
<g class="rise" style="--d:3.2s"><rect x="1220" y="300" width="300" height="220" rx="14" fill="#0b1020dd" stroke="#10b981" stroke-width="4"/><text x="1370" y="350" text-anchor="middle" font-size="26" font-weight="900" fill="#10b981" font-family="system-ui">S&amp;P 500 +${f$(a)}</text><polyline class="draw" points="1250,490 1300,470 1340,480 1390,430 1430,440 1490,370" stroke="#10b981" stroke-width="6" fill="none"/></g>
${Array.from({ length: 8 }, (_, k) => `<text class="coin" style="--d:${3 + k * .15}s" x="${1240 + k * 34}" y="290" font-size="34">🪙</text>`).join("")}<text class="pop" style="--d:3s" x="800" y="350" text-anchor="middle" font-size="70">💍</text>`, `<h2>🏛️ A quick courthouse wedding</h2><p>Signed, sealed, and ${f$(a)} invested instead of a party.</p>`, 6500)
  }
  /* ---------- No-marriage cutscene ---------- */
  function singleScene() { return cut(roadBg("#1e3a6b", "#f2b98a") + `<g class="wr"><g class="step">${fig(800, "#1e293b")}</g></g><text class="pop" style="--d:2.6s" x="800" y="330" text-anchor="middle" font-size="90">\u{1F4BC}</text><text class="pop" style="--d:3.1s" x="560" y="400" font-size="60">\u{1F4C8}</text><text class="pop" style="--d:3.4s" x="1000" y="400" font-size="60">\u2708\uFE0F</text>`, `<h2>\u{1F6B6} You chose to stay single</h2><p>Career, friends and freedom first. No ceremony costs and no pressure.</p>`, 6000) }
  /* ---------- Housing cutscenes ---------- */
  function homeScene(i, a) {
    const sky = (x, y) => `<defs><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${x}"/><stop offset="1" stop-color="${y}"/></linearGradient></defs><rect width="1600" height="900" fill="url(#hg)"/><circle cx="1300" cy="190" r="90" fill="#ffe0a8" opacity=".9"/>`,
      gr = (c, y = 700) => `<rect y="${y}" width="1600" height="${900 - y}" fill="${c}"/>`,
      W = (x, y, w, h, c = "#bfe3f2", d = 0) => `<rect class="fade" style="--d:${d}s" x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${c}"/>`,
      tag = (s, c, x, y) => `<g class="pop" style="--d:2.4s"><g transform="translate(${x},${y}) rotate(-8)"><rect x="-150" y="-48" width="300" height="96" rx="12" fill="#fff" stroke="${c}" stroke-width="8"/><text y="14" text-anchor="middle" font-size="36" font-weight="900" fill="${c}" font-family="system-ui">${s}</text></g></g>`,
      key = `<text class="pop" style="--d:3s" x="800" y="170" text-anchor="middle" font-size="90">\u{1F511}</text>`,
      cap = (h, p) => `<h2>${h}</h2><p>${p}</p>`;
    if (i == 0) return cut(sky("#6fa3e0", "#fbd9a8") + gr("#4b5563") + `<rect x="520" y="180" width="560" height="520" fill="#9a6a52"/>` + Array.from({ length: 16 }, (_, k) => W(560 + (k % 4) * 120, 220 + (k / 4 | 0) * 110, 80, 70, "#bfe3f2", .2 + k * .05)).join("") + `<rect x="760" y="600" width="80" height="100" fill="#3b2a1c"/>` + Array.from({ length: 4 }, (_, k) => `<g class="wl" style="animation-delay:${k * .3}s"><rect x="${140 + k * 90}" y="${640 - (k % 2) * 30}" width="80" height="${60 + (k % 2) * 30}" fill="#c08a4a" stroke="#7a5424" stroke-width="3"/></g>`).join("") + tag("LEASE SIGNED", "#2563eb", 330, 380) + `<g class="rise" style="--d:3s"><rect x="1140" y="320" width="340" height="200" rx="14" fill="#0b1020dd" stroke="#10b981" stroke-width="4"/><text x="1310" y="368" text-anchor="middle" font-size="26" font-weight="900" fill="#10b981" font-family="system-ui">S&amp;P 500 +${f$(a.inv)}</text><polyline class="draw" points="1170,490 1220,470 1260,480 1310,430 1350,440 1440,380" stroke="#10b981" stroke-width="6" fill="none"/></g>`, cap("\u{1F3E2} You kept renting", `Lease renewed and ${f$(a.inv)} invested. Flexibility over a mortgage.`), 6000);
    if (i == 1) return cut(sky("#2a3a78", "#f0a679") + city("#1c2340") + gr("#374151", 640) + `<rect x="600" y="90" width="400" height="550" fill="#475569"/>` + Array.from({ length: 24 }, (_, k) => `<rect class="tw" style="animation-delay:${(k % 7) * .2}s" x="${630 + (k % 3) * 120}" y="${120 + (k / 3 | 0) * 64}" width="90" height="44" rx="4" fill="#ffd27a"/>`).join("") + `<rect x="760" y="580" width="80" height="60" fill="#1e293b"/>` + tag("SOLD", "#dc2626", 330, 420) + key, cap("\u{1F3D9}\uFE0F Your first home: a city condo", `${f$(a.P)} at ${a.rt}% \u00b7 ${f$(a.mo)}/mo all-in. Smaller space, lower bills.`), 6000);
    if (i == 2) return cut(sky("#7cc4ff", "#ffe9c2") + gr("#4ea05a") + `<rect x="520" y="420" width="560" height="280" fill="#e8d5b5"/><path d="M480 430 L800 220 L1120 430Z" fill="#b45309"/><rect x="950" y="240" width="50" height="110" fill="#7c2d12"/><rect x="770" y="560" width="70" height="140" fill="#7c3f1d"/>` + W(580, 480, 120, 100, "#bfe3f2", .4) + W(900, 480, 120, 100, "#bfe3f2", .6) + Array.from({ length: 22 }, (_, k) => `<rect x="${40 + k * 28}" y="640" width="14" height="70" fill="#fff"/>`).join("") + `<rect x="1250" y="500" width="30" height="200" fill="#7a4a2a"/><circle cx="1265" cy="470" r="90" fill="#2f8f4e"/>` + tag("SOLD", "#dc2626", 300, 500) + key, cap("\u{1F3E1} Your first home: a family house", `${f$(a.P)} at ${a.rt}% \u00b7 ${f$(a.mo)}/mo all-in. Keys in hand, equity growing.`), 6500);
    return cut(sky("#1e1b4b", "#f472b6") + gr("#14532d") + `<rect x="380" y="380" width="840" height="320" fill="#e5e7eb"/><rect x="560" y="250" width="480" height="140" fill="#cbd5e1"/>` + Array.from({ length: 8 }, (_, k) => `<rect class="tw" style="animation-delay:${(k % 4) * .25}s" x="${410 + k * 100}" y="440" width="80" height="160" fill="#ffd27a"/>`).join("") + `<ellipse cx="800" cy="810" rx="380" ry="60" fill="#38bdf8"/><ellipse class="glow" cx="800" cy="810" rx="300" ry="30" fill="#e0f2fe"/>` + [[260, "#f472b6"], [1340, "#fde68a"]].map(([x, c], k) => `<g class="fw" style="animation-delay:${2.6 + k * .5}s">${Array.from({ length: 14 }, (_, j) => `<line x1="${x}" y1="200" x2="${x + Math.cos(j / 14 * 6.28) * 110}" y2="${200 + Math.sin(j / 14 * 6.28) * 110}" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`).join("")}</g>`).join("") + Array.from({ length: 6 }, (_, k) => `<text class="coin" style="--d:${3 + k * .25}s" x="${1240 + k * 45}" y="330" font-size="40">\u{1F4B8}</text>`).join("") + tag("30-YR MORTGAGE", "#7c3aed", 330, 330) + key, cap("\u{1F3F0} A dream house, stretched", `${f$(a.P)} at ${a.rt}% \u00b7 ${f$(a.mo)}/mo all-in. Stunning, and the mortgage shapes every month.`), 7000)
  }
  /* ---------- Cutscenes ---------- */
  function cut(svg, cap, ms) {
    return new Promise(res => {
      const el = $("cut"); el.innerHTML = `<div class="bars"></div><svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">${svg}</svg><div class="cap">${cap}</div><button class="sk">Skip ⏭</button>`; el.classList.add("on"); let t;
      const done = () => { clearTimeout(t); el.classList.remove("on"); el.innerHTML = ""; res() }; t = setTimeout(done, ms); el.querySelector(".sk").onclick = done
    })
  }
  const city = (c) => { let s = ""; for (let i = 0, x = 0; x < 1600; i++) { const w = 60 + (i * 37 % 70), h = 120 + (i * 83 % 230); s += `<rect x="${x}" y="${640 - h}" width="${w}" height="${h}" fill="${c}"/>`; for (let j = 0; j < h - 30; j += 28)for (let k = 10; k < w - 14; k += 20)if ((i * 7 + j + k) % 3 == 0) s += `<rect x="${x + k}" y="${640 - h + j + 14}" width="8" height="12" fill="#ffd27a" opacity=".55"/>`; x += w + 6 } return s };
  const roadBg = (a, b) => `<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="1600" height="900" fill="url(#sk)"/><circle cx="1260" cy="240" r="95" fill="#ffe0a8" opacity=".9"/><circle cx="1260" cy="240" r="160" fill="#ffe0a8" opacity=".12"/>${city("#1c2340")}
<rect y="640" width="1600" height="260" fill="#23262f"/><rect y="632" width="1600" height="12" fill="#4a4f5d"/><rect y="880" width="1600" height="20" fill="#3a3f4d"/><g class="dash">${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 160}" y="762" width="90" height="10" rx="4" fill="#e5e7eb"/>`).join("")}</g>`;
  const wheel = (x, y, r, rim) => `<g class="wh"><circle cx="${x}" cy="${y}" r="${r}" fill="#111"/><circle cx="${x}" cy="${y}" r="${r * .55}" fill="${rim}"/>${[0, 60, 120].map(a => `<rect x="${x - r * .5}" y="${y - 3}" width="${r}" height="6" fill="#555" transform="rotate(${a} ${x} ${y})"/>`).join("")}<circle cx="${x}" cy="${y}" r="${r * .16}" fill="#222"/></g>`;
  const shadow = (x, w) => `<ellipse cx="${x}" cy="702" rx="${w}" ry="14" fill="#000" opacity=".45"/>`;
  function carScene(i, a) {
    if (i == 0) return cut(roadBg("#5b86c4", "#f2b98a") + `<g class="car"><g transform="translate(600,516)">${shadow(196, 190)}<g class="bob">
<path d="M20 120 Q18 82 60 76 L112 70 L160 22 Q170 12 192 12 L292 12 Q312 12 322 32 L352 80 Q372 86 374 112 L374 142 Q374 152 362 152 L30 152 Q18 152 18 140Z" fill="#6f9aa8"/>
<path d="M126 70 L170 26 L236 26 L236 70Z" fill="#b9dde8"/><path d="M248 26 L304 26 L330 70 L248 70Z" fill="#b9dde8"/><rect x="238" y="22" width="8" height="50" fill="#5a7f8c"/>
<path d="M20 112 L374 112 L374 124 L20 124Z" fill="#5a7f8c"/><circle cx="150" cy="128" r="9" fill="#8a5a3a" opacity=".7"/><circle cx="290" cy="100" r="6" fill="#8a5a3a" opacity=".6"/><path d="M205 92 q14 6 22 0" stroke="#4b6873" stroke-width="3" fill="none"/>
<rect x="352" y="92" width="20" height="14" rx="4" fill="#ffe9a8"/><rect x="18" y="94" width="14" height="14" rx="3" fill="#c0392b"/><rect x="330" y="138" width="46" height="10" rx="4" fill="#3a3f4d"/><rect x="16" y="138" width="40" height="10" rx="4" fill="#3a3f4d"/></g>
${wheel(96, 152, 34, "#9aa3ad")}${wheel(300, 152, 34, "#9aa3ad")}</g></g>
<g class="pop" style="--d:2.7s"><g transform="translate(1080,300) rotate(-12)"><rect x="-150" y="-50" width="300" height="100" rx="14" fill="none" stroke="#10b981" stroke-width="8"/><text x="0" y="16" text-anchor="middle" font-size="42" font-weight="900" fill="#10b981" font-family="system-ui">PAID IN CASH</text></g></g>
<text class="pop" style="--d:3.1s" x="780" y="440" font-size="70">🔑</text>`, `<h2>🔑 Your first car: a used hatchback</h2><p>Paid ${f$(a.price)} in cash. A few dents, no loan payments.</p>`, 6000);
    if (i == 1) return cut(roadBg("#1e3a6b", "#e88a6a") + `<defs><linearGradient id="red" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff4d4d"/><stop offset=".55" stop-color="#c81e1e"/><stop offset="1" stop-color="#7a0f0f"/></linearGradient>
<clipPath id="cb"><path d="M0 125 Q0 95 40 90 L150 80 Q205 30 265 25 L375 25 Q425 28 475 80 L545 92 Q580 98 582 120 L582 140 Q582 152 566 152 L16 152 Q0 152 0 140Z"/></clipPath></defs>
<g class="car"><g transform="translate(500,512)">${shadow(290, 280)}<g class="bob">
<path d="M0 125 Q0 95 40 90 L150 80 Q205 30 265 25 L375 25 Q425 28 475 80 L545 92 Q580 98 582 120 L582 140 Q582 152 566 152 L16 152 Q0 152 0 140Z" fill="url(#red)"/>
<path d="M170 80 Q215 40 265 36 L300 36 L300 80Z" fill="#1d2b3a"/><path d="M312 36 L372 36 Q410 40 450 80 L312 80Z" fill="#1d2b3a"/><path d="M180 76 Q220 46 262 42" stroke="#9fd0ff" stroke-width="4" fill="none" opacity=".6"/>
<path d="M30 108 L570 108" stroke="#ff9c9c" stroke-width="3" opacity=".7"/><rect x="540" y="98" width="38" height="12" rx="6" fill="#fff6c8"/><rect x="2" y="100" width="22" height="10" rx="4" fill="#ff2b2b"/><rect x="250" y="96" width="30" height="5" rx="2" fill="#7a0f0f"/>
<path d="M560 98 L1100 60 L1100 160 L560 112Z" fill="#fff6c8" class="glow"/>
<g clip-path="url(#cb)"><rect class="shine" x="60" y="0" width="70" height="160" fill="#fff" opacity=".45"/></g></g>
${wheel(122, 152, 38, "#e5e7eb")}${wheel(456, 152, 38, "#e5e7eb")}</g></g>
<g class="pop" style="--d:2.7s"><g transform="translate(330,250) rotate(-8)"><rect x="-170" y="-55" width="340" height="110" rx="14" fill="#0b1020cc" stroke="#f59e0b" stroke-width="6"/><text x="0" y="-6" text-anchor="middle" font-size="36" font-weight="900" fill="#f59e0b" font-family="system-ui">FINANCED</text><text x="0" y="34" text-anchor="middle" font-size="28" fill="#fde68a" font-family="system-ui">${f$(a.pm)} / month</text></g></g>
${Array.from({ length: 12 }, (_, k) => `<g class="pop" style="--d:${3 + k * .12}s"><rect x="${1040 + (k % 6) * 70}" y="${200 + (k / 6 | 0) * 70}" width="58" height="58" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="3"/><text x="${1069 + (k % 6) * 70}" y="${238 + (k / 6 | 0) * 70}" text-anchor="middle" font-size="20" fill="#fecaca" font-family="system-ui">${f$(-a.pm)}</text></g>`).join("")}
<text class="fade" style="--d:3s" x="1240" y="370" text-anchor="middle" font-size="22" fill="#fecaca" font-family="system-ui">every month, for years</text>`, `<h2>✨ A brand-new sedan, on finance</h2><p>Shiny and fast, and ${f$(a.pm)} leaves your account every month for 5 years.</p>`, 6500);
    return cut(roadBg("#5b86c4", "#f2b98a") + `<g class="car"><g transform="translate(380,430)">${shadow(380, 380)}<g class="bob"><rect x="0" y="0" width="760" height="230" rx="26" fill="#f2b705"/><rect x="0" y="150" width="760" height="22" fill="#1f4e79"/>
${Array.from({ length: 7 }, (_, k) => `<rect x="${30 + k * 100}" y="30" width="80" height="80" rx="10" fill="#b9dde8"/>`).join("")}<rect x="720" y="30" width="30" height="120" rx="6" fill="#b9dde8"/><rect x="738" y="180" width="20" height="16" rx="4" fill="#fff6c8"/></g>
${wheel(140, 232, 40, "#9aa3ad")}${wheel(620, 232, 40, "#9aa3ad")}</g></g><text class="pop" style="--d:2.7s" x="1280" y="300" font-size="80">🚌</text>`, `<h2>🚌 You hopped on the bus</h2><p>$100 a month, and your savings keep working for you.</p>`, 5500)
  }
  const fig = (x, suit, bride) => bride ? `<g transform="translate(${x},420)"><path d="M-20 70 Q-40 40 -6 20 L6 20 Q40 40 20 70Z" fill="#f8fafc"/><path d="M-12 60 L-90 270 L90 270 L12 60Z" fill="#fdfdfd"/><path d="M-90 270 L90 270" stroke="#e2e8f0" stroke-width="6"/>
<path d="M-28 -10 Q-70 120 -60 230 L-20 40Z" fill="#fff" opacity=".45"/><circle cx="0" cy="0" r="30" fill="#e8b994"/><path d="M-32 -2 Q-30 -40 0 -38 Q32 -40 32 -2 Q24 -22 0 -22 Q-24 -22 -32 -2Z" fill="#5a3518"/><circle cx="0" cy="-40" r="14" fill="#5a3518"/>
<circle cx="-10" cy="2" r="3" fill="#222"/><circle cx="10" cy="2" r="3" fill="#222"/><path d="M-8 14 Q0 20 8 14" stroke="#a0534a" stroke-width="3" fill="none"/><circle cx="-28" cy="110" r="22" fill="#f472b6"/><circle cx="-40" cy="100" r="10" fill="#fb7185"/><circle cx="-18" cy="96" r="10" fill="#fda4af"/></g>`
    : `<g transform="translate(${x},420)"><rect x="-34" y="34" width="68" height="120" rx="14" fill="${suit}"/><path d="M-8 34 L0 70 L8 34Z" fill="#fff"/><path d="M-4 40 L0 90 L4 40Z" fill="#b91c1c"/><rect x="-30" y="150" width="26" height="110" rx="8" fill="${suit}"/><rect x="4" y="150" width="26" height="110" rx="8" fill="${suit}"/>
<rect x="-34" y="256" width="32" height="14" rx="6" fill="#111"/><rect x="2" y="256" width="32" height="14" rx="6" fill="#111"/><rect x="-50" y="40" width="18" height="100" rx="8" fill="${suit}"/><rect x="32" y="40" width="18" height="100" rx="8" fill="${suit}"/>
<rect x="-8" y="18" width="16" height="18" fill="#e2b48f"/><circle cx="0" cy="0" r="30" fill="#e2b48f"/><path d="M-31 -4 Q-30 -38 0 -36 Q30 -38 31 -4 Q20 -26 -10 -22 Q-26 -20 -31 -4Z" fill="#2a1a0c"/>
<circle cx="-10" cy="2" r="3" fill="#222"/><circle cx="10" cy="2" r="3" fill="#222"/><path d="M-8 14 Q0 20 8 14" stroke="#a0534a" stroke-width="3" fill="none"/></g>`;
  function weddingScene(lav, a) {
    const n = lav ? 150 : 55, C = ["#f59e0b", "#f472b6", "#10b981", "#38bdf8", "#fde68a", "#fff"];
    const conf = Array.from({ length: n }, () => `<rect class="cf" x="${R(0, 1600) | 0}" y="-40" width="${R(8, 16) | 0}" height="${R(14, 26) | 0}" fill="${C[Math.random() * 6 | 0]}" style="animation-duration:${R(2.2, 4).toFixed(2)}s;animation-delay:${R(2.7, 4.6).toFixed(2)}s"/>`).join("");
    const lights = lav ? Array.from({ length: 30 }, (_, k) => `<circle class="tw" cx="${k * 56 + 20}" cy="${90 + Math.sin(k / 2) * 30}" r="9" fill="#fde68a" style="animation-delay:${(k % 5) * .2}s"/>`).join("") + `<path d="M0 90 ${Array.from({ length: 30 }, (_, k) => `L${k * 56 + 20} ${90 + Math.sin(k / 2) * 30}`).join(" ")}" stroke="#665" stroke-width="2" fill="none"/>` : "";
    const fw = lav ? [[260, 220, "#f472b6"], [1340, 180, "#fde68a"], [1100, 300, "#38bdf8"]].map(([x, y, c], k) => `<g class="fw" style="animation-delay:${2.8 + k * .5}s">${Array.from({ length: 14 }, (_, j) => `<line x1="${x}" y1="${y}" x2="${x + Math.cos(j / 14 * 6.28) * 110}" y2="${y + Math.sin(j / 14 * 6.28) * 110}" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`).join("")}</g>`).join("") : "";
    const arch = `<path d="M560 700 L560 380 Q800 120 1040 380 L1040 700" stroke="#f8fafc" stroke-width="22" fill="none"/>${Array.from({ length: lav ? 26 : 12 }, (_, k) => { const a = Math.PI * k / ((lav ? 26 : 12) - 1), x = 800 - Math.cos(a) * 240, y = 380 - Math.sin(a) * 190; return `<circle cx="${x}" cy="${y}" r="${lav ? 22 : 16}" fill="${["#f472b6", "#fda4af", "#fff", "#fde68a"][k % 4]}"/>` }).join("")}`;
    return cut(`<defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${lav ? "#1e2a5a" : "#f6b37f"}"/><stop offset="1" stop-color="${lav ? "#c2547a" : "#fde2c4"}"/></linearGradient></defs><rect width="1600" height="900" fill="url(#wg)"/>${lights}${fw}
<rect y="690" width="1600" height="210" fill="#3f7d4e"/><rect y="690" width="1600" height="16" fill="#58a06a"/><path d="M700 900 L760 690 L840 690 L900 900Z" fill="#fde2e4" opacity=".85"/>${arch}
${!lav ? `<g class="fade" style="--d:.6s">${[[200, 300, "#f472b6"], [1400, 260, "#38bdf8"], [1300, 340, "#fde68a"]].map(([x, y, c]) => `<line x1="${x}" y1="${y + 60}" x2="${x}" y2="${y + 260}" stroke="#fff" stroke-width="2"/><ellipse cx="${x}" cy="${y}" rx="40" ry="52" fill="${c}"/>`).join("")}</g>` : ""}
<g class="wl"><g class="step">${fig(730, "#1e293b")}</g></g><g class="wr"><g class="step">${fig(870, 0, 1)}</g></g>
<text class="pop" style="--d:2.7s" x="800" y="330" text-anchor="middle" font-size="110">❤️</text><text class="pop" style="--d:3.2s" x="800" y="210" text-anchor="middle" font-size="60">💍</text>${conf}`,
      lav ? `<h2>💍 A dream wedding</h2><p>Lights, fireworks and 200 guests. Unforgettable, and ${f$(a)} lighter.</p>` : `<h2>💍 A small, happy wedding</h2><p>Close family, a garden arch, and most of your savings still intact.</p>`, 7000)
  }
  function recessionScene() {
    const rl = Array.from({ length: 70 }, () => { const x = R(0, 1700) | 0, y = R(-200, 800) | 0; return `<line x1="${x}" y1="${y}" x2="${x - 14}" y2="${y + 40}" stroke="#7d8aa6" stroke-width="2" opacity=".35"/>` }).join("");
    const pts = [[80, 260], [180, 230], [260, 250], [340, 200], [420, 215], [500, 180], [560, 230], [620, 300], [680, 280], [740, 380], [800, 360], [870, 470], [930, 440], [1000, 560], [1060, 540], [1130, 610], [1200, 600]];
    return cut(`<defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a0709"/><stop offset="1" stop-color="#3a0d10"/></linearGradient></defs><rect width="1600" height="900" fill="url(#rg)"/><g class="rain">${rl}</g>
<g class="shake">${Array.from({ length: 9 }, (_, k) => `<line x1="60" y1="${150 + k * 60}" x2="1260" y2="${150 + k * 60}" stroke="#ffffff10"/>`).join("")}
<polyline class="draw" points="${pts.map(p => p.join(",")).join(" ")}" fill="none" stroke="#ef4444" stroke-width="10" stroke-linejoin="round"/>
${pts.map((p, k) => k % 2 ? `<g class="fade" style="--d:${.4 + k * .14}s"><rect x="${p[0] - 9}" y="${p[1] - 18}" width="18" height="${36 + k * 2}" fill="${k > 5 ? "#ef4444" : "#26a69a"}"/><line x1="${p[0]}" y1="${p[1] - 36}" x2="${p[0]}" y2="${p[1] + 40 + k * 2}" stroke="${k > 5 ? "#ef4444" : "#26a69a"}" stroke-width="3"/></g>` : "").join("")}
<g class="alarm"><text x="1080" y="200" text-anchor="end" font-size="96" font-weight="900" fill="#ef4444" font-family="system-ui">▼ -48%</text></g></g>
<g transform="translate(1130,330)"><rect width="300" height="400" fill="#262b38"/>${Array.from({ length: 12 }, (_, k) => `<rect x="${24 + (k % 3) * 92}" y="${24 + (k / 3 | 0) * 80}" width="68" height="50" fill="#384055"/>`).join("")}<rect x="110" y="300" width="80" height="100" fill="#11141c"/><text x="150" y="-16" text-anchor="middle" font-size="26" fill="#94a3b8" font-family="system-ui">YOUR OFFICE</text></g>
<g class="exit"><g class="fade" style="--d:2.8s"><g class="step"><g transform="translate(1280,470) scale(.8)">${fig(0, "#334155").replace('translate(0,420)', 'translate(0,0)')}<rect x="-55" y="70" width="110" height="70" rx="6" fill="#a16207"/><rect x="-55" y="70" width="110" height="16" fill="#854d0e"/><text x="0" y="66" text-anchor="middle" font-size="34">🪴</text></g></g></g></g>
<g class="pop" style="--d:3.2s"><g transform="translate(1280,250) rotate(-10)"><rect x="-150" y="-46" width="300" height="92" rx="12" fill="none" stroke="#ef4444" stroke-width="8"/><text x="0" y="16" text-anchor="middle" font-size="44" font-weight="900" fill="#ef4444" font-family="system-ui">LAID OFF</text></g></g>
<rect y="770" width="1600" height="60" fill="#b91c1c"/><g class="tick"><text y="812" font-size="30" font-weight="800" fill="#fff" font-family="system-ui">🔴 BREAKING · MARKETS CRASH WORLDWIDE · BANKS ON THE BRINK · MASS LAYOFFS IN TECH · UNEMPLOYMENT SOARS · INVESTORS PANIC-SELL · 🔴 BREAKING · RECESSION OFFICIALLY DECLARED</text></g>`,
      `<h2 style="--d:3.6s">💥 The recession hits</h2><p style="--d:4.1s">Markets crashed and your company let you go. Time to decide how you survive.</p>`, 8000)
  }

  /* ---------- 3D ---------- */
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0a0d18); scene.fog = new THREE.Fog(0x0a0d18, 16, 44);
  const cam = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, .1, 100), rd = new THREE.WebGLRenderer({ antialias: true }); rd.setPixelRatio(Math.min(devicePixelRatio, 2)); rd.setSize(innerWidth, innerHeight); $("gl").appendChild(rd.domElement);
  const hemi = new THREE.HemisphereLight(0xffb98a, 0x1b2440, .6); scene.add(hemi);
  const L = (c, i, d, x, y, z) => { const l = new THREE.PointLight(c, i, d); l.position.set(x, y, z); scene.add(l); return l };
  L(0xff9a60, .9, 20, 0, 3, -7); L(0xffaa55, 1.1, 9, -9, 2, -6.4); const lap = L(0x6aa8ff, .8, 6, 4, 1.6, -6.4); L(0xffd2a0, .7, 24, 0, 3.7, 1);
  const M = (c, o) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: .7 }, o)), OB = [];
  function box(w, h, d, x, y, z, c, s, o) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M(c, o)); m.position.set(x, y + h / 2, z); scene.add(m); if (s) OB.push([x - w / 2 - .3, x + w / 2 + .3, z - d / 2 - .3, z + d / 2 + .3]); return m }
  function cyl(r, h, x, y, z, c, o) { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 14), M(c, o)); m.position.set(x, y + h / 2, z); scene.add(m); return m }
  function tex(w, h, fn) { const c = document.createElement("canvas"); c.width = w; c.height = h; fn(c.getContext("2d")); return new THREE.CanvasTexture(c) }
  const cityT = tex(1024, 256, x => {
    const g = x.createLinearGradient(0, 0, 0, 256);[[0, "#241c4a"], [.55, "#d9567a"], [.8, "#ff9a5a"], [1, "#ffd08a"]].forEach(a => g.addColorStop(a[0], a[1])); x.fillStyle = g; x.fillRect(0, 0, 1024, 256);
    [["#2b2347", 150], ["#1a1630", 190], ["#0e0c1c", 210]].forEach(([col, mh], Lr) => { for (let i = 0; i < 1024; i += 34 - Lr * 6) { const h = R(40, mh), w = 28 - Lr * 4; x.fillStyle = col; x.fillRect(i, 256 - h, w, h); if (Lr > 0) for (let j = 0; j < h - 8; j += 9)for (let k = 3; k < w - 3; k += 7)if (Math.random() < .35) { x.fillStyle = Math.random() < .8 ? "#ffd27a" : "#9fd0ff"; x.fillRect(i + k, 256 - h + j + 4, 3, 4) } } })
  });
  const winM = new THREE.MeshBasicMaterial({ map: cityT }), wn = new THREE.Mesh(new THREE.PlaneGeometry(20, 4.4), winM); wn.position.set(0, 2.2, -8); scene.add(wn);
  const glow = i => winM.color.setScalar(.62 + .38 * Math.cos(i / 72 * Math.PI * 2));
  [-5, 0, 5, -10, 10].forEach(x => box(.14, 4.4, .2, x, 0, -7.9, 0x10131c)); box(20, .12, .3, 0, 3.5, -7.9, 0x10131c);
  box(20, .2, 16, 0, -.2, 0, 0x3b2a22, 0, { roughness: .45 }); box(.3, 4, 16, -10, 0, 0, 0x2a3042); box(.3, 4, 16, 10, 0, 0, 0x2a3042); box(20, 4, .3, 0, 0, 8, 0x2a3042); box(20, .2, 16, 0, 4, 0, 0x151a28);
  const post = tex(256, 384, x => { x.fillStyle = "#0c0e14"; x.fillRect(0, 0, 256, 384); x.fillStyle = "#cbd0da"; x.font = "bold 38px Impact,Arial Narrow,sans-serif";["BETTER", "DECISIONS", "BIGGER", "TOMORROWS"].forEach((t, i) => { x.fillStyle = i % 2 ? "#8a93a6" : "#e5e9f2"; x.fillText(t, 24, 96 + i * 62) }) });
  const ps = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.7), new THREE.MeshBasicMaterial({ map: post })); ps.position.set(-9.8, 2.3, -3); ps.rotation.y = Math.PI / 2; scene.add(ps);
  box(3.2, .6, 4.4, -7.2, 0, -4.4, 0x2b2d44, 1); box(3.25, .18, 2.6, -7.2, .6, -3.6, 0x3f5fa8); box(2.4, .25, .8, -7.2, .6, -6.2, 0xcfd3e6); box(3.4, 1.5, .2, -7.2, 0, -6.7, 0x3a2a22);
  box(.9, .6, .9, -9.3, 0, -6.2, 0x3a2a22, 1); cyl(.07, .4, -9.3, .6, -6.2, 0x888888); const lb = new THREE.Mesh(new THREE.SphereGeometry(.24, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffc27a })); lb.position.set(-9.3, 1.25, -6.2); scene.add(lb);
  box(5, .12, 1.6, 4, .8, -6.9, 0x6b4a34, 1); box(.2, .8, 1.5, 1.6, 0, -6.9, 0x4a3322); box(.2, .8, 1.5, 6.4, 0, -6.9, 0x4a3322); box(1.1, .05, .75, 4, .92, -6.7, 0x20242e);
  const sc = box(1.1, .7, .05, 4, .97, -7.1, 0x0b1424, 0, { emissive: 0x2a6fe0, emissiveIntensity: .8 }); sc.rotation.x = -.2; cyl(.12, .22, 5.2, .92, -6.7, 0xd6a35f);
  box(1.2, .12, 1.2, 4, .55, -5.4, 0x1c2232); box(1.2, 1.1, .12, 4, .6, -4.8, 0x1c2232); cyl(.08, .55, 4, 0, -5.4, 0x333a4d);
  box(4, .5, 1.6, 0, 0, 5.3, 0x34405e, 1); box(4, .9, .35, 0, .5, 6.1, 0x2c3650); box(5, .02, 3.5, 0, 0, 2.6, 0x2a2233); box(.5, 3, 3.2, 9.6, 0, -1, 0x2a1f1a, 1);
  [0xc0392b, 0x2980b9, 0xf1c40f, 0x27ae60].forEach((c, i) => box(.3, .5, .1 + i * .02, 9.35, .5 + i * .6, -.2 - i * .4, c));
  cyl(.35, .5, 8.7, 0, -6.9, 0x7a4a2a);[[8.7, 1.1, -6.9, .55], [8.45, 1.5, -6.8, .4], [8.95, 1.45, -7, .4]].forEach(p => { const s = new THREE.Mesh(new THREE.SphereGeometry(p[3], 10, 10), M(0x1f7a4a)); s.position.set(p[0], p[1], p[2]); scene.add(s) });
  /* ---------- Player character: jointed body with a defined face ---------- */
  const pl = new THREE.Group(); scene.add(pl); const BX = THREE.BoxGeometry;
  const skin = M(0xe2b48f, { roughness: .55 }), hood = M(0x1f4e79, { roughness: .8 }), hoodD = M(0x173a5c, { roughness: .85 }), pant = M(0x2b2f3a, { roughness: .85 }), shoe = M(0xeeeeee, { roughness: .5 }), sole = M(0x333333), hairM = M(0x2a1a0c, { roughness: .9 }),
    eyeW = new THREE.MeshBasicMaterial({ color: 0xf8f8f8 }), eyeI = new THREE.MeshBasicMaterial({ color: 0x3b2412 }), eyeP = new THREE.MeshBasicMaterial({ color: 0x050505 }), lipM = M(0xa0534a, { roughness: .6 });
  const add = (p, g, m, x, y, z) => { const q = new THREE.Mesh(g, m); q.position.set(x, y, z); p.add(q); return q }, grp = (p, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); p.add(g); return g };
  const SG = r => new THREE.SphereGeometry(r, 24, 18), CG = (a, b, h) => new THREE.CylinderGeometry(a, b, h, 18);
  const body = grp(pl, 0, 0, 0);
  add(body, SG(.2), pant, 0, .96, 0).scale.set(1.15, .55, .8);
  const torso = add(body, CG(.25, .2, .56), hood, 0, 1.26, 0); torso.scale.z = .68;
  add(body, SG(.26), hood, 0, 1.52, 0).scale.set(1.12, .42, .68);
  add(body, CG(.21, .21, .08), hoodD, 0, 1.02, 0).scale.z = .75;
  add(body, new BX(.015, .46, .01), M(0xd1d5db), 0, 1.28, .168);[-.06, .06].forEach(x => add(body, CG(.008, .008, .16), M(0xe5e7eb), x, 1.48, .175));
  add(body, SG(.2), hoodD, 0, 1.62, -.1).scale.set(1.15, .55, .6);
  add(body, CG(.07, .08, .14), skin, 0, 1.68, 0);
  const hd = grp(body, 0, 1.87, 0);
  add(hd, SG(.19), skin, 0, 0, 0).scale.set(.9, 1.07, .98);
  add(hd, SG(.13), skin, 0, -.09, .04).scale.set(1.05, .75, 1);
  const eyes = [-1, 1].map(s => {
    const e = grp(hd, s * .068, .025, .158); add(e, SG(.034), eyeW, 0, 0, 0).scale.set(1, .75, .45); add(e, SG(.019), eyeI, 0, 0, .012).scale.z = .4; add(e, SG(.009), eyeP, 0, 0, .02).scale.z = .4;
    const br = add(hd, new BX(.075, .016, .02), hairM, s * .07, .088, .168); br.rotation.z = -s * .12; add(hd, SG(.042), skin, s * .178, 0, -.005).scale.set(.45, 1, .8); return e
  });
  add(hd, new THREE.ConeGeometry(.028, .075, 12), skin, 0, -.025, .19).rotation.x = Math.PI / 2.3;
  add(hd, new BX(.075, .014, .012), lipM, 0, -.093, .165).scale.set(1, 1, 1);
  add(hd, new THREE.SphereGeometry(.205, 24, 18, 0, Math.PI * 2, 0, Math.PI * .36), hairM, 0, .02, -.015).scale.set(.95, 1.05, 1.02);
  add(hd, SG(.19), hairM, 0, -.01, -.06).scale.set(.95, 1, .82);
  const fr = add(hd, new BX(.3, .07, .1), hairM, 0, .17, .105); fr.rotation.x = .6;
  const mkArm = s => { const sh = grp(body, s * .32, 1.53, 0); add(sh, SG(.085), hood, 0, 0, 0); add(sh, CG(.075, .065, .32), hood, 0, -.17, 0); const el = grp(sh, 0, -.33, 0); add(el, SG(.066), hood, 0, 0, 0); add(el, CG(.065, .055, .28), hood, 0, -.14, 0); add(el, CG(.058, .058, .04), hoodD, 0, -.28, 0); add(el, SG(.058), skin, 0, -.34, 0).scale.set(.75, 1.15, .95); return [sh, el] };
  const [shL, elL] = mkArm(-1), [shR, elR] = mkArm(1);
  const mkLeg = s => { const h = grp(body, s * .11, .92, 0); add(h, CG(.1, .085, .44), pant, 0, -.22, 0); const kn = grp(h, 0, -.44, 0); add(kn, SG(.086), pant, 0, 0, 0); add(kn, CG(.085, .07, .38), pant, 0, -.19, 0); add(kn, new BX(.13, .1, .28), shoe, 0, -.42, .05); add(kn, new BX(.135, .03, .29), sole, 0, -.465, .05); return [h, kn] };
  const [hpL, knL] = mkLeg(-1), [hpR, knR] = mkLeg(1);
  pl.traverse(o => { if (o.isMesh) o.castShadow = true });
  function anim(t, sp) {
    const a = SLP ? 0 : Math.min(sp, 3) / 3, ph = walk * 4, s1 = Math.sin(ph), k = Math.sin(ph + 1.4);
    hpL.rotation.x = -s1 * .6 * a; hpR.rotation.x = s1 * .6 * a; knL.rotation.x = Math.max(0, k) * .9 * a; knR.rotation.x = Math.max(0, -k) * .9 * a;
    shL.rotation.x = s1 * .55 * a; shR.rotation.x = -s1 * .55 * a; elL.rotation.x = elR.rotation.x = SLP ? 0 : -.18 - .4 * a; shL.rotation.z = SLP ? -.12 : -.07; shR.rotation.z = SLP ? .12 : .07;
    const br = Math.sin(t * (SLP ? 1.2 : 2)) * (SLP ? .025 : .012) * (1 - a); torso.scale.y = 1 + br; torso.scale.x = 1 + br * .6; hd.position.y = 1.87 + br * 1.5; hd.rotation.y = SLP ? 0 : Math.sin(t * .55) * .14 * (1 - a); hd.rotation.x = SLP ? 0 : Math.sin(t * .8) * .03 * (1 - a);
    body.position.y = Math.abs(s1) * .05 * a; body.rotation.x = .07 * a;
    const bl = SLP ? .08 : (t % 3.7) < .13 ? .1 : 1; eyes.forEach(e => e.scale.y = bl)
  }
  /* ---------- Sleeping in bed ---------- */
  let SLP = 0; const SLC = new THREE.Vector3(-4.3, 3.3, -2.3), blk = new THREE.Mesh(new BX(1.25, .16, 1.9), M(0x4a6fc0, { roughness: .9 })); blk.position.set(-7.2, 1.12, -4.15); blk.visible = false; scene.add(blk);
  async function sleepAnim() {
    SLP = 1; S.busy = 1; hud(); panel(); $("tip").style.display = "none"; const z = $("zz");
    pl.position.set(-7.2, 1.0, -3.55); pl.rotation.set(-Math.PI / 2, 0, 0); blk.visible = true;
    const h0 = hemi.intensity; for (let i = 0; i <= 20; i++) { hemi.intensity = h0 * (1 - i / 28); await sleep(40) }
    z.classList.add("on"); await sleep(2600); z.classList.remove("on");
    for (let i = 0; i <= 20; i++) { hemi.intensity = h0 * (.3 + .7 * i / 20); await sleep(30) } hemi.intensity = h0;
    blk.visible = false; pl.rotation.set(0, Math.PI / 2, 0); pl.position.set(-4.8, 0, -3.4); cam.position.set(-1.6, 2.1, -3.4); SLP = 0; S.busy = 0; hud(); toast("😴 Rested in bed: more energy and health")
  }
  pl.position.set(3.2, 0, -3.4); pl.rotation.y = Math.PI;
  const key = {}; let yaw = 0, drag = 0, lx = 0, near = "";
  addEventListener("keydown", e => { if (e.target.tagName == "INPUT") return; const k = e.key.toLowerCase(); key[k] = 1; if (k == "e") interact(); if (k == "n") adv(1); if (k.startsWith("arrow")) e.preventDefault() }); addEventListener("keyup", e => key[e.key.toLowerCase()] = 0);
  $("gl").onpointerdown = e => { drag = 1; lx = e.clientX }; addEventListener("pointerup", () => drag = 0); addEventListener("pointermove", e => { if (drag) { yaw -= (e.clientX - lx) * .006; lx = e.clientX } });
  function interact() { if (near == "desk") panel("market"); else if (near == "bed") act("rest") }
  const DESK = [4, -5.2], BED = [-7.2, -3.4], vel = new THREE.Vector3(), clk = new THREE.Clock(), mc = $("mmc").getContext("2d"), BL = []; let walk = 0;
  for (let i = 0; i < 46; i++) { const x = R(-48, 48), z = R(-48, 48); if (Math.abs(x) > 14 || Math.abs(z) > 11) BL.push([x, z, R(3, 8), R(3, 8)]) }
  const hit = (x, z) => OB.some(b => x > b[0] && x < b[1] && z > b[2] && z < b[3]) || Math.abs(x) > 9.3 || z < -7.3 || z > 7.3;
  cam.position.set(3.2, 2.1, -.1);
  function mini() {
    const x = mc; x.clearRect(0, 0, 340, 340); x.save(); x.translate(170, 170); x.scale(10, 10); x.translate(-pl.position.x, -pl.position.z); x.fillStyle = "#070b16"; x.fillRect(-60, -60, 120, 120); x.fillStyle = "#131a2b"; BL.forEach(b => x.fillRect(b[0], b[1], b[2], b[3]));
    x.fillStyle = "rgba(16,185,129,.3)"; x.fillRect(-10, -8, 20, 16); x.strokeStyle = "#10b981"; x.lineWidth = .15; x.strokeRect(-10, -8, 20, 16); x.fillStyle = "#3b82f688"; OB.forEach(b => x.fillRect(b[0] + .3, b[2] + .3, b[1] - b[0] - .6, b[3] - b[2] - .6)); x.restore();
    x.save(); x.translate(170, 170); x.rotate(Math.PI - pl.rotation.y); x.fillStyle = "#fff"; x.shadowColor = "#10b981"; x.shadowBlur = 10; x.beginPath(); x.moveTo(0, -14); x.lineTo(9, 10); x.lineTo(0, 5); x.lineTo(-9, 10); x.fill(); x.restore()
  }
  function loop() {
    requestAnimationFrame(loop); const dt = Math.min(clk.getDelta(), .1), s = Math.sin(yaw), c = Math.cos(yaw);
    if (SLP) { vel.set(0, 0, 0); anim(clk.elapsedTime, 0); cam.position.lerp(SLC, Math.min(1, dt * 2.5)); cam.lookAt(-7.2, .9, -4.9); rd.render(scene, cam); mini(); return }
    const fw = (key.w || key.arrowup ? 1 : 0) - (key.s || key.arrowdown ? 1 : 0), rt = (key.d || key.arrowright ? 1 : 0) - (key.a || key.arrowleft ? 1 : 0); let mx = -s * fw + c * rt, mz = -c * fw - s * rt; const l = Math.hypot(mx, mz); if (l > 0) { mx /= l; mz /= l }
    vel.x += (mx * 34 - vel.x * 9) * dt; vel.z += (mz * 34 - vel.z * 9) * dt; const nx = pl.position.x + vel.x * dt, nz = pl.position.z + vel.z * dt;
    if (!hit(nx, pl.position.z)) pl.position.x = nx; else vel.x = 0; if (!hit(pl.position.x, nz)) pl.position.z = nz; else vel.z = 0;
    const sp = Math.hypot(vel.x, vel.z); if (sp > .4) { const d = ((Math.atan2(vel.x, vel.z) - pl.rotation.y + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI; pl.rotation.y += d * Math.min(1, dt * 12) }
    walk += sp * dt * 1.6; anim(clk.elapsedTime, sp);
    const tp = new THREE.Vector3(cl(pl.position.x + s * 3.3, -9.5, 9.5), 2.1, cl(pl.position.z + c * 3.3, -7.6, 7.6)); cam.position.lerp(tp, Math.min(1, dt * 7)); cam.lookAt(pl.position.x, 1.35, pl.position.z);
    const nd = Math.hypot(pl.position.x - DESK[0], pl.position.z - DESK[1]) < 2.6 ? "desk" : Math.hypot(pl.position.x - BED[0], pl.position.z - BED[1]) < 2.8 ? "bed" : "";
    if (nd != near) { near = nd; const t = $("tip"); t.style.display = nd ? "block" : "none"; t.textContent = nd == "desk" ? "Press E · open the stock market" : "Press E · rest in bed" }
    lap.intensity = .7 + .15 * Math.sin(clk.elapsedTime * 2); rd.render(scene, cam); mini()
  }
  addEventListener("resize", () => { cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); rd.setSize(innerWidth, innerHeight); if (S.p == "market") draw() });
  hud(); if (SV) deck([{ h: `<div class="big">\u{1F4BE}</div><h1>Welcome back.</h1><p>Saved game found: age ${S.age}, month ${S.m + 1}.</p><button class="cta" id="ng">Start new game</button>`, b: "Continue \u25B6" }], () => { hud(); toast("Game loaded"); if ((S.age == 33 && !S.done[33]) || (D[S.age] && !S.done[S.age])) newAge(); else tip() });
  else deck(INTRO, () => { tip(); panel("market"); toast("W A S D to walk, drag to look, E at the desk. N skips a month.") }); loop();
})();