// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.smileykyleerealtor.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.smileykyleerealtor.com/","title_tag":"Senior Home Selling Pasadena | SmileyKyleeRealtor","meta_description":"Senior citizen Realtor offering Pasadena real estate services, smooth selling process for seniors, and support for senior sellers ready to sell their homes."},{"page_url":"https://www.smileykyleerealtor.com/book-online","title_tag":"Support for Senior Sellers Services | SmileyKylee","meta_description":"Book senior-focused Pasadena real estate services, chair yoga, coffee meetups, and senior home assistance to support seniors preparing to sell their homes."},{"page_url":"https://www.smileykyleerealtor.com/blog","title_tag":"Home Value Guide Seniors & Tips | SmileyKyleeRealtor","meta_description":"Blog with Home Value Guide for Seniors, smooth selling process tips, steps to help senior parents move, and aging in place insights in Pasadena."},{"page_url":"https://www.smileykyleerealtor.com/post/top-tips-for-seniors-selling-their-homes","title_tag":"Selling Homes Seniors: Top Tips | SmileyKyleeRealtor","meta_description":"Top tips for Selling Homes Seniors, including how to prepare a home for downsizing and a move, pricing, marketing, and support for senior sellers."},{"page_url":"https://www.smileykyleerealtor.com/post/maximizing-home-value-a-guide-for-seniors","title_tag":"Home Value Guide Seniors Pasadena | SmileyKylee","meta_description":"Maximizing Home Value Guide for Seniors with simple upgrades, safety, and aging in place realtor advice to support senior home selling in Pasadena."},{"page_url":"https://www.smileykyleerealtor.com/post/smooth-home-selling-process-for-senior-citizens","title_tag":"Smooth Selling Process Seniors | SmileyKyleeRealtor","meta_description":"Smooth Selling Process for Seniors, from decluttering to choosing a Senior Citizen Realtor and Pasadena real estate partner who supports senior sellers."},{"page_url":"https://www.smileykyleerealtor.com/booking-calendar/chair-yoga-at-home","title_tag":"Yoga Realtor Chair Yoga for Seniors | SmileyKylee","meta_description":"Chair yoga at home with a happy Yoga Realtor who supports senior mobility, aging in place, and stress-free senior home selling and downsizing."},{"page_url":"https://www.smileykyleerealtor.com/booking-calendar/community-coffee-klatch-meetup","title_tag":"Real Estate Partner Pasadena Meetup | SmileyKylee","meta_description":"Join a friendly community coffee klatch with a Real Estate Partner in Pasadena to discuss selling homes for seniors, aging in place, and downsizing."},{"page_url":"https://www.smileykyleerealtor.com/booking-calendar/senior-grab-bar-installation-consult-1","title_tag":"Senior Home Assistance Pasadena | SmileyKylee","meta_description":"Book a Senior Grab Bar Installation consult for safe aging in place, mobility support, and senior home assistance in Pasadena before selling or downsizing."}],"keywords":["Senior Home Selling Pasadena","Real Estate Partner Pasadena","Home Value Guide Seniors","Smooth Selling Process Seniors","Senior Citizen Realtor","Pasadena Real Estate Services","Selling Homes Seniors","Support for Senior Sellers","Senior Home Assistance Pasadena","Trustworthy Realtor Pasadena","SRES certified realtor in Pasadena","Downsizing homes for sale in Pasadena","Wheelchair accessible homes in Pasadena","Homes in Pasadena with first floor primary bedroom","How to prepare a home for downsizing and a move","What are the best ways to age in place in Pasadena","Steps to help senior parents move","SmileyKyleeRealtor","Grad handle install for seniors","Out of state real estate relocation","Virtual home tours","How to choose a real estate agent","Mobility","Ranch homes","Single story homes in the hills","Happy realtor","SmileyKylee","Sell my home in Pasadena","Best buyers agent in Pasadena, California","Real estate professionals who work with seniors","Yoga realtor","Aging in place realtor"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://www.smileykyleerealtor.com/#realestateagent",
  "name": "Smiley Kylee Realtor",
  "description": "SmileyKylee is a senior-focused real estate agent (SRES) in Pasadena, CA, prioritizing a supportive and seamless experience for senior citizens looking to sell their homes.",
  "url": "https://www.smileykyleerealtor.com/",
  "image": "https://static.wixstatic.com/media/5d097b_fde606fde630441d8a7ae7b598a40930~mv2.png/v1/fill/w_256,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5d097b_fde606fde630441d8a7ae7b598a40930~mv2.png",
  "logo": "https://static.wixstatic.com/media/5d097b_fde606fde630441d8a7ae7b598a40930~mv2.png/v1/fill/w_256,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5d097b_fde606fde630441d8a7ae7b598a40930~mv2.png",
  "telephone": "+1-818-480-1795",
  "email": "mailto:kylee.loebs@exprealty.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "888 E Walnut St",
    "addressLocality": "Pasadena",
    "addressRegion": "CA",
    "postalCode": "91101",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Pasadena"
  },
  "knowsAbout": [
    "Senior real estate specialist",
    "Selling homes for seniors",
    "Downsizing for seniors",
    "Maximizing home value for seniors",
    "Smooth home selling process for senior citizens"
  ],
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Senior-focused community services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Chair Yoga At Home",
        "itemOffered": {
          "@type": "Service",
          "name": "Chair Yoga At Home",
          "description": "At-home chair yoga session designed for seniors, focused on gentle movement and wellbeing.",
          "areaServed": {
            "@type": "City",
            "name": "Pasadena"
          }
        }
      },
      {
        "@type": "Offer",
        "name": "Community Coffee Klatch Meetup",
        "itemOffered": {
          "@type": "Service",
          "name": "Community Coffee Klatch Meetup",
          "description": "Community coffee meetup for seniors to connect and discuss their home selling journey.",
          "areaServed": {
            "@type": "City",
            "name": "Pasadena"
          }
        }
      },
      {
        "@type": "Offer",
        "name": "Senior Grab Bar Installation Consult",
        "itemOffered": {
          "@type": "Service",
          "name": "Senior Grab Bar Installation Consult",
          "description": "Consultation service to plan and assess safety grab bar installations for seniors at home.",
          "areaServed": {
            "@type": "City",
            "name": "Pasadena"
          }
        }
      }
    ]
  },
  "review": {
    "@type": "Review",
    "reviewBody": "A wonderful experience. John, 78, was thrilled with his sale. Exceptional service.",
    "author": {
      "@type": "Person",
      "name": "John"
    }
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
