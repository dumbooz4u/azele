/* Azéle — shared header/footer + small UI behaviours */

function renderHeader(active) {
  const el = document.getElementById("site-header");
  if (!el) return;
  const link = (href, label, key) =>
    `<a href="${href}" class="${active === key ? "active" : ""}">${label}</a>`;

  el.innerHTML = `
    <div class="nav">
      <a href="index.html" class="logo">Az<span>é</span>le</a>
      <ul class="nav-links" id="nav-links">
        ${link("index.html", "Home", "home")}
        ${link("shop.html", "Kundan Edit", "shop")}
        ${link("everyday-edit.html", "Everyday Edit", "everyday")}
        ${link("about.html", "Our Story", "about")}
        ${link("contact.html", "Contact", "contact")}
      </ul>
      <div class="nav-actions">
        <a href="${whatsappLink("Hi Azéle! I have a question about your jewellery.")}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener" aria-label="WhatsApp Us">
          <svg class="btn-icon" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.615 4.66 1.784 6.687L2.667 29.333l6.82-1.789a13.26 13.26 0 0 0 6.513 1.72h.006c7.363 0 13.333-5.97 13.333-13.334 0-3.563-1.387-6.912-3.906-9.428a13.24 13.24 0 0 0-9.432-3.902zm0 24.4h-.005a11.05 11.05 0 0 1-5.634-1.542l-.404-.24-4.048 1.062 1.081-3.945-.263-.405a11.04 11.04 0 0 1-1.694-5.897c0-6.111 4.973-11.083 11.089-11.083 2.963 0 5.747 1.154 7.84 3.249a11.02 11.02 0 0 1 3.246 7.845c0 6.111-4.972 11.083-11.088 11.083l-.001-.127zm6.083-8.303c-.334-.167-1.98-.978-2.287-1.09-.307-.111-.53-.167-.752.167-.223.334-.864 1.09-1.06 1.313-.195.223-.39.25-.724.084-.334-.167-1.412-.52-2.69-1.66-.995-.887-1.667-1.983-1.861-2.317-.195-.334-.02-.514.147-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.084-.167-.752-1.812-1.03-2.483-.271-.652-.547-.564-.752-.574l-.64-.012c-.223 0-.585.084-.892.418-.306.334-1.169 1.142-1.169 2.786s1.197 3.233 1.364 3.456c.167.223 2.355 3.596 5.706 5.042.797.344 1.42.55 1.904.704.8.254 1.529.218 2.104.132.642-.096 1.98-.81 2.259-1.592.278-.782.278-1.452.195-1.593-.084-.14-.306-.223-.64-.39z"/></svg>
          <span class="btn-text">WhatsApp Us</span>
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">&#9776;</button>
      </div>
    </div>
  `;

  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const year = "2026";
  el.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">Az<span style="color:var(--gold-light)">é</span>le</div>
          <p style="max-width:280px; font-size:14px;">Everyday elegance rooted in tradition. Handmade Kundan and everyday jewellery, crafted with love.</p>
        </div>
        <div>
          <h5>Shop</h5>
          <ul class="footer-links">
            <li><a href="shop.html">All Jewellery</a></li>
            <li><a href="shop.html?cat=necklaces">Necklaces &amp; Chokers</a></li>
            <li><a href="shop.html?cat=earrings">Earrings</a></li>
            <li><a href="shop.html?cat=rings">Rings</a></li>
            <li><a href="everyday-edit.html">Everyday Edit</a></li>
          </ul>
        </div>
        <div>
          <h5>About</h5>
          <ul class="footer-links">
            <li><a href="about.html">Our Story</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5>Get In Touch</h5>
          <ul class="footer-links">
            <li><a href="${whatsappLink('Hi Azéle! I have a question about your jewellery.')}" target="_blank" rel="noopener">WhatsApp: 8081482055</a></li>
            <li><a href="https://instagram.com/azele.lifestyle" target="_blank" rel="noopener">Instagram: @azele.lifestyle</a></li>
            <li><a href="mailto:azele.care@gmail.com">azele.care@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${year} Azéle. All rights reserved.</span>
        <span>Handcrafted with love, made for every moment.</span>
      </div>
    </div>
  `;
}

function renderWhatsappFloat() {
  const el = document.createElement("div");
  el.innerHTML = `
    <a class="wa-float" href="${whatsappLink('Hi Azéle! I have a question about your jewellery.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32"><path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.615 4.66 1.784 6.687L2.667 29.333l6.82-1.789a13.26 13.26 0 0 0 6.513 1.72h.006c7.363 0 13.333-5.97 13.333-13.334 0-3.563-1.387-6.912-3.906-9.428a13.24 13.24 0 0 0-9.432-3.902zm0 24.4h-.005a11.05 11.05 0 0 1-5.634-1.542l-.404-.24-4.048 1.062 1.081-3.945-.263-.405a11.04 11.04 0 0 1-1.694-5.897c0-6.111 4.973-11.083 11.089-11.083 2.963 0 5.747 1.154 7.84 3.249a11.02 11.02 0 0 1 3.246 7.845c0 6.111-4.972 11.083-11.088 11.083l-.001-.127zm6.083-8.303c-.334-.167-1.98-.978-2.287-1.09-.307-.111-.53-.167-.752.167-.223.334-.864 1.09-1.06 1.313-.195.223-.39.25-.724.084-.334-.167-1.412-.52-2.69-1.66-.995-.887-1.667-1.983-1.861-2.317-.195-.334-.02-.514.147-.68.15-.15.334-.39.5-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.084-.167-.752-1.812-1.03-2.483-.271-.652-.547-.564-.752-.574l-.64-.012c-.223 0-.585.084-.892.418-.306.334-1.169 1.142-1.169 2.786s1.197 3.233 1.364 3.456c.167.223 2.355 3.596 5.706 5.042.797.344 1.42.55 1.904.704.8.254 1.529.218 2.104.132.642-.096 1.98-.81 2.259-1.592.278-.782.278-1.452.195-1.593-.084-.14-.306-.223-.64-.39z"/></svg>
    </a>
  `;
  document.body.appendChild(el.firstElementChild);
}

document.addEventListener("DOMContentLoaded", () => {
  renderWhatsappFloat();

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (!header) return;
  });
});
