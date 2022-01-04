import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function MyEvent() {
  return (
    <Layout>
      <h1>My Event</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => {
    params: {
      slug: evt.slug;
    }
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const evt = await res.json();

  return {
    props: { evt: evt[0] },
    revalidate: 1,
  };
}
