# Mendoza's Painting WNC LLC: content brief

Running log of where the site's content comes from and what is still open.

## From the business card (source/business-card-front.jpg, -back.jpg)

- Name: Mendoza's Painting WNC LLC
- Tagline: Quality Painting. Lasting Impressions.
- Services: Interior & Exterior Painting, Staining, Pressure Washing
- Clients: Residential & Commercial
- Free Estimates, Fully Insured
- Phone: (828) 776-0022
- Email: alexmend04@icloud.com
- Area: Western North Carolina

## From Edwin (2026-10-08)

- Landing page only, no lead form. Contact info for estimates.
- English and Spanish.
- Insured (not "licensed"). No social media yet.
- Client has job photos but they have not been handed over. Photo slots are placeholders.
- Domain to be bought through Netlify.

## Design decisions

- Palette sampled from the card: navy `#101828`, brand blue `#1e5ea8`, white. The card photo is dim, so the blue is an estimate of the printed colour.
- Logo mark (mountains, roof, brush) was lifted from the card photo and cleaned up into `images/logo-mark.png` and a light version for dark backgrounds. The business name is live text in Montserrat, which matches the card's wordmark. Replace with the client's original logo file if they have one.
- Brush-stroke corners on the hero photo echo the card's corners. The ridge line above the contact section echoes the mountains in the logo.
- Spanish text lives in `js/main.js` (the `es` object). English is the HTML itself. Any copy change needs both.

## Drafted copy that the client has not confirmed

- Service descriptions (what each service covers) are written by us, not supplied by the client.
- "Hablamos español / We speak English" point in the Why us section assumes the client works in both languages.
- "Scheduled around your hours" in the Commercial blurb.

## Open items

- Real photos: hero, services, residential, commercial, six gallery tiles. Search `PHOTO SLOT` and `GALLERY` in index.html.
- Domain: once bought, add canonical link, absolute `og:url` / `og:image`, `url` in the JSON-LD, sitemap.xml, and the Sitemap line in robots.txt.
- Confirm phone and email as read from the card photo.
