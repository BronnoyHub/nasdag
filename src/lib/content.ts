export type SiteContent = {
  companyName?: string;
  headline?: string;
  introduction?: string;
  services?: { _key: string; title: string; description: string }[];
  email?: string;
  phone?: string;
};
export async function getSiteContent(): Promise<SiteContent | null> {
  const project = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (!project || !dataset) return null;
  const url = new URL(
    `https://${project}.api.sanity.io/v2026-10-11/data/query/${dataset}`,
  );
  url.searchParams.set(
    "query",
    '*[_type == "siteSettings"][0]{companyName, headline, introduction, services, email, phone}',
  );
  const response = await fetch(url, { next: { revalidate: 60 } });
  if (!response.ok)
    throw new Error(`Sanity content request failed (${response.status})`);
  const data = await response.json();
  return data.result;
}
