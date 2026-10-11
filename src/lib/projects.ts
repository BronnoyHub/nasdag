export type Project = {
  _id: string;
  title: string;
  customer: string;
  year?: number;
  services?: string[];
  summary: string;
  challenge?: string;
  solution?: string;
  deliveries?: string[];
  results?: string;
  image?: { url: string; alt: string };
};
export async function getProjects(): Promise<Project[]> {
  const project = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  if (!project || !dataset) return [];
  const url = new URL(
    `https://${project}.api.sanity.io/v2026-10-11/data/query/${dataset}`,
  );
  url.searchParams.set(
    "query",
    '*[_type == "project" && publicationApproved == true && !(_id in path("drafts.**"))] | order(year desc, title asc){_id,title,customer,year,services,summary,challenge,solution,deliveries,"results": select(resultsVerified == true => results),"image": heroImage{ "url": asset->url, alt }}',
  );
  const response = await fetch(url, { next: { revalidate: 60 } });
  if (!response.ok)
    throw new Error(`Portfolio request failed (${response.status})`);
  return (await response.json()).result;
}
