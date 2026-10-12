(function () {
  "use strict";

  // Shared total for the homepage and notifications page.
  // The old displayed total is preserved as the one-time starting baseline.
  const API = "https://countapi.mileshilliard.com/api/v1";
  const KEY = "riht_psouvik448_total_pageviews_20261012";
  const STARTING_TOTAL = 12759;
  const output = document.getElementById("visitor-count");

  if (!output) return;

  function request(url) {
    return fetch(url, { cache: "no-store" }).then(async function (response) {
      let data = {};
      try { data = await response.json(); } catch (_) {}
      if (!response.ok) {
        const error = new Error(data.error || "Counter request failed");
        error.status = response.status;
        throw error;
      }
      return data;
    });
  }

  async function countVisit() {
    try {
      // Initialize only once. Existing counts are never reset.
      try {
        await request(API + "/get/" + KEY);
      } catch (error) {
        if (error.status !== 404) throw error;
        await request(API + "/set/" + KEY + "?value=" + STARTING_TOTAL);
      }

      // Count this actual page load, then display the server's shared total.
      const result = await request(API + "/hit/" + KEY);
      const total = Number(result.value);
      if (!Number.isFinite(total)) throw new Error("Invalid counter response");
      output.textContent = total.toLocaleString("en-IN");
    } catch (error) {
      // Keep the configured starting figure visible if the external service is unavailable.
      console.warn("RIHT visitor counter could not update:", error);
    }
  }

  countVisit();
})();