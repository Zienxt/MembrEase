document.addEventListener('DOMContentLoaded', () => {

  /* 1️⃣  Work out which sidebar section should be active
        ────────────────────────────────────────────────
        Any file that starts with:
          member‑           → Member Information
          contributor‑      → Contributor Information
          dependents‑       → Dependents Information
     */
  const file   = location.pathname.split('/').pop().toLowerCase();   // e.g. "dependents-update.html"
  let section;                                                       // "member-information" | …

  if      (file.startsWith('member'))       section = 'member-information';
  else if (file.startsWith('contributor'))  section = 'contributor-information';
  else if (file.startsWith('dependent'))   section = 'dependents-information';
  else                                       section = 'member-information';   // default / welcome page


  /* 2️⃣  Remove any existing .active and set it only on the right <div> */
  document.querySelectorAll('.content-panel').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.section === section);
  });

});