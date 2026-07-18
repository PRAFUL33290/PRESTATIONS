/**
 * Prestations clients — Parvati India
 * Données issues des dépôts GitHub, triées par date d'événement.
 */

const PRESTATIONS = [
  {
    id: "mariage-senaillac",
    index: 1,
    title: "Surprise Bollywood — Mariage Nabila & Ashley",
    client: "Nabila & Ashley",
    organisation: "Surprise organisée par Beka, Hannah et Sylvie",
    eventDate: "2026-09-01",
    eventTime: "Entre 19h00 et 19h30",
    eventDayLabel: "Mardi",
    lieu: "Château de Senaillac, 33370 Tresses",
    type: "Mariage",
    status: "confirme",
    statusLabel: "Confirmé",
    priceMain: "452,00 € TTC",
    priceDetail:
      "Version validée — Formule A : 420 € + 32 € transport = 452,00 € TTC (formule B 582 € non retenue).",
    notes:
      "2 danses Bollywood + costumes + ambiance Bhangra participative. Durée totale ≈ 20 min. Hommage aux origines de Nabila (pakistanaise) et union de deux familles / cultures. Présentatrice : Sylvie (annonce aux invités). Prestataire : Praful & danseurs Parvati India (région bordelaise). Tarif validé : 452,00 € TTC.",

    speechFr: `Bonsoir à toutes et à tous,

Comme vous le savez, ce soir, nous sommes réunis pour célébrer l'histoire d'amour de Nabila et Ashley. La surprise qui va suivre a été préparée avec beaucoup d'affection par trois personnes très spéciales : Beka, Hannah et Sylvie.

En hommage aux origines de Nabila et pour célébrer la magnifique union de deux familles et de deux cultures, nous avons souhaité vous offrir un aperçu de l'énergie, de la couleur et de la joie qui caractérisent les danses Bollywood et Bhangra.

Pour donner vie à cette surprise, nous avons le plaisir d'accueillir Praful et les talentueux danseurs de Parvati India, venus de la région bordelaise pour partager avec nous ce moment unique.

Alors n'hésitez pas à applaudir et à vous laisser emporter par cette magnifique performance offerte en l'honneur de nos merveilleux mariés.

Veuillez accueillir chaleureusement Parvati India !`,
    speechBy: "Sylvie",
    speechLang: "fr",
    deadline: null,
    devisNumero: null,
    contactEmail: null,
    contactPhone: null,
    contactName: "Sylvie",
    repoUrl: "https://github.com/PRAFUL33290/DEVIS-DANSE-BOLLYWOOD---1-SEPTEMBRE-2026",
    repoName: "DEVIS-DANSE-BOLLYWOOD---1-SEPTEMBRE-2026",
    repoCreated: "2026-03-07",
    repoPushed: "2026-03-07",
    tags: ["Mariage", "Tresses", "Surprise", "Nabila", "Ashley", "Sylvie"],
  },
  {
    id: "isabelle-fara-siblu",
    index: 2,
    title: "Gala Bollywood",
    client: "Isabelle Fara",
    organisation: "Siblu Villages — Camping de Ronce-les-Bains",
    eventDate: "2026-09-26",
    eventTime: "Samedi — horaire à confirmer",
    eventDayLabel: "Samedi",
    lieu: "Camping de Ronce-les-Bains, Charente-Maritime",
    type: "Gala camping",
    status: "a-suivre",
    statusLabel: "À suivre",
    priceMain: "790 € (6 danseuses)",
    priceDetail:
      "Spectacle 6 danseuses : 640 € + forfait transport 150 € = 790 €. Barème : 240 € base + 80 € / danseur suppl. (pairs 2→20).",
    notes:
      "Pas d’initiation demandée (prestation pendant un gala). Hébergement possible sur place. Devis n° 2026-0726-ISF émis le 13/07/2026. Réponse attendue avant le 1er septembre 2026.",
    deadline: "2026-09-01",
    devisNumero: "2026-0726-ISF",
    contactEmail: "Isabelle.Fara@siblu.fr",
    contactPhone: null,
    repoUrl: "https://github.com/PRAFUL33290/Isabelle-Fara",
    repoName: "Isabelle-Fara",
    repoCreated: "2026-07-13",
    repoPushed: "2026-07-17",
    tags: ["Siblu", "Gala", "Ronce-les-Bains"],
  },
  {
    id: "nuit-bibliotheques",
    index: 3,
    title: "Nuit des Bibliothèques",
    client: "Bibliothèque de Mérignac",
    organisation: "Institution publique — Mérignac",
    eventDate: "2026-10-03",
    eventTime: "Horaire à confirmer",
    eventDayLabel: "Samedi",
    lieu: "Mérignac",
    type: "Événement culturel",
    status: "en-attente",
    statusLabel: "En attente",
    priceMain: "400 € – 680 €",
    priceDetail:
      "Spectacle 15 min : 6 artistes 400 € · 16 artistes 560 € · 20 artistes 680 €. Initiations 70–120 €. Transport 15 € (locale) ou 24 €.",
    notes:
      "Proposition interactive spectacle + options d’initiation. Contact client non nommé dans le dépôt. Vérifier le SIRET affiché sur la page avant envoi.",
    deadline: null,
    devisNumero: null,
    contactEmail: null,
    contactPhone: null,
    repoUrl: "https://github.com/PRAFUL33290/NUIT-DES-BIBLIOTHEQUES",
    repoName: "NUIT-DES-BIBLIOTHEQUES",
    repoCreated: "2026-03-13",
    repoPushed: "2026-03-18",
    tags: ["Bibliothèque", "Mérignac", "Culture"],
  },
];

const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const DAYS_FR = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

function parseDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDateLong(iso) {
  const date = parseDate(iso);
  if (!date) return "—";
  return `${date.getDate()} ${MONTHS_FR[date.getMonth()]} ${date.getFullYear()}`;
}

function formatDateShort(iso) {
  const date = parseDate(iso);
  if (!date) return "—";
  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
}

function daysUntil(iso) {
  const target = parseDate(iso);
  if (!target) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

function relativeLabel(iso) {
  const n = daysUntil(iso);
  if (n === null) return "";
  if (n < 0) return `Il y a ${Math.abs(n)} j`;
  if (n === 0) return "Aujourd'hui";
  if (n === 1) return "Demain";
  return `Dans ${n} j`;
}

function iconCalendar() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`;
}

function iconPin() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.6 7-12a7 7 0 0 0-14 0c0 5.4 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>`;
}

function iconUser() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/></svg>`;
}

function iconMail() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`;
}

function iconAlert() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v4m0 4h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>`;
}

function iconMic() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>`;
}

function sortPrestations(list, mode) {
  const copy = [...list];
  switch (mode) {
    case "event-desc":
      return copy.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
    case "deadline-asc":
      return copy.sort((a, b) => {
        if (!a.deadline && !b.deadline) return a.eventDate.localeCompare(b.eventDate);
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        return a.deadline.localeCompare(b.deadline);
      });
    case "name-asc":
      return copy.sort((a, b) => a.client.localeCompare(b.client, "fr"));
    case "event-asc":
    default:
      return copy.sort((a, b) => a.eventDate.localeCompare(b.eventDate));
  }
}

function filterPrestations(list, query, status) {
  const q = query.trim().toLowerCase();
  return list.filter((item) => {
    if (status !== "all" && item.status !== status) return false;
    if (!q) return true;
    const haystack = [
      item.title,
      item.client,
      item.organisation,
      item.lieu,
      item.type,
      item.notes,
      item.priceMain,
      item.devisNumero,
      item.contactEmail,
      item.contactName,
      item.speechBy,
      item.speechFr,
      item.speechEn,
      ...(item.tags || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

function renderStats(list) {
  const el = document.getElementById("stats");
  const total = list.length;
  const withDeadline = list.filter((p) => p.deadline).length;
  const next = sortPrestations(list, "event-asc")[0];
  const nextLabel = next
    ? `${formatDateShort(next.eventDate)} · ${next.client}`
    : "—";
  const aSuivre = list.filter((p) => p.status === "a-suivre").length;

  el.innerHTML = `
    <article class="stat-card">
      <p class="label">Prestations</p>
      <p class="value">${total}</p>
      <p class="hint">affichées</p>
    </article>
    <article class="stat-card">
      <p class="label">Prochain événement</p>
      <p class="value" style="font-size:1.05rem">${next ? relativeLabel(next.eventDate) : "—"}</p>
      <p class="hint">${escapeHtml(nextLabel)}</p>
    </article>
    <article class="stat-card">
      <p class="label">À suivre</p>
      <p class="value">${aSuivre}</p>
      <p class="hint">dossiers prioritaires</p>
    </article>
    <article class="stat-card">
      <p class="label">Deadlines</p>
      <p class="value">${withDeadline}</p>
      <p class="hint">réponses en attente</p>
    </article>
  `;
}

function renderTimeline(list) {
  const el = document.getElementById("timeline");
  const ordered = sortPrestations(list, "event-asc");

  if (!ordered.length) {
    el.innerHTML = "";
    return;
  }

  el.innerHTML = ordered
    .map((item) => {
      const date = parseDate(item.eventDate);
      const dayNum = date ? date.getDate() : "—";
      const month = date ? MONTHS_FR[date.getMonth()] : "";
      const year = date ? date.getFullYear() : "";
      return `
        <li class="timeline-item">
          <div class="timeline-date">
            <span class="day">${dayNum} ${month}</span>
            <span class="year">${year} · ${relativeLabel(item.eventDate)}</span>
          </div>
          <div class="timeline-dot-col">
            <span class="timeline-dot" aria-hidden="true"></span>
          </div>
          <div class="timeline-body">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.client)} · ${escapeHtml(item.lieu)}</p>
            <div class="meta-row">
              <span class="badge badge-${item.status}">${escapeHtml(item.statusLabel)}</span>
              <span class="tag">${escapeHtml(item.type)}</span>
            </div>
          </div>
        </li>
      `;
    })
    .join("");
}

function renderCards(list) {
  const el = document.getElementById("cards");
  const empty = document.getElementById("emptyState");

  if (!list.length) {
    el.innerHTML = "";
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  el.innerHTML = list
    .map((item, i) => {
      const contactBlock = item.contactEmail
        ? `
          <div class="info-row">
            <div class="info-icon">${iconMail()}</div>
            <div>
              <p class="info-label">Contact</p>
              <p class="info-value"><a href="mailto:${escapeAttr(item.contactEmail)}">${escapeHtml(item.contactEmail)}</a></p>
            </div>
          </div>`
        : item.contactName
          ? `
          <div class="info-row">
            <div class="info-icon">${iconUser()}</div>
            <div>
              <p class="info-label">Contact / présentatrice</p>
              <p class="info-value">${escapeHtml(item.contactName)}</p>
            </div>
          </div>`
          : "";

      const deadlineBlock = item.deadline
        ? `
          <div class="info-row">
            <div class="info-icon">${iconAlert()}</div>
            <div>
              <p class="info-label">Deadline réponse</p>
              <p class="info-value">${formatDateLong(item.deadline)} <span style="color:var(--warning);font-weight:800">(${relativeLabel(item.deadline)})</span></p>
            </div>
          </div>`
        : "";

      const devisBlock = item.devisNumero
        ? `<p class="notes"><strong>Devis n°</strong> ${escapeHtml(item.devisNumero)}</p>`
        : "";

      const speechText = item.speechFr || item.speechEn || "";
      const speechLangLabel = item.speechFr
        ? "Version France"
        : item.speechEn
          ? "Version English"
          : "";
      const speechBlock = speechText
        ? `
          <div class="speech-box">
            <div class="speech-head">
              <div class="speech-title-row">
                <span class="speech-icon">${iconMic()}</span>
                <div>
                  <p class="speech-label">Message d'annonce · ${escapeHtml(speechLangLabel)}</p>
                  <p class="speech-by">Lu par ${escapeHtml(item.speechBy || item.contactName || "—")}</p>
                </div>
              </div>
              <button type="button" class="btn btn-ghost btn-sm" data-copy-speech="${escapeAttr(item.id)}">Copier le texte</button>
            </div>
            <pre class="speech-text" id="speech-${escapeAttr(item.id)}">${escapeHtml(speechText)}</pre>
          </div>`
        : "";

      return `
        <article class="card" data-id="${escapeAttr(item.id)}">
          <div class="card-top">
            <div class="card-top-row">
              <span class="card-index">#${String(i + 1).padStart(2, "0")} · ${escapeHtml(item.type)}</span>
              <span class="badge badge-${item.status}">${escapeHtml(item.statusLabel)}</span>
            </div>
            <h3 class="card-title">${escapeHtml(item.title)}</h3>
            <p class="card-client">${escapeHtml(item.client)}</p>
            <p class="card-org">${escapeHtml(item.organisation)}</p>
          </div>
          <div class="card-body">
            <div class="info-grid">
              <div class="info-row">
                <div class="info-icon">${iconCalendar()}</div>
                <div>
                  <p class="info-label">Date événement</p>
                  <p class="info-value">${item.eventDayLabel ? escapeHtml(item.eventDayLabel) + " " : ""}${formatDateLong(item.eventDate)}<br><span style="font-weight:500;color:var(--muted)">${escapeHtml(item.eventTime || "")} · ${relativeLabel(item.eventDate)}</span></p>
                </div>
              </div>
              <div class="info-row">
                <div class="info-icon">${iconPin()}</div>
                <div>
                  <p class="info-label">Lieu</p>
                  <p class="info-value">${escapeHtml(item.lieu)}</p>
                </div>
              </div>
              <div class="info-row">
                <div class="info-icon">${iconUser()}</div>
                <div>
                  <p class="info-label">${item.type === "Mariage" ? "Mariés" : "Client"}</p>
                  <p class="info-value">${escapeHtml(item.client)}</p>
                </div>
              </div>
              ${contactBlock}
              ${deadlineBlock}
            </div>

            <div class="price-box">
              <p class="price-label">Tarif repère</p>
              <p class="price-main">${escapeHtml(item.priceMain)}</p>
              <p class="price-detail">${escapeHtml(item.priceDetail)}</p>
            </div>

            ${devisBlock}
            <p class="notes">${escapeHtml(item.notes)}</p>
            ${speechBlock}
          </div>
          <div class="card-footer">
            <a class="btn btn-primary" href="${escapeAttr(item.repoUrl)}" target="_blank" rel="noopener noreferrer">Ouvrir le dépôt</a>
            ${
              item.contactEmail
                ? `<a class="btn btn-secondary" href="mailto:${escapeAttr(item.contactEmail)}?subject=${encodeURIComponent("Prestation Parvati India — " + item.title)}">Écrire au client</a>`
                : ""
            }
            <button type="button" class="btn btn-ghost" data-copy="${escapeAttr(item.repoUrl)}">Copier le lien</button>
          </div>
        </article>
      `;
    })
    .join("");

  el.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const url = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(url);
        const prev = btn.textContent;
        btn.textContent = "Lien copié ✓";
        setTimeout(() => {
          btn.textContent = prev;
        }, 1600);
      } catch {
        btn.textContent = "Échec copie";
      }
    });
  });

  el.querySelectorAll("[data-copy-speech]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-copy-speech");
      const item = PRESTATIONS.find((p) => p.id === id);
      const text = item?.speechFr || item?.speechEn || "";
      try {
        await navigator.clipboard.writeText(text);
        const prev = btn.textContent;
        btn.textContent = "Texte copié ✓";
        setTimeout(() => {
          btn.textContent = prev;
        }, 1600);
      } catch {
        btn.textContent = "Échec copie";
      }
    });
  });
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}

function refresh() {
  const query = document.getElementById("searchInput").value;
  const sort = document.getElementById("sortSelect").value;
  const status = document.getElementById("statusFilter").value;

  const filtered = filterPrestations(PRESTATIONS, query, status);
  const sorted = sortPrestations(filtered, sort);

  document.getElementById("countLabel").textContent =
    sorted.length === 1 ? "1 prestation" : `${sorted.length} prestations`;

  renderStats(sorted);
  renderTimeline(sorted);
  renderCards(sorted);
}

function initHeaderDate() {
  const now = new Date();
  const label = `${DAYS_FR[now.getDay()]} ${now.getDate()} ${MONTHS_FR[now.getMonth()]} ${now.getFullYear()}`;
  document.getElementById("todayLabel").textContent = label;
}

function init() {
  initHeaderDate();
  document.getElementById("searchInput").addEventListener("input", refresh);
  document.getElementById("sortSelect").addEventListener("change", refresh);
  document.getElementById("statusFilter").addEventListener("change", refresh);
  refresh();
}

document.addEventListener("DOMContentLoaded", init);
